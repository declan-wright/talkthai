
// Function to get the week number for a date according to ISO 8601.
function getWeekNumber(d: Date): [number, number] {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    // The result is 1-based week number
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}

export function getCurrentWeekId(): string {
    const [year, week] = getWeekNumber(new Date());
    return `${year}-${week.toString().padStart(2, '0')}`;
}

export function getPreviousWeekId(): string {
    const today = new Date();
    // Go back 7 days to ensure we are in the previous week
    const prevWeekDate = new Date(today.getTime());
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    const [year, week] = getWeekNumber(prevWeekDate);
    return `${year}-${week.toString().padStart(2, '0')}`;
}

export function getNextWeekId(): string {
    const today = new Date();
    // Go forward 7 days to ensure we are in the next week
    const nextWeekDate = new Date(today.getTime());
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    const [year, week] = getWeekNumber(nextWeekDate);
    return `${year}-${week.toString().padStart(2, '0')}`;
}

export function getTodayDateString(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function isYesterday(dateString: string): boolean {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    const [year, month, day] = dateString.split('-').map(Number);
    const activityDate = new Date(year, month - 1, day);

    return yesterday.getFullYear() === activityDate.getFullYear() &&
           yesterday.getMonth() === activityDate.getMonth() &&
           yesterday.getDate() === activityDate.getDate();
}

export function getDaysLeftInWeek(): number {
    const today = new Date();
    // ISO week starts on Monday (1) and ends on Sunday (0 or 7)
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    // Convert Sunday (0) to 7 for easier calculation
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    // Days left until Sunday (end of week)
    return 7 - isoDayOfWeek;
}
