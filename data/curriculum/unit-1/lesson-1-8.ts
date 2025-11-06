import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_8: Lesson = {
    id: "1.8",
    title: {
        [LanguageCode.ENGLISH]: "Food & Eating Culture",
        [LanguageCode.FRENCH]: "Cuisine et culture du repas",
        [LanguageCode.PORTUGUESE]: "Comida e cultura alimentar",
        [LanguageCode.MANDARIN]: "食物與飲食文化",
    },
    vocabulary: [
        { thai: "อร่อย", phonetic: "à-ròi", translations: { [LanguageCode.ENGLISH]: "delicious", [LanguageCode.FRENCH]: "délicieux", [LanguageCode.PORTUGUESE]: "delicioso", [LanguageCode.MANDARIN]: "好吃" } },
        { thai: "เผ็ด", phonetic: "phèt", translations: { [LanguageCode.ENGLISH]: "spicy", [LanguageCode.FRENCH]: "épicé", [LanguageCode.PORTUGUESE]: "picante", [LanguageCode.MANDARIN]: "辣" } },
        { thai: "หวาน", phonetic: "wǎan", translations: { [LanguageCode.ENGLISH]: "sweet", [LanguageCode.FRENCH]: "sucré", [LanguageCode.PORTUGUESE]: "doce", [LanguageCode.MANDARIN]: "甜" } },
        { thai: "เปรี้ยว", phonetic: "bprîao", translations: { [LanguageCode.ENGLISH]: "sour", [LanguageCode.FRENCH]: "acide", [LanguageCode.PORTUGUESE]: "azedo", [LanguageCode.MANDARIN]: "酸" } },
        { thai: "เค็ม", phonetic: "khem", translations: { [LanguageCode.ENGLISH]: "salty", [LanguageCode.FRENCH]: "salé", [LanguageCode.PORTUGUESE]: "salgado", [LanguageCode.MANDARIN]: "鹹" } },
        { thai: "ขม", phonetic: "khǒm", translations: { [LanguageCode.ENGLISH]: "bitter", [LanguageCode.FRENCH]: "amer", [LanguageCode.PORTUGUESE]: "amargo", [LanguageCode.MANDARIN]: "苦" } },
        { thai: "กินข้าวหรือยัง", phonetic: "gin khâao rʉ̌ʉ yang", translations: { [LanguageCode.ENGLISH]: "Have you eaten yet?", [LanguageCode.FRENCH]: "Tu as mangé ?", [LanguageCode.PORTUGUESE]: "Você já comeu?", [LanguageCode.MANDARIN]: "你吃飯了嗎？" } },
        { thai: "อิ่ม", phonetic: "ìm", translations: { [LanguageCode.ENGLISH]: "full (not hungry)", [LanguageCode.FRENCH]: "rassasié(e)", [LanguageCode.PORTUGUESE]: "satisfeito(a)", [LanguageCode.MANDARIN]: "飽" } },
        { thai: "อาหารเช้า", phonetic: "aa-hǎan cháao", translations: { [LanguageCode.ENGLISH]: "breakfast", [LanguageCode.FRENCH]: "petit-déjeuner", [LanguageCode.PORTUGUESE]: "café da manhã", [LanguageCode.MANDARIN]: "早餐" } },
        { thai: "อาหารเที่ยง", phonetic: "aa-hǎan thîang", translations: { [LanguageCode.ENGLISH]: "lunch", [LanguageCode.FRENCH]: "déjeuner", [LanguageCode.PORTUGUESE]: "almoço", [LanguageCode.MANDARIN]: "午餐" } },
        { thai: "อาหารเย็น", phonetic: "aa-hǎan yen", translations: { [LanguageCode.ENGLISH]: "dinner", [LanguageCode.FRENCH]: "dîner", [LanguageCode.PORTUGUESE]: "jantar", [LanguageCode.MANDARIN]: "晚餐" } },
        { thai: "บุฟเฟต์", phonetic: "búp-fêe", translations: { [LanguageCode.ENGLISH]: "buffet", [LanguageCode.FRENCH]: "buffet", [LanguageCode.PORTUGUESE]: "buffet", [LanguageCode.MANDARIN]: "自助餐" } },
        { thai: "สด", phonetic: "sòt", translations: { [LanguageCode.ENGLISH]: "fresh", [LanguageCode.FRENCH]: "frais", [LanguageCode.PORTUGUESE]: "fresco", [LanguageCode.MANDARIN]: "新鮮" } },
        { thai: "ของหวาน", phonetic: "khɔ̌ɔng wǎan", translations: { [LanguageCode.ENGLISH]: "dessert/sweets", [LanguageCode.FRENCH]: "dessert/sucreries", [LanguageCode.PORTUGUESE]: "sobremesa/doces", [LanguageCode.MANDARIN]: "甜點/甜食" } },
        { thai: "ไม่เผ็ด", phonetic: "mâi phèt", translations: { [LanguageCode.ENGLISH]: "not spicy", [LanguageCode.FRENCH]: "pas épicé", [LanguageCode.PORTUGUESE]: "sem pimenta", [LanguageCode.MANDARIN]: "不辣" } },
        { thai: "เผ็ดนิดหน่อย", phonetic: "phèt nít nɔ̀i", translations: { [LanguageCode.ENGLISH]: "a little spicy", [LanguageCode.FRENCH]: "un peu épicé", [LanguageCode.PORTUGUESE]: "um pouco picante", [LanguageCode.MANDARIN]: "有點辣" } },
        { thai: "รสชาติ", phonetic: "rót-châat", translations: { [LanguageCode.ENGLISH]: "flavor/taste", [LanguageCode.FRENCH]: "saveur/goût", [LanguageCode.PORTUGUESE]: "sabor/gosto", [LanguageCode.MANDARIN]: "味道" } },
        { thai: "หิว", phonetic: "hǐw", translations: { [LanguageCode.ENGLISH]: "hungry", [LanguageCode.FRENCH]: "affamé(e)", [LanguageCode.PORTUGUESE]: "com fome", [LanguageCode.MANDARIN]: "餓" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "\nกิน(ข้าว)แล้วหรือยัง?: A Thai ‘How are you?’",
                [LanguageCode.FRENCH]: "\nกิน(ข้าว)แล้วหรือยัง ? : Le ‘Comment ça va ?’ thaï",
                [LanguageCode.PORTUGUESE]: "\nกิน(ข้าว)แล้วหรือยัง?: O ‘Tudo bem?’ tailandês",
                [LanguageCode.MANDARIN]: "\n吃飯了嗎？：泰國版的「你好嗎？」",
            },
            content: {
                [LanguageCode.ENGLISH]: "**กินข้าวหรือยัง (gin khâao rʉ̌ʉ yang)** - \"Have you eaten yet?\" - is one of the MOST IMPORTANT phrases in Thai culture. You'll hear it constantly!\n\n**Why This Phrase Matters:**\n\nIn Western culture, we ask \"How are you?\" In Thai culture, people ask \"Have you eaten yet?\" Both versions exist:\n• **กินแล้วหรือยัง (gin láew rʉ̌ʉ yang)** = \"(Have you) eaten already or not yet?\"\n• **กินข้าวหรือยัง (gin khâao rʉ̌ʉ yang)** = \"(Have you) eaten rice already or not yet?\"\n\nBoth mean the same thing and are used interchangeably!\n\n**Understanding the Structure:**\n• **กิน (gin)** = eat\n• **ข้าว (khâao)** = rice (optional, but common)\n• **แล้ว (láew)** = already\n• **หรือ (rʉ̌ʉ)** = or\n• **ยัง (yang)** = not yet\n\nLiterally: \"Eat (rice) already OR not yet?\" It's asking which state you're in!\n\n**How to Respond:**\n• **กินแล้ว (gin láew)** or just **แล้ว (láew)** = \"Already ate\" / \"Yes, I ate\"\n• **ยัง (yang)** or **ยังไม่ได้กิน (yang mâi dâai gin)** = \"Not yet\" / \"Haven't eaten yet\"\n\nThat's it! Super simple, but culturally HUGE.\n\n**The Cultural Significance:**\n\nThis isn't really about food - it's about showing care and concern! In Thailand:\n• Food represents care and hospitality\n• Asking if someone has eaten shows you're thinking about their wellbeing\n• It's similar to asking \"Are you okay?\" or \"How are you?\"\n• You can ask this to friends, family, colleagues, even strangers!\n\n**When You'll Hear It:**\n• Greeting someone you haven't seen in a while\n• When you meet someone around meal times\n• As a general check-in, like \"How's it going?\"\n• From friends, family, coworkers, shop owners\n\n**The Five Tastes of Thai Cuisine:**\n\nThai food is all about BALANCE. A good meal balances all five taste profiles:\n\n1. **หวาน (wǎan)** = Sweet\n2. **เค็ม (khem)** = Salty\n3. **เปรี้ยว (bprîao)** = Sour\n4. **เผ็ด (phèt)** = Spicy/Hot\n5. **ขม (khǒm)** = Bitter\n\nMany dishes combine 3-4 of these tastes at once! That's what makes Thai food so complex and delicious.\n\n**Describing Food:**\n\nWhen you taste something, you can describe it:\n• **อร่อย (à-ròi)** = Delicious! (Say this often - Thais love it!)\n• **เผ็ดมาก (phèt mâak)** = Very spicy!\n• **หวานไป (wǎan bpai)** = Too sweet\n• **เค็มไป (khem bpai)** = Too salty\n• **กำลังดี (gam-lang dii)** = Just right!\n\n**Spice Level Survival Guide:**\n\nThai food can be VERY spicy! Here's how to control the heat:\n• **ไม่เผ็ด (mâi phèt)** = \"Not spicy\" - Your safety phrase!\n• **เผ็ดนิดหน่อย (phèt nít nɔ̀i)** = \"A little spicy\" - Still might be spicy!\n• **เผ็ดน้อย (phèt nɔ́i)** = \"Less spicy\" - Safer option\n• **เผ็ดมาก (phèt mâak)** = \"Very spicy\" - For adventurers!\n\n**Pro Tip:** Even \"ไม่เผ็ด\" (not spicy) might still have some heat for non-Thai palates. Thai \"not spicy\" ≠ Western \"not spicy\"!\n\n**Thai Eating Culture:**\n\n1. **Sharing is Standard:** Meals are almost always shared family-style. Order multiple dishes for the table.\n\n2. **Rice is Central:** Rice (ข้าว) is the main dish; everything else is considered \"with rice\" (กับข้าว - gàp khâao).\n\n3. **Freshness Matters:** **สด (sòt)** = fresh. Thais are obsessed with fresh ingredients, especially seafood and vegetables.\n\n4. **Timing:** Thais eat when hungry, not just at set meal times. Street food and snacks are available 24/7!\n\n5. **Eating Out:** It's incredibly common and affordable. Many Thais eat out for most meals.\n\n**Meal Names:**\n• **อาหารเช้า (aa-hǎan cháao)** = Breakfast\n• **อาหารเที่ยง (aa-hǎan thîang)** = Lunch  \n• **อาหารเย็น (aa-hǎan yen)** = Dinner\n\n**Important Phrases:**\n• **ผมอิ่มแล้ว (phǒm ìm láew)** = \"I'm full already\"\n• **หิวข้าว (hǐw khâao)** = \"I'm hungry\" (literally \"hungry for rice\")\n• **รสชาติดีมาก (rót-châat dii mâak)** = \"The flavor is very good\"\n\n**Cultural Note on Buffets:**\n\n**บุฟเฟต์ (búp-fêe)** buffets are HUGE in Thailand! From cheap all-you-can-eat BBQ to fancy hotel spreads. Thais love the variety and value. Just remember: take what you can eat, don't waste food - it's considered disrespectful.",
                [LanguageCode.FRENCH]: "En thaï, demander « Tu as mangé ? » est une salutation chaleureuse qui montre de l’attention. Vous entendrez **กินแล้วหรือยัง** et **กินข้าวหรือยัง**. Réponses courantes : **แล้ว** (déjà) / **ยัง** (pas encore). Les repas se partagent, on recherche l’équilibre des goûts (sucré, salé, acide, épicé, amer) et la **fraîcheur** des ingrédients. Dites **ไม่เผ็ด** (pas épicé) si besoin.",
                [LanguageCode.PORTUGUESE]: "Em tailandês, perguntar « Você já comeu? » é uma saudação afetuosa. Você ouvirá **กินแล้วหรือยัง** e **กินข้าวหรือยัง**. Respostas: **แล้ว** (já) / **ยัง** (ainda não). As refeições são compartilhadas, busca‑se equilíbrio de sabores (doce, salgado, azedo, picante, amargo) e **frescura** dos ingredientes. Diga **ไม่เผ็ด** (sem pimenta) se necessário.",
                [LanguageCode.MANDARIN]: "在泰國，問「你吃飯了嗎？」是一種關心的問候。常聽到 **กินแล้วหรือยัง** 與 **กินข้าวหรือยัง**。常見回答：**แล้ว**（已經）/ **ยัง**（還沒）。用餐常共食，講究味道平衡（甜、鹹、酸、辣、苦）與食材**新鮮**；不能吃辣就說 **不辣** 或 **有點辣**。",
            }
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the taste description in order.",
                [LanguageCode.FRENCH]: "Mettez la description de goût dans l’ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque a descrição de sabor na ordem.",
                [LanguageCode.MANDARIN]: "將味道描述排成正確順序。",
            },
            sentences: [
                { correctOrder: ["ต้มยำ", "เผ็ด", "เปรี้ยว", "มาก"], hint: { [LanguageCode.ENGLISH]: "Tom yum is very spicy and sour.", [LanguageCode.FRENCH]: "Le tom yum est très épicé et acide.", [LanguageCode.PORTUGUESE]: "Tom yum é bem picante e azedo.", [LanguageCode.MANDARIN]: "冬陰湯很辣也很酸。" } },
                { correctOrder: ["แกงเขียวหวาน", "หวาน", "นิดหน่อย"], hint: { [LanguageCode.ENGLISH]: "Green curry is a little sweet.", [LanguageCode.FRENCH]: "Le curry vert est un peu sucré.", [LanguageCode.PORTUGUESE]: "Curry verde é um pouco doce.", [LanguageCode.MANDARIN]: "綠咖哩有一點甜。" } },
                { correctOrder: ["ผัดไทย", "อร่อย", "มาก"], hint: { [LanguageCode.ENGLISH]: "Pad Thai is very delicious.", [LanguageCode.FRENCH]: "Le pad thaï est très délicieux.", [LanguageCode.PORTUGUESE]: "Pad thai é muito delicioso.", [LanguageCode.MANDARIN]: "泰式炒麵很好吃。" } },
                { correctOrder: ["ผัดกะเพรา", "ไม่", "เผ็ด"], hint: { [LanguageCode.ENGLISH]: "Basil stir‑fry, not spicy.", [LanguageCode.FRENCH]: "Sauté au basilic, pas épicé.", [LanguageCode.PORTUGUESE]: "Refogado de manjericão, sem pimenta.", [LanguageCode.MANDARIN]: "打拋炒，不辣。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in meal‑related questions and statements.",
                [LanguageCode.FRENCH]: "Complétez les questions/phrases liées au repas.",
                [LanguageCode.PORTUGUESE]: "Complete perguntas e frases sobre refeições.",
                [LanguageCode.MANDARIN]: "完成與用餐相關的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "คุณกินข้าว___หรือยัง?", [LanguageCode.FRENCH]: "Tu as mangé ___ ?", [LanguageCode.PORTUGUESE]: "Você já comeu ___?", [LanguageCode.MANDARIN]: "你吃飯___了嗎？" }, correctAnswer: "แล้ว/ยัง", end: { [LanguageCode.ENGLISH]: " (already/yet)", [LanguageCode.FRENCH]: " (déjà/pas encore)", [LanguageCode.PORTUGUESE]: " (já/ainda)", [LanguageCode.MANDARIN]: "（已經/還沒）" } },
                { start: { [LanguageCode.ENGLISH]: "เราเจอกันตอน___", [LanguageCode.FRENCH]: "On se voit ___", [LanguageCode.PORTUGUESE]: "A gente se vê ___", [LanguageCode.MANDARIN]: "我們___見面" }, correctAnswer: "เช้า/เที่ยง/เย็น", end: { [LanguageCode.ENGLISH]: " (morning/noon/evening)", [LanguageCode.FRENCH]: " (matin/midi/soir)", [LanguageCode.PORTUGUESE]: " (manhã/meio‑dia/noite)", [LanguageCode.MANDARIN]: "（早上/中午/晚上）" } },
                { start: { [LanguageCode.ENGLISH]: "ขออาหาร___หน่อย", [LanguageCode.FRENCH]: "Je voudrais un plat ___, s'il vous plaît", [LanguageCode.PORTUGUESE]: "Quero comida ___, por favor", [LanguageCode.MANDARIN]: "請給我___的菜" }, correctAnswer: "ไม่เผ็ด/เผ็ดนิดหน่อย", end: { [LanguageCode.ENGLISH]: " (not spicy/a little spicy)", [LanguageCode.FRENCH]: " (pas épicé/un peu épicé)", [LanguageCode.PORTUGUESE]: " (sem pimenta/um pouco picante)", [LanguageCode.MANDARIN]: "（不辣/有點辣）" } },
                { start: { [LanguageCode.ENGLISH]: "ผมชอบอาหารที่___", [LanguageCode.FRENCH]: "J'aime la nourriture qui est ___", [LanguageCode.PORTUGUESE]: "Gosto de comida que é ___", [LanguageCode.MANDARIN]: "我喜歡___的食物" }, correctAnswer: "อร่อย/สด/หวาน/เผ็ด/เปรี้ยว/เค็ม/ขม", end: { [LanguageCode.ENGLISH]: " (delicious/fresh/sweet/spicy/sour/salty/bitter)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match taste words to meanings.",
                [LanguageCode.FRENCH]: "Associez les mots de goût à leur sens.",
                [LanguageCode.PORTUGUESE]: "Relacione palavras de sabor aos significados.",
                [LanguageCode.MANDARIN]: "將味道詞與意思配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "sweet", [LanguageCode.FRENCH]: "sucré", [LanguageCode.PORTUGUESE]: "doce", [LanguageCode.MANDARIN]: "甜" }, answer: { [LanguageCode.ENGLISH]: "หวาน", [LanguageCode.FRENCH]: "หวาน", [LanguageCode.PORTUGUESE]: "หวาน", [LanguageCode.MANDARIN]: "หวาน" } },
                { prompt: { [LanguageCode.ENGLISH]: "sour", [LanguageCode.FRENCH]: "acide", [LanguageCode.PORTUGUESE]: "azedo", [LanguageCode.MANDARIN]: "酸" }, answer: { [LanguageCode.ENGLISH]: "เปรี้ยว", [LanguageCode.FRENCH]: "เปรี้ยว", [LanguageCode.PORTUGUESE]: "เปรี้ยว", [LanguageCode.MANDARIN]: "เปรี้ยว" } },
                { prompt: { [LanguageCode.ENGLISH]: "spicy", [LanguageCode.FRENCH]: "épicé", [LanguageCode.PORTUGUESE]: "picante", [LanguageCode.MANDARIN]: "辣" }, answer: { [LanguageCode.ENGLISH]: "เผ็ด", [LanguageCode.FRENCH]: "เผ็ด", [LanguageCode.PORTUGUESE]: "เผ็ด", [LanguageCode.MANDARIN]: "เผ็ด" } },
                { prompt: { [LanguageCode.ENGLISH]: "salty", [LanguageCode.FRENCH]: "salé", [LanguageCode.PORTUGUESE]: "salgado", [LanguageCode.MANDARIN]: "鹹" }, answer: { [LanguageCode.ENGLISH]: "เค็ม", [LanguageCode.FRENCH]: "เค็ม", [LanguageCode.PORTUGUESE]: "เค็ม", [LanguageCode.MANDARIN]: "เค็ม" } },
                { prompt: { [LanguageCode.ENGLISH]: "bitter", [LanguageCode.FRENCH]: "amer", [LanguageCode.PORTUGUESE]: "amargo", [LanguageCode.MANDARIN]: "苦" }, answer: { [LanguageCode.ENGLISH]: "ขม", [LanguageCode.FRENCH]: "ขม", [LanguageCode.PORTUGUESE]: "ขม", [LanguageCode.MANDARIN]: "ขม" } },
                { prompt: { [LanguageCode.ENGLISH]: "delicious", [LanguageCode.FRENCH]: "délicieux", [LanguageCode.PORTUGUESE]: "delicioso", [LanguageCode.MANDARIN]: "好吃" }, answer: { [LanguageCode.ENGLISH]: "อร่อย", [LanguageCode.FRENCH]: "อร่อย", [LanguageCode.PORTUGUESE]: "อร่อย", [LanguageCode.MANDARIN]: "อร่อย" } },
                { prompt: { [LanguageCode.ENGLISH]: "fresh", [LanguageCode.FRENCH]: "frais", [LanguageCode.PORTUGUESE]: "fresco", [LanguageCode.MANDARIN]: "新鮮" }, answer: { [LanguageCode.ENGLISH]: "สด", [LanguageCode.FRENCH]: "สด", [LanguageCode.PORTUGUESE]: "สด", [LanguageCode.MANDARIN]: "สด" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match meals and dining words.",
                [LanguageCode.FRENCH]: "Associez les repas et mots liés au dîner.",
                [LanguageCode.PORTUGUESE]: "Relacione refeições e vocabulário de jantar.",
                [LanguageCode.MANDARIN]: "配對餐點與用餐詞彙。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "breakfast", [LanguageCode.FRENCH]: "petit-déjeuner", [LanguageCode.PORTUGUESE]: "café da manhã", [LanguageCode.MANDARIN]: "早餐" }, answer: { [LanguageCode.ENGLISH]: "อาหารเช้า", [LanguageCode.FRENCH]: "อาหารเช้า", [LanguageCode.PORTUGUESE]: "อาหารเช้า", [LanguageCode.MANDARIN]: "อาหารเช้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "lunch", [LanguageCode.FRENCH]: "déjeuner", [LanguageCode.PORTUGUESE]: "almoço", [LanguageCode.MANDARIN]: "午餐" }, answer: { [LanguageCode.ENGLISH]: "อาหารเที่ยง", [LanguageCode.FRENCH]: "อาหารเที่ยง", [LanguageCode.PORTUGUESE]: "อาหารเที่ยง", [LanguageCode.MANDARIN]: "อาหารเที่ยง" } },
                { prompt: { [LanguageCode.ENGLISH]: "dinner", [LanguageCode.FRENCH]: "dîner", [LanguageCode.PORTUGUESE]: "jantar", [LanguageCode.MANDARIN]: "晚餐" }, answer: { [LanguageCode.ENGLISH]: "อาหารเย็น", [LanguageCode.FRENCH]: "อาหารเย็น", [LanguageCode.PORTUGUESE]: "อาหารเย็น", [LanguageCode.MANDARIN]: "อาหารเย็น" } },
                { prompt: { [LanguageCode.ENGLISH]: "dessert", [LanguageCode.FRENCH]: "dessert", [LanguageCode.PORTUGUESE]: "sobremesa", [LanguageCode.MANDARIN]: "甜點" }, answer: { [LanguageCode.ENGLISH]: "ของหวาน", [LanguageCode.FRENCH]: "ของหวาน", [LanguageCode.PORTUGUESE]: "ของหวาน", [LanguageCode.MANDARIN]: "ของหวาน" } },
                { prompt: { [LanguageCode.ENGLISH]: "buffet", [LanguageCode.FRENCH]: "buffet", [LanguageCode.PORTUGUESE]: "buffet", [LanguageCode.MANDARIN]: "自助餐" }, answer: { [LanguageCode.ENGLISH]: "บุฟเฟต์", [LanguageCode.FRENCH]: "บุฟเฟต์", [LanguageCode.PORTUGUESE]: "บุฟเฟต์", [LanguageCode.MANDARIN]: "บุฟเฟต์" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete real food comments.",
                [LanguageCode.FRENCH]: "Complétez des commentaires réels sur la nourriture.",
                [LanguageCode.PORTUGUESE]: "Complete comentários reais sobre comida.",
                [LanguageCode.MANDARIN]: "完成真實的食物評論。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ข้าวเหนียวมะม่วง___มาก", [LanguageCode.FRENCH]: "Le riz gluant à la mangue est très ___", [LanguageCode.PORTUGUESE]: "Mango sticky rice é muito ___", [LanguageCode.MANDARIN]: "芒果糯米飯很___" }, correctAnswer: "หวาน", end: { [LanguageCode.ENGLISH]: " (sweet)", [LanguageCode.FRENCH]: " (sucré)", [LanguageCode.PORTUGUESE]: " (doce)", [LanguageCode.MANDARIN]: "（甜）" } },
                { start: { [LanguageCode.ENGLISH]: "อาหารทะเลต้อง___", [LanguageCode.FRENCH]: "Les fruits de mer doivent être ___", [LanguageCode.PORTUGUESE]: "Frutos do mar precisam ser ___", [LanguageCode.MANDARIN]: "海鮮一定要___" }, correctAnswer: "สด", end: { [LanguageCode.ENGLISH]: " (fresh)", [LanguageCode.FRENCH]: " (frais)", [LanguageCode.PORTUGUESE]: " (frescos)", [LanguageCode.MANDARIN]: "（新鮮）" } },
                { start: { [LanguageCode.ENGLISH]: "ผมไม่ชอบอาหารที่___", [LanguageCode.FRENCH]: "Je n'aime pas la nourriture qui est ___", [LanguageCode.PORTUGUESE]: "Não gosto de comida que seja ___", [LanguageCode.MANDARIN]: "我不喜歡___的食物" }, correctAnswer: "เผ็ด/เค็ม/เปรี้ยว/ขม", end: { [LanguageCode.ENGLISH]: " (spicy/salty/sour/bitter)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Have you eaten yet?", [LanguageCode.FRENCH]: "Tu as mangé ?", [LanguageCode.PORTUGUESE]: "Você já comeu?", [LanguageCode.MANDARIN]: "你吃飯了嗎？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "Not yet. I want to have lunch.", [LanguageCode.FRENCH]: "Pas encore. Je veux déjeuner.", [LanguageCode.PORTUGUESE]: "Ainda não. Quero almoçar.", [LanguageCode.MANDARIN]: "還沒。我想吃午餐。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What kind of food do you like?", [LanguageCode.FRENCH]: "Tu aimes quel type de nourriture ?", [LanguageCode.PORTUGUESE]: "Que tipo de comida você gosta?", [LanguageCode.MANDARIN]: "你喜歡哪種食物？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I like food that’s not spicy, delicious, and fresh.", [LanguageCode.FRENCH]: "J'aime la nourriture pas épicée, délicieuse et fraîche.", [LanguageCode.PORTUGUESE]: "Gosto de comida sem pimenta, deliciosa e fresca.", [LanguageCode.MANDARIN]: "我喜歡不辣、好吃而且新鮮的食物。" } },
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
                    question: { [LanguageCode.ENGLISH]: "Has B eaten yet?", [LanguageCode.FRENCH]: "B a‑t‑il/elle mangé ?", [LanguageCode.PORTUGUESE]: "B já comeu?", [LanguageCode.MANDARIN]: "B 吃飯了嗎？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Yes, already", [LanguageCode.FRENCH]: "Oui, déjà", [LanguageCode.PORTUGUESE]: "Sim, já", [LanguageCode.MANDARIN]: "已經吃了" },
                        { [LanguageCode.ENGLISH]: "No, not yet", [LanguageCode.FRENCH]: "Non, pas encore", [LanguageCode.PORTUGUESE]: "Não, ainda não", [LanguageCode.MANDARIN]: "還沒" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What kind of taste does B prefer?", [LanguageCode.FRENCH]: "Quel type de goût B préfère‑t‑il/elle ?", [LanguageCode.PORTUGUESE]: "Que sabor B prefere?", [LanguageCode.MANDARIN]: "B 偏好什麼味道？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Very spicy", [LanguageCode.FRENCH]: "Très épicé", [LanguageCode.PORTUGUESE]: "Bem picante", [LanguageCode.MANDARIN]: "很辣" },
                        { [LanguageCode.ENGLISH]: "Not spicy, delicious, and fresh", [LanguageCode.FRENCH]: "Pas épicé, délicieux et frais", [LanguageCode.PORTUGUESE]: "Sem pimenta, delicioso e fresco", [LanguageCode.MANDARIN]: "不辣、好吃且新鮮" },
                        { [LanguageCode.ENGLISH]: "Bitter", [LanguageCode.FRENCH]: "Amer", [LanguageCode.PORTUGUESE]: "Amargo", [LanguageCode.MANDARIN]: "苦" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บรรยายมื้ออาหารที่คุณกินโดยใช้คำรสชาติ 4 คำ",
            [LanguageCode.FRENCH]: "บรรยายมื้ออาหารที่คุณกินโดยใช้คำรสชาติ 4 คำ",
            [LanguageCode.PORTUGUESE]: "บรรยายมื้ออาหารที่คุณกินโดยใช้คำรสชาติ 4 คำ",
            [LanguageCode.MANDARIN]: "บรรยายมื้ออาหารที่คุณกินโดยใช้คำรสชาติ 4 คำ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe a meal you ate using four taste words. Example: phàt thai à‑ròi, phèt nít nɔ̀i, bprîao, khem nít nɔ̀i.",
            [LanguageCode.FRENCH]: "Décrivez un repas en utilisant 4 mots de goût. Ex : phàt thai à‑ròi, phèt nít nɔ̀i, bprîao, khem nít nɔ̀i.",
            [LanguageCode.PORTUGUESE]: "Descreva uma refeição usando 4 palavras de sabor. Ex.: phàt thai à‑ròi, phèt nít nɔ̀i, bprîao, khem nít nɔ̀i.",
            [LanguageCode.MANDARIN]: "用四個味道詞描述你吃過的一餐。例：phàt thai à‑ròi, phèt nít nɔ̀i, bprîao, khem nít nɔ̀i。",
        }
    }
};


