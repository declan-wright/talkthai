// Zhuyin conversion service for Thai romanization

interface ZhuyinMapping {
  initials: { [key: string]: string };
  vowels: { [key: string]: string };
  finals: { [key: string]: string };
  tones: { [key: string]: string };
}

const zhuyinMap: ZhuyinMapping = {
  // Initial consonants
  initials: {
    // Consonant clusters (must be matched before single consonants)
    'phr': 'ㄆㄖ',  // ph + r cluster
    'bpl': 'ㄅㄌ',
    'bpr': 'ㄅㄖ',
    'bp': 'ㄅ',
    'dtr': 'ㄉㄖ',
    'dt': 'ㄉ',
    'br': 'ㄅㄖ',   // ADDED: b + r cluster (บร)
    'tr': 'ㄉㄖ',   // ADDED: t + r cluster (ตร)
    'pr': 'ㄆㄖ',   // ADDED: p + r cluster (ปร)
    'kr': 'ㄍㄖ',   // ADDED: k + r cluster (กร)
    'gr': 'ㄍㄖ',   // ADDED: g + r cluster
    'kl': 'ㄍㄌ',   // ADDED: k + l cluster (กล)
    'pl': 'ㄆㄌ',   // ADDED: p + l cluster (ปล)
    'bl': 'ㄅㄌ',   // ADDED: b + l cluster (บล)
    'gl': 'ㄍㄌ',
    // Aspirated consonants with clusters (must come before single aspirated!)
    'khw': 'ㄎ',   // ADDED: kh + w cluster (ขว) - w becomes part of vowel
    'khr': 'ㄎㄖ',  // ADDED: kh + r cluster (คร)
    'thr': 'ㄊㄖ',  // ADDED: th + r cluster (ทร)
    // 'phr': duplicate removed - already defined at line 14
    'khl': 'ㄎㄌ',  // ADDED: kh + l cluster (คล)
    // Aspirated consonants - FIXED: ch is ㄑ (aspirated), not ㄐ (unaspirated)
    'kh': 'ㄎ',
    'ch': 'ㄑ',  // FIXED: aspirated 'ch' (ช) → ㄑ
    'th': 'ㄊ',
    'ph': 'ㄆ',
    // Regular consonants
    'k': 'ㄍ',
    'ŋ': 'ㄥ',
    'ng': 'ㄥ',
    't': 'ㄉ',
    'p': 'ㄅ',
    's': 'ㄙ',
    'h': 'ㄏ',
    'f': 'ㄈ',
    'l': 'ㄌ',
    'r': 'ㄖ',
    'm': 'ㄇ',
    'n': 'ㄋ',
    'w': 'ㄨ',
    'y': 'ㄧ',
    'j': 'ㄐ',  // unaspirated 'j' sound
    'd': 'ㄉ',
    'b': 'ㄅ',
    'g': 'ㄍ',
    '': '' // no initial
  },

  // Vowels and vowel+final combinations (match longest first)
  // Note: Some entries include finals for compound sounds in Zhuyin
  vowels: {
    // Compound vowel+final with -ng
    'ʉang': 'ㄜㄤ',   // FIXED: ʉ + ang final (was Xㄤ)
    'ɯang': 'ㄜㄤ',   // FIXED: ɯ + ang final (was Xㄤ)
    'iang': 'ㄧㄤ',  // i + ang final
    'uang': 'ㄨㄤ',  // u + ang final
    'aang': 'ㄤ',    // aa + ng final
    'oong': 'さㄥ',   // oo + ng
    'ɔɔng': 'さㄥ',   // ɔɔ + ng
    'uung': 'ㄨㄥ',  // uu + ng
    'iing': 'ㄧㄥ',  // ii + ng
    'eeng': 'ㄥ',    // ee + ng
    'ʉʉng': 'ㄜㄥ',   // FIXED: ʉʉ + ng (was Xㄥ)
    'ɯɯng': 'ㄜㄥ',   // FIXED: ɯɯ + ng (was Xㄥ)
    // ADDED: ɛ vowel combinations with -ng
    'ɛɛng': 'ㄝㄥ',   // ɛɛ + ng (แ- + ng)
    // Compound vowel+final with -n (NOT -m, those are separate!)
    'ʉan': 'ㄜㄢ',   // FIXED: ʉ + an final (was Xㄢ)
    'ɯan': 'ㄜㄢ',   // FIXED: ɯ + an final (was Xㄢ)
    'ian': 'ㄧㄢ',  // i + an final
    'uan': 'ㄨㄢ',  // u + an final
    'aan': 'ㄢ',    // long aa + n final (NOT -m!)
    'ɔɔn': 'さㄋ',   // ɔɔ + n
    'oon': 'さㄋ',   // oo + n
    'uun': 'ㄨㄣ',  // uu + n
    'iin': 'ㄧㄣ',  // ii + n
    'ʉʉn': 'ㄜㄣ',   // FIXED: ʉʉ + n (was Xㄣ)
    'ɯɯn': 'ㄜㄣ',   // FIXED: ɯɯ + n (was Xㄣ)
    // ADDED: ɛ vowel combinations with -n
    'ɛɛn': 'ㄝㄣ',   // ɛɛ + n (แ- + n)
    // Special vowel combinations
    'ʉa': 'ㄜㄚ',    // FIXED: ʉ + a Thai เ-ือ vowel (was Xㄚ)
    'ɯa': 'ㄜㄚ',    // FIXED: ɯ + a (was Xㄚ)
    'eua': 'ㄜㄚ',   // ADDED: eua (Thai เ-ือ romanized)
    'iao': 'ㄧㄠ',  // iao as complete unit
    'uao': 'ㄨㄠ',  // uao combination
    'aao': 'ㄠ',    // long aa + o, as in khâao (rice)
    'aai': 'ㄞ',    // long aa + i, as in máai (fruit)
    // ADDED: ɛ vowel diphthongs
    'ɛɛo': 'ㄝㄛ',   // ɛɛ + o (แ- + o)
    // Long vowels
    'əə': 'ㄜ',
    'ɔɔ': 'さ',
    'ɛɛ': 'ㄝ',     // ADDED: ɛɛ (Thai แ- long vowel)
    'eeo': 'ㄜㄛ',
    'oo': 'さ',
    'aa': 'ㄚ',
    'ii': 'ㄧ',
    'uu': 'ㄨ',
    'ee': 'ㄜ',
    'ʉʉ': 'ㄜ',    // FIXED: ʉʉ (Thai เ-ือ long) → ㄜ
    'ɯɯ': 'ㄜ',    // FIXED: ɯɯ → ㄜ
    // 'ʉa': duplicate removed - already defined at line 95
    // 'ɯa': duplicate removed - already defined at line 96
    'ue': 'ㄜ',     // FIXED: ue → ㄜ
    // Diphthongs with i
    'ɔɔi': 'さㄧ',  // ɔɔ + i (long "aw" + i)
    'ooi': 'さㄧ',  // oo + i
    'ɔi': 'さㄧ',   // ɔ + i (short "aw" + i)
    'oi': 'ㄛㄧ',   // o + i (short "oh" + i, as in ròi)
    'uai': 'ㄨㄞ',  // ADDED: u + ai diphthong (as in chûai, dûai)
    'ai': 'ㄞ',
    'ia': 'ㄧㄚ',
    'uua': 'ㄨㄚ',  // ADDED: long uu + a (as in ครัว khruua = family)
    'ua': 'ㄨㄚ',
    // ADDED: w-glide vowels (when w follows consonant, e.g., khwaa, khwaam)
    'waam': 'ㄨㄚㄇ', // w + aam (e.g., khwaam)
    'waa': 'ㄨㄚ',   // w + aa (e.g., khwaa)
    // ADDED: ɛ vowel combinations
    'ɛɛp': 'ㄝㄅ',   // ɛɛ + p final (แ- + p)
    'ɛɛt': 'ㄝㄉ',   // ɛɛ + t final (แ- + t)
    'ɛɛk': 'ㄝㄍ',   // ɛɛ + k final (แ- + k)
    // ADDED: 'ae' and 'oe' vowels
    'aae': 'ㄝ',    // แอ sound (as in แฟ fae = coffee)
    'ae': 'ㄝ',     // แอ sound (short version)
    'oe': 'ㄜ',     // เอ sound (as in เดิน doen = walk)
    // Diphthongs with o
    'ao': 'ㄠ',
    // Short vowels with -ng finals
    'aeng': 'ㄥ',   // ADDED: ae + ng (as in แข็ง khaeng = ice) - maps to just ㄥ
    'oeng': 'ㄜㄥ',  // ADDED: oe + ng
    'ang': 'ㄤ',    // a + ng final
    'eng': 'ㄥ',    // e + ng (schwa + ng, NOT "eh" sound!)
    'ing': 'ㄧㄥ',  // i + ng
    'ung': 'ㄨㄥ',  // u + ng
    'ʉng': 'ㄜㄥ',   // FIXED: ʉ + ng → ㄜㄥ (was Xㄥ)
    'ɯng': 'ㄜㄥ',   // FIXED: ɯ + ng → ㄜㄥ (was Xㄥ)
    // Short vowels with -n finals ONLY (NOT -m!)
    'oen': 'ㄜㄣ',   // ADDED: oe + n
    'aen': 'ㄝㄣ',   // ADDED: ae + n
    'an': 'ㄢ',     // a + n final
    'en': 'ㄣ',     // e + n final (NOT the same as "eh" vowel!)
    'in': 'ㄧㄣ',   // i + n
    'un': 'ㄨㄣ',   // u + n
    'ʉn': 'ㄜㄣ',    // FIXED: ʉ + n → ㄜㄣ (was Xㄣ)
    'ɯn': 'ㄜㄣ',    // FIXED: ɯ + n → ㄜㄣ (was Xㄣ)
    // Single vowels (must come after compound forms)
    'ɔ': 'さ',     // "aw" sound (like "law")
    'ə': 'ㄜ',     // schwa/"uh" sound
    'ʉ': 'ㄜ',      // FIXED: ʉ (U+0289) → ㄜ (was X)
    'ɯ': 'ㄜ',      // FIXED: ɯ (U+026F) → ㄜ (was X)
    'ɛ': 'ㄝ',      // ADDED: ɛ (U+025B) Thai แ- vowel
    'a': 'ㄚ',
    'i': 'ㄧ',
    'u': 'ㄨ',
    'e': 'ㄝ',     // "eh" sound (like "bet") - FIXED from ㄜ!
    'o': 'ㄛ',     // "oh" sound (like "go")
  },

  // Final consonants
  finals: {
    'p': 'ㄅ',
    't': 'ㄉ',
    'k': 'ㄍ',
    'm': 'ㄇ',
    'n': 'ㄋ',
    'ŋ': 'ㄥ',
    'ng': 'ㄥ',
    'w': 'ㄨ',
    'y': 'ㄧ',
    '': '' // no final
  },

  // Tone marks - Following original documentation strictly
  tones: {
    'â': 'ˋ',  // Falling tone → ˋ (Mandarin tone 4)
    'ǎ': 'ˊ',  // Rising tone → ˊ (Mandarin tone 2)
    'á': '',   // High tone → no mark (Mandarin tone 1)
    'à': 'ˇ',  // Low tone → ˇ (Mandarin tone 3)
    '': '˙'    // Mid tone → ˙ (neutral)
  }
};

