import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_6: Lesson = {
    id: "1.6",
    title: {
        [LanguageCode.ENGLISH]: "Core Verbs Set 2",
        [LanguageCode.FRENCH]: "Verbes de base (2)",
        [LanguageCode.PORTUGUESE]: "Verbos essenciais 2",
        [LanguageCode.MANDARIN]: "基礎動詞（二）",
    },
    vocabulary: [
        { thai: "เปิด", phonetic: "bpurt", translations: { [LanguageCode.ENGLISH]: "open", [LanguageCode.FRENCH]: "ouvrir", [LanguageCode.PORTUGUESE]: "abrir", [LanguageCode.MANDARIN]: "開" } },
        { thai: "ปิด", phonetic: "bpìt", translations: { [LanguageCode.ENGLISH]: "close", [LanguageCode.FRENCH]: "fermer", [LanguageCode.PORTUGUESE]: "fechar", [LanguageCode.MANDARIN]: "關" } },
        { thai: "อ่าน", phonetic: "àan", translations: { [LanguageCode.ENGLISH]: "read", [LanguageCode.FRENCH]: "lire", [LanguageCode.PORTUGUESE]: "ler", [LanguageCode.MANDARIN]: "讀" } },
        { thai: "เขียน", phonetic: "khǐan", translations: { [LanguageCode.ENGLISH]: "write", [LanguageCode.FRENCH]: "écrire", [LanguageCode.PORTUGUESE]: "escrever", [LanguageCode.MANDARIN]: "寫" } },
        { thai: "ฟัง", phonetic: "fang", translations: { [LanguageCode.ENGLISH]: "listen", [LanguageCode.FRENCH]: "écouter", [LanguageCode.PORTUGUESE]: "ouvir", [LanguageCode.MANDARIN]: "聽" } },
        { thai: "ถาม", phonetic: "thǎam", translations: { [LanguageCode.ENGLISH]: "ask", [LanguageCode.FRENCH]: "demander", [LanguageCode.PORTUGUESE]: "perguntar", [LanguageCode.MANDARIN]: "問" } },
        { thai: "ตอบ", phonetic: "dtàwp", translations: { [LanguageCode.ENGLISH]: "answer", [LanguageCode.FRENCH]: "répondre", [LanguageCode.PORTUGUESE]: "responder", [LanguageCode.MANDARIN]: "答" } },
        { thai: "รู้", phonetic: "rúu", translations: { [LanguageCode.ENGLISH]: "know", [LanguageCode.FRENCH]: "savoir", [LanguageCode.PORTUGUESE]: "saber", [LanguageCode.MANDARIN]: "知道" } },
        { thai: "เข้าใจ", phonetic: "khâo-jai", translations: { [LanguageCode.ENGLISH]: "understand", [LanguageCode.FRENCH]: "comprendre", [LanguageCode.PORTUGUESE]: "entender", [LanguageCode.MANDARIN]: "明白" } },
        { thai: "ช่วย", phonetic: "chûay", translations: { [LanguageCode.ENGLISH]: "help", [LanguageCode.FRENCH]: "aider", [LanguageCode.PORTUGUESE]: "ajudar", [LanguageCode.MANDARIN]: "幫忙" } },
        { thai: "ขอ", phonetic: "khɔ̌ɔ", translations: { [LanguageCode.ENGLISH]: "ask for/request", [LanguageCode.FRENCH]: "demander (un objet)", [LanguageCode.PORTUGUESE]: "pedir", [LanguageCode.MANDARIN]: "請求" } },
        { thai: "ให้", phonetic: "hâi", translations: { [LanguageCode.ENGLISH]: "give/let/to", [LanguageCode.FRENCH]: "donner/laisser", [LanguageCode.PORTUGUESE]: "dar/deixar", [LanguageCode.MANDARIN]: "給/讓" } },
        { thai: "ใช้", phonetic: "chái", translations: { [LanguageCode.ENGLISH]: "use", [LanguageCode.FRENCH]: "utiliser", [LanguageCode.PORTUGUESE]: "usar", [LanguageCode.MANDARIN]: "用" } },
        { thai: "คิด", phonetic: "khít", translations: { [LanguageCode.ENGLISH]: "think", [LanguageCode.FRENCH]: "penser", [LanguageCode.PORTUGUESE]: "pensar", [LanguageCode.MANDARIN]: "想" } },
        { thai: "รอ", phonetic: "rɔɔ", translations: { [LanguageCode.ENGLISH]: "wait", [LanguageCode.FRENCH]: "attendre", [LanguageCode.PORTUGUESE]: "esperar", [LanguageCode.MANDARIN]: "等" } },
        { thai: "เดิน", phonetic: "dəən", translations: { [LanguageCode.ENGLISH]: "walk", [LanguageCode.FRENCH]: "marcher", [LanguageCode.PORTUGUESE]: "andar/caminhar", [LanguageCode.MANDARIN]: "走路" } },
        { thai: "นั่ง", phonetic: "nâng", translations: { [LanguageCode.ENGLISH]: "sit", [LanguageCode.FRENCH]: "s'asseoir", [LanguageCode.PORTUGUESE]: "sentar", [LanguageCode.MANDARIN]: "坐" } },
        { thai: "ยืน", phonetic: "yʉʉn", translations: { [LanguageCode.ENGLISH]: "stand", [LanguageCode.FRENCH]: "se tenir debout", [LanguageCode.PORTUGUESE]: "ficar em pé", [LanguageCode.MANDARIN]: "站" } },
        { thai: "ขึ้น", phonetic: "khʉ̂n", translations: { [LanguageCode.ENGLISH]: "get on/go up", [LanguageCode.FRENCH]: "monter", [LanguageCode.PORTUGUESE]: "subir", [LanguageCode.MANDARIN]: "上" } },
        { thai: "ลง", phonetic: "long", translations: { [LanguageCode.ENGLISH]: "get off/go down", [LanguageCode.FRENCH]: "descendre", [LanguageCode.PORTUGUESE]: "descer", [LanguageCode.MANDARIN]: "下" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "เปิด (bpurt) and ปิด (bpìt): The Universal Open/Close Pair",
                [LanguageCode.FRENCH]: "เปิด (bpurt) et ปิด (bpìt) : La paire universelle ouvrir/fermer",
                [LanguageCode.PORTUGUESE]: "เปิด (bpurt) e ปิด (bpìt): O Par Universal Abrir/Fechar",
                [LanguageCode.MANDARIN]: "เปิด (bpurt) 和 ปิด (bpìt)：萬能的開/關動詞",
            },
            content: {
                [LanguageCode.ENGLISH]: "**เปิด (bpurt)** and **ปิด (bpìt)** are incredibly versatile verbs in Thai - far more than their English equivalents \"open\" and \"close.\"\n\n**What makes them special:**\n\nIn English, we use different verbs for different contexts:\n• Turn on/off (lights, TV, AC)\n• Open/close (doors, windows, shops)\n• Start/stop (businesses, apps)\n\nBut in Thai, เปิด and ปิด work for ALL of these contexts!\n\n**เปิด (bpurt) = open:**\n\n• เปิดประตู (bpurt bprà-dtuu) = open the door\n• เปิดหน้าต่าง (bpurt nâa-dtàang) = open the window\n• เปิดไฟ (bpurt fai) = open the light\n• เปิดแอร์ (bpurt aee) = open the AC\n• เปิดทีวี (bpurt thii-wii) = open the TV\n• เปิดร้าน (bpurt ráan) = open the shop/business\n• เปิดแอป (bpurt aaep) = open the app\n• เปิดขวด (bpurt khùat) = open a bottle\n• เปิดหนังสือ (bpurt nǎng-sʉ̌ʉ) = open a book\n\n**ปิด (bpìt) = close:**\n\n• ปิดประตู (bpìt bprà-dtuu) = close the door\n• ปิดหน้าต่าง (bpìt nâa-dtàang) = close the window\n• ปิดไฟ (bpìt fai) = close the light\n• ปิดแอร์ (bpìt aee) = close the AC\n• ปิดทีวี (bpìt thii-wii) = close the TV\n• ปิดร้าน (bpìt ráan) = close the shop/business\n• ปิดแอป (bpìt aaep) = close the app\n• ปิดขวด (bpìt khùat) = close a bottle\n• ปิดหนังสือ (bpìt nǎng-sʉ̌ʉ) = close a book\n\n**Common phrases you'll hear DAILY:**\n\n• ช่วยเปิดไฟหน่อย (chûay bpurt fai nɔ̀y) = \"Please open the light\"\n• ช่วยปิดประตูหน่อย (chûay bpìt bprà-dtuu nɔ̀y) = \"Please close the door\"\n• ร้านเปิดกี่โมง (ráan bpurt gìi moong) = \"What time does the shop open?\"\n• ร้านปิดกี่โมง (ráan bpìt gìi moong) = \"What time does the shop close?\"\n• อย่าลืมปิดแอร์ (yàa lʉʉm bpìt aee) = \"Don't forget to close the AC\"\n\n**Cultural note:**\n\nIn Thailand, air conditioning is a BIG deal due to the hot climate. You'll constantly hear people saying:\n• \"เปิดแอร์หน่อย\" (bpurt aee nɔ̀y) - \"Open the AC, please\" (when it's hot)\n• \"ปิดแอร์หน่อย\" (bpìt aee nɔ̀y) - \"Close the AC, please\" (when it's cold)\n\nSaving electricity is also important culturally, so you'll often hear reminders to ปิดไฟ (close lights) when leaving a room.\n\n**Pro tip:**\n\nWhen in doubt about whether to use \"turn on/off\" or \"open/close\" in Thai, just use เปิด/ปิด. These two verbs are your go-to for almost any switching, opening, or closing action!",
                [LanguageCode.FRENCH]: "**เปิด (bpurt)** et **ปิด (bpìt)** sont des verbes incroyablement polyvalents en thaï - bien plus que leurs équivalents français \"ouvrir\" et \"fermer.\"\n\n**Ce qui les rend spéciaux :**\n\nEn français, nous utilisons différents verbes pour différents contextes :\n• Allumer/éteindre (lumières, TV, climatisation)\n• Ouvrir/fermer (portes, fenêtres, magasins)\n• Démarrer/arrêter (entreprises, applications)\n\nMais en thaï, เปิด et ปิด fonctionnent pour TOUS ces contextes !\n\n**เปิด (bpurt) = ouvrir/allumer/démarrer :**\n\n• เปิดประตู (bpurt bprà-dtuu) = ouvrir la porte\n• เปิดหน้าต่าง (bpurt nâa-dtàang) = ouvrir la fenêtre\n• เปิดไฟ (bpurt fai) = allumer la lumière\n• เปิดแอร์ (bpurt aee) = allumer la climatisation\n• เปิดทีวี (bpurt thii-wii) = allumer la télé\n• เปิดร้าน (bpurt ráan) = ouvrir le magasin\n• เปิดแอป (bpurt aaep) = ouvrir l'application\n• เปิดขวด (bpurt khùat) = ouvrir une bouteille\n• เปิดหนังสือ (bpurt nǎng-sʉ̌ʉ) = ouvrir un livre\n\n**ปิด (bpìt) = fermer/éteindre :**\n\n• ปิดประตู (bpìt bprà-dtuu) = fermer la porte\n• ปิดหน้าต่าง (bpìt nâa-dtàang) = fermer la fenêtre\n• ปิดไฟ (bpìt fai) = éteindre la lumière\n• ปิดแอร์ (bpìt aee) = éteindre la climatisation\n• ปิดทีวี (bpìt thii-wii) = éteindre la télé\n• ปิดร้าน (bpìt ráan) = fermer le magasin\n• ปิดแอป (bpìt aaep) = fermer l'application\n• ปิดขวด (bpìt khùat) = fermer une bouteille\n• ปิดหนังสือ (bpìt nǎng-sʉ̌ʉ) = fermer un livre\n\n**Phrases courantes que vous entendrez QUOTIDIENNEMENT :**\n\n• ช่วยเปิดไฟหน่อย (chûay bpurt fai nɔ̀y) = \"Allume la lumière, s'il te plaît\"\n• ช่วยปิดประตูหน่อย (chûay bpìt bprà-dtuu nɔ̀y) = \"Ferme la porte, s'il te plaît\"\n• ร้านเปิดกี่โมง (ráan bpurt gìi moong) = \"À quelle heure ouvre le magasin ?\"\n• ร้านปิดกี่โมง (ráan bpìt gìi moong) = \"À quelle heure ferme le magasin ?\"\n• อย่าลืมปิดแอร์ (yàa lʉʉm bpìt aee) = \"N'oublie pas d'éteindre la climatisation\"",
                [LanguageCode.PORTUGUESE]: "**เปิด (bpurt)** e **ปิด (bpìt)** são verbos incrivelmente versáteis em tailandês - muito mais do que seus equivalentes em português \"abrir\" e \"fechar.\"\n\n**O que os torna especiais:**\n\nEm português, usamos diferentes verbos para diferentes contextos:\n• Ligar/desligar (luzes, TV, ar condicionado)\n• Abrir/fechar (portas, janelas, lojas)\n• Iniciar/parar (negócios, aplicativos)\n\nMas em tailandês, เปิด e ปิด funcionam para TODOS esses contextos!\n\n**เปิด (bpurt) = abrir/ligar/iniciar:**\n\n• เปิดประตู (bpurt bprà-dtuu) = abrir a porta\n• เปิดหน้าต่าง (bpurt nâa-dtàang) = abrir a janela\n• เปิดไฟ (bpurt fai) = ligar a luz\n• เปิดแอร์ (bpurt aee) = ligar o ar condicionado\n• เปิดทีวี (bpurt thii-wii) = ligar a TV\n• เปิดร้าน (bpurt ráan) = abrir a loja\n• เปิดแอป (bpurt aaep) = abrir o aplicativo\n• เปิดขวด (bpurt khùat) = abrir uma garrafa\n• เปิดหนังสือ (bpurt nǎng-sʉ̌ʉ) = abrir um livro\n\n**ปิด (bpìt) = fechar/desligar:**\n\n• ปิดประตู (bpìt bprà-dtuu) = fechar a porta\n• ปิดหน้าต่าง (bpìt nâa-dtàang) = fechar a janela\n• ปิดไฟ (bpìt fai) = desligar a luz\n• ปิดแอร์ (bpìt aee) = desligar o ar condicionado\n• ปิดทีวี (bpìt thii-wii) = desligar a TV\n• ปิดร้าน (bpìt ráan) = fechar a loja\n• ปิดแอป (bpìt aaep) = fechar o aplicativo\n• ปิดขวด (bpìt khùat) = fechar uma garrafa\n• ปิดหนังสือ (bpìt nǎng-sʉ̌ʉ) = fechar um livro\n\n**Frases comuns que você ouvirá DIARIAMENTE:**\n\n• ช่วยเปิดไฟหน่อย (chûay bpurt fai nɔ̀y) = \"Por favor, ligue a luz\"\n• ช่วยปิดประตูหน่อย (chûay bpìt bprà-dtuu nɔ̀y) = \"Por favor, feche a porta\"\n• ร้านเปิดกี่โมง (ráan bpurt gìi moong) = \"A que horas a loja abre?\"\n• ร้านปิดกี่โมง (ráan bpìt gìi moong) = \"A que horas a loja fecha?\"\n• อย่าลืมปิดแอร์ (yàa lʉʉm bpìt aee) = \"Não esqueça de desligar o ar condicionado\"",
                [LanguageCode.MANDARIN]: "**เปิด (bpurt)** 和 **ปิด (bpìt)** 在泰語中是非常多功能的動詞 - 遠比它們的中文對等詞「開」和「關」更廣泛。\n\n**是什麼讓它們如此特別：**\n\n在中文中，我們在不同情境下使用不同的詞：\n• 開/關（燈、電視、空調）\n• 打開/關閉（門、窗、商店）\n• 啟動/停止（業務、應用程式）\n\n但在泰語中，เปิด 和 ปิด 適用於所有這些情境！\n\n**เปิด (bpurt) = 開/打開/啟動：**\n\n• เปิดประตู (bpurt bprà-dtuu) = 開門\n• เปิดหน้าต่าง (bpurt nâa-dtàang) = 開窗\n• เปิดไฟ (bpurt fai) = 開燈\n• เปิดแอร์ (bpurt aee) = 開空調\n• เปิดทีวี (bpurt thii-wii) = 開電視\n• เปิดร้าน (bpurt ráan) = 開店\n• เปิดแอป (bpurt aaep) = 打開應用程式\n• เปิดขวด (bpurt khùat) = 開瓶\n• เปิดหนังสือ (bpurt nǎng-sʉ̌ʉ) = 翻開書\n\n**ปิด (bpìt) = 關/關閉：**\n\n• ปิดประตू (bpìt bprà-dtuu) = 關門\n• ปิดหน้าต่าง (bpìt nâa-dtàang) = 關窗\n• ปิดไฟ (bpìt fai) = 關燈\n• ปิดแอร์ (bpìt aee) = 關空調\n• ปิดทีวี (bpìt thii-wii) = 關電視\n• ปิดร้าน (bpìt ráan) = 關店\n• ปิดแอป (bpìt aaep) = 關閉應用程式\n• ปิดขวด (bpìt khùat) = 蓋瓶子\n• ปิดหนังสือ (bpìt nǎng-sʉ̌ʉ) = 合上書\n\n**您每天都會聽到的常用短語：**\n\n• ช่วยเปิดไฟหน่อย (chûay bpurt fai nɔ̀y) = 「請開燈」\n• ช่วยปิดประตูหน่อย (chûay bpìt bprà-dtuu nɔ̀y) = 「請關門」\n• ร้านเปิดกี่โมง (ráan bpurt gìi moong) = 「店幾點開門？」\n• ร้านปิดกี่โมง (ráan bpìt gìi moong) = 「店幾點關門？」\n• อย่าลืมปิดแอร์ (yàa lʉʉm bpìt aee) = 「別忘了關空調」",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in with เปิด or ปิด.",
                [LanguageCode.FRENCH]: "Complétez avec เปิด ou ปิด.",
                [LanguageCode.PORTUGUESE]: "Preencha com เปิด ou ปิด.",
                [LanguageCode.MANDARIN]: "填入 เปิด 或 ปิด。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ช่วย___ไฟหน่อย", [LanguageCode.FRENCH]: "___la lumière s'il te plaît", [LanguageCode.PORTUGUESE]: "___a luz por favor", [LanguageCode.MANDARIN]: "請___燈" }, correctAnswer: "เปิด/ปิด", end: { [LanguageCode.ENGLISH]: " (open/close the light)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ร้าน___กี่โมง", [LanguageCode.FRENCH]: "Le magasin ___à quelle heure", [LanguageCode.PORTUGUESE]: "A loja ___a que horas", [LanguageCode.MANDARIN]: "店幾點___" }, correctAnswer: "เปิด/ปิด", end: { [LanguageCode.ENGLISH]: " (what time does the shop open/close)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ประตูหน่อย", [LanguageCode.FRENCH]: "___la porte s'il te plaît", [LanguageCode.PORTUGUESE]: "___a porta por favor", [LanguageCode.MANDARIN]: "請___門" }, correctAnswer: "เปิด/ปิด", end: { [LanguageCode.ENGLISH]: " (open/close the door)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the verb to its meaning.",
                [LanguageCode.FRENCH]: "Associez le verbe à son sens.",
                [LanguageCode.PORTUGUESE]: "Relacione o verbo ao significado.",
                [LanguageCode.MANDARIN]: "將動詞與意思配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "read", [LanguageCode.FRENCH]: "lire", [LanguageCode.PORTUGUESE]: "ler", [LanguageCode.MANDARIN]: "讀" }, answer: { [LanguageCode.ENGLISH]: "อ่าน", [LanguageCode.FRENCH]: "อ่าน", [LanguageCode.PORTUGUESE]: "อ่าน", [LanguageCode.MANDARIN]: "อ่าน" } },
                { prompt: { [LanguageCode.ENGLISH]: "write", [LanguageCode.FRENCH]: "écrire", [LanguageCode.PORTUGUESE]: "escrever", [LanguageCode.MANDARIN]: "寫" }, answer: { [LanguageCode.ENGLISH]: "เขียน", [LanguageCode.FRENCH]: "เขียน", [LanguageCode.PORTUGUESE]: "เขียน", [LanguageCode.MANDARIN]: "เขียน" } },
                { prompt: { [LanguageCode.ENGLISH]: "listen", [LanguageCode.FRENCH]: "écouter", [LanguageCode.PORTUGUESE]: "ouvir", [LanguageCode.MANDARIN]: "聽" }, answer: { [LanguageCode.ENGLISH]: "ฟัง", [LanguageCode.FRENCH]: "ฟัง", [LanguageCode.PORTUGUESE]: "ฟัง", [LanguageCode.MANDARIN]: "ฟัง" } },
                { prompt: { [LanguageCode.ENGLISH]: "understand", [LanguageCode.FRENCH]: "comprendre", [LanguageCode.PORTUGUESE]: "entender", [LanguageCode.MANDARIN]: "明白" }, answer: { [LanguageCode.ENGLISH]: "เข้าใจ", [LanguageCode.FRENCH]: "เข้าใจ", [LanguageCode.PORTUGUESE]: "เข้าใจ", [LanguageCode.MANDARIN]: "เข้าใจ" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete with the correct verb.",
                [LanguageCode.FRENCH]: "Complétez avec le bon verbe.",
                [LanguageCode.PORTUGUESE]: "Complete com o verbo correto.",
                [LanguageCode.MANDARIN]: "用正確的動詞完成。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผม___หนังสือ", [LanguageCode.FRENCH]: "Je___un livre", [LanguageCode.PORTUGUESE]: "Eu___um livro", [LanguageCode.MANDARIN]: "我___書" }, correctAnswer: "อ่าน", end: { [LanguageCode.ENGLISH]: " (read)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___ดนตรี", [LanguageCode.FRENCH]: "Elle___de la musique", [LanguageCode.PORTUGUESE]: "Ela___música", [LanguageCode.MANDARIN]: "她___音樂" }, correctAnswer: "ฟัง", end: { [LanguageCode.ENGLISH]: " (listen to)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ช่วย___หน่อย", [LanguageCode.FRENCH]: "___-moi s'il te plaît", [LanguageCode.PORTUGUESE]: "___por favor", [LanguageCode.MANDARIN]: "請___我" }, correctAnswer: "ช่วย", end: { [LanguageCode.ENGLISH]: " (help)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "คุณ___ไหม", [LanguageCode.FRENCH]: "Tu___?", [LanguageCode.PORTUGUESE]: "Você___?", [LanguageCode.MANDARIN]: "你___嗎" }, correctAnswer: "เข้าใจ", end: { [LanguageCode.ENGLISH]: " (understand)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the command in order.",
                [LanguageCode.FRENCH]: "Mettez l'ordre dans la commande.",
                [LanguageCode.PORTUGUESE]: "Coloque o comando em ordem.",
                [LanguageCode.MANDARIN]: "整理命令的詞序。",
            },
            sentences: [
                { correctOrder: ["ช่วย", "เปิด", "ไฟ", "หน่อย"], hint: { [LanguageCode.ENGLISH]: "Please turn on the light.", [LanguageCode.FRENCH]: "Allume la lumière s'il te plaît.", [LanguageCode.PORTUGUESE]: "Por favor, ligue a luz.", [LanguageCode.MANDARIN]: "請開燈。" } },
                { correctOrder: ["ช่วย", "ปิด", "ประตู", "หน่อย"], hint: { [LanguageCode.ENGLISH]: "Please close the door.", [LanguageCode.FRENCH]: "Ferme la porte s'il te plaît.", [LanguageCode.PORTUGUESE]: "Por favor, feche a porta.", [LanguageCode.MANDARIN]: "請關門。" } },
                { correctOrder: ["อย่า", "ลืม", "ปิด", "แอร์"], hint: { [LanguageCode.ENGLISH]: "Don't forget to turn off the AC.", [LanguageCode.FRENCH]: "N'oublie pas d'éteindre la climatisation.", [LanguageCode.PORTUGUESE]: "Não esqueça de desligar o ar condicionado.", [LanguageCode.MANDARIN]: "別忘了關空調。" } },
                { correctOrder: ["ช่วย", "เปิด", "หน้าต่าง", "หน่อย"], hint: { [LanguageCode.ENGLISH]: "Please open the window.", [LanguageCode.FRENCH]: "Ouvre la fenêtre s'il te plaît.", [LanguageCode.PORTUGUESE]: "Por favor, abra a janela.", [LanguageCode.MANDARIN]: "請開窗。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match verbs to appropriate objects.",
                [LanguageCode.FRENCH]: "Associez les verbes aux objets appropriés.",
                [LanguageCode.PORTUGUESE]: "Relacione verbos a objetos apropriados.",
                [LanguageCode.MANDARIN]: "將動詞與適當的賓語配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "อ่าน (read)", [LanguageCode.FRENCH]: "อ่าน (lire)", [LanguageCode.PORTUGUESE]: "อ่าน (ler)", [LanguageCode.MANDARIN]: "อ่าน (讀)" }, answer: { [LanguageCode.ENGLISH]: "หนังสือ (book)", [LanguageCode.FRENCH]: "หนังสือ (livre)", [LanguageCode.PORTUGUESE]: "หนังสือ (livro)", [LanguageCode.MANDARIN]: "หนังสือ (書)" } },
                { prompt: { [LanguageCode.ENGLISH]: "เขียน (write)", [LanguageCode.FRENCH]: "เขียน (écrire)", [LanguageCode.PORTUGUESE]: "เขียน (escrever)", [LanguageCode.MANDARIN]: "เขียน (寫)" }, answer: { [LanguageCode.ENGLISH]: "จดหมาย (letter)", [LanguageCode.FRENCH]: "จดหมาย (lettre)", [LanguageCode.PORTUGUESE]: "จดหมาย (carta)", [LanguageCode.MANDARIN]: "จดหมาย (信)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ฟัง (listen)", [LanguageCode.FRENCH]: "ฟัง (écouter)", [LanguageCode.PORTUGUESE]: "ฟัง (ouvir)", [LanguageCode.MANDARIN]: "ฟัง (聽)" }, answer: { [LanguageCode.ENGLISH]: "ดนตรี (music)", [LanguageCode.FRENCH]: "ดนตรี (musique)", [LanguageCode.PORTUGUESE]: "ดนตรี (música)", [LanguageCode.MANDARIN]: "ดนตรี (音樂)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ใช้ (use)", [LanguageCode.FRENCH]: "ใช้ (utiliser)", [LanguageCode.PORTUGUESE]: "ใช้ (usar)", [LanguageCode.MANDARIN]: "ใช้ (用)" }, answer: { [LanguageCode.ENGLISH]: "โทรศัพท์ (phone)", [LanguageCode.FRENCH]: "โทรศัพท์ (téléphone)", [LanguageCode.PORTUGUESE]: "โทรศัพท์ (telefone)", [LanguageCode.MANDARIN]: "โทรศัพท์ (電話)" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best verb for each situation.",
                [LanguageCode.FRENCH]: "Choisissez le meilleur verbe pour chaque situation.",
                [LanguageCode.PORTUGUESE]: "Escolha o melhor verbo para cada situação.",
                [LanguageCode.MANDARIN]: "為每種情況選擇最佳動詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want someone to help you. You say: ช่วย___หน่อย", [LanguageCode.FRENCH]: "Vous voulez que quelqu'un vous aide. Vous dites : ช่วย___หน่อย", [LanguageCode.PORTUGUESE]: "Você quer que alguém te ajude. Você diz: ช่วย___หน่อย", [LanguageCode.MANDARIN]: "你想要別人幫你。你說：ช่วย___หน่อย" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ช่วย", [LanguageCode.FRENCH]: "ช่วย", [LanguageCode.PORTUGUESE]: "ช่วย", [LanguageCode.MANDARIN]: "ช่วย" },
                        { [LanguageCode.ENGLISH]: "ถาม", [LanguageCode.FRENCH]: "ถาม", [LanguageCode.PORTUGUESE]: "ถาม", [LanguageCode.MANDARIN]: "ถาม" },
                        { [LanguageCode.ENGLISH]: "รอ", [LanguageCode.FRENCH]: "รอ", [LanguageCode.PORTUGUESE]: "รอ", [LanguageCode.MANDARIN]: "รอ" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're in a taxi going up a hill. You say: ___เขา", [LanguageCode.FRENCH]: "Vous êtes dans un taxi qui monte une colline. Vous dites : ___เขา", [LanguageCode.PORTUGUESE]: "Você está em um táxi subindo uma colina. Você diz: ___เขา", [LanguageCode.MANDARIN]: "你在計程車裡上山。你說：___เขา" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ลง", [LanguageCode.FRENCH]: "ลง", [LanguageCode.PORTUGUESE]: "ลง", [LanguageCode.MANDARIN]: "ลง" },
                        { [LanguageCode.ENGLISH]: "ขึ้น", [LanguageCode.FRENCH]: "ขึ้น", [LanguageCode.PORTUGUESE]: "ขึ้น", [LanguageCode.MANDARIN]: "ขึ้น" },
                        { [LanguageCode.ENGLISH]: "นั่ง", [LanguageCode.FRENCH]: "นั่ง", [LanguageCode.PORTUGUESE]: "นั่ง", [LanguageCode.MANDARIN]: "นั่ง" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Someone is teaching and asks if you follow. They say: คุณ___ไหม", [LanguageCode.FRENCH]: "Quelqu'un enseigne et demande si vous suivez. Il dit : คุณ___ไหม", [LanguageCode.PORTUGUESE]: "Alguém está ensinando e pergunta se você entende. Ele diz: คุณ___ไหม", [LanguageCode.MANDARIN]: "有人在教課，問你是否理解。他說：คุณ___ไหม" },
                    options: [
                        { [LanguageCode.ENGLISH]: "รู้", [LanguageCode.FRENCH]: "รู้", [LanguageCode.PORTUGUESE]: "รู้", [LanguageCode.MANDARIN]: "รู้" },
                        { [LanguageCode.ENGLISH]: "เข้าใจ", [LanguageCode.FRENCH]: "เข้าใจ", [LanguageCode.PORTUGUESE]: "เข้าใจ", [LanguageCode.MANDARIN]: "เข้าใจ" },
                        { [LanguageCode.ENGLISH]: "คิด", [LanguageCode.FRENCH]: "คิด", [LanguageCode.PORTUGUESE]: "คิด", [LanguageCode.MANDARIN]: "คิด" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in context sentences with the right verb.",
                [LanguageCode.FRENCH]: "Complétez les phrases contextuelles avec le bon verbe.",
                [LanguageCode.PORTUGUESE]: "Complete frases contextuais com o verbo certo.",
                [LanguageCode.MANDARIN]: "用正確的動詞填入情境句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ครูพูดเร็วมาก ผม___ไม่", [LanguageCode.FRENCH]: "Le professeur parle vite, je ne___pas", [LanguageCode.PORTUGUESE]: "O professor fala rápido, eu não___", [LanguageCode.MANDARIN]: "老師說得太快，我不___" }, correctAnswer: "เข้าใจ", end: { [LanguageCode.ENGLISH]: " (understand)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผม___คำถาม", [LanguageCode.FRENCH]: "Je___une question", [LanguageCode.PORTUGUESE]: "Eu___uma pergunta", [LanguageCode.MANDARIN]: "我___問題" }, correctAnswer: "ถาม", end: { [LanguageCode.ENGLISH]: " (ask)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___คำถาม", [LanguageCode.FRENCH]: "Elle___à la question", [LanguageCode.PORTUGUESE]: "Ela___a pergunta", [LanguageCode.MANDARIN]: "她___問題" }, correctAnswer: "ตอบ", end: { [LanguageCode.ENGLISH]: " (answer)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผม___ที่นี่", [LanguageCode.FRENCH]: "J'___ici", [LanguageCode.PORTUGUESE]: "Eu___aqui", [LanguageCode.MANDARIN]: "我___這裡" }, correctAnswer: "รอ", end: { [LanguageCode.ENGLISH]: " (wait)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขา___วิธี", [LanguageCode.FRENCH]: "Il___le chemin", [LanguageCode.PORTUGUESE]: "Ele___o caminho", [LanguageCode.MANDARIN]: "他___方法" }, correctAnswer: "รู้", end: { [LanguageCode.ENGLISH]: " (know)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match opposite actions.",
                [LanguageCode.FRENCH]: "Associez les actions opposées.",
                [LanguageCode.PORTUGUESE]: "Relacione ações opostas.",
                [LanguageCode.MANDARIN]: "配對相反的動作。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "เปิด (open)", [LanguageCode.FRENCH]: "เปิด (ouvrir)", [LanguageCode.PORTUGUESE]: "เปิด (abrir)", [LanguageCode.MANDARIN]: "เปิด (開)" }, answer: { [LanguageCode.ENGLISH]: "ปิด (close)", [LanguageCode.FRENCH]: "ปิด (fermer)", [LanguageCode.PORTUGUESE]: "ปิด (fechar)", [LanguageCode.MANDARIN]: "ปิด (關)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ขึ้น (go up)", [LanguageCode.FRENCH]: "ขึ้น (monter)", [LanguageCode.PORTUGUESE]: "ขึ้น (subir)", [LanguageCode.MANDARIN]: "ขึ้น (上)" }, answer: { [LanguageCode.ENGLISH]: "ลง (go down)", [LanguageCode.FRENCH]: "ลง (descendre)", [LanguageCode.PORTUGUESE]: "ลง (descer)", [LanguageCode.MANDARIN]: "ลง (下)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ถาม (ask)", [LanguageCode.FRENCH]: "ถาม (demander)", [LanguageCode.PORTUGUESE]: "ถาม (perguntar)", [LanguageCode.MANDARIN]: "ถาม (問)" }, answer: { [LanguageCode.ENGLISH]: "ตอบ (answer)", [LanguageCode.FRENCH]: "ตอบ (répondre)", [LanguageCode.PORTUGUESE]: "ตอบ (responder)", [LanguageCode.MANDARIN]: "ตอบ (答)" } },
                { prompt: { [LanguageCode.ENGLISH]: "นั่ง (sit)", [LanguageCode.FRENCH]: "นั่ง (s'asseoir)", [LanguageCode.PORTUGUESE]: "นั่ง (sentar)", [LanguageCode.MANDARIN]: "นั่ง (坐)" }, answer: { [LanguageCode.ENGLISH]: "ยืน (stand)", [LanguageCode.FRENCH]: "ยืน (se tenir debout)", [LanguageCode.PORTUGUESE]: "ยืน (ficar em pé)", [LanguageCode.MANDARIN]: "ยืน (站)" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best verb for real situations.",
                [LanguageCode.FRENCH]: "Choisissez le meilleur verbe pour des situations réelles.",
                [LanguageCode.PORTUGUESE]: "Escolha o melhor verbo para situações reais.",
                [LanguageCode.MANDARIN]: "為實際情境選擇最佳動詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "It's hot in the room. You say: ช่วย___แอร์หน่อย", [LanguageCode.FRENCH]: "Il fait chaud dans la pièce. Vous dites : ช่วย___แอร์หน่อย", [LanguageCode.PORTUGUESE]: "Está quente no quarto. Você diz: ช่วย___แอร์หน่อย", [LanguageCode.MANDARIN]: "房間很熱。你說：ช่วย___แอร์หน่อย" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เปิด (open)", [LanguageCode.FRENCH]: "เปิด (allumer)", [LanguageCode.PORTUGUESE]: "เปิด (ligar)", [LanguageCode.MANDARIN]: "เปิด (開)" },
                        { [LanguageCode.ENGLISH]: "ปิด (close)", [LanguageCode.FRENCH]: "ปิด (éteindre)", [LanguageCode.PORTUGUESE]: "ปิด (desligar)", [LanguageCode.MANDARIN]: "ปิด (關)" },
                        { [LanguageCode.ENGLISH]: "ใช้ (use)", [LanguageCode.FRENCH]: "ใช้ (utiliser)", [LanguageCode.PORTUGUESE]: "ใช้ (usar)", [LanguageCode.MANDARIN]: "ใช้ (用)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're on a bus and need to get off. You say: ผม___ที่นี่", [LanguageCode.FRENCH]: "Vous êtes dans un bus et devez descendre. Vous dites : ผม___ที่นี่", [LanguageCode.PORTUGUESE]: "Você está no ônibus e precisa descer. Você diz: ผม___ที่นี่", [LanguageCode.MANDARIN]: "你在公車上需要下車。你說：ผม___ที่นี่" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขึ้น (get on)", [LanguageCode.FRENCH]: "ขึ้น (monter)", [LanguageCode.PORTUGUESE]: "ขึ้น (subir)", [LanguageCode.MANDARIN]: "ขึ้น (上)" },
                        { [LanguageCode.ENGLISH]: "ลง (get off)", [LanguageCode.FRENCH]: "ลง (descendre)", [LanguageCode.PORTUGUESE]: "ลง (descer)", [LanguageCode.MANDARIN]: "ลง (下)" },
                        { [LanguageCode.ENGLISH]: "นั่ง (sit)", [LanguageCode.FRENCH]: "นั่ง (s'asseoir)", [LanguageCode.PORTUGUESE]: "นั่ง (sentar)", [LanguageCode.MANDARIN]: "นั่ง (坐)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You're in a library. What do you do with books? ผม___หนังสือ", [LanguageCode.FRENCH]: "Vous êtes dans une bibliothèque. Que faites-vous avec les livres ? ผม___หนังสือ", [LanguageCode.PORTUGUESE]: "Você está em uma biblioteca. O que você faz com livros? ผม___หนังสือ", [LanguageCode.MANDARIN]: "你在圖書館。你用書做什麼？ผม___หนังสือ" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อ่าน (read)", [LanguageCode.FRENCH]: "อ่าน (lire)", [LanguageCode.PORTUGUESE]: "อ่าน (ler)", [LanguageCode.MANDARIN]: "อ่าน (讀)" },
                        { [LanguageCode.ENGLISH]: "ฟัง (listen)", [LanguageCode.FRENCH]: "ฟัง (écouter)", [LanguageCode.PORTUGUESE]: "ฟัง (ouvir)", [LanguageCode.MANDARIN]: "ฟัง (聽)" },
                        { [LanguageCode.ENGLISH]: "เดิน (walk)", [LanguageCode.FRENCH]: "เดิน (marcher)", [LanguageCode.PORTUGUESE]: "เดิน (andar)", [LanguageCode.MANDARIN]: "เดิน (走)" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build polite requests and commands.",
                [LanguageCode.FRENCH]: "Construisez des demandes et commandes polies.",
                [LanguageCode.PORTUGUESE]: "Construa pedidos e comandos educados.",
                [LanguageCode.MANDARIN]: "組成禮貌的請求和命令。",
            },
            sentences: [
                { correctOrder: ["ขอ", "น้ำ", "หน่อย"], hint: { [LanguageCode.ENGLISH]: "Can I have some water?", [LanguageCode.FRENCH]: "Puis-je avoir de l'eau ?", [LanguageCode.PORTUGUESE]: "Posso ter água?", [LanguageCode.MANDARIN]: "可以給我水嗎？" } },
                { correctOrder: ["ช่วย", "อ่าน", "ให้", "หน่อย"], hint: { [LanguageCode.ENGLISH]: "Please read it for me.", [LanguageCode.FRENCH]: "Lis-le pour moi s'il te plaît.", [LanguageCode.PORTUGUESE]: "Por favor, leia para mim.", [LanguageCode.MANDARIN]: "請幫我讀。" } },
                { correctOrder: ["ผม", "รอ", "ที่นี่"], hint: { [LanguageCode.ENGLISH]: "I'll wait here.", [LanguageCode.FRENCH]: "J'attendrai ici.", [LanguageCode.PORTUGUESE]: "Eu vou esperar aqui.", [LanguageCode.MANDARIN]: "我在這裡等。" } },
                { correctOrder: ["คุณ", "เข้าใจ", "ไหม"], hint: { [LanguageCode.ENGLISH]: "Do you understand?", [LanguageCode.FRENCH]: "Comprenez-vous ?", [LanguageCode.PORTUGUESE]: "Você entende?", [LanguageCode.MANDARIN]: "你明白嗎？" } },
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Please open the window.", [LanguageCode.FRENCH]: "Ouvre la fenêtre s'il te plaît.", [LanguageCode.PORTUGUESE]: "Por favor, abra a janela.", [LanguageCode.MANDARIN]: "請開窗。" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "Sure, I'll open it now.", [LanguageCode.FRENCH]: "Bien sûr, je l'ouvre maintenant.", [LanguageCode.PORTUGUESE]: "Claro, vou abrir agora.", [LanguageCode.MANDARIN]: "好的，我現在開。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What did A ask B to do?", [LanguageCode.FRENCH]: "Qu'est-ce que A a demandé à B de faire ?", [LanguageCode.PORTUGUESE]: "O que A pediu para B fazer?", [LanguageCode.MANDARIN]: "A 要求 B 做什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Open the window", [LanguageCode.FRENCH]: "Ouvrir la fenêtre", [LanguageCode.PORTUGUESE]: "Abrir a janela", [LanguageCode.MANDARIN]: "開窗" },
                        { [LanguageCode.ENGLISH]: "Close the door", [LanguageCode.FRENCH]: "Fermer la porte", [LanguageCode.PORTUGUESE]: "Fechar a porta", [LanguageCode.MANDARIN]: "關門" },
                        { [LanguageCode.ENGLISH]: "Open the light", [LanguageCode.FRENCH]: "Allumer la lumière", [LanguageCode.PORTUGUESE]: "Ligar a luz", [LanguageCode.MANDARIN]: "開燈" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บอกเพื่อนให้เปิด/ปิดอะไรสักอย่าง 4 ครั้ง",
            [LanguageCode.FRENCH]: "บอกเพื่อนให้เปิด/ปิดอะไรสักอย่าง 4 ครั้ง",
            [LanguageCode.PORTUGUESE]: "บอกเพื่อนให้เปิด/ปิดอะไรสักอย่าง 4 ครั้ง",
            [LanguageCode.MANDARIN]: "บอกเพื่อนให้เปิด/ปิดอะไรสักอย่าง 4 ครั้ง",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Record 4 commands using bpurt (open) and bpìt (close). Example: chûay bpurt fai nɔ̀y (Please open the light)",
            [LanguageCode.FRENCH]: "Enregistrez 4 commandes utilisant bpurt (ouvrir) et bpìt (fermer). Exemple : chûay bpurt fai nɔ̀y (Allume la lumière s'il te plaît)",
            [LanguageCode.PORTUGUESE]: "Grave 4 comandos usando bpurt (abrir) e bpìt (fechar). Exemplo: chûay bpurt fai nɔ̀y (Por favor, ligue a luz)",
            [LanguageCode.MANDARIN]: "錄製 4 個使用 bpurt（開）和 bpìt（關）的命令。例子：chûay bpurt fai nɔ̀y（請開燈）",
        },
        speakingType: 'open-ended'
    }
};

