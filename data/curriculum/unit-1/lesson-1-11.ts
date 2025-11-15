import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_11: Lesson = {
    id: "1.11",
    title: {
        [LanguageCode.ENGLISH]: "Pronouns & People",
        [LanguageCode.FRENCH]: "Pronoms et personnes",
        [LanguageCode.PORTUGUESE]: "Pronomes e Pessoas",
        [LanguageCode.MANDARIN]: "代詞和人",
    },
    vocabulary: [
        { thai: "ฉัน", phonetic: "chǎn", translations: { [LanguageCode.ENGLISH]: "I / me (general, commonly used by women)", [LanguageCode.FRENCH]: "je / moi (général, couramment utilisé par les femmes)", [LanguageCode.PORTUGUESE]: "eu / me (geral, comumente usado por mulheres)", [LanguageCode.MANDARIN]: "我（一般，女性常用）" } },
        { thai: "ผม", phonetic: "phǒm", translations: { [LanguageCode.ENGLISH]: "I / me (male, polite)", [LanguageCode.FRENCH]: "je / moi (masculin, poli)", [LanguageCode.PORTUGUESE]: "eu / me (masculino, educado)", [LanguageCode.MANDARIN]: "我（男性，禮貌）" } },
        { thai: "คุณ", phonetic: "khun", translations: { [LanguageCode.ENGLISH]: "you (polite, universal)", [LanguageCode.FRENCH]: "tu / vous (poli, universel)", [LanguageCode.PORTUGUESE]: "você (educado, universal)", [LanguageCode.MANDARIN]: "你（禮貌，通用）" } },
        { thai: "เขา", phonetic: "khǎo", translations: { [LanguageCode.ENGLISH]: "he / she / they (general third person)", [LanguageCode.FRENCH]: "il / elle / ils / elles (troisième personne générale)", [LanguageCode.PORTUGUESE]: "ele / ela / eles (terceira pessoa geral)", [LanguageCode.MANDARIN]: "他/她/他們（一般第三人稱）" } },
        { thai: "เรา", phonetic: "rao", translations: { [LanguageCode.ENGLISH]: "we / us (also informal 'I')", [LanguageCode.FRENCH]: "nous (aussi 'je' informel)", [LanguageCode.PORTUGUESE]: "nós (também 'eu' informal)", [LanguageCode.MANDARIN]: "我們（也可作非正式「我」）" } },
        { thai: "เธอ", phonetic: "thəə", translations: { [LanguageCode.ENGLISH]: "you (informal) / he / she / babe", [LanguageCode.FRENCH]: "tu (informel) / il / elle / chéri(e)", [LanguageCode.PORTUGUESE]: "você (informal) / ele / ela / amor", [LanguageCode.MANDARIN]: "你（非正式）/他/她/寶貝" } },
        { thai: "คน", phonetic: "khon", translations: { [LanguageCode.ENGLISH]: "person / people (classifier)", [LanguageCode.FRENCH]: "personne / gens (classificateur)", [LanguageCode.PORTUGUESE]: "pessoa / pessoas (classificador)", [LanguageCode.MANDARIN]: "人（量詞）" } },
        { thai: "คนนี้", phonetic: "khon níi", translations: { [LanguageCode.ENGLISH]: "this person", [LanguageCode.FRENCH]: "cette personne", [LanguageCode.PORTUGUESE]: "esta pessoa", [LanguageCode.MANDARIN]: "這個人" } },
        { thai: "คนนั้น", phonetic: "khon nán", translations: { [LanguageCode.ENGLISH]: "that person", [LanguageCode.FRENCH]: "cette personne-là", [LanguageCode.PORTUGUESE]: "aquela pessoa", [LanguageCode.MANDARIN]: "那個人" } },
        { thai: "คนไทย", phonetic: "khon thai", translations: { [LanguageCode.ENGLISH]: "Thai person", [LanguageCode.FRENCH]: "personne thaïlandaise", [LanguageCode.PORTUGUESE]: "pessoa tailandesa", [LanguageCode.MANDARIN]: "泰國人" } },
        { thai: "คนฝรั่ง", phonetic: "khon fà-ràŋ", translations: { [LanguageCode.ENGLISH]: "foreign person / Westerner", [LanguageCode.FRENCH]: "personne étrangère / Occidental(e)", [LanguageCode.PORTUGUESE]: "pessoa estrangeira / ocidental", [LanguageCode.MANDARIN]: "外國人 / 西方人" } },
        { thai: "คนบราซิล", phonetic: "khon braa-sin", translations: { [LanguageCode.ENGLISH]: "Brazilian person", [LanguageCode.FRENCH]: "personne brésilienne", [LanguageCode.PORTUGUESE]: "pessoa brasileira", [LanguageCode.MANDARIN]: "巴西人" } },
        { thai: "คนอเมริกา", phonetic: "khon à-mee-rí-gaa", translations: { [LanguageCode.ENGLISH]: "American person", [LanguageCode.FRENCH]: "personne américaine", [LanguageCode.PORTUGUESE]: "pessoa americana", [LanguageCode.MANDARIN]: "美國人" } },
        { thai: "คนฝรั่งเศส", phonetic: "khon fà-ràŋ-sèet", translations: { [LanguageCode.ENGLISH]: "French person", [LanguageCode.FRENCH]: "personne française", [LanguageCode.PORTUGUESE]: "pessoa francesa", [LanguageCode.MANDARIN]: "法國人" } },
        { thai: "ตัวเอง", phonetic: "dtuua-eeŋ", translations: { [LanguageCode.ENGLISH]: "oneself / myself / yourself (also: babe, darling)", [LanguageCode.FRENCH]: "soi-même / moi-même / toi-même (aussi : chéri(e))", [LanguageCode.PORTUGUESE]: "si mesmo / eu mesmo / você mesmo (também: amor, querido(a))", [LanguageCode.MANDARIN]: "自己 / 我自己 / 你自己（也：寶貝）" } },
        { thai: "พวก", phonetic: "phûak", translations: { [LanguageCode.ENGLISH]: "group of / plural marker", [LanguageCode.FRENCH]: "groupe de / marqueur pluriel", [LanguageCode.PORTUGUESE]: "grupo de / marcador plural", [LanguageCode.MANDARIN]: "一群 / 複數標記" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Expanding Your Pronoun Knowledge: Context is Everything",
                [LanguageCode.FRENCH]: "Élargir vos connaissances sur les pronoms : Le contexte est tout",
                [LanguageCode.PORTUGUESE]: "Expandindo seu Conhecimento de Pronomes: O Contexto é Tudo",
                [LanguageCode.MANDARIN]: "擴展你的代詞知識：語境就是一切",
            },
            content: {
                [LanguageCode.ENGLISH]: "In Lesson 1.0, you learned the basics of Thai pronouns. Now let's dive deeper into their usage and nuances!\n\n**เธอ (thəə) - The Multi-Purpose Pronoun**\n\nThis word is incredibly versatile:\n1. **Informal 'you'** - Used with close friends, people your age or younger\n   • เธอไปไหน? (thəə bpai năi) = Where are you going?\n\n2. **He/She (informal)** - When talking about friends\n   • เธอเป็นเพื่อนดี (thəə bpen phʉ̂an dii) = He/She is a good friend\n\n3. **Romantic address** - 'Babe', 'darling' (very common between couples!)\n   • เธอสวยมาก (thəə sǔai mâak) = You're so beautiful, babe\n\n**ตัวเอง (dtuua-eeŋ) - Yourself... or Babe?**\n\nThis word primarily means 'oneself' or 'by oneself':\n• ทำเอง (tham eeŋ) = Do it yourself\n• คนตัวเอง (khon dtuua-eeŋ) = My own person / someone close to me\n\nBUT it's also a cute, informal way to say 'babe' or 'darling'! Thai has many romantic nicknames, and this is one of them.\n\n**Describing People: คน + Nationality**\n\nThe word คน (khon) means 'person' and is used to describe someone's nationality:\n• คนไทย (khon thai) = Thai person\n• คนฝรั่ง (khon fà-ràŋ) = Western person / foreigner\n• คนอเมริกา (khon à-mee-rí-gaa) = American person\n• คนบราซิล (khon braa-sin) = Brazilian person\n• คนฝรั่งเศส (khon fà-ràŋ-sèet) = French person\n\n**What is ฝรั่ง (fà-ràŋ)?**\n\nฝรั่ง is a very common word meaning 'Western person' or 'Caucasian foreigner'. It originally came from 'Farang' (Persian) meaning 'French', but now refers to any Western/white foreigner. It's NOT offensive when used respectfully - it's just a casual descriptor!\n\n**Using คนนี้ and คนนั้น**\n\nThese are demonstrative pronouns for people:\n• คนนี้ (khon níi) = this person (near)\n• คนนั้น (khon nán) = that person (far)\n\nExamples:\n• คนนี้เป็นเพื่อน (khon níi bpen phʉ̂an) = This person is a friend\n• คนนั้นเป็นครู (khon nán bpen khruu) = That person is a teacher\n\n**Making Plurals with พวก (phûak)**\n\nพวก is added before pronouns to make them plural:\n• พวกเรา (phûak-rao) = we / us (group)\n• พวกเขา (phûak-khǎo) = they / them (group)\n• พวกคุณ (phûak-khun) = you all / you guys\n\n**Context is KEY!**\n\nRemember: Thai pronouns change based on:\n1. Your relationship with the person\n2. The formality of the situation\n3. Your gender (for ฉัน/ผม)\n4. Whether you're being affectionate (เธอ, ตัวเอง)\n\nWhen in doubt, use คุณ for 'you' and ผม/ฉัน for 'I' - these are safe, polite choices!",
                [LanguageCode.FRENCH]: "Dans la leçon 1.0, vous avez appris les bases des pronoms thaïlandais. Maintenant, approfondissons leur utilisation et leurs nuances !\n\n**เธอ (thəə) - Le pronom polyvalent**\n\nCe mot est incroyablement polyvalent :\n1. **'Tu' informel** - Utilisé avec des amis proches, des personnes de votre âge ou plus jeunes\n2. **Il/Elle (informel)** - Quand on parle d'amis\n3. **Adresse romantique** - 'Chéri(e)', 'bébé' (très courant entre couples !)\n\n**ตัวเอง (dtuua-eeŋ) - Soi-même... ou chéri(e) ?**\n\nCe mot signifie principalement 'soi-même' ou 'par soi-même', mais c'est aussi une façon mignonne et informelle de dire 'chéri(e)' !\n\n**Décrire les personnes : คน + Nationalité**\n\nLe mot คน (khon) signifie 'personne' et est utilisé pour décrire la nationalité de quelqu'un :\n• คนไทย (khon thai) = personne thaïlandaise\n• คนฝรั่ง (khon fà-ràŋ) = personne occidentale / étranger\n• คนอเมริกา (khon à-mee-rí-gaa) = personne américaine\n\n**Qu'est-ce que ฝรั่ง (fà-ràŋ) ?**\n\nฝรั่ง est un mot très courant signifiant 'personne occidentale' ou 'étranger caucasien'. Il n'est PAS offensant lorsqu'il est utilisé avec respect !",
                [LanguageCode.PORTUGUESE]: "Na Lição 1.0, você aprendeu o básico dos pronomes tailandeses. Agora vamos mergulhar mais fundo em seu uso e nuances!\n\n**เธอ (thəə) - O Pronome Multifuncional**\n\nEsta palavra é incrivelmente versátil:\n1. **'Você' informal** - Usado com amigos próximos, pessoas da sua idade ou mais jovens\n2. **Ele/Ela (informal)** - Ao falar de amigos\n3. **Tratamento romântico** - 'Amor', 'querido(a)' (muito comum entre casais!)\n\n**ตัวเอง (dtuua-eeŋ) - Você mesmo... ou amor?**\n\nEsta palavra significa principalmente 'si mesmo' ou 'por si mesmo', mas também é uma forma fofa e informal de dizer 'amor' ou 'querido(a)'!\n\n**Descrevendo Pessoas: คน + Nacionalidade**\n\nA palavra คน (khon) significa 'pessoa' e é usada para descrever a nacionalidade de alguém:\n• คนไทย (khon thai) = pessoa tailandesa\n• คนฝรั่ง (khon fà-ràŋ) = pessoa ocidental / estrangeiro\n• คนอเมริกา (khon à-mee-rí-gaa) = pessoa americana\n\n**O que é ฝรั่ง (fà-ràŋ)?**\n\nฝรั่ง é uma palavra muito comum que significa 'pessoa ocidental' ou 'estrangeiro caucasiano'. NÃO é ofensivo quando usado respeitosamente!",
                [LanguageCode.MANDARIN]: "在第 1.0 課中，你學習了泰語代詞的基礎知識。現在讓我們更深入地了解它們的用法和細微差別！\n\n**เธอ (thəə) - 多功能代詞**\n\n這個詞非常多功能：\n1. **非正式的「你」** - 用於親密的朋友、同齡人或年輕人\n2. **他/她（非正式）** - 談論朋友時\n3. **浪漫稱呼** - 「寶貝」、「親愛的」（情侶間非常常見！）\n\n**ตัวเอง (dtuua-eeŋ) - 你自己...還是寶貝？**\n\n這個詞主要意思是「自己」或「靠自己」，但它也是一種可愛的非正式方式說「寶貝」或「親愛的」！\n\n**描述人：คน + 國籍**\n\n詞 คน (khon) 意思是「人」，用來描述某人的國籍：\n• คนไทย (khon thai) = 泰國人\n• คนฝรั่ง (khon fà-ràŋ) = 西方人 / 外國人\n• คนอเมริกา (khon à-mee-rí-gaa) = 美國人\n\n**什麼是 ฝรั่ง (fà-ràŋ)？**\n\nฝรั่ง 是一個非常常見的詞，意思是「西方人」或「白人外國人」。尊重使用時並不冒犯！",
            }
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to form correct sentences with pronouns.",
                [LanguageCode.FRENCH]: "Organisez les mots pour former des phrases correctes avec des pronoms.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para formar frases corretas com pronomes.",
                [LanguageCode.MANDARIN]: "排列單詞以形成帶有代詞的正確句子。",
            },
            sentences: [
                { correctOrder: ["ฉัน", "เป็น", "คน", "อเมริกา"], hint: { [LanguageCode.ENGLISH]: "I am American.", [LanguageCode.FRENCH]: "Je suis américain(e).", [LanguageCode.PORTUGUESE]: "Eu sou americano(a).", [LanguageCode.MANDARIN]: "我是美國人。" } },
                { correctOrder: ["คนนั้น", "เป็น", "เพื่อน", "ของ", "เขา"], hint: { [LanguageCode.ENGLISH]: "That person is his/her friend.", [LanguageCode.FRENCH]: "Cette personne est son ami(e).", [LanguageCode.PORTUGUESE]: "Aquela pessoa é amigo(a) dele(a).", [LanguageCode.MANDARIN]: "那個人是他/她的朋友。" } },
                { correctOrder: ["เธอ", "เป็น", "คน", "ไทย", "ไหม"], hint: { [LanguageCode.ENGLISH]: "Are you Thai?", [LanguageCode.FRENCH]: "Es-tu thaïlandais(e) ?", [LanguageCode.PORTUGUESE]: "Você é tailandês(esa)?", [LanguageCode.MANDARIN]: "你是泰國人嗎？" } },
                { correctOrder: ["พวก", "เรา", "เป็น", "นักเรียน"], hint: { [LanguageCode.ENGLISH]: "We are students.", [LanguageCode.FRENCH]: "Nous sommes étudiants.", [LanguageCode.PORTUGUESE]: "Nós somos estudantes.", [LanguageCode.MANDARIN]: "我們是學生。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the blank with the correct pronoun based on context.",
                [LanguageCode.FRENCH]: "Remplissez le vide avec le pronom correct selon le contexte.",
                [LanguageCode.PORTUGUESE]: "Preencha o espaço em branco com o pronome correto com base no contexto.",
                [LanguageCode.MANDARIN]: "根據上下文填入正確的代詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "___เป็นคนฝรั่ง (I am a foreigner - male speaking)", [LanguageCode.FRENCH]: "___เป็นคนฝรั่ง (Je suis étranger - homme qui parle)", [LanguageCode.PORTUGUESE]: "___เป็นคนฝรั่ง (Eu sou estrangeiro - homem falando)", [LanguageCode.MANDARIN]: "___เป็นคนฝรั่ง（我是外國人 - 男性說）" }, correctAnswer: "ผม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___เป็นเพื่อนของฉัน (That person is my friend)", [LanguageCode.FRENCH]: "___เป็นเพื่อนของฉัน (Cette personne est mon ami(e))", [LanguageCode.PORTUGUESE]: "___เป็นเพื่อนของฉัน (Aquela pessoa é meu amigo(a))", [LanguageCode.MANDARIN]: "___เป็นเพื่อนของฉัน（那個人是我的朋友）" }, correctAnswer: "คนนั้น", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ไปไหน? (Where are you going? - to close friend)", [LanguageCode.FRENCH]: "___ไปไหน? (Où vas-tu ? - à un ami proche)", [LanguageCode.PORTUGUESE]: "___ไปไหน? (Onde você vai? - para amigo próximo)", [LanguageCode.MANDARIN]: "___ไปไหน?（你去哪裡？- 對親密朋友）" }, correctAnswer: "เธอ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___เป็นนักเรียน (We are students)", [LanguageCode.FRENCH]: "___เป็นนักเรียน (Nous sommes étudiants)", [LanguageCode.PORTUGUESE]: "___เป็นนักเรียน (Nós somos estudantes)", [LanguageCode.MANDARIN]: "___เป็นนักเรียน（我們是學生）" }, correctAnswer: "พวกเรา/เรา", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the nationality descriptor to its meaning.",
                [LanguageCode.FRENCH]: "Associez le descripteur de nationalité à sa signification.",
                [LanguageCode.PORTUGUESE]: "Relacione o descritor de nacionalidade ao seu significado.",
                [LanguageCode.MANDARIN]: "將國籍描述與其含義配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "คนไทย", [LanguageCode.FRENCH]: "คนไทย", [LanguageCode.PORTUGUESE]: "คนไทย", [LanguageCode.MANDARIN]: "คนไทย" }, answer: { [LanguageCode.ENGLISH]: "Thai person", [LanguageCode.FRENCH]: "Personne thaïlandaise", [LanguageCode.PORTUGUESE]: "Pessoa tailandesa", [LanguageCode.MANDARIN]: "泰國人" } },
                { prompt: { [LanguageCode.ENGLISH]: "คนฝรั่ง", [LanguageCode.FRENCH]: "คนฝรั่ง", [LanguageCode.PORTUGUESE]: "คนฝรั่ง", [LanguageCode.MANDARIN]: "คนฝรั่ง" }, answer: { [LanguageCode.ENGLISH]: "Western person / foreigner", [LanguageCode.FRENCH]: "Personne occidentale / étranger", [LanguageCode.PORTUGUESE]: "Pessoa ocidental / estrangeiro", [LanguageCode.MANDARIN]: "西方人 / 外國人" } },
                { prompt: { [LanguageCode.ENGLISH]: "คนบราซิล", [LanguageCode.FRENCH]: "คนบราซิล", [LanguageCode.PORTUGUESE]: "คนบราซิล", [LanguageCode.MANDARIN]: "คนบราซิล" }, answer: { [LanguageCode.ENGLISH]: "Brazilian person", [LanguageCode.FRENCH]: "Personne brésilienne", [LanguageCode.PORTUGUESE]: "Pessoa brasileira", [LanguageCode.MANDARIN]: "巴西人" } },
                { prompt: { [LanguageCode.ENGLISH]: "คนฝรั่งเศส", [LanguageCode.FRENCH]: "คนฝรั่งเศส", [LanguageCode.PORTUGUESE]: "คนฝรั่งเศส", [LanguageCode.MANDARIN]: "คนฝรั่งเศส" }, answer: { [LanguageCode.ENGLISH]: "French person", [LanguageCode.FRENCH]: "Personne française", [LanguageCode.PORTUGUESE]: "Pessoa francesa", [LanguageCode.MANDARIN]: "法國人" } },
                { prompt: { [LanguageCode.ENGLISH]: "คนอเมริกา", [LanguageCode.FRENCH]: "คนอเมริกา", [LanguageCode.PORTUGUESE]: "คนอเมริกา", [LanguageCode.MANDARIN]: "คนอเมริกา" }, answer: { [LanguageCode.ENGLISH]: "American person", [LanguageCode.FRENCH]: "Personne américaine", [LanguageCode.PORTUGUESE]: "Pessoa americana", [LanguageCode.MANDARIN]: "美國人" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the most appropriate pronoun for each situation.",
                [LanguageCode.FRENCH]: "Choisissez le pronom le plus approprié pour chaque situation.",
                [LanguageCode.PORTUGUESE]: "Escolha o pronome mais apropriado para cada situação.",
                [LanguageCode.MANDARIN]: "為每種情況選擇最合適的代詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Your romantic partner says something sweet. Which pronoun would they likely use?", [LanguageCode.FRENCH]: "Votre partenaire romantique dit quelque chose de doux. Quel pronom utiliserait-il/elle probablement ?", [LanguageCode.PORTUGUESE]: "Seu parceiro romântico diz algo doce. Qual pronome ele(a) provavelmente usaria?", [LanguageCode.MANDARIN]: "你的戀愛伴侶說了一些甜蜜的話。他們可能會用哪個代詞？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "คุณ", [LanguageCode.FRENCH]: "คุณ", [LanguageCode.PORTUGUESE]: "คุณ", [LanguageCode.MANDARIN]: "คุณ" },
                        { [LanguageCode.ENGLISH]: "เธอ", [LanguageCode.FRENCH]: "เธอ", [LanguageCode.PORTUGUESE]: "เธอ", [LanguageCode.MANDARIN]: "เธอ" },
                        { [LanguageCode.ENGLISH]: "เขา", [LanguageCode.FRENCH]: "เขา", [LanguageCode.PORTUGUESE]: "เขา", [LanguageCode.MANDARIN]: "เขา" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you say 'this person' in Thai?", [LanguageCode.FRENCH]: "Comment dit-on 'cette personne' en thaï ?", [LanguageCode.PORTUGUESE]: "Como você diz 'esta pessoa' em tailandês?", [LanguageCode.MANDARIN]: "泰語中「這個人」怎麼說？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "คนนั้น", [LanguageCode.FRENCH]: "คนนั้น", [LanguageCode.PORTUGUESE]: "คนนั้น", [LanguageCode.MANDARIN]: "คนนั้น" },
                        { [LanguageCode.ENGLISH]: "คนนี้", [LanguageCode.FRENCH]: "คนนี้", [LanguageCode.PORTUGUESE]: "คนนี้", [LanguageCode.MANDARIN]: "คนนี้" },
                        { [LanguageCode.ENGLISH]: "คน", [LanguageCode.FRENCH]: "คน", [LanguageCode.PORTUGUESE]: "คน", [LanguageCode.MANDARIN]: "คน" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What does ฝรั่ง (fà-ràŋ) refer to?", [LanguageCode.FRENCH]: "À quoi fait référence ฝรั่ง (fà-ràŋ) ?", [LanguageCode.PORTUGUESE]: "A que se refere ฝรั่ง (fà-ràŋ)?", [LanguageCode.MANDARIN]: "ฝรั่ง (fà-ràŋ) 指的是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Any foreigner", [LanguageCode.FRENCH]: "N'importe quel étranger", [LanguageCode.PORTUGUESE]: "Qualquer estrangeiro", [LanguageCode.MANDARIN]: "任何外國人" },
                        { [LanguageCode.ENGLISH]: "Western/Caucasian person", [LanguageCode.FRENCH]: "Personne occidentale/caucasienne", [LanguageCode.PORTUGUESE]: "Pessoa ocidental/caucasiana", [LanguageCode.MANDARIN]: "西方人/白種人" },
                        { [LanguageCode.ENGLISH]: "Tourist", [LanguageCode.FRENCH]: "Touriste", [LanguageCode.PORTUGUESE]: "Turista", [LanguageCode.MANDARIN]: "遊客" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How would you make 'we/us' more explicitly plural?", [LanguageCode.FRENCH]: "Comment rendriez-vous 'nous' plus explicitement pluriel ?", [LanguageCode.PORTUGUESE]: "Como você tornaria 'nós' mais explicitamente plural?", [LanguageCode.MANDARIN]: "你如何使「我們」更明確地複數化？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เรา", [LanguageCode.FRENCH]: "เรา", [LanguageCode.PORTUGUESE]: "เรา", [LanguageCode.MANDARIN]: "เรา" },
                        { [LanguageCode.ENGLISH]: "พวกเรา", [LanguageCode.FRENCH]: "พวกเรา", [LanguageCode.PORTUGUESE]: "พวกเรา", [LanguageCode.MANDARIN]: "พวกเรา" },
                        { [LanguageCode.ENGLISH]: "คนเรา", [LanguageCode.FRENCH]: "คนเรา", [LanguageCode.PORTUGUESE]: "คนเรา", [LanguageCode.MANDARIN]: "คนเรา" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the sentences describing people.",
                [LanguageCode.FRENCH]: "Complétez les phrases décrivant les personnes.",
                [LanguageCode.PORTUGUESE]: "Complete as frases descrevendo pessoas.",
                [LanguageCode.MANDARIN]: "完成描述人的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผมเป็น___อเมริกา (I am American)", [LanguageCode.FRENCH]: "ผมเป็น___อเมริกา (Je suis américain)", [LanguageCode.PORTUGUESE]: "ผมเป็น___อเมริกา (Eu sou americano)", [LanguageCode.MANDARIN]: "ผมเป็น___อเมริกา（我是美國人）" }, correctAnswer: "คน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขาเป็น___ไทย (He/She is Thai)", [LanguageCode.FRENCH]: "เขาเป็น___ไทย (Il/Elle est thaïlandais(e))", [LanguageCode.PORTUGUESE]: "เขาเป็น___ไทย (Ele/Ela é tailandês(esa))", [LanguageCode.MANDARIN]: "เขาเป็น___ไทย（他/她是泰國人）" }, correctAnswer: "คน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___นี้เป็นเพื่อน (This person is a friend)", [LanguageCode.FRENCH]: "___นี้เป็นเพื่อน (Cette personne est un(e) ami(e))", [LanguageCode.PORTUGUESE]: "___นี้เป็นเพื่อน (Esta pessoa é um amigo(a))", [LanguageCode.MANDARIN]: "___นี้เป็นเพื่อน（這個人是朋友）" }, correctAnswer: "คน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
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
            [LanguageCode.ENGLISH]: "บรรยายคนสามคนโดยใช้สรรพนามและคำอธิบาย",
            [LanguageCode.FRENCH]: "บรรยายคนสามคนโดยใช้สรรพนามและคำอธิบาย",
            [LanguageCode.PORTUGUESE]: "บรรยายคนสามคนโดยใช้สรรพนามและคำอธิบาย",
            [LanguageCode.MANDARIN]: "บรรยายคนสามคนโดยใช้สรรพนามและคำอธิบาย",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe three people using pronouns and descriptors. Include their nationality (e.g., คนไทย, คนฝรั่ง) and use different pronouns (เขา, เธอ, etc.).",
            [LanguageCode.FRENCH]: "Décrivez trois personnes en utilisant des pronoms et des descripteurs. Incluez leur nationalité (par ex., คนไทย, คนฝรั่ง) et utilisez différents pronoms (เขา, เธอ, etc.).",
            [LanguageCode.PORTUGUESE]: "Descreva três pessoas usando pronomes e descritores. Inclua sua nacionalidade (por exemplo, คนไทย, คนฝรั่ง) e use diferentes pronomes (เขา, เธอ, etc.).",
            [LanguageCode.MANDARIN]: "使用代詞和描述詞描述三個人。包括他們的國籍（例如，คนไทย、คนฝรั่ง）並使用不同的代詞（เขา、เธอ 等）。",
        },
        speakingType: 'open-ended'
    }
};

