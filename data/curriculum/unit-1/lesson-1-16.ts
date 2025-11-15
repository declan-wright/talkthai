import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_16: Lesson = {
    id: "1.16",
    title: {
        [LanguageCode.ENGLISH]: "Body & Feelings",
        [LanguageCode.FRENCH]: "Corps et Sentiments",
        [LanguageCode.PORTUGUESE]: "Corpo e Sentimentos",
        [LanguageCode.MANDARIN]: "身體與感受",
    },
    vocabulary: [
        // Body parts
        { thai: "หัว", phonetic: "hǔa", translations: { [LanguageCode.ENGLISH]: "head", [LanguageCode.FRENCH]: "tête", [LanguageCode.PORTUGUESE]: "cabeça", [LanguageCode.MANDARIN]: "頭" } },
        { thai: "ตา", phonetic: "dtaa", translations: { [LanguageCode.ENGLISH]: "eye", [LanguageCode.FRENCH]: "œil", [LanguageCode.PORTUGUESE]: "olho", [LanguageCode.MANDARIN]: "眼睛" } },
        { thai: "มือ", phonetic: "mʉʉ", translations: { [LanguageCode.ENGLISH]: "hand", [LanguageCode.FRENCH]: "main", [LanguageCode.PORTUGUESE]: "mão", [LanguageCode.MANDARIN]: "手" } },
        { thai: "ขา", phonetic: "khǎa", translations: { [LanguageCode.ENGLISH]: "leg", [LanguageCode.FRENCH]: "jambe", [LanguageCode.PORTUGUESE]: "perna", [LanguageCode.MANDARIN]: "腿" } },
        { thai: "เท้า", phonetic: "tháo", translations: { [LanguageCode.ENGLISH]: "foot", [LanguageCode.FRENCH]: "pied", [LanguageCode.PORTUGUESE]: "pé", [LanguageCode.MANDARIN]: "腳" } },
        { thai: "ท้อง", phonetic: "thɔ́ɔng", translations: { [LanguageCode.ENGLISH]: "stomach/belly", [LanguageCode.FRENCH]: "ventre/estomac", [LanguageCode.PORTUGUESE]: "estômago/barriga", [LanguageCode.MANDARIN]: "肚子" } },
        { thai: "หู", phonetic: "hǔu", translations: { [LanguageCode.ENGLISH]: "ear", [LanguageCode.FRENCH]: "oreille", [LanguageCode.PORTUGUESE]: "orelha", [LanguageCode.MANDARIN]: "耳朵" } },
        { thai: "จมูก", phonetic: "jà-mùuk", translations: { [LanguageCode.ENGLISH]: "nose", [LanguageCode.FRENCH]: "nez", [LanguageCode.PORTUGUESE]: "nariz", [LanguageCode.MANDARIN]: "鼻子" } },
        { thai: "ปาก", phonetic: "bpàak", translations: { [LanguageCode.ENGLISH]: "mouth", [LanguageCode.FRENCH]: "bouche", [LanguageCode.PORTUGUESE]: "boca", [LanguageCode.MANDARIN]: "嘴巴" } },
        { thai: "ฟัน", phonetic: "fan", translations: { [LanguageCode.ENGLISH]: "tooth/teeth", [LanguageCode.FRENCH]: "dent/dents", [LanguageCode.PORTUGUESE]: "dente/dentes", [LanguageCode.MANDARIN]: "牙齒" } },
        { thai: "คอ", phonetic: "khɔɔ", translations: { [LanguageCode.ENGLISH]: "neck/throat", [LanguageCode.FRENCH]: "cou/gorge", [LanguageCode.PORTUGUESE]: "pescoço/garganta", [LanguageCode.MANDARIN]: "脖子/喉嚨" } },
        { thai: "หลัง", phonetic: "lǎng", translations: { [LanguageCode.ENGLISH]: "back", [LanguageCode.FRENCH]: "dos", [LanguageCode.PORTUGUESE]: "costas", [LanguageCode.MANDARIN]: "背部" } },

        // Feelings and health
        { thai: "สบาย", phonetic: "sà-baai", translations: { [LanguageCode.ENGLISH]: "comfortable/well", [LanguageCode.FRENCH]: "confortable/bien", [LanguageCode.PORTUGUESE]: "confortável/bem", [LanguageCode.MANDARIN]: "舒服" } },
        { thai: "ไม่สบาย", phonetic: "mâi sà-baai", translations: { [LanguageCode.ENGLISH]: "not well/sick", [LanguageCode.FRENCH]: "pas bien/malade", [LanguageCode.PORTUGUESE]: "não está bem/doente", [LanguageCode.MANDARIN]: "不舒服" } },
        { thai: "เจ็บ", phonetic: "jèp", translations: { [LanguageCode.ENGLISH]: "hurt/painful", [LanguageCode.FRENCH]: "faire mal/douloureux", [LanguageCode.PORTUGUESE]: "doer/doloroso", [LanguageCode.MANDARIN]: "疼" } },
        { thai: "ปวด", phonetic: "pùat", translations: { [LanguageCode.ENGLISH]: "pain/ache", [LanguageCode.FRENCH]: "douleur/mal", [LanguageCode.PORTUGUESE]: "dor", [LanguageCode.MANDARIN]: "痛" } },
        { thai: "เหนื่อย", phonetic: "nʉ̀ai", translations: { [LanguageCode.ENGLISH]: "tired", [LanguageCode.FRENCH]: "fatigué", [LanguageCode.PORTUGUESE]: "cansado", [LanguageCode.MANDARIN]: "累" } },
        { thai: "ง่วง", phonetic: "ngûang", translations: { [LanguageCode.ENGLISH]: "sleepy", [LanguageCode.FRENCH]: "somnolent", [LanguageCode.PORTUGUESE]: "sonolento", [LanguageCode.MANDARIN]: "困" } },
        { thai: "ห้องน้ำ", phonetic: "hɔ̂ŋ-náam", translations: { [LanguageCode.ENGLISH]: "bathroom/restroom", [LanguageCode.FRENCH]: "toilettes/salle de bain", [LanguageCode.PORTUGUESE]: "banheiro", [LanguageCode.MANDARIN]: "洗手間" } },
        { thai: "แพ้", phonetic: "pháe", translations: { [LanguageCode.ENGLISH]: "allergic to", [LanguageCode.FRENCH]: "allergique à", [LanguageCode.PORTUGUESE]: "alérgico a", [LanguageCode.MANDARIN]: "過敏" } },
        { thai: "หิว", phonetic: "hǐu", translations: { [LanguageCode.ENGLISH]: "hungry", [LanguageCode.FRENCH]: "faim", [LanguageCode.PORTUGUESE]: "com fome", [LanguageCode.MANDARIN]: "餓" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Talking About Your Body & Health in Thai",
                [LanguageCode.FRENCH]: "Parler de votre corps et santé en thaï",
                [LanguageCode.PORTUGUESE]: "Falando sobre seu corpo e saúde em tailandês",
                [LanguageCode.MANDARIN]: "用泰語談論身體與健康",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Essential Body Parts**\n\nKnowing basic body vocabulary is crucial when you're not feeling well or need medical help in Thailand.\n\n**The Head (หัว - hǔa):**\n• หัว (hǔa) - head\n• ตา (dtaa) - eye/eyes\n• หู (hǔu) - ear/ears\n• จมูก (jà-mùuk) - nose\n• ปาก (bpàak) - mouth\n• ฟัน (fan) - tooth/teeth\n• คอ (khɔɔ) - neck/throat\n\n**The Body:**\n• มือ (mʉʉ) - hand/hands\n• ขา (khǎa) - leg/legs\n• เท้า (tháo) - foot/feet\n• ท้อง (thɔ́ɔng) - stomach/belly\n• หลัง (lǎng) - back\n\n**Talking About Pain: เจ็บ (jèp) vs. ปวด (pùat)**\n\nThai has two main words for pain, and knowing the difference is important!\n\n**เจ็บ (jèp)** = hurt, painful (MOST COMMON!)\n• This is the everyday word people use for pain\n• More general and versatile\n• Can mean sharp pain, injury, or hurt feelings\n\n**ปวด (pùat)** = ache (SPECIFIC INTERNAL PAIN)\n• Used for internal aches and dull pain\n• Common with headaches, stomachaches, toothaches\n• More specific than เจ็บ\n\n**Using เจ็บ (jèp) - The Main Word:**\n\n• **เจ็บหัว (jèp hǔa)** - head hurts\n• **เจ็บคอ (jèp khɔɔ)** - sore throat (VERY COMMON!)\n• **เจ็บท้อง (jèp thɔ́ɔng)** - stomach hurts\n• **เจ็บขา (jèp khǎa)** - leg hurts\n• **เจ็บมาก (jèp mâak)** - hurts a lot\n• **มือเจ็บ (mʉʉ jèp)** - hand hurts\n\n**Formula:** เจ็บ + [body part] OR [body part] + เจ็บ\n\n**Using ปวด (pùat) - Specific Aches:**\n\n• **ปวดหัว (pùat hǔa)** - headache (literally \"ache head\")\n• **ปวดท้อง (pùat thɔ́ɔng)** - stomachache\n• **ปวดฟัน (pùat fan)** - toothache\n• **ปวดหลัง (pùat lǎng)** - backache\n\n**Formula:** ปวด + [body part] = \"[body part]-ache\"\n\n**Which to Use?**\n• For sore throat: **เจ็บคอ (jèp khɔɔ)** ✓ (most common)\n• For headache: Both work, but **ปวดหัว (pùat hǔa)** is more common\n• For injuries/cuts: **เจ็บ (jèp)** ✓\n• For general pain: **เจ็บ (jèp)** ✓ (safer choice!)\n\n**Pro Tip:** When in doubt, use **เจ็บ (jèp)**! It's the more common, everyday word.\n\n**Describing How You Feel:**\n\n**สบาย (sà-baai)** = comfortable, well, fine\n• **สบายดี (sà-baai dii)** - I'm fine/well (common greeting response)\n• **สบายดีไหม (sà-baai dii mái)** - How are you? / Are you well?\n\n**ไม่สบาย (mâi sà-baai)** = not well, sick, uncomfortable\n• This is the most common way to say you're sick\n• Example: **ผมไม่สบาย (phǒm mâi sà-baai)** - I'm not feeling well (male)\n• Example: **ฉันไม่สบาย (chǎn mâi sà-baai)** - I'm not feeling well (female/general)\n\n**Other Common Feelings:**\n\n• **เหนื่อย (nʉ̀ai)** - tired, exhausted\n  Example: **เหนื่อยมาก (nʉ̀ai mâak)** - very tired\n\n• **ง่วง (ngûang)** - sleepy, drowsy\n  Example: **ง่วงนอน (ngûang nɔɔn)** - sleepy (want to sleep)\n\n• **หิว (hǐu)** - hungry\n  Example: **หิวข้าว (hǐu khâao)** - hungry (literally \"hungry rice\")\n\n• **หิวน้ำ (hǐu náam)** - thirsty\n  Example: **หิวน้ำมาก (hǐu náam mâak)** - very thirsty\n  Note: Literally means \"hungry water\"!\n\n**Important Health Phrases:**\n\n• **ห้องน้ำอยู่ไหน (hɔ̂ŋ-náam yùu năi)** - Where is the bathroom?\n  Essential phrase from Lesson 1.0!\n\n• **แพ้___ (pháe ___)** - allergic to ___\n  Example: **แพ้กุ้ง (pháe gûng)** - allergic to shrimp\n  Example: **แพ้ถั่ว (pháe thùa)** - allergic to peanuts\n\n**Complete Sentences:**\n\n• **ปวดหัวมาก (pùat hǔa mâak)** - I have a bad headache (literally \"pain head very\")\n• **ท้องไม่สบาย (thɔ́ɔng mâi sà-baai)** - My stomach is upset\n• **ผมแพ้อาหารทะเล (phǒm pháe aa-hǎan thá-lee)** - I'm allergic to seafood (male)\n• **เท้าปวด (tháo pùat)** - My foot/feet hurt(s)\n\n**Pro Tip:** When you're not feeling well, Thais will often ask:\n**เป็นอะไร (bpen à-rai)** - What's wrong? / What happened?\n\nYou can respond with:\n**ปวด___ (pùat ___)** or **___ไม่สบาย (___ mâi sà-baai)**\n\nExample conversation:\nA: **เป็นอะไร (bpen à-rai)** - What's wrong?\nB: **ปวดหัว (pùat hǔa)** - I have a headache.",
                [LanguageCode.FRENCH]: "**Parties du corps essentielles**\n\nConnaître le vocabulaire de base du corps est crucial lorsque vous ne vous sentez pas bien ou avez besoin d'aide médicale en Thaïlande.\n\n**Parler de la douleur : ปวด (pùat)**\n\nLe mot **ปวด (pùat)** signifie \"douleur\" ou \"mal\". Vous le combinez avec des parties du corps :\n\n• **ปวดหัว (pùat hǔa)** - mal de tête\n• **ปวดท้อง (pùat thɔ́ɔng)** - mal de ventre\n• **ปวดฟัน (pùat fan)** - mal de dents\n\n**Décrire comment vous vous sentez :**\n\n• **สบาย (sà-baai)** = confortable, bien\n• **ไม่สบาย (mâi sà-baai)** = pas bien, malade\n• **เหนื่อย (nʉ̀ai)** = fatigué\n• **ง่วง (ngûang)** = somnolent\n• **หิว (hǐu)** = faim",
                [LanguageCode.PORTUGUESE]: "**Partes do corpo essenciais**\n\nConhecer o vocabulário básico do corpo é crucial quando você não está se sentindo bem ou precisa de ajuda médica na Tailândia.\n\n**Falando sobre dor: ปวด (pùat)**\n\nA palavra **ปวด (pùat)** significa \"dor\". Você a combina com partes do corpo:\n\n• **ปวดหัว (pùat hǔa)** - dor de cabeça\n• **ปวดท้อง (pùat thɔ́ɔng)** - dor de estômago\n• **ปวดฟัน (pùat fan)** - dor de dente\n\n**Descrevendo como você se sente:**\n\n• **สบาย (sà-baai)** = confortável, bem\n• **ไม่สบาย (mâi sà-baai)** = não está bem, doente\n• **เหนื่อย (nʉ̀ai)** = cansado\n• **ง่วง (ngûang)** = sonolento\n• **หิว (hǐu)** = com fome",
                [LanguageCode.MANDARIN]: "**基本身體部位**\n\n當你在泰國感到不適或需要醫療幫助時，了解基本身體詞彙至關重要。\n\n**談論疼痛：ปวด (pùat)**\n\n**ปวด (pùat)** 這個詞表示「疼痛」。你可以將它與身體部位組合：\n\n• **ปวดหัว (pùat hǔa)** - 頭痛\n• **ปวดท้อง (pùat thɔ́ɔng)** - 胃痛\n• **ปวดฟัน (pùat fan)** - 牙痛\n\n**描述你的感受：**\n\n• **สบาย (sà-baai)** = 舒服，好\n• **ไม่สบาย (mâi sà-baai)** = 不舒服，生病\n• **เหนื่อย (nʉ̀ai)** = 累\n• **ง่วง (ngûang)** = 困\n• **หิว (hǐu)** = 餓",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the body part names.",
                [LanguageCode.FRENCH]: "Complétez les noms des parties du corps.",
                [LanguageCode.PORTUGUESE]: "Complete os nomes das partes do corpo.",
                [LanguageCode.MANDARIN]: "填寫身體部位名稱。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "I have a headache: ปวด___", [LanguageCode.FRENCH]: "J'ai mal à la tête : ปวด___", [LanguageCode.PORTUGUESE]: "Eu tenho dor de cabeça: ปวด___", [LanguageCode.MANDARIN]: "我頭痛：ปวด___" }, correctAnswer: "หัว", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Sore throat (most common): เจ็บ___", [LanguageCode.FRENCH]: "Mal de gorge (plus courant) : เจ็บ___", [LanguageCode.PORTUGUESE]: "Dor de garganta (mais comum): เจ็บ___", [LanguageCode.MANDARIN]: "喉嚨痛（最常見）：เจ็บ___" }, correctAnswer: "คอ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "I have a stomachache: ปวด___", [LanguageCode.FRENCH]: "J'ai mal au ventre : ปวด___", [LanguageCode.PORTUGUESE]: "Eu tenho dor de estômago: ปวด___", [LanguageCode.MANDARIN]: "我胃痛：ปวด___" }, correctAnswer: "ท้อง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "My leg hurts: ___เจ็บ", [LanguageCode.FRENCH]: "Ma jambe me fait mal : ___เจ็บ", [LanguageCode.PORTUGUESE]: "Minha perna dói: ___เจ็บ", [LanguageCode.MANDARIN]: "我的腿痛：___เจ็บ" }, correctAnswer: "ขา", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to describe feelings correctly.",
                [LanguageCode.FRENCH]: "Arrangez les mots pour décrire correctement les sentiments.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para descrever sentimentos corretamente.",
                [LanguageCode.MANDARIN]: "排列單詞以正確描述感受。",
            },
            sentences: [
                { correctOrder: ["ผม", "ไม่", "สบาย"], hint: { [LanguageCode.ENGLISH]: "I'm not feeling well (male)", [LanguageCode.FRENCH]: "Je ne me sens pas bien (masculin)", [LanguageCode.PORTUGUESE]: "Eu não estou me sentindo bem (masculino)", [LanguageCode.MANDARIN]: "我不舒服（男性）" } },
                { correctOrder: ["เจ็บ", "คอ", "มาก"], hint: { [LanguageCode.ENGLISH]: "My throat hurts a lot", [LanguageCode.FRENCH]: "J'ai très mal à la gorge", [LanguageCode.PORTUGUESE]: "Minha garganta dói muito", [LanguageCode.MANDARIN]: "我喉嚨很痛" } },
                { correctOrder: ["ปวด", "หัว", "มาก"], hint: { [LanguageCode.ENGLISH]: "I have a bad headache", [LanguageCode.FRENCH]: "J'ai un gros mal de tête", [LanguageCode.PORTUGUESE]: "Eu tenho uma forte dor de cabeça", [LanguageCode.MANDARIN]: "我頭很痛" } },
                { correctOrder: ["หิว", "ข้าว"], hint: { [LanguageCode.ENGLISH]: "Hungry (for rice/food)", [LanguageCode.FRENCH]: "Faim (de riz/nourriture)", [LanguageCode.PORTUGUESE]: "Com fome (de arroz/comida)", [LanguageCode.MANDARIN]: "餓了" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the symptoms to the correct Thai phrase.",
                [LanguageCode.FRENCH]: "Associez les symptômes à la phrase thaïlandaise correcte.",
                [LanguageCode.PORTUGUESE]: "Relacione os sintomas à frase tailandesa correta.",
                [LanguageCode.MANDARIN]: "將症狀與正確的泰語短語配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "I'm sick/not well", [LanguageCode.FRENCH]: "Je suis malade/pas bien", [LanguageCode.PORTUGUESE]: "Estou doente/não estou bem", [LanguageCode.MANDARIN]: "我生病/不舒服" }, answer: { [LanguageCode.ENGLISH]: "ไม่สบาย", [LanguageCode.FRENCH]: "ไม่สบาย", [LanguageCode.PORTUGUESE]: "ไม่สบาย", [LanguageCode.MANDARIN]: "ไม่สบาย" } },
                { prompt: { [LanguageCode.ENGLISH]: "Headache", [LanguageCode.FRENCH]: "Mal de tête", [LanguageCode.PORTUGUESE]: "Dor de cabeça", [LanguageCode.MANDARIN]: "頭痛" }, answer: { [LanguageCode.ENGLISH]: "ปวดหัว", [LanguageCode.FRENCH]: "ปวดหัว", [LanguageCode.PORTUGUESE]: "ปวดหัว", [LanguageCode.MANDARIN]: "ปวดหัว" } },
                { prompt: { [LanguageCode.ENGLISH]: "Tired", [LanguageCode.FRENCH]: "Fatigué", [LanguageCode.PORTUGUESE]: "Cansado", [LanguageCode.MANDARIN]: "累" }, answer: { [LanguageCode.ENGLISH]: "เหนื่อย", [LanguageCode.FRENCH]: "เหนื่อย", [LanguageCode.PORTUGUESE]: "เหนื่อย", [LanguageCode.MANDARIN]: "เหนื่อย" } },
                { prompt: { [LanguageCode.ENGLISH]: "Sleepy", [LanguageCode.FRENCH]: "Somnolent", [LanguageCode.PORTUGUESE]: "Sonolento", [LanguageCode.MANDARIN]: "困" }, answer: { [LanguageCode.ENGLISH]: "ง่วง", [LanguageCode.FRENCH]: "ง่วง", [LanguageCode.PORTUGUESE]: "ง่วง", [LanguageCode.MANDARIN]: "ง่วง" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct phrase for each situation.",
                [LanguageCode.FRENCH]: "Choisissez la phrase correcte pour chaque situation.",
                [LanguageCode.PORTUGUESE]: "Escolha a frase correta para cada situação.",
                [LanguageCode.MANDARIN]: "為每種情況選擇正確的短語。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You have an upset stomach. What do you say?", [LanguageCode.FRENCH]: "Vous avez mal au ventre. Que dites-vous ?", [LanguageCode.PORTUGUESE]: "Você tem dor de estômago. O que você diz?", [LanguageCode.MANDARIN]: "你胃不舒服。你怎麼說？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ปวดหัว", [LanguageCode.FRENCH]: "ปวดหัว", [LanguageCode.PORTUGUESE]: "ปวดหัว", [LanguageCode.MANDARIN]: "ปวดหัว" },
                        { [LanguageCode.ENGLISH]: "ปวดท้อง", [LanguageCode.FRENCH]: "ปวดท้อง", [LanguageCode.PORTUGUESE]: "ปวดท้อง", [LanguageCode.MANDARIN]: "ปวดท้อง" },
                        { [LanguageCode.ENGLISH]: "ปวดหลัง", [LanguageCode.FRENCH]: "ปวดหลัง", [LanguageCode.PORTUGUESE]: "ปวดหลัง", [LanguageCode.MANDARIN]: "ปวดหลัง" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Someone asks 'สบายดีไหม'. You're not feeling well. What do you say?", [LanguageCode.FRENCH]: "Quelqu'un demande 'สบายดีไหม'. Vous ne vous sentez pas bien. Que dites-vous ?", [LanguageCode.PORTUGUESE]: "Alguém pergunta 'สบายดีไหม'. Você não está se sentindo bem. O que você diz?", [LanguageCode.MANDARIN]: "有人問「สบายดีไหม」。你不舒服。你怎麼說？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "สบายดี", [LanguageCode.FRENCH]: "สบายดี", [LanguageCode.PORTUGUESE]: "สบายดี", [LanguageCode.MANDARIN]: "สบายดี" },
                        { [LanguageCode.ENGLISH]: "ไม่สบาย", [LanguageCode.FRENCH]: "ไม่สบาย", [LanguageCode.PORTUGUESE]: "ไม่สบาย", [LanguageCode.MANDARIN]: "ไม่สบาย" },
                        { [LanguageCode.ENGLISH]: "เหนื่อย", [LanguageCode.FRENCH]: "เหนื่อย", [LanguageCode.PORTUGUESE]: "เหนื่อย", [LanguageCode.MANDARIN]: "เหนื่อย" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're allergic to shrimp. How do you say it?", [LanguageCode.FRENCH]: "Vous êtes allergique aux crevettes. Comment le dire ?", [LanguageCode.PORTUGUESE]: "Você é alérgico a camarão. Como você diz?", [LanguageCode.MANDARIN]: "你對蝦過敏。你怎麼說？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ชอบกุ้ง", [LanguageCode.FRENCH]: "ชอบกุ้ง", [LanguageCode.PORTUGUESE]: "ชอบกุ้ง", [LanguageCode.MANDARIN]: "ชอบกุ้ง" },
                        { [LanguageCode.ENGLISH]: "แพ้กุ้ง", [LanguageCode.FRENCH]: "แพ้กุ้ง", [LanguageCode.PORTUGUESE]: "แพ้กุ้ง", [LanguageCode.MANDARIN]: "แพ้กุ้ง" },
                        { [LanguageCode.ENGLISH]: "กินกุ้ง", [LanguageCode.FRENCH]: "กินกุ้ง", [LanguageCode.PORTUGUESE]: "กินกุ้ง", [LanguageCode.MANDARIN]: "กินกุ้ง" },
                    ],
                    correctIndex: 1
                }
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Are you okay?", [LanguageCode.FRENCH]: "Ça va ?", [LanguageCode.PORTUGUESE]: "Você está bem?", [LanguageCode.MANDARIN]: "你還好嗎？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I'm not feeling well. I have a headache.", [LanguageCode.FRENCH]: "Je ne me sens pas bien. J'ai mal à la tête.", [LanguageCode.PORTUGUESE]: "Eu não estou me sentindo bem. Estou com dor de cabeça.", [LanguageCode.MANDARIN]: "我不舒服。我頭痛。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What is wrong with speaker B?", [LanguageCode.FRENCH]: "Quel est le problème de B ?", [LanguageCode.PORTUGUESE]: "Qual é o problema do falante B?", [LanguageCode.MANDARIN]: "說話者 B 怎麼了？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Stomachache", [LanguageCode.FRENCH]: "Mal de ventre", [LanguageCode.PORTUGUESE]: "Dor de estômago", [LanguageCode.MANDARIN]: "胃痛" },
                        { [LanguageCode.ENGLISH]: "Headache", [LanguageCode.FRENCH]: "Mal de tête", [LanguageCode.PORTUGUESE]: "Dor de cabeça", [LanguageCode.MANDARIN]: "頭痛" },
                        { [LanguageCode.ENGLISH]: "Tired", [LanguageCode.FRENCH]: "Fatigué", [LanguageCode.PORTUGUESE]: "Cansado", [LanguageCode.MANDARIN]: "累" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บอกว่าคุณรู้สึกอย่างไร โดยใช้ 4 วลี",
            [LanguageCode.FRENCH]: "บอกว่าคุณรู้สึกอย่างไร โดยใช้ 4 วลี",
            [LanguageCode.PORTUGUESE]: "บอกว่าคุณรู้สึกอย่างไร โดยใช้ 4 วลี",
            [LanguageCode.MANDARIN]: "บอกว่าคุณรู้สึกอย่างไร โดยใช้ 4 วลี",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe how you're feeling using 4 phrases. Example: mâi sà-baai, pùat hǔa, nʉ̀ai mâak, yàak nɔɔn (I'm not well, I have a headache, I'm very tired, I want to sleep)",
            [LanguageCode.FRENCH]: "Décrivez comment vous vous sentez en utilisant 4 phrases. Exemple : mâi sà-baai, pùat hǔa, nʉ̀ai mâak, yàak nɔɔn (Je ne me sens pas bien, j'ai mal à la tête, je suis très fatigué, je veux dormir)",
            [LanguageCode.PORTUGUESE]: "Descreva como você está se sentindo usando 4 frases. Exemplo: mâi sà-baai, pùat hǔa, nʉ̀ai mâak, yàak nɔɔn (Eu não estou bem, tenho dor de cabeça, estou muito cansado, quero dormir)",
            [LanguageCode.MANDARIN]: "用 4 個短語描述你的感受。例子：mâi sà-baai, pùat hǔa, nʉ̀ai mâak, yàak nɔɔn（我不舒服，我頭痛，我很累，我想睡覺）",
        },
        speakingType: 'open-ended'
    }
};
