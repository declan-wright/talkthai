const ADMIN_EMAILS = ['declanmarkwright@gmail.com'];

export const isAdmin = (email: string | null | undefined): boolean => {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
};
