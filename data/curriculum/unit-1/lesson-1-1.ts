
import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_1: Lesson = {
    id: "1.1",
    title: {
        [LanguageCode.ENGLISH]: "Essential Questions",
        [LanguageCode.FRENCH]: "Questions essentielles",
        [LanguageCode.PORTUGUESE]: "Perguntas Essenciais",
        [LanguageCode.MANDARIN]: "基本問題",
    },
    vocabulary: [
        { thai: "อะไร", phonetic: "à-rai", translations: { [LanguageCode.ENGLISH]: "What?", [LanguageCode.FRENCH]: "Quoi ?", [LanguageCode.PORTUGUESE]: "O quê?", [LanguageCode.MANDARIN]: "什麼？" } },
        { thai: "ที่ไหน", phonetic: "thîi-năi", translations: { [LanguageCode.ENGLISH]: "Where?", [LanguageCode.FRENCH]: "Où ?", [LanguageCode.PORTUGUESE]: "Onde?", [LanguageCode.MANDARIN]: "哪裡？" } },
        { thai: "เมื่อไหร่", phonetic: "mêua-rài", translations: { [LanguageCode.ENGLISH]: "When?", [LanguageCode.FRENCH]: "Quand ?", [LanguageCode.PORTUGUESE]: "Quando?", [LanguageCode.MANDARIN]: "什麼時候？" } },
        { thai: "ทำไม", phonetic: "tham-mai", translations: { [LanguageCode.ENGLISH]: "Why?", [LanguageCode.FRENCH]: "Pourquoi ?", [LanguageCode.PORTUGUESE]: "Por quê?", [LanguageCode.MANDARIN]: "為什麼？" } },
        { thai: "ใคร", phonetic: "khrai", translations: { [LanguageCode.ENGLISH]: "Who?", [LanguageCode.FRENCH]: "Qui ?", [LanguageCode.PORTUGUESE]: "Quem?", [LanguageCode.MANDARIN]: "誰？" } },
        { thai: "เท่าไหร่", phonetic: "thâo-rài", translations: { [LanguageCode.ENGLISH]: "How much?", [LanguageCode.FRENCH]: "Combien ?", [LanguageCode.PORTUGUESE]: "Quanto?", [LanguageCode.MANDARIN]: "多少錢？" } },
        { thai: "กี่", phonetic: "gìi", translations: { [LanguageCode.ENGLISH]: "How many?", [LanguageCode.FRENCH]: "Combien (quantité)?", [LanguageCode.PORTUGUESE]: "Quantos/Quantas?", [LanguageCode.MANDARIN]: "幾個？" } },
        { thai: "ไหน", phonetic: "năi", translations: { [LanguageCode.ENGLISH]: "Which?", [LanguageCode.FRENCH]: "Lequel/Laquelle ?", [LanguageCode.PORTUGUESE]: "Qual?", [LanguageCode.MANDARIN]: "哪一個？" } },
        { thai: "ยังไง", phonetic: "yang-ngai", translations: { [LanguageCode.ENGLISH]: "How? (informal)", [LanguageCode.FRENCH]: "Comment ? (familier)", [LanguageCode.PORTUGUESE]: "Como? (informal)", [LanguageCode.MANDARIN]: "怎麼樣？（口語）" } },
        { thai: "ทำ", phonetic: "tham", translations: { [LanguageCode.ENGLISH]: "Do / Make", [LanguageCode.FRENCH]: "Faire", [LanguageCode.PORTUGUESE]: "Fazer", [LanguageCode.MANDARIN]: "做" } },
        { thai: "ไม่", phonetic: "mâi", translations: { [LanguageCode.ENGLISH]: "Not / No", [LanguageCode.FRENCH]: "Ne... pas / Non", [LanguageCode.PORTUGUESE]: "Não", [LanguageCode.MANDARIN]: "不" } },
        { thai: "ไหม", phonetic: "mái", translations: { [LanguageCode.ENGLISH]: "(Yes/No question particle)", [LanguageCode.FRENCH]: "(Particule interrogative oui/non)", [LanguageCode.PORTUGUESE]: "(Partícula de pergunta sim/não)", [LanguageCode.MANDARIN]: "（是/否疑問語氣詞）" } },
        { thai: "หรือ", phonetic: "rʉ̆ʉ", translations: { [LanguageCode.ENGLISH]: "Or / Right?", [LanguageCode.FRENCH]: "Ou / N'est-ce pas ?", [LanguageCode.PORTUGUESE]: "Ou / Não é?", [LanguageCode.MANDARIN]: "或 / 不是嗎？" } },
        { thai: "แล้ว", phonetic: "láew", translations: { [LanguageCode.ENGLISH]: "Already / Then", [LanguageCode.FRENCH]: "Déjà / Puis", [LanguageCode.PORTUGUESE]: "Já / Então", [LanguageCode.MANDARIN]: "已經 / 然後" } },
        { thai: "ยัง", phonetic: "yang", translations: { [LanguageCode.ENGLISH]: "Still / Yet", [LanguageCode.FRENCH]: "Encore / Pas encore", [LanguageCode.PORTUGUESE]: "Ainda / Já?", [LanguageCode.MANDARIN]: "還 / 還沒" } },
        { thai: "นี่อะไร", phonetic: "nîi à-rai", translations: { [LanguageCode.ENGLISH]: "What is this?", [LanguageCode.FRENCH]: "Qu'est-ce que c'est ?", [LanguageCode.PORTUGUESE]: "O que é isto?", [LanguageCode.MANDARIN]: "這是什麼？" } },
        { thai: "ไปไหน", phonetic: "bpai năi", translations: { [LanguageCode.ENGLISH]: "Where are you going?", [LanguageCode.FRENCH]: "Où vas-tu ?", [LanguageCode.PORTUGUESE]: "Onde você vai?", [LanguageCode.MANDARIN]: "你去哪裡？" } },
        { thai: "ที่", phonetic: "thîi", translations: { [LanguageCode.ENGLISH]: "At / That / Which", [LanguageCode.FRENCH]: "À / Que / Qui", [LanguageCode.PORTUGUESE]: "Em / Que / O qual", [LanguageCode.MANDARIN]: "在 / 的 / 其中" } },
        { thai: "อัน", phonetic: "an", translations: { [LanguageCode.ENGLISH]: "Classifier: thing", [LanguageCode.FRENCH]: "Classificateur : chose", [LanguageCode.PORTUGUESE]: "Classificador: coisa", [LanguageCode.MANDARIN]: "量詞：個/件" } },
        { thai: "คน", phonetic: "khon", translations: { [LanguageCode.ENGLISH]: "Classifier: person", [LanguageCode.FRENCH]: "Classificateur : personne", [LanguageCode.PORTUGUESE]: "Classificador: pessoa", [LanguageCode.MANDARIN]: "量詞：人" } },
        { thai: "หรือเปล่า", phonetic: "rʉ̆ʉ-plào", translations: { [LanguageCode.ENGLISH]: "...or not? (question)", [LanguageCode.FRENCH]: "... ou pas ? (question)", [LanguageCode.PORTUGUESE]: "... ou não? (pergunta)", [LanguageCode.MANDARIN]: "...還是沒有？（疑問）" } },
    ],
    worksheet: [
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct question word for the situation.",
                [LanguageCode.FRENCH]: "Choisissez le bon mot interrogatif pour la situation.",
                [LanguageCode.PORTUGUESE]: "Escolha a palavra interrogativa correta para a situação.",
                [LanguageCode.MANDARIN]: "為情境選擇正確的疑問詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want to know the price of a souvenir.", [LanguageCode.FRENCH]: "Vous voulez connaître le prix d'un souvenir.", [LanguageCode.PORTUGUESE]: "Você quer saber o preço de um souvenir.", [LanguageCode.MANDARIN]: "你想知道紀念品的價格。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อะไร", [LanguageCode.FRENCH]: "อะไร", [LanguageCode.PORTUGUESE]: "อะไร", [LanguageCode.MANDARIN]: "อะไร" },
                        { [LanguageCode.ENGLISH]: "ที่ไหน", [LanguageCode.FRENCH]: "ที่ไหน", [LanguageCode.PORTUGUESE]: "ที่ไหน", [LanguageCode.MANDARIN]: "ที่ไหน" },
                        { [LanguageCode.ENGLISH]: "เท่าไหร่", [LanguageCode.FRENCH]: "เท่าไหร่", [LanguageCode.PORTUGUESE]: "เท่าไหร่", [LanguageCode.MANDARIN]: "เท่าไหร่" },
                    ],
                    correctIndex: 2
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You are looking for the bathroom.", [LanguageCode.FRENCH]: "Vous cherchez les toilettes.", [LanguageCode.PORTUGUESE]: "Você está procurando o banheiro.", [LanguageCode.MANDARIN]: "你在找洗手間。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ใคร", [LanguageCode.FRENCH]: "ใคร", [LanguageCode.PORTUGUESE]: "ใคร", [LanguageCode.MANDARIN]: "ใคร" },
                        { [LanguageCode.ENGLISH]: "ที่ไหน", [LanguageCode.FRENCH]: "ที่ไหน", [LanguageCode.PORTUGUESE]: "ที่ไหน", [LanguageCode.MANDARIN]: "ที่ไหน" },
                        { [LanguageCode.ENGLISH]: "ทำไม", [LanguageCode.FRENCH]: "ทำไม", [LanguageCode.PORTUGUESE]: "ทำไม", [LanguageCode.MANDARIN]: "ทำไม" },
                    ],
                    correctIndex: 1
                }
            ]
        }
        ,
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the building block to its meaning.",
                [LanguageCode.FRENCH]: "Associez l'élément de base à sa signification.",
                [LanguageCode.PORTUGUESE]: "Relacione o bloco básico ao significado.",
                [LanguageCode.MANDARIN]: "將構詞要素與其意思配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "ไหม", [LanguageCode.FRENCH]: "ไหม", [LanguageCode.PORTUGUESE]: "ไหม", [LanguageCode.MANDARIN]: "ไหม" }, answer: { [LanguageCode.ENGLISH]: "Yes/No question particle", [LanguageCode.FRENCH]: "Particule interrogative oui/non", [LanguageCode.PORTUGUESE]: "Partícula de pergunta sim/não", [LanguageCode.MANDARIN]: "是/否疑問語氣詞" } },
                { prompt: { [LanguageCode.ENGLISH]: "ไม่", [LanguageCode.FRENCH]: "ไม่", [LanguageCode.PORTUGUESE]: "ไม่", [LanguageCode.MANDARIN]: "ไม่" }, answer: { [LanguageCode.ENGLISH]: "Not / No", [LanguageCode.FRENCH]: "Ne... pas / Non", [LanguageCode.PORTUGUESE]: "Não", [LanguageCode.MANDARIN]: "不" } },
                { prompt: { [LanguageCode.ENGLISH]: "หรือ", [LanguageCode.FRENCH]: "หรือ", [LanguageCode.PORTUGUESE]: "หรือ", [LanguageCode.MANDARIN]: "หรือ" }, answer: { [LanguageCode.ENGLISH]: "Or / Right?", [LanguageCode.FRENCH]: "Ou / N'est-ce pas ?", [LanguageCode.PORTUGUESE]: "Ou / Não é?", [LanguageCode.MANDARIN]: "或 / 不是嗎？" } },
                { prompt: { [LanguageCode.ENGLISH]: "กี่", [LanguageCode.FRENCH]: "กี่", [LanguageCode.PORTUGUESE]: "กี่", [LanguageCode.MANDARIN]: "กี่" }, answer: { [LanguageCode.ENGLISH]: "How many?", [LanguageCode.FRENCH]: "Combien (quantité)?", [LanguageCode.PORTUGUESE]: "Quantos/Quantas?", [LanguageCode.MANDARIN]: "幾個？" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Build the question with the correct particle.",
                [LanguageCode.FRENCH]: "Construisez la question avec la bonne particule.",
                [LanguageCode.PORTUGUESE]: "Forme a pergunta com a partícula correta.",
                [LanguageCode.MANDARIN]: "用正確的語氣詞組成問題。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "คุณไปไหม ", [LanguageCode.FRENCH]: "คุณไป___ ", [LanguageCode.PORTUGUESE]: "คุณไป___ ", [LanguageCode.MANDARIN]: "你去___ " }, correctAnswer: "ไหม", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: "?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
                { start: { [LanguageCode.ENGLISH]: "นี่ ___", [LanguageCode.FRENCH]: "นี่ ___", [LanguageCode.PORTUGUESE]: "นี่ ___", [LanguageCode.MANDARIN]: "這 ___" }, correctAnswer: "อะไร", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: "?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
                { start: { [LanguageCode.ENGLISH]: "คุณชื่อ ___", [LanguageCode.FRENCH]: "คุณชื่อ ___", [LanguageCode.PORTUGUESE]: "คุณชื่อ ___", [LanguageCode.MANDARIN]: "你叫 ___" }, correctAnswer: "อะไร", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: "?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Drag to build the question.",
                [LanguageCode.FRENCH]: "Faites glisser pour former la question.",
                [LanguageCode.PORTUGUESE]: "Arraste para formar a pergunta.",
                [LanguageCode.MANDARIN]: "拖曳以組成問題。",
            },
            sentences: [
                { correctOrder: ["คุณ", "ชื่อ", "อะไร"], hint: { [LanguageCode.ENGLISH]: "What's your name?", [LanguageCode.FRENCH]: "Tu t'appelles comment ?", [LanguageCode.PORTUGUESE]: "Qual é o seu nome?", [LanguageCode.MANDARIN]: "你叫什麼名字？" } },
                { correctOrder: ["ไป", "ไหน"], hint: { [LanguageCode.ENGLISH]: "Where are you going?", [LanguageCode.FRENCH]: "Où vas-tu ?", [LanguageCode.PORTUGUESE]: "Você vai aonde?", [LanguageCode.MANDARIN]: "你去哪裡？" } },
                { correctOrder: ["ทำไม", "คุณ", "มา", "สาย"], hint: { [LanguageCode.ENGLISH]: "Why are you late?", [LanguageCode.FRENCH]: "Pourquoi es-tu en retard ?", [LanguageCode.PORTUGUESE]: "Por que você está atrasado(a)?", [LanguageCode.MANDARIN]: "你為什麼遲到？" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the questions with the correct question word.",
                [LanguageCode.FRENCH]: "Complétez les questions avec le bon mot interrogatif.",
                [LanguageCode.PORTUGUESE]: "Complete as perguntas com a palavra interrogativa correta.",
                [LanguageCode.MANDARIN]: "用正確的疑問詞完成問題。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ห้องน้ำอยู่___", [LanguageCode.FRENCH]: "ห้องน้ำอยู่___", [LanguageCode.PORTUGUESE]: "ห้องน้ำอยู่___", [LanguageCode.MANDARIN]: "洗手間在___" }, correctAnswer: "ที่ไหน", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: " ?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
                { start: { [LanguageCode.ENGLISH]: "อันนี้___", [LanguageCode.FRENCH]: "อันนี้___", [LanguageCode.PORTUGUESE]: "อันนี้___", [LanguageCode.MANDARIN]: "這個___" }, correctAnswer: "เท่าไหร่", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: " ?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
                { start: { [LanguageCode.ENGLISH]: "คุณไปเมื่อ___", [LanguageCode.FRENCH]: "คุณไปเมื่อ___", [LanguageCode.PORTUGUESE]: "คุณไปเมื่อ___", [LanguageCode.MANDARIN]: "你___去" }, correctAnswer: "เมื่อไหร่", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: " ?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
                { start: { [LanguageCode.ENGLISH]: "___มาที่นี่", [LanguageCode.FRENCH]: "___มาที่นี่", [LanguageCode.PORTUGUESE]: "___มาที่นี่", [LanguageCode.MANDARIN]: "___來這裡" }, correctAnswer: "ใคร", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: " ?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
                { start: { [LanguageCode.ENGLISH]: "มีคน___", [LanguageCode.FRENCH]: "มีคน___", [LanguageCode.PORTUGUESE]: "มีคน___", [LanguageCode.MANDARIN]: "有___人" }, correctAnswer: "กี่", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: " ?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct question for the situation.",
                [LanguageCode.FRENCH]: "Choisissez la bonne question pour la situation.",
                [LanguageCode.PORTUGUESE]: "Escolha a pergunta correta para a situação.",
                [LanguageCode.MANDARIN]: "為情境選擇正確的問題。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want to know when the shop opens.", [LanguageCode.FRENCH]: "Vous voulez savoir quand le magasin ouvre.", [LanguageCode.PORTUGUESE]: "Você quer saber quando a loja abre.", [LanguageCode.MANDARIN]: "你想知道商店什麼時候開門。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เปิดเมื่อไหร่", [LanguageCode.FRENCH]: "เปิดเมื่อไหร่", [LanguageCode.PORTUGUESE]: "เปิดเมื่อไหร่", [LanguageCode.MANDARIN]: "เปิดเมื่อไหร่" },
                        { [LanguageCode.ENGLISH]: "เปิดที่ไหน", [LanguageCode.FRENCH]: "เปิดที่ไหน", [LanguageCode.PORTUGUESE]: "เปิดที่ไหน", [LanguageCode.MANDARIN]: "เปิดที่ไหน" },
                        { [LanguageCode.ENGLISH]: "เปิดทำไม", [LanguageCode.FRENCH]: "เปิดทำไม", [LanguageCode.PORTUGUESE]: "เปิดทำไม", [LanguageCode.MANDARIN]: "เปิดทำไม" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You see someone at a market and want to know who they are.", [LanguageCode.FRENCH]: "Vous voyez quelqu'un au marché et voulez savoir qui c'est.", [LanguageCode.PORTUGUESE]: "Você vê alguém no mercado e quer saber quem é.", [LanguageCode.MANDARIN]: "你在市場看到某人，想知道他是誰。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "นั่นใคร", [LanguageCode.FRENCH]: "นั่นใคร", [LanguageCode.PORTUGUESE]: "นั่นใคร", [LanguageCode.MANDARIN]: "นั่นใคร" },
                        { [LanguageCode.ENGLISH]: "นั่นที่ไหน", [LanguageCode.FRENCH]: "นั่นที่ไหน", [LanguageCode.PORTUGUESE]: "นั่นที่ไหน", [LanguageCode.MANDARIN]: "นั่นที่ไหน" },
                        { [LanguageCode.ENGLISH]: "นั่นอะไร", [LanguageCode.FRENCH]: "นั่นอะไร", [LanguageCode.PORTUGUESE]: "นั่นอะไร", [LanguageCode.MANDARIN]: "นั่นอะไร" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're choosing between options and want to ask which one.", [LanguageCode.FRENCH]: "Vous choisissez entre plusieurs options et voulez demander laquelle.", [LanguageCode.PORTUGUESE]: "Você está escolhendo entre opções e quer perguntar qual.", [LanguageCode.MANDARIN]: "你在幾個選項中挑選，想問哪一個。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อันไหนดี", [LanguageCode.FRENCH]: "อันไหนดี", [LanguageCode.PORTUGUESE]: "อันไหนดี", [LanguageCode.MANDARIN]: "อันไหนดี" },
                        { [LanguageCode.ENGLISH]: "อันกี่ดี", [LanguageCode.FRENCH]: "อันกี่ดี", [LanguageCode.PORTUGUESE]: "อันกี่ดี", [LanguageCode.MANDARIN]: "อันกี่ดี" },
                        { [LanguageCode.ENGLISH]: "อันอะไรดี", [LanguageCode.FRENCH]: "อันอะไรดี", [LanguageCode.PORTUGUESE]: "อันอะไรดี", [LanguageCode.MANDARIN]: "อันอะไรดี" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Your friend didn't come to work. You want to know why.", [LanguageCode.FRENCH]: "Votre ami n'est pas venu au travail. Vous voulez savoir pourquoi.", [LanguageCode.PORTUGUESE]: "Seu amigo não veio trabalhar. Você quer saber por quê.", [LanguageCode.MANDARIN]: "你的朋友沒來上班。你想知道為什麼。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ทำไมไม่มา", [LanguageCode.FRENCH]: "ทำไมไม่มา", [LanguageCode.PORTUGUESE]: "ทำไมไม่มา", [LanguageCode.MANDARIN]: "ทำไมไม่มา" },
                        { [LanguageCode.ENGLISH]: "เมื่อไหร่ไม่มา", [LanguageCode.FRENCH]: "เมื่อไหร่ไม่มา", [LanguageCode.PORTUGUESE]: "เมื่อไหร่ไม่มา", [LanguageCode.MANDARIN]: "เมื่อไหร่ไม่มา" },
                        { [LanguageCode.ENGLISH]: "ที่ไหนไม่มา", [LanguageCode.FRENCH]: "ที่ไหนไม่มา", [LanguageCode.PORTUGUESE]: "ที่ไหนไม่มา", [LanguageCode.MANDARIN]: "ที่ไหนไม่มา" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build more questions by dragging the words.",
                [LanguageCode.FRENCH]: "Construisez plus de questions en faisant glisser les mots.",
                [LanguageCode.PORTUGUESE]: "Construa mais perguntas arrastando as palavras.",
                [LanguageCode.MANDARIN]: "拖曳單詞組成更多問題。",
            },
            sentences: [
                { correctOrder: ["นี่", "อะไร"], hint: { [LanguageCode.ENGLISH]: "What is this?", [LanguageCode.FRENCH]: "Qu'est-ce que c'est ?", [LanguageCode.PORTUGUESE]: "O que é isto?", [LanguageCode.MANDARIN]: "這是什麼？" } },
                { correctOrder: ["ห้องน้ำ", "อยู่", "ที่ไหน"], hint: { [LanguageCode.ENGLISH]: "Where is the bathroom?", [LanguageCode.FRENCH]: "Où sont les toilettes ?", [LanguageCode.PORTUGUESE]: "Onde fica o banheiro?", [LanguageCode.MANDARIN]: "洗手間在哪裡？" } },
                { correctOrder: ["มี", "กี่", "คน"], hint: { [LanguageCode.ENGLISH]: "How many people?", [LanguageCode.FRENCH]: "Combien de personnes ?", [LanguageCode.PORTUGUESE]: "Quantas pessoas?", [LanguageCode.MANDARIN]: "有多少人？" } },
                { correctOrder: ["ใคร", "ทำ", "อาหาร"], hint: { [LanguageCode.ENGLISH]: "Who made the food?", [LanguageCode.FRENCH]: "Qui a fait la nourriture ?", [LanguageCode.PORTUGUESE]: "Quem fez a comida?", [LanguageCode.MANDARIN]: "誰做的食物？" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the question to its appropriate answer.",
                [LanguageCode.FRENCH]: "Associez la question à sa réponse appropriée.",
                [LanguageCode.PORTUGUESE]: "Relacione a pergunta à resposta apropriada.",
                [LanguageCode.MANDARIN]: "將問題與其合適的答案配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "นี่อะไร?", [LanguageCode.FRENCH]: "นี่อะไร?", [LanguageCode.PORTUGUESE]: "นี่อะไร?", [LanguageCode.MANDARIN]: "นี่อะไร?" }, answer: { [LanguageCode.ENGLISH]: "นี่คือกาแฟ (This is coffee)", [LanguageCode.FRENCH]: "นี่คือกาแฟ (C'est du café)", [LanguageCode.PORTUGUESE]: "นี่คือกาแฟ (Isto é café)", [LanguageCode.MANDARIN]: "นี่คือกาแฟ (這是咖啡)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ไปไหน?", [LanguageCode.FRENCH]: "ไปไหน?", [LanguageCode.PORTUGUESE]: "ไปไหน?", [LanguageCode.MANDARIN]: "ไปไหน?" }, answer: { [LanguageCode.ENGLISH]: "ไปตลาด (Going to market)", [LanguageCode.FRENCH]: "ไปตลาด (Au marché)", [LanguageCode.PORTUGUESE]: "ไปตลาด (Ao mercado)", [LanguageCode.MANDARIN]: "ไปตลาด (去市場)" } },
                { prompt: { [LanguageCode.ENGLISH]: "เท่าไหร่?", [LanguageCode.FRENCH]: "เท่าไหร่?", [LanguageCode.PORTUGUESE]: "เท่าไหร่?", [LanguageCode.MANDARIN]: "เท่าไหร่?" }, answer: { [LanguageCode.ENGLISH]: "50บาท (50 baht)", [LanguageCode.FRENCH]: "50บาท (50 bahts)", [LanguageCode.PORTUGUESE]: "50บาท (50 baht)", [LanguageCode.MANDARIN]: "50บาท (50銖)" } },
                { prompt: { [LanguageCode.ENGLISH]: "กี่คน?", [LanguageCode.FRENCH]: "กี่คน?", [LanguageCode.PORTUGUESE]: "กี่คน?", [LanguageCode.MANDARIN]: "กี่คน?" }, answer: { [LanguageCode.ENGLISH]: "สามคน (3 people)", [LanguageCode.FRENCH]: "สามคน (3 personnes)", [LanguageCode.PORTUGUESE]: "สามคน (3 pessoas)", [LanguageCode.MANDARIN]: "สามคน (3人)" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the dialogue with the correct question.",
                [LanguageCode.FRENCH]: "Complétez le dialogue avec la bonne question.",
                [LanguageCode.PORTUGUESE]: "Complete o diálogo com a pergunta correta.",
                [LanguageCode.MANDARIN]: "用正確的問題完成對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A: คุณ___? B: ผมชื่อจอห์น", [LanguageCode.FRENCH]: "A: คุณ___? B: Je m'appelle John", [LanguageCode.PORTUGUESE]: "A: คุณ___? B: Meu nome é John", [LanguageCode.MANDARIN]: "A: 你___? B: 我叫約翰" }, correctAnswer: "ชื่ออะไร", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: ร้านอาหาร___? B: อยู่ที่ตรงนั้น", [LanguageCode.FRENCH]: "A: Restaurant ___? B: C'est là-bas", [LanguageCode.PORTUGUESE]: "A: Restaurante ___? B: É ali", [LanguageCode.MANDARIN]: "A: 餐廳___? B: 在那裡" }, correctAnswer: "อยู่ที่ไหน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: อันนี้___? B: 100บาท", [LanguageCode.FRENCH]: "A: Celui-ci ___? B: 100 bahts", [LanguageCode.PORTUGUESE]: "A: Este ___? B: 100 baht", [LanguageCode.MANDARIN]: "A: 這個___? B: 100銖" }, correctAnswer: "เท่าไหร่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "Tourist", line: { [LanguageCode.ENGLISH]: "Excuse me, what is this?", [LanguageCode.FRENCH]: "Excusez-moi, qu'est-ce que c'est ?", [LanguageCode.PORTUGUESE]: "Com licença, o que é isto?", [LanguageCode.MANDARIN]: "不好意思，這是什麼？" } },
            { speaker: "Vendor", line: { [LanguageCode.ENGLISH]: "This is mango sticky rice.", [LanguageCode.FRENCH]: "C'est du riz gluant à la mangue.", [LanguageCode.PORTUGUESE]: "Isto é arroz pegajoso com manga.", [LanguageCode.MANDARIN]: "這是芒果糯米飯。" } }
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
                    question: { [LanguageCode.ENGLISH]: "Who asked the question?", [LanguageCode.FRENCH]: "Qui a posé la question ?", [LanguageCode.PORTUGUESE]: "Quem fez a pergunta?", [LanguageCode.MANDARIN]: "是誰問的問題？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "The vendor", [LanguageCode.FRENCH]: "Le vendeur", [LanguageCode.PORTUGUESE]: "O vendedor", [LanguageCode.MANDARIN]: "攤販" },
                        { [LanguageCode.ENGLISH]: "The tourist", [LanguageCode.FRENCH]: "Le touriste", [LanguageCode.PORTUGUESE]: "O turista", [LanguageCode.MANDARIN]: "遊客" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What was the food item?", [LanguageCode.FRENCH]: "Quel était l'aliment ?", [LanguageCode.PORTUGUESE]: "Qual era o item alimentar?", [LanguageCode.MANDARIN]: "那個食物是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Durian", [LanguageCode.FRENCH]: "Durian", [LanguageCode.PORTUGUESE]: "Durian", [LanguageCode.MANDARIN]: "榴槤" },
                        { [LanguageCode.ENGLISH]: "Pad Thai", [LanguageCode.FRENCH]: "Pad Thai", [LanguageCode.PORTUGUESE]: "Pad Thai", [LanguageCode.MANDARIN]: "泰式炒河粉" },
                        { [LanguageCode.ENGLISH]: "Mango sticky rice", [LanguageCode.FRENCH]: "Riz gluant à la mangue", [LanguageCode.PORTUGUESE]: "Arroz pegajoso com manga", [LanguageCode.MANDARIN]: "芒果糯米飯" },
                    ],
                    correctIndex: 2
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "นี่อะไรครับ",
            [LanguageCode.FRENCH]: "นี่อะไรครับ",
            [LanguageCode.PORTUGUESE]: "นี่อะไรครับ",
            [LanguageCode.MANDARIN]: "นี่อะไรครับ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "nîi à-rai khráp",
            [LanguageCode.FRENCH]: "nîi à-rai khráp",
            [LanguageCode.PORTUGUESE]: "nîi à-rai khráp",
            [LanguageCode.MANDARIN]: "nîi à-rai khráp",
        }
    }
};