/**
 * Extract tone from a syllable by finding diacritic marks
 * Handles both combining diacritics and precomposed Unicode characters
 */
function extractTone(syllable: string): { cleanSyllable: string; toneMark: string } {
  // Map of precomposed characters to their base form and tone
  const precomposedMap: { [key: string]: { base: string; tone: string } } = {
    // Falling tone (â)
    'â': { base: 'a', tone: 'â' },
    'ê': { base: 'e', tone: 'â' },
    'î': { base: 'i', tone: 'â' },
    'ô': { base: 'o', tone: 'â' },
    'û': { base: 'u', tone: 'â' },
    'ə̂': { base: 'ə', tone: 'â' },
    'ɔ̂': { base: 'ɔ', tone: 'â' },
    'ɯ̂': { base: 'ɯ', tone: 'â' },
    'ʉ̂': { base: 'ʉ', tone: 'â' },
    'ɛ̂': { base: 'ɛ', tone: 'â' },
    // Rising tone (ǎ) - INCLUDES BREVE FORMS (ŏ, ă)
    'ǎ': { base: 'a', tone: 'ǎ' },
    'ě': { base: 'e', tone: 'ǎ' },
    'ǐ': { base: 'i', tone: 'ǎ' },
    'ǒ': { base: 'o', tone: 'ǎ' },
    'ǔ': { base: 'u', tone: 'ǎ' },
    'ə̌': { base: 'ə', tone: 'ǎ' },
    'ɔ̌': { base: 'ɔ', tone: 'ǎ' },
    'ɯ̌': { base: 'ɯ', tone: 'ǎ' },
    'ʉ̌': { base: 'ʉ', tone: 'ǎ' },
    'ɛ̌': { base: 'ɛ', tone: 'ǎ' },
    // ADDED: Breve forms (also rising tone in your system!)
    'ŏ': { base: 'o', tone: 'ǎ' },  // o with breve = rising tone
    'ă': { base: 'a', tone: 'ǎ' },  // a with breve = rising tone
    // High tone (á)
    'á': { base: 'a', tone: 'á' },
    'é': { base: 'e', tone: 'á' },
    'í': { base: 'i', tone: 'á' },
    'ó': { base: 'o', tone: 'á' },
    'ú': { base: 'u', tone: 'á' },
    'ə́': { base: 'ə', tone: 'á' },
    'ɔ́': { base: 'ɔ', tone: 'á' },
    'ɯ́': { base: 'ɯ', tone: 'á' },
    'ʉ́': { base: 'ʉ', tone: 'á' },
    'ɛ́': { base: 'ɛ', tone: 'á' },
    // Low tone (à)
    'à': { base: 'a', tone: 'à' },
    'è': { base: 'e', tone: 'à' },
    'ì': { base: 'i', tone: 'à' },
    'ò': { base: 'o', tone: 'à' },
    'ù': { base: 'u', tone: 'à' },
    'ə̀': { base: 'ə', tone: 'à' },
    'ɔ̀': { base: 'ɔ', tone: 'à' },
    'ɯ̀': { base: 'ɯ', tone: 'à' },
    'ʉ̀': { base: 'ʉ', tone: 'à' },
    'ɛ̀': { base: 'ɛ', tone: 'à' },
  };

  // Check for precomposed characters
  for (const [precomposed, { base, tone }] of Object.entries(precomposedMap)) {
    if (syllable.includes(precomposed)) {
      const cleanSyllable = syllable.replace(precomposed, base);
      return { cleanSyllable, toneMark: tone };
    }
  }

  // Fallback: check for combining diacritics (handles ʉ + combining marks)
  // ʉ is U+0289, ɛ is U+025B, combining marks are U+0300-U+036F
  const tonePatterns = [
    { pattern: /[aeiouəɔɯʉɛ]\u0302/g, mark: 'â' },  // combining circumflex
    { pattern: /[aeiouəɔɯʉɛ]\u030C/g, mark: 'ǎ' },  // combining caron
    { pattern: /[aeiouəɔɯʉɛ]\u0301/g, mark: 'á' },  // combining acute
    { pattern: /[aeiouəɔɯʉɛ]\u0300/g, mark: 'à' },  // combining grave
  ];

  for (const { pattern, mark } of tonePatterns) {
    if (pattern.test(syllable)) {
      const cleanSyllable = syllable.replace(pattern, (match) => match[0]);
      return { cleanSyllable, toneMark: mark };
    }
  }

  return { cleanSyllable: syllable, toneMark: '' };
}

