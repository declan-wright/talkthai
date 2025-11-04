import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_3: Lesson = {
    id: "1.3",
    title: {
        [LanguageCode.ENGLISH]: "Thai Time System Part 1",
        [LanguageCode.FRENCH]: "Système horaire thaï",
        [LanguageCode.PORTUGUESE]: "Sistema de Horas Tailandês Parte 1",
        [LanguageCode.MANDARIN]: "泰國報時系統 (一)",
    },
    vocabulary: [
        { thai: "โมง", phonetic: "moong", translations: { [LanguageCode.ENGLISH]: "o'clock (daytime)", [LanguageCode.FRENCH]: "heures (journée)", [LanguageCode.PORTUGUESE]: "horas (dia)", [LanguageCode.MANDARIN]: "（白天）點" } },
        { thai: "ตี", phonetic: "dtii", translations: { [LanguageCode.ENGLISH]: "o'clock (1–5am)", [LanguageCode.FRENCH]: "heures (1–5h)", [LanguageCode.PORTUGUESE]: "horas (1–5h)", [LanguageCode.MANDARIN]: "凌晨（1–5點）" } },
        { thai: "ทุ่ม", phonetic: "thûm", translations: { [LanguageCode.ENGLISH]: "o'clock (7–11pm)", [LanguageCode.FRENCH]: "heures (19–23h)", [LanguageCode.PORTUGUESE]: "horas (19–23h)", [LanguageCode.MANDARIN]: "晚間（7–11點）" } },
        { thai: "เที่ยง", phonetic: "thîiang", translations: { [LanguageCode.ENGLISH]: "noon", [LanguageCode.FRENCH]: "midi", [LanguageCode.PORTUGUESE]: "meio-dia", [LanguageCode.MANDARIN]: "中午" } },
        { thai: "เที่ยงคืน", phonetic: "thîiang-kʉʉn", translations: { [LanguageCode.ENGLISH]: "midnight", [LanguageCode.FRENCH]: "minuit", [LanguageCode.PORTUGUESE]: "meia-noite", [LanguageCode.MANDARIN]: "午夜" } },
        { thai: "ครึ่ง", phonetic: "khrʉ̂ng", translations: { [LanguageCode.ENGLISH]: "half (30 min)", [LanguageCode.FRENCH]: "et demie", [LanguageCode.PORTUGUESE]: "e meia", [LanguageCode.MANDARIN]: "半" } },
        { thai: "ตรง", phonetic: "trong", translations: { [LanguageCode.ENGLISH]: "exactly (on the dot)", [LanguageCode.FRENCH]: "pile", [LanguageCode.PORTUGUESE]: "em ponto", [LanguageCode.MANDARIN]: "整" } },
        { thai: "เช้า", phonetic: "cháo", translations: { [LanguageCode.ENGLISH]: "morning", [LanguageCode.FRENCH]: "matin", [LanguageCode.PORTUGUESE]: "manhã", [LanguageCode.MANDARIN]: "早上" } },
        { thai: "สาย", phonetic: "săai", translations: { [LanguageCode.ENGLISH]: "late (in the morning)", [LanguageCode.FRENCH]: "tard (le matin)", [LanguageCode.PORTUGUESE]: "tarde (de manhã)", [LanguageCode.MANDARIN]: "（上午）晚" } },
        { thai: "บ่าย", phonetic: "bàai", translations: { [LanguageCode.ENGLISH]: "afternoon", [LanguageCode.FRENCH]: "après-midi", [LanguageCode.PORTUGUESE]: "tarde", [LanguageCode.MANDARIN]: "下午" } },
        { thai: "เย็น", phonetic: "yen", translations: { [LanguageCode.ENGLISH]: "evening", [LanguageCode.FRENCH]: "soir", [LanguageCode.PORTUGUESE]: "entardecer", [LanguageCode.MANDARIN]: "傍晚" } },
        { thai: "กลางคืน", phonetic: "glaang-kʉʉn", translations: { [LanguageCode.ENGLISH]: "night", [LanguageCode.FRENCH]: "nuit", [LanguageCode.PORTUGUESE]: "noite", [LanguageCode.MANDARIN]: "夜晚" } },
        { thai: "นาที", phonetic: "naa-thii", translations: { [LanguageCode.ENGLISH]: "minute", [LanguageCode.FRENCH]: "minute", [LanguageCode.PORTUGUESE]: "minuto", [LanguageCode.MANDARIN]: "分鐘" } },
        { thai: "ชั่วโมง", phonetic: "chûa-moong", translations: { [LanguageCode.ENGLISH]: "hour", [LanguageCode.FRENCH]: "heure", [LanguageCode.PORTUGUESE]: "hora", [LanguageCode.MANDARIN]: "小時" } },
        { thai: "ตอนนี้", phonetic: "dtaawn-níi", translations: { [LanguageCode.ENGLISH]: "right now", [LanguageCode.FRENCH]: "maintenant", [LanguageCode.PORTUGUESE]: "agora", [LanguageCode.MANDARIN]: "現在" } },
        { thai: "เดี๋ยวนี้", phonetic: "dǐao-níi", translations: { [LanguageCode.ENGLISH]: "right now (immediately)", [LanguageCode.FRENCH]: "tout de suite", [LanguageCode.PORTUGUESE]: "agora mesmo", [LanguageCode.MANDARIN]: "立刻、現在就" } },
        { thai: "เวลา", phonetic: "wee-laa", translations: { [LanguageCode.ENGLISH]: "time", [LanguageCode.FRENCH]: "temps", [LanguageCode.PORTUGUESE]: "tempo", [LanguageCode.MANDARIN]: "時間" } },
        { thai: "นาฬิกา", phonetic: "naa-lí-gaa", translations: { [LanguageCode.ENGLISH]: "clock", [LanguageCode.FRENCH]: "horloge", [LanguageCode.PORTUGUESE]: "relógio (parede)", [LanguageCode.MANDARIN]: "鐘" } },
        { thai: "นาฬิกาข้อมือ", phonetic: "naa-lí-gaa khâw-mʉʉ", translations: { [LanguageCode.ENGLISH]: "watch", [LanguageCode.FRENCH]: "montre", [LanguageCode.PORTUGUESE]: "relógio (pulso)", [LanguageCode.MANDARIN]: "手錶" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Understanding Thai Time: The Three Systems",
                [LanguageCode.FRENCH]: "Comprendre l'heure thaïe : Les trois systèmes",
                [LanguageCode.PORTUGUESE]: "Entendendo o Horário Tailandês: Os Três Sistemas",
                [LanguageCode.MANDARIN]: "理解泰語時間：三個系統",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai divides the 24-hour day into three distinct time periods, each with its own word. This might seem complicated at first, but it's actually quite logical once you understand the pattern.\n\n**THE THREE TIME PERIODS:**\n\n**1. ตี (dtii) - Early Morning Hours (1:00 AM - 5:00 AM)**\nThese are the quiet, dark hours of early morning before sunrise.\n\nHow to say it: ตี + number\n• 1:00 AM = ตีหนึ่ง (dtii neung) - literally \"strike one\"\n• 2:00 AM = ตีสอง (dtii sɔ̌ɔng)\n• 3:00 AM = ตีสาม (dtii săam)\n• 4:00 AM = ตีสี่ (dtii sìi)\n• 5:00 AM = ตีห้า (dtii hâa)\n\n**2. โมง (moong) - Daytime Hours (6:00 AM - 6:00 PM)**\nThis covers most of your waking day, from morning through afternoon to early evening.\n\nHow to say it: number + โมง\n• 6:00 AM = หกโมง (hòk moong)\n• 7:00 AM = เจ็ดโมง (jèt moong)\n• 8:00 AM = แปดโมง (bpàet moong)\n• 9:00 AM = เก้าโมง (gâo moong)\n• 10:00 AM = สิบโมง (sìp moong)\n• 11:00 AM = สิบเอ็ดโมง (sìp-èt moong)\n• 12:00 NOON = เที่ยง (thîiang) - special word!\n• 1:00 PM = บ่ายโมง (bàai moong) - literally \"afternoon one o'clock\"\n• 2:00 PM = บ่ายสองโมง (bàai sɔ̌ɔng moong)\n• 3:00 PM = บ่ายสามโมง (bàai săam moong)\n• 4:00 PM = บ่ายสี่โมง (bàai sìi moong)\n• 5:00 PM = บ่ายห้าโมง (bàai hâa moong)\n• 6:00 PM = หกโมงเย็น (hòk moong yen)\n\nNote: For afternoon/evening clarity, you can add เช้า (cháo, morning), บ่าย (bàai, afternoon), or เย็น (yen, evening).\n\n**3. ทุ่ม (thûm) - Night Hours (7:00 PM - 11:00 PM)**\nThese are the evening/night hours before midnight.\n\nHow to say it: number + ทุ่ม (counting from 1)\n• 7:00 PM = หนึ่งทุ่ม (neung thûm) - literally \"one thum\" (= 19:00)\n• 8:00 PM = สองทุ่ม (sɔ̌ɔng thûm) (= 20:00)\n• 9:00 PM = สามทุ่ม (săam thûm) (= 21:00)\n• 10:00 PM = สี่ทุ่ม (sìi thûm) (= 22:00)\n• 11:00 PM = ห้าทุ่ม (hâa thûm) (= 23:00)\n• 12:00 MIDNIGHT = เที่ยงคืน (thîiang-kʉʉn) - special word!\n\n**IMPORTANT NOTE about ทุ่ม (thûm):**\nThe numbers RESTART at 1 for the evening period! So 7:00 PM is \"one thûm\" (หนึ่งทุ่ม), not \"seven thûm\".\n\n**HISTORICAL CONTEXT:**\nThe word ทุ่ม (thûm) comes from the traditional practice of striking a gong (ตีกลอง) to announce the hours during the night. Similarly, ตี (dtii) means \"to strike,\" referring to striking a drum or gong in the early morning hours to wake people up.\n\n**ADDING MINUTES:**\n• ครึ่ง (khrʉ̂ng) = half, 30 minutes\n• ตรง (trong) = exactly, on the dot\n\nExamples:\n• 7:30 AM = เจ็ดโมงครึ่ง (jèt moong khrʉ̂ng)\n• 8:00 PM exactly = สองทุ่มตรง (sɔ̌ɔng thûm trong)\n• 3:30 AM = ตีสามครึ่ง (dtii săam khrʉ̂ng)\n\n**QUICK REFERENCE CHART:**\n1-5 AM: ตี + number (dtii system)\n6 AM-6 PM: number + โมง (moong system)\n7-11 PM: number (1-5) + ทุ่ม (thûm system)\n\nRemember: The numbers restart for each period! This is the key to understanding Thai time.",
                [LanguageCode.FRENCH]: "Le thaï divise la journée de 24 heures en trois périodes distinctes, chacune avec son propre mot. Cela peut sembler compliqué au début, mais c'est en fait assez logique une fois que vous comprenez le modèle.\n\n**LES TROIS PÉRIODES DE TEMPS:**\n\n**1. ตี (dtii) - Heures du petit matin (1h00 - 5h00)**\nCe sont les heures calmes et sombres du petit matin avant le lever du soleil.\n\nComment le dire : ตี + numéro\n• 1h00 = ตีหนึ่ง (dtii neung)\n• 2h00 = ตีสอง (dtii sɔ̌ɔng)\n• 3h00 = ตีสาม (dtii săam)\n• 4h00 = ตีสี่ (dtii sìi)\n• 5h00 = ตีห้า (dtii hâa)\n\n**2. โมง (moong) - Heures de jour (6h00 - 18h00)**\nCela couvre la majeure partie de votre journée éveillée.\n\nComment le dire : numéro + โมง\n• 6h00 = หกโมง (hòk moong)\n• 7h00 = เจ็ดโมง (jèt moong)\n• 12h00 MIDI = เที่ยง (thîiang)\n• 13h00 = บ่ายโมง (bàai moong)\n• 14h00 = บ่ายสองโมง (bàai sɔ̌ɔng moong)\n• 18h00 = หกโมงเย็น (hòk moong yen)\n\n**3. ทุ่ม (thûm) - Heures de nuit (19h00 - 23h00)**\nCe sont les heures du soir/nuit avant minuit.\n\nComment le dire : numéro + ทุ่ม (en comptant à partir de 1)\n• 19h00 = หนึ่งทุ่ม (neung thûm)\n• 20h00 = สองทุ่ม (sɔ̌ɔng thûm)\n• 21h00 = สามทุ่ม (săam thûm)\n• 22h00 = สี่ทุ่ม (sìi thûm)\n• 23h00 = ห้าทุ่ม (hâa thûm)\n• 00h00 MINUIT = เที่ยงคืน (thîiang-kʉʉn)\n\nLes numéros RECOMMENCENT à 1 pour la période du soir!\n\n**CONTEXTE HISTORIQUE:**\nLe mot ทุ่ม (thûm) vient de la pratique traditionnelle de frapper un gong pour annoncer les heures pendant la nuit. De même, ตี (dtii) signifie \"frapper\".\n\n**AJOUTER DES MINUTES:**\n• ครึ่ง (khrʉ̂ng) = et demie\n• ตรง (trong) = pile",
                [LanguageCode.PORTUGUESE]: "O tailandês divide o dia de 24 horas em três períodos distintos, cada um com sua própria palavra. Isso pode parecer complicado no início, mas é bastante lógico depois que você entende o padrão.\n\n**OS TRÊS PERÍODOS DE TEMPO:**\n\n**1. ตี (dtii) - Horas da Madrugada (1:00 - 5:00)**\nEstas são as horas silenciosas e escuras da madrugada antes do nascer do sol.\n\nComo dizer: ตี + número\n• 1:00 = ตีหนึ่ง (dtii neung)\n• 2:00 = ตีสอง (dtii sɔ̌ɔng)\n• 3:00 = ตีสาม (dtii săam)\n• 4:00 = ตีสี่ (dtii sìi)\n• 5:00 = ตีห้า (dtii hâa)\n\n**2. โมง (moong) - Horas do Dia (6:00 - 18:00)**\nIsso cobre a maior parte do seu dia acordado.\n\nComo dizer: número + โมง\n• 6:00 = หกโมง (hòk moong)\n• 7:00 = เจ็ดโมง (jèt moong)\n• 12:00 MEIO-DIA = เที่ยง (thîiang)\n• 13:00 = บ่ายโมง (bàai moong)\n• 14:00 = บ่ายสองโมง (bàai sɔ̌ɔng moong)\n• 18:00 = หกโมงเย็น (hòk moong yen)\n\n**3. ทุ่ม (thûm) - Horas da Noite (19:00 - 23:00)**\nEstas são as horas da noite antes da meia-noite.\n\nComo dizer: número + ทุ่ม (contando a partir de 1)\n• 19:00 = หนึ่งทุ่ม (neung thûm)\n• 20:00 = สองทุ่ม (sɔ̌ɔng thûm)\n• 21:00 = สามทุ่ม (săam thûm)\n• 22:00 = สี่ทุ่ม (sìi thûm)\n• 23:00 = ห้าทุ่ม (hâa thûm)\n• 00:00 MEIA-NOITE = เที่ยงคืน (thîiang-kʉʉn)\n\nOs números RECOMEÇAM em 1 para o período noturno!\n\n**CONTEXTO HISTÓRICO:**\nA palavra ทุ่ม (thûm) vem da prática tradicional de bater um gongo para anunciar as horas durante a noite. Da mesma forma, ตี (dtii) significa \"bater\".\n\n**ADICIONANDO MINUTOS:**\n• ครึ่ง (khrʉ̂ng) = e meia\n• ตรง (trong) = em ponto",
                [LanguageCode.MANDARIN]: "泰語將24小時的一天分為三個不同的時間段，每個都有自己的詞。這一開始可能看起來很複雜，但一旦理解了模式，實際上是相當合邏輯的。\n\n**三個時間段：**\n\n**1. ตี (dtii) - 清晨時段（凌晨1點 - 5點）**\n這些是日出前安靜黑暗的清晨時分。\n\n如何說：ตี + 數字\n• 1:00 = ตีหนึ่ง (dtii neung)\n• 2:00 = ตีสอง (dtii sɔ̌ɔng)\n• 3:00 = ตีสาม (dtii săam)\n• 4:00 = ตีสี่ (dtii sìi)\n• 5:00 = ตีห้า (dtii hâa)\n\n**2. โมง (moong) - 白天時段（早上6點 - 晚上6點）**\n這涵蓋了你大部分清醒的時間。\n\n如何說：數字 + โมง\n• 6:00 = หกโมง (hòk moong)\n• 7:00 = เจ็ดโมง (jèt moong)\n• 12:00 中午 = เที่ยง (thîiang)\n• 13:00 = บ่ายโมง (bàai moong)\n• 14:00 = บ่ายสองโมง (bàai sɔ̌ɔng moong)\n• 18:00 = หกโมงเย็น (hòk moong yen)\n\n**3. ทุ่ม (thûm) - 夜晚時段（晚上7點 - 11點）**\n這些是午夜前的晚上時間。\n\n如何說：數字 + ทุ่ม（從1開始計數）\n• 19:00 = หนึ่งทุ่ม (neung thûm)\n• 20:00 = สองทุ่ม (sɔ̌ɔng thûm)\n• 21:00 = สามทุ่ม (săam thûm)\n• 22:00 = สี่ทุ่ม (sìi thûm)\n• 23:00 = ห้าทุ่ม (hâa thûm)\n• 00:00 午夜 = เที่ยงคืน (thîiang-kʉʉn)\n\n數字在晚上時段重新從1開始！\n\n**歷史背景：**\nทุ่ม (thûm) 這個詞來自傳統上在夜間敲鑼報時的做法。同樣，ตี (dtii) 意思是「敲打」。\n\n**添加分鐘：**\n• ครึ่ง (khrʉ̂ng) = 半點\n• ตรง (trong) = 整點",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match 24h times to Thai expressions.",
                [LanguageCode.FRENCH]: "Faites correspondre les heures 24h aux expressions thaïes.",
                [LanguageCode.PORTUGUESE]: "Relacione horários 24h às expressões em tailandês.",
                [LanguageCode.MANDARIN]: "配對 24 小時制與泰語說法。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "06:00", [LanguageCode.FRENCH]: "06:00", [LanguageCode.PORTUGUESE]: "06:00", [LanguageCode.MANDARIN]: "06:00" }, answer: { [LanguageCode.ENGLISH]: "หกโมงเช้า", [LanguageCode.FRENCH]: "หกโมงเช้า", [LanguageCode.PORTUGUESE]: "หกโมงเช้า", [LanguageCode.MANDARIN]: "หกโมงเช้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "13:30", [LanguageCode.FRENCH]: "13:30", [LanguageCode.PORTUGUESE]: "13:30", [LanguageCode.MANDARIN]: "13:30" }, answer: { [LanguageCode.ENGLISH]: "บ่ายโมงครึ่ง", [LanguageCode.FRENCH]: "บ่ายโมงครึ่ง", [LanguageCode.PORTUGUESE]: "บ่ายโมงครึ่ง", [LanguageCode.MANDARIN]: "บ่ายโมงครึ่ง" } },
                { prompt: { [LanguageCode.ENGLISH]: "22:00", [LanguageCode.FRENCH]: "22:00", [LanguageCode.PORTUGUESE]: "22:00", [LanguageCode.MANDARIN]: "22:00" }, answer: { [LanguageCode.ENGLISH]: "สี่ทุ่มตรง", [LanguageCode.FRENCH]: "สี่ทุ่มตรง", [LanguageCode.PORTUGUESE]: "สี่ทุ่มตรง", [LanguageCode.MANDARIN]: "สี่ทุ่มตรง" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the Thai time phrase.",
                [LanguageCode.FRENCH]: "Complétez l'expression de l'heure en thaï.",
                [LanguageCode.PORTUGUESE]: "Complete a expressão de hora em tailandês.",
                [LanguageCode.MANDARIN]: "填入泰語報時說法。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "12:00 = ", [LanguageCode.FRENCH]: "12:00 = ", [LanguageCode.PORTUGUESE]: "12:00 = ", [LanguageCode.MANDARIN]: "12:00 = " }, correctAnswer: "เที่ยง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "00:00 = ", [LanguageCode.FRENCH]: "00:00 = ", [LanguageCode.PORTUGUESE]: "00:00 = ", [LanguageCode.MANDARIN]: "00:00 = " }, correctAnswer: "เที่ยงคืน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "07:30 = ", [LanguageCode.FRENCH]: "07:30 = ", [LanguageCode.PORTUGUESE]: "07:30 = ", [LanguageCode.MANDARIN]: "07:30 = " }, correctAnswer: "เจ็ดโมงเช้าครึ่ง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "18:00 = ", [LanguageCode.FRENCH]: "18:00 = ", [LanguageCode.PORTUGUESE]: "18:00 = ", [LanguageCode.MANDARIN]: "18:00 = " }, correctAnswer: "หกโมงเย็น", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "03:00 = ", [LanguageCode.FRENCH]: "03:00 = ", [LanguageCode.PORTUGUESE]: "03:00 = ", [LanguageCode.MANDARIN]: "03:00 = " }, correctAnswer: "ตีสาม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Order the Thai time phrase.",
                [LanguageCode.FRENCH]: "Mettez en ordre l'expression de l'heure.",
                [LanguageCode.PORTUGUESE]: "Ordene a expressão de hora.",
                [LanguageCode.MANDARIN]: "將泰語報時詞序排好。",
            },
            sentences: [
                { correctOrder: ["บ่าย", "สอง", "โมง", "ครึ่ง"], hint: { [LanguageCode.ENGLISH]: "2:30 PM", [LanguageCode.FRENCH]: "14h30", [LanguageCode.PORTUGUESE]: "14:30", [LanguageCode.MANDARIN]: "下午2:30" } },
                { correctOrder: ["สี่", "ทุ่ม", "ตรง"], hint: { [LanguageCode.ENGLISH]: "10:00 PM sharp", [LanguageCode.FRENCH]: "22h pile", [LanguageCode.PORTUGUESE]: "22:00 em ponto", [LanguageCode.MANDARIN]: "晚上10點整" } },
                { correctOrder: ["ตอนนี้", "กี่", "โมง"], hint: { [LanguageCode.ENGLISH]: "What time is it now?", [LanguageCode.FRENCH]: "Il est quelle heure maintenant ?", [LanguageCode.PORTUGUESE]: "Que horas são agora?", [LanguageCode.MANDARIN]: "現在幾點？" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct Thai time.",
                [LanguageCode.FRENCH]: "Choisissez la bonne heure en thaï.",
                [LanguageCode.PORTUGUESE]: "Escolha a hora correta em tailandês.",
                [LanguageCode.MANDARIN]: "選擇正確的泰語報時。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "03:00", [LanguageCode.FRENCH]: "03:00", [LanguageCode.PORTUGUESE]: "03:00", [LanguageCode.MANDARIN]: "03:00" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ตีสาม", [LanguageCode.FRENCH]: "ตีสาม", [LanguageCode.PORTUGUESE]: "ตีสาม", [LanguageCode.MANDARIN]: "ตีสาม" },
                        { [LanguageCode.ENGLISH]: "สามโมงเช้า", [LanguageCode.FRENCH]: "สามโมงเช้า", [LanguageCode.PORTUGUESE]: "สามโมงเช้า", [LanguageCode.MANDARIN]: "สามโมงเช้า" },
                        { [LanguageCode.ENGLISH]: "สามทุ่ม", [LanguageCode.FRENCH]: "สามทุ่ม", [LanguageCode.PORTUGUESE]: "สามทุ่ม", [LanguageCode.MANDARIN]: "สามทุ่ม" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match time to activities.",
                [LanguageCode.FRENCH]: "Associez l'heure aux activités.",
                [LanguageCode.PORTUGUESE]: "Relacione horas a atividades.",
                [LanguageCode.MANDARIN]: "配對時間與活動。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Wake up", [LanguageCode.FRENCH]: "Se réveiller", [LanguageCode.PORTUGUESE]: "Acordar", [LanguageCode.MANDARIN]: "起床" }, answer: { [LanguageCode.ENGLISH]: "หกโมงเช้า", [LanguageCode.FRENCH]: "หกโมงเช้า", [LanguageCode.PORTUGUESE]: "หกโมงเช้า", [LanguageCode.MANDARIN]: "หกโมงเช้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "Have lunch", [LanguageCode.FRENCH]: "Déjeuner", [LanguageCode.PORTUGUESE]: "Almoçar", [LanguageCode.MANDARIN]: "吃午飯" }, answer: { [LanguageCode.ENGLISH]: "เที่ยง", [LanguageCode.FRENCH]: "เที่ยง", [LanguageCode.PORTUGUESE]: "เที่ยง", [LanguageCode.MANDARIN]: "เที่ยง" } },
                { prompt: { [LanguageCode.ENGLISH]: "Sleep", [LanguageCode.FRENCH]: "Dormir", [LanguageCode.PORTUGUESE]: "Dormir", [LanguageCode.MANDARIN]: "睡覺" }, answer: { [LanguageCode.ENGLISH]: "สี่ทุ่ม", [LanguageCode.FRENCH]: "สี่ทุ่ม", [LanguageCode.PORTUGUESE]: "สี่ทุ่ม", [LanguageCode.MANDARIN]: "สี่ทุ่ม" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Convert more times to Thai.",
                [LanguageCode.FRENCH]: "Convertissez plus d'heures en thaï.",
                [LanguageCode.PORTUGUESE]: "Converta mais horários para tailandês.",
                [LanguageCode.MANDARIN]: "將更多時間轉換成泰語。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "01:00 = ", [LanguageCode.FRENCH]: "01:00 = ", [LanguageCode.PORTUGUESE]: "01:00 = ", [LanguageCode.MANDARIN]: "01:00 = " }, correctAnswer: "ตีหนึ่ง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "08:00 = ", [LanguageCode.FRENCH]: "08:00 = ", [LanguageCode.PORTUGUESE]: "08:00 = ", [LanguageCode.MANDARIN]: "08:00 = " }, correctAnswer: "แปดโมงเช้า", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "14:00 = ", [LanguageCode.FRENCH]: "14:00 = ", [LanguageCode.PORTUGUESE]: "14:00 = ", [LanguageCode.MANDARIN]: "14:00 = " }, correctAnswer: "บ่ายสองโมง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "19:00 = ", [LanguageCode.FRENCH]: "19:00 = ", [LanguageCode.PORTUGUESE]: "19:00 = ", [LanguageCode.MANDARIN]: "19:00 = " }, correctAnswer: "หนึ่งทุ่ม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "23:00 = ", [LanguageCode.FRENCH]: "23:00 = ", [LanguageCode.PORTUGUESE]: "23:00 = ", [LanguageCode.MANDARIN]: "23:00 = " }, correctAnswer: "ห้าทุ่ม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Identify the correct time period word.",
                [LanguageCode.FRENCH]: "Identifiez le bon mot de période de temps.",
                [LanguageCode.PORTUGUESE]: "Identifique a palavra correta do período de tempo.",
                [LanguageCode.MANDARIN]: "識別正確的時間段詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Which word is used for 4:00 AM?", [LanguageCode.FRENCH]: "Quel mot utilise-t-on pour 4h00 ?", [LanguageCode.PORTUGUESE]: "Qual palavra é usada para 4:00 da manhã?", [LanguageCode.MANDARIN]: "凌晨4點用哪個詞？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ตี", [LanguageCode.FRENCH]: "ตี", [LanguageCode.PORTUGUESE]: "ตี", [LanguageCode.MANDARIN]: "ตี" },
                        { [LanguageCode.ENGLISH]: "โมง", [LanguageCode.FRENCH]: "โมง", [LanguageCode.PORTUGUESE]: "โมง", [LanguageCode.MANDARIN]: "โมง" },
                        { [LanguageCode.ENGLISH]: "ทุ่ม", [LanguageCode.FRENCH]: "ทุ่ม", [LanguageCode.PORTUGUESE]: "ทุ่ม", [LanguageCode.MANDARIN]: "ทุ่ม" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Which word is used for 9:00 PM?", [LanguageCode.FRENCH]: "Quel mot utilise-t-on pour 21h00 ?", [LanguageCode.PORTUGUESE]: "Qual palavra é usada para 21:00?", [LanguageCode.MANDARIN]: "晚上9點用哪個詞？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ตี", [LanguageCode.FRENCH]: "ตี", [LanguageCode.PORTUGUESE]: "ตี", [LanguageCode.MANDARIN]: "ตี" },
                        { [LanguageCode.ENGLISH]: "โมง", [LanguageCode.FRENCH]: "โมง", [LanguageCode.PORTUGUESE]: "โมง", [LanguageCode.MANDARIN]: "โมง" },
                        { [LanguageCode.ENGLISH]: "ทุ่ม", [LanguageCode.FRENCH]: "ทุ่ม", [LanguageCode.PORTUGUESE]: "ทุ่ม", [LanguageCode.MANDARIN]: "ทุ่ม" },
                    ],
                    correctIndex: 2
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the sentence with the time in Thai.",
                [LanguageCode.FRENCH]: "Complétez la phrase avec l'heure en thaï.",
                [LanguageCode.PORTUGUESE]: "Complete a frase com o horário em tailandês.",
                [LanguageCode.MANDARIN]: "用泰語時間完成句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผมตื่นตอน___", [LanguageCode.FRENCH]: "Je me réveille à ___", [LanguageCode.PORTUGUESE]: "Eu acordo às ___", [LanguageCode.MANDARIN]: "我___起床" }, correctAnswer: "หกโมงเช้า", end: { [LanguageCode.ENGLISH]: " (6:00 AM)", [LanguageCode.FRENCH]: " (6h00)", [LanguageCode.PORTUGUESE]: " (6:00)", [LanguageCode.MANDARIN]: "（早上6點）" } },
                { start: { [LanguageCode.ENGLISH]: "เราทำงานถึง___", [LanguageCode.FRENCH]: "Nous travaillons jusqu'à ___", [LanguageCode.PORTUGUESE]: "Trabalhamos até ___", [LanguageCode.MANDARIN]: "我們工作到___" }, correctAnswer: "หกโมงเย็น", end: { [LanguageCode.ENGLISH]: " (6:00 PM)", [LanguageCode.FRENCH]: " (18h00)", [LanguageCode.PORTUGUESE]: " (18:00)", [LanguageCode.MANDARIN]: "（晚上6點）" } },
                { start: { [LanguageCode.ENGLISH]: "เขากลับบ้านตอน___", [LanguageCode.FRENCH]: "Il/Elle rentre à ___", [LanguageCode.PORTUGUESE]: "Ele/Ela volta para casa às ___", [LanguageCode.MANDARIN]: "他/她___回家" }, correctAnswer: "สามทุ่ม", end: { [LanguageCode.ENGLISH]: " (9:00 PM)", [LanguageCode.FRENCH]: " (21h00)", [LanguageCode.PORTUGUESE]: " (21:00)", [LanguageCode.MANDARIN]: "（晚上9點）" } },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What time is it now?", [LanguageCode.FRENCH]: "Il est quelle heure maintenant ?", [LanguageCode.PORTUGUESE]: "Que horas são agora?", [LanguageCode.MANDARIN]: "現在幾點？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "It's two thirty in the afternoon.", [LanguageCode.FRENCH]: "Il est quatorze heures trente.", [LanguageCode.PORTUGUESE]: "São duas e meia da tarde.", [LanguageCode.MANDARIN]: "下午兩點半。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What time was said?", [LanguageCode.FRENCH]: "Quelle heure a été dite ?", [LanguageCode.PORTUGUESE]: "Que horas foram ditas?", [LanguageCode.MANDARIN]: "說的是幾點？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "2:30 PM", [LanguageCode.FRENCH]: "14h30", [LanguageCode.PORTUGUESE]: "14:30", [LanguageCode.MANDARIN]: "下午2:30" },
                        { [LanguageCode.ENGLISH]: "10:30 PM", [LanguageCode.FRENCH]: "22h30", [LanguageCode.PORTUGUESE]: "22:30", [LanguageCode.MANDARIN]: "晚上10:30" },
                        { [LanguageCode.ENGLISH]: "2:00 PM", [LanguageCode.FRENCH]: "14h00", [LanguageCode.PORTUGUESE]: "14:00", [LanguageCode.MANDARIN]: "下午2:00" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บอกเวลา 3 เวลาในหนึ่งวันของคุณ",
            [LanguageCode.FRENCH]: "บอกเวลา 3 เวลาในหนึ่งวันของคุณ",
            [LanguageCode.PORTUGUESE]: "บอกเวลา 3 เวลาในหนึ่งวันของคุณ",
            [LanguageCode.MANDARIN]: "บอกเวลา 3 เวลาในหนึ่งวันของคุณ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Say the current time and three daily activity times.",
            [LanguageCode.FRENCH]: "Dis l'heure actuelle et trois horaires d'activités.",
            [LanguageCode.PORTUGUESE]: "Diga a hora atual e três horários do seu dia.",
            [LanguageCode.MANDARIN]: "說出現在時間與三個日常活動時間。",
        }
    }
};


