import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_21: Lesson = {
    id: "1.21",
    title: {
        [LanguageCode.ENGLISH]: "Bonus Tones Practice",
        [LanguageCode.FRENCH]: "Pratique bonus des tons",
        [LanguageCode.PORTUGUESE]: "Prática Bônus de Tons",
        [LanguageCode.MANDARIN]: "額外聲調練習",
    },
    vocabulary: [
        // All versions of khao (rice/he/news/nine)
        { thai: "ข้าว", phonetic: "khâao", translations: { [LanguageCode.ENGLISH]: "rice (falling tone)", [LanguageCode.FRENCH]: "riz (ton descendant)", [LanguageCode.PORTUGUESE]: "arroz (tom descendente)", [LanguageCode.MANDARIN]: "米飯（降調）" } },
        { thai: "เข้า", phonetic: "khâo", translations: { [LanguageCode.ENGLISH]: "to enter (falling tone)", [LanguageCode.FRENCH]: "entrer (ton descendant)", [LanguageCode.PORTUGUESE]: "entrar (tom descendente)", [LanguageCode.MANDARIN]: "進入（降調）" } },
        { thai: "ขาว", phonetic: "khǎao", translations: { [LanguageCode.ENGLISH]: "white (rising tone)", [LanguageCode.FRENCH]: "blanc (ton montant)", [LanguageCode.PORTUGUESE]: "branco (tom ascendente)", [LanguageCode.MANDARIN]: "白色（升調）" } },
        { thai: "เค้า", phonetic: "kháo", translations: { [LanguageCode.ENGLISH]: "he/she (informal, high tone)", [LanguageCode.FRENCH]: "il/elle (informel, ton haut)", [LanguageCode.PORTUGUESE]: "ele/ela (informal, tom alto)", [LanguageCode.MANDARIN]: "他/她（非正式，高調）" } },
        { thai: "ข่าว", phonetic: "khàao", translations: { [LanguageCode.ENGLISH]: "news (low tone)", [LanguageCode.FRENCH]: "nouvelles (ton bas)", [LanguageCode.PORTUGUESE]: "notícias (tom baixo)", [LanguageCode.MANDARIN]: "新聞（低調）" } },
        { thai: "เก้า", phonetic: "gâo", translations: { [LanguageCode.ENGLISH]: "nine (falling tone)", [LanguageCode.FRENCH]: "neuf (ton descendant)", [LanguageCode.PORTUGUESE]: "nove (tom descendente)", [LanguageCode.MANDARIN]: "九（降調）" } },
        
        // All versions of maa (come/dog/horse)
        { thai: "มา", phonetic: "maa", translations: { [LanguageCode.ENGLISH]: "to come (mid tone)", [LanguageCode.FRENCH]: "venir (ton moyen)", [LanguageCode.PORTUGUESE]: "vir (tom médio)", [LanguageCode.MANDARIN]: "來（平調）" } },
        { thai: "หมา", phonetic: "mǎa", translations: { [LanguageCode.ENGLISH]: "dog (rising tone)", [LanguageCode.FRENCH]: "chien (ton montant)", [LanguageCode.PORTUGUESE]: "cachorro (tom ascendente)", [LanguageCode.MANDARIN]: "狗（升調）" } },
        { thai: "ม้า", phonetic: "máa", translations: { [LanguageCode.ENGLISH]: "horse (high tone)", [LanguageCode.FRENCH]: "cheval (ton haut)", [LanguageCode.PORTUGUESE]: "cavalo (tom alto)", [LanguageCode.MANDARIN]: "馬（高調）" } },
        { thai: "ไหม", phonetic: "mǎi", translations: { [LanguageCode.ENGLISH]: "silk (rising tone)", [LanguageCode.FRENCH]: "soie (ton montant)", [LanguageCode.PORTUGUESE]: "seda (tom ascendente)", [LanguageCode.MANDARIN]: "絲綢（升調）" } },
        { thai: "ม่า", phonetic: "mâa", translations: { [LanguageCode.ENGLISH]: "curtain (falling tone)", [LanguageCode.FRENCH]: "rideau (ton descendant)", [LanguageCode.PORTUGUESE]: "cortina (tom descendente)", [LanguageCode.MANDARIN]: "窗簾（降調）" } },
        
        // All versions of mai (new/wood/burn/question particle)
        { thai: "ใหม่", phonetic: "mài", translations: { [LanguageCode.ENGLISH]: "new (low tone)", [LanguageCode.FRENCH]: "nouveau (ton bas)", [LanguageCode.PORTUGUESE]: "novo (tom baixo)", [LanguageCode.MANDARIN]: "新的（低調）" } },
        { thai: "ไม้", phonetic: "máai", translations: { [LanguageCode.ENGLISH]: "wood/tree (high tone)", [LanguageCode.FRENCH]: "bois/arbre (ton haut)", [LanguageCode.PORTUGUESE]: "madeira/árvore (tom alto)", [LanguageCode.MANDARIN]: "木頭/樹（高調）" } },
        { thai: "ไหม้", phonetic: "mâi", translations: { [LanguageCode.ENGLISH]: "to burn (falling tone)", [LanguageCode.FRENCH]: "brûler (ton descendant)", [LanguageCode.PORTUGUESE]: "queimar (tom descendente)", [LanguageCode.MANDARIN]: "燃燒（降調）" } },
        { thai: "ไหม", phonetic: "mǎi", translations: { [LanguageCode.ENGLISH]: "question particle (rising tone)", [LanguageCode.FRENCH]: "particule interrogative (ton montant)", [LanguageCode.PORTUGUESE]: "partícula de pergunta (tom ascendente)", [LanguageCode.MANDARIN]: "疑問詞（升調）" } },
        { thai: "ไม่", phonetic: "mâi", translations: { [LanguageCode.ENGLISH]: "no/not (falling tone)", [LanguageCode.FRENCH]: "non/ne...pas (ton descendant)", [LanguageCode.PORTUGUESE]: "não (tom descendente)", [LanguageCode.MANDARIN]: "不（降調）" } },
        
        // All versions of glai (near/far)
        { thai: "ใกล้", phonetic: "glâi", translations: { [LanguageCode.ENGLISH]: "near/close (falling tone)", [LanguageCode.FRENCH]: "proche (ton descendant)", [LanguageCode.PORTUGUESE]: "perto (tom descendente)", [LanguageCode.MANDARIN]: "近（降調）" } },
        { thai: "ไกล", phonetic: "glai", translations: { [LanguageCode.ENGLISH]: "far (mid tone)", [LanguageCode.FRENCH]: "loin (ton moyen)", [LanguageCode.PORTUGUESE]: "longe (tom médio)", [LanguageCode.MANDARIN]: "遠（平調）" } },
        { thai: "ไกล่", phonetic: "glài", translations: { [LanguageCode.ENGLISH]: "to mediate (low tone)", [LanguageCode.FRENCH]: "médier (ton bas)", [LanguageCode.PORTUGUESE]: "mediar (tom baixo)", [LanguageCode.MANDARIN]: "調解（低調）" } },
        { thai: "กล้าย", phonetic: "glâai", translations: { [LanguageCode.ENGLISH]: "brave (falling tone)", [LanguageCode.FRENCH]: "courageux (ton descendant)", [LanguageCode.PORTUGUESE]: "corajoso (tom descendente)", [LanguageCode.MANDARIN]: "勇敢（降調）" } },
        
        // All versions of suea (clothes/tiger/buy)
        { thai: "เสื้อ", phonetic: "sʉ̂a", translations: { [LanguageCode.ENGLISH]: "shirt/clothes (falling tone)", [LanguageCode.FRENCH]: "chemise/vêtements (ton descendant)", [LanguageCode.PORTUGUESE]: "camisa/roupas (tom descendente)", [LanguageCode.MANDARIN]: "衣服（降調）" } },
        { thai: "เสือ", phonetic: "sʉ̌a", translations: { [LanguageCode.ENGLISH]: "tiger (rising tone)", [LanguageCode.FRENCH]: "tigre (ton montant)", [LanguageCode.PORTUGUESE]: "tigre (tom ascendente)", [LanguageCode.MANDARIN]: "老虎（升調）" } },
        { thai: "ซื้อ", phonetic: "sʉ́ʉ", translations: { [LanguageCode.ENGLISH]: "to buy (high tone)", [LanguageCode.FRENCH]: "acheter (ton haut)", [LanguageCode.PORTUGUESE]: "comprar (tom alto)", [LanguageCode.MANDARIN]: "買（高調）" } },
        { thai: "สื่อ", phonetic: "sʉ̀ʉ", translations: { [LanguageCode.ENGLISH]: "media/to communicate (low tone)", [LanguageCode.FRENCH]: "médias/communiquer (ton bas)", [LanguageCode.PORTUGUESE]: "mídia/comunicar (tom baixo)", [LanguageCode.MANDARIN]: "媒體/溝通（低調）" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Mastering Thai Tones: The Key to Being Understood",
                [LanguageCode.FRENCH]: "Maîtriser les tons thaïlandais : La clé pour être compris",
                [LanguageCode.PORTUGUESE]: "Dominando os Tons Tailandeses: A Chave para Ser Entendido",
                [LanguageCode.MANDARIN]: "掌握泰語聲調：被理解的關鍵",
            },
            content: {
                [LanguageCode.ENGLISH]: "Tones are THE most important part of speaking Thai! The same sound with different tones can mean completely different things. Let's master the classic tone confusions!\n\n**The 5 Thai Tones:**\n\n1. **Mid Tone**: Flat, neutral pitch\n2. **Low Tone**: Starts low and stays low\n3. **Falling Tone**: Starts high and drops down\n4. **High Tone**: Starts high and stays high\n5. **Rising Tone**: Starts low and rises up (like a question)\n\n**Classic Tone Confusions:**\n\n**KHAO Family:**\n• **ข้าว (khâao)** = rice (FALLING - like disappointment)\n• **เข้า (khâo)** = to enter (FALLING)\n• **ขาว (khǎao)** = white (RISING - like a question)\n• **เค้า (kháo)** = he/she informal (HIGH - excited pitch)\n• **ข่าว (khàao)** = news (LOW - serious tone)\n• **เก้า (gâo)** = nine (FALLING)\n\nExample: 'ข้าวขาว' (khâao khǎao) = white rice (falling-rising)\n\n**MAA Family:**\n• **มา (maa)** = to come (MID - flat and neutral)\n• **หมา (mǎa)** = dog (RISING - like asking dog?)\n• **ม้า (máa)** = horse (HIGH - excited)\n• **ม่า (mâa)** = curtain (FALLING)\n• **ไหม (mǎi)** = silk (RISING)\n\nExample: 'หมามา' (mǎa maa) = the dog comes (rising-mid)\n\n**MAI Family (The Hardest!):**\n• **ใหม่ (mài)** = new (LOW - starts low)\n• **ไม้ (máai)** = wood/tree (HIGH - high pitch)\n• **ไหม้ (mâi)** = to burn (FALLING - drops down)\n• **ไหม (mǎi)** = question particle (RISING - like asking)\n• **ไม่ (mâi)** = no/not (FALLING - firm no)\n\nExample: 'ไม่ใหม่' (mâi mài) = not new (falling-low)\nExample: 'ไม้ไหม้ไหม' (máai mâi mǎi) = Does the wood burn? (high-falling-rising)\n\n**GLAI Family:**\n• **ใกล้ (glâi)** = near (FALLING)\n• **ไกล (glai)** = far (MID)\n• **ไกล่ (glài)** = to mediate (LOW)\n• **กล้าย (glâai)** = brave (FALLING)\n\nExample: 'ใกล้หรือไกล' (glâi rʉ̌ʉ glai) = near or far? (falling-rising-mid)\n\n**SUEA Family:**\n• **เสื้อ (sʉ̂a)** = shirt/clothes (FALLING)\n• **เสือ (sʉ̌a)** = tiger (RISING)\n• **ซื้อ (sʉ́ʉ)** = to buy (HIGH)\n• **สื่อ (sʉ̀ʉ)** = media/communicate (LOW)\n\nExample: 'ซื้อเสื้อ' (sʉ́ʉ sʉ̂a) = buy clothes (high-falling)\n\n**How to Think About Tones:**\n\n• **Mid (maa - มา)**: Flat line, neutral\n• **Low (mài - ใหม่)**: Low and stays low\n• **Falling (mâi - ไม่)**: Drops down sharply\n• **High (máa - ม้า)**: High excited pitch\n• **Rising (mǎa - หมา)**: Goes up like asking\n\n**Tone Practice Tips:**\n\n1. **Exaggerate at first** - Make tones MORE dramatic than feels natural\n2. **Use hand gestures** - Move your hand to match the tone contour\n3. **Record yourself** - Compare to native speakers\n4. **Practice minimal pairs** - Words that differ only in tone\n5. **Don't give up!** - Tones take time, but they are learnable!\n\n**Common Mistakes to Avoid:**\n\n• Using flat mid tone for everything (sounds monotone)\n• Making falling tone too subtle (needs to DROP)\n• Confusing rising tone with high tone\n• Being afraid to exaggerate (Thais exaggerate tones!)\n\n**What TO Do:**\n\n• Exaggerate the tones\n• Use your whole voice range\n• Practice with minimal pairs\n• Listen and repeat MANY times\n\nMaster these tone families and you will sound like a true Thai speaker!",
                [LanguageCode.FRENCH]: "Les tons sont LA partie la plus importante de la langue thaïlandaise ! Le même son avec des tons différents peut signifier des choses complètement différentes.\n\n**Les 5 tons thaïlandais :**\n\n1. **Ton moyen**: Hauteur plate et neutre\n2. **Ton bas**: Commence bas et reste bas\n3. **Ton descendant**: Commence haut et descend\n4. **Ton haut**: Commence haut et reste haut\n5. **Ton montant**: Commence bas et monte (comme une question)\n\n**Confusions de tons classiques :**\n\n**Famille KHAO :**\n• **ข้าว (khâao)** = riz (DESCENDANT)\n• **ขาว (khǎao)** = blanc (MONTANT)\n• **ข่าว (khàao)** = nouvelles (BAS)\n\n**Famille MAA :**\n• **มา (maa)** = venir (MOYEN)\n• **หมา (mǎa)** = chien (MONTANT)\n• **ม้า (máa)** = cheval (HAUT)\n\n**Famille MAI :**\n• **ใหม่ (mài)** = nouveau (BAS)\n• **ไม้ (máai)** = bois (HAUT)\n• **ไม่ (mâi)** = non (DESCENDANT)",
                [LanguageCode.PORTUGUESE]: "Tons são A parte mais importante do tailandês! O mesmo som com tons diferentes pode significar coisas completamente diferentes.\n\n**Os 5 tons tailandeses:**\n\n1. **Tom médio**: Tom plano e neutro\n2. **Tom baixo**: Começa baixo e fica baixo\n3. **Tom descendente**: Começa alto e desce\n4. **Tom alto**: Começa alto e fica alto\n5. **Tom ascendente**: Começa baixo e sobe (como uma pergunta)\n\n**Confusões clássicas de tons:**\n\n**Família KHAO:**\n• **ข้าว (khâao)** = arroz (DESCENDENTE)\n• **ขาว (khǎao)** = branco (ASCENDENTE)\n• **ข่าว (khàao)** = notícias (BAIXO)\n\n**Família MAA:**\n• **มา (maa)** = vir (MÉDIO)\n• **หมา (mǎa)** = cachorro (ASCENDENTE)\n• **ม้า (máa)** = cavalo (ALTO)\n\n**Família MAI:**\n• **ใหม่ (mài)** = novo (BAIXO)\n• **ไม้ (máai)** = madeira (ALTO)\n• **ไม่ (mâi)** = não (DESCENDENTE)",
                [LanguageCode.MANDARIN]: "聲調是泰語中最重要的部分！相同的聲音用不同的聲調可以表示完全不同的意思。\n\n**5個泰語聲調：**\n\n1. **平調**：平坦、中性音高\n2. **低調**：從低開始並保持低\n3. **降調**：從高開始並下降\n4. **高調**：從高開始並保持高\n5. **升調**：從低開始並上升（像問題）\n\n**經典聲調混淆：**\n\n**KHAO 家族：**\n• **ข้าว (khâao)** = 米飯（降調）\n• **ขาว (khǎao)** = 白色（升調）\n• **ข่าว (khàao)** = 新聞（低調）\n\n**MAA 家族：**\n• **มา (maa)** = 來（平調）\n• **หมา (mǎa)** = 狗（升調）\n• **ม้า (máa)** = 馬（高調）\n\n**MAI 家族：**\n• **ใหม่ (mài)** = 新的（低調）\n• **ไม้ (máai)** = 木頭（高調）\n• **ไม่ (mâi)** = 不（降調）",
            }
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Identify the correct tone for each word.",
                [LanguageCode.FRENCH]: "Identifiez le ton correct pour chaque mot.",
                [LanguageCode.PORTUGUESE]: "Identifique o tom correto para cada palavra.",
                [LanguageCode.MANDARIN]: "識別每個詞的正確聲調。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "How do you pronounce ข้าว (rice)?", [LanguageCode.FRENCH]: "Comment prononcez-vous ข้าว (riz) ?", [LanguageCode.PORTUGUESE]: "Como você pronuncia ข้าว (arroz)?", [LanguageCode.MANDARIN]: "如何發音 ข้าว（米飯）？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Starts high, drops down (falling tone)", [LanguageCode.FRENCH]: "Commence haut, descend (ton descendant)", [LanguageCode.PORTUGUESE]: "Começa alto, desce (tom descendente)", [LanguageCode.MANDARIN]: "從高開始，下降（降調）" },
                        { [LanguageCode.ENGLISH]: "Starts low, rises up (rising tone)", [LanguageCode.FRENCH]: "Commence bas, monte (ton montant)", [LanguageCode.PORTUGUESE]: "Começa baixo, sobe (tom ascendente)", [LanguageCode.MANDARIN]: "從低開始，上升（升調）" },
                        { [LanguageCode.ENGLISH]: "Flat and neutral (mid tone)", [LanguageCode.FRENCH]: "Plat et neutre (ton moyen)", [LanguageCode.PORTUGUESE]: "Plano e neutro (tom médio)", [LanguageCode.MANDARIN]: "平坦中性（平調）" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you pronounce หมา (dog)?", [LanguageCode.FRENCH]: "Comment prononcez-vous หมา (chien) ?", [LanguageCode.PORTUGUESE]: "Como você pronuncia หมา (cachorro)?", [LanguageCode.MANDARIN]: "如何發音 หมา（狗）？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Flat and neutral (mid tone)", [LanguageCode.FRENCH]: "Plat et neutre (ton moyen)", [LanguageCode.PORTUGUESE]: "Plano e neutro (tom médio)", [LanguageCode.MANDARIN]: "平坦中性（平調）" },
                        { [LanguageCode.ENGLISH]: "Starts low, rises up like a question (rising tone)", [LanguageCode.FRENCH]: "Commence bas, monte comme une question (ton montant)", [LanguageCode.PORTUGUESE]: "Começa baixo, sobe como uma pergunta (tom ascendente)", [LanguageCode.MANDARIN]: "從低開始，像問題一樣上升（升調）" },
                        { [LanguageCode.ENGLISH]: "Starts high and drops (falling tone)", [LanguageCode.FRENCH]: "Commence haut et descend (ton descendant)", [LanguageCode.PORTUGUESE]: "Começa alto e desce (tom descendente)", [LanguageCode.MANDARIN]: "從高開始並下降（降調）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you pronounce ไม่ (not/no)?", [LanguageCode.FRENCH]: "Comment prononcez-vous ไม่ (non) ?", [LanguageCode.PORTUGUESE]: "Como você pronuncia ไม่ (não)?", [LanguageCode.MANDARIN]: "如何發音 ไม่（不）？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "High and stays high (high tone)", [LanguageCode.FRENCH]: "Haut et reste haut (ton haut)", [LanguageCode.PORTUGUESE]: "Alto e fica alto (tom alto)", [LanguageCode.MANDARIN]: "高並保持高（高調）" },
                        { [LanguageCode.ENGLISH]: "Starts high, drops down firmly (falling tone)", [LanguageCode.FRENCH]: "Commence haut, descend fermement (ton descendant)", [LanguageCode.PORTUGUESE]: "Começa alto, desce firmemente (tom descendente)", [LanguageCode.MANDARIN]: "從高開始，堅定地下降（降調）" },
                        { [LanguageCode.ENGLISH]: "Rises up like a question (rising tone)", [LanguageCode.FRENCH]: "Monte comme une question (ton montant)", [LanguageCode.PORTUGUESE]: "Sobe como uma pergunta (tom ascendente)", [LanguageCode.MANDARIN]: "像問題一樣上升（升調）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you pronounce ใกล้ (near)?", [LanguageCode.FRENCH]: "Comment prononcez-vous ใกล้ (proche) ?", [LanguageCode.PORTUGUESE]: "Como você pronuncia ใกล้ (perto)?", [LanguageCode.MANDARIN]: "如何發音 ใกล้（近）？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Flat mid tone", [LanguageCode.FRENCH]: "Ton moyen plat", [LanguageCode.PORTUGUESE]: "Tom médio plano", [LanguageCode.MANDARIN]: "平坦中調" },
                        { [LanguageCode.ENGLISH]: "Falling tone - drops down", [LanguageCode.FRENCH]: "Ton descendant - descend", [LanguageCode.PORTUGUESE]: "Tom descendente - desce", [LanguageCode.MANDARIN]: "降調 - 下降" },
                        { [LanguageCode.ENGLISH]: "Rising tone - goes up", [LanguageCode.FRENCH]: "Ton montant - monte", [LanguageCode.PORTUGUESE]: "Tom ascendente - sobe", [LanguageCode.MANDARIN]: "升調 - 上升" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you pronounce ซื้อ (to buy)?", [LanguageCode.FRENCH]: "Comment prononcez-vous ซื้อ (acheter) ?", [LanguageCode.PORTUGUESE]: "Como você pronuncia ซื้อ (comprar)?", [LanguageCode.MANDARIN]: "如何發音 ซื้อ（買）？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "High tone - high pitch", [LanguageCode.FRENCH]: "Ton haut - hauteur élevée", [LanguageCode.PORTUGUESE]: "Tom alto - tom agudo", [LanguageCode.MANDARIN]: "高調 - 高音" },
                        { [LanguageCode.ENGLISH]: "Low tone - low and flat", [LanguageCode.FRENCH]: "Ton bas - bas et plat", [LanguageCode.PORTUGUESE]: "Tom baixo - baixo e plano", [LanguageCode.MANDARIN]: "低調 - 低而平" },
                        { [LanguageCode.ENGLISH]: "Falling tone - drops", [LanguageCode.FRENCH]: "Ton descendant - descend", [LanguageCode.PORTUGUESE]: "Tom descendente - desce", [LanguageCode.MANDARIN]: "降調 - 下降" },
                    ],
                    correctIndex: 0
                },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the Thai word to its correct meaning (pay attention to tones!).",
                [LanguageCode.FRENCH]: "Associez le mot thaïlandais à sa signification correcte (attention aux tons !).",
                [LanguageCode.PORTUGUESE]: "Relacione a palavra tailandesa ao seu significado correto (preste atenção aos tons!).",
                [LanguageCode.MANDARIN]: "將泰語單詞與其正確含義配對（注意聲調！）。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "ข้าว (khâao - falling)", [LanguageCode.FRENCH]: "ข้าว (khâao - descendant)", [LanguageCode.PORTUGUESE]: "ข้าว (khâao - descendente)", [LanguageCode.MANDARIN]: "ข้าว（khâao - 降調）" }, answer: { [LanguageCode.ENGLISH]: "rice", [LanguageCode.FRENCH]: "riz", [LanguageCode.PORTUGUESE]: "arroz", [LanguageCode.MANDARIN]: "米飯" } },
                { prompt: { [LanguageCode.ENGLISH]: "ขาว (khǎao - rising)", [LanguageCode.FRENCH]: "ขาว (khǎao - montant)", [LanguageCode.PORTUGUESE]: "ขาว (khǎao - ascendente)", [LanguageCode.MANDARIN]: "ขาว（khǎao - 升調）" }, answer: { [LanguageCode.ENGLISH]: "white", [LanguageCode.FRENCH]: "blanc", [LanguageCode.PORTUGUESE]: "branco", [LanguageCode.MANDARIN]: "白色" } },
                { prompt: { [LanguageCode.ENGLISH]: "มา (maa - mid)", [LanguageCode.FRENCH]: "มา (maa - moyen)", [LanguageCode.PORTUGUESE]: "มา (maa - médio)", [LanguageCode.MANDARIN]: "มา（maa - 平調）" }, answer: { [LanguageCode.ENGLISH]: "to come", [LanguageCode.FRENCH]: "venir", [LanguageCode.PORTUGUESE]: "vir", [LanguageCode.MANDARIN]: "來" } },
                { prompt: { [LanguageCode.ENGLISH]: "หมา (mǎa - rising)", [LanguageCode.FRENCH]: "หมา (mǎa - montant)", [LanguageCode.PORTUGUESE]: "หมา (mǎa - ascendente)", [LanguageCode.MANDARIN]: "หมา（mǎa - 升調）" }, answer: { [LanguageCode.ENGLISH]: "dog", [LanguageCode.FRENCH]: "chien", [LanguageCode.PORTUGUESE]: "cachorro", [LanguageCode.MANDARIN]: "狗" } },
                { prompt: { [LanguageCode.ENGLISH]: "ไม่ (mâi - falling)", [LanguageCode.FRENCH]: "ไม่ (mâi - descendant)", [LanguageCode.PORTUGUESE]: "ไม่ (mâi - descendente)", [LanguageCode.MANDARIN]: "ไม่（mâi - 降調）" }, answer: { [LanguageCode.ENGLISH]: "not/no", [LanguageCode.FRENCH]: "non/ne...pas", [LanguageCode.PORTUGUESE]: "não", [LanguageCode.MANDARIN]: "不" } },
                { prompt: { [LanguageCode.ENGLISH]: "ใหม่ (mài - low)", [LanguageCode.FRENCH]: "ใหม่ (mài - bas)", [LanguageCode.PORTUGUESE]: "ใหม่ (mài - baixo)", [LanguageCode.MANDARIN]: "ใหม่（mài - 低調）" }, answer: { [LanguageCode.ENGLISH]: "new", [LanguageCode.FRENCH]: "nouveau", [LanguageCode.PORTUGUESE]: "novo", [LanguageCode.MANDARIN]: "新的" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete these tongue twisters with the correct tone words.",
                [LanguageCode.FRENCH]: "Complétez ces virelangues avec les mots de ton corrects.",
                [LanguageCode.PORTUGUESE]: "Complete esses trava-línguas com as palavras de tom corretas.",
                [LanguageCode.MANDARIN]: "用正確的聲調詞完成這些繞口令。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "White rice: ___ ___ (rice white)", [LanguageCode.FRENCH]: "Riz blanc : ___ ___ (riz blanc)", [LanguageCode.PORTUGUESE]: "Arroz branco: ___ ___ (arroz branco)", [LanguageCode.MANDARIN]: "白飯：___（米飯 白色）" }, correctAnswer: "ข้าวขาว", end: { [LanguageCode.ENGLISH]: " (khâao khǎao)", [LanguageCode.FRENCH]: " (khâao khǎao)", [LanguageCode.PORTUGUESE]: " (khâao khǎao)", [LanguageCode.MANDARIN]: "（khâao khǎao）" } },
                { start: { [LanguageCode.ENGLISH]: "Does the wood burn?: ___ ___ ___ (wood burn question)", [LanguageCode.FRENCH]: "Le bois brûle-t-il ? : ___ ___ ___ (bois brûler question)", [LanguageCode.PORTUGUESE]: "A madeira queima?: ___ ___ ___ (madeira queimar pergunta)", [LanguageCode.MANDARIN]: "木頭燃燒嗎？：___（木頭 燃燒 疑問）" }, correctAnswer: "ไม้ไหม้ไหม", end: { [LanguageCode.ENGLISH]: " (máai mâi mǎi)", [LanguageCode.FRENCH]: " (máai mâi mǎi)", [LanguageCode.PORTUGUESE]: " (máai mâi mǎi)", [LanguageCode.MANDARIN]: "（máai mâi mǎi）" } },
                { start: { [LanguageCode.ENGLISH]: "The dog comes: ___ ___ (dog comes)", [LanguageCode.FRENCH]: "Le chien vient : ___ ___ (chien vient)", [LanguageCode.PORTUGUESE]: "O cachorro vem: ___ ___ (cachorro vem)", [LanguageCode.MANDARIN]: "狗來了：___（狗 來）" }, correctAnswer: "หมามา", end: { [LanguageCode.ENGLISH]: " (mǎa maa)", [LanguageCode.FRENCH]: " (mǎa maa)", [LanguageCode.PORTUGUESE]: " (mǎa maa)", [LanguageCode.MANDARIN]: "（mǎa maa）" } },
                { start: { [LanguageCode.ENGLISH]: "New wood doesn't burn: ___ ___ ___ ___ (wood new not burn)", [LanguageCode.FRENCH]: "Le bois neuf ne brûle pas : ___ ___ ___ ___ (bois neuf ne brûle pas)", [LanguageCode.PORTUGUESE]: "Madeira nova não queima: ___ ___ ___ ___ (madeira nova não queimar)", [LanguageCode.MANDARIN]: "新木頭不燃燒：___（木頭 新的 不 燃燒）" }, correctAnswer: "ไม้ใหม่ไม่ไหม้", end: { [LanguageCode.ENGLISH]: " (máai mài mâi mâi)", [LanguageCode.FRENCH]: " (máai mài mâi mâi)", [LanguageCode.PORTUGUESE]: " (máai mài mâi mâi)", [LanguageCode.MANDARIN]: "（máai mài mâi mâi）" } },
                { start: { [LanguageCode.ENGLISH]: "Buy clothes: ___ ___ (buy clothes)", [LanguageCode.FRENCH]: "Acheter des vêtements : ___ ___ (acheter vêtements)", [LanguageCode.PORTUGUESE]: "Comprar roupas: ___ ___ (comprar roupas)", [LanguageCode.MANDARIN]: "買衣服：___（買 衣服）" }, correctAnswer: "ซื้อเสื้อ", end: { [LanguageCode.ENGLISH]: " (sʉ́ʉ sʉ̂a)", [LanguageCode.FRENCH]: " (sʉ́ʉ sʉ̂a)", [LanguageCode.PORTUGUESE]: " (sʉ́ʉ sʉ̂a)", [LanguageCode.MANDARIN]: "（sʉ́ʉ sʉ̂a）" } },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [],
        comprehensionQuestions: {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "No listening comprehension for this lesson.",
                [LanguageCode.FRENCH]: "Pas de compréhension orale pour cette leçon.",
                [LanguageCode.PORTUGUESE]: "Sem compreensão auditiva para esta lição.",
                [LanguageCode.MANDARIN]: "本課沒有聽力理解。",
            },
            questions: []
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "ฝึกพูดวลีที่มีโทนเสียงยาก",
            [LanguageCode.FRENCH]: "ฝึกพูดวลีที่มีโทนเสียงยาก",
            [LanguageCode.PORTUGUESE]: "ฝึกพูดวลีที่มีโทนเสียงยาก",
            [LanguageCode.MANDARIN]: "ฝึกพูดวลีที่มีโทนเสียงยาก",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Practice these classic Thai tongue twisters with correct tones. Record yourself and keep re-recording until you get the tones right!\n\n1. ข้าวขาว (khâao khǎao) - white rice (falling-rising)\n2. ไม้ใหม่ไม่ไหม้ (máai mài mâi mâi) - new wood doesn't burn (high-low-falling-falling)\n3. หมามา (mǎa maa) - the dog comes (rising-mid)\n4. ซื้อเสื้อ (sʉ́ʉ sʉ̂a) - buy clothes (high-falling)\n5. ไม้ไหม้ไหม (máai mâi mǎi) - does the wood burn? (high-falling-rising)\n6. ใกล้ไกล (glâi glai) - near or far (falling-mid)\n\nFor each one:\n- Say it slowly first, exaggerating the tones\n- Use hand gestures to match the tone contours\n- Gradually speed up while maintaining correct tones\n- Record and compare to native speakers\n- Don't give up - keep practicing until the tones sound natural!\n\nRemember: The tone contour should be CLEAR and DRAMATIC. Don't be shy - exaggerate!",
            [LanguageCode.FRENCH]: "Pratiquez ces virelangues thaïlandais classiques avec les tons corrects. Enregistrez-vous et continuez à vous réenregistrer jusqu'à ce que vous obteniez les tons corrects !\n\n1. ข้าวขาว (khâao khǎao) - riz blanc (descendant-montant)\n2. ไม้ใหม่ไม่ไหม้ (máai mài mâi mâi) - le bois neuf ne brûle pas (haut-bas-descendant-descendant)\n3. หมามา (mǎa maa) - le chien vient (montant-moyen)\n4. ซื้อเสื้อ (sʉ́ʉ sʉ̂a) - acheter des vêtements (haut-descendant)\n5. ไม้ไหม้ไหม (máai mâi mǎi) - le bois brûle-t-il ? (haut-descendant-montant)\n\nPour chacun :\n- Dites-le lentement d'abord, en exagérant les tons\n- Utilisez des gestes pour correspondre aux contours des tons\n- Accélérez progressivement tout en maintenant les tons corrects\n- Enregistrez et comparez avec des locuteurs natifs",
            [LanguageCode.PORTUGUESE]: "Pratique esses trava-línguas tailandeses clássicos com tons corretos. Grave-se e continue regravando até acertar os tons!\n\n1. ข้าวขาว (khâao khǎao) - arroz branco (descendente-ascendente)\n2. ไม้ใหม่ไม่ไหม้ (máai mài mâi mâi) - madeira nova não queima (alto-baixo-descendente-descendente)\n3. หมามา (mǎa maa) - o cachorro vem (ascendente-médio)\n4. ซื้อเสื้อ (sʉ́ʉ sʉ̂a) - comprar roupas (alto-descendente)\n5. ไม้ไหม้ไหม (máai mâi mǎi) - a madeira queima? (alto-descendente-ascendente)\n\nPara cada um:\n- Diga devagar primeiro, exagerando os tons\n- Use gestos com as mãos para combinar os contornos dos tons\n- Acelere gradualmente mantendo os tons corretos\n- Grave e compare com falantes nativos",
            [LanguageCode.MANDARIN]: "練習這些經典的泰語繞口令，使用正確的聲調。錄下自己的聲音，不斷重新錄製，直到聲調正確！\n\n1. ข้าวขาว（khâao khǎao）- 白飯（降調-升調）\n2. ไม้ใหม่ไม่ไหม้（máai mài mâi mâi）- 新木頭不燃燒（高調-低調-降調-降調）\n3. หมามา（mǎa maa）- 狗來了（升調-平調）\n4. ซื้อเสื้อ（sʉ́ʉ sʉ̂a）- 買衣服（高調-降調）\n5. ไม้ไหม้ไหม（máai mâi mǎi）- 木頭燃燒嗎？（高調-降調-升調）\n\n對於每一個：\n- 首先慢慢說，誇張聲調\n- 用手勢配合聲調輪廓\n- 逐漸加快速度，同時保持正確的聲調\n- 錄音並與母語者比較",
        }
    }
};
