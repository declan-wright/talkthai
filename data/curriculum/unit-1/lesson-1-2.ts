import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_2: Lesson = {
    id: "1.2",
    title: {
        [LanguageCode.ENGLISH]: "Numbers 0–100",
        [LanguageCode.FRENCH]: "Nombres 0–100",
        [LanguageCode.PORTUGUESE]: "Números 0–100",
        [LanguageCode.MANDARIN]: "數字 0–100",
    },
    vocabulary: [
        { thai: "ศูนย์", phonetic: "sǔun", translations: { [LanguageCode.ENGLISH]: "0 (zero)", [LanguageCode.FRENCH]: "0 (zéro)", [LanguageCode.PORTUGUESE]: "0 (zero)", [LanguageCode.MANDARIN]: "0 零" } },
        { thai: "หนึ่ง", phonetic: "nʉ̀ng", translations: { [LanguageCode.ENGLISH]: "1 (one)", [LanguageCode.FRENCH]: "1 (un)", [LanguageCode.PORTUGUESE]: "1 (um)", [LanguageCode.MANDARIN]: "1 一" } },
        { thai: "สอง", phonetic: "sǎawng", translations: { [LanguageCode.ENGLISH]: "2 (two)", [LanguageCode.FRENCH]: "2 (deux)", [LanguageCode.PORTUGUESE]: "2 (dois)", [LanguageCode.MANDARIN]: "2 二" } },
        { thai: "สาม", phonetic: "sǎam", translations: { [LanguageCode.ENGLISH]: "3 (three)", [LanguageCode.FRENCH]: "3 (trois)", [LanguageCode.PORTUGUESE]: "3 (três)", [LanguageCode.MANDARIN]: "3 三" } },
        { thai: "สี่", phonetic: "sìi", translations: { [LanguageCode.ENGLISH]: "4 (four)", [LanguageCode.FRENCH]: "4 (quatre)", [LanguageCode.PORTUGUESE]: "4 (quatro)", [LanguageCode.MANDARIN]: "4 四" } },
        { thai: "ห้า", phonetic: "hâa", translations: { [LanguageCode.ENGLISH]: "5 (five)", [LanguageCode.FRENCH]: "5 (cinq)", [LanguageCode.PORTUGUESE]: "5 (cinco)", [LanguageCode.MANDARIN]: "5 五" } },
        { thai: "หก", phonetic: "hòk", translations: { [LanguageCode.ENGLISH]: "6 (six)", [LanguageCode.FRENCH]: "6 (six)", [LanguageCode.PORTUGUESE]: "6 (seis)", [LanguageCode.MANDARIN]: "6 六" } },
        { thai: "เจ็ด", phonetic: "jèt", translations: { [LanguageCode.ENGLISH]: "7 (seven)", [LanguageCode.FRENCH]: "7 (sept)", [LanguageCode.PORTUGUESE]: "7 (sete)", [LanguageCode.MANDARIN]: "7 七" } },
        { thai: "แปด", phonetic: "bpàet", translations: { [LanguageCode.ENGLISH]: "8 (eight)", [LanguageCode.FRENCH]: "8 (huit)", [LanguageCode.PORTUGUESE]: "8 (oito)", [LanguageCode.MANDARIN]: "8 八" } },
        { thai: "เก้า", phonetic: "gâo", translations: { [LanguageCode.ENGLISH]: "9 (nine)", [LanguageCode.FRENCH]: "9 (neuf)", [LanguageCode.PORTUGUESE]: "9 (nove)", [LanguageCode.MANDARIN]: "9 九" } },
        { thai: "สิบ", phonetic: "sìp", translations: { [LanguageCode.ENGLISH]: "10 (ten)", [LanguageCode.FRENCH]: "10 (dix)", [LanguageCode.PORTUGUESE]: "10 (dez)", [LanguageCode.MANDARIN]: "10 十" } },
        { thai: "ยี่", phonetic: "yîi", translations: { [LanguageCode.ENGLISH]: "'yi' (20s prefix)", [LanguageCode.FRENCH]: "\"yi\" (préfixe des 20)", [LanguageCode.PORTUGUESE]: "'yi' (prefixo de 20)", [LanguageCode.MANDARIN]: "二十系列開頭 'ยี่'" } },
        { thai: "เอ็ด", phonetic: "èt", translations: { [LanguageCode.ENGLISH]: "-et (used in 11/21/31)", [LanguageCode.FRENCH]: "-et (utilisé en 11/21/31)", [LanguageCode.PORTUGUESE]: "-et (usado em 11/21/31)", [LanguageCode.MANDARIN]: "-เอ็ด（用於11/21/31）" } },
        { thai: "ยี่สิบ", phonetic: "yîi-sìp", translations: { [LanguageCode.ENGLISH]: "20 (twenty)", [LanguageCode.FRENCH]: "20 (vingt)", [LanguageCode.PORTUGUESE]: "20 (vinte)", [LanguageCode.MANDARIN]: "20 二十" } },
        { thai: "สามสิบ", phonetic: "sǎam-sìp", translations: { [LanguageCode.ENGLISH]: "30 (thirty)", [LanguageCode.FRENCH]: "30 (trente)", [LanguageCode.PORTUGUESE]: "30 (trinta)", [LanguageCode.MANDARIN]: "30 三十" } },
        { thai: "สี่สิบ", phonetic: "sìi-sìp", translations: { [LanguageCode.ENGLISH]: "40 (forty)", [LanguageCode.FRENCH]: "40 (quarante)", [LanguageCode.PORTUGUESE]: "40 (quarenta)", [LanguageCode.MANDARIN]: "40 四十" } },
        { thai: "ห้าสิบ", phonetic: "hâa-sìp", translations: { [LanguageCode.ENGLISH]: "50 (fifty)", [LanguageCode.FRENCH]: "50 (cinquante)", [LanguageCode.PORTUGUESE]: "50 (cinquenta)", [LanguageCode.MANDARIN]: "50 五十" } },
        { thai: "หกสิบ", phonetic: "hòk-sìp", translations: { [LanguageCode.ENGLISH]: "60 (sixty)", [LanguageCode.FRENCH]: "60 (soixante)", [LanguageCode.PORTUGUESE]: "60 (sessenta)", [LanguageCode.MANDARIN]: "60 六十" } },
        { thai: "เจ็ดสิบ", phonetic: "jèt-sìp", translations: { [LanguageCode.ENGLISH]: "70 (seventy)", [LanguageCode.FRENCH]: "70 (soixante-dix)", [LanguageCode.PORTUGUESE]: "70 (setenta)", [LanguageCode.MANDARIN]: "70 七十" } },
        { thai: "แปดสิบ", phonetic: "bpàet-sìp", translations: { [LanguageCode.ENGLISH]: "80 (eighty)", [LanguageCode.FRENCH]: "80 (quatre-vingts)", [LanguageCode.PORTUGUESE]: "80 (oitenta)", [LanguageCode.MANDARIN]: "80 八十" } },
        { thai: "เก้าสิบ", phonetic: "gâo-sìp", translations: { [LanguageCode.ENGLISH]: "90 (ninety)", [LanguageCode.FRENCH]: "90 (quatre-vingt-dix)", [LanguageCode.PORTUGUESE]: "90 (noventa)", [LanguageCode.MANDARIN]: "90 九十" } },
        { thai: "ร้อย", phonetic: "rɔ́ɔi", translations: { [LanguageCode.ENGLISH]: "100 (hundred)", [LanguageCode.FRENCH]: "100 (cent)", [LanguageCode.PORTUGUESE]: "100 (cem)", [LanguageCode.MANDARIN]: "100 一百" } },
        { thai: "บาท", phonetic: "bàat", translations: { [LanguageCode.ENGLISH]: "Baht (฿)", [LanguageCode.FRENCH]: "Baht (฿)", [LanguageCode.PORTUGUESE]: "Baht (฿)", [LanguageCode.MANDARIN]: "銖（泰銖）" } },
        { thai: "คน", phonetic: "khon", translations: { [LanguageCode.ENGLISH]: "Classifier: person", [LanguageCode.FRENCH]: "Classificateur : personne", [LanguageCode.PORTUGUESE]: "Classificador: pessoa", [LanguageCode.MANDARIN]: "量詞：人" } },
        { thai: "อัน", phonetic: "an", translations: { [LanguageCode.ENGLISH]: "Classifier: thing", [LanguageCode.FRENCH]: "Classificateur : chose", [LanguageCode.PORTUGUESE]: "Classificador: coisa", [LanguageCode.MANDARIN]: "量詞：個/件" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Understanding Thai Numbers: เอ็ด (et) and ยี่ (yi)",
                [LanguageCode.FRENCH]: "Comprendre les nombres thaïs : เอ็ด (et) et ยี่ (yi)",
                [LanguageCode.PORTUGUESE]: "Entendendo os Números Tailandeses: เอ็ด (et) e ยี่ (yi)",
                [LanguageCode.MANDARIN]: "理解泰語數字：เอ็ด (et) 和 ยี่ (yi)",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai numbers have two special rules that make them easier to say naturally:\n\n**Rule 1: Using เอ็ด (et) for '1' at the end**\nWhen '1' appears at the END of a number (except for 1 itself), we say 'เอ็ด (et)' instead of 'หนึ่ง (neung)'.\n\nExamples:\n• 11 = สิบเอ็ด (sìp-èt) - literally 'ten-et'\n• 21 = ยี่สิบเอ็ด (yîi-sìp-èt) - literally 'twenty-et'\n• 31 = สามสิบเอ็ด (săam-sìp-èt) - literally 'thirty-et'\n• 41 = สี่สิบเอ็ด (sìi-sìp-èt) - literally 'forty-et'\n• 91 = เก้าสิบเอ็ด (gâo-sìp-èt) - literally 'ninety-et'\n\nBut: 1 by itself = หนึ่ง (neung), NOT เอ็ด!\n\n**Rule 2: Using ยี่ (yi) for '20'**\nFor the number 20, we say 'ยี่สิบ (yîi-sìp)' instead of 'สองสิบ (sɔ̌ɔng-sìp)'.\n\nExamples:\n• 20 = ยี่สิบ (yîi-sìp)\n• 22 = ยี่สิบสอง (yîi-sìp-sɔ̌ɔng)\n• 25 = ยี่สิบห้า (yîi-sìp-hâa)\n• 29 = ยี่สิบเก้า (yîi-sìp-gâo)\n\nBut: 30, 40, 50, etc. use normal numbers (สามสิบ, สี่สิบ, ห้าสิบ)\n\nThink of 'ยี่' as a shortened, easier-to-say version of 'สอง' that's only used for 20-29.",
                [LanguageCode.FRENCH]: "Les nombres thaïs ont deux règles spéciales qui les rendent plus naturels à prononcer :\n\n**Règle 1 : Utiliser เอ็ด (et) pour '1' à la fin**\nQuand '1' apparaît à la FIN d'un nombre (sauf pour 1 seul), on dit 'เอ็ด (et)' au lieu de 'หนึ่ง (neung)'.\n\nExemples :\n• 11 = สิบเอ็ด (sìp-èt) - littéralement 'dix-et'\n• 21 = ยี่สิบเอ็ด (yîi-sìp-èt) - littéralement 'vingt-et'\n• 31 = สามสิบเอ็ด (săam-sìp-èt) - littéralement 'trente-et'\n• 41 = สี่สิบเอ็ด (sìi-sìp-èt) - littéralement 'quarante-et'\n• 91 = เก้าสิบเอ็ด (gâo-sìp-èt) - littéralement 'quatre-vingt-onze-et'\n\nMais : 1 seul = หนึ่ง (neung), PAS เอ็ด !\n\n**Règle 2 : Utiliser ยี่ (yi) pour '20'**\nPour le nombre 20, on dit 'ยี่สิบ (yîi-sìp)' au lieu de 'สองสิบ (sɔ̌ɔng-sìp)'.\n\nExemples :\n• 20 = ยี่สิบ (yîi-sìp)\n• 22 = ยี่สิบสอง (yîi-sìp-sɔ̌ɔng)\n• 25 = ยี่สิบห้า (yîi-sìp-hâa)\n• 29 = ยี่สิบเก้า (yîi-sìp-gâo)\n\nMais : 30, 40, 50, etc. utilisent les nombres normaux (สามสิบ, สี่สิบ, ห้าสิบ)\n\nPensez à 'ยี่' comme une version raccourcie de 'สอง' utilisée uniquement pour 20-29.",
                [LanguageCode.PORTUGUESE]: "Os números tailandeses têm duas regras especiais que os tornam mais naturais de pronunciar:\n\n**Regra 1: Usar เอ็ด (et) para '1' no final**\nQuando '1' aparece no FINAL de um número (exceto para 1 sozinho), dizemos 'เอ็ด (et)' em vez de 'หนึ่ง (neung)'.\n\nExemplos:\n• 11 = สิบเอ็ด (sìp-èt) - literalmente 'dez-et'\n• 21 = ยี่สิบเอ็ด (yîi-sìp-èt) - literalmente 'vinte-et'\n• 31 = สามสิบเอ็ด (săam-sìp-èt) - literalmente 'trinta-et'\n• 41 = สี่สิบเอ็ด (sìi-sìp-èt) - literalmente 'quarenta-et'\n• 91 = เก้าสิบเอ็ด (gâo-sìp-èt) - literalmente 'noventa-et'\n\nMas: 1 sozinho = หนึ่ง (neung), NÃO เอ็ด!\n\n**Regra 2: Usar ยี่ (yi) para '20'**\nPara o número 20, dizemos 'ยี่สิบ (yîi-sìp)' em vez de 'สองสิบ (sɔ̌ɔng-sìp)'.\n\nExemplos:\n• 20 = ยี่สิบ (yîi-sìp)\n• 22 = ยี่สิบสอง (yîi-sìp-sɔ̌ɔng)\n• 25 = ยี่สิบห้า (yîi-sìp-hâa)\n• 29 = ยี่สิบเก้า (yîi-sìp-gâo)\n\nMas: 30, 40, 50, etc. usam números normais (สามสิบ, สี่สิบ, ห้าสิบ)\n\nPense em 'ยี่' como uma versão encurtada de 'สอง' usada apenas para 20-29.",
                [LanguageCode.MANDARIN]: "泰語數字有兩個特殊規則，使其更容易自然地發音：\n\n**規則1：在結尾使用 เอ็ด (et) 表示 '1'**\n當 '1' 出現在數字的末尾（除了 1 本身），我們說 'เอ็ด (et)' 而不是 'หนึ่ง (neung)'。\n\n例子：\n• 11 = สิบเอ็ด (sìp-èt) - 字面意思是 '十-et'\n• 21 = ยี่สิบเอ็ด (yîi-sìp-èt) - 字面意思是 '二十-et'\n• 31 = สามสิบเอ็ด (săam-sìp-èt) - 字面意思是 '三十-et'\n• 41 = สี่สิบเอ็ด (sìi-sìp-èt) - 字面意思是 '四十-et'\n• 91 = เก้าสิบเอ็ด (gâo-sìp-èt) - 字面意思是 '九十-et'\n\n但是：1 本身 = หนึ่ง (neung)，不是 เอ็ด！\n\n**規則2：用 ยี่ (yi) 表示 '20'**\n對於數字 20，我們說 'ยี่สิบ (yîi-sìp)' 而不是 'สองสิบ (sɔ̌ɔng-sìp)'。\n\n例子：\n• 20 = ยี่สิบ (yîi-sìp)\n• 22 = ยี่สิบสอง (yîi-sìp-sɔ̌ɔng)\n• 25 = ยี่สิบห้า (yîi-sìp-hâa)\n• 29 = ยี่สิบเก้า (yîi-sìp-gâo)\n\n但是：30、40、50 等使用正常數字（สามสิบ、สี่สิบ、ห้าสิบ）\n\n將 'ยี่' 想像成 'สอง' 的簡短版本，僅用於 20-29。",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the number to Thai.",
                [LanguageCode.FRENCH]: "Associez le nombre au thaï.",
                [LanguageCode.PORTUGUESE]: "Relacione o número ao tailandês.",
                [LanguageCode.MANDARIN]: "將阿拉伯數字配對到泰語寫法。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "6", [LanguageCode.FRENCH]: "6", [LanguageCode.PORTUGUESE]: "6", [LanguageCode.MANDARIN]: "6" }, answer: { [LanguageCode.ENGLISH]: "หก", [LanguageCode.FRENCH]: "หก", [LanguageCode.PORTUGUESE]: "หก", [LanguageCode.MANDARIN]: "หก" } },
                { prompt: { [LanguageCode.ENGLISH]: "11", [LanguageCode.FRENCH]: "11", [LanguageCode.PORTUGUESE]: "11", [LanguageCode.MANDARIN]: "11" }, answer: { [LanguageCode.ENGLISH]: "สิบเอ็ด", [LanguageCode.FRENCH]: "สิบเอ็ด", [LanguageCode.PORTUGUESE]: "สิบเอ็ด", [LanguageCode.MANDARIN]: "สิบเอ็ด" } },
                { prompt: { [LanguageCode.ENGLISH]: "20", [LanguageCode.FRENCH]: "20", [LanguageCode.PORTUGUESE]: "20", [LanguageCode.MANDARIN]: "20" }, answer: { [LanguageCode.ENGLISH]: "ยี่สิบ", [LanguageCode.FRENCH]: "ยี่สิบ", [LanguageCode.PORTUGUESE]: "ยี่สิบ", [LanguageCode.MANDARIN]: "ยี่สิบ" } },
                { prompt: { [LanguageCode.ENGLISH]: "40", [LanguageCode.FRENCH]: "40", [LanguageCode.PORTUGUESE]: "40", [LanguageCode.MANDARIN]: "40" }, answer: { [LanguageCode.ENGLISH]: "สี่สิบ", [LanguageCode.FRENCH]: "สี่สิบ", [LanguageCode.PORTUGUESE]: "สี่สิบ", [LanguageCode.MANDARIN]: "สี่สิบ" } },
                { prompt: { [LanguageCode.ENGLISH]: "100", [LanguageCode.FRENCH]: "100", [LanguageCode.PORTUGUESE]: "100", [LanguageCode.MANDARIN]: "100" }, answer: { [LanguageCode.ENGLISH]: "ร้อย", [LanguageCode.FRENCH]: "ร้อย", [LanguageCode.PORTUGUESE]: "ร้อย", [LanguageCode.MANDARIN]: "ร้อย" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Write the Thai for these numbers.",
                [LanguageCode.FRENCH]: "Écrivez le thaï pour ces nombres.",
                [LanguageCode.PORTUGUESE]: "Escreva em tailandês estes números.",
                [LanguageCode.MANDARIN]: "用泰語寫出這些數字。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "11 = ", [LanguageCode.FRENCH]: "11 = ", [LanguageCode.PORTUGUESE]: "11 = ", [LanguageCode.MANDARIN]: "11 = " }, correctAnswer: "สิบเอ็ด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "25 = ", [LanguageCode.FRENCH]: "25 = ", [LanguageCode.PORTUGUESE]: "25 = ", [LanguageCode.MANDARIN]: "25 = " }, correctAnswer: "ยี่สิบห้า", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "70 = ", [LanguageCode.FRENCH]: "70 = ", [LanguageCode.PORTUGUESE]: "70 = ", [LanguageCode.MANDARIN]: "70 = " }, correctAnswer: "เจ็ดสิบ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Write the numbers in Thai.",
                [LanguageCode.FRENCH]: "Écrivez les nombres en thaï.",
                [LanguageCode.PORTUGUESE]: "Escreva os números em tailandês.",
                [LanguageCode.MANDARIN]: "用泰語寫數字。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "31 = ", [LanguageCode.FRENCH]: "31 = ", [LanguageCode.PORTUGUESE]: "31 = ", [LanguageCode.MANDARIN]: "31 = " }, correctAnswer: "สามสิบเอ็ด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "41 = ", [LanguageCode.FRENCH]: "41 = ", [LanguageCode.PORTUGUESE]: "41 = ", [LanguageCode.MANDARIN]: "41 = " }, correctAnswer: "สี่สิบเอ็ด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "51 = ", [LanguageCode.FRENCH]: "51 = ", [LanguageCode.PORTUGUESE]: "51 = ", [LanguageCode.MANDARIN]: "51 = " }, correctAnswer: "ห้าสิบเอ็ด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct price in Thai.",
                [LanguageCode.FRENCH]: "Choisissez le bon prix en thaï.",
                [LanguageCode.PORTUGUESE]: "Escolha o preço correto em tailandês.",
                [LanguageCode.MANDARIN]: "選擇正確的泰語價格。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "฿45", [LanguageCode.FRENCH]: "฿45", [LanguageCode.PORTUGUESE]: "฿45", [LanguageCode.MANDARIN]: "฿45" },
                    options: [
                        { [LanguageCode.ENGLISH]: "สี่สิบห้าบาท", [LanguageCode.FRENCH]: "สี่สิบห้าบาท", [LanguageCode.PORTUGUESE]: "สี่สิบห้าบาท", [LanguageCode.MANDARIN]: "สี่สิบห้าบาท" },
                        { [LanguageCode.ENGLISH]: "ห้าสิบสี่บาท", [LanguageCode.FRENCH]: "ห้าสิบสี่บาท", [LanguageCode.PORTUGUESE]: "ห้าสิบสี่บาท", [LanguageCode.MANDARIN]: "ห้าสิบสี่บาท" },
                        { [LanguageCode.ENGLISH]: "สี่ห้าสิบบาท", [LanguageCode.FRENCH]: "สี่ห้าสิบบาท", [LanguageCode.PORTUGUESE]: "สี่ห้าสิบบาท", [LanguageCode.MANDARIN]: "สี่ห้าสิบบาท" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "฿108", [LanguageCode.FRENCH]: "฿108", [LanguageCode.PORTUGUESE]: "฿108", [LanguageCode.MANDARIN]: "฿108" },
                    options: [
                        { [LanguageCode.ENGLISH]: "หนึ่งร้อยแปดบาท", [LanguageCode.FRENCH]: "หนึ่งร้อยแปดบาท", [LanguageCode.PORTUGUESE]: "หนึ่งร้อยแปดบาท", [LanguageCode.MANDARIN]: "หนึ่งร้อยแปดบาท" },
                        { [LanguageCode.ENGLISH]: "ร้อยแปดสิบบาท", [LanguageCode.FRENCH]: "ร้อยแปดสิบบาท", [LanguageCode.PORTUGUESE]: "ร้อยแปดสิบบาท", [LanguageCode.MANDARIN]: "ร้อยแปดสิบบาท" },
                        { [LanguageCode.ENGLISH]: "หนึ่งร้อยแปดสิบบาท", [LanguageCode.FRENCH]: "หนึ่งร้อยแปดสิบบาท", [LanguageCode.PORTUGUESE]: "หนึ่งร้อยแปดสิบบาท", [LanguageCode.MANDARIN]: "หนึ่งร้อยแปดสิบบาท" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct Thai for the number.",
                [LanguageCode.FRENCH]: "Choisissez le bon thaï pour le nombre.",
                [LanguageCode.PORTUGUESE]: "Escolha o tailandês correto para o número.",
                [LanguageCode.MANDARIN]: "為數字選擇正確的泰語。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "21", [LanguageCode.FRENCH]: "21", [LanguageCode.PORTUGUESE]: "21", [LanguageCode.MANDARIN]: "21" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ยี่สิบเอ็ด", [LanguageCode.FRENCH]: "ยี่สิบเอ็ด", [LanguageCode.PORTUGUESE]: "ยี่สิบเอ็ด", [LanguageCode.MANDARIN]: "ยี่สิบเอ็ด" },
                        { [LanguageCode.ENGLISH]: "ยี่สิบหนึ่ง", [LanguageCode.FRENCH]: "ยี่สิบหนึ่ง", [LanguageCode.PORTUGUESE]: "ยี่สิบหนึ่ง", [LanguageCode.MANDARIN]: "ยี่สิบหนึ่ง" },
                        { [LanguageCode.ENGLISH]: "สองสิบเอ็ด", [LanguageCode.FRENCH]: "สองสิบเอ็ด", [LanguageCode.PORTUGUESE]: "สองสิบเอ็ด", [LanguageCode.MANDARIN]: "สองสิบเอ็ด" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Order the price phrase.",
                [LanguageCode.FRENCH]: "Mettez la phrase de prix en ordre.",
                [LanguageCode.PORTUGUESE]: "Ordene a frase de preço.",
                [LanguageCode.MANDARIN]: "將價格短語排序。",
            },
            sentences: [
                { correctOrder: ["ราคา", "25", "บาท"], hint: { [LanguageCode.ENGLISH]: "25 baht", [LanguageCode.FRENCH]: "25 bahts", [LanguageCode.PORTUGUESE]: "25 baht", [LanguageCode.MANDARIN]: "25 銖" } },
                { correctOrder: ["รวม", "100", "บาท"], hint: { [LanguageCode.ENGLISH]: "Total 100 baht", [LanguageCode.FRENCH]: "Total 100 bahts", [LanguageCode.PORTUGUESE]: "Total 100 baht", [LanguageCode.MANDARIN]: "共 100 銖" } },
                { correctOrder: ["2", "คน"], hint: { [LanguageCode.ENGLISH]: "2 people", [LanguageCode.FRENCH]: "2 personnes", [LanguageCode.PORTUGUESE]: "2 pessoas", [LanguageCode.MANDARIN]: "2 人" } },
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "Seller", line: { [LanguageCode.ENGLISH]: "This is 25 baht.", [LanguageCode.FRENCH]: "C'est 25 bahts.", [LanguageCode.PORTUGUESE]: "São 25 baht.", [LanguageCode.MANDARIN]: "這個25銖。" } },
            { speaker: "Buyer", line: { [LanguageCode.ENGLISH]: "Okay, and that one?", [LanguageCode.FRENCH]: "D'accord, et celui-là ?", [LanguageCode.PORTUGUESE]: "Certo, e aquele?", [LanguageCode.MANDARIN]: "好，那個呢？" } },
        ],
        comprehensionQuestions: {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Answer the questions about the conversation.",
                [LanguageCode.FRENCH]: "Répondez aux questions sur la conversation.",
                [LanguageCode.PORTUGUESE]: "Responda às perguntas sobre a conversa.",
                [LanguageCode.MANDARIN]: "回答有關對話的問題。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "How much is the item?", [LanguageCode.FRENCH]: "Combien coûte l'article ?", [LanguageCode.PORTUGUESE]: "Quanto custa o item?", [LanguageCode.MANDARIN]: "這個多少錢？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "25 baht", [LanguageCode.FRENCH]: "25 bahts", [LanguageCode.PORTUGUESE]: "25 baht", [LanguageCode.MANDARIN]: "25 銖" },
                        { [LanguageCode.ENGLISH]: "20 baht", [LanguageCode.FRENCH]: "20 bahts", [LanguageCode.PORTUGUESE]: "20 baht", [LanguageCode.MANDARIN]: "20 銖" },
                        { [LanguageCode.ENGLISH]: "30 baht", [LanguageCode.FRENCH]: "30 bahts", [LanguageCode.PORTUGUESE]: "30 baht", [LanguageCode.MANDARIN]: "30 銖" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "นับหนึ่งถึงยี่สิบ แล้วพูดเลขสองหลัก 5 ตัว",
            [LanguageCode.FRENCH]: "นับหนึ่งถึงยี่สิบ แล้วพูดเลขสองหลัก 5 ตัว",
            [LanguageCode.PORTUGUESE]: "นับหนึ่งถึงยี่สิบ แล้วพูดเลขสองหลัก 5 ตัว",
            [LanguageCode.MANDARIN]: "นับหนึ่งถึงยี่สิบ แล้วพูดเลขสองหลัก 5 ตัว",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Count 1–20, then say five two-digit numbers.",
            [LanguageCode.FRENCH]: "Compte de 1 à 20, puis dis cinq nombres à deux chiffres.",
            [LanguageCode.PORTUGUESE]: "Conte de 1 a 20 e diga cinco números de dois dígitos.",
            [LanguageCode.MANDARIN]: "從1數到20，然後說五個兩位數。",
        }
    }
};


