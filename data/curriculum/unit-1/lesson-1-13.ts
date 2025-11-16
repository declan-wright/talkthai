import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_13: Lesson = {
    id: "1.13",
    title: {
        [LanguageCode.ENGLISH]: "Basic Adjectives & Descriptions",
        [LanguageCode.FRENCH]: "Adjectifs et descriptions de base",
        [LanguageCode.PORTUGUESE]: "Adjetivos e descrições básicas",
        [LanguageCode.MANDARIN]: "基本形容詞和描述",
    },
    vocabulary: [
        // Size adjectives
        { thai: "ใหญ่", phonetic: "yài", translations: { [LanguageCode.ENGLISH]: "big/large", [LanguageCode.FRENCH]: "grand", [LanguageCode.PORTUGUESE]: "grande", [LanguageCode.MANDARIN]: "大" } },
        { thai: "เล็ก", phonetic: "lék", translations: { [LanguageCode.ENGLISH]: "small/little", [LanguageCode.FRENCH]: "petit", [LanguageCode.PORTUGUESE]: "pequeno", [LanguageCode.MANDARIN]: "小" } },
        { thai: "สูง", phonetic: "sǔung", translations: { [LanguageCode.ENGLISH]: "tall/high", [LanguageCode.FRENCH]: "grand/haut", [LanguageCode.PORTUGUESE]: "alto", [LanguageCode.MANDARIN]: "高" } },
        { thai: "เตี้ย", phonetic: "dtîa", translations: { [LanguageCode.ENGLISH]: "short (height)", [LanguageCode.FRENCH]: "petit (taille)", [LanguageCode.PORTUGUESE]: "baixo (altura)", [LanguageCode.MANDARIN]: "矮" } },

        // Width/girth adjectives
        { thai: "อ้วน", phonetic: "ûan", translations: { [LanguageCode.ENGLISH]: "fat/plump", [LanguageCode.FRENCH]: "gros", [LanguageCode.PORTUGUESE]: "gordo", [LanguageCode.MANDARIN]: "胖" } },
        { thai: "ผอม", phonetic: "phɔ̌ɔm", translations: { [LanguageCode.ENGLISH]: "thin/skinny", [LanguageCode.FRENCH]: "mince", [LanguageCode.PORTUGUESE]: "magro", [LanguageCode.MANDARIN]: "瘦" } },

        // Length adjectives
        { thai: "ยาว", phonetic: "yaao", translations: { [LanguageCode.ENGLISH]: "long", [LanguageCode.FRENCH]: "long", [LanguageCode.PORTUGUESE]: "comprido", [LanguageCode.MANDARIN]: "長" } },
        { thai: "สั้น", phonetic: "sân", translations: { [LanguageCode.ENGLISH]: "short (length)", [LanguageCode.FRENCH]: "court", [LanguageCode.PORTUGUESE]: "curto", [LanguageCode.MANDARIN]: "短" } },

        // Quality adjectives
        { thai: "ดี", phonetic: "dii", translations: { [LanguageCode.ENGLISH]: "good", [LanguageCode.FRENCH]: "bon", [LanguageCode.PORTUGUESE]: "bom", [LanguageCode.MANDARIN]: "好" } },
        { thai: "เลว", phonetic: "leo", translations: { [LanguageCode.ENGLISH]: "bad", [LanguageCode.FRENCH]: "mauvais", [LanguageCode.PORTUGUESE]: "ruim", [LanguageCode.MANDARIN]: "壞" } },
        { thai: "สวย", phonetic: "sǔay", translations: { [LanguageCode.ENGLISH]: "beautiful/pretty", [LanguageCode.FRENCH]: "beau/belle", [LanguageCode.PORTUGUESE]: "bonito/bonita", [LanguageCode.MANDARIN]: "漂亮" } },
        { thai: "หล่อ", phonetic: "lɔ̀ɔ", translations: { [LanguageCode.ENGLISH]: "handsome", [LanguageCode.FRENCH]: "beau (masc.)", [LanguageCode.PORTUGUESE]: "bonito (masc.)", [LanguageCode.MANDARIN]: "帥" } },
        { thai: "น่ารัก", phonetic: "nâa-rák", translations: { [LanguageCode.ENGLISH]: "cute/lovely", [LanguageCode.FRENCH]: "mignon", [LanguageCode.PORTUGUESE]: "fofo", [LanguageCode.MANDARIN]: "可愛" } },
        { thai: "น่าเกลียด", phonetic: "nâa-glìat", translations: { [LanguageCode.ENGLISH]: "ugly", [LanguageCode.FRENCH]: "laid", [LanguageCode.PORTUGUESE]: "feio", [LanguageCode.MANDARIN]: "醜" } },

        // Age adjectives
        { thai: "ใหม่", phonetic: "mài", translations: { [LanguageCode.ENGLISH]: "new", [LanguageCode.FRENCH]: "nouveau", [LanguageCode.PORTUGUESE]: "novo", [LanguageCode.MANDARIN]: "新" } },
        { thai: "เก่า", phonetic: "gào", translations: { [LanguageCode.ENGLISH]: "old (things)", [LanguageCode.FRENCH]: "vieux (choses)", [LanguageCode.PORTUGUESE]: "velho (coisas)", [LanguageCode.MANDARIN]: "舊" } },

        // Speed adjectives
        { thai: "เร็ว", phonetic: "reo", translations: { [LanguageCode.ENGLISH]: "fast/quick", [LanguageCode.FRENCH]: "rapide", [LanguageCode.PORTUGUESE]: "rápido", [LanguageCode.MANDARIN]: "快" } },
        { thai: "ช้า", phonetic: "cháa", translations: { [LanguageCode.ENGLISH]: "slow", [LanguageCode.FRENCH]: "lent", [LanguageCode.PORTUGUESE]: "lento", [LanguageCode.MANDARIN]: "慢" } },

        // Temperature adjectives
        { thai: "ร้อน", phonetic: "rɔ́ɔn", translations: { [LanguageCode.ENGLISH]: "hot", [LanguageCode.FRENCH]: "chaud", [LanguageCode.PORTUGUESE]: "quente", [LanguageCode.MANDARIN]: "熱" } },
        { thai: "เย็น", phonetic: "yen", translations: { [LanguageCode.ENGLISH]: "cold/cool", [LanguageCode.FRENCH]: "froid/frais", [LanguageCode.PORTUGUESE]: "frio/fresco", [LanguageCode.MANDARIN]: "冷" } },

        // Difficulty adjectives
        { thai: "ง่าย", phonetic: "ngâai", translations: { [LanguageCode.ENGLISH]: "easy", [LanguageCode.FRENCH]: "facile", [LanguageCode.PORTUGUESE]: "fácil", [LanguageCode.MANDARIN]: "簡單" } },
        { thai: "ยาก", phonetic: "yâak", translations: { [LanguageCode.ENGLISH]: "difficult/hard", [LanguageCode.FRENCH]: "difficile", [LanguageCode.PORTUGUESE]: "difícil", [LanguageCode.MANDARIN]: "難" } },

        // Color adjectives
        { thai: "ขาว", phonetic: "khǎao", translations: { [LanguageCode.ENGLISH]: "white", [LanguageCode.FRENCH]: "blanc", [LanguageCode.PORTUGUESE]: "branco", [LanguageCode.MANDARIN]: "白" } },
        { thai: "ดำ", phonetic: "dam", translations: { [LanguageCode.ENGLISH]: "black", [LanguageCode.FRENCH]: "noir", [LanguageCode.PORTUGUESE]: "preto", [LanguageCode.MANDARIN]: "黑" } },
        { thai: "แดง", phonetic: "deng", translations: { [LanguageCode.ENGLISH]: "red", [LanguageCode.FRENCH]: "rouge", [LanguageCode.PORTUGUESE]: "vermelho", [LanguageCode.MANDARIN]: "紅" } },
        { thai: "เหลือง", phonetic: "lʉ̌ang", translations: { [LanguageCode.ENGLISH]: "yellow", [LanguageCode.FRENCH]: "jaune", [LanguageCode.PORTUGUESE]: "amarelo", [LanguageCode.MANDARIN]: "黃" } },
        { thai: "เขียว", phonetic: "khǐao", translations: { [LanguageCode.ENGLISH]: "green", [LanguageCode.FRENCH]: "vert", [LanguageCode.PORTUGUESE]: "verde", [LanguageCode.MANDARIN]: "綠" } },
        { thai: "น้ำเงิน", phonetic: "náam-ngəən", translations: { [LanguageCode.ENGLISH]: "blue", [LanguageCode.FRENCH]: "bleu", [LanguageCode.PORTUGUESE]: "azul", [LanguageCode.MANDARIN]: "藍" } },
        { thai: "ชมพู", phonetic: "chom-phuu", translations: { [LanguageCode.ENGLISH]: "pink", [LanguageCode.FRENCH]: "rose", [LanguageCode.PORTUGUESE]: "rosa", [LanguageCode.MANDARIN]: "粉紅" } },
        { thai: "ส้ม", phonetic: "sôm", translations: { [LanguageCode.ENGLISH]: "orange", [LanguageCode.FRENCH]: "orange", [LanguageCode.PORTUGUESE]: "laranja", [LanguageCode.MANDARIN]: "橙" } },
        { thai: "น้ำตาล", phonetic: "náam-dtaan", translations: { [LanguageCode.ENGLISH]: "brown", [LanguageCode.FRENCH]: "marron", [LanguageCode.PORTUGUESE]: "marrom", [LanguageCode.MANDARIN]: "棕" } },
        { thai: "เทา", phonetic: "thao", translations: { [LanguageCode.ENGLISH]: "gray", [LanguageCode.FRENCH]: "gris", [LanguageCode.PORTUGUESE]: "cinza", [LanguageCode.MANDARIN]: "灰" } },
        { thai: "ม่วง", phonetic: "mûang", translations: { [LanguageCode.ENGLISH]: "purple", [LanguageCode.FRENCH]: "violet", [LanguageCode.PORTUGUESE]: "roxo", [LanguageCode.MANDARIN]: "紫" } },

        // Additional useful words
        { thai: "ห้อง", phonetic: "hɔ̂ɔng", translations: { [LanguageCode.ENGLISH]: "room", [LanguageCode.FRENCH]: "chambre", [LanguageCode.PORTUGUESE]: "quarto", [LanguageCode.MANDARIN]: "房間" } },
        { thai: "บ้าน", phonetic: "bâan", translations: { [LanguageCode.ENGLISH]: "house/home", [LanguageCode.FRENCH]: "maison", [LanguageCode.PORTUGUESE]: "casa", [LanguageCode.MANDARIN]: "家" } },
        { thai: "สี", phonetic: "sǐi", translations: { [LanguageCode.ENGLISH]: "color", [LanguageCode.FRENCH]: "couleur", [LanguageCode.PORTUGUESE]: "cor", [LanguageCode.MANDARIN]: "顏色" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Adjectives: How to Describe Everything",
                [LanguageCode.FRENCH]: "Adjectifs thaïlandais : Comment tout décrire",
                [LanguageCode.PORTUGUESE]: "Adjetivos tailandeses: Como descrever tudo",
                [LanguageCode.MANDARIN]: "泰語形容詞：如何描述一切",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai adjectives are wonderfully simple! Unlike many languages, Thai adjectives don't change based on gender, number, or tense. They're the same whether you're describing one thing or many things.\n\n**Basic Pattern: NOUN + ADJECTIVE**\n\nIn Thai, the adjective comes AFTER the noun it describes:\n• **บ้านใหญ่** (bâan yài) = house big = \"big house\"\n• **รถเล็ก** (rót lék) = car small = \"small car\"\n• **คนสูง** (khon sǔung) = person tall = \"tall person\"\n\n**Common Adjective Pairs (Opposites):**\n\n**Size:**\n• ใหญ่ (yài) = big ↔ เล็ก (lék) = small\n• สูง (sǔung) = tall/high ↔ เตี้ย (dtîa) = short (height)\n• ยาว (yaao) = long ↔ สั้น (sân) = short (length)\n• อ้วน (ûan) = fat ↔ ผอม (phɔ̌ɔm) = thin\n\n**Quality:**\n• ดี (dii) = good ↔ เลว (leo) = bad\n• สวย (sǔay) = beautiful ↔ น่าเกลียด (nâa-glìat) = ugly\n• ใหม่ (mài) = new ↔ เก่า (gào) = old\n\n**Speed & Temperature:**\n• เร็ว (reo) = fast ↔ ช้า (cháa) = slow\n• ร้อน (rɔ́ɔn) = hot ↔ เย็น (yen) = cold\n\n**Difficulty:**\n• ง่าย (ngâai) = easy ↔ ยาก (yâak) = difficult\n\n**Making Comparisons: More/Most**\n\nUse **กว่า (gwàa)** for \"more than\":\n• **บ้านนี้ใหญ่กว่า** (bâan níi yài gwàa) = \"This house is bigger\"\n• **เขาสูงกว่า** (khǎo sǔung gwàa) = \"He/She is taller\"\n\nUse **ที่สุด (thîi sùt)** for \"most/the most\":\n• **บ้านนี้ใหญ่ที่สุด** (bâan níi yài thîi sùt) = \"This house is the biggest\"\n• **เขาสูงที่สุด** (khǎo sǔung thîi sùt) = \"He/She is the tallest\"\n\n**Colors in Thai:**\n\nColors work just like other adjectives - they come AFTER the noun:\n• **เสื้อแดง** (sʉ̂a deng) = shirt red = \"red shirt\"\n• **กระเป๋าดำ** (grà-bpǎo dam) = bag black = \"black bag\"\n• **รถน้ำเงิน** (rót náam-ngəən) = car blue = \"blue car\"\n\n**Pro Tip: \"Beautiful\" has gender!**\n\n• **สวย (sǔay)** = beautiful/pretty (generally for women, things, places)\n• **หล่อ (lɔ̀ɔ)** = handsome (for men)\n• **น่ารัก (nâa-rák)** = cute/lovely (for anyone or anything!)\n\n**Intensifiers: Making it Stronger**\n\n• **มาก (mâak)** = very (comes AFTER the adjective)\n  - **ใหญ่มาก** (yài mâak) = \"very big\"\n  - **สวยมาก** (sǔay mâak) = \"very beautiful\"\n\n• **เกินไป (gəən bpai)** = too much (comes AFTER the adjective)\n  - **ร้อนเกินไป** (rɔ́ɔn gəən bpai) = \"too hot\"\n  - **ยากเกินไป** (yâak gəən bpai) = \"too difficult\"\n\n**Examples in Sentences:**\n\n• **บ้านของฉันเล็กแต่สวย** (bâan khɔ̌ɔng chǎn lék dtɛ̀ɛ sǔay) = \"My house is small but beautiful\"\n• **รถคันใหม่แดงมาก** (rót khan mài deng mâak) = \"The new car is very red\"\n• **วันนี้ร้อนเกินไป** (wan níi rɔ́ɔn gəən bpai) = \"Today is too hot\"\n• **ภาษาไทยไม่ยาก** (phaa-sǎa thai mâi yâak) = \"Thai language is not difficult!\"",
                [LanguageCode.FRENCH]: "Les adjectifs thaïlandais sont merveilleusement simples ! Contrairement à de nombreuses langues, les adjectifs thaïlandais ne changent pas en fonction du genre, du nombre ou du temps.\n\n**Structure de base : NOM + ADJECTIF**\n\nEn thaïlandais, l'adjectif vient APRÈS le nom qu'il décrit :\n• **บ้านใหญ่** (bâan yài) = maison grande = \"grande maison\"\n• **รถเล็ก** (rót lék) = voiture petite = \"petite voiture\"\n\n**Paires d'adjectifs courantes (opposés) :**\n\n• ใหญ่ (yài) = grand ↔ เล็ก (lék) = petit\n• สูง (sǔung) = grand/haut ↔ เตี้ย (dtîa) = petit (taille)\n• ยาว (yaao) = long ↔ สั้น (sân) = court\n• ดี (dii) = bon ↔ เลว (leo) = mauvais\n• ใหม่ (mài) = nouveau ↔ เก่า (gào) = vieux",
                [LanguageCode.PORTUGUESE]: "Os adjetivos tailandeses são maravilhosamente simples! Ao contrário de muitas línguas, os adjetivos tailandeses não mudam com base no gênero, número ou tempo.\n\n**Padrão básico: SUBSTANTIVO + ADJETIVO**\n\nEm tailandês, o adjetivo vem DEPOIS do substantivo que ele descreve:\n• **บ้านใหญ่** (bâan yài) = casa grande = \"casa grande\"\n• **รถเล็ก** (rót lék) = carro pequeno = \"carro pequeno\"\n\n**Pares de adjetivos comuns (opostos):**\n\n• ใหญ่ (yài) = grande ↔ เล็ก (lék) = pequeno\n• สูง (sǔung) = alto ↔ เตี้ย (dtîa) = baixo\n• ยาว (yaao) = comprido ↔ สั้น (sân) = curto\n• ดี (dii) = bom ↔ เลว (leo) = ruim\n• ใหม่ (mài) = novo ↔ เก่า (gào) = velho",
                [LanguageCode.MANDARIN]: "泰語形容詞非常簡單！與許多語言不同，泰語形容詞不會根據性別、數量或時態而變化。\n\n**基本模式：名詞 + 形容詞**\n\n在泰語中，形容詞位於其描述的名詞之後：\n• **บ้านใหญ่** (bâan yài) = 房子大 = 「大房子」\n• **รถเล็ก** (rót lék) = 車小 = 「小車」\n\n**常見形容詞對（反義詞）：**\n\n• ใหญ่ (yài) = 大 ↔ เล็ก (lék) = 小\n• สูง (sǔung) = 高 ↔ เตี้ย (dtîa) = 矮\n• ยาว (yaao) = 長 ↔ สั้น (sân) = 短\n• ดี (dii) = 好 ↔ เลว (leo) = 壞\n• ใหม่ (mài) = 新 ↔ เก่า (gào) = 舊",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match each adjective with its opposite.",
                [LanguageCode.FRENCH]: "Associez chaque adjectif à son opposé.",
                [LanguageCode.PORTUGUESE]: "Relacione cada adjetivo com seu oposto.",
                [LanguageCode.MANDARIN]: "將每個形容詞與其反義詞配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "ใหญ่", [LanguageCode.FRENCH]: "ใหญ่", [LanguageCode.PORTUGUESE]: "ใหญ่", [LanguageCode.MANDARIN]: "ใหญ่ (大)" }, answer: { [LanguageCode.ENGLISH]: "เล็ก", [LanguageCode.FRENCH]: "เล็ก", [LanguageCode.PORTUGUESE]: "เล็ก", [LanguageCode.MANDARIN]: "เล็ก (小)" } },
                { prompt: { [LanguageCode.ENGLISH]: "สูง", [LanguageCode.FRENCH]: "สูง", [LanguageCode.PORTUGUESE]: "สูง", [LanguageCode.MANDARIN]: "สูง (高)" }, answer: { [LanguageCode.ENGLISH]: "เตี้ย", [LanguageCode.FRENCH]: "เตี้ย", [LanguageCode.PORTUGUESE]: "เตี้ย", [LanguageCode.MANDARIN]: "เตี้ย (矮)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ดี", [LanguageCode.FRENCH]: "ดี", [LanguageCode.PORTUGUESE]: "ดี", [LanguageCode.MANDARIN]: "ดี (好)" }, answer: { [LanguageCode.ENGLISH]: "เลว", [LanguageCode.FRENCH]: "เลว", [LanguageCode.PORTUGUESE]: "เลว", [LanguageCode.MANDARIN]: "เลว (壞)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ใหม่", [LanguageCode.FRENCH]: "ใหม่", [LanguageCode.PORTUGUESE]: "ใหม่", [LanguageCode.MANDARIN]: "ใหม่ (新)" }, answer: { [LanguageCode.ENGLISH]: "เก่า", [LanguageCode.FRENCH]: "เก่า", [LanguageCode.PORTUGUESE]: "เก่า", [LanguageCode.MANDARIN]: "เก่า (舊)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ร้อน", [LanguageCode.FRENCH]: "ร้อน", [LanguageCode.PORTUGUESE]: "ร้อน", [LanguageCode.MANDARIN]: "ร้อน (熱)" }, answer: { [LanguageCode.ENGLISH]: "เย็น", [LanguageCode.FRENCH]: "เย็น", [LanguageCode.PORTUGUESE]: "เย็น", [LanguageCode.MANDARIN]: "เย็น (冷)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ยาว", [LanguageCode.FRENCH]: "ยาว", [LanguageCode.PORTUGUESE]: "ยาว", [LanguageCode.MANDARIN]: "ยาว (長)" }, answer: { [LanguageCode.ENGLISH]: "สั้น", [LanguageCode.FRENCH]: "สั้น", [LanguageCode.PORTUGUESE]: "สั้น", [LanguageCode.MANDARIN]: "สั้น (短)" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the opposite adjective.",
                [LanguageCode.FRENCH]: "Remplissez avec l'adjectif opposé.",
                [LanguageCode.PORTUGUESE]: "Preencha com o adjetivo oposto.",
                [LanguageCode.MANDARIN]: "填入相反的形容詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "อ้วน (fat) ↔ ", [LanguageCode.FRENCH]: "อ้วน (gros) ↔ ", [LanguageCode.PORTUGUESE]: "อ้วน (gordo) ↔ ", [LanguageCode.MANDARIN]: "อ้วน (胖) ↔ " }, correctAnswer: "ผอม", end: { [LanguageCode.ENGLISH]: " (thin)", [LanguageCode.FRENCH]: " (mince)", [LanguageCode.PORTUGUESE]: " (magro)", [LanguageCode.MANDARIN]: " (瘦)" } },
                { start: { [LanguageCode.ENGLISH]: "เร็ว (fast) ↔ ", [LanguageCode.FRENCH]: "เร็ว (rapide) ↔ ", [LanguageCode.PORTUGUESE]: "เร็ว (rápido) ↔ ", [LanguageCode.MANDARIN]: "เร็ว (快) ↔ " }, correctAnswer: "ช้า", end: { [LanguageCode.ENGLISH]: " (slow)", [LanguageCode.FRENCH]: " (lent)", [LanguageCode.PORTUGUESE]: " (lento)", [LanguageCode.MANDARIN]: " (慢)" } },
                { start: { [LanguageCode.ENGLISH]: "ง่าย (easy) ↔ ", [LanguageCode.FRENCH]: "ง่าย (facile) ↔ ", [LanguageCode.PORTUGUESE]: "ง่าย (fácil) ↔ ", [LanguageCode.MANDARIN]: "ง่าย (簡單) ↔ " }, correctAnswer: "ยาก", end: { [LanguageCode.ENGLISH]: " (difficult)", [LanguageCode.FRENCH]: " (difficile)", [LanguageCode.PORTUGUESE]: " (difícil)", [LanguageCode.MANDARIN]: " (難)" } },
                { start: { [LanguageCode.ENGLISH]: "สวย (beautiful) ↔ ", [LanguageCode.FRENCH]: "สวย (beau) ↔ ", [LanguageCode.PORTUGUESE]: "สวย (bonito) ↔ ", [LanguageCode.MANDARIN]: "สวย (漂亮) ↔ " }, correctAnswer: "น่าเกลียด", end: { [LanguageCode.ENGLISH]: " (ugly)", [LanguageCode.FRENCH]: " (laid)", [LanguageCode.PORTUGUESE]: " (feio)", [LanguageCode.MANDARIN]: " (醜)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to form correct descriptive sentences.",
                [LanguageCode.FRENCH]: "Organisez les mots pour former des phrases descriptives correctes.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para formar frases descritivas corretas.",
                [LanguageCode.MANDARIN]: "排列單詞以形成正確的描述句。",
            },
            sentences: [
                { correctOrder: ["บ้าน", "ใหญ่", "มาก"], hint: { [LanguageCode.ENGLISH]: "The house is very big.", [LanguageCode.FRENCH]: "La maison est très grande.", [LanguageCode.PORTUGUESE]: "A casa é muito grande.", [LanguageCode.MANDARIN]: "房子很大。" } },
                { correctOrder: ["รถ", "คัน", "นี้", "แดง"], hint: { [LanguageCode.ENGLISH]: "This car is red.", [LanguageCode.FRENCH]: "Cette voiture est rouge.", [LanguageCode.PORTUGUESE]: "Este carro é vermelho.", [LanguageCode.MANDARIN]: "這輛車是紅色的。" } },
                { correctOrder: ["เขา", "สูง", "และ", "ผอม"], hint: { [LanguageCode.ENGLISH]: "He/She is tall and thin.", [LanguageCode.FRENCH]: "Il/Elle est grand(e) et mince.", [LanguageCode.PORTUGUESE]: "Ele/Ela é alto(a) e magro(a).", [LanguageCode.MANDARIN]: "他/她又高又瘦。" } },
                { correctOrder: ["ห้อง", "เล็ก", "แต่", "สวย"], hint: { [LanguageCode.ENGLISH]: "The room is small but beautiful.", [LanguageCode.FRENCH]: "La chambre est petite mais belle.", [LanguageCode.PORTUGUESE]: "O quarto é pequeno mas bonito.", [LanguageCode.MANDARIN]: "房間小但很漂亮。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the colors to their Thai words.",
                [LanguageCode.FRENCH]: "Associez les couleurs à leurs mots thaïlandais.",
                [LanguageCode.PORTUGUESE]: "Relacione as cores às suas palavras em tailandês.",
                [LanguageCode.MANDARIN]: "將顏色與泰語單詞配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "red", [LanguageCode.FRENCH]: "rouge", [LanguageCode.PORTUGUESE]: "vermelho", [LanguageCode.MANDARIN]: "紅色" }, answer: { [LanguageCode.ENGLISH]: "แดง", [LanguageCode.FRENCH]: "แดง", [LanguageCode.PORTUGUESE]: "แดง", [LanguageCode.MANDARIN]: "แดง" } },
                { prompt: { [LanguageCode.ENGLISH]: "blue", [LanguageCode.FRENCH]: "bleu", [LanguageCode.PORTUGUESE]: "azul", [LanguageCode.MANDARIN]: "藍色" }, answer: { [LanguageCode.ENGLISH]: "น้ำเงิน", [LanguageCode.FRENCH]: "น้ำเงิน", [LanguageCode.PORTUGUESE]: "น้ำเงิน", [LanguageCode.MANDARIN]: "น้ำเงิน" } },
                { prompt: { [LanguageCode.ENGLISH]: "green", [LanguageCode.FRENCH]: "vert", [LanguageCode.PORTUGUESE]: "verde", [LanguageCode.MANDARIN]: "綠色" }, answer: { [LanguageCode.ENGLISH]: "เขียว", [LanguageCode.FRENCH]: "เขียว", [LanguageCode.PORTUGUESE]: "เขียว", [LanguageCode.MANDARIN]: "เขียว" } },
                { prompt: { [LanguageCode.ENGLISH]: "yellow", [LanguageCode.FRENCH]: "jaune", [LanguageCode.PORTUGUESE]: "amarelo", [LanguageCode.MANDARIN]: "黃色" }, answer: { [LanguageCode.ENGLISH]: "เหลือง", [LanguageCode.FRENCH]: "เหลือง", [LanguageCode.PORTUGUESE]: "เหลือง", [LanguageCode.MANDARIN]: "เหลือง" } },
                { prompt: { [LanguageCode.ENGLISH]: "white", [LanguageCode.FRENCH]: "blanc", [LanguageCode.PORTUGUESE]: "branco", [LanguageCode.MANDARIN]: "白色" }, answer: { [LanguageCode.ENGLISH]: "ขาว", [LanguageCode.FRENCH]: "ขาว", [LanguageCode.PORTUGUESE]: "ขาว", [LanguageCode.MANDARIN]: "ขาว" } },
                { prompt: { [LanguageCode.ENGLISH]: "black", [LanguageCode.FRENCH]: "noir", [LanguageCode.PORTUGUESE]: "preto", [LanguageCode.MANDARIN]: "黑色" }, answer: { [LanguageCode.ENGLISH]: "ดำ", [LanguageCode.FRENCH]: "ดำ", [LanguageCode.PORTUGUESE]: "ดำ", [LanguageCode.MANDARIN]: "ดำ" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct adjective for each description.",
                [LanguageCode.FRENCH]: "Choisissez l'adjectif correct pour chaque description.",
                [LanguageCode.PORTUGUESE]: "Escolha o adjetivo correto para cada descrição.",
                [LanguageCode.MANDARIN]: "為每個描述選擇正確的形容詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "A tall building would be: ตึก___", [LanguageCode.FRENCH]: "Un bâtiment haut serait : ตึก___", [LanguageCode.PORTUGUESE]: "Um prédio alto seria: ตึก___", [LanguageCode.MANDARIN]: "一棟高樓會是：ตึก___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เตี้ย", [LanguageCode.FRENCH]: "เตี้ย", [LanguageCode.PORTUGUESE]: "เตี้ย", [LanguageCode.MANDARIN]: "เตี้ย (矮)" },
                        { [LanguageCode.ENGLISH]: "สูง", [LanguageCode.FRENCH]: "สูง", [LanguageCode.PORTUGUESE]: "สูง", [LanguageCode.MANDARIN]: "สูง (高)" },
                        { [LanguageCode.ENGLISH]: "ยาว", [LanguageCode.FRENCH]: "ยาว", [LanguageCode.PORTUGUESE]: "ยาว", [LanguageCode.MANDARIN]: "ยาว (長)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "For a handsome man, you would say: ผู้ชาย___", [LanguageCode.FRENCH]: "Pour un bel homme, vous diriez : ผู้ชาย___", [LanguageCode.PORTUGUESE]: "Para um homem bonito, você diria: ผู้ชาย___", [LanguageCode.MANDARIN]: "對於一個帥哥，你會說：ผู้ชาย___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "สวย", [LanguageCode.FRENCH]: "สวย", [LanguageCode.PORTUGUESE]: "สวย", [LanguageCode.MANDARIN]: "สวย (漂亮)" },
                        { [LanguageCode.ENGLISH]: "หล่อ", [LanguageCode.FRENCH]: "หล่อ", [LanguageCode.PORTUGUESE]: "หล่อ", [LanguageCode.MANDARIN]: "หล่อ (帥)" },
                        { [LanguageCode.ENGLISH]: "น่ารัก", [LanguageCode.FRENCH]: "น่ารัก", [LanguageCode.PORTUGUESE]: "น่ารัก", [LanguageCode.MANDARIN]: "น่ารัก (可愛)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What color is the sky? ท้องฟ้าสี___", [LanguageCode.FRENCH]: "De quelle couleur est le ciel ? ท้องฟ้าสี___", [LanguageCode.PORTUGUESE]: "De que cor é o céu? ท้องฟ้าสี___", [LanguageCode.MANDARIN]: "天空是什麼顏色？ท้องฟ้าสี___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เขียว", [LanguageCode.FRENCH]: "เขียว", [LanguageCode.PORTUGUESE]: "เขียว", [LanguageCode.MANDARIN]: "เขียว (綠)" },
                        { [LanguageCode.ENGLISH]: "น้ำเงิน", [LanguageCode.FRENCH]: "น้ำเงิน", [LanguageCode.PORTUGUESE]: "น้ำเงิน", [LanguageCode.MANDARIN]: "น้ำเงิน (藍)" },
                        { [LanguageCode.ENGLISH]: "แดง", [LanguageCode.FRENCH]: "แดง", [LanguageCode.PORTUGUESE]: "แดง", [LanguageCode.MANDARIN]: "แดง (紅)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Today is very hot. วันนี้___มาก", [LanguageCode.FRENCH]: "Aujourd'hui il fait très chaud. วันนี้___มาก", [LanguageCode.PORTUGUESE]: "Hoje está muito quente. วันนี้___มาก", [LanguageCode.MANDARIN]: "今天很熱。วันนี้___มาก" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เย็น", [LanguageCode.FRENCH]: "เย็น", [LanguageCode.PORTUGUESE]: "เย็น", [LanguageCode.MANDARIN]: "เย็น (冷)" },
                        { [LanguageCode.ENGLISH]: "ร้อน", [LanguageCode.FRENCH]: "ร้อน", [LanguageCode.PORTUGUESE]: "ร้อน", [LanguageCode.MANDARIN]: "ร้อน (熱)" },
                        { [LanguageCode.ENGLISH]: "ดี", [LanguageCode.FRENCH]: "ดี", [LanguageCode.PORTUGUESE]: "ดี", [LanguageCode.MANDARIN]: "ดี (好)" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the color descriptions.",
                [LanguageCode.FRENCH]: "Complétez les descriptions de couleur.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições de cores.",
                [LanguageCode.MANDARIN]: "完成顏色描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A banana is ", [LanguageCode.FRENCH]: "Une banane est ", [LanguageCode.PORTUGUESE]: "Uma banana é ", [LanguageCode.MANDARIN]: "香蕉是 " }, correctAnswer: "สีเหลือง", end: { [LanguageCode.ENGLISH]: " (yellow color)", [LanguageCode.FRENCH]: " (couleur jaune)", [LanguageCode.PORTUGUESE]: " (cor amarela)", [LanguageCode.MANDARIN]: " (黃色)" } },
                { start: { [LanguageCode.ENGLISH]: "Grass is ", [LanguageCode.FRENCH]: "L'herbe est ", [LanguageCode.PORTUGUESE]: "A grama é ", [LanguageCode.MANDARIN]: "草是 " }, correctAnswer: "สีเขียว", end: { [LanguageCode.ENGLISH]: " (green color)", [LanguageCode.FRENCH]: " (couleur verte)", [LanguageCode.PORTUGUESE]: " (cor verde)", [LanguageCode.MANDARIN]: " (綠色)" } },
                { start: { [LanguageCode.ENGLISH]: "Blood is ", [LanguageCode.FRENCH]: "Le sang est ", [LanguageCode.PORTUGUESE]: "O sangue é ", [LanguageCode.MANDARIN]: "血是 " }, correctAnswer: "สีแดง", end: { [LanguageCode.ENGLISH]: " (red color)", [LanguageCode.FRENCH]: " (couleur rouge)", [LanguageCode.PORTUGUESE]: " (cor vermelha)", [LanguageCode.MANDARIN]: " (紅色)" } },
                { start: { [LanguageCode.ENGLISH]: "Snow is ", [LanguageCode.FRENCH]: "La neige est ", [LanguageCode.PORTUGUESE]: "A neve é ", [LanguageCode.MANDARIN]: "雪是 " }, correctAnswer: "สีขาว", end: { [LanguageCode.ENGLISH]: " (white color)", [LanguageCode.FRENCH]: " (couleur blanche)", [LanguageCode.PORTUGUESE]: " (cor branca)", [LanguageCode.MANDARIN]: " (白色)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build sentences describing objects.",
                [LanguageCode.FRENCH]: "Construisez des phrases décrivant des objets.",
                [LanguageCode.PORTUGUESE]: "Construa frases descrevendo objetos.",
                [LanguageCode.MANDARIN]: "組成描述物體的句子。",
            },
            sentences: [
                { correctOrder: ["เสื้อ", "ตัว", "นี้", "สี", "ชมพู"], hint: { [LanguageCode.ENGLISH]: "This shirt is pink.", [LanguageCode.FRENCH]: "Cette chemise est rose.", [LanguageCode.PORTUGUESE]: "Esta camisa é rosa.", [LanguageCode.MANDARIN]: "這件襯衫是粉紅色的。" } },
                { correctOrder: ["น้อง", "สาว", "น่ารัก", "มาก"], hint: { [LanguageCode.ENGLISH]: "The younger sister is very cute.", [LanguageCode.FRENCH]: "La petite sœur est très mignonne.", [LanguageCode.PORTUGUESE]: "A irmã mais nova é muito fofa.", [LanguageCode.MANDARIN]: "妹妹很可愛。" } },
                { correctOrder: ["วัน", "นี้", "อากาศ", "ดี"], hint: { [LanguageCode.ENGLISH]: "Today the weather is good.", [LanguageCode.FRENCH]: "Aujourd'hui le temps est bon.", [LanguageCode.PORTUGUESE]: "Hoje o tempo está bom.", [LanguageCode.MANDARIN]: "今天天氣很好。" } },
                { correctOrder: ["กระเป๋า", "ใบ", "นี้", "ใหญ่", "เกินไป"], hint: { [LanguageCode.ENGLISH]: "This bag is too big.", [LanguageCode.FRENCH]: "Ce sac est trop grand.", [LanguageCode.PORTUGUESE]: "Esta bolsa é muito grande.", [LanguageCode.MANDARIN]: "這個包太大了。" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best description for each scenario.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure description pour chaque scénario.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor descrição para cada cenário.",
                [LanguageCode.MANDARIN]: "為每個場景選擇最佳描述。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You bought something yesterday. It's brand new. It is:", [LanguageCode.FRENCH]: "Vous avez acheté quelque chose hier. C'est tout neuf. C'est :", [LanguageCode.PORTUGUESE]: "Você comprou algo ontem. É novo em folha. É:", [LanguageCode.MANDARIN]: "你昨天買了東西。它是全新的。它是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เก่า", [LanguageCode.FRENCH]: "เก่า", [LanguageCode.PORTUGUESE]: "เก่า", [LanguageCode.MANDARIN]: "เก่า (舊)" },
                        { [LanguageCode.ENGLISH]: "ใหม่", [LanguageCode.FRENCH]: "ใหม่", [LanguageCode.PORTUGUESE]: "ใหม่", [LanguageCode.MANDARIN]: "ใหม่ (新)" },
                        { [LanguageCode.ENGLISH]: "ดี", [LanguageCode.FRENCH]: "ดี", [LanguageCode.PORTUGUESE]: "ดี", [LanguageCode.MANDARIN]: "ดี (好)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The task takes a lot of effort and skill. It is:", [LanguageCode.FRENCH]: "La tâche demande beaucoup d'effort et de compétence. Elle est :", [LanguageCode.PORTUGUESE]: "A tarefa requer muito esforço e habilidade. É:", [LanguageCode.MANDARIN]: "這項任務需要大量的努力和技能。它是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ง่าย", [LanguageCode.FRENCH]: "ง่าย", [LanguageCode.PORTUGUESE]: "ง่าย (fácil)", [LanguageCode.MANDARIN]: "ง่าย (簡單)" },
                        { [LanguageCode.ENGLISH]: "ยาก", [LanguageCode.FRENCH]: "ยาก", [LanguageCode.PORTUGUESE]: "ยาก (difícil)", [LanguageCode.MANDARIN]: "ยาก (難)" },
                        { [LanguageCode.ENGLISH]: "เร็ว", [LanguageCode.FRENCH]: "เร็ว", [LanguageCode.PORTUGUESE]: "เร็ว (rápido)", [LanguageCode.MANDARIN]: "เร็ว (快)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "A person who weighs very little is:", [LanguageCode.FRENCH]: "Une personne qui pèse très peu est :", [LanguageCode.PORTUGUESE]: "Uma pessoa que pesa muito pouco é:", [LanguageCode.MANDARIN]: "一個體重很輕的人是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อ้วน", [LanguageCode.FRENCH]: "อ้วน", [LanguageCode.PORTUGUESE]: "อ้วน", [LanguageCode.MANDARIN]: "อ้วน (胖)" },
                        { [LanguageCode.ENGLISH]: "ผอม", [LanguageCode.FRENCH]: "ผอม", [LanguageCode.PORTUGUESE]: "ผอม", [LanguageCode.MANDARIN]: "ผอม (瘦)" },
                        { [LanguageCode.ENGLISH]: "สูง", [LanguageCode.FRENCH]: "สูง", [LanguageCode.PORTUGUESE]: "สูง", [LanguageCode.MANDARIN]: "สูง (高)" },
                    ],
                    correctIndex: 1
                }
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What does your room look like?", [LanguageCode.FRENCH]: "À quoi ressemble ta chambre ?", [LanguageCode.PORTUGUESE]: "Como é o seu quarto?", [LanguageCode.MANDARIN]: "你的房間看起來怎麼樣？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "My room is small but pretty. The walls are white and I have a blue bed.", [LanguageCode.FRENCH]: "Ma chambre est petite mais jolie. Les murs sont blancs et j'ai un lit bleu.", [LanguageCode.PORTUGUESE]: "Meu quarto é pequeno mas bonito. As paredes são brancas e eu tenho uma cama azul.", [LanguageCode.MANDARIN]: "我的房間小但很漂亮。牆壁是白色的，我有一張藍色的床。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What color is the bed?", [LanguageCode.FRENCH]: "De quelle couleur est le lit ?", [LanguageCode.PORTUGUESE]: "De que cor é a cama?", [LanguageCode.MANDARIN]: "床是什麼顏色？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "White", [LanguageCode.FRENCH]: "Blanc", [LanguageCode.PORTUGUESE]: "Branco", [LanguageCode.MANDARIN]: "白色" },
                        { [LanguageCode.ENGLISH]: "Blue", [LanguageCode.FRENCH]: "Bleu", [LanguageCode.PORTUGUESE]: "Azul", [LanguageCode.MANDARIN]: "藍色" },
                        { [LanguageCode.ENGLISH]: "Red", [LanguageCode.FRENCH]: "Rouge", [LanguageCode.PORTUGUESE]: "Vermelho", [LanguageCode.MANDARIN]: "紅色" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How would you describe the room?", [LanguageCode.FRENCH]: "Comment décririez-vous la chambre ?", [LanguageCode.PORTUGUESE]: "Como você descreveria o quarto?", [LanguageCode.MANDARIN]: "你會如何描述這個房間？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Big and ugly", [LanguageCode.FRENCH]: "Grande et laide", [LanguageCode.PORTUGUESE]: "Grande e feio", [LanguageCode.MANDARIN]: "大而醜" },
                        { [LanguageCode.ENGLISH]: "Small but pretty", [LanguageCode.FRENCH]: "Petite mais jolie", [LanguageCode.PORTUGUESE]: "Pequeno mas bonito", [LanguageCode.MANDARIN]: "小但漂亮" },
                        { [LanguageCode.ENGLISH]: "Old and dirty", [LanguageCode.FRENCH]: "Vieille et sale", [LanguageCode.PORTUGUESE]: "Velho e sujo", [LanguageCode.MANDARIN]: "舊而髒" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "อธิบายห้องของคุณด้วยคำคุณศัพท์ 5 คำ",
            [LanguageCode.FRENCH]: "อธิบายห้องของคุณด้วยคำคุณศัพท์ 5 คำ",
            [LanguageCode.PORTUGUESE]: "อธิบายห้องของคุณด้วยคำคุณศัพท์ 5 คำ",
            [LanguageCode.MANDARIN]: "อธิบายห้องของคุณด้วยคำคุณศัพท์ 5 คำ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe your room using 5 adjectives. Example: hɔ̂ɔng khɔ̌ɔng chǎn lék, sǔay, sǐi khǎao, sà-àat, láe sà-duàk (My room is small, beautiful, white, clean, and comfortable)",
            [LanguageCode.FRENCH]: "Décrivez votre chambre en utilisant 5 adjectifs. Exemple : hɔ̂ɔng khɔ̌ɔng chǎn lék, sǔay, sǐi khǎao, sà-àat, láe sà-duàk (Ma chambre est petite, belle, blanche, propre et confortable)",
            [LanguageCode.PORTUGUESE]: "Descreva seu quarto usando 5 adjetivos. Exemplo: hɔ̂ɔng khɔ̌ɔng chǎn lék, sǔay, sǐi khǎao, sà-àat, láe sà-duàk (Meu quarto é pequeno, bonito, branco, limpo e confortável)",
            [LanguageCode.MANDARIN]: "用 5 個形容詞描述你的房間。例子：hɔ̂ɔng khɔ̌ɔng chǎn lék, sǔay, sǐi khǎao, sà-àat, láe sà-duàk（我的房間小、漂亮、白色、乾淨、舒適）",
        },
        speakingType: 'open-ended'
    }
};
