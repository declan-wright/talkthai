import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_2_2: Lesson = {
    id: "2.2",
    title: {
        [LanguageCode.ENGLISH]: "Emotions & States",
        [LanguageCode.FRENCH]: "Émotions et états",
        [LanguageCode.PORTUGUESE]: "Emoções e Estados",
        [LanguageCode.MANDARIN]: "情緒與狀態",
    },
    vocabulary: [
        // Basic positive emotions
        { thai: "ดีใจ", phonetic: "dii-jai", translations: { [LanguageCode.ENGLISH]: "happy/glad", [LanguageCode.FRENCH]: "heureux/content", [LanguageCode.PORTUGUESE]: "feliz/contente", [LanguageCode.MANDARIN]: "高興" } },
        { thai: "ปลื้ม", phonetic: "plʉ̂ʉm", translations: { [LanguageCode.ENGLISH]: "pleased/delighted", [LanguageCode.FRENCH]: "ravi/enchanté", [LanguageCode.PORTUGUESE]: "satisfeito/encantado", [LanguageCode.MANDARIN]: "高興/滿意" } },
        { thai: "ตื่นเต้น", phonetic: "dtʉ̀ʉn-dtên", translations: { [LanguageCode.ENGLISH]: "excited", [LanguageCode.FRENCH]: "excité", [LanguageCode.PORTUGUESE]: "empolgado", [LanguageCode.MANDARIN]: "興奮" } },
        { thai: "ภูมิใจ", phonetic: "phuum-jai", translations: { [LanguageCode.ENGLISH]: "proud", [LanguageCode.FRENCH]: "fier", [LanguageCode.PORTUGUESE]: "orgulhoso", [LanguageCode.MANDARIN]: "自豪" } },
        { thai: "ประทับใจ", phonetic: "bprà-tháp-jai", translations: { [LanguageCode.ENGLISH]: "impressed", [LanguageCode.FRENCH]: "impressionné", [LanguageCode.PORTUGUESE]: "impressionado", [LanguageCode.MANDARIN]: "印象深刻" } },

        // Negative emotions
        { thai: "เศร้า", phonetic: "sâo", translations: { [LanguageCode.ENGLISH]: "sad", [LanguageCode.FRENCH]: "triste", [LanguageCode.PORTUGUESE]: "triste", [LanguageCode.MANDARIN]: "傷心" } },
        { thai: "โกรธ", phonetic: "gròot", translations: { [LanguageCode.ENGLISH]: "angry", [LanguageCode.FRENCH]: "en colère", [LanguageCode.PORTUGUESE]: "bravo", [LanguageCode.MANDARIN]: "生氣" } },
        { thai: "กลัว", phonetic: "gluua", translations: { [LanguageCode.ENGLISH]: "scared/afraid", [LanguageCode.FRENCH]: "effrayé/avoir peur", [LanguageCode.PORTUGUESE]: "com medo", [LanguageCode.MANDARIN]: "害怕" } },
        { thai: "เบื่อ", phonetic: "bʉ̀a", translations: { [LanguageCode.ENGLISH]: "bored", [LanguageCode.FRENCH]: "ennuyé", [LanguageCode.PORTUGUESE]: "entediado", [LanguageCode.MANDARIN]: "無聊" } },
        { thai: "เครียด", phonetic: "khrîat", translations: { [LanguageCode.ENGLISH]: "stressed", [LanguageCode.FRENCH]: "stressé", [LanguageCode.PORTUGUESE]: "estressado", [LanguageCode.MANDARIN]: "壓力大" } },
        { thai: "กังวล", phonetic: "gang-won", translations: { [LanguageCode.ENGLISH]: "worried/anxious", [LanguageCode.FRENCH]: "inquiet/anxieux", [LanguageCode.PORTUGUESE]: "preocupado/ansioso", [LanguageCode.MANDARIN]: "擔心" } },
        { thai: "เครื่องวัดความดัน", phonetic: "khrʉ̂ang-wát-khwaam-dan", translations: { [LanguageCode.ENGLISH]: "blood pressure monitor", [LanguageCode.FRENCH]: "tensiomètre", [LanguageCode.PORTUGUESE]: "medidor de pressão arterial", [LanguageCode.MANDARIN]: "血壓計" } },
        { thai: "ผิดหวัง", phonetic: "phìt-wǎng", translations: { [LanguageCode.ENGLISH]: "disappointed", [LanguageCode.FRENCH]: "déçu", [LanguageCode.PORTUGUESE]: "decepcionado", [LanguageCode.MANDARIN]: "失望" } },
        { thai: "อาย", phonetic: "aai", translations: { [LanguageCode.ENGLISH]: "shy/embarrassed", [LanguageCode.FRENCH]: "timide/gêné", [LanguageCode.PORTUGUESE]: "tímido/envergonhado", [LanguageCode.MANDARIN]: "害羞" } },
        { thai: "อิจฉา", phonetic: "ìt-chǎa", translations: { [LanguageCode.ENGLISH]: "jealous/envious", [LanguageCode.FRENCH]: "jaloux/envieux", [LanguageCode.PORTUGUESE]: "ciumento/invejoso", [LanguageCode.MANDARIN]: "嫉妒" } },

        // Physical & mental states
        { thai: "รำคาญ", phonetic: "ram-khaan", translations: { [LanguageCode.ENGLISH]: "annoyed/irritated", [LanguageCode.FRENCH]: "agacé/irrité", [LanguageCode.PORTUGUESE]: "irritado/aborrecido", [LanguageCode.MANDARIN]: "煩" } },
        { thai: "เสียดาย", phonetic: "sǐa-daai", translations: { [LanguageCode.ENGLISH]: "regretful/pitiful", [LanguageCode.FRENCH]: "regrettable/dommage", [LanguageCode.PORTUGUESE]: "lamentável/que pena", [LanguageCode.MANDARIN]: "可惜" } },
        { thai: "ปวดหัว", phonetic: "bpùat-hǔa", translations: { [LanguageCode.ENGLISH]: "headache", [LanguageCode.FRENCH]: "mal de tête", [LanguageCode.PORTUGUESE]: "dor de cabeça", [LanguageCode.MANDARIN]: "頭痛" } },
        { thai: "ตกใจ", phonetic: "dtòk-jai", translations: { [LanguageCode.ENGLISH]: "startled/shocked", [LanguageCode.FRENCH]: "surpris/choqué", [LanguageCode.PORTUGUESE]: "assustado/chocado", [LanguageCode.MANDARIN]: "嚇一跳" } },
        { thai: "สบายใจ", phonetic: "sà-baai-jai", translations: { [LanguageCode.ENGLISH]: "relieved/at ease", [LanguageCode.FRENCH]: "soulagé/à l'aise", [LanguageCode.PORTUGUESE]: "aliviado/tranquilo", [LanguageCode.MANDARIN]: "放心" } },
        { thai: "งง", phonetic: "ngong", translations: { [LanguageCode.ENGLISH]: "confused", [LanguageCode.FRENCH]: "confus", [LanguageCode.PORTUGUESE]: "confuso", [LanguageCode.MANDARIN]: "困惑" } },
        { thai: "เหงา", phonetic: "ngǎo", translations: { [LanguageCode.ENGLISH]: "lonely", [LanguageCode.FRENCH]: "seul/solitaire", [LanguageCode.PORTUGUESE]: "solitário", [LanguageCode.MANDARIN]: "寂寞" } },

        // Intensity modifiers & expressions
        { thai: "มาก", phonetic: "mâak", translations: { [LanguageCode.ENGLISH]: "very/a lot", [LanguageCode.FRENCH]: "très/beaucoup", [LanguageCode.PORTUGUESE]: "muito", [LanguageCode.MANDARIN]: "很" } },
        { thai: "นิดหน่อย", phonetic: "nít nɔ̀i", translations: { [LanguageCode.ENGLISH]: "a little", [LanguageCode.FRENCH]: "un peu", [LanguageCode.PORTUGUESE]: "um pouco", [LanguageCode.MANDARIN]: "一點點" } },
        { thai: "สุดๆ", phonetic: "sùt sùt", translations: { [LanguageCode.ENGLISH]: "extremely/the most", [LanguageCode.FRENCH]: "extrêmement", [LanguageCode.PORTUGUESE]: "extremamente", [LanguageCode.MANDARIN]: "超級" } },
        { thai: "ทนไม่ไหว", phonetic: "thon mâi wǎi", translations: { [LanguageCode.ENGLISH]: "can't stand it", [LanguageCode.FRENCH]: "ne peut pas supporter", [LanguageCode.PORTUGUESE]: "não aguento", [LanguageCode.MANDARIN]: "受不了" } },

        // Key feeling verbs
        { thai: "รู้สึก", phonetic: "rúu-sʉ̀k", translations: { [LanguageCode.ENGLISH]: "feel", [LanguageCode.FRENCH]: "se sentir", [LanguageCode.PORTUGUESE]: "sentir", [LanguageCode.MANDARIN]: "感覺" } },
        { thai: "ดู", phonetic: "duu", translations: { [LanguageCode.ENGLISH]: "look/seem", [LanguageCode.FRENCH]: "avoir l'air", [LanguageCode.PORTUGUESE]: "parecer", [LanguageCode.MANDARIN]: "看起來" } },
        { thai: "เป็น", phonetic: "bpen", translations: { [LanguageCode.ENGLISH]: "to be", [LanguageCode.FRENCH]: "être", [LanguageCode.PORTUGUESE]: "ser/estar", [LanguageCode.MANDARIN]: "是" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Emotions: The Heart (ใจ) in Every Feeling",
                [LanguageCode.FRENCH]: "Émotions thaïlandaises : Le cœur (ใจ) dans chaque sentiment",
                [LanguageCode.PORTUGUESE]: "Emoções Tailandesas: O Coração (ใจ) em Cada Sentimento",
                [LanguageCode.MANDARIN]: "泰國情緒：每種感受中的心（ใจ）",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai emotional vocabulary is fascinating because many emotions literally include the word **ใจ (jai)** - meaning \"heart\" or \"mind\". This reflects the Thai cultural belief that emotions come from the heart.\n\n**The \"ใจ (jai)\" Emotions:**\n\nNotice how many Thai emotion words use ใจ (heart/mind):\n\n• **ดีใจ (dii-jai)** = happy/glad\n  - Literal: \"good\" + \"heart\"\n  - Most common way to say \"I'm happy\"\n  - \"ผมดีใจมาก\" (phǒm dii-jai mâak) = \"I'm very happy\"\n\n• **มีความสุข (mii khwaam-sùk)** = happy/joyful\n  - Literal: \"have\" + \"happiness\"\n  - More formal/poetic than ดีใจ\n  - Deeper, more sustained happiness\n\n• **เสียใจ (sǐa-jai)** = sad (literally \"lose heart\")\n  - Used for disappointment and sadness\n  - \"เสียใจด้วย\" (sǐa-jai dûai) = \"I'm sorry to hear that\" (showing sympathy)\n\n• **สบายใจ (sà-baai-jai)** = relieved/at ease\n  - Literal: \"comfortable\" + \"heart\"\n  - \"ตอนนี้สบายใจแล้ว\" = \"Now I feel relieved\"\n\n• **ภูมิใจ (phuum-jai)** = proud\n  - Literal: \"land/foundation\" + \"heart\"\n  - \"ผมภูมิใจในตัวคุณ\" = \"I'm proud of you\"\n\n• **ประทับใจ (bprà-tháp-jai)** = impressed\n  - Literal: \"imprint\" + \"heart\"\n  - \"ประทับใจมาก\" = \"Very impressed\"\n\n• **ใจดี (jai-dii)** = kind (from lesson 2.1)\n  - Literal: \"heart\" + \"good\"\n  - Remember this one?\n\n**Basic Emotions - The Essentials:**\n\n**Positive Emotions:**\n\n• **ดีใจ (dii-jai)** = happy/glad\n  - \"ดีใจที่ได้เจอคุณ\" = \"Happy to meet you\"\n\n• **ตื่นเต้น (dtʉ̀ʉn-dtên)** = excited\n  - Literal: \"wake up\" + \"dance\"\n  - \"ตื่นเต้นมาก\" = \"Very excited\"\n  - Used for anticipation and excitement\n\n• **ภูมิใจ (phuum-jai)** = proud\n  - Important in Thai culture!\n  - Parents often say this to children\n\n**Negative Emotions:**\n\n• **เศร้า (sâo)** = sad\n  - Simple, direct sadness\n  - \"ทำไมเศร้า\" = \"Why are you sad?\"\n\n• **โกรธ (gròot)** = angry\n  - \"โกรธเธอ\" = \"Angry at you\"\n  - Thais generally try to avoid showing anger (culture of \"เย็นใจ\" - cool heart)\n\n• **กลัว (gluua)** = scared/afraid\n  - \"กลัวผี\" (gluua phǐi) = \"afraid of ghosts\" (common Thai fear!)\n  - \"กลัวหมา\" = \"afraid of dogs\"\n\n• **เบื่อ (bʉ̀a)** = bored\n  - Very common complaint!\n  - \"เบื่อมาก\" = \"So bored\"\n  - Can also mean \"fed up with\"\n\n• **เครียด (khrîat)** = stressed\n  - Modern Thai word, from English \"stress\"\n  - \"เครียดกับงาน\" = \"stressed about work\"\n  - Very common in Bangkok!\n\n• **กังวล (gang-won)** = worried/anxious\n  - More formal than กลัว\n  - \"กังวลเรื่องสอบ\" = \"worried about the exam\"\n\n• **ผิดหวัง (phìt-wǎng)** = disappointed\n  - Literal: \"wrong\" + \"hope\"\n  - \"ผิดหวังมาก\" = \"Very disappointed\"\n\n• **อาย (aai)** = shy/embarrassed\n  - VERY important in Thai culture!\n  - Thais are often อาย in social situations\n  - \"อายจัง\" = \"So embarrassed!\"\n\n• **อิจฉา (ìt-chǎa)** = jealous/envious\n  - Can be playful or serious\n  - \"อิจฉาเธอ\" = \"Jealous of you\"\n\n**Physical & Mental States:**\n\n• **เหนื่อย (nʉ̀ai)** = tired\n  - Physical tiredness\n  - \"เหนื่อยมาก\" = \"Very tired\"\n\n• **ง่วง (ngûang)** = sleepy/drowsy\n  - Specifically sleepy, not just tired\n  - \"ง่วงนอน\" (ngûang nɔɔn) = \"sleepy\" (want to sleep)\n\n• **ปวดหัว (bpùat-hǔa)** = headache\n  - Literal: \"pain\" + \"head\"\n  - \"ผมปวดหัว\" = \"I have a headache\"\n\n• **ไม่สบาย (mâi sà-baai)** = sick/unwell\n  - Opposite of สบายดี (fine)\n  - \"ไม่สบายหน่อย\" = \"Not feeling well\"\n\n• **งง (ngong)** = confused\n  - Very colloquial!\n  - \"งงมาก\" = \"Very confused\"\n  - \"ทำไมงง\" = \"Why confused?\"\n\n• **เหงา (ngǎo)** = lonely\n  - Emotional loneliness\n  - \"รู้สึกเหงา\" = \"Feel lonely\"\n\n**Intensity Modifiers - Making Emotions Stronger:**\n\n• **มาก (mâak)** = very/a lot\n  - Add to ANY emotion: ดีใจมาก, เศร้ามาก, เหนื่อยมาก\n  - Essential word!\n\n• **นิดหน่อย (nít nɔ̀i)** = a little\n  - Downplays the feeling\n  - \"เหนื่อยนิดหน่อย\" = \"A little tired\"\n  - \"เศร้านิดหน่อย\" = \"A bit sad\"\n\n• **สุดๆ (sùt sùt)** = extremely/the most\n  - Super casual and fun!\n  - \"ดีใจสุดๆ\" = \"Extremely happy!\"\n  - \"น่ารักสุดๆ\" = \"Super cute!\"\n\n• **ทนไม่ไหว (thon mâi wǎi)** = can't stand it\n  - Literal: \"endure\" + \"not\" + \"able\"\n  - \"เหนื่อยจนทนไม่ไหว\" = \"So tired I can't stand it\"\n  - \"โกรธจนทนไม่ไหว\" = \"So angry I can't take it\"\n\n**Expressing Feelings - Sentence Patterns:**\n\n1. **รู้สึก (rúu-sʉ̀k) + [emotion]** = \"feel [emotion]\"\n   - \"ผมรู้สึกดีใจ\" = \"I feel happy\"\n   - \"รู้สึกเหนื่อย\" = \"Feel tired\"\n   - \"รู้สึกเครียด\" = \"Feel stressed\"\n\n2. **[Subject] + [emotion]** = \"[Subject] is [emotion]\"\n   - \"ผมเศร้า\" = \"I'm sad\"\n   - \"เธอดูเหนื่อย\" = \"You look tired\" (ดู = look/seem)\n   - \"เขาโกรธ\" = \"He/She is angry\"\n\n3. **[emotion] + มาก** = \"very [emotion]\"\n   - \"ดีใจมาก\" = \"Very happy\"\n   - \"เครียดมาก\" = \"Very stressed\"\n\n4. **[emotion] + นิดหน่อย** = \"a little [emotion]\"\n   - \"เบื่อนิดหน่อย\" = \"A bit bored\"\n   - \"กังวลนิดหน่อย\" = \"A little worried\"\n\n5. **ทำไม + [emotion]** = \"Why [emotion]?\"\n   - \"ทำไมเศร้า\" = \"Why are you sad?\"\n   - \"ทำไมโกรธ\" = \"Why are you angry?\"\n\n**Complete Examples:**\n\n• \"วันนี้ผมดีใจมาก เพราะได้เจอเพื่อน\"\n  (wan-níi phǒm dii-jai mâak phráw dâai jəə phʉ̂an)\n  = \"Today I'm very happy because I met my friend\"\n\n• \"เธอดูเหนื่อย ไม่สบายหรือเปล่า\"\n  (thəə duu nʉ̀ai. mâi sà-baai rʉ̌ʉ bplào)\n  = \"You look tired. Are you not feeling well?\"\n\n• \"ผมเครียดมากกับงาน ปวดหัวด้วย\"\n  (phǒm khrîat mâak gàp ngaan. bpùat-hǔa dûai)\n  = \"I'm very stressed about work. I have a headache too.\"\n\n• \"อย่าโกรธนะ ขอโทษ\"\n  (yàa gròot ná. khɔ̌ɔ-thôht)\n  = \"Don't be angry, okay? Sorry.\"\n\n**Cultural Notes:**\n\n1. **Cool Heart Culture (ใจเย็น)**: Thais value emotional control. The ideal is to be \"ใจเย็น\" (jai yen) - \"cool heart\" - staying calm and not showing strong negative emotions.\n\n2. **Saving Face**: Being \"อาย\" (embarrassed) is taken seriously. Thais avoid causing others to lose face or feel embarrassed.\n\n3. **Smiling Through**: Thailand is called \"Land of Smiles\" - even when upset, many Thais will smile. This doesn't mean they're happy, just maintaining harmony!\n\n4. **Asking About Feelings**: It's common to ask \"เป็นอะไร\" (bpen à-rai) = \"What's wrong?\" if someone looks upset.\n\n5. **Sympathy Expression**: When someone shares bad news, say \"เสียใจด้วย\" (sǐa-jai dûai) = \"I'm sorry to hear that\"\n\nMastering emotions vocabulary helps you:\n- Express yourself authentically\n- Understand how others feel\n- Navigate Thai social situations\n- Build deeper connections with Thai friends!",
                [LanguageCode.FRENCH]: "Le vocabulaire émotionnel thaïlandais est fascinant car de nombreuses émotions incluent littéralement le mot **ใจ (jai)** - signifiant \"cœur\" ou \"esprit\". Cela reflète la croyance culturelle thaïlandaise selon laquelle les émotions viennent du cœur.\n\n**Les émotions \"ใจ (jai)\" :**\n\n• **ดีใจ (dii-jai)** = heureux/content\n  - Littéral : \"bon\" + \"cœur\"\n  - Façon la plus courante de dire \"Je suis heureux\"\n\n• **มีความสุข (mii khwaam-sùk)** = heureux/joyeux\n  - Plus formel/poétique que ดีใจ\n\n• **สบายใจ (sà-baai-jai)** = soulagé/à l'aise\n  - Littéral : \"confortable\" + \"cœur\"\n\n**Émotions de base :**\n\n**Émotions positives :**\n• **ดีใจ (dii-jai)** = heureux\n• **ตื่นเต้น (dtʉ̀ʉn-dtên)** = excité\n• **ภูมิใจ (phuum-jai)** = fier\n\n**Émotions négatives :**\n• **เศร้า (sâo)** = triste\n• **โกรธ (gròot)** = en colère\n• **กลัว (gluua)** = effrayé\n• **เบื่อ (bʉ̀a)** = ennuyé\n• **เครียด (khrîat)** = stressé\n• **กังวล (gang-won)** = inquiet\n\n**Modificateurs d'intensité :**\n• **มาก (mâak)** = très\n• **นิดหน่อย (nít nɔ̀i)** = un peu\n• **สุดๆ (sùt sùt)** = extrêmement",
                [LanguageCode.PORTUGUESE]: "O vocabulário emocional tailandês é fascinante porque muitas emoções incluem literalmente a palavra **ใจ (jai)** - que significa \"coração\" ou \"mente\". Isso reflete a crença cultural tailandesa de que as emoções vêm do coração.\n\n**As emoções \"ใจ (jai)\":**\n\n• **ดีใจ (dii-jai)** = feliz/contente\n  - Literal: \"bom\" + \"coração\"\n  - Maneira mais comum de dizer \"Estou feliz\"\n\n• **มีความสุข (mii khwaam-sùk)** = feliz/alegre\n  - Mais formal/poético que ดีใจ\n\n• **สบายใจ (sà-baai-jai)** = aliviado/tranquilo\n  - Literal: \"confortável\" + \"coração\"\n\n**Emoções básicas:**\n\n**Emoções positivas:**\n• **ดีใจ (dii-jai)** = feliz\n• **ตื่นเต้น (dtʉ̀ʉn-dtên)** = empolgado\n• **ภูมิใจ (phuum-jai)** = orgulhoso\n\n**Emoções negativas:**\n• **เศร้า (sâo)** = triste\n• **โกรธ (gròot)** = bravo\n• **กลัว (gluua)** = com medo\n• **เบื่อ (bʉ̀a)** = entediado\n• **เครียด (khrîat)** = estressado\n• **กังวล (gang-won)** = preocupado\n\n**Modificadores de intensidade:**\n• **มาก (mâak)** = muito\n• **นิดหน่อย (nít nɔ̀i)** = um pouco\n• **สุดๆ (sùt sùt)** = extremamente",
                [LanguageCode.MANDARIN]: "泰語情緒詞彙很有趣，因為許多情緒字面上包含**ใจ (jai)** - 意思是「心」或「意」。這反映了泰國文化認為情緒來自心的信念。\n\n**「ใจ (jai)」情緒：**\n\n• **ดีใจ (dii-jai)** = 高興\n  - 字面：「好」+「心」\n  - 說「我很高興」最常見的方式\n\n• **มีความสุข (mii khwaam-sùk)** = 幸福\n  - 比 ดีใจ 更正式/詩意\n\n• **สบายใจ (sà-baai-jai)** = 放心\n  - 字面：「舒服」+「心」\n\n**基本情緒：**\n\n**正面情緒：**\n• **ดีใจ (dii-jai)** = 高興\n• **ตื่นเต้น (dtʉ̀ʉn-dtên)** = 興奮\n• **ภูมิใจ (phuum-jai)** = 自豪\n\n**負面情緒：**\n• **เศร้า (sâo)** = 傷心\n• **โกรธ (gròot)** = 生氣\n• **กลัว (gluua)** = 害怕\n• **เบื่อ (bʉ̀a)** = 無聊\n• **เครียด (khrîat)** = 壓力大\n• **กังวล (gang-won)** = 擔心\n\n**強度修飾詞：**\n• **มาก (mâak)** = 很\n• **นิดหน่อย (nít nɔ̀i)** = 一點點\n• **สุดๆ (sùt sùt)** = 超級",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the basic emotions.",
                [LanguageCode.FRENCH]: "Associez les émotions de base.",
                [LanguageCode.PORTUGUESE]: "Relacione as emoções básicas.",
                [LanguageCode.MANDARIN]: "配對基本情緒。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "happy/glad", [LanguageCode.FRENCH]: "heureux/content", [LanguageCode.PORTUGUESE]: "feliz/contente", [LanguageCode.MANDARIN]: "高興" }, answer: { [LanguageCode.ENGLISH]: "ดีใจ", [LanguageCode.FRENCH]: "ดีใจ", [LanguageCode.PORTUGUESE]: "ดีใจ", [LanguageCode.MANDARIN]: "ดีใจ" } },
                { prompt: { [LanguageCode.ENGLISH]: "sad", [LanguageCode.FRENCH]: "triste", [LanguageCode.PORTUGUESE]: "triste", [LanguageCode.MANDARIN]: "傷心" }, answer: { [LanguageCode.ENGLISH]: "เศร้า", [LanguageCode.FRENCH]: "เศร้า", [LanguageCode.PORTUGUESE]: "เศร้า", [LanguageCode.MANDARIN]: "เศร้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "angry", [LanguageCode.FRENCH]: "en colère", [LanguageCode.PORTUGUESE]: "bravo", [LanguageCode.MANDARIN]: "生氣" }, answer: { [LanguageCode.ENGLISH]: "โกรธ", [LanguageCode.FRENCH]: "โกรธ", [LanguageCode.PORTUGUESE]: "โกรธ", [LanguageCode.MANDARIN]: "โกรธ" } },
                { prompt: { [LanguageCode.ENGLISH]: "scared/afraid", [LanguageCode.FRENCH]: "effrayé/avoir peur", [LanguageCode.PORTUGUESE]: "com medo", [LanguageCode.MANDARIN]: "害怕" }, answer: { [LanguageCode.ENGLISH]: "กลัว", [LanguageCode.FRENCH]: "กลัว", [LanguageCode.PORTUGUESE]: "กลัว", [LanguageCode.MANDARIN]: "กลัว" } },
                { prompt: { [LanguageCode.ENGLISH]: "excited", [LanguageCode.FRENCH]: "excité", [LanguageCode.PORTUGUESE]: "empolgado", [LanguageCode.MANDARIN]: "興奮" }, answer: { [LanguageCode.ENGLISH]: "ตื่นเต้น", [LanguageCode.FRENCH]: "ตื่นเต้น", [LanguageCode.PORTUGUESE]: "ตื่นเต้น", [LanguageCode.MANDARIN]: "ตื่นเต้น" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the sentences with the correct emotion.",
                [LanguageCode.FRENCH]: "Complétez les phrases avec l'émotion correcte.",
                [LanguageCode.PORTUGUESE]: "Complete as frases com a emoção correta.",
                [LanguageCode.MANDARIN]: "用正確的情緒完成句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผม___มากเพราะสอบผ่าน", [LanguageCode.FRENCH]: "Je suis très___ parce que j'ai réussi l'examen", [LanguageCode.PORTUGUESE]: "Estou muito___ porque passei no exame", [LanguageCode.MANDARIN]: "我很___ 因為考試及格了" }, correctAnswer: "ดีใจ", end: { [LanguageCode.ENGLISH]: " (happy)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___เพราะเพื่อนย้ายไป", [LanguageCode.FRENCH]: "Elle est___ parce que son ami a déménagé", [LanguageCode.PORTUGUESE]: "Ela está___ porque o amigo se mudou", [LanguageCode.MANDARIN]: "她___ 因為朋友搬走了" }, correctAnswer: "เศร้า", end: { [LanguageCode.ENGLISH]: " (sad)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พวกเรา___มากเกี่ยวกับงานพรุ่งนี้", [LanguageCode.FRENCH]: "Nous sommes très___ au sujet du travail demain", [LanguageCode.PORTUGUESE]: "Estamos muito___ sobre o trabalho amanhã", [LanguageCode.MANDARIN]: "我們對明天的工作很___" }, correctAnswer: "เครียด", end: { [LanguageCode.ENGLISH]: " (stressed)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา___เพราะทำงานหนัก", [LanguageCode.FRENCH]: "Il/Elle est___ parce qu'il/elle a travaillé dur", [LanguageCode.PORTUGUESE]: "Ele/Ela está___ porque trabalhou muito", [LanguageCode.MANDARIN]: "他/她___ 因為工作很辛苦" }, correctAnswer: "เหนื่อย", end: { [LanguageCode.ENGLISH]: " (tired)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the physical and mental states.",
                [LanguageCode.FRENCH]: "Associez les états physiques et mentaux.",
                [LanguageCode.PORTUGUESE]: "Relacione os estados físicos e mentais.",
                [LanguageCode.MANDARIN]: "配對身體和心理狀態。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "tired", [LanguageCode.FRENCH]: "fatigué", [LanguageCode.PORTUGUESE]: "cansado", [LanguageCode.MANDARIN]: "累" }, answer: { [LanguageCode.ENGLISH]: "เหนื่อย", [LanguageCode.FRENCH]: "เหนื่อย", [LanguageCode.PORTUGUESE]: "เหนื่อย", [LanguageCode.MANDARIN]: "เหนื่อย" } },
                { prompt: { [LanguageCode.ENGLISH]: "sleepy/drowsy", [LanguageCode.FRENCH]: "somnolent", [LanguageCode.PORTUGUESE]: "sonolento", [LanguageCode.MANDARIN]: "困" }, answer: { [LanguageCode.ENGLISH]: "ง่วง", [LanguageCode.FRENCH]: "ง่วง", [LanguageCode.PORTUGUESE]: "ง่วง", [LanguageCode.MANDARIN]: "ง่วง" } },
                { prompt: { [LanguageCode.ENGLISH]: "sick/unwell", [LanguageCode.FRENCH]: "malade", [LanguageCode.PORTUGUESE]: "doente", [LanguageCode.MANDARIN]: "不舒服" }, answer: { [LanguageCode.ENGLISH]: "ไม่สบาย", [LanguageCode.FRENCH]: "ไม่สบาย", [LanguageCode.PORTUGUESE]: "ไม่สบาย", [LanguageCode.MANDARIN]: "ไม่สบาย" } },
                { prompt: { [LanguageCode.ENGLISH]: "confused", [LanguageCode.FRENCH]: "confus", [LanguageCode.PORTUGUESE]: "confuso", [LanguageCode.MANDARIN]: "困惑" }, answer: { [LanguageCode.ENGLISH]: "งง", [LanguageCode.FRENCH]: "งง", [LanguageCode.PORTUGUESE]: "งง", [LanguageCode.MANDARIN]: "งง" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the emotional expressions in correct order.",
                [LanguageCode.FRENCH]: "Mettez les expressions émotionnelles dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque as expressões emocionais na ordem correta.",
                [LanguageCode.MANDARIN]: "將情緒表達按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["ผม", "รู้สึก", "ดีใจ", "มาก"], hint: { [LanguageCode.ENGLISH]: "I feel very happy.", [LanguageCode.FRENCH]: "Je me sens très heureux.", [LanguageCode.PORTUGUESE]: "Me sinto muito feliz.", [LanguageCode.MANDARIN]: "我感覺很高興。" } },
                { correctOrder: ["ทำไม", "เธอ", "เศร้า"], hint: { [LanguageCode.ENGLISH]: "Why are you sad?", [LanguageCode.FRENCH]: "Pourquoi es-tu triste ?", [LanguageCode.PORTUGUESE]: "Por que você está triste?", [LanguageCode.MANDARIN]: "你為什麼傷心？" } },
                { correctOrder: ["เขา", "ดู", "เหนื่อย", "มาก"], hint: { [LanguageCode.ENGLISH]: "He/She looks very tired.", [LanguageCode.FRENCH]: "Il/Elle a l'air très fatigué(e).", [LanguageCode.PORTUGUESE]: "Ele/Ela parece muito cansado(a).", [LanguageCode.MANDARIN]: "他/她看起來很累。" } },
                { correctOrder: ["อย่า", "โกรธ", "นะ"], hint: { [LanguageCode.ENGLISH]: "Don't be angry, okay?", [LanguageCode.FRENCH]: "Ne sois pas en colère, d'accord ?", [LanguageCode.PORTUGUESE]: "Não fique bravo, ok?", [LanguageCode.MANDARIN]: "別生氣，好嗎？" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct emotion for each situation.",
                [LanguageCode.FRENCH]: "Choisissez l'émotion correcte pour chaque situation.",
                [LanguageCode.PORTUGUESE]: "Escolha a emoção correta para cada situação.",
                [LanguageCode.MANDARIN]: "為每種情況選擇正確的情緒。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You just received great news. You are:", [LanguageCode.FRENCH]: "Vous venez de recevoir une excellente nouvelle. Vous êtes :", [LanguageCode.PORTUGUESE]: "Você acabou de receber uma ótima notícia. Você está:", [LanguageCode.MANDARIN]: "你剛收到好消息。你：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เศร้า", [LanguageCode.FRENCH]: "เศร้า", [LanguageCode.PORTUGUESE]: "เศร้า", [LanguageCode.MANDARIN]: "เศร้า" },
                        { [LanguageCode.ENGLISH]: "ดีใจ", [LanguageCode.FRENCH]: "ดีใจ", [LanguageCode.PORTUGUESE]: "ดีใจ", [LanguageCode.MANDARIN]: "ดีใจ" },
                        { [LanguageCode.ENGLISH]: "โกรธ", [LanguageCode.FRENCH]: "โกรธ", [LanguageCode.PORTUGUESE]: "โกรธ", [LanguageCode.MANDARIN]: "โกรธ" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You worked for 12 hours straight. You are:", [LanguageCode.FRENCH]: "Vous avez travaillé 12 heures d'affilée. Vous êtes :", [LanguageCode.PORTUGUESE]: "Você trabalhou 12 horas seguidas. Você está:", [LanguageCode.MANDARIN]: "你連續工作了12小時。你：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เหนื่อย", [LanguageCode.FRENCH]: "เหนื่อย", [LanguageCode.PORTUGUESE]: "เหนื่อย", [LanguageCode.MANDARIN]: "เหนื่อย" },
                        { [LanguageCode.ENGLISH]: "ตื่นเต้น", [LanguageCode.FRENCH]: "ตื่นเต้น", [LanguageCode.PORTUGUESE]: "ตื่นเต้น", [LanguageCode.MANDARIN]: "ตื่นเต้น" },
                        { [LanguageCode.ENGLISH]: "ภูมิใจ", [LanguageCode.FRENCH]: "ภูมิใจ", [LanguageCode.PORTUGUESE]: "ภูมิใจ", [LanguageCode.MANDARIN]: "ภูมิใจ" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Tomorrow is your birthday party. You are:", [LanguageCode.FRENCH]: "Demain c'est votre fête d'anniversaire. Vous êtes :", [LanguageCode.PORTUGUESE]: "Amanhã é sua festa de aniversário. Você está:", [LanguageCode.MANDARIN]: "明天是你的生日派對。你：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เบื่อ", [LanguageCode.FRENCH]: "เบื่อ", [LanguageCode.PORTUGUESE]: "เบื่อ", [LanguageCode.MANDARIN]: "เบื่อ" },
                        { [LanguageCode.ENGLISH]: "กลัว", [LanguageCode.FRENCH]: "กลัว", [LanguageCode.PORTUGUESE]: "กลัว", [LanguageCode.MANDARIN]: "กลัว" },
                        { [LanguageCode.ENGLISH]: "ตื่นเต้น", [LanguageCode.FRENCH]: "ตื่นเต้น", [LanguageCode.PORTUGUESE]: "ตื่นเต้น", [LanguageCode.MANDARIN]: "ตื่นเต้น" },
                    ],
                    correctIndex: 2
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You have an important exam but didn't study. You are:", [LanguageCode.FRENCH]: "Vous avez un examen important mais n'avez pas étudié. Vous êtes :", [LanguageCode.PORTUGUESE]: "Você tem uma prova importante mas não estudou. Você está:", [LanguageCode.MANDARIN]: "你有重要考試但沒讀書。你：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กังวล", [LanguageCode.FRENCH]: "กังวล", [LanguageCode.PORTUGUESE]: "กังวล", [LanguageCode.MANDARIN]: "กังวล" },
                        { [LanguageCode.ENGLISH]: "ดีใจ", [LanguageCode.FRENCH]: "ดีใจ", [LanguageCode.PORTUGUESE]: "ดีใจ", [LanguageCode.MANDARIN]: "ดีใจ" },
                        { [LanguageCode.ENGLISH]: "สบายใจ", [LanguageCode.FRENCH]: "สบายใจ", [LanguageCode.PORTUGUESE]: "สบายใจ", [LanguageCode.MANDARIN]: "สบายใจ" },
                    ],
                    correctIndex: 0
                },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete with intensity modifiers (มาก, นิดหน่อย, สุดๆ).",
                [LanguageCode.FRENCH]: "Complétez avec les modificateurs d'intensité (มาก, นิดหน่อย, สุดๆ).",
                [LanguageCode.PORTUGUESE]: "Complete com modificadores de intensidade (มาก, นิดหน่อย, สุดๆ).",
                [LanguageCode.MANDARIN]: "用強度修飾詞完成（มาก, นิดหน่อย, สุดๆ）。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผมดีใจ___", [LanguageCode.FRENCH]: "Je suis___heureux", [LanguageCode.PORTUGUESE]: "Estou___feliz", [LanguageCode.MANDARIN]: "我___高興" }, correctAnswer: "มาก/สุดๆ", end: { [LanguageCode.ENGLISH]: " (very/extremely happy)", [LanguageCode.FRENCH]: " (très/extrêmement)", [LanguageCode.PORTUGUESE]: " (muito/extremamente)", [LanguageCode.MANDARIN]: " (很/超級)" } },
                { start: { [LanguageCode.ENGLISH]: "เหนื่อย___เท่านั้น", [LanguageCode.FRENCH]: "Juste___fatigué", [LanguageCode.PORTUGUESE]: "Apenas___cansado", [LanguageCode.MANDARIN]: "只是___累" }, correctAnswer: "นิดหน่อย", end: { [LanguageCode.ENGLISH]: " (a little tired)", [LanguageCode.FRENCH]: " (un peu)", [LanguageCode.PORTUGUESE]: " (um pouco)", [LanguageCode.MANDARIN]: " (一點點)" } },
                { start: { [LanguageCode.ENGLISH]: "น่ารัก___", [LanguageCode.FRENCH]: "___mignon", [LanguageCode.PORTUGUESE]: "___fofo", [LanguageCode.MANDARIN]: "___可愛" }, correctAnswer: "สุดๆ", end: { [LanguageCode.ENGLISH]: " (super cute)", [LanguageCode.FRENCH]: " (super)", [LanguageCode.PORTUGUESE]: " (super)", [LanguageCode.MANDARIN]: " (超級)" } },
                { start: { [LanguageCode.ENGLISH]: "เครียด___กับงาน", [LanguageCode.FRENCH]: "___stressé au sujet du travail", [LanguageCode.PORTUGUESE]: "___estressado com o trabalho", [LanguageCode.MANDARIN]: "對工作___壓力大" }, correctAnswer: "มาก", end: { [LanguageCode.ENGLISH]: " (very stressed)", [LanguageCode.FRENCH]: " (très)", [LanguageCode.PORTUGUESE]: " (muito)", [LanguageCode.MANDARIN]: " (很)" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the complex emotions.",
                [LanguageCode.FRENCH]: "Associez les émotions complexes.",
                [LanguageCode.PORTUGUESE]: "Relacione as emoções complexas.",
                [LanguageCode.MANDARIN]: "配對複雜情緒。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "proud", [LanguageCode.FRENCH]: "fier", [LanguageCode.PORTUGUESE]: "orgulhoso", [LanguageCode.MANDARIN]: "自豪" }, answer: { [LanguageCode.ENGLISH]: "ภูมิใจ", [LanguageCode.FRENCH]: "ภูมิใจ", [LanguageCode.PORTUGUESE]: "ภูมิใจ", [LanguageCode.MANDARIN]: "ภูมิใจ" } },
                { prompt: { [LanguageCode.ENGLISH]: "impressed", [LanguageCode.FRENCH]: "impressionné", [LanguageCode.PORTUGUESE]: "impressionado", [LanguageCode.MANDARIN]: "印象深刻" }, answer: { [LanguageCode.ENGLISH]: "ประทับใจ", [LanguageCode.FRENCH]: "ประทับใจ", [LanguageCode.PORTUGUESE]: "ประทับใจ", [LanguageCode.MANDARIN]: "ประทับใจ" } },
                { prompt: { [LanguageCode.ENGLISH]: "disappointed", [LanguageCode.FRENCH]: "déçu", [LanguageCode.PORTUGUESE]: "decepcionado", [LanguageCode.MANDARIN]: "失望" }, answer: { [LanguageCode.ENGLISH]: "ผิดหวัง", [LanguageCode.FRENCH]: "ผิดหวัง", [LanguageCode.PORTUGUESE]: "ผิดหวัง", [LanguageCode.MANDARIN]: "ผิดหวัง" } },
                { prompt: { [LanguageCode.ENGLISH]: "jealous/envious", [LanguageCode.FRENCH]: "jaloux/envieux", [LanguageCode.PORTUGUESE]: "ciumento/invejoso", [LanguageCode.MANDARIN]: "嫉妒" }, answer: { [LanguageCode.ENGLISH]: "อิจฉา", [LanguageCode.FRENCH]: "อิจฉา", [LanguageCode.PORTUGUESE]: "อิจฉา", [LanguageCode.MANDARIN]: "อิจฉา" } },
                { prompt: { [LanguageCode.ENGLISH]: "shy/embarrassed", [LanguageCode.FRENCH]: "timide/gêné", [LanguageCode.PORTUGUESE]: "tímido/envergonhado", [LanguageCode.MANDARIN]: "害羞" }, answer: { [LanguageCode.ENGLISH]: "อาย", [LanguageCode.FRENCH]: "อาย", [LanguageCode.PORTUGUESE]: "อาย", [LanguageCode.MANDARIN]: "อาย" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete emotional conversations.",
                [LanguageCode.FRENCH]: "Complétez les conversations émotionnelles.",
                [LanguageCode.PORTUGUESE]: "Complete conversas emocionais.",
                [LanguageCode.MANDARIN]: "完成情緒對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A: ทำไม___? B: เพราะสอบตก", [LanguageCode.FRENCH]: "A: Pourquoi___? B: Parce que j'ai raté l'examen", [LanguageCode.PORTUGUESE]: "A: Por que___? B: Porque reprovei no exame", [LanguageCode.MANDARIN]: "A: 為什麼___？ B: 因為考試沒過" }, correctAnswer: "เศร้า", end: { [LanguageCode.ENGLISH]: " (sad)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: คุณดู___มาก B: ใช่ ทำงานทั้งคืน", [LanguageCode.FRENCH]: "A: Tu as l'air très___ B: Oui, j'ai travaillé toute la nuit", [LanguageCode.PORTUGUESE]: "A: Você parece muito___ B: Sim, trabalhei a noite toda", [LanguageCode.MANDARIN]: "A: 你看起來很___ B: 是的，工作了一整晚" }, correctAnswer: "เหนื่อย", end: { [LanguageCode.ENGLISH]: " (tired)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: ___ไปเที่ยวพรุ่งนี้ B: ผมก็___เหมือนกัน", [LanguageCode.FRENCH]: "A: J'ai hâte de voyager demain B: Moi aussi je suis___", [LanguageCode.PORTUGUESE]: "A: Empolgado para viajar amanhã B: Eu também estou___", [LanguageCode.MANDARIN]: "A: ___明天去旅行 B: 我也___" }, correctAnswer: "ตื่นเต้น", end: { [LanguageCode.ENGLISH]: " (excited)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "อย่า___นะ ผมขอโทษ", [LanguageCode.FRENCH]: "Ne sois pas___, je suis désolé", [LanguageCode.PORTUGUESE]: "Não fique___, desculpa", [LanguageCode.MANDARIN]: "別___，對不起" }, correctAnswer: "โกรธ", end: { [LanguageCode.ENGLISH]: " (angry)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best response to show empathy.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure réponse pour montrer de l'empathie.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor resposta para mostrar empatia.",
                [LanguageCode.MANDARIN]: "選擇最能表示同理心的回答。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Friend: 'ผมสอบตก' (I failed the exam). You say:", [LanguageCode.FRENCH]: "Ami : 'ผมสอบตก' (J'ai raté l'examen). Vous dites :", [LanguageCode.PORTUGUESE]: "Amigo: 'ผมสอบตก' (Reprovei no exame). Você diz:", [LanguageCode.MANDARIN]: "朋友：「ผมสอบตก」（我考試沒過）。你說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ดีใจมาก", [LanguageCode.FRENCH]: "ดีใจมาก", [LanguageCode.PORTUGUESE]: "ดีใจมาก", [LanguageCode.MANDARIN]: "ดีใจมาก" },
                        { [LanguageCode.ENGLISH]: "เสียใจด้วย", [LanguageCode.FRENCH]: "เสียใจด้วย", [LanguageCode.PORTUGUESE]: "เสียใจด้วย", [LanguageCode.MANDARIN]: "เสียใจด้วย" },
                        { [LanguageCode.ENGLISH]: "ตลกมาก", [LanguageCode.FRENCH]: "ตลกมาก", [LanguageCode.PORTUGUESE]: "ตลกมาก", [LanguageCode.MANDARIN]: "ตลกมาก" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Friend looks upset. You ask:", [LanguageCode.FRENCH]: "L'ami a l'air contrarié. Vous demandez :", [LanguageCode.PORTUGUESE]: "O amigo parece chateado. Você pergunta:", [LanguageCode.MANDARIN]: "朋友看起來不開心。你問：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เป็นอะไร", [LanguageCode.FRENCH]: "เป็นอะไร", [LanguageCode.PORTUGUESE]: "เป็นอะไร", [LanguageCode.MANDARIN]: "เป็นอะไร" },
                        { [LanguageCode.ENGLISH]: "สนุกไหม", [LanguageCode.FRENCH]: "สนุกไหม", [LanguageCode.PORTUGUESE]: "สนุกไหม", [LanguageCode.MANDARIN]: "สนุกไหม" },
                        { [LanguageCode.ENGLISH]: "อร่อยไหม", [LanguageCode.FRENCH]: "อร่อยไหม", [LanguageCode.PORTUGUESE]: "อร่อยไหม", [LanguageCode.MANDARIN]: "อร่อยไหม" },
                    ],
                    correctIndex: 0
                },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete emotional expressions.",
                [LanguageCode.FRENCH]: "Construisez des expressions émotionnelles complètes.",
                [LanguageCode.PORTUGUESE]: "Construa expressões emocionais completas.",
                [LanguageCode.MANDARIN]: "組成完整的情緒表達。",
            },
            sentences: [
                { correctOrder: ["ผม", "รู้สึก", "เครียด", "มาก", "กับ", "งาน"], hint: { [LanguageCode.ENGLISH]: "I feel very stressed about work.", [LanguageCode.FRENCH]: "Je me sens très stressé au sujet du travail.", [LanguageCode.PORTUGUESE]: "Me sinto muito estressado com o trabalho.", [LanguageCode.MANDARIN]: "我對工作感到很大壓力。" } },
                { correctOrder: ["เธอ", "ดู", "ง่วง", "นอน", "หน่อย", "ไหม"], hint: { [LanguageCode.ENGLISH]: "You look sleepy, want to sleep a bit?", [LanguageCode.FRENCH]: "Tu as l'air somnolent, veux-tu dormir un peu ?", [LanguageCode.PORTUGUESE]: "Você parece sonolento, quer dormir um pouco?", [LanguageCode.MANDARIN]: "你看起來很困，想睡一下嗎？" } },
                { correctOrder: ["พวกเรา", "ตื่นเต้น", "มาก", "ที่", "ได้", "ไป", "เที่ยว"], hint: { [LanguageCode.ENGLISH]: "We are very excited to go traveling.", [LanguageCode.FRENCH]: "Nous sommes très excités d'aller voyager.", [LanguageCode.PORTUGUESE]: "Estamos muito empolgados para viajar.", [LanguageCode.MANDARIN]: "我們對去旅行很興奮。" } },
                { correctOrder: ["เขา", "ภูมิใจ", "ใน", "ตัว", "ลูก", "มาก"], hint: { [LanguageCode.ENGLISH]: "He/She is very proud of their child.", [LanguageCode.FRENCH]: "Il/Elle est très fier/fière de son enfant.", [LanguageCode.PORTUGUESE]: "Ele/Ela está muito orgulhoso(a) do filho.", [LanguageCode.MANDARIN]: "他/她對孩子很自豪。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete descriptions of how people look and feel.",
                [LanguageCode.FRENCH]: "Complétez les descriptions de l'apparence et des sentiments des gens.",
                [LanguageCode.PORTUGUESE]: "Complete descrições de como as pessoas parecem e se sentem.",
                [LanguageCode.MANDARIN]: "完成對人們外表和感受的描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เธอดู___มาก ไม่สบายหรือเปล่า", [LanguageCode.FRENCH]: "Tu as l'air très___ tu es malade ?", [LanguageCode.PORTUGUESE]: "Você parece muito___ está doente?", [LanguageCode.MANDARIN]: "你看起來很___ 是不是不舒服？" }, correctAnswer: "เหนื่อย/ไม่สบาย", end: { [LanguageCode.ENGLISH]: " (tired/sick)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผม___ในตัวคุณมาก ทำได้ดีจัง", [LanguageCode.FRENCH]: "Je suis très___de toi, bien joué", [LanguageCode.PORTUGUESE]: "Estou muito___de você, muito bem", [LanguageCode.MANDARIN]: "我很___你，做得好" }, correctAnswer: "ภูมิใจ", end: { [LanguageCode.ENGLISH]: " (proud)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เครียดจน___", [LanguageCode.FRENCH]: "Tellement stressé que je___", [LanguageCode.PORTUGUESE]: "Tão estressado que___", [LanguageCode.MANDARIN]: "壓力大到___" }, correctAnswer: "ทนไม่ไหว/ปวดหัว", end: { [LanguageCode.ENGLISH]: " (can't stand it/headache)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___สุดๆเลย ไม่เคยเห็นของแบบนี้", [LanguageCode.FRENCH]: "Extrêmement___ je n'ai jamais vu quelque chose comme ça", [LanguageCode.PORTUGUESE]: "Extremamente___ nunca vi algo assim", [LanguageCode.MANDARIN]: "超級___ 從沒見過這樣的東西" }, correctAnswer: "ประทับใจ", end: { [LanguageCode.ENGLISH]: " (impressed)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Reading Emotions: The Thai Way",
                [LanguageCode.FRENCH]: "Lire les émotions : À la manière thaïlandaise",
                [LanguageCode.PORTUGUESE]: "Lendo Emoções: O Jeito Tailandês",
                [LanguageCode.MANDARIN]: "解讀情緒：泰國方式",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Understanding Thai Emotional Expression:**\n\nThais express emotions differently than Westerners. Here's what you need to know:\n\n**1. The Smile Has Many Meanings:**\n\nA smile in Thailand doesn't always mean happiness:\n• **Happy smile** = genuinely pleased\n• **Polite smile** = being courteous\n• **Embarrassed smile** = feeling อาย (shy)\n• **Nervous smile** = uncomfortable situation\n• **Apologetic smile** = saying sorry without words\n\n**2. Emotional Control (ใจเย็น - Cool Heart):**\n\nThais highly value **ใจเย็น (jai yen)** - keeping a \"cool heart\":\n• Showing strong anger (โกรธมาก) is considered immature\n• Better to stay calm even when upset\n• **ใจร้อน (jai rɔ́ɔn)** = \"hot heart\" = quick to anger (negative trait)\n\n**3. Saving Face (ไม่เสียหน้า):**\n\nAvoiding embarrassment (อาย) is crucial:\n• Don't criticize people publicly\n• Don't make others feel อาย\n• If someone is อาย, be gentle and understanding\n\n**4. Reading Between the Lines:**\n\nThais often don't express negative emotions directly:\n• **\"ไม่เป็นไร\"** (it's okay) might mean they're actually upset\n• **\"สบายดี\"** (I'm fine) could mean they don't want to burden you\n• Look for body language and context\n\n**5. Common Emotional Patterns:**\n\n• **เครียด (stressed)** - VERY common in Bangkok!\n  - Work stress is openly discussed\n  - \"เครียดมาก\" is a frequent complaint\n\n• **เบื่อ (bored)** - Common among young people\n  - \"เบื่อจัง\" = \"So bored!\"\n  - Often said playfully\n\n• **อาย (shy/embarrassed)** - Very important!\n  - Thais are often อาย in new situations\n  - Being อาย is not seen as weakness\n\n**6. Sympathy and Support:**\n\nWhen someone shares feelings:\n• **เสียใจด้วย** = \"I'm sorry to hear that\" (sympathy)\n• **เป็นกำลังใจให้** = \"I'm rooting for you\"\n• **สู้ๆ** (sûu sûu) = \"Keep fighting!\" (encouragement)\n\nUnderstanding Thai emotional culture helps you:\n• Communicate more authentically\n• Avoid cultural misunderstandings\n• Build deeper relationships\n• Navigate social situations smoothly",
                [LanguageCode.FRENCH]: "**Comprendre l'expression émotionnelle thaïlandaise:**\n\nLes Thaïlandais expriment leurs émotions différemment des Occidentaux.\n\n**1. Le sourire a de nombreuses significations:**\n\nUn sourire en Thaïlande ne signifie pas toujours le bonheur:\n• Sourire joyeux = vraiment content\n• Sourire poli = courtoisie\n• Sourire embarrassé = se sentir อาย\n• Sourire nerveux = situation inconfortable\n\n**2. Contrôle émotionnel (ใจเย็น - Cœur frais):**\n\nLes Thaïlandais valorisent hautement **ใจเย็น (jai yen)** - garder un \"cœur frais\":\n• Montrer une forte colère est considéré comme immature\n• Mieux vaut rester calme même contrarié\n\n**3. Sauver la face:**\n\nÉviter l'embarrassment (อาย) est crucial.\n\n**4. Lire entre les lignes:**\n\nLes Thaïlandais n'expriment souvent pas directement les émotions négatives.",
                [LanguageCode.PORTUGUESE]: "**Compreendendo a Expressão Emocional Tailandesa:**\n\nOs tailandeses expressam emoções de forma diferente dos ocidentais.\n\n**1. O sorriso tem muitos significados:**\n\nUm sorriso na Tailândia nem sempre significa felicidade:\n• Sorriso feliz = genuinamente contente\n• Sorriso educado = cortesia\n• Sorriso envergonhado = sentir อาย\n• Sorriso nervoso = situação desconfortável\n\n**2. Controle emocional (ใจเย็น - Coração frio):**\n\nOs tailandeses valorizam muito **ใจเย็น (jai yen)** - manter um \"coração frio\":\n• Mostrar raiva forte é considerado imaturo\n• Melhor manter a calma mesmo chateado\n\n**3. Salvar as aparências:**\n\nEvitar constrangimento (อาย) é crucial.\n\n**4. Ler nas entrelinhas:**\n\nOs tailandeses frequentemente não expressam emoções negativas diretamente.",
                [LanguageCode.MANDARIN]: "**理解泰國情緒表達：**\n\n泰國人表達情緒的方式與西方人不同。\n\n**1. 微笑有許多含義：**\n\n在泰國微笑並不總是表示快樂：\n• 快樂的微笑 = 真正高興\n• 禮貌的微笑 = 表示禮貌\n• 尷尬的微笑 = 感到อาย\n• 緊張的微笑 = 不舒服的情況\n\n**2. 情緒控制（ใจเย็น - 冷靜的心）：**\n\n泰國人非常重視**ใจเย็น (jai yen)** - 保持「冷靜的心」：\n• 表現強烈憤怒被認為不成熟\n• 即使不高興也最好保持冷靜\n\n**3. 保全面子：**\n\n避免尷尬（อาย）至關重要。\n\n**4. 察言觀色：**\n\n泰國人通常不直接表達負面情緒。",
            }
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "How are you feeling today?", [LanguageCode.FRENCH]: "Comment te sens-tu aujourd'hui ?", [LanguageCode.PORTUGUESE]: "Como você está se sentindo hoje?", [LanguageCode.MANDARIN]: "你今天感覺怎麼樣？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I'm very stressed. I have an exam tomorrow and I'm worried I won't pass.", [LanguageCode.FRENCH]: "Je suis très stressé. J'ai un examen demain et je suis inquiet de ne pas réussir.", [LanguageCode.PORTUGUESE]: "Estou muito estressado. Tenho uma prova amanhã e estou preocupado que não vou passar.", [LanguageCode.MANDARIN]: "我壓力很大。明天有考試，我擔心考不過。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Don't be too worried. You studied hard. I'm confident you'll do well!", [LanguageCode.FRENCH]: "Ne t'inquiète pas trop. Tu as beaucoup étudié. Je suis sûr que tu réussiras !", [LanguageCode.PORTUGUESE]: "Não fique muito preocupado. Você estudou muito. Tenho certeza que vai se sair bem!", [LanguageCode.MANDARIN]: "別太擔心。你很努力學習。我相信你會做得很好！" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "Thank you. I feel a bit more relieved now. You're very kind.", [LanguageCode.FRENCH]: "Merci. Je me sens un peu plus soulagé maintenant. Tu es très gentil.", [LanguageCode.PORTUGUESE]: "Obrigado. Me sinto um pouco mais aliviado agora. Você é muito gentil.", [LanguageCode.MANDARIN]: "謝謝。我現在感覺放心一點了。你很善良。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Good luck tomorrow! I'm proud of you for working so hard.", [LanguageCode.FRENCH]: "Bonne chance demain ! Je suis fier de toi pour avoir tant travaillé.", [LanguageCode.PORTUGUESE]: "Boa sorte amanhã! Estou orgulhoso de você por trabalhar tão duro.", [LanguageCode.MANDARIN]: "明天祝你好運！我為你的努力感到驕傲。" } },
        ],
        comprehensionQuestions: {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Answer questions about the conversation.",
                [LanguageCode.FRENCH]: "Répondez aux questions sur la conversation.",
                [LanguageCode.PORTUGUESE]: "Responda às perguntas sobre a conversa.",
                [LanguageCode.MANDARIN]: "回答有關對話的問題。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "How is B feeling?", [LanguageCode.FRENCH]: "Comment B se sent-il ?", [LanguageCode.PORTUGUESE]: "Como B está se sentindo?", [LanguageCode.MANDARIN]: "B 感覺如何？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Happy and excited", [LanguageCode.FRENCH]: "Heureux et excité", [LanguageCode.PORTUGUESE]: "Feliz e empolgado", [LanguageCode.MANDARIN]: "高興和興奮" },
                        { [LanguageCode.ENGLISH]: "Stressed and worried", [LanguageCode.FRENCH]: "Stressé et inquiet", [LanguageCode.PORTUGUESE]: "Estressado e preocupado", [LanguageCode.MANDARIN]: "壓力大和擔心" },
                        { [LanguageCode.ENGLISH]: "Bored and tired", [LanguageCode.FRENCH]: "Ennuyé et fatigué", [LanguageCode.PORTUGUESE]: "Entediado e cansado", [LanguageCode.MANDARIN]: "無聊和累" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How does B feel after talking to A?", [LanguageCode.FRENCH]: "Comment B se sent-il après avoir parlé à A ?", [LanguageCode.PORTUGUESE]: "Como B se sente depois de falar com A?", [LanguageCode.MANDARIN]: "B 和 A 說話後感覺如何？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "More stressed", [LanguageCode.FRENCH]: "Plus stressé", [LanguageCode.PORTUGUESE]: "Mais estressado", [LanguageCode.MANDARIN]: "更有壓力" },
                        { [LanguageCode.ENGLISH]: "A bit more relieved", [LanguageCode.FRENCH]: "Un peu plus soulagé", [LanguageCode.PORTUGUESE]: "Um pouco mais aliviado", [LanguageCode.MANDARIN]: "放心一點" },
                        { [LanguageCode.ENGLISH]: "Very angry", [LanguageCode.FRENCH]: "Très en colère", [LanguageCode.PORTUGUESE]: "Muito bravo", [LanguageCode.MANDARIN]: "很生氣" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What does A feel about B?", [LanguageCode.FRENCH]: "Que ressent A pour B ?", [LanguageCode.PORTUGUESE]: "O que A sente sobre B?", [LanguageCode.MANDARIN]: "A 對 B 有什麼感覺？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Disappointed", [LanguageCode.FRENCH]: "Déçu", [LanguageCode.PORTUGUESE]: "Decepcionado", [LanguageCode.MANDARIN]: "失望" },
                        { [LanguageCode.ENGLISH]: "Jealous", [LanguageCode.FRENCH]: "Jaloux", [LanguageCode.PORTUGUESE]: "Ciumento", [LanguageCode.MANDARIN]: "嫉妒" },
                        { [LanguageCode.ENGLISH]: "Proud", [LanguageCode.FRENCH]: "Fier", [LanguageCode.PORTUGUESE]: "Orgulhoso", [LanguageCode.MANDARIN]: "自豪" },
                    ],
                    correctIndex: 2
                },
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บรรยายความรู้สึกของคุณวันนี้ อธิบายว่าคุณรู้สึกอย่างไรและทำไม ใช้คำศัพท์อารมณ์และความรู้สึกที่เรียนในบทนี้",
            [LanguageCode.FRENCH]: "บรรยายความรู้สึกของคุณวันนี้ อธิบายว่าคุณรู้สึกอย่างไรและทำไม ใช้คำศัพท์อารมณ์และความรู้สึกที่เรียนในบทนี้",
            [LanguageCode.PORTUGUESE]: "บรรยายความรู้สึกของคุณวันนี้ อธิบายว่าคุณรู้สึกอย่างไรและทำไม ใช้คำศัพท์อารมณ์และความรู้สึกที่เรียนในบทนี้",
            [LanguageCode.MANDARIN]: "บรรยายความรู้สึกของคุณวันนี้ อธิบายว่าคุณรู้สึกอย่างไรและทำไม ใช้คำศัพท์อารมณ์และความรู้สึกที่เรียนในบทนี้",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe your feelings today - how you feel and why. Use the emotion vocabulary from this lesson.",
            [LanguageCode.FRENCH]: "Décrivez vos sentiments aujourd'hui - comment vous vous sentez et pourquoi. Utilisez le vocabulaire des émotions de cette leçon.",
            [LanguageCode.PORTUGUESE]: "Descreva seus sentimentos hoje - como você se sente e por quê. Use o vocabulário de emoções desta lição.",
            [LanguageCode.MANDARIN]: "描述你今天的感受 - 你感覺如何以及為什麼。使用本課的情緒詞彙。",
        },
        speakingType: 'open-ended'
    }
};
