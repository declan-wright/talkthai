import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_4: Lesson = {
    id: "1.4",
    title: {
        [LanguageCode.ENGLISH]: "Core Verbs Set 1",
        [LanguageCode.FRENCH]: "Verbes de base (1)",
        [LanguageCode.PORTUGUESE]: "Verbos essenciais 1",
        [LanguageCode.MANDARIN]: "基礎動詞（一）",
    },
    vocabulary: [
        { thai: "ไป", phonetic: "bpai", translations: { [LanguageCode.ENGLISH]: "go", [LanguageCode.FRENCH]: "aller", [LanguageCode.PORTUGUESE]: "ir", [LanguageCode.MANDARIN]: "去" } },
        { thai: "ป่ะ", phonetic: "bpà", translations: { [LanguageCode.ENGLISH]: "...or not?/let's? (particle)", [LanguageCode.FRENCH]: "... ou pas ? (particule)", [LanguageCode.PORTUGUESE]: "... ou não? (partícula)", [LanguageCode.MANDARIN]: "...嗎？（語氣詞）" } },
        { thai: "มา", phonetic: "maa", translations: { [LanguageCode.ENGLISH]: "come", [LanguageCode.FRENCH]: "venir", [LanguageCode.PORTUGUESE]: "vir", [LanguageCode.MANDARIN]: "來" } },
        { thai: "อยู่", phonetic: "yùu", translations: { [LanguageCode.ENGLISH]: "be/stay/live", [LanguageCode.FRENCH]: "être/rester/habiter", [LanguageCode.PORTUGUESE]: "ser/estar/ficar", [LanguageCode.MANDARIN]: "在/住" } },
        { thai: "กิน", phonetic: "gin", translations: { [LanguageCode.ENGLISH]: "eat", [LanguageCode.FRENCH]: "manger", [LanguageCode.PORTUGUESE]: "comer", [LanguageCode.MANDARIN]: "吃" } },
        { thai: "อิ่ม", phonetic: "ìm", translations: { [LanguageCode.ENGLISH]: "full (not hungry)", [LanguageCode.FRENCH]: "rassasié(e)", [LanguageCode.PORTUGUESE]: "satisfeito(a)", [LanguageCode.MANDARIN]: "飽" } },
        { thai: "นอน", phonetic: "nawn", translations: { [LanguageCode.ENGLISH]: "sleep", [LanguageCode.FRENCH]: "dormir", [LanguageCode.PORTUGUESE]: "dormir", [LanguageCode.MANDARIN]: "睡覺" } },
        { thai: "ตื่น", phonetic: "dtʉ̀ʉn", translations: { [LanguageCode.ENGLISH]: "wake up", [LanguageCode.FRENCH]: "se réveiller", [LanguageCode.PORTUGUESE]: "acordar", [LanguageCode.MANDARIN]: "醒來" } },
        { thai: "วิ่ง", phonetic: "wîng", translations: { [LanguageCode.ENGLISH]: "run", [LanguageCode.FRENCH]: "courir", [LanguageCode.PORTUGUESE]: "correr", [LanguageCode.MANDARIN]: "跑步" } },
        { thai: "เล่น", phonetic: "lên", translations: { [LanguageCode.ENGLISH]: "play", [LanguageCode.FRENCH]: "jouer", [LanguageCode.PORTUGUESE]: "brincar/jogar", [LanguageCode.MANDARIN]: "玩" } },
        { thai: "เป็น", phonetic: "bpen", translations: { [LanguageCode.ENGLISH]: "be (identity)", [LanguageCode.FRENCH]: "être (identité)", [LanguageCode.PORTUGUESE]: "ser (identidade)", [LanguageCode.MANDARIN]: "是（身份）" } },
        { thai: "ทำ", phonetic: "tham", translations: { [LanguageCode.ENGLISH]: "do/make", [LanguageCode.FRENCH]: "faire", [LanguageCode.PORTUGUESE]: "fazer", [LanguageCode.MANDARIN]: "做" } },
        { thai: "มี", phonetic: "mii", translations: { [LanguageCode.ENGLISH]: "have", [LanguageCode.FRENCH]: "avoir", [LanguageCode.PORTUGUESE]: "ter", [LanguageCode.MANDARIN]: "有" } },
        { thai: "เอา", phonetic: "ao", translations: { [LanguageCode.ENGLISH]: "take/want (order)", [LanguageCode.FRENCH]: "prendre/vouloir (commande)", [LanguageCode.PORTUGUESE]: "querer/levar (pedido)", [LanguageCode.MANDARIN]: "要/拿" } },
        { thai: "ชอบ", phonetic: "châwp", translations: { [LanguageCode.ENGLISH]: "like", [LanguageCode.FRENCH]: "aimer", [LanguageCode.PORTUGUESE]: "gostar", [LanguageCode.MANDARIN]: "喜歡" } },
        { thai: "ดู", phonetic: "duu", translations: { [LanguageCode.ENGLISH]: "watch/look", [LanguageCode.FRENCH]: "regarder", [LanguageCode.PORTUGUESE]: "ver/assistir", [LanguageCode.MANDARIN]: "看" } },
        { thai: "เรียน", phonetic: "rian", translations: { [LanguageCode.ENGLISH]: "study", [LanguageCode.FRENCH]: "étudier", [LanguageCode.PORTUGUESE]: "estudar", [LanguageCode.MANDARIN]: "學習" } },
        { thai: "ทำงาน", phonetic: "tham-ngaan", translations: { [LanguageCode.ENGLISH]: "work (a job)", [LanguageCode.FRENCH]: "travailler", [LanguageCode.PORTUGUESE]: "trabalhar", [LanguageCode.MANDARIN]: "工作" } },
        { thai: "ซื้อ", phonetic: "sʉ́ʉ", translations: { [LanguageCode.ENGLISH]: "buy", [LanguageCode.FRENCH]: "acheter", [LanguageCode.PORTUGUESE]: "comprar", [LanguageCode.MANDARIN]: "買" } },
        { thai: "พูด", phonetic: "phûut", translations: { [LanguageCode.ENGLISH]: "speak", [LanguageCode.FRENCH]: "parler", [LanguageCode.PORTUGUESE]: "falar", [LanguageCode.MANDARIN]: "說話" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "The Essential Word: ไป (Bpai) - 'Let's Go!'",
                [LanguageCode.FRENCH]: "Le mot essentiel : ไป (Bpai) - 'On y va !'",
                [LanguageCode.PORTUGUESE]: "A Palavra Essencial: ไป (Bpai) - 'Vamos!'",
                [LanguageCode.MANDARIN]: "必備詞彙：ไป (Bpai) - 「走吧！」",
            },
            content: {
                [LanguageCode.ENGLISH]: "**ไป (bpai)** is one of THE MOST IMPORTANT and frequently heard words in daily Thai conversation. You'll hear it constantly!\n\n**Basic Meaning:**\nไป (bpai) = \"go\" or \"to go\"\n\n**But here's what makes it special:**\n\nWhen someone says just \"ไป!\" (Bpai!) by itself, it means **\"Let's go!\"** This is probably the single most common thing you'll hear Thais say when it's time to leave, start something, or move on to the next activity.\n\nExamples in real life:\n• Friends finishing lunch: \"ไป!\" (Bpai! - Let's go!)\n• Getting in a taxi: \"ไป!\" (Bpai! - Let's go! / Go!)\n• Starting to do something: \"ไป!\" (Bpai! - Let's do it!)\n• Leaving a place: \"ไป!\" (Bpai! - Let's get going!)\n\n**Adding the casual question particle ป่ะ (bpà):**\n\nไปป่ะ? (bpai bpà?) = \"Wanna go?\" or \"Let's go?\"\n\nThis is VERY casual and friendly, used with friends and people you're comfortable with.\n\nCompare:\n• ไปไหม (bpai mái) = \"Will you go?\" / \"Want to go?\" (neutral/polite)\n• ไปป่ะ (bpai bpà) = \"Wanna go?\" (casual, friendly)\n• ไปครับ/ค่ะ (bpai khráp/khâ) = \"Let's go\" (polite)\n\n**Why you hear it SO much:**\nThai culture is very social and active. People are always going somewhere, doing something, meeting up. \"ไป\" (Bpai) is the natural word to use when transitioning from one activity to another, so you'll hear it dozens of times per day!\n\n**Pro tip:** When someone says \"ไป!\" (Bpai!), it's time to move! This is your cue that the group is leaving or starting something.",
                [LanguageCode.FRENCH]: "**ไป (bpai)** est l'un des mots LES PLUS IMPORTANTS et les plus fréquemment entendus dans les conversations quotidiennes en thaï. Vous l'entendrez constamment !\n\n**Signification de base :**\nไป (bpai) = \"aller\"\n\n**Mais voici ce qui le rend spécial :**\n\nQuand quelqu'un dit juste \"ไป!\" (Bpai!) tout seul, cela signifie **\"On y va !\"** C'est probablement la chose la plus courante que vous entendrez les Thaïlandais dire quand il est temps de partir, de commencer quelque chose ou de passer à l'activité suivante.\n\nExemples dans la vie réelle :\n• Amis qui finissent le déjeuner : \"ไป!\" (Bpai! - On y va !)\n• En montant dans un taxi : \"ไป!\" (Bpai! - Allons-y ! / Partez !)\n• Pour commencer à faire quelque chose : \"ไป!\" (Bpai! - Faisons-le !)\n• En quittant un endroit : \"ไป!\" (Bpai! - Partons !)\n\n**Ajouter la particule interrogative familière ป่ะ (bpà) :**\n\nไปป่ะ? (bpai bpà?) = \"Tu veux y aller ?\" ou \"On y va ?\"\n\nC'est TRÈS familier et amical, utilisé avec des amis et des personnes avec qui vous êtes à l'aise.\n\nComparez :\n• ไปไหม (bpai mái) = \"Tu iras ?\" / \"Tu veux y aller ?\" (neutre/poli)\n• ไปป่ะ (bpai bpà) = \"Tu veux y aller ?\" (familier, amical)\n• ไปครับ/ค่ะ (bpai khráp/khâ) = \"Allons-y\" (poli)\n\n**Pourquoi vous l'entendez TELLEMENT :**\nLa culture thaïlandaise est très sociale et active. Les gens vont toujours quelque part, font quelque chose, se rencontrent. \"ไป\" (Bpai) est le mot naturel à utiliser lors de la transition d'une activité à une autre, donc vous l'entendrez des dizaines de fois par jour !",
                [LanguageCode.PORTUGUESE]: "**ไป (bpai)** é uma das palavras MAIS IMPORTANTES e mais frequentemente ouvidas na conversa diária em tailandês. Você vai ouvi-la constantemente!\n\n**Significado básico:**\nไป (bpai) = \"ir\"\n\n**Mas aqui está o que a torna especial:**\n\nQuando alguém diz apenas \"ไป!\" (Bpai!) sozinho, significa **\"Vamos!\"** Esta é provavelmente a coisa mais comum que você ouvirá os tailandeses dizerem quando é hora de sair, começar algo ou passar para a próxima atividade.\n\nExemplos na vida real:\n• Amigos terminando o almoço: \"ไป!\" (Bpai! - Vamos!)\n• Entrando em um táxi: \"ไป!\" (Bpai! - Vamos! / Vá!)\n• Começando a fazer algo: \"ไป!\" (Bpai! - Vamos fazer!)\n• Saindo de um lugar: \"ไป!\" (Bpai! - Vamos embora!)\n\n**Adicionando a partícula de pergunta casual ป่ะ (bpà):**\n\nไปป่ะ? (bpai bpà?) = \"Quer ir?\" ou \"Vamos?\"\n\nIsso é MUITO casual e amigável, usado com amigos e pessoas com quem você se sente confortável.\n\nCompare:\n• ไปไหม (bpai mái) = \"Você vai?\" / \"Quer ir?\" (neutro/educado)\n• ไปป่ะ (bpai bpà) = \"Quer ir?\" (casual, amigável)\n• ไปครับ/ค่ะ (bpai khráp/khâ) = \"Vamos\" (educado)\n\n**Por que você ouve TANTO:**\nA cultura tailandesa é muito social e ativa. As pessoas estão sempre indo a algum lugar, fazendo algo, se encontrando. \"ไป\" (Bpai) é a palavra natural a usar ao fazer a transição de uma atividade para outra, então você a ouvirá dezenas de vezes por dia!",
                [LanguageCode.MANDARIN]: "**ไป (bpai)** 是泰語日常對話中最重要和最常聽到的詞之一。你會不斷聽到它！\n\n**基本含義：**\nไป (bpai) = 「去」\n\n**但這是它的特別之處：**\n\n當有人單獨說 \"ไป!\" (Bpai!) 時，意思是 **「走吧！」** 這可能是你會聽到泰國人在該離開、開始做某事或進行下一個活動時最常說的話。\n\n實際生活中的例子：\n• 朋友們吃完午飯：\"ไป!\" (Bpai! - 走吧！)\n• 上計程車時：\"ไป!\" (Bpai! - 走吧！/ 開！)\n• 開始做某事：\"ไป!\" (Bpai! - 開始吧！)\n• 離開某地：\"ไป!\" (Bpai! - 我們走！)\n\n**添加口語疑問語氣詞 ป่ะ (bpà)：**\n\nไปป่ะ? (bpai bpà?) = 「要去嗎？」或「走吧？」\n\n這是非常隨意和友好的，用於朋友和你感到舒適的人。\n\n比較：\n• ไปไหม (bpai mái) = 「你會去嗎？」/「想去嗎？」（中性/禮貌）\n• ไปป่ะ (bpai bpà) = 「要去嗎？」（隨意、友好）\n• ไปครับ/ค่ะ (bpai khráp/khâ) = 「走吧」（禮貌）\n\n**為什麼你聽到它這麼多：**\n泰國文化非常社交和活躍。人們總是要去某個地方、做某事、見面。\"ไป\" (Bpai) 是從一個活動過渡到另一個活動時使用的自然詞彙，所以你每天會聽到它幾十次！",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the correct verb.",
                [LanguageCode.FRENCH]: "Complétez avec le bon verbe.",
                [LanguageCode.PORTUGUESE]: "Preencha com o verbo correto.",
                [LanguageCode.MANDARIN]: "填入正確的動詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ฉัน ___ ข้าว", [LanguageCode.FRENCH]: "ฉัน ___ ข้าว", [LanguageCode.PORTUGUESE]: "ฉัน ___ ข้าว", [LanguageCode.MANDARIN]: "我___飯" }, correctAnswer: "กิน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา ___ หนัง", [LanguageCode.FRENCH]: "เขา ___ หนัง", [LanguageCode.PORTUGUESE]: "เขา ___ หนัง", [LanguageCode.MANDARIN]: "他/她___電影" }, correctAnswer: "ดู", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พวกเรา ___ ฟุตบอล", [LanguageCode.FRENCH]: "พวกเรา ___ ฟุตบอล", [LanguageCode.PORTUGUESE]: "พวกเรา ___ ฟุตบอล", [LanguageCode.MANDARIN]: "我們___足球" }, correctAnswer: "เล่น", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Negatives with ไม่ / ไม่มี.",
                [LanguageCode.FRENCH]: "Négations avec ไม่ / ไม่มี.",
                [LanguageCode.PORTUGUESE]: "Negativas com ไม่ / ไม่มี.",
                [LanguageCode.MANDARIN]: "用 不(ไม่) / 沒有(ไม่มี) 否定。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ฉัน ___ ชอบกาแฟ", [LanguageCode.FRENCH]: "ฉัน ___ ชอบกาแฟ", [LanguageCode.PORTUGUESE]: "ฉัน ___ ชอบกาแฟ", [LanguageCode.MANDARIN]: "我___喜歡咖啡" }, correctAnswer: "ไม่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา ___ มีเวลา", [LanguageCode.FRENCH]: "เขา ___ มีเวลา", [LanguageCode.PORTUGUESE]: "เขา ___ มีเวลา", [LanguageCode.MANDARIN]: "他/她___有時間" }, correctAnswer: "ไม่มี", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the verb to the meaning.",
                [LanguageCode.FRENCH]: "Associez le verbe à son sens.",
                [LanguageCode.PORTUGUESE]: "Relacione o verbo ao significado.",
                [LanguageCode.MANDARIN]: "將動詞與意思配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "eat", [LanguageCode.FRENCH]: "manger", [LanguageCode.PORTUGUESE]: "comer", [LanguageCode.MANDARIN]: "吃" }, answer: { [LanguageCode.ENGLISH]: "กิน", [LanguageCode.FRENCH]: "กิน", [LanguageCode.PORTUGUESE]: "กิน", [LanguageCode.MANDARIN]: "กิน" } },
                { prompt: { [LanguageCode.ENGLISH]: "sleep", [LanguageCode.FRENCH]: "dormir", [LanguageCode.PORTUGUESE]: "dormir", [LanguageCode.MANDARIN]: "睡覺" }, answer: { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน" } },
                { prompt: { [LanguageCode.ENGLISH]: "work", [LanguageCode.FRENCH]: "travailler", [LanguageCode.PORTUGUESE]: "trabalhar", [LanguageCode.MANDARIN]: "工作" }, answer: { [LanguageCode.ENGLISH]: "ทำงาน", [LanguageCode.FRENCH]: "ทำงาน", [LanguageCode.PORTUGUESE]: "ทำงาน", [LanguageCode.MANDARIN]: "ทำงาน" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best verb for the sentence.",
                [LanguageCode.FRENCH]: "Choisissez le meilleur verbe pour la phrase.",
                [LanguageCode.PORTUGUESE]: "Escolha o melhor verbo para a frase.",
                [LanguageCode.MANDARIN]: "為句子選擇最合適的動詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "ฉัน ___ น้ำ", [LanguageCode.FRENCH]: "ฉัน ___ น้ำ", [LanguageCode.PORTUGUESE]: "ฉัน ___ น้ำ", [LanguageCode.MANDARIN]: "我___水" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กิน", [LanguageCode.FRENCH]: "กิน", [LanguageCode.PORTUGUESE]: "กิน", [LanguageCode.MANDARIN]: "กิน" },
                        { [LanguageCode.ENGLISH]: "ซื้อ", [LanguageCode.FRENCH]: "ซื้อ", [LanguageCode.PORTUGUESE]: "ซื้อ", [LanguageCode.MANDARIN]: "ซื้อ" },
                        { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "เขา ___ หนังตอนเย็น", [LanguageCode.FRENCH]: "เขา ___ หนังตอนเย็น", [LanguageCode.PORTUGUESE]: "เขา ___ หนังตอนเย็น", [LanguageCode.MANDARIN]: "他/她傍晚___電影" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ดู", [LanguageCode.FRENCH]: "ดู", [LanguageCode.PORTUGUESE]: "ดู", [LanguageCode.MANDARIN]: "ดู" },
                        { [LanguageCode.ENGLISH]: "วิ่ง", [LanguageCode.FRENCH]: "วิ่ง", [LanguageCode.PORTUGUESE]: "วิ่ง", [LanguageCode.MANDARIN]: "วิ่ง" },
                        { [LanguageCode.ENGLISH]: "เรียน", [LanguageCode.FRENCH]: "เรียน", [LanguageCode.PORTUGUESE]: "เรียน", [LanguageCode.MANDARIN]: "เรียน" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Order the sentence with the verb.",
                [LanguageCode.FRENCH]: "Mettez en ordre la phrase avec le verbe.",
                [LanguageCode.PORTUGUESE]: "Ordene a frase com o verbo.",
                [LanguageCode.MANDARIN]: "整理動詞句子的詞序。",
            },
            sentences: [
                { correctOrder: ["ผม", "ไป", "ทำงาน"], hint: { [LanguageCode.ENGLISH]: "I go to work.", [LanguageCode.FRENCH]: "Je vais travailler.", [LanguageCode.PORTUGUESE]: "Eu vou trabalhar.", [LanguageCode.MANDARIN]: "我去上班。" } },
                { correctOrder: ["เธอ", "ชอบ", "ดู", "หนัง"], hint: { [LanguageCode.ENGLISH]: "She likes to watch movies.", [LanguageCode.FRENCH]: "Elle aime regarder des films.", [LanguageCode.PORTUGUESE]: "Ela gosta de ver filmes.", [LanguageCode.MANDARIN]: "她喜歡看電影。" } },
                { correctOrder: ["เรา", "ตื่น", "เช้า"], hint: { [LanguageCode.ENGLISH]: "We wake up early.", [LanguageCode.FRENCH]: "Nous nous levons tôt.", [LanguageCode.PORTUGUESE]: "Acordamos cedo.", [LanguageCode.MANDARIN]: "我們早起。" } },
                { correctOrder: ["ไป", "ป่ะ"], hint: { [LanguageCode.ENGLISH]: "Wanna go?", [LanguageCode.FRENCH]: "On y va ?", [LanguageCode.PORTUGUESE]: "Vamos?", [LanguageCode.MANDARIN]: "要不要去？" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Describe a daily routine. Fill in with the correct verb.",
                [LanguageCode.FRENCH]: "Décrivez une routine quotidienne. Complétez avec le bon verbe.",
                [LanguageCode.PORTUGUESE]: "Descreva uma rotina diária. Preencha com o verbo correto.",
                [LanguageCode.MANDARIN]: "描述日常作息。填入正確的動詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เช้าผม___ตอนหกโมง", [LanguageCode.FRENCH]: "Le matin je ___ à 6h", [LanguageCode.PORTUGUESE]: "De manhã eu ___ às 6h", [LanguageCode.MANDARIN]: "早上我六點___" }, correctAnswer: "ตื่น", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "แล้วผม___ทำงาน", [LanguageCode.FRENCH]: "Puis je ___ au travail", [LanguageCode.PORTUGUESE]: "Depois eu ___ para o trabalho", [LanguageCode.MANDARIN]: "然後我___上班" }, correctAnswer: "ไป", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เที่ยงผม___ข้าว", [LanguageCode.FRENCH]: "À midi je ___ du riz", [LanguageCode.PORTUGUESE]: "Ao meio-dia eu ___ arroz", [LanguageCode.MANDARIN]: "中午我___飯" }, correctAnswer: "กิน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เย็นผม___บ้าน", [LanguageCode.FRENCH]: "Le soir je ___ à la maison", [LanguageCode.PORTUGUESE]: "À noite eu ___ em casa", [LanguageCode.MANDARIN]: "晚上我___在家" }, correctAnswer: "อยู่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผมชอบ___โทรทัศน์", [LanguageCode.FRENCH]: "J'aime ___ la télévision", [LanguageCode.PORTUGUESE]: "Eu gosto de ___ televisão", [LanguageCode.MANDARIN]: "我喜歡___電視" }, correctAnswer: "ดู", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "สิบโมงผม___", [LanguageCode.FRENCH]: "À 10h je ___", [LanguageCode.PORTUGUESE]: "Às 10h eu ___", [LanguageCode.MANDARIN]: "十點我___" }, correctAnswer: "นอน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Practice combining verbs - Fill in both blanks.",
                [LanguageCode.FRENCH]: "Pratiquez la combinaison de verbes - Complétez les deux espaces.",
                [LanguageCode.PORTUGUESE]: "Pratique combinar verbos - Preencha ambos os espaços.",
                [LanguageCode.MANDARIN]: "練習組合動詞 - 填入兩個空格。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผม___", [LanguageCode.FRENCH]: "Je ___", [LanguageCode.PORTUGUESE]: "Eu ___", [LanguageCode.MANDARIN]: "我___" }, correctAnswer: "ชอบเล่น", end: { [LanguageCode.ENGLISH]: " football", [LanguageCode.FRENCH]: " au football", [LanguageCode.PORTUGUESE]: " futebol", [LanguageCode.MANDARIN]: "足球" } },
                { start: { [LanguageCode.ENGLISH]: "เขา___", [LanguageCode.FRENCH]: "Il/Elle ___", [LanguageCode.PORTUGUESE]: "Ele/Ela ___", [LanguageCode.MANDARIN]: "他/她___" }, correctAnswer: "ไปซื้อ", end: { [LanguageCode.ENGLISH]: " food", [LanguageCode.FRENCH]: " de la nourriture", [LanguageCode.PORTUGUESE]: " comida", [LanguageCode.MANDARIN]: "食物" } },
                { start: { [LanguageCode.ENGLISH]: "พวกเรา___", [LanguageCode.FRENCH]: "Nous ___", [LanguageCode.PORTUGUESE]: "Nós ___", [LanguageCode.MANDARIN]: "我們___" }, correctAnswer: "มาเรียน", end: { [LanguageCode.ENGLISH]: " Thai", [LanguageCode.FRENCH]: " le thaï", [LanguageCode.PORTUGUESE]: " tailandês", [LanguageCode.MANDARIN]: "泰語" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___", [LanguageCode.FRENCH]: "Elle ___", [LanguageCode.PORTUGUESE]: "Ela ___", [LanguageCode.MANDARIN]: "她___" }, correctAnswer: "ชอบดู", end: { [LanguageCode.ENGLISH]: " movies", [LanguageCode.FRENCH]: " des films", [LanguageCode.PORTUGUESE]: " filmes", [LanguageCode.MANDARIN]: "電影" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Practice negative sentences with ไม่.",
                [LanguageCode.FRENCH]: "Pratiquez les phrases négatives avec ไม่.",
                [LanguageCode.PORTUGUESE]: "Pratique frases negativas com ไม่.",
                [LanguageCode.MANDARIN]: "練習用 ไม่ 的否定句。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผม___เข้าใจ", [LanguageCode.FRENCH]: "Je ___ comprends pas", [LanguageCode.PORTUGUESE]: "Eu ___ entendo", [LanguageCode.MANDARIN]: "我___明白" }, correctAnswer: "ไม่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___ไป", [LanguageCode.FRENCH]: "Elle ___ va pas", [LanguageCode.PORTUGUESE]: "Ela ___ vai", [LanguageCode.MANDARIN]: "她___去" }, correctAnswer: "ไม่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พวกเขา___เล่น", [LanguageCode.FRENCH]: "Ils ___ jouent pas", [LanguageCode.PORTUGUESE]: "Eles ___ jogam", [LanguageCode.MANDARIN]: "他們___玩" }, correctAnswer: "ไม่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ฉัน___มีเวลา", [LanguageCode.FRENCH]: "Je ___ ai pas de temps", [LanguageCode.PORTUGUESE]: "Eu ___ tenho tempo", [LanguageCode.MANDARIN]: "我___有時間" }, correctAnswer: "ไม่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา___ชอบวิ่ง", [LanguageCode.FRENCH]: "Il ___ aime pas courir", [LanguageCode.PORTUGUESE]: "Ele ___ gosta de correr", [LanguageCode.MANDARIN]: "他___喜歡跑步" }, correctAnswer: "ไม่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best verb for real-life situations.",
                [LanguageCode.FRENCH]: "Choisissez le meilleur verbe pour des situations réelles.",
                [LanguageCode.PORTUGUESE]: "Escolha o melhor verbo para situações da vida real.",
                [LanguageCode.MANDARIN]: "為實際情境選擇最佳動詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "At a restaurant: ผม___ข้าวผัด", [LanguageCode.FRENCH]: "Au restaurant : ผม___ข้าวผัด", [LanguageCode.PORTUGUESE]: "No restaurante: ผม___ข้าวผัด", [LanguageCode.MANDARIN]: "在餐廳：ผม___ข้าวผัด" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เอา (I'll take/want)", [LanguageCode.FRENCH]: "เอา (Je prends)", [LanguageCode.PORTUGUESE]: "เอา (Eu quero)", [LanguageCode.MANDARIN]: "เอา (我要)" },
                        { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน" },
                        { [LanguageCode.ENGLISH]: "วิ่ง", [LanguageCode.FRENCH]: "วิ่ง", [LanguageCode.PORTUGUESE]: "วิ่ง", [LanguageCode.MANDARIN]: "วิ่ง" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "At 6 AM: ผม___", [LanguageCode.FRENCH]: "À 6h : ผม___", [LanguageCode.PORTUGUESE]: "Às 6h: ผม___", [LanguageCode.MANDARIN]: "早上6點：ผม___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน" },
                        { [LanguageCode.ENGLISH]: "ตื่น", [LanguageCode.FRENCH]: "ตื่น", [LanguageCode.PORTUGUESE]: "ตื่น", [LanguageCode.MANDARIN]: "ตื่น" },
                        { [LanguageCode.ENGLISH]: "ซื้อ", [LanguageCode.FRENCH]: "ซื้อ", [LanguageCode.PORTUGUESE]: "ซื้อ", [LanguageCode.MANDARIN]: "ซื้อ" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "In a classroom: ผม___ภาษาไทย", [LanguageCode.FRENCH]: "En classe : ผม___ภาษาไทย", [LanguageCode.PORTUGUESE]: "Na sala de aula: ผม___ภาษาไทย", [LanguageCode.MANDARIN]: "在教室：ผม___ภาษาไทย" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กิน", [LanguageCode.FRENCH]: "กิน", [LanguageCode.PORTUGUESE]: "กิน", [LanguageCode.MANDARIN]: "กิน" },
                        { [LanguageCode.ENGLISH]: "เรียน", [LanguageCode.FRENCH]: "เรียน", [LanguageCode.PORTUGUESE]: "เรียน", [LanguageCode.MANDARIN]: "เรียน" },
                        { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Leaving the office: ผม___บ้าน", [LanguageCode.FRENCH]: "En quittant le bureau : ผม___บ้าน", [LanguageCode.PORTUGUESE]: "Saindo do escritório: ผม___บ้าน", [LanguageCode.MANDARIN]: "離開辦公室：ผม___บ้าน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อยู่", [LanguageCode.FRENCH]: "อยู่", [LanguageCode.PORTUGUESE]: "อยู่", [LanguageCode.MANDARIN]: "อยู่" },
                        { [LanguageCode.ENGLISH]: "มา", [LanguageCode.FRENCH]: "มา", [LanguageCode.PORTUGUESE]: "มา", [LanguageCode.MANDARIN]: "มา" },
                        { [LanguageCode.ENGLISH]: "ไป", [LanguageCode.FRENCH]: "ไป", [LanguageCode.PORTUGUESE]: "ไป", [LanguageCode.MANDARIN]: "ไป" },
                    ],
                    correctIndex: 2
                },
                {
                    question: { [LanguageCode.ENGLISH]: "After eating a big meal: ผม___แล้ว", [LanguageCode.FRENCH]: "Après un gros repas : ผม___แล้ว", [LanguageCode.PORTUGUESE]: "Depois de uma grande refeição: ผม___แล้ว", [LanguageCode.MANDARIN]: "大餐後：ผม___แล้ว" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อิ่ม (full)", [LanguageCode.FRENCH]: "อิ่ม (rassasié)", [LanguageCode.PORTUGUESE]: "อิ่ม (satisfeito)", [LanguageCode.MANDARIN]: "อิ่ม (飽了)" },
                        { [LanguageCode.ENGLISH]: "วิ่ง", [LanguageCode.FRENCH]: "วิ่ง", [LanguageCode.PORTUGUESE]: "วิ่ง", [LanguageCode.MANDARIN]: "วิ่ง" },
                        { [LanguageCode.ENGLISH]: "เรียน", [LanguageCode.FRENCH]: "เรียน", [LanguageCode.PORTUGUESE]: "เรียน", [LanguageCode.MANDARIN]: "เรียน" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match activities to typical times of day.",
                [LanguageCode.FRENCH]: "Associez les activités aux moments typiques de la journée.",
                [LanguageCode.PORTUGUESE]: "Relacione atividades aos horários típicos do dia.",
                [LanguageCode.MANDARIN]: "將活動與一天中的典型時間配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "ตื่น (wake up)", [LanguageCode.FRENCH]: "ตื่น (se réveiller)", [LanguageCode.PORTUGUESE]: "ตื่น (acordar)", [LanguageCode.MANDARIN]: "ตื่น (起床)" }, answer: { [LanguageCode.ENGLISH]: "เช้า (morning)", [LanguageCode.FRENCH]: "เช้า (matin)", [LanguageCode.PORTUGUESE]: "เช้า (manhã)", [LanguageCode.MANDARIN]: "เช้า (早上)" } },
                { prompt: { [LanguageCode.ENGLISH]: "กิน (eat lunch)", [LanguageCode.FRENCH]: "กิน (déjeuner)", [LanguageCode.PORTUGUESE]: "กิน (almoçar)", [LanguageCode.MANDARIN]: "กิน (吃午飯)" }, answer: { [LanguageCode.ENGLISH]: "เที่ยง (noon)", [LanguageCode.FRENCH]: "เที่ยง (midi)", [LanguageCode.PORTUGUESE]: "เที่ยง (meio-dia)", [LanguageCode.MANDARIN]: "เที่ยง (中午)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ทำงาน (work)", [LanguageCode.FRENCH]: "ทำงาน (travailler)", [LanguageCode.PORTUGUESE]: "ทำงาน (trabalhar)", [LanguageCode.MANDARIN]: "ทำงาน (工作)" }, answer: { [LanguageCode.ENGLISH]: "บ่าย (afternoon)", [LanguageCode.FRENCH]: "บ่าย (après-midi)", [LanguageCode.PORTUGUESE]: "บ่าย (tarde)", [LanguageCode.MANDARIN]: "บ่าย (下午)" } },
                { prompt: { [LanguageCode.ENGLISH]: "นอน (sleep)", [LanguageCode.FRENCH]: "นอน (dormir)", [LanguageCode.PORTUGUESE]: "นอน (dormir)", [LanguageCode.MANDARIN]: "นอน (睡覺)" }, answer: { [LanguageCode.ENGLISH]: "กลางคืน (night)", [LanguageCode.FRENCH]: "กลางคืน (nuit)", [LanguageCode.PORTUGUESE]: "กลางคืน (noite)", [LanguageCode.MANDARIN]: "กลางคืน (夜晚)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build sentences with multiple verbs.",
                [LanguageCode.FRENCH]: "Construisez des phrases avec plusieurs verbes.",
                [LanguageCode.PORTUGUESE]: "Construa frases com múltiplos verbos.",
                [LanguageCode.MANDARIN]: "組成包含多個動詞的句子。",
            },
            sentences: [
                { correctOrder: ["ผม", "ชอบ", "ไป", "เรียน"], hint: { [LanguageCode.ENGLISH]: "I like to go study.", [LanguageCode.FRENCH]: "J'aime aller étudier.", [LanguageCode.PORTUGUESE]: "Eu gosto de ir estudar.", [LanguageCode.MANDARIN]: "我喜歡去學習。" } },
                { correctOrder: ["เธอ", "มา", "ดู", "หนัง"], hint: { [LanguageCode.ENGLISH]: "She came to watch a movie.", [LanguageCode.FRENCH]: "Elle est venue regarder un film.", [LanguageCode.PORTUGUESE]: "Ela veio ver um filme.", [LanguageCode.MANDARIN]: "她來看電影。" } },
                { correctOrder: ["พวกเรา", "ไป", "ซื้อ", "ของ"], hint: { [LanguageCode.ENGLISH]: "We go shopping.", [LanguageCode.FRENCH]: "Nous allons faire les courses.", [LanguageCode.PORTUGUESE]: "Nós vamos fazer compras.", [LanguageCode.MANDARIN]: "我們去買東西。" } },
                { correctOrder: ["เขา", "อยู่", "บ้าน", "นอน"], hint: { [LanguageCode.ENGLISH]: "He stays home to sleep.", [LanguageCode.FRENCH]: "Il reste à la maison pour dormir.", [LanguageCode.PORTUGUESE]: "Ele fica em casa para dormir.", [LanguageCode.MANDARIN]: "他在家睡覺。" } },
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What do you like to do?", [LanguageCode.FRENCH]: "Qu'aimes-tu faire ?", [LanguageCode.PORTUGUESE]: "Do que você gosta?", [LanguageCode.MANDARIN]: "你喜歡做什麼？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I like to run and watch movies.", [LanguageCode.FRENCH]: "J'aime courir et regarder des films.", [LanguageCode.PORTUGUESE]: "Gosto de correr e ver filmes.", [LanguageCode.MANDARIN]: "我喜歡跑步和看電影。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What two activities does B like?", [LanguageCode.FRENCH]: "Quelles deux activités B aime-t-il/elle ?", [LanguageCode.PORTUGUESE]: "Quais duas atividades B gosta?", [LanguageCode.MANDARIN]: "B 喜歡哪兩個活動？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Run and watch movies", [LanguageCode.FRENCH]: "Courir et regarder des films", [LanguageCode.PORTUGUESE]: "Correr e ver filmes", [LanguageCode.MANDARIN]: "跑步和看電影" },
                        { [LanguageCode.ENGLISH]: "Eat and sleep", [LanguageCode.FRENCH]: "Manger et dormir", [LanguageCode.PORTUGUESE]: "Comer e dormir", [LanguageCode.MANDARIN]: "吃和睡覺" },
                        { [LanguageCode.ENGLISH]: "Study and work", [LanguageCode.FRENCH]: "Étudier et travailler", [LanguageCode.PORTUGUESE]: "Estudar e trabalhar", [LanguageCode.MANDARIN]: "學習和工作" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "พูด 5 ประโยคด้วยกริยาต่างกันจากบทนี้",
            [LanguageCode.FRENCH]: "พูด 5 ประโยคด้วยกริยาต่างกันจากบทนี้",
            [LanguageCode.PORTUGUESE]: "พูด 5 ประโยคด้วยกริยาต่างกันจากบทนี้",
            [LanguageCode.MANDARIN]: "พูด 5 ประโยคด้วยกริยาต่างกันจากบทนี้",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Say 5 sentences with different verbs from this lesson.",
            [LanguageCode.FRENCH]: "Dis 5 phrases avec des verbes différents de cette leçon.",
            [LanguageCode.PORTUGUESE]: "Diga 5 frases com verbos diferentes desta lição.",
            [LanguageCode.MANDARIN]: "用本課不同動詞說5句話。",
        }
    }
};


