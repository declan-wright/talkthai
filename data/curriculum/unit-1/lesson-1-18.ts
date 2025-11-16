import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_18: Lesson = {
    id: "1.18",
    title: {
        [LanguageCode.ENGLISH]: "Technology & Daily Items",
        [LanguageCode.FRENCH]: "Technologie et objets quotidiens",
        [LanguageCode.PORTUGUESE]: "Tecnologia e itens diários",
        [LanguageCode.MANDARIN]: "科技與日常用品",
    },
    vocabulary: [
        // Core tech vocabulary
        { thai: "โทรศัพท์", phonetic: "toh-rá-sàp", translations: { [LanguageCode.ENGLISH]: "phone/telephone", [LanguageCode.FRENCH]: "téléphone", [LanguageCode.PORTUGUESE]: "telefone", [LanguageCode.MANDARIN]: "電話" } },
        { thai: "คอมพิวเตอร์", phonetic: "khom-phíu-dtêr", translations: { [LanguageCode.ENGLISH]: "computer", [LanguageCode.FRENCH]: "ordinateur", [LanguageCode.PORTUGUESE]: "computador", [LanguageCode.MANDARIN]: "電腦" } },
        { thai: "ไอแพด", phonetic: "ai-phɛ́t", translations: { [LanguageCode.ENGLISH]: "iPad/tablet", [LanguageCode.FRENCH]: "iPad/tablette", [LanguageCode.PORTUGUESE]: "iPad/tablet", [LanguageCode.MANDARIN]: "iPad/平板電腦" } },
        { thai: "แบตเตอรี่", phonetic: "bɛ̀ɛt-dtəə-rîi", translations: { [LanguageCode.ENGLISH]: "battery", [LanguageCode.FRENCH]: "batterie", [LanguageCode.PORTUGUESE]: "bateria", [LanguageCode.MANDARIN]: "電池" } },
        { thai: "ที่ชาร์จ", phonetic: "thîi châat", translations: { [LanguageCode.ENGLISH]: "charger", [LanguageCode.FRENCH]: "chargeur", [LanguageCode.PORTUGUESE]: "carregador", [LanguageCode.MANDARIN]: "充電器" } },
        { thai: "ชาร์จ", phonetic: "châat", translations: { [LanguageCode.ENGLISH]: "charge/to charge", [LanguageCode.FRENCH]: "charger", [LanguageCode.PORTUGUESE]: "carregar", [LanguageCode.MANDARIN]: "充電" } },
        { thai: "ไวไฟ", phonetic: "wai-fai", translations: { [LanguageCode.ENGLISH]: "WiFi", [LanguageCode.FRENCH]: "WiFi", [LanguageCode.PORTUGUESE]: "WiFi", [LanguageCode.MANDARIN]: "WiFi" } },
        { thai: "อินเทอร์เน็ต", phonetic: "in-təə-nét", translations: { [LanguageCode.ENGLISH]: "internet", [LanguageCode.FRENCH]: "internet", [LanguageCode.PORTUGUESE]: "internet", [LanguageCode.MANDARIN]: "網路" } },

        // Apps and platforms
        { thai: "ไลน์", phonetic: "lai", translations: { [LanguageCode.ENGLISH]: "LINE (messaging app)", [LanguageCode.FRENCH]: "LINE (application de messagerie)", [LanguageCode.PORTUGUESE]: "LINE (aplicativo de mensagens)", [LanguageCode.MANDARIN]: "LINE（通訊軟體）" } },
        { thai: "ไอจี", phonetic: "ai-jii", translations: { [LanguageCode.ENGLISH]: "IG/IG", [LanguageCode.FRENCH]: "IG/IG", [LanguageCode.PORTUGUESE]: "IG/IG", [LanguageCode.MANDARIN]: "IG/IG" } },
        { thai: "ทิกต็อก", phonetic: "thík-dtɔ̀k", translations: { [LanguageCode.ENGLISH]: "TikTok", [LanguageCode.FRENCH]: "TikTok", [LanguageCode.PORTUGUESE]: "TikTok", [LanguageCode.MANDARIN]: "TikTok" } },
        { thai: "แกร็บ", phonetic: "grɛ́p", translations: { [LanguageCode.ENGLISH]: "Grab (ride-hailing app)", [LanguageCode.FRENCH]: "Grab (application de transport)", [LanguageCode.PORTUGUESE]: "Grab (aplicativo de transporte)", [LanguageCode.MANDARIN]: "Grab（叫車軟體）" } },
        { thai: "โบลท์", phonetic: "bòlt", translations: { [LanguageCode.ENGLISH]: "Bolt (ride-hailing app)", [LanguageCode.FRENCH]: "Bolt (application de transport)", [LanguageCode.PORTUGUESE]: "Bolt (aplicativo de transporte)", [LanguageCode.MANDARIN]: "Bolt（叫車軟體）" } },

        // Actions and verbs
        { thai: "เล่น", phonetic: "lên", translations: { [LanguageCode.ENGLISH]: "play/use (phone/apps)", [LanguageCode.FRENCH]: "jouer/utiliser", [LanguageCode.PORTUGUESE]: "jogar/usar", [LanguageCode.MANDARIN]: "玩/使用" } },
        { thai: "เปิด", phonetic: "bpə̀ət", translations: { [LanguageCode.ENGLISH]: "open/turn on", [LanguageCode.FRENCH]: "ouvrir/allumer", [LanguageCode.PORTUGUESE]: "abrir/ligar", [LanguageCode.MANDARIN]: "打開/開機" } },
        { thai: "ปิด", phonetic: "bpìt", translations: { [LanguageCode.ENGLISH]: "close/turn off", [LanguageCode.FRENCH]: "fermer/éteindre", [LanguageCode.PORTUGUESE]: "fechar/desligar", [LanguageCode.MANDARIN]: "關閉/關機" } },
        { thai: "โหลด", phonetic: "lòht", translations: { [LanguageCode.ENGLISH]: "download/load", [LanguageCode.FRENCH]: "télécharger", [LanguageCode.PORTUGUESE]: "baixar/carregar", [LanguageCode.MANDARIN]: "下載" } },
        { thai: "ส่ง", phonetic: "sòng", translations: { [LanguageCode.ENGLISH]: "send", [LanguageCode.FRENCH]: "envoyer", [LanguageCode.PORTUGUESE]: "enviar", [LanguageCode.MANDARIN]: "發送" } },
        { thai: "รับ", phonetic: "ráp", translations: { [LanguageCode.ENGLISH]: "receive", [LanguageCode.FRENCH]: "recevoir", [LanguageCode.PORTUGUESE]: "receber", [LanguageCode.MANDARIN]: "接收" } },
        { thai: "ข้อความ", phonetic: "khɔ̂ɔ-khwaam", translations: { [LanguageCode.ENGLISH]: "message/text", [LanguageCode.FRENCH]: "message/texto", [LanguageCode.PORTUGUESE]: "mensagem/texto", [LanguageCode.MANDARIN]: "訊息/簡訊" } },
        { thai: "สแกน", phonetic: "sà-gɛɛn", translations: { [LanguageCode.ENGLISH]: "scan", [LanguageCode.FRENCH]: "scanner", [LanguageCode.PORTUGUESE]: "escanear", [LanguageCode.MANDARIN]: "掃描" } },
        { thai: "โทร", phonetic: "thoo", translations: { [LanguageCode.ENGLISH]: "call/phone (verb)", [LanguageCode.FRENCH]: "appeler", [LanguageCode.PORTUGUESE]: "ligar/telefonar", [LanguageCode.MANDARIN]: "打電話" } },
        { thai: "โทรหา", phonetic: "thoo hǎa", translations: { [LanguageCode.ENGLISH]: "call to/phone someone", [LanguageCode.FRENCH]: "appeler quelqu'un", [LanguageCode.PORTUGUESE]: "ligar para alguém", [LanguageCode.MANDARIN]: "打電話給" } },

        // Problems and issues
        { thai: "เสีย", phonetic: "sǐa", translations: { [LanguageCode.ENGLISH]: "broken/damaged", [LanguageCode.FRENCH]: "cassé/endommagé", [LanguageCode.PORTUGUESE]: "quebrado/danificado", [LanguageCode.MANDARIN]: "壞了" } },
        { thai: "หมด", phonetic: "mòt", translations: { [LanguageCode.ENGLISH]: "run out/empty", [LanguageCode.FRENCH]: "épuisé/vide", [LanguageCode.PORTUGUESE]: "acabou/vazio", [LanguageCode.MANDARIN]: "用完了" } },
        { thai: "ช้า", phonetic: "cháa", translations: { [LanguageCode.ENGLISH]: "slow", [LanguageCode.FRENCH]: "lent", [LanguageCode.PORTUGUESE]: "lento", [LanguageCode.MANDARIN]: "慢" } },
        { thai: "เร็ว", phonetic: "reo", translations: { [LanguageCode.ENGLISH]: "fast", [LanguageCode.FRENCH]: "rapide", [LanguageCode.PORTUGUESE]: "rápido", [LanguageCode.MANDARIN]: "快" } },
        { thai: "ใช้ได้", phonetic: "chái dâai", translations: { [LanguageCode.ENGLISH]: "can use/works", [LanguageCode.FRENCH]: "fonctionne/utilisable", [LanguageCode.PORTUGUESE]: "funciona/pode usar", [LanguageCode.MANDARIN]: "可以用" } },
        { thai: "ใช้ไม่ได้", phonetic: "chái mâi dâai", translations: { [LanguageCode.ENGLISH]: "can't use/doesn't work", [LanguageCode.FRENCH]: "ne fonctionne pas/inutilisable", [LanguageCode.PORTUGUESE]: "não funciona/não pode usar", [LanguageCode.MANDARIN]: "不能用" } },

        // Daily items
        { thai: "กระเป๋า", phonetic: "grà-bpǎo", translations: { [LanguageCode.ENGLISH]: "bag/purse", [LanguageCode.FRENCH]: "sac", [LanguageCode.PORTUGUESE]: "bolsa/mochila", [LanguageCode.MANDARIN]: "包" } },
        { thai: "กุญแจ", phonetic: "gun-jɛɛ", translations: { [LanguageCode.ENGLISH]: "key", [LanguageCode.FRENCH]: "clé", [LanguageCode.PORTUGUESE]: "chave", [LanguageCode.MANDARIN]: "鑰匙" } },
        { thai: "กระเป๋าสตางค์", phonetic: "grà-bpǎo sà-dtaang", translations: { [LanguageCode.ENGLISH]: "wallet", [LanguageCode.FRENCH]: "portefeuille", [LanguageCode.PORTUGUESE]: "carteira", [LanguageCode.MANDARIN]: "錢包" } },
        { thai: "แว่นตา", phonetic: "wɛ̂n-dtaa", translations: { [LanguageCode.ENGLISH]: "glasses", [LanguageCode.FRENCH]: "lunettes", [LanguageCode.PORTUGUESE]: "óculos", [LanguageCode.MANDARIN]: "眼鏡" } },
        { thai: "นาฬิกา", phonetic: "naa-lí-gaa", translations: { [LanguageCode.ENGLISH]: "watch/clock", [LanguageCode.FRENCH]: "montre/horloge", [LanguageCode.PORTUGUESE]: "relógio", [LanguageCode.MANDARIN]: "手錶/時鐘" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Technology in Thailand: Apps You Need to Know",
                [LanguageCode.FRENCH]: "La technologie en Thaïlande : Applications à connaître",
                [LanguageCode.PORTUGUESE]: "Tecnologia na Tailândia: Aplicativos que você precisa conhecer",
                [LanguageCode.MANDARIN]: "泰國科技：你需要知道的應用程式",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Thailand is EXTREMELY tech-savvy!** Understanding local technology and apps is essential for daily life.\n\n**Essential Apps in Thailand:**\n\n**1. LINE (ไลน์ - lai)**\n• THE messaging app in Thailand\n• Everyone uses LINE, not WhatsApp!\n• Used for:\n  - Personal messages\n  - Business communication\n  - Payment (LINE Pay)\n  - Food delivery (LINE Man)\n• If you want to stay in touch with Thai friends, you NEED LINE\n• Thai people will ask: **มีไลน์ไหม (mii lai mái)** = \"Do you have LINE?\"\n\n**2. Grab (แกร็บ - grɛ́p) & Bolt (โบลท์ - bòlt)**\n• Ride-hailing apps (like Uber)\n• Grab is more popular, Bolt is newer and cheaper\n• Essential vocabulary:\n  - **เรียกแกร็บ (rîak grɛ́p)** = \"Call a Grab\"\n  - **เรียกรถ (rîak rót)** = \"Call a car\"\n• Much safer and cheaper than regular taxis!\n• You can also order food delivery through Grab\n\n**3. Social Media - IG & TikTok**\n• **ไอจี (ai-jii)** = IG\n• **ทิกต็อก (thík-dtɔ̀k)** = TikTok\n• Thai people are VERY active on both platforms\n• TikTok is extremely popular among younger Thais\n• Everyone just says \"IG\" - you won't hear the full name in Thai!\n\n**Common Tech Vocabulary:**\n\n**โทรศัพท์ (toh-rá-sàp)** = Phone/Telephone\n• The standard word for phone\n• Example: **โทรศัพท์เสีย (toh-rá-sàp sǐa)** = \"My phone is broken\"\n\n**ไวไฟ (wai-fai)** = WiFi\n• You'll hear this everywhere!\n• **มีไวไฟไหม (mii wai-fai mái)** = \"Do you have WiFi?\"\n• **รหัสไวไฟอะไร (rá-hàt wai-fai à-rai)** = \"What's the WiFi password?\"\n\n**แบตเตอรี่ (bɛ̀ɛt-dtəə-rîi)** = Battery\n• **แบตหมด (bɛ̀ɛt mòt)** = \"Battery is dead\" (VERY common phrase!)\n• **แบตต่ำ (bɛ̀ɛt dtàm)** = \"Battery is low\"\n\n**ที่ชาร์จ (thîi châat)** = Charger\n• **มีที่ชาร์จไหม (mii thîi châat mái)** = \"Do you have a charger?\"\n• **ชาร์จโทรศัพท์ (châat toh-rá-sàp)** = \"Charge the phone\"\n\n**Common Tech Actions:**\n\n**เล่น (lên)** = Play/Use\n• **เล่นโทรศัพท์ (lên toh-rá-sàp)** = \"Use the phone\" (literally \"play phone\")\n• **เล่นเกม (lên geem)** = \"Play games\"\n• **เล่นไอจี (lên ai-jii)** = \"Use IG\"\n\n**เปิด (bpə̀ət)** / **ปิด (bpìt)** = Open/Turn on / Close/Turn off\n• **เปิดโทรศัพท์ (bpə̀ət toh-rá-sàp)** = \"Turn on the phone\"\n• **ปิดโทรศัพท์ (bpìt toh-rá-sàp)** = \"Turn off the phone\"\n• **เปิดไวไฟ (bpə̀ət wai-fai)** = \"Turn on WiFi\"\n\n**ส่ง (sòng)** / **รับ (ráp)** = Send / Receive\n• **ส่งข้อความ (sòng khɔ̂ɔ-khwaam)** = \"Send a message\"\n• **รับสาย (ráp sǎai)** = \"Answer the phone\" (literally \"receive the line\")\n\n**Common Tech Problems:**\n\n**เสีย (sǐa)** = Broken/Damaged\n• **โทรศัพท์เสีย (toh-rá-sàp sǐa)** = \"Phone is broken\"\n• **ไวไฟเสีย (wai-fai sǐa)** = \"WiFi is broken\"\n\n**หมด (mòt)** = Run out/Empty\n• **แบตหมด (bɛ̀ɛt mòt)** = \"Battery is dead\"\n• **เน็ตหมด (nét mòt)** = \"Out of data\"\n\n**ช้า (cháa)** / **เร็ว (reo)** = Slow / Fast\n• **อินเทอร์เน็ตช้า (in-təə-nét cháa)** = \"Internet is slow\"\n• **ไวไฟเร็ว (wai-fai reo)** = \"WiFi is fast\"\n\n**ใช้ไม่ได้ (chái mâi dâai)** = Can't use/Doesn't work\n• **โทรศัพท์ใช้ไม่ได้ (toh-rá-sàp chái mâi dâai)** = \"Phone doesn't work\"\n• **ไวไฟใช้ไม่ได้ (wai-fai chái mâi dâai)** = \"WiFi doesn't work\"\n\n**Useful Tech Phrases:**\n\n• **มีที่ชาร์จไหม (mii thîi châat mái)** = \"Do you have a charger?\"\n• **แบตหมดแล้ว (bɛ̀ɛt mòt lɛ́ɛo)** = \"Battery is dead\" (already)\n• **ไวไฟใช้ไม่ได้ (wai-fai chái mâi dâai)** = \"WiFi doesn't work\"\n• **โทรศัพท์เสีย (toh-rá-sàp sǐa)** = \"Phone is broken\"\n• **อินเทอร์เน็ตช้ามาก (in-təə-nét cháa mâak)** = \"Internet is very slow\"\n\n**Pro Tip:** Thailand has excellent internet infrastructure! You'll find WiFi almost everywhere, from cafes to 7-Elevens. Don't be shy about asking **มีไวไฟไหม (mii wai-fai mái)** = \"Do you have WiFi?\"",
                [LanguageCode.FRENCH]: "**La Thaïlande est EXTRÊMEMENT technophile !** Comprendre la technologie locale et les applications est essentiel pour la vie quotidienne.\n\n**Applications essentielles en Thaïlande :**\n\n**1. LINE (ไลน์ - lai)**\n• L'application de messagerie en Thaïlande\n• Tout le monde utilise LINE, pas WhatsApp !\n• Si vous voulez rester en contact avec des amis thaïlandais, vous AVEZ BESOIN de LINE\n\n**2. Grab (แกร็บ) & Bolt (โบลท์)**\n• Applications de transport (comme Uber)\n• Beaucoup plus sûres et moins chères que les taxis réguliers !\n\n**Vocabulaire technologique courant :**\n\n**โทรศัพท์ (toh-rá-sàp)** = Téléphone portable\n**ไวไฟ (wai-fai)** = WiFi\n**แบตเตอรี่ (bɛ̀ɛt-dtəə-rîi)** = Batterie\n**ที่ชาร์จ (thîi châat)** = Chargeur",
                [LanguageCode.PORTUGUESE]: "**A Tailândia é EXTREMAMENTE tecnológica!** Entender a tecnologia local e os aplicativos é essencial para a vida diária.\n\n**Aplicativos essenciais na Tailândia:**\n\n**1. LINE (ไลน์ - lai)**\n• O aplicativo de mensagens na Tailândia\n• Todo mundo usa LINE, não WhatsApp!\n• Se você quer manter contato com amigos tailandeses, você PRECISA do LINE\n\n**2. Grab (แกร็บ) & Bolt (โบลท์)**\n• Aplicativos de transporte (como Uber)\n• Muito mais seguros e baratos que táxis regulares!\n\n**Vocabulário tecnológico comum:**\n\n**โทรศัพท์ (toh-rá-sàp)** = Celular\n**ไวไฟ (wai-fai)** = WiFi\n**แบตเตอรี่ (bɛ̀ɛt-dtəə-rîi)** = Bateria\n**ที่ชาร์จ (thîi châat)** = Carregador",
                [LanguageCode.MANDARIN]: "**泰國非常精通科技！** 了解當地科技和應用程式對日常生活至關重要。\n\n**泰國必備應用程式：**\n\n**1. LINE (ไลน์ - lai)**\n• 泰國的通訊應用程式\n• 每個人都用LINE，不是WhatsApp！\n• 如果你想和泰國朋友保持聯繫，你需要LINE\n\n**2. Grab (แกร็บ) & Bolt (โบลท์)**\n• 叫車應用程式（像Uber）\n• 比普通出租車更安全和便宜！\n\n**常用科技詞彙：**\n\n**โทรศัพท์ (toh-rá-sàp)** = 手機\n**ไวไฟ (wai-fai)** = WiFi\n**แบตเตอรี่ (bɛ̀ɛt-dtəə-rîi)** = 電池\n**ที่ชาร์จ (thîi châat)** = 充電器",
            }
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to describe common tech problems.",
                [LanguageCode.FRENCH]: "Organisez les mots pour décrire des problèmes technologiques courants.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para descrever problemas tecnológicos comuns.",
                [LanguageCode.MANDARIN]: "排列單詞以描述常見的科技問題。",
            },
            sentences: [
                { correctOrder: ["โทรศัพท์", "เสีย"], hint: { [LanguageCode.ENGLISH]: "Phone is broken.", [LanguageCode.FRENCH]: "Le téléphone est cassé.", [LanguageCode.PORTUGUESE]: "O celular está quebrado.", [LanguageCode.MANDARIN]: "手機壞了。" } },
                { correctOrder: ["แบต", "หมด", "แล้ว"], hint: { [LanguageCode.ENGLISH]: "Battery is dead.", [LanguageCode.FRENCH]: "La batterie est morte.", [LanguageCode.PORTUGUESE]: "A bateria acabou.", [LanguageCode.MANDARIN]: "電池沒電了。" } },
                { correctOrder: ["ไวไฟ", "ช้า", "มาก"], hint: { [LanguageCode.ENGLISH]: "WiFi is very slow.", [LanguageCode.FRENCH]: "Le WiFi est très lent.", [LanguageCode.PORTUGUESE]: "O WiFi está muito lento.", [LanguageCode.MANDARIN]: "WiFi很慢。" } },
                { correctOrder: ["อินเทอร์เน็ต", "ใช้", "ไม่", "ได้"], hint: { [LanguageCode.ENGLISH]: "Internet doesn't work.", [LanguageCode.FRENCH]: "Internet ne fonctionne pas.", [LanguageCode.PORTUGUESE]: "Internet não funciona.", [LanguageCode.MANDARIN]: "網路不能用。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the sentences about devices and technology.",
                [LanguageCode.FRENCH]: "Complétez les phrases sur les appareils et la technologie.",
                [LanguageCode.PORTUGUESE]: "Complete as frases sobre dispositivos e tecnologia.",
                [LanguageCode.MANDARIN]: "完成關於設備和科技的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "มี___ไหม", [LanguageCode.FRENCH]: "Avez-vous du___?", [LanguageCode.PORTUGUESE]: "Você tem___?", [LanguageCode.MANDARIN]: "你有___嗎？" }, correctAnswer: "ไวไฟ/ที่ชาร์จ", end: { [LanguageCode.ENGLISH]: " (Do you have WiFi/charger?)", [LanguageCode.FRENCH]: " (WiFi/chargeur)", [LanguageCode.PORTUGUESE]: " (WiFi/carregador)", [LanguageCode.MANDARIN]: " (WiFi/充電器)" } },
                { start: { [LanguageCode.ENGLISH]: "___หมดแล้ว", [LanguageCode.FRENCH]: "La___est morte", [LanguageCode.PORTUGUESE]: "A___acabou", [LanguageCode.MANDARIN]: "___沒電了" }, correctAnswer: "แบต", end: { [LanguageCode.ENGLISH]: " (Battery is dead)", [LanguageCode.FRENCH]: " (batterie)", [LanguageCode.PORTUGUESE]: " (bateria)", [LanguageCode.MANDARIN]: " (電池)" } },
                { start: { [LanguageCode.ENGLISH]: "เล่น___", [LanguageCode.FRENCH]: "Utiliser___", [LanguageCode.PORTUGUESE]: "Usar___", [LanguageCode.MANDARIN]: "使用___" }, correctAnswer: "โทรศัพท์/ไอจี/ทิกต็อก", end: { [LanguageCode.ENGLISH]: " (Use phone/IG/TikTok)", [LanguageCode.FRENCH]: " (téléphone/IG/TikTok)", [LanguageCode.PORTUGUESE]: " (celular/IG/TikTok)", [LanguageCode.MANDARIN]: " (手機/IG/TikTok)" } },
                { start: { [LanguageCode.ENGLISH]: "___โทรศัพท์", [LanguageCode.FRENCH]: "___le téléphone", [LanguageCode.PORTUGUESE]: "___o celular", [LanguageCode.MANDARIN]: "___手機" }, correctAnswer: "ชาร์จ/เปิด/ปิด", end: { [LanguageCode.ENGLISH]: " (Charge/Turn on/Turn off the phone)", [LanguageCode.FRENCH]: " (Charger/Allumer/Éteindre)", [LanguageCode.PORTUGUESE]: " (Carregar/Ligar/Desligar)", [LanguageCode.MANDARIN]: " (充電/開機/關機)" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the tech actions to the devices.",
                [LanguageCode.FRENCH]: "Associez les actions technologiques aux appareils.",
                [LanguageCode.PORTUGUESE]: "Relacione as ações tecnológicas aos dispositivos.",
                [LanguageCode.MANDARIN]: "將科技動作與設備配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "charge the phone", [LanguageCode.FRENCH]: "charger le téléphone", [LanguageCode.PORTUGUESE]: "carregar o celular", [LanguageCode.MANDARIN]: "充電手機" }, answer: { [LanguageCode.ENGLISH]: "ชาร์จโทรศัพท์", [LanguageCode.FRENCH]: "ชาร์จโทรศัพท์", [LanguageCode.PORTUGUESE]: "ชาร์จโทรศัพท์", [LanguageCode.MANDARIN]: "ชาร์จโทรศัพท์" } },
                { prompt: { [LanguageCode.ENGLISH]: "turn on WiFi", [LanguageCode.FRENCH]: "allumer le WiFi", [LanguageCode.PORTUGUESE]: "ligar o WiFi", [LanguageCode.MANDARIN]: "打開WiFi" }, answer: { [LanguageCode.ENGLISH]: "เปิดไวไฟ", [LanguageCode.FRENCH]: "เปิดไวไฟ", [LanguageCode.PORTUGUESE]: "เปิดไวไฟ", [LanguageCode.MANDARIN]: "เปิดไวไฟ" } },
                { prompt: { [LanguageCode.ENGLISH]: "use IG", [LanguageCode.FRENCH]: "utiliser IG", [LanguageCode.PORTUGUESE]: "usar IG", [LanguageCode.MANDARIN]: "使用IG" }, answer: { [LanguageCode.ENGLISH]: "เล่นไอจี", [LanguageCode.FRENCH]: "เล่นไอจี", [LanguageCode.PORTUGUESE]: "เล่นไอจี", [LanguageCode.MANDARIN]: "เล่นไอจี" } },
                { prompt: { [LanguageCode.ENGLISH]: "call a Grab", [LanguageCode.FRENCH]: "appeler un Grab", [LanguageCode.PORTUGUESE]: "chamar um Grab", [LanguageCode.MANDARIN]: "叫Grab" }, answer: { [LanguageCode.ENGLISH]: "เรียกแกร็บ", [LanguageCode.FRENCH]: "เรียกแกร็บ", [LanguageCode.PORTUGUESE]: "เรียกแกร็บ", [LanguageCode.MANDARIN]: "เรียกแกร็บ" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct word for each tech situation.",
                [LanguageCode.FRENCH]: "Choisissez le bon mot pour chaque situation technologique.",
                [LanguageCode.PORTUGUESE]: "Escolha a palavra correta para cada situação tecnológica.",
                [LanguageCode.MANDARIN]: "為每個科技情況選擇正確的詞語。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "What is the most common messaging app in Thailand?", [LanguageCode.FRENCH]: "Quelle est l'application de messagerie la plus courante en Thaïlande ?", [LanguageCode.PORTUGUESE]: "Qual é o aplicativo de mensagens mais comum na Tailândia?", [LanguageCode.MANDARIN]: "泰國最常用的通訊軟體是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "WhatsApp", [LanguageCode.FRENCH]: "WhatsApp", [LanguageCode.PORTUGUESE]: "WhatsApp", [LanguageCode.MANDARIN]: "WhatsApp" },
                        { [LanguageCode.ENGLISH]: "ไลน์", [LanguageCode.FRENCH]: "ไลน์", [LanguageCode.PORTUGUESE]: "ไลน์", [LanguageCode.MANDARIN]: "ไลน์" },
                        { [LanguageCode.ENGLISH]: "WeChat", [LanguageCode.FRENCH]: "WeChat", [LanguageCode.PORTUGUESE]: "WeChat", [LanguageCode.MANDARIN]: "WeChat" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Your phone battery is dead. You say: แบต___", [LanguageCode.FRENCH]: "La batterie de votre téléphone est morte. Vous dites : แบต___", [LanguageCode.PORTUGUESE]: "A bateria do seu celular acabou. Você diz: แบต___", [LanguageCode.MANDARIN]: "你的手機沒電了。你說：แบต___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เร็ว", [LanguageCode.FRENCH]: "เร็ว", [LanguageCode.PORTUGUESE]: "เร็ว (rápido)", [LanguageCode.MANDARIN]: "เร็ว (快)" },
                        { [LanguageCode.ENGLISH]: "หมด", [LanguageCode.FRENCH]: "หมด", [LanguageCode.PORTUGUESE]: "หมด", [LanguageCode.MANDARIN]: "หมด (沒電了)" },
                        { [LanguageCode.ENGLISH]: "ช้า", [LanguageCode.FRENCH]: "ช้า", [LanguageCode.PORTUGUESE]: "ช้า", [LanguageCode.MANDARIN]: "ช้า (慢)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You want to use IG. You say: เล่น___", [LanguageCode.FRENCH]: "Vous voulez utiliser IG. Vous dites : เล่น___", [LanguageCode.PORTUGUESE]: "Você quer usar IG. Você diz: เล่น___", [LanguageCode.MANDARIN]: "你想使用IG。你說：เล่น___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ไอจี", [LanguageCode.FRENCH]: "ไอจี", [LanguageCode.PORTUGUESE]: "ไอจี", [LanguageCode.MANDARIN]: "ไอจี" },
                        { [LanguageCode.ENGLISH]: "ไวไฟ", [LanguageCode.FRENCH]: "ไวไฟ", [LanguageCode.PORTUGUESE]: "ไวไฟ", [LanguageCode.MANDARIN]: "ไวไฟ" },
                        { [LanguageCode.ENGLISH]: "แบต", [LanguageCode.FRENCH]: "แบต", [LanguageCode.PORTUGUESE]: "แบต", [LanguageCode.MANDARIN]: "แบต" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete these real-life tech scenarios.",
                [LanguageCode.FRENCH]: "Complétez ces scénarios technologiques réels.",
                [LanguageCode.PORTUGUESE]: "Complete estes cenários tecnológicos da vida real.",
                [LanguageCode.MANDARIN]: "完成這些真實的科技場景。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "You arrive at a coffee shop: ___ไวไฟอะไร", [LanguageCode.FRENCH]: "Vous arrivez dans un café : ___ไวไฟอะไร", [LanguageCode.PORTUGUESE]: "Você chega em uma cafeteria: ___ไวไฟอะไร", [LanguageCode.MANDARIN]: "你到咖啡店：___ไวไฟอะไร" }, correctAnswer: "รหัส", end: { [LanguageCode.ENGLISH]: " (What's the WiFi password?)", [LanguageCode.FRENCH]: " (Quel est le mot de passe WiFi ?)", [LanguageCode.PORTUGUESE]: " (Qual é a senha do WiFi?)", [LanguageCode.MANDARIN]: " (WiFi密碼是什麼？)" } },
                { start: { [LanguageCode.ENGLISH]: "You need to pay at 7-Eleven: ___คิวอาร์โค้ดได้ไหม", [LanguageCode.FRENCH]: "Vous devez payer au 7-Eleven : ___คิวอาร์โค้ดได้ไหม", [LanguageCode.PORTUGUESE]: "Você precisa pagar no 7-Eleven: ___คิวอาร์โค้ดได้ไหม", [LanguageCode.MANDARIN]: "你需要在7-11付款：___คิวอาร์โค้ดได้ไหม" }, correctAnswer: "สแกน", end: { [LanguageCode.ENGLISH]: " (Can I scan QR code?)", [LanguageCode.FRENCH]: " (Puis-je scanner le QR code ?)", [LanguageCode.PORTUGUESE]: " (Posso escanear o QR code?)", [LanguageCode.MANDARIN]: " (可以掃QR碼嗎？)" } },
                { start: { [LanguageCode.ENGLISH]: "Friend asks for your contact: มี___ไหม", [LanguageCode.FRENCH]: "Un ami demande votre contact : มี___ไหม", [LanguageCode.PORTUGUESE]: "Amigo pede seu contato: มี___ไหม", [LanguageCode.MANDARIN]: "朋友問你的聯絡方式：มี___ไหม" }, correctAnswer: "ไลน์", end: { [LanguageCode.ENGLISH]: " (Do you have LINE?)", [LanguageCode.FRENCH]: " (As-tu LINE ?)", [LanguageCode.PORTUGUESE]: " (Você tem LINE?)", [LanguageCode.MANDARIN]: " (你有LINE嗎？)" } },
                { start: { [LanguageCode.ENGLISH]: "You want to get home: ___แกร็บกลับบ้าน", [LanguageCode.FRENCH]: "Vous voulez rentrer : ___แกร็บกลับบ้าน", [LanguageCode.PORTUGUESE]: "Você quer ir para casa: ___แกร็บกลับบ้าน", [LanguageCode.MANDARIN]: "你想回家：___แกร็บกลับบ้าน" }, correctAnswer: "เรียก", end: { [LanguageCode.ENGLISH]: " (Call a Grab home)", [LanguageCode.FRENCH]: " (Appeler un Grab)", [LanguageCode.PORTUGUESE]: " (Chamar um Grab)", [LanguageCode.MANDARIN]: " (叫Grab回家)" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best response for each situation.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure réponse pour chaque situation.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor resposta para cada situação.",
                [LanguageCode.MANDARIN]: "為每種情況選擇最佳回應。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "A Thai friend wants to stay in touch after you meet. They'll most likely ask:", [LanguageCode.FRENCH]: "Un ami thaïlandais veut garder contact après votre rencontre. Il demandera probablement :", [LanguageCode.PORTUGUESE]: "Um amigo tailandês quer manter contato depois que vocês se conhecem. Ele provavelmente perguntará:", [LanguageCode.MANDARIN]: "一個泰國朋友在見面後想保持聯絡。他們最可能會問：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "มีเบอร์ไหม (Do you have a number?)", [LanguageCode.FRENCH]: "มีเบอร์ไหม (Tu as un numéro ?)", [LanguageCode.PORTUGUESE]: "มีเบอร์ไหม (Você tem número?)", [LanguageCode.MANDARIN]: "มีเบอร์ไหม (你有號碼嗎？)" },
                        { [LanguageCode.ENGLISH]: "มีไลน์ไหม (Do you have LINE?)", [LanguageCode.FRENCH]: "มีไลน์ไหม (Tu as LINE ?)", [LanguageCode.PORTUGUESE]: "มีไลน์ไหม (Você tem LINE?)", [LanguageCode.MANDARIN]: "มีไลน์ไหม (你有LINE嗎？)" },
                        { [LanguageCode.ENGLISH]: "มีอีเมลไหม (Do you have email?)", [LanguageCode.FRENCH]: "มีอีเมลไหม (Tu as un email ?)", [LanguageCode.PORTUGUESE]: "มีอีเมลไหม (Você tem email?)", [LanguageCode.MANDARIN]: "มีอีเมลไหม (你有電郵嗎？)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're at a restaurant and your phone dies. You need to:", [LanguageCode.FRENCH]: "Vous êtes au restaurant et votre téléphone meurt. Vous devez :", [LanguageCode.PORTUGUESE]: "Você está em um restaurante e seu celular descarrega. Você precisa:", [LanguageCode.MANDARIN]: "你在餐廳，手機沒電了。你需要：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขอไวไฟหน่อย (Can I have WiFi?)", [LanguageCode.FRENCH]: "ขอไวไฟหน่อย (Puis-je avoir le WiFi ?)", [LanguageCode.PORTUGUESE]: "ขอไวไฟหน่อย (Posso ter WiFi?)", [LanguageCode.MANDARIN]: "ขอไวไฟหน่อย (可以給我WiFi嗎？)" },
                        { [LanguageCode.ENGLISH]: "ขอที่ชาร์จหน่อย (Can I have a charger?)", [LanguageCode.FRENCH]: "ขอที่ชาร์จหน่อย (Puis-je avoir un chargeur ?)", [LanguageCode.PORTUGUESE]: "ขอที่ชาร์จหน่อย (Posso ter um carregador?)", [LanguageCode.MANDARIN]: "ขอที่ชาร์จหน่อย (可以給我充電器嗎？)" },
                        { [LanguageCode.ENGLISH]: "ขอโทรศัพท์หน่อย (Can I have a phone?)", [LanguageCode.FRENCH]: "ขอโทรศัพท์หน่อย (Puis-je avoir un téléphone ?)", [LanguageCode.PORTUGUESE]: "ขอโทรศัพท์หน่อย (Posso ter um telefone?)", [LanguageCode.MANDARIN]: "ขอโทรศัพท์หน่อย (可以給我電話嗎？)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You want to share photos with a Thai friend. The easiest way is:", [LanguageCode.FRENCH]: "Vous voulez partager des photos avec un ami thaïlandais. Le moyen le plus simple est :", [LanguageCode.PORTUGUESE]: "Você quer compartilhar fotos com um amigo tailandês. A maneira mais fácil é:", [LanguageCode.MANDARIN]: "你想和泰國朋友分享照片。最簡單的方法是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ส่งทางอีเมล", [LanguageCode.FRENCH]: "ส่งทางอีเมล", [LanguageCode.PORTUGUESE]: "ส่งทางอีเมล", [LanguageCode.MANDARIN]: "ส่งทางอีเมล (通過電郵發送)" },
                        { [LanguageCode.ENGLISH]: "ส่งทางไลน์", [LanguageCode.FRENCH]: "ส่งทางไลน์", [LanguageCode.PORTUGUESE]: "ส่งทางไลน์", [LanguageCode.MANDARIN]: "ส่งทางไลน์ (通過LINE發送)" },
                        { [LanguageCode.ENGLISH]: "ส่งทาง SMS (Send via SMS)", [LanguageCode.FRENCH]: "ส่งทาง SMS (Envoyer via SMS)", [LanguageCode.PORTUGUESE]: "ส่งทาง SMS (Enviar via SMS)", [LanguageCode.MANDARIN]: "ส่งทาง SMS (通過SMS發送)" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put these common tech phrases in order.",
                [LanguageCode.FRENCH]: "Mettez ces phrases technologiques courantes dans l'ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque essas frases tecnológicas comuns em ordem.",
                [LanguageCode.MANDARIN]: "將這些常見的科技短語按順序排列。",
            },
            sentences: [
                { correctOrder: ["ส่ง", "ข้อความ", "ทาง", "ไลน์"], hint: { [LanguageCode.ENGLISH]: "Send a message via LINE.", [LanguageCode.FRENCH]: "Envoyer un message via LINE.", [LanguageCode.PORTUGUESE]: "Enviar mensagem via LINE.", [LanguageCode.MANDARIN]: "通過LINE發送訊息。" } },
                { correctOrder: ["สแกน", "คิวอาร์โค้ด", "จ่าย", "เงิน"], hint: { [LanguageCode.ENGLISH]: "Scan QR code to pay.", [LanguageCode.FRENCH]: "Scanner le QR code pour payer.", [LanguageCode.PORTUGUESE]: "Escanear QR code para pagar.", [LanguageCode.MANDARIN]: "掃描QR碼付款。" } },
                { correctOrder: ["โทรหา", "แม่", "ทุกวัน"], hint: { [LanguageCode.ENGLISH]: "Call mom every day.", [LanguageCode.FRENCH]: "Appeler maman tous les jours.", [LanguageCode.PORTUGUESE]: "Ligar para a mãe todos os dias.", [LanguageCode.MANDARIN]: "每天打電話給媽媽。" } },
                { correctOrder: ["โหลด", "แอพ", "ใหม่"], hint: { [LanguageCode.ENGLISH]: "Download a new app.", [LanguageCode.FRENCH]: "Télécharger une nouvelle application.", [LanguageCode.PORTUGUESE]: "Baixar um novo aplicativo.", [LanguageCode.MANDARIN]: "下載新應用程式。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the problem to the solution.",
                [LanguageCode.FRENCH]: "Associez le problème à la solution.",
                [LanguageCode.PORTUGUESE]: "Relacione o problema à solução.",
                [LanguageCode.MANDARIN]: "將問題與解決方案配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "แบตหมด", [LanguageCode.FRENCH]: "แบตหมด", [LanguageCode.PORTUGUESE]: "แบตหมด", [LanguageCode.MANDARIN]: "แบตหมด (電池沒電)" }, answer: { [LanguageCode.ENGLISH]: "ชาร์จโทรศัพท์", [LanguageCode.FRENCH]: "ชาร์จโทรศัพท์", [LanguageCode.PORTUGUESE]: "ชาร์จโทรศัพท์", [LanguageCode.MANDARIN]: "ชาร์จโทรศัพท์ (充電)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ไวไฟช้า", [LanguageCode.FRENCH]: "ไวไฟช้า", [LanguageCode.PORTUGUESE]: "ไวไฟช้า", [LanguageCode.MANDARIN]: "ไวไฟช้า (WiFi慢)" }, answer: { [LanguageCode.ENGLISH]: "เปิดปิดใหม่", [LanguageCode.FRENCH]: "เปิดปิดใหม่ (redémarrer)", [LanguageCode.PORTUGUESE]: "เปิดปิดใหม่", [LanguageCode.MANDARIN]: "เปิดปิดใหม่ (重啟)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ต้องจ่ายเงิน", [LanguageCode.FRENCH]: "ต้องจ่ายเงิน", [LanguageCode.PORTUGUESE]: "ต้องจ่ายเงิน", [LanguageCode.MANDARIN]: "ต้องจ่ายเงิน (需要付款)" }, answer: { [LanguageCode.ENGLISH]: "สแกนคิวอาร์โค้ด", [LanguageCode.FRENCH]: "สแกนคิวอาร์โค้ด", [LanguageCode.PORTUGUESE]: "สแกนคิวอาร์โค้ด", [LanguageCode.MANDARIN]: "สแกนคิวอาร์โค้ด (掃QR)" } },
                { prompt: { [LanguageCode.ENGLISH]: "อยากติดต่อเพื่อน", [LanguageCode.FRENCH]: "อยากติดต่อเพื่อน", [LanguageCode.PORTUGUESE]: "อยากติดต่อเพื่อน", [LanguageCode.MANDARIN]: "อยากติดต่อเพื่อน (想聯絡朋友)" }, answer: { [LanguageCode.ENGLISH]: "ส่งข้อความไลน์", [LanguageCode.FRENCH]: "ส่งข้อความไลน์", [LanguageCode.PORTUGUESE]: "ส่งข้อความไลน์", [LanguageCode.MANDARIN]: "ส่งข้อความไลน์ (發LINE訊息)" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete these conversations you'll actually have in Thailand.",
                [LanguageCode.FRENCH]: "Complétez ces conversations que vous aurez réellement en Thaïlande.",
                [LanguageCode.PORTUGUESE]: "Complete essas conversas que você realmente terá na Tailândia.",
                [LanguageCode.MANDARIN]: "完成這些你在泰國會實際遇到的對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "At 7-Eleven cashier: จ่าย___ได้ไหม", [LanguageCode.FRENCH]: "Au caissier 7-Eleven : จ่าย___ได้ไหม", [LanguageCode.PORTUGUESE]: "No caixa do 7-Eleven: จ่าย___ได้ไหม", [LanguageCode.MANDARIN]: "在7-11收銀台：จ่าย___ได้ไหม" }, correctAnswer: "เงินสด/บัตร", end: { [LanguageCode.ENGLISH]: " (Can I pay cash/card?)", [LanguageCode.FRENCH]: " (Puis-je payer en espèces/carte ?)", [LanguageCode.PORTUGUESE]: " (Posso pagar em dinheiro/cartão?)", [LanguageCode.MANDARIN]: " (可以付現金/卡嗎？)" } },
                { start: { [LanguageCode.ENGLISH]: "Taxi driver asks where you're going: จะไปไหน - You say: ___แกร็บแล้ว", [LanguageCode.FRENCH]: "Le chauffeur de taxi demande où vous allez : จะไปไหน - Vous dites : ___แกร็บแล้ว", [LanguageCode.PORTUGUESE]: "Motorista de táxi pergunta para onde você vai: จะไปไหน - Você diz: ___แกร็บแล้ว", [LanguageCode.MANDARIN]: "計程車司機問你去哪：จะไปไหน - 你說：___แกร็บแล้ว" }, correctAnswer: "เรียก", end: { [LanguageCode.ENGLISH]: " (I already called Grab)", [LanguageCode.FRENCH]: " (J'ai déjà appelé Grab)", [LanguageCode.PORTUGUESE]: " (Já chamei Grab)", [LanguageCode.MANDARIN]: " (我已經叫了Grab)" } },
                { start: { [LanguageCode.ENGLISH]: "New friend: เพิ่มเพื่อน___ได้ไหม", [LanguageCode.FRENCH]: "Nouvel ami : เพิ่มเพื่อน___ได้ไหม", [LanguageCode.PORTUGUESE]: "Novo amigo: เพิ่มเพื่อน___ได้ไหม", [LanguageCode.MANDARIN]: "新朋友：เพิ่มเพื่อน___ได้ไหม" }, correctAnswer: "ไลน์", end: { [LanguageCode.ENGLISH]: " (Can I add you on LINE?)", [LanguageCode.FRENCH]: " (Puis-je t'ajouter sur LINE ?)", [LanguageCode.PORTUGUESE]: " (Posso te adicionar no LINE?)", [LanguageCode.MANDARIN]: " (可以加你LINE嗎？)" } },
                { start: { [LanguageCode.ENGLISH]: "Hotel reception: ___ไวไฟคืออะไร", [LanguageCode.FRENCH]: "Réception de l'hôtel : ___ไวไฟคืออะไร", [LanguageCode.PORTUGUESE]: "Recepção do hotel: ___ไวไฟคืออะไร", [LanguageCode.MANDARIN]: "酒店櫃台：___ไวไฟคืออะไร" }, correctAnswer: "รหัส", end: { [LanguageCode.ENGLISH]: " (What's the WiFi password?)", [LanguageCode.FRENCH]: " (Quel est le mot de passe WiFi ?)", [LanguageCode.PORTUGUESE]: " (Qual é a senha do WiFi?)", [LanguageCode.MANDARIN]: " (WiFi密碼是什麼？)" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Real-world tech situations - what would you say?",
                [LanguageCode.FRENCH]: "Situations technologiques du monde réel - que diriez-vous ?",
                [LanguageCode.PORTUGUESE]: "Situações tecnológicas do mundo real - o que você diria?",
                [LanguageCode.MANDARIN]: "真實世界的科技情況 - 你會說什麼？",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You're at a Thai friend's house and need to use their WiFi:", [LanguageCode.FRENCH]: "Vous êtes chez un ami thaïlandais et devez utiliser son WiFi :", [LanguageCode.PORTUGUESE]: "Você está na casa de um amigo tailandês e precisa usar o WiFi dele:", [LanguageCode.MANDARIN]: "你在泰國朋友家裡需要用WiFi：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขอรหัสไวไฟหน่อย (Can I have WiFi password?)", [LanguageCode.FRENCH]: "ขอรหัสไวไฟหน่อย (Puis-je avoir le mot de passe WiFi ?)", [LanguageCode.PORTUGUESE]: "ขอรหัสไวไฟหน่อย (Posso ter a senha do WiFi?)", [LanguageCode.MANDARIN]: "ขอรหัสไวไฟหน่อย (可以給我WiFi密碼嗎？)" },
                        { [LanguageCode.ENGLISH]: "ให้ไวไฟหน่อย", [LanguageCode.FRENCH]: "ให้ไวไฟหน่อย (Donne-moi le WiFi)", [LanguageCode.PORTUGUESE]: "ให้ไวไฟหน่อย (Me dá WiFi)", [LanguageCode.MANDARIN]: "ให้ไวไฟหน่อย (給我WiFi)" },
                        { [LanguageCode.ENGLISH]: "อยากได้ไวไฟ", [LanguageCode.FRENCH]: "อยากได้ไวไฟ", [LanguageCode.PORTUGUESE]: "อยากได้ไวไฟ", [LanguageCode.MANDARIN]: "อยากได้ไวไฟ (我想要WiFi)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You meet someone cool at a bar and want to stay in touch:", [LanguageCode.FRENCH]: "Vous rencontrez quelqu'un de sympa dans un bar et voulez rester en contact :", [LanguageCode.PORTUGUESE]: "Você conhece alguém legal em um bar e quer manter contato:", [LanguageCode.MANDARIN]: "你在酒吧遇到一個很酷的人想保持聯絡：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขอเบอร์โทรหน่อย (Can I have your phone number?)", [LanguageCode.FRENCH]: "ขอเบอร์โทรหน่อย (Puis-je avoir ton numéro ?)", [LanguageCode.PORTUGUESE]: "ขอเบอร์โทรหน่อย (Posso ter seu número?)", [LanguageCode.MANDARIN]: "ขอเบอร์โทรหน่อย (可以給我你的號碼嗎？)" },
                        { [LanguageCode.ENGLISH]: "เพิ่มไลน์ได้ไหม (Can I add you on LINE?)", [LanguageCode.FRENCH]: "เพิ่มไลน์ได้ไหม (Puis-je t'ajouter sur LINE ?)", [LanguageCode.PORTUGUESE]: "เพิ่มไลน์ได้ไหม (Posso te adicionar no LINE?)", [LanguageCode.MANDARIN]: "เพิ่มไลน์ได้ไหม (可以加你LINE嗎？)" },
                        { [LanguageCode.ENGLISH]: "ขออีเมลหน่อย (Can I have your email?)", [LanguageCode.FRENCH]: "ขออีเมลหน่อย (Puis-je avoir ton email ?)", [LanguageCode.PORTUGUESE]: "ขออีเมลหน่อย (Posso ter seu email?)", [LanguageCode.MANDARIN]: "ขออีเมลหน่อย (可以給我你的電郵嗎？)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Your Grab driver can't find you. You need to:", [LanguageCode.FRENCH]: "Votre chauffeur Grab ne vous trouve pas. Vous devez :", [LanguageCode.PORTUGUESE]: "Seu motorista Grab não consegue te encontrar. Você precisa:", [LanguageCode.MANDARIN]: "你的Grab司機找不到你。你需要：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "โทรหาคนขับ", [LanguageCode.FRENCH]: "โทรหาคนขับ", [LanguageCode.PORTUGUESE]: "โทรหาคนขับ", [LanguageCode.MANDARIN]: "โทรหาคนขับ (打電話給司機)" },
                        { [LanguageCode.ENGLISH]: "เล่นไอจี", [LanguageCode.FRENCH]: "เล่นไอจี", [LanguageCode.PORTUGUESE]: "เล่นไอจี", [LanguageCode.MANDARIN]: "เล่นไอจี (用IG)" },
                        { [LanguageCode.ENGLISH]: "ชาร์จโทรศัพท์", [LanguageCode.FRENCH]: "ชาร์จโทรศัพท์ (Charger téléphone)", [LanguageCode.PORTUGUESE]: "ชาร์จโทรศัพท์", [LanguageCode.MANDARIN]: "ชาร์จโทรศัพท์ (充電)" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Common tech emergencies - arrange the words.",
                [LanguageCode.FRENCH]: "Urgences technologiques courantes - organisez les mots.",
                [LanguageCode.PORTUGUESE]: "Emergências tecnológicas comuns - organize as palavras.",
                [LanguageCode.MANDARIN]: "常見的科技緊急情況 - 排列單詞。",
            },
            sentences: [
                { correctOrder: ["แบต", "เหลือ", "10", "เปอร์เซ็นต์"], hint: { [LanguageCode.ENGLISH]: "Battery is at 10%.", [LanguageCode.FRENCH]: "La batterie est à 10%.", [LanguageCode.PORTUGUESE]: "Bateria está em 10%.", [LanguageCode.MANDARIN]: "電池剩10%。" } },
                { correctOrder: ["ไวไฟ", "ช้า", "เหลือเกิน"], hint: { [LanguageCode.ENGLISH]: "WiFi is extremely slow.", [LanguageCode.FRENCH]: "Le WiFi est extrêmement lent.", [LanguageCode.PORTUGUESE]: "WiFi está extremamente lento.", [LanguageCode.MANDARIN]: "WiFi極其慢。" } },
                { correctOrder: ["ลืม", "รหัส", "ไวไฟ"], hint: { [LanguageCode.ENGLISH]: "Forgot WiFi password.", [LanguageCode.FRENCH]: "Mot de passe WiFi oublié.", [LanguageCode.PORTUGUESE]: "Esqueci a senha do WiFi.", [LanguageCode.MANDARIN]: "忘記WiFi密碼。" } },
                { correctOrder: ["ต้อง", "โทรหา", "เพื่อน", "ด่วน"], hint: { [LanguageCode.ENGLISH]: "Need to call friend urgently.", [LanguageCode.FRENCH]: "Besoin d'appeler un ami de toute urgence.", [LanguageCode.PORTUGUESE]: "Preciso ligar para amigo urgentemente.", [LanguageCode.MANDARIN]: "需要緊急打電話給朋友。" } },
            ]
        },
    ],
    listeningSpeaking: {
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "อธิบายโทรศัพท์ของคุณ 3 ประโยค",
            [LanguageCode.FRENCH]: "อธิบายโทรศัพท์ของคุณ 3 ประโยค",
            [LanguageCode.PORTUGUESE]: "อธิบายโทรศัพท์ของคุณ 3 ประโยค",
            [LanguageCode.MANDARIN]: "อธิบายโทรศัพท์ของคุณ 3 ประโยค",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe your phone/tech in 3 sentences. Example: phǒm mii toh-rá-sàp, phǒm lên ai-jii thúk wan, bɛ̀ɛt mòt bɔ̀i bɔ̀i (I have a phone, I use IG every day, the battery dies often)",
            [LanguageCode.FRENCH]: "Décrivez votre téléphone/technologie en 3 phrases. Exemple : phǒm mii toh-rá-sàp, phǒm lên ai-jii thúk wan, bɛ̀ɛt mòt bɔ̀i bɔ̀i (J'ai un téléphone, j'utilise IG tous les jours, la batterie meurt souvent)",
            [LanguageCode.PORTUGUESE]: "Descreva seu telefone/tecnologia em 3 frases. Exemplo: phǒm mii toh-rá-sàp, phǒm lên ai-jii thúk wan, bɛ̀ɛt mòt bɔ̀i bɔ̀i (Eu tenho um celular, uso IG todos os dias, a bateria acaba frequentemente)",
            [LanguageCode.MANDARIN]: "用3句話描述你的手機/科技。例子：phǒm mii toh-rá-sàp, phǒm lên ai-jii thúk wan, bɛ̀ɛt mòt bɔ̀i bɔ̀i（我有手機，我每天用IG，電池經常沒電）",
        },
        speakingType: 'open-ended'
    }
};