/**
 * Parse a syllable into initial, vowel, final, and tone
 */
function parseSyllable(syllable: string): { initial: string; vowel: string; final: string; tone: string } {
  const { cleanSyllable, toneMark } = extractTone(syllable);

  // Try to match initial consonant (longest first - IMPORTANT: order matters!)
  const initialPatterns = [
    // 3-letter clusters first
    'khw', 'khr', 'thr', 'phr', 'khl',
    // 3-letter special clusters
    'bpl', 'bpr', 'dtr',
    // 2-letter clusters
    'bp', 'dt', 'br', 'tr', 'pr', 'kr', 'gr', 'kl', 'pl', 'bl', 'gl',
    // 2-letter aspirated
    'kh', 'th', 'ph', 'ch', 'ng',
    // Single consonants
    'k', 't', 'p', 's', 'h', 'f', 'l', 'r', 'm', 'n', 'w', 'y', 'j', 'd', 'b', 'g', 'ŋ'
  ];
  let initial = '';
  let remaining = cleanSyllable;

  for (const pattern of initialPatterns) {
    if (remaining.startsWith(pattern)) {
      initial = pattern;
      remaining = remaining.slice(pattern.length);
      break;
    }
  }

  // Try to match vowel+final combinations (longest first - order is critical!)
  const vowelPatterns = [
    // Compound vowel+final with -ng (must come before -n versions!)
    'ʉang', 'ɯang', 'iang', 'uang', 'aang', 'ɔɔng', 'oong', 'uung', 'iing', 'eeng', 'ʉʉng', 'ɯɯng', 'ɛɛng',
    // Compound vowel+final with -n (NOT -m!)
    'ʉan', 'ɯan', 'ian', 'uan', 'aan', 'ɔɔn', 'oon', 'uun', 'iin', 'ʉʉn', 'ɯɯn', 'ɛɛn',
    // Compound vowel+final with -m
    'waam', // w-glide + aam (must come before waa!)
    // Special combinations
    'ʉa', 'ɯa', 'eua', 'iao', 'uao', 'aao', 'aai', 'ɛɛo',
    // Long vowels (ɛɛ before ɛɛp/ɛɛt/ɛɛk)
    'əə', 'ɔɔ', 'ɛɛ', 'eeo', 'oo', 'aa', 'ii', 'ʉʉ', 'ɯɯ', 'ue',
    // Diphthongs and combinations (must match before plain long vowels!)
    'ɔɔi', 'ooi', 'ɔi', 'oi', 'uai', 'ai', 'ia', 'uua', 'ua',
    // w-glide vowels (must come before plain aa!)
    'waa',
    // ɛ vowel with final consonants
    'ɛɛp', 'ɛɛt', 'ɛɛk',
    // Plain long vowels (uu and ee come AFTER their diphthong versions)
    'uu', 'ee',
    // Diphthongs with o
    'ao',
    // Short vowels with -ng final (must come before -n!)
    'aeng', 'oeng', 'ang', 'eng', 'ing', 'ung', 'ʉng', 'ɯng',
    // Short vowels with -n finals ONLY (MUST come before standalone ae/oe!)
    'oen', 'aen', 'an', 'en', 'in', 'un', 'ʉn', 'ɯn', 'eun',
    // ADDED: ae/oe vowels (MUST come after oen/aen!)
    'aae', 'ae', 'oe',
    // Single vowels (last - MUST match after all compounds!)
    'ɔ', 'ə', 'ʉ', 'ɯ', 'ɛ', 'a', 'i', 'u', 'e', 'o'
  ];
  let vowel = '';
  let afterVowel = remaining;

  for (const pattern of vowelPatterns) {
    const idx = remaining.indexOf(pattern);
    if (idx !== -1) {
      vowel = pattern;
      // IMPORTANT: Include any consonants that came BEFORE the vowel as the vowel prefix
      // (this shouldn't normally happen if initials are matched correctly)
      const beforeVowel = remaining.slice(0, idx);
      afterVowel = remaining.slice(idx + pattern.length);

      // If there's something before the vowel, it's likely a missed initial or part of a complex vowel
      if (beforeVowel) {
        // This is likely an error - vowel should start at position 0 after initial is removed
        // But to be safe, we'll include it in the vowel pattern
        vowel = beforeVowel + vowel;
      }
      break;
    }
  }

  // Extract the final consonant - only valid finals at the END
  // Valid Thai finals: p, t, k, m, n, ng/ŋ, w, y
  const validFinals = ['ng', 'ŋ', 'p', 't', 'k', 'm', 'n', 'w', 'y'];
  let final = '';

  // Match from the end of the string (longest first for 'ng')
  for (const finalPattern of validFinals) {
    if (afterVowel.endsWith(finalPattern)) {
      final = finalPattern;
      break;
    }
  }

  return { initial, vowel, final, tone: toneMark };
}

