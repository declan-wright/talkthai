import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_15: Lesson = {
    id: "1.15",
    title: {
        [LanguageCode.ENGLISH]: "Shopping & Market Language",
        [LanguageCode.FRENCH]: "Vocabulaire d'achat et de marché",
        [LanguageCode.PORTUGUESE]: "Vocabulário de compras e mercado",
        [LanguageCode.MANDARIN]: "購物與市場用語",
    },
    vocabulary: [
        // Core shopping vocabulary
        { thai: "เท่าไหร่", phonetic: "thâo-rài", translations: { [LanguageCode.ENGLISH]: "How much?", [LanguageCode.FRENCH]: "Combien ?", [LanguageCode.PORTUGUESE]: "Quanto custa?", [LanguageCode.MANDARIN]: "多少錢？" } },
        { thai: "ลดได้ไหม", phonetic: "lót dâai mái", translations: { [LanguageCode.ENGLISH]: "Can you discount?", [LanguageCode.FRENCH]: "Vous pouvez faire une réduction ?", [LanguageCode.PORTUGUESE]: "Pode dar desconto?", [LanguageCode.MANDARIN]: "可以打折嗎？" } },
        { thai: "แพง", phonetic: "pheng", translations: { [LanguageCode.ENGLISH]: "Expensive", [LanguageCode.FRENCH]: "Cher", [LanguageCode.PORTUGUESE]: "Caro", [LanguageCode.MANDARIN]: "貴" } },
        { thai: "ถูก", phonetic: "thùuk", translations: { [LanguageCode.ENGLISH]: "Cheap / Correct", [LanguageCode.FRENCH]: "Pas cher / Correct", [LanguageCode.PORTUGUESE]: "Barato / Correto", [LanguageCode.MANDARIN]: "便宜 / 對" } },
        { thai: "ซื้อ", phonetic: "sʉ́ʉ", translations: { [LanguageCode.ENGLISH]: "Buy", [LanguageCode.FRENCH]: "Acheter", [LanguageCode.PORTUGUESE]: "Comprar", [LanguageCode.MANDARIN]: "買" } },
        { thai: "ใจ", phonetic: "jai", translations: { [LanguageCode.ENGLISH]: "Heart / Kind / Generous", [LanguageCode.FRENCH]: "Cœur / Gentil / Généreux", [LanguageCode.PORTUGUESE]: "Coração / Gentil / Generoso", [LanguageCode.MANDARIN]: "心 / 善良 / 慷慨" } },
        { thai: "มีไหม", phonetic: "mii mái", translations: { [LanguageCode.ENGLISH]: "Do you have?", [LanguageCode.FRENCH]: "Vous avez ?", [LanguageCode.PORTUGUESE]: "Tem?", [LanguageCode.MANDARIN]: "有嗎？" } },
        { thai: "ไม่มี", phonetic: "mâi mii", translations: { [LanguageCode.ENGLISH]: "Don't have", [LanguageCode.FRENCH]: "Pas disponible", [LanguageCode.PORTUGUESE]: "Não tem", [LanguageCode.MANDARIN]: "沒有" } },
        { thai: "ลอง", phonetic: "lɔɔng", translations: { [LanguageCode.ENGLISH]: "Try (on/out)", [LanguageCode.FRENCH]: "Essayer", [LanguageCode.PORTUGUESE]: "Experimentar", [LanguageCode.MANDARIN]: "試" } },
        { thai: "ส่ง", phonetic: "sòng", translations: { [LanguageCode.ENGLISH]: "Send / Deliver", [LanguageCode.FRENCH]: "Envoyer / Livrer", [LanguageCode.PORTUGUESE]: "Enviar / Entregar", [LanguageCode.MANDARIN]: "送 / 寄" } },

        // Payment methods
        { thai: "เงินสด", phonetic: "ngən-sòt", translations: { [LanguageCode.ENGLISH]: "Cash", [LanguageCode.FRENCH]: "Espèces", [LanguageCode.PORTUGUESE]: "Dinheiro", [LanguageCode.MANDARIN]: "現金" } },
        { thai: "บัตรเครดิต", phonetic: "bàt-kree-dìt", translations: { [LanguageCode.ENGLISH]: "Credit card", [LanguageCode.FRENCH]: "Carte de crédit", [LanguageCode.PORTUGUESE]: "Cartão de crédito", [LanguageCode.MANDARIN]: "信用卡" } },
        { thai: "สแกน", phonetic: "sà-gaen", translations: { [LanguageCode.ENGLISH]: "Scan (QR code/payment)", [LanguageCode.FRENCH]: "Scanner (QR code/paiement)", [LanguageCode.PORTUGUESE]: "Escanear (QR code/pagamento)", [LanguageCode.MANDARIN]: "掃描（QR碼/支付）" } },

        // Membership and bags
        { thai: "สมาชิก", phonetic: "sà-maa-chík", translations: { [LanguageCode.ENGLISH]: "Member / Membership", [LanguageCode.FRENCH]: "Membre / Adhésion", [LanguageCode.PORTUGUESE]: "Membro / Associação", [LanguageCode.MANDARIN]: "會員 / 會員資格" } },
        { thai: "ของแท้", phonetic: "khɔ̌ɔng-thɛ́ɛ", translations: { [LanguageCode.ENGLISH]: "Real / Authentic", [LanguageCode.FRENCH]: "Vrai / Authentique", [LanguageCode.PORTUGUESE]: "Real / Autêntico", [LanguageCode.MANDARIN]: "真品 / 正品" } },
        { thai: "ของปลอม", phonetic: "khɔ̌ɔng-bplɔɔm", translations: { [LanguageCode.ENGLISH]: "Fake / Counterfeit", [LanguageCode.FRENCH]: "Faux / Contrefait", [LanguageCode.PORTUGUESE]: "Falso / Falsificado", [LanguageCode.MANDARIN]: "假貨" } },
        { thai: "ถุง", phonetic: "thǔng", translations: { [LanguageCode.ENGLISH]: "Bag", [LanguageCode.FRENCH]: "Sac", [LanguageCode.PORTUGUESE]: "Sacola", [LanguageCode.MANDARIN]: "袋子" } },
        { thai: "เอาถุงไหม", phonetic: "ao thǔng mái", translations: { [LanguageCode.ENGLISH]: "Do you want a bag?", [LanguageCode.FRENCH]: "Voulez-vous un sac ?", [LanguageCode.PORTUGUESE]: "Quer uma sacola?", [LanguageCode.MANDARIN]: "要袋子嗎？" } },
        { thai: "ไม่เอา", phonetic: "mâi ao", translations: { [LanguageCode.ENGLISH]: "Don't want / No thanks", [LanguageCode.FRENCH]: "Je ne veux pas / Non merci", [LanguageCode.PORTUGUESE]: "Não quero / Não, obrigado", [LanguageCode.MANDARIN]: "不要 / 不用了" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Market Culture: Essential Shopping Knowledge",
                [LanguageCode.FRENCH]: "Culture du marché thaïlandais : Connaissances essentielles pour faire des achats",
                [LanguageCode.PORTUGUESE]: "Cultura de mercado tailandês: Conhecimento essencial de compras",
                [LanguageCode.MANDARIN]: "泰國市場文化：必備購物知識",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Shopping in Thailand** is an adventure! Markets are everywhere, and bargaining is a normal part of the experience (especially at street markets and night markets).\n\n**The Essential Question: เท่าไหร่ (thâo-rài)**\n\n**เท่าไหร่ (thâo-rài)** means \"How much?\" and is your most important shopping phrase!\n\n• **นี่เท่าไหร่ (nîi thâo-rài)** = \"How much is this?\"\n• **ทั้งหมดเท่าไหร่ (tháng-mòt thâo-rài)** = \"How much total?\"\n• **อันนั้นเท่าไหร่ (an nán thâo-rài)** = \"How much is that one?\"\n\n**Bargaining: ลดได้ไหม (lót dâai mái)**\n\nBargaining is expected at:\n• Street markets (ตลาด - dtà-làat)\n• Night markets (ตลาดกลางคืน - dtà-làat glaang-khʉʉn)\n• Some small shops\n\nBargaining is NOT expected at:\n• Shopping malls\n• 7-Eleven and convenience stores\n• Restaurants\n• Supermarkets\n\n**Key Bargaining Phrases:**\n\n1. **ลดได้ไหม (lót dâai mái)** = \"Can you discount?\" / \"Can you lower the price?\"\n2. **แพงไป (pheng bpai)** = \"Too expensive!\"\n3. **ถูกกว่านี้ได้ไหม (thùuk gwàa níi dâai mái)** = \"Can it be cheaper than this?\"\n4. **ลดหน่อย (lót nɔ̀i)** = \"Discount a little, please\"\n\n**The Art of Gentle Bargaining:**\n\nThais appreciate friendly, smiling negotiation. Some tips:\n\n• Start by asking the price: **เท่าไหร่ครับ/ค่ะ**\n• If it's expensive, say: **แพงไป** (too expensive) with a smile\n• Then ask: **ลดได้ไหม** (can you discount?)\n• If they say a new price, you can counter with your own price\n• Be reasonable! A 20-30% discount is typical, not 50-70%\n• If you can't agree, just smile and say **ขอบคุณ** and walk away. They might call you back!\n\n**Important Shopping Vocabulary:**\n\n**ซื้อ (sʉ́ʉ)** = \"Buy\"\n• **เอาซื้อ (ao sʉ́ʉ)** = \"I'll take it\" / \"I'll buy it\"\n• **ไม่ซื้อ (mâi sʉ́ʉ)** = \"Not buying\"\n\n**มี (mii)** = \"Have\"\n• **มีไหม (mii mái)** = \"Do you have?\"\n• **มีสีอื่นไหม (mii sǐi ùun mái)** = \"Do you have other colors?\"\n• **ไม่มี (mâi mii)** = \"Don't have\" / \"Out of stock\"\n\n**ลอง (lɔɔng)** = \"Try\"\n• **ลองได้ไหม (lɔɔng dâai mái)** = \"Can I try it (on)?\"\n• **ขอลอง (khɔ̌ɔ lɔɔng)** = \"May I try?\"\n\n**Payment: The Modern Thai Way**\n\nThailand is increasingly cashless! You'll see:\n\n• **เงินสด (ngən-sòt)** = \"Cash\"\n• **บัตรเครดิต (bàt-kree-dìt)** = \"Credit card\"\n• **สแกน (sà-gaen)** = \"Scan\" (for QR code payment via PromptPay, LINE Pay, etc.)\n\n**Pro Tip:** Many markets now accept QR code payment! Look for the PromptPay QR code.\n\n**Common Market Questions:**\n\n**เอาถุงไหม (ao thǔng mái)** = \"Do you want a bag?\"\n\nThailand is reducing plastic bag use, so stores often ask this. You can say:\n• **เอา (ao)** = \"Yes, I want one\"\n• **ไม่เอา (mâi ao)** = \"No, I don't want one\"\n\n**เป็นสมาชิกไหม (bpen sà-maa-chík mái)** = \"Are you a member?\"\n\nMany stores have membership cards (like 7-Eleven, Tops, etc.). You can say:\n• **ไม่ใช่ (mâi châi)** = \"No\" (I'm not a member)\n• **ใช่ (châi)** = \"Yes\" (I am a member)\n\n**Real vs. Fake: Buyer Beware!**\n\n• **ของแท้ (khɔ̌ɔng-thɛ́ɛ)** = \"Real\" / \"Authentic\" / \"Genuine\"\n• **ของปลอม (khɔ̌ɔng-bplɔɔm)** = \"Fake\" / \"Counterfeit\"\n\nMarkets like Chatuchak or Pratunam sometimes sell counterfeit goods (fake designer bags, watches, etc.). If you're buying something expensive, you can ask:\n\n• **ของแท้ไหม (khɔ̌ɔng-thɛ́ɛ mái)** = \"Is this real?\"\n\nBut remember: if the price seems too good to be true, it probably is!\n\n**A Note on Politeness:**\n\nWhen bargaining, being friendly and smiling goes a LONG way. Thais value **ใจ (jai)** - which means \"heart\" but also refers to being kind, generous, and having good intentions.\n\nIf you're friendly, the vendor might give you a better price just because they like you! This is called **ให้ใจดีๆ (hâi jai dii-dii)** - \"giving with a good heart.\"\n\n**Complete Shopping Example:**\n\n**You:** นี่เท่าไหร่ครับ (How much is this?)\n**Vendor:** สองร้อยบาท (200 baht)\n**You:** แพงไป ลดได้ไหม (Too expensive! Can you discount?)\n**Vendor:** หนึ่งร้อยแปดสิบ (180 baht)\n**You:** หนึ่งร้อยห้าสิบได้ไหม (Can you do 150?)\n**Vendor:** โอเค หนึ่งร้อยห้าสิบ (OK, 150)\n**You:** เอาซื้อ ขอบคุณครับ (I'll take it. Thank you!)\n\n**Shopping Culture Tips:**\n\n• Markets are busiest in the evening (especially night markets!)\n• Don't touch Buddha statues or religious items casually\n• It's polite to handle items gently\n• If you're just looking, you can say **ดูก่อน (duu gɔ̀ɔn)** = \"Just looking\"\n• Tipping is not expected at markets or shops\n\n**Pro Tip:**\n\nWhen Thai vendors like you, they might throw in a little extra (แถม - thɛ̌ɛm = \"throw in for free\"). Be friendly, and you might get a bonus!",
                [LanguageCode.FRENCH]: "**Faire des achats en Thaïlande** est une aventure ! Les marchés sont partout, et le marchandage est une partie normale de l'expérience (surtout dans les marchés de rue et les marchés de nuit).\n\n**La question essentielle : เท่าไหร่ (thâo-rài)**\n\n**เท่าไหร่ (thâo-rài)** signifie \"Combien ?\" et c'est votre phrase d'achat la plus importante !\n\n**Marchandage : ลดได้ไหม (lót dâai mái)**\n\nLe marchandage est attendu dans :\n• Les marchés de rue (ตลาด - dtà-làat)\n• Les marchés de nuit (ตลาดกลางคืน - dtà-làat glaang-khʉʉn)\n• Certaines petites boutiques\n\n**Phrases de marchandage clés :**\n1. **ลดได้ไหม (lót dâai mái)** = \"Vous pouvez faire une réduction ?\"\n2. **แพงไป (pheng bpai)** = \"Trop cher !\"\n3. **ลดหน่อย (lót nɔ̀i)** = \"Une petite réduction, s'il vous plaît\"",
                [LanguageCode.PORTUGUESE]: "**Fazer compras na Tailândia** é uma aventura! Mercados estão em todos os lugares, e pechinchar é uma parte normal da experiência (especialmente em mercados de rua e mercados noturnos).\n\n**A pergunta essencial: เท่าไหร่ (thâo-rài)**\n\n**เท่าไหร่ (thâo-rài)** significa \"Quanto custa?\" e é sua frase de compras mais importante!\n\n**Pechinchando: ลดได้ไหม (lót dâai mái)**\n\nPechinchar é esperado em:\n• Mercados de rua (ตลาด - dtà-làat)\n• Mercados noturnos (ตลาดกลางคืน - dtà-làat glaang-khʉʉn)\n• Algumas pequenas lojas\n\n**Frases essenciais para pechinchar:**\n1. **ลดได้ไหม (lót dâai mái)** = \"Pode dar desconto?\"\n2. **แพงไป (pheng bpai)** = \"Muito caro!\"\n3. **ลดหน่อย (lót nɔ̀i)** = \"Um desconto, por favor\"",
                [LanguageCode.MANDARIN]: "**在泰國購物**是一場冒險！市場到處都是，討價還價是體驗的正常部分（特別是在街市和夜市）。\n\n**最重要的問題：เท่าไหร่ (thâo-rài)**\n\n**เท่าไหร่ (thâo-rài)** 意思是「多少錢？」，這是你最重要的購物短語！\n\n**討價還價：ลดได้ไหม (lót dâai mái)**\n\n可以討價還價的地方：\n• 街市（ตลาด - dtà-làat）\n• 夜市（ตลาดกลางคืน - dtà-làat glaang-khʉʉn）\n• 一些小商店\n\n**關鍵討價還價短語：**\n1. **ลดได้ไหม (lót dâai mái)** = 「可以打折嗎？」\n2. **แพงไป (pheng bpai)** = 「太貴了！」\n3. **ลดหน่อย (lót nɔ̀i)** = 「請便宜一點」",
            }
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the bargaining phrases in the correct order.",
                [LanguageCode.FRENCH]: "Mettez les phrases de marchandage dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque as frases de pechincha na ordem correta.",
                [LanguageCode.MANDARIN]: "將討價還價的短語按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["นี่", "เท่าไหร่"], hint: { [LanguageCode.ENGLISH]: "How much is this?", [LanguageCode.FRENCH]: "Combien coûte ceci ?", [LanguageCode.PORTUGUESE]: "Quanto custa isto?", [LanguageCode.MANDARIN]: "這個多少錢？" } },
                { correctOrder: ["ลด", "ได้ไหม"], hint: { [LanguageCode.ENGLISH]: "Can you discount?", [LanguageCode.FRENCH]: "Vous pouvez faire une réduction ?", [LanguageCode.PORTUGUESE]: "Pode dar desconto?", [LanguageCode.MANDARIN]: "可以打折嗎？" } },
                { correctOrder: ["แพง", "ไป"], hint: { [LanguageCode.ENGLISH]: "Too expensive!", [LanguageCode.FRENCH]: "Trop cher !", [LanguageCode.PORTUGUESE]: "Muito caro!", [LanguageCode.MANDARIN]: "太貴了！" } },
                { correctOrder: ["เอา", "ซื้อ"], hint: { [LanguageCode.ENGLISH]: "I'll buy it.", [LanguageCode.FRENCH]: "Je vais l'acheter.", [LanguageCode.PORTUGUESE]: "Vou comprar.", [LanguageCode.MANDARIN]: "我要買。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the transaction conversations.",
                [LanguageCode.FRENCH]: "Complétez les conversations de transaction.",
                [LanguageCode.PORTUGUESE]: "Complete as conversas de transação.",
                [LanguageCode.MANDARIN]: "完成交易對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A: เอาถุงไหม B: ___", [LanguageCode.FRENCH]: "A: Voulez-vous un sac ? B: ___", [LanguageCode.PORTUGUESE]: "A: Quer uma sacola? B: ___", [LanguageCode.MANDARIN]: "A: 要袋子嗎？ B: ___" }, correctAnswer: "เอา/ไม่เอา", end: { [LanguageCode.ENGLISH]: " (Yes/No)", [LanguageCode.FRENCH]: " (Oui/Non)", [LanguageCode.PORTUGUESE]: " (Sim/Não)", [LanguageCode.MANDARIN]: " (要/不要)" } },
                { start: { [LanguageCode.ENGLISH]: "Customer: มีสีอื่น___", [LanguageCode.FRENCH]: "Client : Vous avez d'autres couleurs___", [LanguageCode.PORTUGUESE]: "Cliente: Tem outras cores___", [LanguageCode.MANDARIN]: "顧客：有其他顏色___" }, correctAnswer: "ไหม", end: { [LanguageCode.ENGLISH]: " (Do you have other colors?)", [LanguageCode.FRENCH]: " (Vous avez d'autres couleurs ?)", [LanguageCode.PORTUGUESE]: " (Tem outras cores?)", [LanguageCode.MANDARIN]: " (嗎？)" } },
                { start: { [LanguageCode.ENGLISH]: "Customer: ___ได้ไหม (Can I try?)", [LanguageCode.FRENCH]: "Client : ___ได้ไหม (Je peux essayer ?)", [LanguageCode.PORTUGUESE]: "Cliente: ___ได้ไหม (Posso experimentar?)", [LanguageCode.MANDARIN]: "顧客：___ได้ไหม（可以試嗎？）" }, correctAnswer: "ลอง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: เป็นสมาชิกไหม B: ___", [LanguageCode.FRENCH]: "A: Êtes-vous membre ? B: ___", [LanguageCode.PORTUGUESE]: "A: É membro? B: ___", [LanguageCode.MANDARIN]: "A: 是會員嗎？ B: ___" }, correctAnswer: "ใช่/ไม่ใช่", end: { [LanguageCode.ENGLISH]: " (Yes/No)", [LanguageCode.FRENCH]: " (Oui/Non)", [LanguageCode.PORTUGUESE]: " (Sim/Não)", [LanguageCode.MANDARIN]: " (是/不是)" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the shopping question to the situation.",
                [LanguageCode.FRENCH]: "Associez la question d'achat à la situation.",
                [LanguageCode.PORTUGUESE]: "Relacione a pergunta de compras à situação.",
                [LanguageCode.MANDARIN]: "將購物問題與情境配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "You want to know the price:", [LanguageCode.FRENCH]: "Vous voulez connaître le prix :", [LanguageCode.PORTUGUESE]: "Você quer saber o preço:", [LanguageCode.MANDARIN]: "你想知道價格：" }, answer: { [LanguageCode.ENGLISH]: "เท่าไหร่", [LanguageCode.FRENCH]: "เท่าไหร่", [LanguageCode.PORTUGUESE]: "เท่าไหร่", [LanguageCode.MANDARIN]: "เท่าไหร่" } },
                { prompt: { [LanguageCode.ENGLISH]: "You want to negotiate:", [LanguageCode.FRENCH]: "Vous voulez négocier :", [LanguageCode.PORTUGUESE]: "Você quer negociar:", [LanguageCode.MANDARIN]: "你想討價還價：" }, answer: { [LanguageCode.ENGLISH]: "ลดได้ไหม", [LanguageCode.FRENCH]: "ลดได้ไหม", [LanguageCode.PORTUGUESE]: "ลดได้ไหม", [LanguageCode.MANDARIN]: "ลดได้ไหม" } },
                { prompt: { [LanguageCode.ENGLISH]: "You want to try something on:", [LanguageCode.FRENCH]: "Vous voulez essayer quelque chose :", [LanguageCode.PORTUGUESE]: "Você quer experimentar algo:", [LanguageCode.MANDARIN]: "你想試穿東西：" }, answer: { [LanguageCode.ENGLISH]: "ลองได้ไหม", [LanguageCode.FRENCH]: "ลองได้ไหม", [LanguageCode.PORTUGUESE]: "ลองได้ไหม", [LanguageCode.MANDARIN]: "ลองได้ไหม" } },
                { prompt: { [LanguageCode.ENGLISH]: "You want to check if they have something:", [LanguageCode.FRENCH]: "Vous voulez vérifier s'ils ont quelque chose :", [LanguageCode.PORTUGUESE]: "Você quer verificar se eles têm algo:", [LanguageCode.MANDARIN]: "你想確認他們有沒有東西：" }, answer: { [LanguageCode.ENGLISH]: "มีไหม", [LanguageCode.FRENCH]: "มีไหม", [LanguageCode.PORTUGUESE]: "มีไหม", [LanguageCode.MANDARIN]: "มีไหม" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best response for each shopping scenario.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure réponse pour chaque scénario d'achat.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor resposta para cada cenário de compras.",
                [LanguageCode.MANDARIN]: "為每個購物場景選擇最佳回應。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "The vendor asks 'เอาถุงไหม'. You don't want a bag. You say:", [LanguageCode.FRENCH]: "Le vendeur demande 'เอาถุงไหม'. Vous ne voulez pas de sac. Vous dites :", [LanguageCode.PORTUGUESE]: "O vendedor pergunta 'เอาถุงไหม'. Você não quer sacola. Você diz:", [LanguageCode.MANDARIN]: "攤販問「เอาถุงไหม」。你不要袋子。你說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เอา", [LanguageCode.FRENCH]: "เอา", [LanguageCode.PORTUGUESE]: "เอา", [LanguageCode.MANDARIN]: "เอา" },
                        { [LanguageCode.ENGLISH]: "ไม่เอา", [LanguageCode.FRENCH]: "ไม่เอา", [LanguageCode.PORTUGUESE]: "ไม่เอา", [LanguageCode.MANDARIN]: "ไม่เอา" },
                        { [LanguageCode.ENGLISH]: "ไม่มี", [LanguageCode.FRENCH]: "ไม่มี", [LanguageCode.PORTUGUESE]: "ไม่มี", [LanguageCode.MANDARIN]: "ไม่มี" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You think the price is too high. You say:", [LanguageCode.FRENCH]: "Vous pensez que le prix est trop élevé. Vous dites :", [LanguageCode.PORTUGUESE]: "Você acha que o preço está muito alto. Você diz:", [LanguageCode.MANDARIN]: "你覺得價格太高了。你說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ถูกมาก", [LanguageCode.FRENCH]: "ถูกมาก", [LanguageCode.PORTUGUESE]: "ถูกมาก", [LanguageCode.MANDARIN]: "ถูกมาก" },
                        { [LanguageCode.ENGLISH]: "แพงไป", [LanguageCode.FRENCH]: "แพงไป", [LanguageCode.PORTUGUESE]: "แพงไป", [LanguageCode.MANDARIN]: "แพงไป" },
                        { [LanguageCode.ENGLISH]: "ลองได้ไหม", [LanguageCode.FRENCH]: "ลองได้ไหม", [LanguageCode.PORTUGUESE]: "ลองได้ไหม", [LanguageCode.MANDARIN]: "ลองได้ไหม" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You want to check if something is authentic. You ask:", [LanguageCode.FRENCH]: "Vous voulez vérifier si quelque chose est authentique. Vous demandez :", [LanguageCode.PORTUGUESE]: "Você quer verificar se algo é autêntico. Você pergunta:", [LanguageCode.MANDARIN]: "你想確認東西是不是真品。你問：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ของปลอมไหม", [LanguageCode.FRENCH]: "ของปลอมไหม", [LanguageCode.PORTUGUESE]: "ของปลอมไหม", [LanguageCode.MANDARIN]: "ของปลอมไหม" },
                        { [LanguageCode.ENGLISH]: "ของแท้ไหม", [LanguageCode.FRENCH]: "ของแท้ไหม", [LanguageCode.PORTUGUESE]: "ของแท้ไหม", [LanguageCode.MANDARIN]: "ของแท้ไหม" },
                        { [LanguageCode.ENGLISH]: "มีไหม", [LanguageCode.FRENCH]: "มีไหม", [LanguageCode.PORTUGUESE]: "มีไหม", [LanguageCode.MANDARIN]: "มีไหม" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the payment method to its Thai word.",
                [LanguageCode.FRENCH]: "Associez le mode de paiement à son mot thaïlandais.",
                [LanguageCode.PORTUGUESE]: "Relacione o método de pagamento à sua palavra tailandesa.",
                [LanguageCode.MANDARIN]: "將付款方式與泰語詞彙配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Cash", [LanguageCode.FRENCH]: "Espèces", [LanguageCode.PORTUGUESE]: "Dinheiro", [LanguageCode.MANDARIN]: "現金" }, answer: { [LanguageCode.ENGLISH]: "เงินสด", [LanguageCode.FRENCH]: "เงินสด", [LanguageCode.PORTUGUESE]: "เงินสด", [LanguageCode.MANDARIN]: "เงินสด" } },
                { prompt: { [LanguageCode.ENGLISH]: "Credit card", [LanguageCode.FRENCH]: "Carte de crédit", [LanguageCode.PORTUGUESE]: "Cartão de crédito", [LanguageCode.MANDARIN]: "信用卡" }, answer: { [LanguageCode.ENGLISH]: "บัตรเครดิต", [LanguageCode.FRENCH]: "บัตรเครดิต", [LanguageCode.PORTUGUESE]: "บัตรเครดิต", [LanguageCode.MANDARIN]: "บัตรเครดิต" } },
                { prompt: { [LanguageCode.ENGLISH]: "Scan (QR payment)", [LanguageCode.FRENCH]: "Scanner (paiement QR)", [LanguageCode.PORTUGUESE]: "Escanear (pagamento QR)", [LanguageCode.MANDARIN]: "掃描（QR支付）" }, answer: { [LanguageCode.ENGLISH]: "สแกน", [LanguageCode.FRENCH]: "สแกน", [LanguageCode.PORTUGUESE]: "สแกน", [LanguageCode.MANDARIN]: "สแกน" } },
                { prompt: { [LanguageCode.ENGLISH]: "Member/Membership", [LanguageCode.FRENCH]: "Membre/Adhésion", [LanguageCode.PORTUGUESE]: "Membro/Associação", [LanguageCode.MANDARIN]: "會員" }, answer: { [LanguageCode.ENGLISH]: "สมาชิก", [LanguageCode.FRENCH]: "สมาชิก", [LanguageCode.PORTUGUESE]: "สมาชิก", [LanguageCode.MANDARIN]: "สมาชิก" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the bargaining conversation.",
                [LanguageCode.FRENCH]: "Complétez la conversation de marchandage.",
                [LanguageCode.PORTUGUESE]: "Complete a conversa de pechincha.",
                [LanguageCode.MANDARIN]: "完成討價還價對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "Vendor: ___สมาชิกไหม (Are you a member?)", [LanguageCode.FRENCH]: "Vendeur : ___สมาชิกไหม (Êtes-vous membre ?)", [LanguageCode.PORTUGUESE]: "Vendedor: ___สมาชิกไหม (É membro?)", [LanguageCode.MANDARIN]: "攤販：___สมาชิกไหม（是會員嗎？）" }, correctAnswer: "เป็น", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Customer: ___ได้ไหม (Can you discount?)", [LanguageCode.FRENCH]: "Client : ___ได้ไหม (Vous pouvez faire une réduction ?)", [LanguageCode.PORTUGUESE]: "Cliente: ___ได้ไหม (Pode dar desconto?)", [LanguageCode.MANDARIN]: "顧客：___ได้ไหม（可以打折嗎？）" }, correctAnswer: "ลด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Customer: เอา___ (I'll buy it)", [LanguageCode.FRENCH]: "Client : เอา___ (Je vais l'acheter)", [LanguageCode.PORTUGUESE]: "Cliente: เอา___ (Vou comprar)", [LanguageCode.MANDARIN]: "顧客：เอา___（我要買）" }, correctAnswer: "ซื้อ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete market transactions.",
                [LanguageCode.FRENCH]: "Construisez des transactions de marché complètes.",
                [LanguageCode.PORTUGUESE]: "Construa transações completas de mercado.",
                [LanguageCode.MANDARIN]: "組成完整的市場交易。",
            },
            sentences: [
                { correctOrder: ["มี", "สี", "อื่น", "ไหม"], hint: { [LanguageCode.ENGLISH]: "Do you have other colors?", [LanguageCode.FRENCH]: "Vous avez d'autres couleurs ?", [LanguageCode.PORTUGUESE]: "Tem outras cores?", [LanguageCode.MANDARIN]: "有其他顏色嗎？" } },
                { correctOrder: ["ของ", "แท้", "ไหม"], hint: { [LanguageCode.ENGLISH]: "Is this real/authentic?", [LanguageCode.FRENCH]: "Est-ce authentique ?", [LanguageCode.PORTUGUESE]: "Isto é autêntico?", [LanguageCode.MANDARIN]: "這是真品嗎？" } },
                { correctOrder: ["จ่าย", "เงินสด"], hint: { [LanguageCode.ENGLISH]: "Pay with cash.", [LanguageCode.FRENCH]: "Payer en espèces.", [LanguageCode.PORTUGUESE]: "Pagar com dinheiro.", [LanguageCode.MANDARIN]: "用現金付款。" } },
            ]
        }
    ],
    listeningSpeaking: {
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "ลดได้ไหม แพงไป",
            [LanguageCode.FRENCH]: "ลดได้ไหม แพงไป",
            [LanguageCode.PORTUGUESE]: "ลดได้ไหม แพงไป",
            [LanguageCode.MANDARIN]: "ลดได้ไหม แพงไป",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Haggle for an item at the market. Example: nîi thâo-rài khráp? (How much is this?) ... pheng bpai! lót dâai mái? (Too expensive! Can you discount?)",
            [LanguageCode.FRENCH]: "Négociez pour un article au marché. Exemple : nîi thâo-rài khráp? (Combien coûte ceci ?) ... pheng bpai! lót dâai mái? (Trop cher ! Vous pouvez faire une réduction ?)",
            [LanguageCode.PORTUGUESE]: "Pechinche por um item no mercado. Exemplo: nîi thâo-rài khráp? (Quanto custa isto?) ... pheng bpai! lót dâai mái? (Muito caro! Pode dar desconto?)",
            [LanguageCode.MANDARIN]: "在市場討價還價。例子：nîi thâo-rài khráp?（這個多少錢？）... pheng bpai! lót dâai mái?（太貴了！可以打折嗎？）",
        }
    }
};
