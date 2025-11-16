import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_2_0: Lesson = {
    id: "2.0",
    title: {
        [LanguageCode.ENGLISH]: "Extended Verb Set",
        [LanguageCode.FRENCH]: "Verbes étendus",
        [LanguageCode.PORTUGUESE]: "Conjunto Estendido de Verbos",
        [LanguageCode.MANDARIN]: "擴展動詞集",
    },
    vocabulary: [
        // Essential daily action verbs NOT covered in 1.4 and 1.6
        { thai: "ล้าง", phonetic: "láang", translations: { [LanguageCode.ENGLISH]: "wash", [LanguageCode.FRENCH]: "laver", [LanguageCode.PORTUGUESE]: "lavar", [LanguageCode.MANDARIN]: "洗" } },
        { thai: "อาบ", phonetic: "àap", translations: { [LanguageCode.ENGLISH]: "bathe/shower", [LanguageCode.FRENCH]: "se baigner/se doucher", [LanguageCode.PORTUGUESE]: "tomar banho", [LanguageCode.MANDARIN]: "洗澡" } },
        { thai: "แต่งตัว", phonetic: "dtɛ̀ng-dtuua", translations: { [LanguageCode.ENGLISH]: "get dressed", [LanguageCode.FRENCH]: "s'habiller", [LanguageCode.PORTUGUESE]: "vestir-se", [LanguageCode.MANDARIN]: "穿衣" } },
        { thai: "ใส่", phonetic: "sài", translations: { [LanguageCode.ENGLISH]: "wear/put on", [LanguageCode.FRENCH]: "porter/mettre", [LanguageCode.PORTUGUESE]: "vestir/colocar", [LanguageCode.MANDARIN]: "穿/戴" } },
        { thai: "ถอด", phonetic: "thɔ̀ɔt", translations: { [LanguageCode.ENGLISH]: "take off (clothes)", [LanguageCode.FRENCH]: "enlever (vêtements)", [LanguageCode.PORTUGUESE]: "tirar (roupa)", [LanguageCode.MANDARIN]: "脫" } },
        { thai: "ดื่ม", phonetic: "dʉ̀ʉm", translations: { [LanguageCode.ENGLISH]: "drink", [LanguageCode.FRENCH]: "boire", [LanguageCode.PORTUGUESE]: "beber", [LanguageCode.MANDARIN]: "喝" } },
        { thai: "ทำอาหาร", phonetic: "tham-aa-hǎan", translations: { [LanguageCode.ENGLISH]: "cook", [LanguageCode.FRENCH]: "cuisiner", [LanguageCode.PORTUGUESE]: "cozinhar", [LanguageCode.MANDARIN]: "做飯" } },
        { thai: "กินข้าว", phonetic: "gin-khâao", translations: { [LanguageCode.ENGLISH]: "eat (a meal)", [LanguageCode.FRENCH]: "manger (un repas)", [LanguageCode.PORTUGUESE]: "comer (refeição)", [LanguageCode.MANDARIN]: "吃飯" } },
        { thai: "แปรงฟัน", phonetic: "bprɛɛng-fan", translations: { [LanguageCode.ENGLISH]: "brush teeth", [LanguageCode.FRENCH]: "se brosser les dents", [LanguageCode.PORTUGUESE]: "escovar os dentes", [LanguageCode.MANDARIN]: "刷牙" } },
        { thai: "สระผม", phonetic: "sà-phǒm", translations: { [LanguageCode.ENGLISH]: "wash hair", [LanguageCode.FRENCH]: "se laver les cheveux", [LanguageCode.PORTUGUESE]: "lavar o cabelo", [LanguageCode.MANDARIN]: "洗頭" } },
        { thai: "หวี", phonetic: "wǐi", translations: { [LanguageCode.ENGLISH]: "comb", [LanguageCode.FRENCH]: "peigner", [LanguageCode.PORTUGUESE]: "pentear", [LanguageCode.MANDARIN]: "梳頭" } },
        { thai: "แต่งหน้า", phonetic: "dtɛ̀ng-nâa", translations: { [LanguageCode.ENGLISH]: "put on makeup", [LanguageCode.FRENCH]: "se maquiller", [LanguageCode.PORTUGUESE]: "maquiar-se", [LanguageCode.MANDARIN]: "化妝" } },
        { thai: "ขับ", phonetic: "khàp", translations: { [LanguageCode.ENGLISH]: "drive", [LanguageCode.FRENCH]: "conduire", [LanguageCode.PORTUGUESE]: "dirigir", [LanguageCode.MANDARIN]: "開車" } },
        { thai: "ขี่", phonetic: "khìi", translations: { [LanguageCode.ENGLISH]: "ride (vehicle/animal)", [LanguageCode.FRENCH]: "monter (véhicule/animal)", [LanguageCode.PORTUGUESE]: "andar (veículo/animal)", [LanguageCode.MANDARIN]: "騎" } },
        { thai: "เดินทาง", phonetic: "dəən-thaang", translations: { [LanguageCode.ENGLISH]: "travel", [LanguageCode.FRENCH]: "voyager", [LanguageCode.PORTUGUESE]: "viajar", [LanguageCode.MANDARIN]: "旅行" } },
        { thai: "ส่ง", phonetic: "sòng", translations: { [LanguageCode.ENGLISH]: "send", [LanguageCode.FRENCH]: "envoyer", [LanguageCode.PORTUGUESE]: "enviar", [LanguageCode.MANDARIN]: "送" } },
        { thai: "รับ", phonetic: "ráp", translations: { [LanguageCode.ENGLISH]: "receive/pick up", [LanguageCode.FRENCH]: "recevoir/chercher", [LanguageCode.PORTUGUESE]: "receber/buscar", [LanguageCode.MANDARIN]: "收/接" } },
        { thai: "โทร", phonetic: "thoo", translations: { [LanguageCode.ENGLISH]: "call (phone)", [LanguageCode.FRENCH]: "appeler (téléphone)", [LanguageCode.PORTUGUESE]: "ligar (telefone)", [LanguageCode.MANDARIN]: "打電話" } },
        { thai: "แชท", phonetic: "chɛ́t", translations: { [LanguageCode.ENGLISH]: "chat/text", [LanguageCode.FRENCH]: "tchatter/envoyer un message", [LanguageCode.PORTUGUESE]: "conversar/enviar mensagem", [LanguageCode.MANDARIN]: "聊天" } },
        { thai: "โพสต์", phonetic: "phôot", translations: { [LanguageCode.ENGLISH]: "post (social media)", [LanguageCode.FRENCH]: "poster (réseaux sociaux)", [LanguageCode.PORTUGUESE]: "postar (redes sociais)", [LanguageCode.MANDARIN]: "發帖" } },
        { thai: "ถ่ายรูป", phonetic: "thàai-rûup", translations: { [LanguageCode.ENGLISH]: "take photos", [LanguageCode.FRENCH]: "prendre des photos", [LanguageCode.PORTUGUESE]: "tirar fotos", [LanguageCode.MANDARIN]: "拍照" } },
        { thai: "ดาวน์โหลด", phonetic: "daao-lôot", translations: { [LanguageCode.ENGLISH]: "download", [LanguageCode.FRENCH]: "télécharger", [LanguageCode.PORTUGUESE]: "baixar", [LanguageCode.MANDARIN]: "下載" } },
        { thai: "อัพโหลด", phonetic: "áp-lôot", translations: { [LanguageCode.ENGLISH]: "upload", [LanguageCode.FRENCH]: "téléverser", [LanguageCode.PORTUGUESE]: "fazer upload", [LanguageCode.MANDARIN]: "上傳" } },
        { thai: "จอง", phonetic: "jɔɔng", translations: { [LanguageCode.ENGLISH]: "book/reserve", [LanguageCode.FRENCH]: "réserver", [LanguageCode.PORTUGUESE]: "reservar", [LanguageCode.MANDARIN]: "預訂" } },
        { thai: "จ่าย", phonetic: "jàai", translations: { [LanguageCode.ENGLISH]: "pay", [LanguageCode.FRENCH]: "payer", [LanguageCode.PORTUGUESE]: "pagar", [LanguageCode.MANDARIN]: "付款" } },
        { thai: "ขาย", phonetic: "khǎai", translations: { [LanguageCode.ENGLISH]: "sell", [LanguageCode.FRENCH]: "vendre", [LanguageCode.PORTUGUESE]: "vender", [LanguageCode.MANDARIN]: "賣" } },
        { thai: "ออกกำลังกาย", phonetic: "ɔ̀ɔk-gam-lang-gaai", translations: { [LanguageCode.ENGLISH]: "exercise", [LanguageCode.FRENCH]: "faire de l'exercice", [LanguageCode.PORTUGUESE]: "fazer exercício", [LanguageCode.MANDARIN]: "運動" } },
        { thai: "วิ่งเล่น", phonetic: "wîng-lên", translations: { [LanguageCode.ENGLISH]: "run around/play actively", [LanguageCode.FRENCH]: "courir/jouer activement", [LanguageCode.PORTUGUESE]: "correr/brincar ativamente", [LanguageCode.MANDARIN]: "跑來跑去" } },
        { thai: "พักผ่อน", phonetic: "phák-phɔ̀ɔn", translations: { [LanguageCode.ENGLISH]: "rest/relax", [LanguageCode.FRENCH]: "se reposer", [LanguageCode.PORTUGUESE]: "descansar", [LanguageCode.MANDARIN]: "休息" } },
        { thai: "ทำความสะอาด", phonetic: "tham-khwaam-sà-àat", translations: { [LanguageCode.ENGLISH]: "clean", [LanguageCode.FRENCH]: "nettoyer", [LanguageCode.PORTUGUESE]: "limpar", [LanguageCode.MANDARIN]: "打掃" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Daily Routine Verbs: Modern Thai Life",
                [LanguageCode.FRENCH]: "Verbes de routine quotidienne : Vie moderne thaïlandaise",
                [LanguageCode.PORTUGUESE]: "Verbos de Rotina Diária: Vida Moderna Tailandesa",
                [LanguageCode.MANDARIN]: "日常作息動詞：現代泰國生活",
            },
            content: {
                [LanguageCode.ENGLISH]: "This lesson covers all the essential daily action verbs you need for modern life in Thailand. These are the verbs you'll use every single day!\n\n**Morning Routine:**\n\n• **ตื่น (dtʉ̀ʉn)** = wake up [from lesson 1.4]\n• **อาบ (àap)** or **อาบน้ำ (àap-náam)** = shower/bathe\n  - Very common! Thais often shower 2-3 times a day due to the heat\n  - \"ผมจะไปอาบน้ำ\" (phǒm jà bpai àap-náam) = \"I'm going to shower\"\n• **แปรงฟัน (bprɛɛng-fan)** = brush teeth\n  - Literal: \"brush\" + \"teeth\"\n• **สระผม (sà-phǒm)** = wash hair\n  - Used for shampooing\n• **หวี (wǐi)** = comb\n  - \"หวีผม\" (wǐi phǒm) = comb hair\n• **แต่งหน้า (dtɛ̀ng-nâa)** = put on makeup\n  - Literal: \"dress\" + \"face\"\n• **แต่งตัว (dtɛ̀ng-dtuua)** = get dressed\n  - Literal: \"dress\" + \"body\"\n• **ใส่ (sài)** = wear/put on\n  - \"ใส่เสื้อ\" (sài sʉ̂a) = put on a shirt\n  - \"ใส่แว่น\" (sài wɛ̂n) = wear glasses\n• **กินข้าว (gin-khâao)** = eat (a meal)\n  - Literal: \"eat\" + \"rice\" - but means eating any meal\n  - \"กินข้าวเช้า\" (gin-khâao-cháao) = eat breakfast\n\n**Transportation Verbs:**\n\n• **ขับ (khàp)** = drive\n  - \"ขับรถ\" (khàp rót) = drive a car\n  - \"ขับรถไปทำงาน\" (khàp rót bpai tham-ngaan) = drive to work\n• **ขี่ (khìi)** = ride\n  - \"ขี่มอเตอร์ไซค์\" (khìi mɔɔ-dtəə-sai) = ride a motorcycle\n  - \"ขี่จักรยาน\" (khìi jàk-grà-yaan) = ride a bicycle\n  - \"ขี่ม้า\" (khìi máa) = ride a horse\n• **เดินทาง (dəən-thaang)** = travel/commute\n  - More formal than just \"ไป\" (go)\n  - \"เดินทางไปต่างประเทศ\" = travel abroad\n\n**Modern Life Verbs (Digital Age!):**\n\n• **โทร (thoo)** = call\n  - \"โทรหาผม\" (thoo hǎa phǒm) = call me\n  - Short for \"โทรศัพท์\" (phone)\n• **แชท (chɛ́t)** = chat/text\n  - Borrowed from English \"chat\"\n  - Very commonly used!\n• **โพสต์ (phôot)** = post\n  - \"โพสต์รูป\" (phôot rûup) = post a photo\n  - From English \"post\"\n• **ถ่ายรูป (thàai-rûup)** = take photos\n  - Thais LOVE taking photos!\n  - \"ช่วยถ่ายรูปหน่อย\" (chûay thàai-rûup nɔ̀y) = \"Please take a photo (of me)\"\n• **ดาวน์โหลด (daao-lôot)** = download\n  - From English \"download\"\n• **อัพโหลด (áp-lôot)** = upload\n  - From English \"upload\"\n\n**Daily Tasks:**\n\n• **ล้าง (láang)** = wash\n  - \"ล้างจาน\" (láang jaan) = wash dishes\n  - \"ล้างรถ\" (láang rót) = wash the car\n  - \"ล้างมือ\" (láang mʉʉ) = wash hands\n• **ทำความสะอาด (tham-khwaam-sà-àat)** = clean (general cleaning)\n  - \"ทำความสะอาดบ้าน\" = clean the house\n• **ทำอาหาร (tham-aa-hǎan)** = cook\n  - Literal: \"make\" + \"food\"\n• **ดื่ม (dʉ̀ʉm)** = drink\n  - \"ดื่มน้ำ\" (dʉ̀ʉm náam) = drink water\n  - \"ดื่มกาแฟ\" (dʉ̀ʉm gaa-fɛɛ) = drink coffee\n\n**Shopping & Money:**\n\n• **ซื้อ (sʉ́ʉ)** = buy [from lesson 1.4]\n• **ขาย (khǎai)** = sell\n• **จ่าย (jàai)** = pay\n  - \"จ่ายเงิน\" (jàai ngəən) = pay money\n  - \"จ่ายด้วยบัตร\" (jàai dûay bàt) = pay by card\n• **จอง (jɔɔng)** = book/reserve\n  - \"จองโต๊ะ\" (jɔɔng dtó) = book a table\n  - \"จองตั๋ว\" (jɔɔng dtǔa) = book a ticket\n• **ส่ง (sòng)** = send\n  - \"ส่งข้อความ\" (sòng khɔ̂ɔ-khwaam) = send a message\n  - \"ส่งของ\" (sòng khɔ̌ɔng) = send things/package\n• **รับ (ráp)** = receive/pick up\n  - \"รับโทรศัพท์\" (ráp thoo-rá-sàp) = answer the phone\n  - \"รับของ\" (ráp khɔ̌ɔng) = receive/pick up things\n\n**Health & Wellness:**\n\n• **ออกกำลังกาย (ɔ̀ɔk-gam-lang-gaai)** = exercise\n  - Very common phrase\n  - \"ไปออกกำลังกาย\" = go exercise\n• **วิ่งเล่น (wîng-lên)** = run around/play actively\n  - Casual, playful exercise\n• **พักผ่อน (phák-phɔ̀ɔn)** = rest/relax\n  - \"อยากพักผ่อน\" (yàak phák-phɔ̀ɔn) = want to rest/relax\n\n**Getting Dressed:**\n\n• **ใส่ (sài)** = wear/put on\n• **ถอด (thɔ̀ɔt)** = take off\n  - \"ถอดรองเท้า\" (thɔ̀ɔt rɔɔng-tháao) = take off shoes\n  - Important in Thai culture - always remove shoes before entering homes!\n\n**Cultural Tips:**\n\n1. **Showering:** Thais typically shower multiple times per day due to the heat. It's very normal to hear \"ไปอาบน้ำ\" (going to shower) several times!\n\n2. **Eating = กินข้าว:** Even if you're not eating rice, Thais say \"กินข้าว\" (literally \"eat rice\") to mean eating any meal.\n\n3. **Shoes Off:** \"ถอดรองเท้า\" (take off shoes) is crucial - ALWAYS remove shoes before entering someone's home, temples, and many shops.\n\n4. **Digital Verbs:** Thailand is very digitally connected. Words like แชท (chat), โพสต์ (post), and ดาวน์โหลด (download) are used constantly!\n\n5. **Photos:** Thais love photography! \"ถ่ายรูป\" (take photos) is one of the most common activities.\n\nWith these 30 verbs plus the ones from lessons 1.4 and 1.6, you now have all the essential daily action verbs for modern Thai life!",
                [LanguageCode.FRENCH]: "Cette leçon couvre tous les verbes d'action quotidiens essentiels dont vous avez besoin pour la vie moderne en Thaïlande.\n\n**Routine matinale :**\n\n• **อาบ (àap)** ou **อาบน้ำ (àap-náam)** = se doucher/se baigner\n  - Très courant ! Les Thaïlandais se douchent souvent 2 à 3 fois par jour à cause de la chaleur\n• **แปรงฟัน (bprɛɛng-fan)** = se brosser les dents\n• **สระผม (sà-phǒm)** = se laver les cheveux\n• **หวี (wǐi)** = peigner\n• **แต่งหน้า (dtɛ̀ng-nâa)** = se maquiller\n• **แต่งตัว (dtɛ̀ng-dtuua)** = s'habiller\n• **ใส่ (sài)** = porter/mettre\n• **กินข้าว (gin-khâao)** = manger (un repas)\n\n**Verbes de transport :**\n\n• **ขับ (khàp)** = conduire\n• **ขี่ (khìi)** = monter (véhicule/animal)\n• **เดินทาง (dəən-thaang)** = voyager\n\n**Verbes de la vie moderne :**\n\n• **โทร (thoo)** = appeler\n• **แชท (chɛ́t)** = tchatter/envoyer un message\n• **โพสต์ (phôot)** = poster\n• **ถ่ายรูป (thàai-rûup)** = prendre des photos\n• **ดาวน์โหลด (daao-lôot)** = télécharger\n• **อัพโหลด (áp-lôot)** = téléverser",
                [LanguageCode.PORTUGUESE]: "Esta lição cobre todos os verbos de ação diária essenciais que você precisa para a vida moderna na Tailândia.\n\n**Rotina matinal:**\n\n• **อาบ (àap)** ou **อาบน้ำ (àap-náam)** = tomar banho\n  - Muito comum! Os tailandeses geralmente tomam banho 2-3 vezes ao dia devido ao calor\n• **แปรงฟัน (bprɛɛng-fan)** = escovar os dentes\n• **สระผม (sà-phǒm)** = lavar o cabelo\n• **หวี (wǐi)** = pentear\n• **แต่งหน้า (dtɛ̀ng-nâa)** = maquiar-se\n• **แต่งตัว (dtɛ̀ng-dtuua)** = vestir-se\n• **ใส่ (sài)** = vestir/colocar\n• **กินข้าว (gin-khâao)** = comer (refeição)\n\n**Verbos de transporte:**\n\n• **ขับ (khàp)** = dirigir\n• **ขี่ (khìi)** = andar (veículo/animal)\n• **เดินทาง (dəən-thaang)** = viajar\n\n**Verbos da vida moderna:**\n\n• **โทร (thoo)** = ligar\n• **แชท (chɛ́t)** = conversar/enviar mensagem\n• **โพสต์ (phôot)** = postar\n• **ถ่ายรูป (thàai-rûup)** = tirar fotos\n• **ดาวน์โหลด (daao-lôot)** = baixar\n• **อัพโหลด (áp-lôot)** = fazer upload",
                [LanguageCode.MANDARIN]: "本課涵蓋了在泰國現代生活中所需的所有基本日常動作動詞。\n\n**早晨例行活動：**\n\n• **อาบ (àap)** 或 **อาบน้ำ (àap-náam)** = 洗澡\n  - 非常常見！由於天氣炎熱，泰國人通常每天洗澡2-3次\n• **แปรงฟัน (bprɛɛng-fan)** = 刷牙\n• **สระผม (sà-phǒm)** = 洗頭\n• **หวี (wǐi)** = 梳頭\n• **แต่งหน้า (dtɛ̀ng-nâa)** = 化妝\n• **แต่งตัว (dtɛ̀ng-dtuua)** = 穿衣\n• **ใส่ (sài)** = 穿/戴\n• **กินข้าว (gin-khâao)** = 吃飯\n\n**交通動詞：**\n\n• **ขับ (khàp)** = 開車\n• **ขี่ (khìi)** = 騎（車輛/動物）\n• **เดินทาง (dəən-thaang)** = 旅行\n\n**現代生活動詞：**\n\n• **โทร (thoo)** = 打電話\n• **แชท (chɛ́t)** = 聊天\n• **โพสต์ (phôot)** = 發帖\n• **ถ่ายรูป (thàai-rûup)** = 拍照\n• **ดาวน์โหลด (daao-lôot)** = 下載\n• **อัพโหลด (áp-lôot)** = 上傳",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the morning routine verbs.",
                [LanguageCode.FRENCH]: "Associez les verbes de la routine matinale.",
                [LanguageCode.PORTUGUESE]: "Relacione os verbos da rotina matinal.",
                [LanguageCode.MANDARIN]: "配對早晨例行活動動詞。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "shower", [LanguageCode.FRENCH]: "se doucher", [LanguageCode.PORTUGUESE]: "tomar banho", [LanguageCode.MANDARIN]: "洗澡" }, answer: { [LanguageCode.ENGLISH]: "อาบ", [LanguageCode.FRENCH]: "อาบ", [LanguageCode.PORTUGUESE]: "อาบ", [LanguageCode.MANDARIN]: "อาบ" } },
                { prompt: { [LanguageCode.ENGLISH]: "brush teeth", [LanguageCode.FRENCH]: "se brosser les dents", [LanguageCode.PORTUGUESE]: "escovar os dentes", [LanguageCode.MANDARIN]: "刷牙" }, answer: { [LanguageCode.ENGLISH]: "แปรงฟัน", [LanguageCode.FRENCH]: "แปรงฟัน", [LanguageCode.PORTUGUESE]: "แปรงฟัน", [LanguageCode.MANDARIN]: "แปรงฟัน" } },
                { prompt: { [LanguageCode.ENGLISH]: "get dressed", [LanguageCode.FRENCH]: "s'habiller", [LanguageCode.PORTUGUESE]: "vestir-se", [LanguageCode.MANDARIN]: "穿衣" }, answer: { [LanguageCode.ENGLISH]: "แต่งตัว", [LanguageCode.FRENCH]: "แต่งตัว", [LanguageCode.PORTUGUESE]: "แต่งตัว", [LanguageCode.MANDARIN]: "แต่งตัว" } },
                { prompt: { [LanguageCode.ENGLISH]: "wash hair", [LanguageCode.FRENCH]: "se laver les cheveux", [LanguageCode.PORTUGUESE]: "lavar o cabelo", [LanguageCode.MANDARIN]: "洗頭" }, answer: { [LanguageCode.ENGLISH]: "สระผม", [LanguageCode.FRENCH]: "สระผม", [LanguageCode.PORTUGUESE]: "สระผม", [LanguageCode.MANDARIN]: "สระผม" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete your daily routine.",
                [LanguageCode.FRENCH]: "Complétez votre routine quotidienne.",
                [LanguageCode.PORTUGUESE]: "Complete sua rotina diária.",
                [LanguageCode.MANDARIN]: "完成你的日常作息。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ตอนเช้าผม___น้ำ", [LanguageCode.FRENCH]: "Le matin je___ l'eau", [LanguageCode.PORTUGUESE]: "De manhã eu___ água", [LanguageCode.MANDARIN]: "早上我___澡" }, correctAnswer: "อาบ", end: { [LanguageCode.ENGLISH]: " (shower)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "แล้วผม___ฟัน", [LanguageCode.FRENCH]: "Puis je___ les dents", [LanguageCode.PORTUGUESE]: "Depois eu___ os dentes", [LanguageCode.MANDARIN]: "然後我___牙" }, correctAnswer: "แปรงฟัน", end: { [LanguageCode.ENGLISH]: " (brush teeth)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผม___ตัว", [LanguageCode.FRENCH]: "Je___ le corps", [LanguageCode.PORTUGUESE]: "Eu___ o corpo", [LanguageCode.MANDARIN]: "我___衣" }, correctAnswer: "แต่งตัว", end: { [LanguageCode.ENGLISH]: " (get dressed)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "แล้ว___ข้าวเช้า", [LanguageCode.FRENCH]: "Puis___ le petit-déjeuner", [LanguageCode.PORTUGUESE]: "Depois___ café da manhã", [LanguageCode.MANDARIN]: "然後___早餐" }, correctAnswer: "กินข้าว", end: { [LanguageCode.ENGLISH]: " (eat breakfast)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผม___รถไปทำงาน", [LanguageCode.FRENCH]: "Je___ la voiture au travail", [LanguageCode.PORTUGUESE]: "Eu___ o carro para o trabalho", [LanguageCode.MANDARIN]: "我___車去上班" }, correctAnswer: "ขับ", end: { [LanguageCode.ENGLISH]: " (drive)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match transportation verbs.",
                [LanguageCode.FRENCH]: "Associez les verbes de transport.",
                [LanguageCode.PORTUGUESE]: "Relacione os verbos de transporte.",
                [LanguageCode.MANDARIN]: "配對交通動詞。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "drive", [LanguageCode.FRENCH]: "conduire", [LanguageCode.PORTUGUESE]: "dirigir", [LanguageCode.MANDARIN]: "開車" }, answer: { [LanguageCode.ENGLISH]: "ขับ", [LanguageCode.FRENCH]: "ขับ", [LanguageCode.PORTUGUESE]: "ขับ", [LanguageCode.MANDARIN]: "ขับ" } },
                { prompt: { [LanguageCode.ENGLISH]: "ride", [LanguageCode.FRENCH]: "monter", [LanguageCode.PORTUGUESE]: "andar", [LanguageCode.MANDARIN]: "騎" }, answer: { [LanguageCode.ENGLISH]: "ขี่", [LanguageCode.FRENCH]: "ขี่", [LanguageCode.PORTUGUESE]: "ขี่", [LanguageCode.MANDARIN]: "ขี่" } },
                { prompt: { [LanguageCode.ENGLISH]: "travel", [LanguageCode.FRENCH]: "voyager", [LanguageCode.PORTUGUESE]: "viajar", [LanguageCode.MANDARIN]: "旅行" }, answer: { [LanguageCode.ENGLISH]: "เดินทาง", [LanguageCode.FRENCH]: "เดินทาง", [LanguageCode.PORTUGUESE]: "เดินทาง", [LanguageCode.MANDARIN]: "เดินทาง" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct verb for modern life situations.",
                [LanguageCode.FRENCH]: "Choisissez le bon verbe pour les situations de vie moderne.",
                [LanguageCode.PORTUGUESE]: "Escolha o verbo correto para situações da vida moderna.",
                [LanguageCode.MANDARIN]: "為現代生活情境選擇正確的動詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want to contact your friend by phone. You: ___หาเพื่อน", [LanguageCode.FRENCH]: "Vous voulez contacter votre ami par téléphone. Vous : ___หาเพื่อน", [LanguageCode.PORTUGUESE]: "Você quer contatar seu amigo por telefone. Você: ___หาเพื่อน", [LanguageCode.MANDARIN]: "你想給朋友打電話。你：___หาเพื่อน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "โทร", [LanguageCode.FRENCH]: "โทร", [LanguageCode.PORTUGUESE]: "โทร", [LanguageCode.MANDARIN]: "โทร（打電話）" },
                        { [LanguageCode.ENGLISH]: "แชท", [LanguageCode.FRENCH]: "แชท", [LanguageCode.PORTUGUESE]: "แชท", [LanguageCode.MANDARIN]: "แชท（聊天）" },
                        { [LanguageCode.ENGLISH]: "โพสต์", [LanguageCode.FRENCH]: "โพสต์", [LanguageCode.PORTUGUESE]: "โพสต์", [LanguageCode.MANDARIN]: "โพสต์（發帖）" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You see something beautiful and want a photo. You: ___รูป", [LanguageCode.FRENCH]: "Vous voyez quelque chose de beau et voulez une photo. Vous : ___รูป", [LanguageCode.PORTUGUESE]: "Você vê algo bonito e quer uma foto. Você: ___รูป", [LanguageCode.MANDARIN]: "你看到美麗的東西想拍照。你：___รูป" },
                    options: [
                        { [LanguageCode.ENGLISH]: "โพสต์", [LanguageCode.FRENCH]: "โพสต์", [LanguageCode.PORTUGUESE]: "โพสต์", [LanguageCode.MANDARIN]: "โพสต์（發帖）" },
                        { [LanguageCode.ENGLISH]: "ถ่ายรูป", [LanguageCode.FRENCH]: "ถ่ายรูป", [LanguageCode.PORTUGUESE]: "ถ่ายรูป", [LanguageCode.MANDARIN]: "ถ่ายรูป（拍照）" },
                        { [LanguageCode.ENGLISH]: "ส่ง", [LanguageCode.FRENCH]: "ส่ง", [LanguageCode.PORTUGUESE]: "ส่ง", [LanguageCode.MANDARIN]: "ส่ง（送）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You need to get a file from the internet. You: ___", [LanguageCode.FRENCH]: "Vous devez obtenir un fichier sur Internet. Vous : ___", [LanguageCode.PORTUGUESE]: "Você precisa pegar um arquivo da internet. Você: ___", [LanguageCode.MANDARIN]: "你需要從網上下載文件。你：___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อัพโหลด", [LanguageCode.FRENCH]: "อัพโหลด (téléverser)", [LanguageCode.PORTUGUESE]: "อัพโหลด", [LanguageCode.MANDARIN]: "อัพโหลด（上傳）" },
                        { [LanguageCode.ENGLISH]: "ดาวน์โหลด", [LanguageCode.FRENCH]: "ดาวน์โหลด (télécharger)", [LanguageCode.PORTUGUESE]: "ดาวน์โหลด", [LanguageCode.MANDARIN]: "ดาวน์โหลด（下載）" },
                        { [LanguageCode.ENGLISH]: "โพสต์", [LanguageCode.FRENCH]: "โพสต์", [LanguageCode.PORTUGUESE]: "โพสต์", [LanguageCode.MANDARIN]: "โพสต์（發帖）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're entering a Thai home. You must: ___รองเท้า", [LanguageCode.FRENCH]: "Vous entrez dans une maison thaïlandaise. Vous devez : ___รองเท้า", [LanguageCode.PORTUGUESE]: "Você está entrando em uma casa tailandesa. Você deve: ___รองเท้า", [LanguageCode.MANDARIN]: "你要進入泰國人的家。你必須：___รองเท้า" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ใส่", [LanguageCode.FRENCH]: "ใส่", [LanguageCode.PORTUGUESE]: "ใส่", [LanguageCode.MANDARIN]: "ใส่（穿）" },
                        { [LanguageCode.ENGLISH]: "ถอด", [LanguageCode.FRENCH]: "ถอด", [LanguageCode.PORTUGUESE]: "ถอด", [LanguageCode.MANDARIN]: "ถอด（脫）" },
                        { [LanguageCode.ENGLISH]: "ซื้อ", [LanguageCode.FRENCH]: "ซื้อ", [LanguageCode.PORTUGUESE]: "ซื้อ", [LanguageCode.MANDARIN]: "ซื้อ（買）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "At a restaurant, when the bill comes, you: ___เงิน", [LanguageCode.FRENCH]: "Au restaurant, quand l'addition arrive, vous : ___เงิน", [LanguageCode.PORTUGUESE]: "No restaurante, quando a conta chega, você: ___เงิน", [LanguageCode.MANDARIN]: "在餐廳，帳單來時，你：___เงิน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "รับ", [LanguageCode.FRENCH]: "รับ", [LanguageCode.PORTUGUESE]: "รับ", [LanguageCode.MANDARIN]: "รับ（收）" },
                        { [LanguageCode.ENGLISH]: "ส่ง", [LanguageCode.FRENCH]: "ส่ง", [LanguageCode.PORTUGUESE]: "ส่ง", [LanguageCode.MANDARIN]: "ส่ง（送）" },
                        { [LanguageCode.ENGLISH]: "จ่าย", [LanguageCode.FRENCH]: "จ่าย", [LanguageCode.PORTUGUESE]: "จ่าย", [LanguageCode.MANDARIN]: "จ่าย（付款）" },
                    ],
                    correctIndex: 2
                },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete sentences about daily digital activities.",
                [LanguageCode.FRENCH]: "Complétez les phrases sur les activités numériques quotidiennes.",
                [LanguageCode.PORTUGUESE]: "Complete frases sobre atividades digitais diárias.",
                [LanguageCode.MANDARIN]: "完成關於日常數字活動的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผม___รูปบนอินสตาแกรม", [LanguageCode.FRENCH]: "Je___ une photo sur Instagram", [LanguageCode.PORTUGUESE]: "Eu___ foto no Instagram", [LanguageCode.MANDARIN]: "我在 Instagram 上___照片" }, correctAnswer: "โพสต์", end: { [LanguageCode.ENGLISH]: " (post)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___กับเพื่อน", [LanguageCode.FRENCH]: "Elle___ avec des amis", [LanguageCode.PORTUGUESE]: "Ela___ com amigos", [LanguageCode.MANDARIN]: "她和朋友___" }, correctAnswer: "แชท", end: { [LanguageCode.ENGLISH]: " (chat)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พวกเราชอบ___รูป", [LanguageCode.FRENCH]: "Nous aimons___ des photos", [LanguageCode.PORTUGUESE]: "Nós gostamos de___ fotos", [LanguageCode.MANDARIN]: "我們喜歡___照" }, correctAnswer: "ถ่ายรูป", end: { [LanguageCode.ENGLISH]: " (take photos)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา___หนัง", [LanguageCode.FRENCH]: "Il___ un film", [LanguageCode.PORTUGUESE]: "Ele___ filme", [LanguageCode.MANDARIN]: "他___電影" }, correctAnswer: "ดาวน์โหลด", end: { [LanguageCode.ENGLISH]: " (download)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match clothing and grooming verbs.",
                [LanguageCode.FRENCH]: "Associez les verbes de vêtements et de toilettage.",
                [LanguageCode.PORTUGUESE]: "Relacione verbos de roupa e higiene.",
                [LanguageCode.MANDARIN]: "配對衣服和儀容動詞。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "wear/put on", [LanguageCode.FRENCH]: "porter/mettre", [LanguageCode.PORTUGUESE]: "vestir/colocar", [LanguageCode.MANDARIN]: "穿/戴" }, answer: { [LanguageCode.ENGLISH]: "ใส่", [LanguageCode.FRENCH]: "ใส่", [LanguageCode.PORTUGUESE]: "ใส่", [LanguageCode.MANDARIN]: "ใส่" } },
                { prompt: { [LanguageCode.ENGLISH]: "take off", [LanguageCode.FRENCH]: "enlever", [LanguageCode.PORTUGUESE]: "tirar", [LanguageCode.MANDARIN]: "脫" }, answer: { [LanguageCode.ENGLISH]: "ถอด", [LanguageCode.FRENCH]: "ถอด", [LanguageCode.PORTUGUESE]: "ถอด", [LanguageCode.MANDARIN]: "ถอด" } },
                { prompt: { [LanguageCode.ENGLISH]: "comb", [LanguageCode.FRENCH]: "peigner", [LanguageCode.PORTUGUESE]: "pentear", [LanguageCode.MANDARIN]: "梳頭" }, answer: { [LanguageCode.ENGLISH]: "หวี", [LanguageCode.FRENCH]: "หวี", [LanguageCode.PORTUGUESE]: "หวี", [LanguageCode.MANDARIN]: "หวี" } },
                { prompt: { [LanguageCode.ENGLISH]: "put on makeup", [LanguageCode.FRENCH]: "se maquiller", [LanguageCode.PORTUGUESE]: "maquiar-se", [LanguageCode.MANDARIN]: "化妝" }, answer: { [LanguageCode.ENGLISH]: "แต่งหน้า", [LanguageCode.FRENCH]: "แต่งหน้า", [LanguageCode.PORTUGUESE]: "แต่งหน้า", [LanguageCode.MANDARIN]: "แต่งหน้า" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put these daily routine sentences in order.",
                [LanguageCode.FRENCH]: "Mettez ces phrases de routine quotidienne dans l'ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque essas frases de rotina diária em ordem.",
                [LanguageCode.MANDARIN]: "整理這些日常作息句子的詞序。",
            },
            sentences: [
                { correctOrder: ["ผม", "อาบน้ำ", "ทุกเช้า"], hint: { [LanguageCode.ENGLISH]: "I shower every morning.", [LanguageCode.FRENCH]: "Je me douche tous les matins.", [LanguageCode.PORTUGUESE]: "Eu tomo banho toda manhã.", [LanguageCode.MANDARIN]: "我每天早上洗澡。" } },
                { correctOrder: ["เธอ", "แต่งตัว", "สวย"], hint: { [LanguageCode.ENGLISH]: "She dresses beautifully.", [LanguageCode.FRENCH]: "Elle s'habille joliment.", [LanguageCode.PORTUGUESE]: "Ela se veste lindamente.", [LanguageCode.MANDARIN]: "她穿得漂亮。" } },
                { correctOrder: ["พวกเรา", "กินข้าว", "ด้วยกัน"], hint: { [LanguageCode.ENGLISH]: "We eat together.", [LanguageCode.FRENCH]: "Nous mangeons ensemble.", [LanguageCode.PORTUGUESE]: "Nós comemos juntos.", [LanguageCode.MANDARIN]: "我們一起吃飯。" } },
                { correctOrder: ["เขา", "ขับรถ", "ไป", "ทำงาน"], hint: { [LanguageCode.ENGLISH]: "He drives to work.", [LanguageCode.FRENCH]: "Il conduit au travail.", [LanguageCode.PORTUGUESE]: "Ele dirige para o trabalho.", [LanguageCode.MANDARIN]: "他開車去上班。" } },
                { correctOrder: ["ผม", "ชอบ", "ถ่ายรูป"], hint: { [LanguageCode.ENGLISH]: "I like to take photos.", [LanguageCode.FRENCH]: "J'aime prendre des photos.", [LanguageCode.PORTUGUESE]: "Eu gosto de tirar fotos.", [LanguageCode.MANDARIN]: "我喜歡拍照。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete sentences about shopping and transactions.",
                [LanguageCode.FRENCH]: "Complétez les phrases sur les achats et les transactions.",
                [LanguageCode.PORTUGUESE]: "Complete frases sobre compras e transações.",
                [LanguageCode.MANDARIN]: "完成關於購物和交易的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผม___โต๊ะที่ร้านอาหาร", [LanguageCode.FRENCH]: "Je___ une table au restaurant", [LanguageCode.PORTUGUESE]: "Eu___ uma mesa no restaurante", [LanguageCode.MANDARIN]: "我在餐廳___桌子" }, correctAnswer: "จอง", end: { [LanguageCode.ENGLISH]: " (book/reserve)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___เงินด้วยบัตร", [LanguageCode.FRENCH]: "Elle___ avec une carte", [LanguageCode.PORTUGUESE]: "Ela___ com cartão", [LanguageCode.MANDARIN]: "她用卡___錢" }, correctAnswer: "จ่าย", end: { [LanguageCode.ENGLISH]: " (pay)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พวกเขา___ของที่ตลาด", [LanguageCode.FRENCH]: "Ils___ des choses au marché", [LanguageCode.PORTUGUESE]: "Eles___ coisas no mercado", [LanguageCode.MANDARIN]: "他們在市場___東西" }, correctAnswer: "ขาย", end: { [LanguageCode.ENGLISH]: " (sell)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผม___ข้อความถึงคุณ", [LanguageCode.FRENCH]: "Je___ un message à vous", [LanguageCode.PORTUGUESE]: "Eu___ mensagem para você", [LanguageCode.MANDARIN]: "我___訊息給你" }, correctAnswer: "ส่ง", end: { [LanguageCode.ENGLISH]: " (send)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา___พัสดุที่โพสต์", [LanguageCode.FRENCH]: "Il___ un colis à la poste", [LanguageCode.PORTUGUESE]: "Ele___ encomenda no correio", [LanguageCode.MANDARIN]: "他在郵局___包裹" }, correctAnswer: "รับ", end: { [LanguageCode.ENGLISH]: " (receive/pick up)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct verb for health and household tasks.",
                [LanguageCode.FRENCH]: "Choisissez le bon verbe pour la santé et les tâches ménagères.",
                [LanguageCode.PORTUGUESE]: "Escolha o verbo correto para saúde e tarefas domésticas.",
                [LanguageCode.MANDARIN]: "為健康和家務選擇正確的動詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want to stay healthy and active. You: ___ทุกวัน", [LanguageCode.FRENCH]: "Vous voulez rester en bonne santé et actif. Vous : ___ทุกวัน", [LanguageCode.PORTUGUESE]: "Você quer se manter saudável e ativo. Você: ___ทุกวัน", [LanguageCode.MANDARIN]: "你想保持健康和活躍。你：___ทุกวัน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ออกกำลังกาย", [LanguageCode.FRENCH]: "ออกกำลังกาย (faire de l'exercice)", [LanguageCode.PORTUGUESE]: "ออกกำลังกาย (fazer exercício)", [LanguageCode.MANDARIN]: "ออกกำลังกาย（運動）" },
                        { [LanguageCode.ENGLISH]: "พักผ่อน", [LanguageCode.FRENCH]: "พักผ่อน", [LanguageCode.PORTUGUESE]: "พักผ่อน", [LanguageCode.MANDARIN]: "พักผ่อน（休息）" },
                        { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน（睡覺）" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "After dinner, you need to: ___จาน", [LanguageCode.FRENCH]: "Après le dîner, vous devez : ___จาน", [LanguageCode.PORTUGUESE]: "Depois do jantar, você precisa: ___จาน", [LanguageCode.MANDARIN]: "晚飯後，你需要：___จาน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ซื้อ", [LanguageCode.FRENCH]: "ซื้อ", [LanguageCode.PORTUGUESE]: "ซื้อ", [LanguageCode.MANDARIN]: "ซื้อ（買）" },
                        { [LanguageCode.ENGLISH]: "ล้าง", [LanguageCode.FRENCH]: "ล้าง", [LanguageCode.PORTUGUESE]: "ล้าง", [LanguageCode.MANDARIN]: "ล้าง（洗）" },
                        { [LanguageCode.ENGLISH]: "ดู", [LanguageCode.FRENCH]: "ดู", [LanguageCode.PORTUGUESE]: "ดู", [LanguageCode.MANDARIN]: "ดู（看）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Your house is messy. You need to: ___บ้าน", [LanguageCode.FRENCH]: "Votre maison est en désordre. Vous devez : ___บ้าน", [LanguageCode.PORTUGUESE]: "Sua casa está bagunçada. Você precisa: ___บ้าน", [LanguageCode.MANDARIN]: "你的房子很亂。你需要：___บ้าน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ทำความสะอาด", [LanguageCode.FRENCH]: "ทำความสะอาด", [LanguageCode.PORTUGUESE]: "ทำความสะอาด", [LanguageCode.MANDARIN]: "ทำความสะอาด（打掃）" },
                        { [LanguageCode.ENGLISH]: "ขาย", [LanguageCode.FRENCH]: "ขาย", [LanguageCode.PORTUGUESE]: "ขาย", [LanguageCode.MANDARIN]: "ขาย（賣）" },
                        { [LanguageCode.ENGLISH]: "จอง", [LanguageCode.FRENCH]: "จอง (réserver)", [LanguageCode.PORTUGUESE]: "จอง", [LanguageCode.MANDARIN]: "จอง（預訂）" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're thirsty. You want to: ___น้ำ", [LanguageCode.FRENCH]: "Vous avez soif. Vous voulez : ___น้ำ", [LanguageCode.PORTUGUESE]: "Você está com sede. Você quer: ___น้ำ", [LanguageCode.MANDARIN]: "你口渴了。你想：___น้ำ" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กิน", [LanguageCode.FRENCH]: "กิน", [LanguageCode.PORTUGUESE]: "กิน", [LanguageCode.MANDARIN]: "กิน（吃）" },
                        { [LanguageCode.ENGLISH]: "ดื่ม", [LanguageCode.FRENCH]: "ดื่ม", [LanguageCode.PORTUGUESE]: "ดื่ม", [LanguageCode.MANDARIN]: "ดื่ม（喝）" },
                        { [LanguageCode.ENGLISH]: "อาบ", [LanguageCode.FRENCH]: "อาบ", [LanguageCode.PORTUGUESE]: "อาบ", [LanguageCode.MANDARIN]: "อาบ（洗澡）" },
                    ],
                    correctIndex: 1
                },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete a full day's activities.",
                [LanguageCode.FRENCH]: "Complétez les activités d'une journée complète.",
                [LanguageCode.PORTUGUESE]: "Complete as atividades de um dia inteiro.",
                [LanguageCode.MANDARIN]: "完成一整天的活動。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ตื่นแล้ว___น้ำ", [LanguageCode.FRENCH]: "Réveillé puis___ l'eau", [LanguageCode.PORTUGUESE]: "Acordei e___ água", [LanguageCode.MANDARIN]: "醒了然後___澡" }, correctAnswer: "อาบ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ฟันและ___ผม", [LanguageCode.FRENCH]: "___les dents et___ les cheveux", [LanguageCode.PORTUGUESE]: "___os dentes e___ o cabelo", [LanguageCode.MANDARIN]: "___牙和___頭" }, correctAnswer: "แปรงฟัน หวี", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ตัวและ___เสื้อ", [LanguageCode.FRENCH]: "___le corps et___ une chemise", [LanguageCode.PORTUGUESE]: "___o corpo e___ camisa", [LanguageCode.MANDARIN]: "___衣和___衣服" }, correctAnswer: "แต่งตัว ใส่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ข้าวเช้าและ___กาแฟ", [LanguageCode.FRENCH]: "___le petit-déjeuner et___ du café", [LanguageCode.PORTUGUESE]: "___café da manhã e___ café", [LanguageCode.MANDARIN]: "___早餐和___咖啡" }, correctAnswer: "กินข้าว ดื่ม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___รถไปทำงาน", [LanguageCode.FRENCH]: "___la voiture au travail", [LanguageCode.PORTUGUESE]: "___o carro para o trabalho", [LanguageCode.MANDARIN]: "___車去上班" }, correctAnswer: "ขับ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เที่ยง___ข้าว", [LanguageCode.FRENCH]: "Midi___ du riz", [LanguageCode.PORTUGUESE]: "Meio-dia___ arroz", [LanguageCode.MANDARIN]: "中午___飯" }, correctAnswer: "กินข้าว", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "บ่าย___หาลูกค้า", [LanguageCode.FRENCH]: "Après-midi___ des clients", [LanguageCode.PORTUGUESE]: "Tarde___ clientes", [LanguageCode.MANDARIN]: "下午___客戶" }, correctAnswer: "โทร", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เย็น___รูปและ___รูป", [LanguageCode.FRENCH]: "Soir___ des photos et___ des photos", [LanguageCode.PORTUGUESE]: "Noite___ fotos e___ fotos", [LanguageCode.MANDARIN]: "晚上___照和___照片" }, correctAnswer: "ถ่ายรูป โพสต์", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ก่อนนอน___น้ำอีกครั้ง", [LanguageCode.FRENCH]: "Avant de dormir___ l'eau encore", [LanguageCode.PORTUGUESE]: "Antes de dormir___ água de novo", [LanguageCode.MANDARIN]: "睡前再___一次澡" }, correctAnswer: "อาบ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "แล้ว___ผ่อน", [LanguageCode.FRENCH]: "Puis___", [LanguageCode.PORTUGUESE]: "Depois___", [LanguageCode.MANDARIN]: "然後___" }, correctAnswer: "พักผ่อน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What do you do in the morning?", [LanguageCode.FRENCH]: "Que fais-tu le matin ?", [LanguageCode.PORTUGUESE]: "O que você faz de manhã?", [LanguageCode.MANDARIN]: "你早上做什麼？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I wake up, shower, brush my teeth, get dressed, then eat breakfast.", [LanguageCode.FRENCH]: "Je me réveille, me douche, me brosse les dents, m'habille, puis prends le petit-déjeuner.", [LanguageCode.PORTUGUESE]: "Eu acordo, tomo banho, escovo os dentes, me visto e depois tomo café da manhã.", [LanguageCode.MANDARIN]: "我起床、洗澡、刷牙、穿衣服，然後吃早餐。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "How do you go to work?", [LanguageCode.FRENCH]: "Comment vas-tu au travail ?", [LanguageCode.PORTUGUESE]: "Como você vai para o trabalho?", [LanguageCode.MANDARIN]: "你怎麼去上班？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I drive. What about you?", [LanguageCode.FRENCH]: "Je conduis. Et toi ?", [LanguageCode.PORTUGUESE]: "Eu dirijo. E você?", [LanguageCode.MANDARIN]: "我開車。你呢？" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "I ride a motorcycle. It's faster.", [LanguageCode.FRENCH]: "Je monte à moto. C'est plus rapide.", [LanguageCode.PORTUGUESE]: "Eu ando de moto. É mais rápido.", [LanguageCode.MANDARIN]: "我騎摩托車。更快。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What does B do after waking up?", [LanguageCode.FRENCH]: "Que fait B après s'être réveillé ?", [LanguageCode.PORTUGUESE]: "O que B faz depois de acordar?", [LanguageCode.MANDARIN]: "B 醒來後做什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Shower, brush teeth, get dressed, eat", [LanguageCode.FRENCH]: "Se doucher, se brosser les dents, s'habiller, manger", [LanguageCode.PORTUGUESE]: "Tomar banho, escovar os dentes, vestir-se, comer", [LanguageCode.MANDARIN]: "洗澡、刷牙、穿衣、吃飯" },
                        { [LanguageCode.ENGLISH]: "Drive to work", [LanguageCode.FRENCH]: "Conduire au travail", [LanguageCode.PORTUGUESE]: "Dirigir para o trabalho", [LanguageCode.MANDARIN]: "開車去上班" },
                        { [LanguageCode.ENGLISH]: "Ride a motorcycle", [LanguageCode.FRENCH]: "Monter à moto", [LanguageCode.PORTUGUESE]: "Andar de moto", [LanguageCode.MANDARIN]: "騎摩托車" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How does A go to work?", [LanguageCode.FRENCH]: "Comment A va-t-il au travail ?", [LanguageCode.PORTUGUESE]: "Como A vai para o trabalho?", [LanguageCode.MANDARIN]: "A 怎麼去上班？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Drives a car", [LanguageCode.FRENCH]: "Conduit une voiture", [LanguageCode.PORTUGUESE]: "Dirige um carro", [LanguageCode.MANDARIN]: "開車" },
                        { [LanguageCode.ENGLISH]: "Rides a motorcycle", [LanguageCode.FRENCH]: "Monte à moto", [LanguageCode.PORTUGUESE]: "Anda de moto", [LanguageCode.MANDARIN]: "騎摩托車" },
                        { [LanguageCode.ENGLISH]: "Takes the bus", [LanguageCode.FRENCH]: "Prend le bus", [LanguageCode.PORTUGUESE]: "Pega ônibus", [LanguageCode.MANDARIN]: "坐公車" },
                    ],
                    correctIndex: 1
                },
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บรรยายกิจวัตรประจำวันของคุณด้วยกริยาที่เรียนในบทนี้ อย่างน้อย 10 ประโยค",
            [LanguageCode.FRENCH]: "บรรยายกิจวัตรประจำวันของคุณด้วยกริยาที่เรียนในบทนี้ อย่างน้อย 10 ประโยค",
            [LanguageCode.PORTUGUESE]: "บรรยายกิจวัตรประจำวันของคุณด้วยกริยาที่เรียนในบทนี้ อย่างน้อย 10 ประโยค",
            [LanguageCode.MANDARIN]: "บรรยายกิจวัตรประจำวันของคุณด้วยกริยาที่เรียนในบทนี้ อย่างน้อย 10 ประโยค",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe your daily routine using the verbs from this lesson. Include activities from morning to night.",
            [LanguageCode.FRENCH]: "Décrivez votre routine quotidienne en utilisant les verbes de cette leçon. Incluez des activités du matin au soir.",
            [LanguageCode.PORTUGUESE]: "Descreva sua rotina diária usando os verbos desta lição. Inclua atividades da manhã à noite.",
            [LanguageCode.MANDARIN]: "用本課的動詞描述你的日常作息。包括從早到晚的活動。",
        },
        speakingType: 'open-ended'
    }
};

