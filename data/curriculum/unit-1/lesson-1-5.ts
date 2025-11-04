import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_5: Lesson = {
    id: "1.5",
    title: {
        [LanguageCode.ENGLISH]: "Thai Time Part 2",
        [LanguageCode.FRENCH]: "Temps (2) : Jours & Mots temporels",
        [LanguageCode.PORTUGUESE]: "Tempo (2): Dias e Palavras Temporais",
        [LanguageCode.MANDARIN]: "時間（二）",
    },
    vocabulary: [
        { thai: "วันนี้", phonetic: "wan níi", translations: { [LanguageCode.ENGLISH]: "today", [LanguageCode.FRENCH]: "aujourd'hui", [LanguageCode.PORTUGUESE]: "hoje", [LanguageCode.MANDARIN]: "今天" } },
        { thai: "พรุ่งนี้", phonetic: "phrûng níi", translations: { [LanguageCode.ENGLISH]: "tomorrow", [LanguageCode.FRENCH]: "demain", [LanguageCode.PORTUGUESE]: "amanhã", [LanguageCode.MANDARIN]: "明天" } },
        { thai: "เมื่อวาน", phonetic: "mʉ̂a-waan", translations: { [LanguageCode.ENGLISH]: "yesterday", [LanguageCode.FRENCH]: "hier", [LanguageCode.PORTUGUESE]: "ontem", [LanguageCode.MANDARIN]: "昨天" } },
        { thai: "วันจันทร์", phonetic: "wan jan", translations: { [LanguageCode.ENGLISH]: "Monday", [LanguageCode.FRENCH]: "lundi", [LanguageCode.PORTUGUESE]: "segunda-feira", [LanguageCode.MANDARIN]: "星期一" } },
        { thai: "วันอังคาร", phonetic: "wan ang-khaan", translations: { [LanguageCode.ENGLISH]: "Tuesday", [LanguageCode.FRENCH]: "mardi", [LanguageCode.PORTUGUESE]: "terça-feira", [LanguageCode.MANDARIN]: "星期二" } },
        { thai: "วันพุธ", phonetic: "wan phút", translations: { [LanguageCode.ENGLISH]: "Wednesday", [LanguageCode.FRENCH]: "mercredi", [LanguageCode.PORTUGUESE]: "quarta-feira", [LanguageCode.MANDARIN]: "星期三" } },
        { thai: "วันพฤหัสบดี", phonetic: "wan phá-rʉ́-hàt", translations: { [LanguageCode.ENGLISH]: "Thursday", [LanguageCode.FRENCH]: "jeudi", [LanguageCode.PORTUGUESE]: "quinta-feira", [LanguageCode.MANDARIN]: "星期四" } },
        { thai: "วันศุกร์", phonetic: "wan sùk", translations: { [LanguageCode.ENGLISH]: "Friday", [LanguageCode.FRENCH]: "vendredi", [LanguageCode.PORTUGUESE]: "sexta-feira", [LanguageCode.MANDARIN]: "星期五" } },
        { thai: "วันเสาร์", phonetic: "wan săo", translations: { [LanguageCode.ENGLISH]: "Saturday", [LanguageCode.FRENCH]: "samedi", [LanguageCode.PORTUGUESE]: "sábado", [LanguageCode.MANDARIN]: "星期六" } },
        { thai: "วันอาทิตย์", phonetic: "wan aa-thít", translations: { [LanguageCode.ENGLISH]: "Sunday", [LanguageCode.FRENCH]: "dimanche", [LanguageCode.PORTUGUESE]: "domingo", [LanguageCode.MANDARIN]: "星期日" } },
        { thai: "เมื่อไร", phonetic: "mʉ̂a-rai", translations: { [LanguageCode.ENGLISH]: "when?", [LanguageCode.FRENCH]: "quand ?", [LanguageCode.PORTUGUESE]: "quando?", [LanguageCode.MANDARIN]: "什麼時候？" } },
        { thai: "แล้ว", phonetic: "láew", translations: { [LanguageCode.ENGLISH]: "already", [LanguageCode.FRENCH]: "déjà", [LanguageCode.PORTUGUESE]: "já", [LanguageCode.MANDARIN]: "已經" } },
        { thai: "ยัง", phonetic: "yang", translations: { [LanguageCode.ENGLISH]: "not yet", [LanguageCode.FRENCH]: "pas encore", [LanguageCode.PORTUGUESE]: "ainda não", [LanguageCode.MANDARIN]: "還沒" } },
        { thai: "สัปดาห์นี้", phonetic: "sàp-daa níi", translations: { [LanguageCode.ENGLISH]: "this week", [LanguageCode.FRENCH]: "cette semaine", [LanguageCode.PORTUGUESE]: "esta semana", [LanguageCode.MANDARIN]: "這週" } },
        { thai: "สัปดาห์หน้า", phonetic: "sàp-daa nâa", translations: { [LanguageCode.ENGLISH]: "next week", [LanguageCode.FRENCH]: "la semaine prochaine", [LanguageCode.PORTUGUESE]: "semana que vem", [LanguageCode.MANDARIN]: "下週" } },
        { thai: "เมื่อกี้", phonetic: "mʉ̂a-gîi", translations: { [LanguageCode.ENGLISH]: "a moment ago", [LanguageCode.FRENCH]: "tout à l'heure (passé)", [LanguageCode.PORTUGUESE]: "agora há pouco", [LanguageCode.MANDARIN]: "剛才" } },
        { thai: "ตอนเช้า", phonetic: "dtaawn-cháo", translations: { [LanguageCode.ENGLISH]: "in the morning", [LanguageCode.FRENCH]: "le matin", [LanguageCode.PORTUGUESE]: "de manhã", [LanguageCode.MANDARIN]: "早上" } },
        { thai: "ตอนเย็น", phonetic: "dtaawn-yen", translations: { [LanguageCode.ENGLISH]: "in the evening", [LanguageCode.FRENCH]: "le soir", [LanguageCode.PORTUGUESE]: "à noite (início)", [LanguageCode.MANDARIN]: "傍晚" } },
        { thai: "วันเสาร์อาทิตย์", phonetic: "wan săo aa-thít", translations: { [LanguageCode.ENGLISH]: "weekend", [LanguageCode.FRENCH]: "week-end", [LanguageCode.PORTUGUESE]: "fim de semana", [LanguageCode.MANDARIN]: "週末" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Understanding แล้ว (láew) and ยัง (yang): The Foundation of Thai Conversation",
                [LanguageCode.FRENCH]: "Comprendre แล้ว (láew) et ยัง (yang) : La base de la conversation thaïe",
                [LanguageCode.PORTUGUESE]: "Entendendo แล้ว (láew) e ยัง (yang): A Base da Conversa Tailandesa",
                [LanguageCode.MANDARIN]: "理解 แล้ว (láew) 和 ยัง (yang)：泰語對話的基礎",
            },
            content: {
                [LanguageCode.ENGLISH]: "These two little words are ESSENTIAL for daily Thai conversation. You'll use them constantly!\n\n**แล้ว (láew) = \"already\" / \"done\" / \"finished\"**\n\nThis word indicates that something has been completed or has happened.\n\nExamples:\n• กินแล้ว (gin láew) = \"(I) ate already\" / \"(I've) already eaten\"\n• ทำแล้ว (tham láew) = \"(I) did it already\" / \"(It's) done\"\n• ไปแล้ว (bpai láew) = \"(I/they) went already\" / \"(I/they've) already gone\"\n\n**ยัง (yang) = \"not yet\"**\n\nThis word indicates that something hasn't happened yet. It's the opposite of แล้ว.\n\nExamples:\n• ยังไม่กิน (yang mâi gin) = \"(I) haven't eaten yet\" / \"not yet\"\n• Or simply: ยัง (yang) = \"not yet\" (as a short answer)\n\n**THE MOST IMPORTANT PHRASE: กินข้าวแล้วหรือยัง (gin khâao láew rʉ̌ʉ yang)**\n\nThis is probably THE MOST COMMON greeting/question you'll hear in Thailand!\n\nLiterally: \"Eat rice already or not yet?\"\nMeaning: \"Have you eaten?\" / \"Did you eat yet?\"\n\nThis phrase is SO culturally important because:\n1. Food is central to Thai culture\n2. Asking if someone has eaten shows care and concern\n3. It's used as a casual greeting, like asking \"How are you?\" in English\n4. You'll hear it multiple times per day!\n\n**How to answer:**\n• กินแล้ว (gin láew) = \"(I've) eaten already\" / \"Yes, I ate\"\n• ยัง (yang) = \"Not yet\" / \"I haven't eaten yet\"\n• ยังไม่ได้กิน (yang mâi dâai gin) = \"Haven't eaten yet\" (more complete)\n\n**The Pattern: [Action] + แล้วหรือยัง (láew rʉ̌ʉ yang)**\n\nYou can use this pattern with ANY verb to ask if something has been done:\n\n• ทำงานแล้วหรือยัง (tham-ngaan láew rʉ̌ʉ yang) = \"Have you worked yet?\" / \"Did you do your work?\"\n• ไปแล้วหรือยัง (bpai láew rʉ̌ʉ yang) = \"Have you gone yet?\" / \"Did you go?\"\n• นอนแล้วหรือยัง (nawn láew rʉ̌ʉ yang) = \"Have you slept yet?\" / \"Did you sleep?\"\n\n**Understanding หรือ (rʉ̌ʉ) = \"or\"**\n\nThe word หรือ (rʉ̌ʉ) means \"or,\" so the question is literally asking \"already OR not yet?\"\n\n**Why this matters:**\n\nUnderstanding แล้ว and ยัง is crucial because they help you:\n1. Talk about whether actions are completed or not\n2. Show care and concern (especially with \"กินข้าวแล้วหรือยัง\")\n3. Have natural conversations about daily activities\n4. Understand what people are asking you!\n\n**Quick Response Guide:**\n\nWhen someone asks: \"___แล้วหรือยัง?\"\n• If YES (done): say \"แล้ว\" (láew)\n• If NO (not yet): say \"ยัง\" (yang)\n\nIt's that simple!",
                [LanguageCode.FRENCH]: "Ces deux petits mots sont ESSENTIELS pour la conversation quotidienne en thaï. Vous les utiliserez constamment !\n\n**แล้ว (láew) = \"déjà\" / \"fait\" / \"fini\"**\n\nCe mot indique que quelque chose a été complété ou s'est produit.\n\nExemples :\n• กินแล้ว (gin láew) = \"(J'ai) déjà mangé\"\n• ทำแล้ว (tham láew) = \"(Je l'ai) déjà fait\" / \"C'est fait\"\n• ไปแล้ว (bpai láew) = \"(Je suis/Ils sont) déjà parti(s)\"\n\n**ยัง (yang) = \"pas encore\"**\n\nCe mot indique que quelque chose ne s'est pas encore produit. C'est l'opposé de แล้ว.\n\nExemples :\n• ยังไม่กิน (yang mâi gin) = \"(Je n'ai) pas encore mangé\"\n• Ou simplement : ยัง (yang) = \"pas encore\" (comme réponse courte)\n\n**LA PHRASE LA PLUS IMPORTANTE : กินข้าวแล้วหรือยัง (gin khâao láew rʉ̌ʉ yang)**\n\nC'est probablement la salutation/question LA PLUS COURANTE que vous entendrez en Thaïlande !\n\nLittéralement : \"Manger riz déjà ou pas encore ?\"\nSignification : \"Avez-vous mangé ?\" / \"Vous avez mangé ?\"\n\nCette phrase est culturellement SI importante parce que :\n1. La nourriture est centrale dans la culture thaïlandaise\n2. Demander si quelqu'un a mangé montre de l'attention et de la préoccupation\n3. C'est utilisé comme salutation informelle, comme demander \"Comment ça va ?\" en français\n4. Vous l'entendrez plusieurs fois par jour !\n\n**Comment répondre :**\n• กินแล้ว (gin láew) = \"(J'ai) déjà mangé\" / \"Oui, j'ai mangé\"\n• ยัง (yang) = \"Pas encore\" / \"Je n'ai pas encore mangé\"\n• ยังไม่ได้กิน (yang mâi dâai gin) = \"Pas encore mangé\" (plus complet)\n\n**Le modèle : [Action] + แล้วหรือยัง (láew rʉ̌ʉ yang)**\n\nVous pouvez utiliser ce modèle avec N'IMPORTE QUEL verbe pour demander si quelque chose a été fait.",
                [LanguageCode.PORTUGUESE]: "Essas duas pequenas palavras são ESSENCIAIS para a conversa diária em tailandês. Você as usará constantemente!\n\n**แล้ว (láew) = \"já\" / \"feito\" / \"terminado\"**\n\nEsta palavra indica que algo foi completado ou aconteceu.\n\nExemplos:\n• กินแล้ว (gin láew) = \"(Eu) já comi\"\n• ทำแล้ว (tham láew) = \"(Eu) já fiz\" / \"Está feito\"\n• ไปแล้ว (bpai láew) = \"(Eu/Eles) já fui/foram\"\n\n**ยัง (yang) = \"ainda não\"**\n\nEsta palavra indica que algo ainda não aconteceu. É o oposto de แล้ว.\n\nExemplos:\n• ยังไม่กิน (yang mâi gin) = \"(Eu) ainda não comi\"\n• Ou simplesmente: ยัง (yang) = \"ainda não\" (como resposta curta)\n\n**A FRASE MAIS IMPORTANTE: กินข้าวแล้วหรือยัง (gin khâao láew rʉ̌ʉ yang)**\n\nEsta é provavelmente a saudação/pergunta MAIS COMUM que você ouvirá na Tailândia!\n\nLiteralmente: \"Comer arroz já ou ainda não?\"\nSignificado: \"Você comeu?\" / \"Já comeu?\"\n\nEsta frase é culturalmente TÃO importante porque:\n1. A comida é central na cultura tailandesa\n2. Perguntar se alguém comeu mostra cuidado e preocupação\n3. É usada como saudação casual, como perguntar \"Como vai?\" em português\n4. Você a ouvirá várias vezes por dia!\n\n**Como responder:**\n• กินแล้ว (gin láew) = \"(Eu) já comi\" / \"Sim, eu comi\"\n• ยัง (yang) = \"Ainda não\" / \"Eu ainda não comi\"\n• ยังไม่ได้กิน (yang mâi dâai gin) = \"Ainda não comi\" (mais completo)\n\n**O padrão: [Ação] + แล้วหรือยัง (láew rʉ̌ʉ yang)**\n\nVocê pode usar este padrão com QUALQUER verbo para perguntar se algo foi feito.",
                [LanguageCode.MANDARIN]: "這兩個小詞對泰語日常對話至關重要。你會不斷使用它們！\n\n**แล้ว (láew) = 「已經」/「完成了」/「做完了」**\n\n這個詞表示某事已經完成或發生了。\n\n例子：\n• กินแล้ว (gin láew) = 「（我）已經吃了」\n• ทำแล้ว (tham láew) = 「（我）已經做了」/「做完了」\n• ไปแล้ว (bpai láew) = 「（我/他們）已經去了」\n\n**ยัง (yang) = 「還沒」**\n\n這個詞表示某事還沒有發生。它是 แล้ว 的反義詞。\n\n例子：\n• ยังไม่กิน (yang mâi gin) = 「（我）還沒吃」\n• 或者簡單地：ยัง (yang) = 「還沒」（作為簡短回答）\n\n**最重要的短語：กินข้าวแล้วหรือยัง (gin khâao láew rʉ̌ʉ yang)**\n\n這可能是你在泰國會聽到的最常見的問候/問題！\n\n字面意思：「吃飯了還是還沒？」\n意思：「你吃了嗎？」/「吃飯了嗎？」\n\n這個短語在文化上如此重要，因為：\n1. 食物在泰國文化中是核心\n2. 問別人是否吃飯表示關心\n3. 它被用作隨意的問候，就像英語中問 \"How are you?\"\n4. 你每天會聽到好幾次！\n\n**如何回答：**\n• กินแล้ว (gin láew) = 「（我）已經吃了」/「是的，我吃了」\n• ยัง (yang) = 「還沒」/「我還沒吃」\n• ยังไม่ได้กิน (yang mâi dâai gin) = 「還沒吃」（更完整）\n\n**模式：[動作] + แล้วหรือยัง (láew rʉ̌ʉ yang)**\n\n你可以將這個模式與任何動詞一起使用，詢問某事是否已完成。",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the day to its translation.",
                [LanguageCode.FRENCH]: "Associez le jour à sa traduction.",
                [LanguageCode.PORTUGUESE]: "Relacione o dia à sua tradução.",
                [LanguageCode.MANDARIN]: "將星期與翻譯配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "วันจันทร์", [LanguageCode.FRENCH]: "วันจันทร์", [LanguageCode.PORTUGUESE]: "วันจันทร์", [LanguageCode.MANDARIN]: "วันจันทร์" }, answer: { [LanguageCode.ENGLISH]: "Monday", [LanguageCode.FRENCH]: "Lundi", [LanguageCode.PORTUGUESE]: "Segunda-feira", [LanguageCode.MANDARIN]: "星期一" } },
                { prompt: { [LanguageCode.ENGLISH]: "วันศุกร์", [LanguageCode.FRENCH]: "วันศุกร์", [LanguageCode.PORTUGUESE]: "วันศุกร์", [LanguageCode.MANDARIN]: "วันศุกร์" }, answer: { [LanguageCode.ENGLISH]: "Friday", [LanguageCode.FRENCH]: "Vendredi", [LanguageCode.PORTUGUESE]: "Sexta-feira", [LanguageCode.MANDARIN]: "星期五" } },
                { prompt: { [LanguageCode.ENGLISH]: "วันอาทิตย์", [LanguageCode.FRENCH]: "วันอาทิตย์", [LanguageCode.PORTUGUESE]: "วันอาทิตย์", [LanguageCode.MANDARIN]: "วันอาทิตย์" }, answer: { [LanguageCode.ENGLISH]: "Sunday", [LanguageCode.FRENCH]: "Dimanche", [LanguageCode.PORTUGUESE]: "Domingo", [LanguageCode.MANDARIN]: "星期日" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the temporal word.",
                [LanguageCode.FRENCH]: "Complétez avec le mot temporel.",
                [LanguageCode.PORTUGUESE]: "Preencha com a palavra temporal.",
                [LanguageCode.MANDARIN]: "填入正確的時間詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ฉันจะไปกรุงเทพฯ ___", [LanguageCode.FRENCH]: "Je vais à Bangkok ___", [LanguageCode.PORTUGUESE]: "Eu vou a Bangkok ___", [LanguageCode.MANDARIN]: "我___去曼谷" }, correctAnswer: "พรุ่งนี้", end: { [LanguageCode.ENGLISH]: " (tomorrow)", [LanguageCode.FRENCH]: " (demain)", [LanguageCode.PORTUGUESE]: " (amanhã)", [LanguageCode.MANDARIN]: "（明天）" } },
                { start: { [LanguageCode.ENGLISH]: "คุณกินข้าว ___?", [LanguageCode.FRENCH]: "Tu as déjà mangé ___ ?", [LanguageCode.PORTUGUESE]: "Você já comeu ___?", [LanguageCode.MANDARIN]: "你___吃飯了嗎？" }, correctAnswer: "แล้ว/ยัง", end: { [LanguageCode.ENGLISH]: " (already/yet)", [LanguageCode.FRENCH]: " (déjà/pas encore)", [LanguageCode.PORTUGUESE]: " (já/ainda)", [LanguageCode.MANDARIN]: "（已經/還沒）" } },
                { start: { [LanguageCode.ENGLISH]: "เราเจอกันวัน ___", [LanguageCode.FRENCH]: "On se voit ___", [LanguageCode.PORTUGUESE]: "A gente se vê na ___", [LanguageCode.MANDARIN]: "我們___見" }, correctAnswer: "ศุกร์/เสาร์/อาทิตย์", end: { [LanguageCode.ENGLISH]: " (Fri/Sat/Sun)", [LanguageCode.FRENCH]: " (ven/sam/dim)", [LanguageCode.PORTUGUESE]: " (sex/sáb/dom)", [LanguageCode.MANDARIN]: "（五/六/日）" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Order the schedule sentence.",
                [LanguageCode.FRENCH]: "Mettez en ordre la phrase d'emploi du temps.",
                [LanguageCode.PORTUGUESE]: "Ordene a frase de agenda.",
                [LanguageCode.MANDARIN]: "將行程句子排序。",
            },
            sentences: [
                { correctOrder: ["วันจันทร์", "ตอนเช้า", "ฉัน", "เรียน"], hint: { [LanguageCode.ENGLISH]: "On Monday morning I study.", [LanguageCode.FRENCH]: "Lundi matin, j'étudie.", [LanguageCode.PORTUGUESE]: "Na segunda de manhã, eu estudo.", [LanguageCode.MANDARIN]: "週一早上我學習。" } },
                { correctOrder: ["พรุ่งนี้", "ตอนเย็น", "เรา", "กิน", "ข้าว"], hint: { [LanguageCode.ENGLISH]: "Tomorrow evening we eat dinner.", [LanguageCode.FRENCH]: "Demain soir, nous dînons.", [LanguageCode.PORTUGUESE]: "Amanhã à noite, nós jantamos.", [LanguageCode.MANDARIN]: "明天傍晚我們吃晚飯。" } },
                { correctOrder: ["เมื่อวาน", "ตอนเช้า", "ผม", "ทำงาน"], hint: { [LanguageCode.ENGLISH]: "Yesterday morning I worked.", [LanguageCode.FRENCH]: "Hier matin, j'ai travaillé.", [LanguageCode.PORTUGUESE]: "Ontem de manhã, eu trabalhei.", [LanguageCode.MANDARIN]: "昨天早上我工作。" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct temporal word.",
                [LanguageCode.FRENCH]: "Choisissez le bon mot temporel.",
                [LanguageCode.PORTUGUESE]: "Escolha a palavra temporal correta.",
                [LanguageCode.MANDARIN]: "選擇正確的時間詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "___ we will meet?", [LanguageCode.FRENCH]: "___ on se voit ?", [LanguageCode.PORTUGUESE]: "___ a gente se vê?", [LanguageCode.MANDARIN]: "我們___見面？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เมื่อไร", [LanguageCode.FRENCH]: "เมื่อไร", [LanguageCode.PORTUGUESE]: "เมื่อไร", [LanguageCode.MANDARIN]: "เมื่อไร" },
                        { [LanguageCode.ENGLISH]: "แล้ว", [LanguageCode.FRENCH]: "แล้ว", [LanguageCode.PORTUGUESE]: "แล้ว", [LanguageCode.MANDARIN]: "แล้ว" },
                        { [LanguageCode.ENGLISH]: "ยัง", [LanguageCode.FRENCH]: "ยัง", [LanguageCode.PORTUGUESE]: "ยัง", [LanguageCode.MANDARIN]: "ยัง" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Practice using แล้ว and ยัง.",
                [LanguageCode.FRENCH]: "Pratiquez avec แล้ว et ยัง.",
                [LanguageCode.PORTUGUESE]: "Pratique usando แล้ว e ยัง.",
                [LanguageCode.MANDARIN]: "練習使用 แล้ว 和 ยัง。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A: คุณกินข้าว___หรือยัง? B: กิน___", [LanguageCode.FRENCH]: "A: Tu as mangé ___ ou pas encore ? B: ___", [LanguageCode.PORTUGUESE]: "A: Você comeu ___ ou ainda não? B: ___", [LanguageCode.MANDARIN]: "A: 你吃飯了___還是還沒？ B: ___" }, correctAnswer: "แล้ว/แล้ว", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: คุณทำงาน___หรือยัง? B: ___", [LanguageCode.FRENCH]: "A: Tu as travaillé ___ ou pas encore ? B: Pas encore", [LanguageCode.PORTUGUESE]: "A: Você trabalhou ___ ou ainda não? B: Ainda não", [LanguageCode.MANDARIN]: "A: 你工作了___還是還沒？ B: 還沒" }, correctAnswer: "แล้ว/ยัง", end: { [LanguageCode.ENGLISH]: " (not yet)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Answer the question correctly.",
                [LanguageCode.FRENCH]: "Répondez correctement à la question.",
                [LanguageCode.PORTUGUESE]: "Responda a pergunta corretamente.",
                [LanguageCode.MANDARIN]: "正確回答問題。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "If someone asks 'กินข้าวแล้วหรือยัง' and you haven't eaten, you say:", [LanguageCode.FRENCH]: "Si quelqu'un demande 'กินข้าวแล้วหรือยัง' et vous n'avez pas mangé, vous dites :", [LanguageCode.PORTUGUESE]: "Se alguém perguntar 'กินข้าวแล้วหรือยัง' e você não comeu, você diz:", [LanguageCode.MANDARIN]: "如果有人問「กินข้าวแล้วหรือยัง」而你還沒吃，你說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "แล้ว", [LanguageCode.FRENCH]: "แล้ว", [LanguageCode.PORTUGUESE]: "แล้ว", [LanguageCode.MANDARIN]: "แล้ว" },
                        { [LanguageCode.ENGLISH]: "ยัง", [LanguageCode.FRENCH]: "ยัง", [LanguageCode.PORTUGUESE]: "ยัง", [LanguageCode.MANDARIN]: "ยัง" },
                        { [LanguageCode.ENGLISH]: "เมื่อไร", [LanguageCode.FRENCH]: "เมื่อไร", [LanguageCode.PORTUGUESE]: "เมื่อไร", [LanguageCode.MANDARIN]: "เมื่อไร" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What does 'กินข้าวแล้วหรือยัง' really mean in Thai culture?", [LanguageCode.FRENCH]: "Que signifie vraiment 'กินข้าวแล้วหรือยัง' dans la culture thaïlandaise ?", [LanguageCode.PORTUGUESE]: "O que 'กินข้าวแล้วหรือยัง' realmente significa na cultura tailandesa?", [LanguageCode.MANDARIN]: "在泰國文化中「กินข้าวแล้วหรือยัง」真正的意思是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "A greeting showing care", [LanguageCode.FRENCH]: "Une salutation montrant de l'attention", [LanguageCode.PORTUGUESE]: "Uma saudação mostrando cuidado", [LanguageCode.MANDARIN]: "表達關心的問候" },
                        { [LanguageCode.ENGLISH]: "A literal question about food", [LanguageCode.FRENCH]: "Une question littérale sur la nourriture", [LanguageCode.PORTUGUESE]: "Uma pergunta literal sobre comida", [LanguageCode.MANDARIN]: "關於食物的字面問題" },
                        { [LanguageCode.ENGLISH]: "An invitation to dinner", [LanguageCode.FRENCH]: "Une invitation à dîner", [LanguageCode.PORTUGUESE]: "Um convite para jantar", [LanguageCode.MANDARIN]: "晚餐邀請" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete time-related sentences.",
                [LanguageCode.FRENCH]: "Construisez des phrases complètes liées au temps.",
                [LanguageCode.PORTUGUESE]: "Construa frases completas relacionadas ao tempo.",
                [LanguageCode.MANDARIN]: "建立完整的時間相關句子。",
            },
            sentences: [
                { correctOrder: ["คุณ", "กิน", "ข้าว", "แล้ว", "หรือยัง"], hint: { [LanguageCode.ENGLISH]: "Have you eaten yet?", [LanguageCode.FRENCH]: "Avez-vous mangé ?", [LanguageCode.PORTUGUESE]: "Você comeu?", [LanguageCode.MANDARIN]: "你吃飯了嗎？" } },
                { correctOrder: ["วันเสาร์อาทิตย์", "เรา", "พบ", "กัน"], hint: { [LanguageCode.ENGLISH]: "We'll meet on the weekend.", [LanguageCode.FRENCH]: "On se voit le week-end.", [LanguageCode.PORTUGUESE]: "A gente se vê no fim de semana.", [LanguageCode.MANDARIN]: "我們週末見面。" } },
                { correctOrder: ["เมื่อวาน", "ผม", "ไป", "ทำงาน"], hint: { [LanguageCode.ENGLISH]: "Yesterday I went to work.", [LanguageCode.FRENCH]: "Hier je suis allé travailler.", [LanguageCode.PORTUGUESE]: "Ontem eu fui trabalhar.", [LanguageCode.MANDARIN]: "昨天我去工作。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the question to the appropriate response.",
                [LanguageCode.FRENCH]: "Associez la question à la réponse appropriée.",
                [LanguageCode.PORTUGUESE]: "Relacione a pergunta à resposta apropriada.",
                [LanguageCode.MANDARIN]: "將問題與適當的回答配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "กินข้าวแล้วหรือยัง?", [LanguageCode.FRENCH]: "กินข้าวแล้วหรือยัง?", [LanguageCode.PORTUGUESE]: "กินข้าวแล้วหรือยัง?", [LanguageCode.MANDARIN]: "กินข้าวแล้วหรือยัง?" }, answer: { [LanguageCode.ENGLISH]: "กินแล้ว / ยัง", [LanguageCode.FRENCH]: "กินแล้ว / ยัง", [LanguageCode.PORTUGUESE]: "กินแล้ว / ยัง", [LanguageCode.MANDARIN]: "กินแล้ว / ยัง" } },
                { prompt: { [LanguageCode.ENGLISH]: "เมื่อไรจะไป?", [LanguageCode.FRENCH]: "เมื่อไรจะไป?", [LanguageCode.PORTUGUESE]: "เมื่อไรจะไป?", [LanguageCode.MANDARIN]: "เมื่อไรจะไป?" }, answer: { [LanguageCode.ENGLISH]: "พรุ่งนี้ / วันศุกร์", [LanguageCode.FRENCH]: "พรุ่งนี้ / วันศุกร์", [LanguageCode.PORTUGUESE]: "พรุ่งนี้ / วันศุกร์", [LanguageCode.MANDARIN]: "พรุ่งนี้ / วันศุกร์" } },
                { prompt: { [LanguageCode.ENGLISH]: "วันนี้วันอะไร?", [LanguageCode.FRENCH]: "วันนี้วันอะไร?", [LanguageCode.PORTUGUESE]: "วันนี้วันอะไร?", [LanguageCode.MANDARIN]: "วันนี้วันอะไร?" }, answer: { [LanguageCode.ENGLISH]: "วันจันทร์ / วันอาทิตย์", [LanguageCode.FRENCH]: "วันจันทร์ / วันอาทิตย์", [LanguageCode.PORTUGUESE]: "วันจันทร์ / วันอาทิตย์", [LanguageCode.MANDARIN]: "วันจันทร์ / วันอาทิตย์" } },
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Are you free this week?", [LanguageCode.FRENCH]: "Es-tu libre cette semaine ?", [LanguageCode.PORTUGUESE]: "Você está livre esta semana?", [LanguageCode.MANDARIN]: "這週你有空嗎？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "Let's meet on Friday evening.", [LanguageCode.FRENCH]: "On se voit vendredi soir.", [LanguageCode.PORTUGUESE]: "Vamos nos ver sexta à noite.", [LanguageCode.MANDARIN]: "週五晚上見吧。" } },
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
                    question: { [LanguageCode.ENGLISH]: "Which day will they meet?", [LanguageCode.FRENCH]: "Quel jour vont-ils se voir ?", [LanguageCode.PORTUGUESE]: "Que dia eles vão se encontrar?", [LanguageCode.MANDARIN]: "他們哪一天見面？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Friday", [LanguageCode.FRENCH]: "Vendredi", [LanguageCode.PORTUGUESE]: "Sexta-feira", [LanguageCode.MANDARIN]: "星期五" },
                        { [LanguageCode.ENGLISH]: "Saturday", [LanguageCode.FRENCH]: "Samedi", [LanguageCode.PORTUGUESE]: "Sábado", [LanguageCode.MANDARIN]: "星期六" },
                        { [LanguageCode.ENGLISH]: "Thursday", [LanguageCode.FRENCH]: "Jeudi", [LanguageCode.PORTUGUESE]: "Quinta-feira", [LanguageCode.MANDARIN]: "星期四" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "อธิบายสัปดาห์ของคุณโดยใช้คำเวลา 5 คำ",
            [LanguageCode.FRENCH]: "อธิบายสัปดาห์ของคุณโดยใช้คำเวลา 5 คำ",
            [LanguageCode.PORTUGUESE]: "อธิบายสัปดาห์ของคุณโดยใช้คำเวลา 5 คำ",
            [LanguageCode.MANDARIN]: "อธิบายสัปดาห์ของคุณโดยใช้คำเวลา 5 คำ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe your week using five time words.",
            [LanguageCode.FRENCH]: "Décris ta semaine en utilisant cinq mots temporels.",
            [LanguageCode.PORTUGUESE]: "Descreva sua semana usando cinco palavras temporais.",
            [LanguageCode.MANDARIN]: "用五個時間詞描述你的這一週。",
        }
    }
};