/**
 * Convert a single syllable to Zhuyin
 */
function syllableToZhuyin(syllable: string): string {
  if (!syllable) return '';

  const { initial, vowel, final, tone } = parseSyllable(syllable);

  let zhuyinInitial = zhuyinMap.initials[initial] || '';
  const zhuyinVowel = zhuyinMap.vowels[vowel] || vowel;
  const zhuyinFinal = zhuyinMap.finals[final] || '';
  // Use 'in' operator to check key existence, not truthiness (since '' is valid)
  const zhuyinTone = tone in zhuyinMap.tones ? zhuyinMap.tones[tone] : zhuyinMap.tones[''];

  // FIXED: Avoid double ㄧ when initial is 'y' (ㄧ) and vowel starts with ㄧ
  // e.g., "yin" → y(ㄧ) + in(ㄧㄣ) should become ㄧㄣ, not ㄧㄧㄣ
  if (zhuyinInitial === 'ㄧ' && zhuyinVowel.startsWith('ㄧ')) {
    zhuyinInitial = '';
  }
  // Same for 'w' (ㄨ) - avoid double ㄨ
  if (zhuyinInitial === 'ㄨ' && zhuyinVowel.startsWith('ㄨ')) {
    zhuyinInitial = '';
  }

  return zhuyinInitial + zhuyinVowel + zhuyinFinal + zhuyinTone;
}

/**
 * Convert romanized Thai text to Zhuyin
 * @param romanization - Thai text in romanization (e.g., "sà-wàt-dii kráp")
 * @returns Zhuyin representation
 */
export function romanizationToZhuyin(romanization: string): string {
  if (!romanization) return '';

  // Split by spaces to preserve word boundaries
  const words = romanization.split(' ');

  return words.map(word => {
    // Special handling for slash (used in "khráp / khâ" style entries)
    if (word === '/') return '/';

    // Split each word by hyphens to get syllables
    const syllables = word.split('-');
    return syllables.map(syllableToZhuyin).join('');
  }).join(' ');
}

/**
 * Check if Zhuyin is enabled in localStorage
 */
export function isZhuyinEnabled(): boolean {
  try {
    return localStorage.getItem('zhuyinEnabled') === 'true';
  } catch {
    return false;
  }
}

/**
 * Set Zhuyin enabled state in localStorage
 */
export function setZhuyinEnabled(enabled: boolean): void {
  try {
    localStorage.setItem('zhuyinEnabled', enabled.toString());
  } catch (error) {
    console.error('Failed to save Zhuyin preference:', error);
  }
}
