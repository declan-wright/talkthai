import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_7: Lesson = {
    id: "1.7",
    title: {
        [LanguageCode.ENGLISH]: "Food Vocabulary Core",
        [LanguageCode.FRENCH]: "Vocabulaire alimentaire de base",
        [LanguageCode.PORTUGUESE]: "Vocabulário alimentar básico",
        [LanguageCode.MANDARIN]: "基礎食物詞彙",
    },
    vocabulary: [
        // Core food words
        { thai: "ข้าว", phonetic: "khâao", translations: { [LanguageCode.ENGLISH]: "rice", [LanguageCode.FRENCH]: "riz", [LanguageCode.PORTUGUESE]: "arroz", [LanguageCode.MANDARIN]: "米飯" } },
        { thai: "แกง", phonetic: "geng", translations: { [LanguageCode.ENGLISH]: "curry", [LanguageCode.FRENCH]: "curry", [LanguageCode.PORTUGUESE]: "curry", [LanguageCode.MANDARIN]: "咖哩" } },
        { thai: "หมู", phonetic: "mǔu", translations: { [LanguageCode.ENGLISH]: "pork", [LanguageCode.FRENCH]: "porc", [LanguageCode.PORTUGUESE]: "porco", [LanguageCode.MANDARIN]: "豬肉" } },
        { thai: "ไก่", phonetic: "gài", translations: { [LanguageCode.ENGLISH]: "chicken", [LanguageCode.FRENCH]: "poulet", [LanguageCode.PORTUGUESE]: "frango", [LanguageCode.MANDARIN]: "雞肉" } },
        { thai: "ปลา", phonetic: "bplaa", translations: { [LanguageCode.ENGLISH]: "fish", [LanguageCode.FRENCH]: "poisson", [LanguageCode.PORTUGUESE]: "peixe", [LanguageCode.MANDARIN]: "魚" } },
        { thai: "เป็ด", phonetic: "bpèt", translations: { [LanguageCode.ENGLISH]: "duck", [LanguageCode.FRENCH]: "canard", [LanguageCode.PORTUGUESE]: "pato", [LanguageCode.MANDARIN]: "鴨肉" } },
        { thai: "ผัก", phonetic: "phàk", translations: { [LanguageCode.ENGLISH]: "vegetable", [LanguageCode.FRENCH]: "légume", [LanguageCode.PORTUGUESE]: "vegetal", [LanguageCode.MANDARIN]: "蔬菜" } },
        { thai: "ผลไม้", phonetic: "phǒn-lá-máai", translations: { [LanguageCode.ENGLISH]: "fruit", [LanguageCode.FRENCH]: "fruit", [LanguageCode.PORTUGUESE]: "fruta", [LanguageCode.MANDARIN]: "水果" } },
        { thai: "น้ำ", phonetic: "náam", translations: { [LanguageCode.ENGLISH]: "water", [LanguageCode.FRENCH]: "eau", [LanguageCode.PORTUGUESE]: "água", [LanguageCode.MANDARIN]: "水" } },
        { thai: "เมนู", phonetic: "meh-nuu", translations: { [LanguageCode.ENGLISH]: "menu", [LanguageCode.FRENCH]: "menu", [LanguageCode.PORTUGUESE]: "cardápio", [LanguageCode.MANDARIN]: "菜單" } },
        { thai: "อาหาร", phonetic: "aa-hǎan", translations: { [LanguageCode.ENGLISH]: "food", [LanguageCode.FRENCH]: "nourriture", [LanguageCode.PORTUGUESE]: "comida", [LanguageCode.MANDARIN]: "食物" } },
        
        // Popular dishes
        { thai: "ข้าวผัด", phonetic: "khâao phàt", translations: { [LanguageCode.ENGLISH]: "fried rice", [LanguageCode.FRENCH]: "riz frit", [LanguageCode.PORTUGUESE]: "arroz frito", [LanguageCode.MANDARIN]: "炒飯" } },
        { thai: "ผัดไทย", phonetic: "phàt thai", translations: { [LanguageCode.ENGLISH]: "pad thai", [LanguageCode.FRENCH]: "pad thaï", [LanguageCode.PORTUGUESE]: "pad thai", [LanguageCode.MANDARIN]: "泰式炒麵" } },
        { thai: "ต้มยำ", phonetic: "dtôm yam", translations: { [LanguageCode.ENGLISH]: "tom yum soup", [LanguageCode.FRENCH]: "soupe tom yum", [LanguageCode.PORTUGUESE]: "sopa tom yum", [LanguageCode.MANDARIN]: "冬陰湯" } },
        { thai: "ส้มตำ", phonetic: "sôm dtam", translations: { [LanguageCode.ENGLISH]: "papaya salad", [LanguageCode.FRENCH]: "salade de papaye", [LanguageCode.PORTUGUESE]: "salada de mamão", [LanguageCode.MANDARIN]: "青木瓜沙拉" } },
        { thai: "ข้าวมันไก่", phonetic: "khâao man gài", translations: { [LanguageCode.ENGLISH]: "chicken rice", [LanguageCode.FRENCH]: "riz au poulet", [LanguageCode.PORTUGUESE]: "arroz com frango", [LanguageCode.MANDARIN]: "海南雞飯" } },
        { thai: "ก้วยเตี๋ยว", phonetic: "gûay dtǐao", translations: { [LanguageCode.ENGLISH]: "noodles", [LanguageCode.FRENCH]: "nouilles", [LanguageCode.PORTUGUESE]: "macarrão", [LanguageCode.MANDARIN]: "麵條" } },
        { thai: "ผัดกะเพรา", phonetic: "phàt gà-phrao", translations: { [LanguageCode.ENGLISH]: "basil stir-fry", [LanguageCode.FRENCH]: "sauté au basilic", [LanguageCode.PORTUGUESE]: "refogado com manjericão", [LanguageCode.MANDARIN]: "打拋炒" } },
        { thai: "แกงเขียวหวาน", phonetic: "geng khǐao wǎan", translations: { [LanguageCode.ENGLISH]: "green curry", [LanguageCode.FRENCH]: "curry vert", [LanguageCode.PORTUGUESE]: "curry verde", [LanguageCode.MANDARIN]: "綠咖哩" } },
        { thai: "ต้มข่าไก่", phonetic: "dtôm khàa gài", translations: { [LanguageCode.ENGLISH]: "chicken coconut soup", [LanguageCode.FRENCH]: "soupe de poulet à la noix de coco", [LanguageCode.PORTUGUESE]: "sopa de frango com coco", [LanguageCode.MANDARIN]: "椰奶雞湯" } },
        { thai: "ข้าวเหนียวมะม่วง", phonetic: "khâao nǐao má-mûang", translations: { [LanguageCode.ENGLISH]: "mango sticky rice", [LanguageCode.FRENCH]: "riz gluant à la mangue", [LanguageCode.PORTUGUESE]: "arroz pegajoso com manga", [LanguageCode.MANDARIN]: "芒果糯米飯" } },
        
        // Additional ingredients and food terms
        { thai: "เนื้อ", phonetic: "nʉ́a", translations: { [LanguageCode.ENGLISH]: "beef", [LanguageCode.FRENCH]: "bœuf", [LanguageCode.PORTUGUESE]: "carne de vaca", [LanguageCode.MANDARIN]: "牛肉" } },
        { thai: "กุ้ง", phonetic: "gûng", translations: { [LanguageCode.ENGLISH]: "shrimp", [LanguageCode.FRENCH]: "crevette", [LanguageCode.PORTUGUESE]: "camarão", [LanguageCode.MANDARIN]: "蝦" } },
        { thai: "ไข่", phonetic: "khài", translations: { [LanguageCode.ENGLISH]: "egg", [LanguageCode.FRENCH]: "œuf", [LanguageCode.PORTUGUESE]: "ovo", [LanguageCode.MANDARIN]: "蛋" } },
        { thai: "นม", phonetic: "nom", translations: { [LanguageCode.ENGLISH]: "milk", [LanguageCode.FRENCH]: "lait", [LanguageCode.PORTUGUESE]: "leite", [LanguageCode.MANDARIN]: "牛奶" } },
        { thai: "น้ำตาล", phonetic: "náam-dtaan", translations: { [LanguageCode.ENGLISH]: "sugar", [LanguageCode.FRENCH]: "sucre", [LanguageCode.PORTUGUESE]: "açúcar", [LanguageCode.MANDARIN]: "糖" } },
        { thai: "เกลือ", phonetic: "glʉa", translations: { [LanguageCode.ENGLISH]: "salt", [LanguageCode.FRENCH]: "sel", [LanguageCode.PORTUGUESE]: "sal", [LanguageCode.MANDARIN]: "鹽" } },
        { thai: "พริก", phonetic: "phrík", translations: { [LanguageCode.ENGLISH]: "chili/spicy", [LanguageCode.FRENCH]: "piment/épicé", [LanguageCode.PORTUGUESE]: "pimenta/picante", [LanguageCode.MANDARIN]: "辣椒/辣" } },
        { thai: "ซุป", phonetic: "súp", translations: { [LanguageCode.ENGLISH]: "soup", [LanguageCode.FRENCH]: "soupe", [LanguageCode.PORTUGUESE]: "sopa", [LanguageCode.MANDARIN]: "湯" } },
        { thai: "ข้าวเหนียว", phonetic: "khâao nǐao", translations: { [LanguageCode.ENGLISH]: "sticky rice", [LanguageCode.FRENCH]: "riz gluant", [LanguageCode.PORTUGUESE]: "arroz pegajoso", [LanguageCode.MANDARIN]: "糯米飯" } },
        { thai: "ขนมปัง", phonetic: "khà-nǒm-bpang", translations: { [LanguageCode.ENGLISH]: "bread", [LanguageCode.FRENCH]: "pain", [LanguageCode.PORTUGUESE]: "pão", [LanguageCode.MANDARIN]: "麵包" } },
        { thai: "ขนม", phonetic: "khà-nǒm", translations: { [LanguageCode.ENGLISH]: "dessert/snack", [LanguageCode.FRENCH]: "dessert/snack", [LanguageCode.PORTUGUESE]: "sobremesa/lanche", [LanguageCode.MANDARIN]: "甜點/小吃" } },
        { thai: "มะม่วง", phonetic: "má-mûang", translations: { [LanguageCode.ENGLISH]: "mango", [LanguageCode.FRENCH]: "mangue", [LanguageCode.PORTUGUESE]: "manga", [LanguageCode.MANDARIN]: "芒果" } },
        { thai: "กล้วย", phonetic: "glûay", translations: { [LanguageCode.ENGLISH]: "banana", [LanguageCode.FRENCH]: "banane", [LanguageCode.PORTUGUESE]: "banana", [LanguageCode.MANDARIN]: "香蕉" } },
        { thai: "ส้ม", phonetic: "sôm", translations: { [LanguageCode.ENGLISH]: "orange", [LanguageCode.FRENCH]: "orange", [LanguageCode.PORTUGUESE]: "laranja", [LanguageCode.MANDARIN]: "橙" } },
        { thai: "ร้านอาหาร", phonetic: "ráan-aa-hǎan", translations: { [LanguageCode.ENGLISH]: "restaurant", [LanguageCode.FRENCH]: "restaurant", [LanguageCode.PORTUGUESE]: "restaurante", [LanguageCode.MANDARIN]: "餐廳" } },
        { thai: "สั่ง", phonetic: "sàng", translations: { [LanguageCode.ENGLISH]: "order (formal)", [LanguageCode.FRENCH]: "commander (formel)", [LanguageCode.PORTUGUESE]: "pedir (formal)", [LanguageCode.MANDARIN]: "點菜（正式）" } },
        { thai: "เอา", phonetic: "ao", translations: { [LanguageCode.ENGLISH]: "take/want (casual)", [LanguageCode.FRENCH]: "prendre/vouloir (familier)", [LanguageCode.PORTUGUESE]: "querer/pegar (casual)", [LanguageCode.MANDARIN]: "要（日常）" } },
        { thai: "ขอ", phonetic: "khɔ̌ɔ", translations: { [LanguageCode.ENGLISH]: "may I have (polite)", [LanguageCode.FRENCH]: "puis-je avoir (poli)", [LanguageCode.PORTUGUESE]: "posso ter (formal)", [LanguageCode.MANDARIN]: "請給我（禮貌）" } },
        { thai: "อร่อย", phonetic: "à-ròi", translations: { [LanguageCode.ENGLISH]: "delicious", [LanguageCode.FRENCH]: "délicieux", [LanguageCode.PORTUGUESE]: "delicioso", [LanguageCode.MANDARIN]: "好吃" } },
        { thai: "ไม่เผ็ด", phonetic: "mâi phèt", translations: { [LanguageCode.ENGLISH]: "not spicy", [LanguageCode.FRENCH]: "pas épicé", [LanguageCode.PORTUGUESE]: "não picante", [LanguageCode.MANDARIN]: "不辣" } },
        { thai: "เผ็ดนิดหน่อย", phonetic: "phèt nít nɔ̀i", translations: { [LanguageCode.ENGLISH]: "a little spicy", [LanguageCode.FRENCH]: "un peu épicé", [LanguageCode.PORTUGUESE]: "um pouco picante", [LanguageCode.MANDARIN]: "有點辣" } },
        { thai: "จาน", phonetic: "jaan", translations: { [LanguageCode.ENGLISH]: "plate/dish", [LanguageCode.FRENCH]: "assiette/plat", [LanguageCode.PORTUGUESE]: "prato", [LanguageCode.MANDARIN]: "盤子/道菜" } },
        { thai: "หนึ่ง", phonetic: "nʉ̀ng", translations: { [LanguageCode.ENGLISH]: "one", [LanguageCode.FRENCH]: "un", [LanguageCode.PORTUGUESE]: "um", [LanguageCode.MANDARIN]: "一" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Food Culture: Essential Knowledge",
                [LanguageCode.FRENCH]: "Culture alimentaire thaïlandaise : Connaissances essentielles",
                [LanguageCode.PORTUGUESE]: "Cultura alimentar tailandesa: Conhecimento essencial",
                [LanguageCode.MANDARIN]: "泰國飲食文化：必備知識",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Thai food** is one of the most beloved cuisines in the world, and for good reason! Understanding basic food vocabulary is essential for navigating Thailand.\n\n**The Big Three: Rice (ข้าว), Curry (แกง), and Noodles (ก้วยเตี๋ยว)**\n\nThese are the foundation of Thai cuisine:\n\n**ข้าว (khâao) - Rice:**\n• ข้าวผัด (khâao phàt) - fried rice\n• ข้าวมันไก่ (khâao man gài) - chicken rice\n• ข้าวเหนียว (khâao nǐao) - sticky rice\n• Just saying \"ข้าว\" often means a rice dish or meal\n\n**แกง (geng) - Curry:**\n• แกงเขียวหวาน (geng khǐao wǎan) - green curry\n• แกงแดง (geng daeng) - red curry\n• แกงมัสมั่น (geng màt-sà-màn) - massaman curry\n\n**ก้วยเตี๋ยว (gûay dtǐao) - Noodles:**\n• Can be served in soup or dry (แห้ง - hâeng)\n• Many varieties: rice noodles, egg noodles, etc.\n\n**Must-Know Dishes:**\n\n1. **ผัดไทย (phàt thai)** - Thailand's most famous dish! Stir-fried rice noodles with egg, tofu, and peanuts\n2. **ต้มยำ (dtôm yam)** - Spicy and sour soup, usually with shrimp\n3. **ส้มตำ (sôm dtam)** - Spicy papaya salad from Isaan region\n4. **ผัดกะเพรา (phàt gà-phrao)** - Basil stir-fry with meat and egg on rice\n\n**Ordering at a Restaurant: เอา vs. ขอ**\n\nHere's something CRUCIAL: In real life, most Thais use **เอา (ao)** when ordering, NOT ขอ!\n\n**เอา (ao) = \"I'll take/I want\" (CASUAL, NATURAL)**\n• This is what you'll hear 90% of the time in restaurants\n• Direct and efficient - perfect for everyday ordering\n• Example: **เอาข้าวผัดหมูหนึ่งจาน (ao khâao phàt mǔu nʉ̀ng jaan)** = \"I'll take one plate of pork fried rice\"\n\n**ขอ (khɔ̌ɔ) = \"May I have\" (POLITE, FORMAL)**\n• More polite and deferential\n• Used when you want to be extra respectful\n• Example: **ขอข้าวผัดหมูหนึ่งจาน (khɔ̌ɔ khâao phàt mǔu nʉ̀ng jaan)** = \"May I have one plate of pork fried rice?\"\n\n**สั่ง (sàng) = \"Order\" (NEUTRAL/FORMAL)**\n• More formal, often used by staff asking what you want\n• Example: **สั่งอะไรคะ (sàng à-rai khá)** = \"What would you like to order?\"\n\n**Pro Tip:** Use **เอา** for casual ordering (most of the time), and **ขอ** when you want to be more polite. Both are correct, but **เอา** sounds more natural and is what locals actually say!\n\n**Complete Ordering Examples:**\n• **เอาผัดไทยหนึ่งจาน (ao phàt thai nʉ̀ng jaan)** = \"I'll take one plate of pad thai\"\n• **เอาต้มยำกุ้งไม่เผ็ด (ao dtôm yam gûng mâi phèt)** = \"I'll take tom yum shrimp, not spicy\"\n• **เอาข้าวมันไก่สองจาน (ao khâao man gài sɔ̌ɔng jaan)** = \"I'll take two plates of chicken rice\"\n\n**Important Ordering Phrases:**\n• **เอา___หนึ่งจาน (ao ___ nʉ̀ng jaan)** = \"I'll take one plate of ___\"\n• **ไม่เผ็ด (mâi phèt)** = \"Not spicy\" - USE THIS if you can't handle heat!\n• **เผ็ดนิดหน่อย (phèt nít nɔ̀i)** = \"A little spicy\"\n• **อร่อย (à-ròi)** = \"Delicious\" - Say this to compliment the chef!\n• **ขอเมนู (khɔ̌ɔ meh-nuu)** = \"Can I see the menu?\" (ขอ is appropriate here!)\n• **เช็คบิล (chék bin)** = \"Check please\"\n\n**Thai Eating Culture:**\n\n• Meals are often shared family-style\n• Rice (ข้าว) is the center of the meal, with other dishes as accompaniments\n• It's normal to order multiple dishes and share\n• Street food is incredibly popular and often better than restaurants!\n• Eating out is very affordable and common\n\n**Pro Tip:**\n\nWhen Thai people ask \"กินข้าวหรือยัง (gin khâao rʉ̌ʉ yang)\" - literally \"Have you eaten rice yet?\" - they're essentially asking \"How are you?\" Food is THAT important in Thai culture!",
                [LanguageCode.FRENCH]: "**La nourriture thaïlandaise** est l'une des cuisines les plus appréciées au monde, et pour une bonne raison ! Comprendre le vocabulaire alimentaire de base est essentiel pour naviguer en Thaïlande.\n\n**Les trois grands : Riz (ข้าว), Curry (แกง) et Nouilles (ก้วยเตี๋ยว)**\n\nCe sont les fondements de la cuisine thaïlandaise :\n\n**ข้าว (khâao) - Riz :**\n• ข้าวผัด (khâao phàt) - riz frit\n• ข้าวมันไก่ (khâao man gài) - riz au poulet\n• ข้าวเหนียว (khâao nǐao) - riz gluant\n• Dire simplement \"ข้าว\" signifie souvent un plat de riz ou un repas\n\n**แกง (geng) - Curry :**\n• แกงเขียวหวาน (geng khǐao wǎan) - curry vert\n• แกงแดง (geng daeng) - curry rouge\n• แกงมัสมั่น (geng màt-sà-màn) - curry massaman\n\n**Plats incontournables :**\n\n1. **ผัดไทย (phàt thai)** - Le plat le plus célèbre de Thaïlande !\n2. **ต้มยำ (dtôm yam)** - Soupe épicée et aigre\n3. **ส้มตำ (sôm dtam)** - Salade de papaye épicée\n4. **ผัดกะเพรา (phàt gà-phrao)** - Sauté au basilic\n\n**Commander au restaurant :**\n\n• **ขอ___ (khɔ̌ɔ ___)** = \"Je peux avoir ___\"\n• **สั่ง___ (sàng ___)** = \"Commander ___\"\n• **ไม่เผ็ด (mâi phèt)** = \"Pas épicé\"\n• **อร่อย (à-ròi)** = \"Délicieux\"",
                [LanguageCode.PORTUGUESE]: "**A comida tailandesa** é uma das culinárias mais amadas do mundo, e com razão! Compreender o vocabulário básico de alimentos é essencial para navegar na Tailândia.\n\n**Os Três Grandes: Arroz (ข้าว), Curry (แกง) e Macarrão (ก้วยเตี๋ยว)**\n\nEstes são a base da culinária tailandesa:\n\n**ข้าว (khâao) - Arroz:**\n• ข้าวผัด (khâao phàt) - arroz frito\n• ข้าวมันไก่ (khâao man gài) - arroz com frango\n• ข้าวเหนียว (khâao nǐao) - arroz pegajoso\n• Apenas dizer \"ข้าว\" geralmente significa um prato de arroz ou refeição\n\n**แกง (geng) - Curry:**\n• แกงเขียวหวาน (geng khǐao wǎan) - curry verde\n• แกงแดง (geng daeng) - curry vermelho\n• แกงมัสมั่น (geng màt-sà-màn) - curry massaman\n\n**Pratos imperdíveis:**\n\n1. **ผัดไทย (phàt thai)** - O prato mais famoso da Tailândia!\n2. **ต้มยำ (dtôm yam)** - Sopa picante e azeda\n3. **ส้มตำ (sôm dtam)** - Salada de mamão picante\n4. **ผัดกะเพรา (phàt gà-phrao)** - Refogado com manjericão\n\n**Pedindo no restaurante:**\n\n• **ขอ___ (khɔ̌ɔ ___)** = \"Posso ter ___\"\n• **สั่ง___ (sàng ___)** = \"Pedir ___\"\n• **ไม่เผ็ด (mâi phèt)** = \"Não picante\"\n• **อร่อย (à-ròi)** = \"Delicioso\"",
                [LanguageCode.MANDARIN]: "**泰國料理**是世界上最受歡迎的美食之一，理由充分！了解基本食物詞彙對於在泰國生活至關重要。\n\n**三大基礎：米飯（ข้าว）、咖哩（แกง）和麵條（ก้วยเตี๋ยว）**\n\n這些是泰國料理的基礎：\n\n**ข้าว (khâao) - 米飯：**\n• ข้าวผัด (khâao phàt) - 炒飯\n• ข้าวมันไก่ (khâao man gài) - 雞飯\n• ข้าวเหนียว (khâao nǐao) - 糯米飯\n• 只說「ข้าว」通常指米飯料理或餐點\n\n**แกง (geng) - 咖哩：**\n• แกงเขียวหวาน (geng khǐao wǎan) - 綠咖哩\n• แกงแดง (geng daeng) - 紅咖哩\n• แกงมัสมั่น (geng màt-sà-màn) - 馬沙文咖哩\n\n**必吃菜餚：**\n\n1. **ผัดไทย (phàt thai)** - 泰國最著名的菜！\n2. **ต้มยำ (dtôm yam)** - 酸辣湯\n3. **ส้มตำ (sôm dtam)** - 辣青木瓜沙拉\n4. **ผัดกะเพรา (phàt gà-phrao)** - 打拋炒\n\n**在餐廳點菜：**\n\n• **ขอ___ (khɔ̌ɔ ___)** = 「我可以要___」\n• **สั่ง___ (sàng ___)** = 「點___」\n• **ไม่เผ็ด (mâi phèt)** = 「不辣」\n• **อร่อย (à-ròi)** = 「好吃」",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the ingredients to the dishes they're found in.",
                [LanguageCode.FRENCH]: "Associez les ingrédients aux plats dans lesquels ils se trouvent.",
                [LanguageCode.PORTUGUESE]: "Relacione os ingredientes aos pratos em que são encontrados.",
                [LanguageCode.MANDARIN]: "將食材與菜餚配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "ไก่ (chicken)", [LanguageCode.FRENCH]: "ไก่ (poulet)", [LanguageCode.PORTUGUESE]: "ไก่ (frango)", [LanguageCode.MANDARIN]: "ไก่ (雞肉)" }, answer: { [LanguageCode.ENGLISH]: "ข้าวมันไก่ (chicken rice)", [LanguageCode.FRENCH]: "ข้าวมันไก่ (riz au poulet)", [LanguageCode.PORTUGUESE]: "ข้าวมันไก่ (arroz com frango)", [LanguageCode.MANDARIN]: "ข้าวมันไก่ (海南雞飯)" } },
                { prompt: { [LanguageCode.ENGLISH]: "กุ้ง (shrimp)", [LanguageCode.FRENCH]: "กุ้ง (crevette)", [LanguageCode.PORTUGUESE]: "กุ้ง (camarão)", [LanguageCode.MANDARIN]: "กุ้ง (蝦)" }, answer: { [LanguageCode.ENGLISH]: "ต้มยำ (tom yum soup)", [LanguageCode.FRENCH]: "ต้มยำ (soupe tom yum)", [LanguageCode.PORTUGUESE]: "ต้มยำ (sopa tom yum)", [LanguageCode.MANDARIN]: "ต้มยำ (冬陰湯)" } },
                { prompt: { [LanguageCode.ENGLISH]: "มะม่วง (mango)", [LanguageCode.FRENCH]: "มะม่วง (mangue)", [LanguageCode.PORTUGUESE]: "มะม่วง (manga)", [LanguageCode.MANDARIN]: "มะม่วง (芒果)" }, answer: { [LanguageCode.ENGLISH]: "ข้าวเหนียวมะม่วง (mango sticky rice)", [LanguageCode.FRENCH]: "ข้าวเหนียวมะม่วง (riz gluant à la mangue)", [LanguageCode.PORTUGUESE]: "ข้าวเหนียวมะม่วง (arroz pegajoso com manga)", [LanguageCode.MANDARIN]: "ข้าวเหนียวมะม่วง (芒果糯米飯)" } },
                { prompt: { [LanguageCode.ENGLISH]: "ก้วยเตี๋ยว (noodles)", [LanguageCode.FRENCH]: "ก้วยเตี๋ยว (nouilles)", [LanguageCode.PORTUGUESE]: "ก้วยเตี๋ยว (macarrão)", [LanguageCode.MANDARIN]: "ก้วยเตี๋ยว (麵條)" }, answer: { [LanguageCode.ENGLISH]: "ผัดไทย (pad thai)", [LanguageCode.FRENCH]: "ผัดไทย (pad thaï)", [LanguageCode.PORTUGUESE]: "ผัดไทย (pad thai)", [LanguageCode.MANDARIN]: "ผัดไทย (泰式炒麵)" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the menu items with the correct food word.",
                [LanguageCode.FRENCH]: "Complétez les items du menu avec le bon mot alimentaire.",
                [LanguageCode.PORTUGUESE]: "Complete os itens do cardápio com a palavra de comida correta.",
                [LanguageCode.MANDARIN]: "用正確的食物詞完成菜單項目。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ข้าวผัด___", [LanguageCode.FRENCH]: "Riz frit au___", [LanguageCode.PORTUGUESE]: "Arroz frito com___", [LanguageCode.MANDARIN]: "___炒飯" }, correctAnswer: "หมู/ไก่/กุ้ง", end: { [LanguageCode.ENGLISH]: " (pork/chicken/shrimp fried rice)", [LanguageCode.FRENCH]: " (porc/poulet/crevette)", [LanguageCode.PORTUGUESE]: " (porco/frango/camarão)", [LanguageCode.MANDARIN]: " (豬肉/雞肉/蝦)" } },
                { start: { [LanguageCode.ENGLISH]: "ผัดกะเพรา___", [LanguageCode.FRENCH]: "Sauté au basilic avec___", [LanguageCode.PORTUGUESE]: "Refogado com manjericão e___", [LanguageCode.MANDARIN]: "___打拋炒" }, correctAnswer: "หมู/ไก่/เนื้อ", end: { [LanguageCode.ENGLISH]: " (basil stir-fry with pork/chicken/beef)", [LanguageCode.FRENCH]: " (porc/poulet/bœuf)", [LanguageCode.PORTUGUESE]: " (porco/frango/carne)", [LanguageCode.MANDARIN]: " (豬肉/雞肉/牛肉)" } },
                { start: { [LanguageCode.ENGLISH]: "ต้มยำ___", [LanguageCode.FRENCH]: "Tom yum avec___", [LanguageCode.PORTUGUESE]: "Tom yum com___", [LanguageCode.MANDARIN]: "___冬陰湯" }, correctAnswer: "กุ้ง/ปลา", end: { [LanguageCode.ENGLISH]: " (tom yum with shrimp/fish)", [LanguageCode.FRENCH]: " (crevette/poisson)", [LanguageCode.PORTUGUESE]: " (camarão/peixe)", [LanguageCode.MANDARIN]: " (蝦/魚)" } },
                { start: { [LanguageCode.ENGLISH]: "แกงเขียวหวาน___", [LanguageCode.FRENCH]: "Curry vert au___", [LanguageCode.PORTUGUESE]: "Curry verde com___", [LanguageCode.MANDARIN]: "___綠咖哩" }, correctAnswer: "ไก่/หมู", end: { [LanguageCode.ENGLISH]: " (green curry with chicken/pork)", [LanguageCode.FRENCH]: " (poulet/porc)", [LanguageCode.PORTUGUESE]: " (frango/porco)", [LanguageCode.MANDARIN]: " (雞肉/豬肉)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the food order in the correct sequence.",
                [LanguageCode.FRENCH]: "Mettez la commande alimentaire dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque o pedido de comida na sequência correta.",
                [LanguageCode.MANDARIN]: "將食物訂單按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["ขอ", "ข้าวผัด", "หมู", "หนึ่ง", "จาน"], hint: { [LanguageCode.ENGLISH]: "Can I have one plate of pork fried rice?", [LanguageCode.FRENCH]: "Puis-je avoir une assiette de riz frit au porc ?", [LanguageCode.PORTUGUESE]: "Posso ter um prato de arroz frito com porco?", [LanguageCode.MANDARIN]: "我可以要一盤豬肉炒飯嗎？" } },
                { correctOrder: ["สั่ง", "ผัดไทย", "กุ้ง"], hint: { [LanguageCode.ENGLISH]: "Order shrimp pad thai.", [LanguageCode.FRENCH]: "Commander pad thaï aux crevettes.", [LanguageCode.PORTUGUESE]: "Pedir pad thai com camarão.", [LanguageCode.MANDARIN]: "點蝦泰式炒麵。" } },
                { correctOrder: ["ขอ", "ต้มยำ", "กุ้ง", "หนึ่ง", "ชาม"], hint: { [LanguageCode.ENGLISH]: "Can I have one bowl of tom yum shrimp soup?", [LanguageCode.FRENCH]: "Puis-je avoir un bol de soupe tom yum aux crevettes ?", [LanguageCode.PORTUGUESE]: "Posso ter uma tigela de sopa tom yum com camarão?", [LanguageCode.MANDARIN]: "我可以要一碗蝦冬陰湯嗎？" } },
                { correctOrder: ["ผัดกะเพรา", "ไก่", "ไม่", "เผ็ด"], hint: { [LanguageCode.ENGLISH]: "Chicken basil stir-fry, not spicy.", [LanguageCode.FRENCH]: "Sauté au basilic avec poulet, pas épicé.", [LanguageCode.PORTUGUESE]: "Refogado com manjericão e frango, não picante.", [LanguageCode.MANDARIN]: "雞肉打拋炒，不辣。" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best word to complete each restaurant scenario.",
                [LanguageCode.FRENCH]: "Choisissez le meilleur mot pour compléter chaque scénario de restaurant.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor palavra para completar cada cenário de restaurante.",
                [LanguageCode.MANDARIN]: "選擇最佳詞語完成每個餐廳場景。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want to see what food is available. You ask: ขอ___", [LanguageCode.FRENCH]: "Vous voulez voir quels plats sont disponibles. Vous demandez : ขอ___", [LanguageCode.PORTUGUESE]: "Você quer ver que comidas estão disponíveis. Você pergunta: ขอ___", [LanguageCode.MANDARIN]: "你想看看有什麼食物。你問：ขอ___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เมนู (menu)", [LanguageCode.FRENCH]: "เมนู (menu)", [LanguageCode.PORTUGUESE]: "เมนู (cardápio)", [LanguageCode.MANDARIN]: "เมนู (菜單)" },
                        { [LanguageCode.ENGLISH]: "จาน (plate)", [LanguageCode.FRENCH]: "จาน (assiette)", [LanguageCode.PORTUGUESE]: "จาน (prato)", [LanguageCode.MANDARIN]: "จาน (盤子)" },
                        { [LanguageCode.ENGLISH]: "ร้าน (shop)", [LanguageCode.FRENCH]: "ร้าน (magasin)", [LanguageCode.PORTUGUESE]: "ร้าน (loja)", [LanguageCode.MANDARIN]: "ร้าน (店)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The food tastes amazing. You say: ___มาก!", [LanguageCode.FRENCH]: "La nourriture est délicieuse. Vous dites : ___มาก!", [LanguageCode.PORTUGUESE]: "A comida está incrível. Você diz: ___มาก!", [LanguageCode.MANDARIN]: "食物很好吃。你說：___มาก！" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เผ็ด (spicy)", [LanguageCode.FRENCH]: "เผ็ด (épicé)", [LanguageCode.PORTUGUESE]: "เผ็ด (picante)", [LanguageCode.MANDARIN]: "เผ็ด (辣)" },
                        { [LanguageCode.ENGLISH]: "อร่อย (delicious)", [LanguageCode.FRENCH]: "อร่อย (délicieux)", [LanguageCode.PORTUGUESE]: "อร่อย (delicioso)", [LanguageCode.MANDARIN]: "อร่อย (好吃)" },
                        { [LanguageCode.ENGLISH]: "เค็ม (salty)", [LanguageCode.FRENCH]: "เค็ม (salé)", [LanguageCode.PORTUGUESE]: "เค็ม (salgado)", [LanguageCode.MANDARIN]: "เค็ม (鹹)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You can't eat spicy food. You say: ไม่___", [LanguageCode.FRENCH]: "Vous ne pouvez pas manger épicé. Vous dites : ไม่___", [LanguageCode.PORTUGUESE]: "Você não pode comer picante. Você diz: ไม่___", [LanguageCode.MANDARIN]: "你不能吃辣。你說：ไม่___" },
                    options: [
                        { [LanguageCode.ENGLISH]: "หวาน (sweet)", [LanguageCode.FRENCH]: "หวาน (sucré)", [LanguageCode.PORTUGUESE]: "หวาน (doce)", [LanguageCode.MANDARIN]: "หวาน (甜)" },
                        { [LanguageCode.ENGLISH]: "เผ็ด (spicy)", [LanguageCode.FRENCH]: "เผ็ด (épicé)", [LanguageCode.PORTUGUESE]: "เผ็ด (picante)", [LanguageCode.MANDARIN]: "เผ็ด (辣)" },
                        { [LanguageCode.ENGLISH]: "อร่อย (delicious)", [LanguageCode.FRENCH]: "อร่อย (délicieux)", [LanguageCode.PORTUGUESE]: "อร่อย (delicioso)", [LanguageCode.MANDARIN]: "อร่อย (好吃)" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the taste descriptors.",
                [LanguageCode.FRENCH]: "Associez les descripteurs de goût.",
                [LanguageCode.PORTUGUESE]: "Relacione os descritores de sabor.",
                [LanguageCode.MANDARIN]: "配對味道描述詞。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "sweet", [LanguageCode.FRENCH]: "sucré", [LanguageCode.PORTUGUESE]: "doce", [LanguageCode.MANDARIN]: "甜" }, answer: { [LanguageCode.ENGLISH]: "หวาน", [LanguageCode.FRENCH]: "หวาน", [LanguageCode.PORTUGUESE]: "หวาน", [LanguageCode.MANDARIN]: "หวาน" } },
                { prompt: { [LanguageCode.ENGLISH]: "salty", [LanguageCode.FRENCH]: "salé", [LanguageCode.PORTUGUESE]: "salgado", [LanguageCode.MANDARIN]: "鹹" }, answer: { [LanguageCode.ENGLISH]: "เค็ม", [LanguageCode.FRENCH]: "เค็ม", [LanguageCode.PORTUGUESE]: "เค็ม", [LanguageCode.MANDARIN]: "เค็ม" } },
                { prompt: { [LanguageCode.ENGLISH]: "sour", [LanguageCode.FRENCH]: "acide", [LanguageCode.PORTUGUESE]: "azedo", [LanguageCode.MANDARIN]: "酸" }, answer: { [LanguageCode.ENGLISH]: "เปรี้ยว", [LanguageCode.FRENCH]: "เปรี้ยว", [LanguageCode.PORTUGUESE]: "เปรี้ยว", [LanguageCode.MANDARIN]: "เปรี้ยว" } },
                { prompt: { [LanguageCode.ENGLISH]: "spicy", [LanguageCode.FRENCH]: "épicé", [LanguageCode.PORTUGUESE]: "picante", [LanguageCode.MANDARIN]: "辣" }, answer: { [LanguageCode.ENGLISH]: "เผ็ด", [LanguageCode.FRENCH]: "เผ็ด", [LanguageCode.PORTUGUESE]: "เผ็ด", [LanguageCode.MANDARIN]: "เผ็ด" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete real restaurant conversations.",
                [LanguageCode.FRENCH]: "Complétez de vraies conversations au restaurant.",
                [LanguageCode.PORTUGUESE]: "Complete conversas reais de restaurante.",
                [LanguageCode.MANDARIN]: "完成真實餐廳對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ส้มตำ___มาก", [LanguageCode.FRENCH]: "La salade de papaye est très___", [LanguageCode.PORTUGUESE]: "A salada de mamão é muito___", [LanguageCode.MANDARIN]: "青木瓜沙拉很___" }, correctAnswer: "เผ็ด", end: { [LanguageCode.ENGLISH]: " (papaya salad is very spicy)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ข้าวเหนียวมะม่วง___มาก", [LanguageCode.FRENCH]: "Le riz gluant à la mangue est très___", [LanguageCode.PORTUGUESE]: "Arroz pegajoso com manga é muito___", [LanguageCode.MANDARIN]: "芒果糯米飯很___" }, correctAnswer: "หวาน", end: { [LanguageCode.ENGLISH]: " (mango sticky rice is very sweet)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ข้าวผัดไก่หนึ่งจาน", [LanguageCode.FRENCH]: "___une assiette de riz frit au poulet", [LanguageCode.PORTUGUESE]: "___um prato de arroz frito com frango", [LanguageCode.MANDARIN]: "___一盤雞肉炒飯" }, correctAnswer: "ขอ/สั่ง", end: { [LanguageCode.ENGLISH]: " (order/request chicken fried rice)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "อาหารไทย___มาก", [LanguageCode.FRENCH]: "La nourriture thaïlandaise est très___", [LanguageCode.PORTUGUESE]: "Comida tailandesa é muito___", [LanguageCode.MANDARIN]: "泰國菜很___" }, correctAnswer: "อร่อย", end: { [LanguageCode.ENGLISH]: " (Thai food is very delicious)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct protein for each famous dish.",
                [LanguageCode.FRENCH]: "Choisissez la bonne protéine pour chaque plat célèbre.",
                [LanguageCode.PORTUGUESE]: "Escolha a proteína correta para cada prato famoso.",
                [LanguageCode.MANDARIN]: "為每道名菜選擇正確的蛋白質。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "ข้าวมัน___ is the famous Hainanese-style rice dish", [LanguageCode.FRENCH]: "ข้าวมัน___ est le célèbre plat de riz de style Hainan", [LanguageCode.PORTUGUESE]: "ข้าวมัน___ é o famoso prato de arroz estilo hainanês", [LanguageCode.MANDARIN]: "ข้าวมัน___ 是著名的海南式米飯菜" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ไก่ (chicken)", [LanguageCode.FRENCH]: "ไก่ (poulet)", [LanguageCode.PORTUGUESE]: "ไก่ (frango)", [LanguageCode.MANDARIN]: "ไก่ (雞)" },
                        { [LanguageCode.ENGLISH]: "หมู (pork)", [LanguageCode.FRENCH]: "หมู (porc)", [LanguageCode.PORTUGUESE]: "หมู (porco)", [LanguageCode.MANDARIN]: "หมู (豬)" },
                        { [LanguageCode.ENGLISH]: "เป็ด (duck)", [LanguageCode.FRENCH]: "เป็ด (canard)", [LanguageCode.PORTUGUESE]: "เป็ด (pato)", [LanguageCode.MANDARIN]: "เป็ด (鴨)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "ต้มยำ___ is the most popular version of this soup", [LanguageCode.FRENCH]: "ต้มยำ___ est la version la plus populaire de cette soupe", [LanguageCode.PORTUGUESE]: "ต้มยำ___ é a versão mais popular desta sopa", [LanguageCode.MANDARIN]: "ต้มยำ___ 是這道湯最受歡迎的版本" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ไก่ (chicken)", [LanguageCode.FRENCH]: "ไก่ (poulet)", [LanguageCode.PORTUGUESE]: "ไก่ (frango)", [LanguageCode.MANDARIN]: "ไก่ (雞)" },
                        { [LanguageCode.ENGLISH]: "กุ้ง (shrimp)", [LanguageCode.FRENCH]: "กุ้ง (crevette)", [LanguageCode.PORTUGUESE]: "กุ้ง (camarão)", [LanguageCode.MANDARIN]: "กุ้ง (蝦)" },
                        { [LanguageCode.ENGLISH]: "เนื้อ (beef)", [LanguageCode.FRENCH]: "เนื้อ (bœuf)", [LanguageCode.PORTUGUESE]: "เนื้อ (carne)", [LanguageCode.MANDARIN]: "เนื้อ (牛肉)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "ผัดกะเพรา___ is often served with a fried egg on top", [LanguageCode.FRENCH]: "ผัดกะเพรา___ est souvent servi avec un œuf frit dessus", [LanguageCode.PORTUGUESE]: "ผัดกะเพรา___ é frequentemente servido com ovo frito em cima", [LanguageCode.MANDARIN]: "ผัดกะเพรา___ 通常配上煎蛋" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Any protein (หมู/ไก่/เนื้อ)", [LanguageCode.FRENCH]: "N'importe quelle protéine (หมู/ไก่/เนื้อ)", [LanguageCode.PORTUGUESE]: "Qualquer proteína (หมู/ไก่/เนื้อ)", [LanguageCode.MANDARIN]: "任何蛋白質 (หมู/ไก่/เนื้อ)" },
                        { [LanguageCode.ENGLISH]: "Only กุ้ง (shrimp)", [LanguageCode.FRENCH]: "Seulement กุ้ง (crevette)", [LanguageCode.PORTUGUESE]: "Apenas กุ้ง (camarão)", [LanguageCode.MANDARIN]: "僅 กุ้ง (蝦)" },
                        { [LanguageCode.ENGLISH]: "Only ปลา (fish)", [LanguageCode.FRENCH]: "Seulement ปลา (poisson)", [LanguageCode.PORTUGUESE]: "Apenas ปลา (peixe)", [LanguageCode.MANDARIN]: "僅 ปลา (魚)" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete restaurant orders.",
                [LanguageCode.FRENCH]: "Construisez des commandes complètes au restaurant.",
                [LanguageCode.PORTUGUESE]: "Construa pedidos completos de restaurante.",
                [LanguageCode.MANDARIN]: "組成完整的餐廳訂單。",
            },
            sentences: [
                { correctOrder: ["ขอ", "ผัดไทย", "หนึ่ง", "จาน"], hint: { [LanguageCode.ENGLISH]: "Can I have one plate of pad thai?", [LanguageCode.FRENCH]: "Puis-je avoir une assiette de pad thaï ?", [LanguageCode.PORTUGUESE]: "Posso ter um prato de pad thai?", [LanguageCode.MANDARIN]: "我可以要一盤泰式炒麵嗎？" } },
                { correctOrder: ["สั่ง", "ส้มตำ", "ไม่", "เผ็ด"], hint: { [LanguageCode.ENGLISH]: "Order papaya salad, not spicy.", [LanguageCode.FRENCH]: "Commander salade de papaye, pas épicée.", [LanguageCode.PORTUGUESE]: "Pedir salada de mamão, não picante.", [LanguageCode.MANDARIN]: "點青木瓜沙拉，不辣。" } },
                { correctOrder: ["ขอ", "น้ำ", "สอง", "แก้ว"], hint: { [LanguageCode.ENGLISH]: "Can I have two glasses of water?", [LanguageCode.FRENCH]: "Puis-je avoir deux verres d'eau ?", [LanguageCode.PORTUGUESE]: "Posso ter dois copos de água?", [LanguageCode.MANDARIN]: "我可以要兩杯水嗎？" } },
                { correctOrder: ["ข้าวมันไก่", "อร่อย", "มาก"], hint: { [LanguageCode.ENGLISH]: "Chicken rice is very delicious.", [LanguageCode.FRENCH]: "Le riz au poulet est très délicieux.", [LanguageCode.PORTUGUESE]: "Arroz com frango é muito delicioso.", [LanguageCode.MANDARIN]: "雞飯很好吃。" } },
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What would you like to order?", [LanguageCode.FRENCH]: "Qu'aimeriez-vous commander ?", [LanguageCode.PORTUGUESE]: "O que você gostaria de pedir?", [LanguageCode.MANDARIN]: "你想點什麼？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I'd like pad thai, tom yum soup, and mango sticky rice.", [LanguageCode.FRENCH]: "Je voudrais du pad thaï, de la soupe tom yum et du riz gluant à la mangue.", [LanguageCode.PORTUGUESE]: "Eu gostaria de pad thai, sopa tom yum e arroz pegajoso com manga.", [LanguageCode.MANDARIN]: "我想要泰式炒麵、冬陰湯和芒果糯米飯。" } },
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
                    question: { [LanguageCode.ENGLISH]: "How many dishes did B order?", [LanguageCode.FRENCH]: "Combien de plats B a-t-il commandé ?", [LanguageCode.PORTUGUESE]: "Quantos pratos B pediu?", [LanguageCode.MANDARIN]: "B 點了幾道菜？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Two", [LanguageCode.FRENCH]: "Deux", [LanguageCode.PORTUGUESE]: "Dois", [LanguageCode.MANDARIN]: "兩道" },
                        { [LanguageCode.ENGLISH]: "Three", [LanguageCode.FRENCH]: "Trois", [LanguageCode.PORTUGUESE]: "Três", [LanguageCode.MANDARIN]: "三道" },
                        { [LanguageCode.ENGLISH]: "Four", [LanguageCode.FRENCH]: "Quatre", [LanguageCode.PORTUGUESE]: "Quatro", [LanguageCode.MANDARIN]: "四道" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "สั่งอาหาร 3 จาน",
            [LanguageCode.FRENCH]: "สั่งอาหาร 3 จาน",
            [LanguageCode.PORTUGUESE]: "สั่งอาหาร 3 จาน",
            [LanguageCode.MANDARIN]: "สั่งอาหาร 3 จาน",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Order 3 dishes at a restaurant. Example: khɔ̌ɔ phàt thai, dtôm yam gûng, geng khǐao wǎan gài (I'd like pad thai, shrimp tom yum soup, and chicken green curry)",
            [LanguageCode.FRENCH]: "Commandez 3 plats au restaurant. Exemple : khɔ̌ɔ phàt thai, dtôm yam gûng, geng khǐao wǎan gài (Je voudrais du pad thaï, de la soupe tom yum aux crevettes et du curry vert au poulet)",
            [LanguageCode.PORTUGUESE]: "Peça 3 pratos em um restaurante. Exemplo: khɔ̌ɔ phàt thai, dtôm yam gûng, geng khǐao wǎan gài (Eu gostaria de pad thai, sopa tom yum com camarão e curry verde com frango)",
            [LanguageCode.MANDARIN]: "在餐廳點 3 道菜。例子：khɔ̌ɔ phàt thai, dtôm yam gûng, geng khǐao wǎan gài（我想要泰式炒麵、蝦冬陰湯和雞肉綠咖哩）",
        },
        speakingType: 'open-ended'
    }
};

