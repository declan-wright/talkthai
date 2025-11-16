import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_2_4: Lesson = {
    id: "2.4",
    title: {
        [LanguageCode.ENGLISH]: "Food Ingredients & Cooking",
        [LanguageCode.FRENCH]: "Ingrédients alimentaires et cuisine",
        [LanguageCode.PORTUGUESE]: "Ingredientes alimentares e culinária",
        [LanguageCode.MANDARIN]: "食材與烹飪",
    },
    vocabulary: [
        // Proteins & Seafood (beyond basics)
        { thai: "หมูสามชั้น", phonetic: "mǔu sǎam chán", translations: { [LanguageCode.ENGLISH]: "pork belly", [LanguageCode.FRENCH]: "poitrine de porc", [LanguageCode.PORTUGUESE]: "barriga de porco", [LanguageCode.MANDARIN]: "五花肉" } },
        { thai: "ปลาหมึก", phonetic: "bplaa-mʉ̀k", translations: { [LanguageCode.ENGLISH]: "squid", [LanguageCode.FRENCH]: "calmar", [LanguageCode.PORTUGUESE]: "lula", [LanguageCode.MANDARIN]: "魷魚" } },
        { thai: "หอย", phonetic: "hɔ̌ɔi", translations: { [LanguageCode.ENGLISH]: "shellfish/clam", [LanguageCode.FRENCH]: "coquillage/palourde", [LanguageCode.PORTUGUESE]: "marisco/molusco", [LanguageCode.MANDARIN]: "貝類" } },
        { thai: "ปู", phonetic: "bpuu", translations: { [LanguageCode.ENGLISH]: "crab", [LanguageCode.FRENCH]: "crabe", [LanguageCode.PORTUGUESE]: "caranguejo", [LanguageCode.MANDARIN]: "螃蟹" } },
        { thai: "เต้าหู้", phonetic: "dtâo-hûu", translations: { [LanguageCode.ENGLISH]: "tofu", [LanguageCode.FRENCH]: "tofu", [LanguageCode.PORTUGUESE]: "tofu", [LanguageCode.MANDARIN]: "豆腐" } },

        // Vegetables & Herbs
        { thai: "ตะไคร้", phonetic: "dtà-khrái", translations: { [LanguageCode.ENGLISH]: "lemongrass", [LanguageCode.FRENCH]: "citronnelle", [LanguageCode.PORTUGUESE]: "capim-limão", [LanguageCode.MANDARIN]: "檸檬草" } },
        { thai: "ข่า", phonetic: "khàa", translations: { [LanguageCode.ENGLISH]: "galangal", [LanguageCode.FRENCH]: "galanga", [LanguageCode.PORTUGUESE]: "galanga", [LanguageCode.MANDARIN]: "南薑" } },
        { thai: "กะเพรา", phonetic: "gà-phrao", translations: { [LanguageCode.ENGLISH]: "holy basil", [LanguageCode.FRENCH]: "basilic sacré", [LanguageCode.PORTUGUESE]: "manjericão sagrado", [LanguageCode.MANDARIN]: "聖羅勒" } },
        { thai: "โหระพา", phonetic: "hǒo-rá-phaa", translations: { [LanguageCode.ENGLISH]: "Thai basil", [LanguageCode.FRENCH]: "basilic thaï", [LanguageCode.PORTUGUESE]: "manjericão tailandês", [LanguageCode.MANDARIN]: "泰國羅勒" } },
        { thai: "ผักชี", phonetic: "phàk-chii", translations: { [LanguageCode.ENGLISH]: "cilantro/coriander", [LanguageCode.FRENCH]: "coriandre", [LanguageCode.PORTUGUESE]: "coentro", [LanguageCode.MANDARIN]: "香菜" } },
        { thai: "กระเทียม", phonetic: "grà-thiam", translations: { [LanguageCode.ENGLISH]: "garlic", [LanguageCode.FRENCH]: "ail", [LanguageCode.PORTUGUESE]: "alho", [LanguageCode.MANDARIN]: "大蒜" } },
        { thai: "หอม", phonetic: "hɔ̌ɔm", translations: { [LanguageCode.ENGLISH]: "onion/shallot", [LanguageCode.FRENCH]: "oignon/échalote", [LanguageCode.PORTUGUESE]: "cebola/chalota", [LanguageCode.MANDARIN]: "洋蔥/紅蔥" } },
        { thai: "ขิง", phonetic: "khǐng", translations: { [LanguageCode.ENGLISH]: "ginger", [LanguageCode.FRENCH]: "gingembre", [LanguageCode.PORTUGUESE]: "gengibre", [LanguageCode.MANDARIN]: "生薑" } },
        { thai: "มะเขือเทศ", phonetic: "má-khʉ̌a-thêet", translations: { [LanguageCode.ENGLISH]: "tomato", [LanguageCode.FRENCH]: "tomate", [LanguageCode.PORTUGUESE]: "tomate", [LanguageCode.MANDARIN]: "番茄" } },
        { thai: "แตงกวา", phonetic: "dtɛɛng-gwaa", translations: { [LanguageCode.ENGLISH]: "cucumber", [LanguageCode.FRENCH]: "concombre", [LanguageCode.PORTUGUESE]: "pepino", [LanguageCode.MANDARIN]: "黃瓜" } },

        // Sauces & Seasonings
        { thai: "น้ำปลา", phonetic: "náam-bplaa", translations: { [LanguageCode.ENGLISH]: "fish sauce", [LanguageCode.FRENCH]: "sauce de poisson", [LanguageCode.PORTUGUESE]: "molho de peixe", [LanguageCode.MANDARIN]: "魚露" } },
        { thai: "ซีอิ๊ว", phonetic: "sii-íu", translations: { [LanguageCode.ENGLISH]: "soy sauce", [LanguageCode.FRENCH]: "sauce soja", [LanguageCode.PORTUGUESE]: "molho de soja", [LanguageCode.MANDARIN]: "醬油" } },
        { thai: "น้ำมันหอย", phonetic: "náam-man hɔ̌ɔi", translations: { [LanguageCode.ENGLISH]: "oyster sauce", [LanguageCode.FRENCH]: "sauce d'huître", [LanguageCode.PORTUGUESE]: "molho de ostra", [LanguageCode.MANDARIN]: "蠔油" } },
        { thai: "พริกไทย", phonetic: "phrík-thai", translations: { [LanguageCode.ENGLISH]: "black pepper", [LanguageCode.FRENCH]: "poivre noir", [LanguageCode.PORTUGUESE]: "pimenta-do-reino", [LanguageCode.MANDARIN]: "黑胡椒" } },
        { thai: "น้ำมะนาว", phonetic: "náam má-naao", translations: { [LanguageCode.ENGLISH]: "lime juice", [LanguageCode.FRENCH]: "jus de citron vert", [LanguageCode.PORTUGUESE]: "suco de limão", [LanguageCode.MANDARIN]: "檸檬汁" } },
        { thai: "กะทิ", phonetic: "gà-thí", translations: { [LanguageCode.ENGLISH]: "coconut milk", [LanguageCode.FRENCH]: "lait de coco", [LanguageCode.PORTUGUESE]: "leite de coco", [LanguageCode.MANDARIN]: "椰奶" } },

        // Cooking methods
        { thai: "ผัด", phonetic: "phàt", translations: { [LanguageCode.ENGLISH]: "stir-fry", [LanguageCode.FRENCH]: "sauter", [LanguageCode.PORTUGUESE]: "refogar", [LanguageCode.MANDARIN]: "炒" } },
        { thai: "ต้ม", phonetic: "dtôm", translations: { [LanguageCode.ENGLISH]: "boil", [LanguageCode.FRENCH]: "bouillir", [LanguageCode.PORTUGUESE]: "ferver", [LanguageCode.MANDARIN]: "煮" } },
        { thai: "ทอด", phonetic: "thɔ̂ɔt", translations: { [LanguageCode.ENGLISH]: "deep fry", [LanguageCode.FRENCH]: "frire", [LanguageCode.PORTUGUESE]: "fritar", [LanguageCode.MANDARIN]: "炸" } },
        { thai: "ย่าง", phonetic: "yâang", translations: { [LanguageCode.ENGLISH]: "grill/roast", [LanguageCode.FRENCH]: "griller/rôtir", [LanguageCode.PORTUGUESE]: "grelhar/assar", [LanguageCode.MANDARIN]: "烤" } },
        { thai: "นึ่ง", phonetic: "nʉ̂ng", translations: { [LanguageCode.ENGLISH]: "steam", [LanguageCode.FRENCH]: "cuire à la vapeur", [LanguageCode.PORTUGUESE]: "cozinhar no vapor", [LanguageCode.MANDARIN]: "蒸" } },
        { thai: "ปิ้ง", phonetic: "bpîng", translations: { [LanguageCode.ENGLISH]: "grill (skewer)", [LanguageCode.FRENCH]: "griller (brochette)", [LanguageCode.PORTUGUESE]: "grelhar (espeto)", [LanguageCode.MANDARIN]: "烤（串）" } },

        // Kitchen tools & actions
        { thai: "หม้อ", phonetic: "mɔ̂ɔ", translations: { [LanguageCode.ENGLISH]: "pot", [LanguageCode.FRENCH]: "marmite", [LanguageCode.PORTUGUESE]: "panela", [LanguageCode.MANDARIN]: "鍋" } },
        { thai: "กระทะ", phonetic: "grà-thá", translations: { [LanguageCode.ENGLISH]: "wok/pan", [LanguageCode.FRENCH]: "wok/poêle", [LanguageCode.PORTUGUESE]: "wok/frigideira", [LanguageCode.MANDARIN]: "炒鍋" } },
        { thai: "มีด", phonetic: "mîit", translations: { [LanguageCode.ENGLISH]: "knife", [LanguageCode.FRENCH]: "couteau", [LanguageCode.PORTUGUESE]: "faca", [LanguageCode.MANDARIN]: "刀" } },
        { thai: "หั่น", phonetic: "hàn", translations: { [LanguageCode.ENGLISH]: "slice/chop", [LanguageCode.FRENCH]: "trancher/couper", [LanguageCode.PORTUGUESE]: "fatiar/cortar", [LanguageCode.MANDARIN]: "切" } },
        { thai: "โขลก", phonetic: "khlòok", translations: { [LanguageCode.ENGLISH]: "pound/grind", [LanguageCode.FRENCH]: "piler/moudre", [LanguageCode.PORTUGUESE]: "socar/moer", [LanguageCode.MANDARIN]: "搗碎" } },
        { thai: "คน", phonetic: "khon", translations: { [LanguageCode.ENGLISH]: "stir/mix", [LanguageCode.FRENCH]: "remuer/mélanger", [LanguageCode.PORTUGUESE]: "mexer/misturar", [LanguageCode.MANDARIN]: "攪拌" } },
        { thai: "ปรุงรส", phonetic: "bprung rót", translations: { [LanguageCode.ENGLISH]: "season/add flavor", [LanguageCode.FRENCH]: "assaisonner", [LanguageCode.PORTUGUESE]: "temperar", [LanguageCode.MANDARIN]: "調味" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Cooking: Essential Ingredients & Techniques",
                [LanguageCode.FRENCH]: "Cuisine thaïlandaise : Ingrédients et techniques essentiels",
                [LanguageCode.PORTUGUESE]: "Culinária tailandesa: Ingredientes e técnicas essenciais",
                [LanguageCode.MANDARIN]: "泰國烹飪：必備食材與技巧",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai cooking is built on a foundation of fresh ingredients, aromatic herbs, and specific cooking techniques that create the complex flavors Thai food is famous for!\n\n**The Holy Trinity of Thai Cooking:**\n\nThese three ingredients form the base of countless Thai dishes:\n\n1. **กระเทียม (grà-thiam) - Garlic**\n   - Used in almost EVERY savory dish\n   - Often pounded with chilies and cilantro roots\n   - \"กระเทียมเจียว\" (fried garlic) is a common topping\n\n2. **ผักชี (phàk-chii) - Cilantro/Coriander**\n   - Leaves used as garnish\n   - ROOTS are pounded into curry pastes\n   - Seeds used in some dishes\n   - Essential flavor component!\n\n3. **พริก (phrík) - Chili peppers**\n   - Fresh, dried, or as paste\n   - Different varieties for different heat levels\n   - Central to Thai cuisine's spicy reputation\n\n**Essential Thai Herbs & Aromatics:**\n\n**กะเพรา (gà-phrao) - Holy Basil**\n• THE basil for ผัดกะเพรา (basil stir-fry)\n• Peppery, slightly spicy flavor\n• Different from sweet basil!\n• \"ผัดกะเพราหมู\" = pork basil stir-fry (super popular!)\n\n**โหระพา (hǒo-rá-phaa) - Thai Basil**\n• Sweet basil with anise flavor\n• Used in curries and soups\n• Purple stems, green leaves\n• More common in Western countries\n\n**ตะไคร้ (dtà-khrái) - Lemongrass**\n• Citrusy, fresh flavor\n• Used in ต้มยำ (tom yum soup)\n• Bruised and added whole, or finely chopped\n• Essential for authentic Thai taste!\n\n**ข่า (khàa) - Galangal**\n• Similar to ginger but more citrusy/piney\n• Key ingredient in ต้มข่าไก่ (chicken coconut soup)\n• Cannot substitute with regular ginger!\n• Sliced and added to soups/curries\n\n**ขิง (khǐng) - Ginger**\n• Used in some dishes, but less common than galangal\n• More pungent than galangal\n• Often in stir-fries and marinades\n\n**Essential Sauces - The Flavor Foundation:**\n\n**น้ำปลา (náam-bplaa) - Fish Sauce**\n• THE most important seasoning in Thai cooking!\n• Salty, umami-rich liquid\n• Made from fermented fish\n• Used like salt in Western cooking\n• \"ปรุงรสด้วยน้ำปลา\" = season with fish sauce\n• Every Thai kitchen has this!\n\n**ซีอิ๊ว (sii-íu) - Soy Sauce**\n• Two main types:\n  - **ซีอิ๊วขาว** (sii-íu khǎao) = light soy sauce (salty)\n  - **ซีอิ๊วดำ** (sii-íu dam) = dark soy sauce (sweet, thick)\n• Used in stir-fries and noodle dishes\n• Less common than fish sauce overall\n\n**น้ำมันหอย (náam-man hɔ̌ɔi) - Oyster Sauce**\n• Thick, sweet, savory sauce\n• Common in Chinese-Thai dishes\n• Used in stir-fries\n• Adds depth and richness\n\n**Other Essential Ingredients:**\n\n**กะทิ (gà-thí) - Coconut Milk**\n• Used in curries (แกง)\n• Adds creaminess and richness\n• Two types: thick (หัว - hǔa) and thin (หาง - hǎang)\n• Essential for แกงเขียวหวาน (green curry)\n\n**น้ำมะนาว (náam má-naao) - Lime Juice**\n• Provides sour flavor in Thai dishes\n• Key ingredient in ส้มตำ (papaya salad)\n• Used in ต้มยำ (tom yum)\n• Fresh is always better!\n\n**น้ำตาลปี๊บ (náam-dtaan bpíip) - Palm Sugar**\n• Natural sweetener from palm trees\n• Less sweet than white sugar\n• Adds depth and balance\n• Used in pad thai, curries, desserts\n\n**Thai Cooking Methods:**\n\n**ผัด (phàt) - Stir-fry**\n• High heat, quick cooking\n• Most common cooking method!\n• Examples:\n  - ผัดไทย (pad thai)\n  - ผัดกะเพรา (basil stir-fry)\n  - ผัดผัก (stir-fried vegetables)\n• Requires hot wok (กระทะ - grà-thá)\n\n**ต้ม (dtôm) - Boil/Soup**\n• Making soups and broths\n• Examples:\n  - ต้มยำ (tom yum)\n  - ต้มข่า (tom kha)\n  - ต้มจืด (clear soup)\n• Gentle cooking method\n\n**ทอด (thɔ̂ɔt) - Deep Fry**\n• Crispy, golden results\n• Examples:\n  - ไก่ทอด (fried chicken)\n  - ปลาทอด (fried fish)\n  - ปอเปี๊ยะทอด (fried spring rolls)\n• Uses lots of oil (น้ำมัน - náam-man)\n\n**ย่าง (yâang) - Grill/Roast**\n• Over charcoal or open flame\n• Examples:\n  - ไก่ย่าง (grilled chicken)\n  - หมูย่าง (grilled pork)\n  - ปลาย่าง (grilled fish)\n• Popular street food method!\n\n**ปิ้ง (bpîng) - Grill on Skewer**\n• Specifically for skewered items\n• Examples:\n  - หมูปิ้ง (grilled pork skewers)\n  - ไก่ปิ้ง (grilled chicken skewers)\n• Very popular street food!\n\n**นึ่ง (nʉ̂ng) - Steam**\n• Healthy cooking method\n• Examples:\n  - ปลานึ่ง (steamed fish)\n  - ข้าวเหนียวนึ่ง (steamed sticky rice)\n  - ขนมนึ่ง (steamed desserts)\n• Preserves nutrients and flavor\n\n**Kitchen Tools:**\n\n**กระทะ (grà-thá) - Wok**\n• THE most important Thai cooking tool\n• Round bottom, high sides\n• Used for stir-frying\n• Must be very hot!\n\n**หม้อ (mɔ̂ɔ) - Pot**\n• For soups, curries, boiling\n• Various sizes\n• \"หม้อข้าว\" = rice cooker\n\n**มีด (mîit) - Knife**\n• For cutting/chopping\n• \"หั่น\" (hàn) = slice/chop\n• Thai cooks are very skilled with knives!\n\n**ครก (khrók) - Mortar and Pestle**\n• For pounding curry pastes\n• \"โขลก\" (khlòok) = pound/grind\n• Traditional and still widely used\n• Makes authentic curry paste!\n\n**Common Proteins:**\n\n**หมูสามชั้น (mǔu sǎam chán) - Pork Belly**\n• Literally \"three-layer pork\"\n• Fat, meat, fat layers\n• Popular in many dishes\n• Used in หมูกรอบ (crispy pork)\n\n**Seafood:**\n• **ปลาหมึก (bplaa-mʉ̀k)** = squid\n• **หอย (hɔ̌ɔi)** = shellfish/clams\n• **ปู (bpuu)** = crab\n• Thailand has AMAZING seafood!\n\n**เต้าหู้ (dtâo-hûu) - Tofu**\n• Common protein alternative\n• Used in vegetarian dishes\n• Various textures available\n• Often in soups and stir-fries\n\n**Cooking Actions:**\n\n• **หั่น (hàn)** = slice/chop\n• **โขลก (khlòok)** = pound/grind (in mortar)\n• **คน (khon)** = stir/mix\n• **ปรุงรส (bprung rót)** = season/adjust flavor\n  - Literally \"prepare taste\"\n  - Very important concept in Thai cooking!\n  - Taste and adjust as you go\n\n**The Thai Flavor Balance:**\n\nThai cooking is all about balance! Every dish should have:\n• **เค็ม (khem)** = salty (from fish sauce)\n• **หวาน (wǎan)** = sweet (from sugar)\n• **เปรี้ยว (bprîao)** = sour (from lime)\n• **เผ็ด (phèt)** = spicy (from chilies)\n\nThe art is balancing these flavors perfectly!\n\n**Practical Phrases for Cooking:**\n\n• **ทำอาหารไทย (tham aa-hǎan thai)** = cook Thai food\n• **ผัดด้วยไฟแรง (phàt dûay fai rɛɛng)** = stir-fry with high heat\n• **ใส่น้ำปลา (sài náam-bplaa)** = add fish sauce\n• **ปรุงรสตามชอบ (bprung rót dtaam chɔ̂ɔp)** = season to taste\n• **หั่นผักเป็นชิ้นเล็ก (hàn phàk bpen chín lék)** = chop vegetables into small pieces\n• **ต้มจนเดือด (dtôm jon dʉat)** = boil until boiling\n• **ทอดจนกรอบ (thɔ̂ɔt jon grɔ̀ɔp)** = fry until crispy\n\n**Cultural Notes:**\n\n1. **Fresh is Best:** Thais prefer fresh ingredients over frozen. Markets are visited daily!\n\n2. **Taste as You Go:** Thai cooking is intuitive. Recipes are guidelines - you adjust to taste (ปรุงรสตามชอบ).\n\n3. **High Heat:** Thai stir-frying requires VERY high heat. The wok should be smoking hot!\n\n4. **Herbs are Essential:** Don't skip the herbs! They're not just garnish - they're integral to the flavor.\n\n5. **Fish Sauce is Life:** If you're cooking Thai food without fish sauce, it's not really Thai food. It's THAT important!\n\n6. **Street Food Mastery:** Many of the best Thai cooks learned on the streets, not in fancy kitchens. Street food is serious business!\n\nRemember: Thai cooking is about balance, fresh ingredients, and bold flavors. Don't be afraid to taste and adjust - that's the Thai way!",
                [LanguageCode.FRENCH]: "La cuisine thaïlandaise repose sur des ingrédients frais, des herbes aromatiques et des techniques spécifiques qui créent les saveurs complexes pour lesquelles la cuisine thaïlandaise est célèbre !\n\n**La Sainte Trinité de la cuisine thaïlandaise :**\n\n1. **กระเทียม (grà-thiam) - Ail**\n2. **ผักชี (phàk-chii) - Coriandre**\n3. **พริก (phrík) - Piments**\n\n**Herbes essentielles :**\n• **กะเพรา** - Basilic sacré\n• **ตะไคร้** - Citronnelle\n• **ข่า** - Galanga\n\n**Sauces essentielles :**\n• **น้ำปลา** - Sauce de poisson (LA plus importante !)\n• **ซีอิ๊ว** - Sauce soja\n• **น้ำมันหอย** - Sauce d'huître\n\n**Méthodes de cuisson :**\n• **ผัด** - Sauter\n• **ต้ม** - Bouillir\n• **ทอด** - Frire\n• **ย่าง** - Griller",
                [LanguageCode.PORTUGUESE]: "A culinária tailandesa é construída sobre uma base de ingredientes frescos, ervas aromáticas e técnicas específicas que criam os sabores complexos pelos quais a comida tailandesa é famosa!\n\n**A Santíssima Trindade da culinária tailandesa:**\n\n1. **กระเทียม (grà-thiam) - Alho**\n2. **ผักชี (phàk-chii) - Coentro**\n3. **พริก (phrík) - Pimentas**\n\n**Ervas essenciais:**\n• **กะเพรา** - Manjericão sagrado\n• **ตะไคร้** - Capim-limão\n• **ข่า** - Galanga\n\n**Molhos essenciais:**\n• **น้ำปลา** - Molho de peixe (O MAIS importante!)\n• **ซีอิ๊ว** - Molho de soja\n• **น้ำมันหอย** - Molho de ostra\n\n**Métodos de cozimento:**\n• **ผัด** - Refogar\n• **ต้ม** - Ferver\n• **ทอด** - Fritar\n• **ย่าง** - Grelhar",
                [LanguageCode.MANDARIN]: "泰國烹飪建立在新鮮食材、芳香草藥和特定烹飪技術的基礎上，創造出泰國菜聞名的複雜風味！\n\n**泰國烹飪的神聖三位一體：**\n\n1. **กระเทียม (grà-thiam) - 大蒜**\n2. **ผักชี (phàk-chii) - 香菜**\n3. **พริก (phrík) - 辣椒**\n\n**必備香草：**\n• **กะเพรา** - 聖羅勒\n• **ตะไคร้** - 檸檬草\n• **ข่า** - 南薑\n\n**必備醬料：**\n• **น้ำปลา** - 魚露（最重要！）\n• **ซีอิ๊ว** - 醬油\n• **น้ำมันหอย** - 蠔油\n\n**烹飪方法：**\n• **ผัด** - 炒\n• **ต้ม** - 煮\n• **ทอด** - 炸\n• **ย่าง** - 烤",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the essential Thai herbs and aromatics.",
                [LanguageCode.FRENCH]: "Associez les herbes et aromates thaïlandais essentiels.",
                [LanguageCode.PORTUGUESE]: "Relacione as ervas e aromáticos tailandeses essenciais.",
                [LanguageCode.MANDARIN]: "配對必備的泰國香草和香料。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "lemongrass", [LanguageCode.FRENCH]: "citronnelle", [LanguageCode.PORTUGUESE]: "capim-limão", [LanguageCode.MANDARIN]: "檸檬草" }, answer: { [LanguageCode.ENGLISH]: "ตะไคร้", [LanguageCode.FRENCH]: "ตะไคร้", [LanguageCode.PORTUGUESE]: "ตะไคร้", [LanguageCode.MANDARIN]: "ตะไคร้" } },
                { prompt: { [LanguageCode.ENGLISH]: "galangal", [LanguageCode.FRENCH]: "galanga", [LanguageCode.PORTUGUESE]: "galanga", [LanguageCode.MANDARIN]: "南薑" }, answer: { [LanguageCode.ENGLISH]: "ข่า", [LanguageCode.FRENCH]: "ข่า", [LanguageCode.PORTUGUESE]: "ข่า", [LanguageCode.MANDARIN]: "ข่า" } },
                { prompt: { [LanguageCode.ENGLISH]: "holy basil", [LanguageCode.FRENCH]: "basilic sacré", [LanguageCode.PORTUGUESE]: "manjericão sagrado", [LanguageCode.MANDARIN]: "聖羅勒" }, answer: { [LanguageCode.ENGLISH]: "กะเพรา", [LanguageCode.FRENCH]: "กะเพรา", [LanguageCode.PORTUGUESE]: "กะเพรา", [LanguageCode.MANDARIN]: "กะเพรา" } },
                { prompt: { [LanguageCode.ENGLISH]: "garlic", [LanguageCode.FRENCH]: "ail", [LanguageCode.PORTUGUESE]: "alho", [LanguageCode.MANDARIN]: "大蒜" }, answer: { [LanguageCode.ENGLISH]: "กระเทียม", [LanguageCode.FRENCH]: "กระเทียม", [LanguageCode.PORTUGUESE]: "กระเทียม", [LanguageCode.MANDARIN]: "กระเทียม" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the cooking instructions with the correct method.",
                [LanguageCode.FRENCH]: "Complétez les instructions de cuisson avec la bonne méthode.",
                [LanguageCode.PORTUGUESE]: "Complete as instruções de cozimento com o método correto.",
                [LanguageCode.MANDARIN]: "用正確的烹飪方法完成烹飪說明。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "___ผักด้วยไฟแรง", [LanguageCode.FRENCH]: "___les légumes à feu vif", [LanguageCode.PORTUGUESE]: "___os vegetais em fogo alto", [LanguageCode.MANDARIN]: "用大火___蔬菜" }, correctAnswer: "ผัด", end: { [LanguageCode.ENGLISH]: " (stir-fry vegetables with high heat)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ไก่จนกรอบ", [LanguageCode.FRENCH]: "___le poulet jusqu'à ce qu'il soit croustillant", [LanguageCode.PORTUGUESE]: "___o frango até ficar crocante", [LanguageCode.MANDARIN]: "___雞肉直到酥脆" }, correctAnswer: "ทอด", end: { [LanguageCode.ENGLISH]: " (fry chicken until crispy)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___น้ำจนเดือด", [LanguageCode.FRENCH]: "___l'eau jusqu'à ébullition", [LanguageCode.PORTUGUESE]: "___a água até ferver", [LanguageCode.MANDARIN]: "___水直到沸騰" }, correctAnswer: "ต้ม", end: { [LanguageCode.ENGLISH]: " (boil water until boiling)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___หมูบนเตาถ่าน", [LanguageCode.FRENCH]: "___le porc sur le charbon", [LanguageCode.PORTUGUESE]: "___a carne de porco na brasa", [LanguageCode.MANDARIN]: "在炭火上___豬肉" }, correctAnswer: "ย่าง", end: { [LanguageCode.ENGLISH]: " (grill pork on charcoal)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the essential Thai sauces.",
                [LanguageCode.FRENCH]: "Associez les sauces thaïlandaises essentielles.",
                [LanguageCode.PORTUGUESE]: "Relacione os molhos tailandeses essenciais.",
                [LanguageCode.MANDARIN]: "配對必備的泰國醬料。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "fish sauce", [LanguageCode.FRENCH]: "sauce de poisson", [LanguageCode.PORTUGUESE]: "molho de peixe", [LanguageCode.MANDARIN]: "魚露" }, answer: { [LanguageCode.ENGLISH]: "น้ำปลา", [LanguageCode.FRENCH]: "น้ำปลา", [LanguageCode.PORTUGUESE]: "น้ำปลา", [LanguageCode.MANDARIN]: "น้ำปลา" } },
                { prompt: { [LanguageCode.ENGLISH]: "soy sauce", [LanguageCode.FRENCH]: "sauce soja", [LanguageCode.PORTUGUESE]: "molho de soja", [LanguageCode.MANDARIN]: "醬油" }, answer: { [LanguageCode.ENGLISH]: "ซีอิ๊ว", [LanguageCode.FRENCH]: "ซีอิ๊ว", [LanguageCode.PORTUGUESE]: "ซีอิ๊ว", [LanguageCode.MANDARIN]: "ซีอิ๊ว" } },
                { prompt: { [LanguageCode.ENGLISH]: "oyster sauce", [LanguageCode.FRENCH]: "sauce d'huître", [LanguageCode.PORTUGUESE]: "molho de ostra", [LanguageCode.MANDARIN]: "蠔油" }, answer: { [LanguageCode.ENGLISH]: "น้ำมันหอย", [LanguageCode.FRENCH]: "น้ำมันหอย", [LanguageCode.PORTUGUESE]: "น้ำมันหอย", [LanguageCode.MANDARIN]: "น้ำมันหอย" } },
                { prompt: { [LanguageCode.ENGLISH]: "coconut milk", [LanguageCode.FRENCH]: "lait de coco", [LanguageCode.PORTUGUESE]: "leite de coco", [LanguageCode.MANDARIN]: "椰奶" }, answer: { [LanguageCode.ENGLISH]: "กะทิ", [LanguageCode.FRENCH]: "กะทิ", [LanguageCode.PORTUGUESE]: "กะทิ", [LanguageCode.MANDARIN]: "กะทิ" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct ingredient for each Thai dish.",
                [LanguageCode.FRENCH]: "Choisissez le bon ingrédient pour chaque plat thaïlandais.",
                [LanguageCode.PORTUGUESE]: "Escolha o ingrediente correto para cada prato tailandês.",
                [LanguageCode.MANDARIN]: "為每道泰國菜選擇正確的食材。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "The essential herb in ผัดกะเพรา (basil stir-fry) is:", [LanguageCode.FRENCH]: "L'herbe essentielle dans ผัดกะเพรา est :", [LanguageCode.PORTUGUESE]: "A erva essencial no ผัดกะเพรา é:", [LanguageCode.MANDARIN]: "ผัดกะเพรา（打拋炒）的必備香草是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กะเพรา", [LanguageCode.FRENCH]: "กะเพรา", [LanguageCode.PORTUGUESE]: "กะเพรา", [LanguageCode.MANDARIN]: "กะเพรา" },
                        { [LanguageCode.ENGLISH]: "ผักชี", [LanguageCode.FRENCH]: "ผักชี", [LanguageCode.PORTUGUESE]: "ผักชี", [LanguageCode.MANDARIN]: "ผักชี" },
                        { [LanguageCode.ENGLISH]: "ขิง", [LanguageCode.FRENCH]: "ขิง", [LanguageCode.PORTUGUESE]: "ขิง", [LanguageCode.MANDARIN]: "ขิง" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "ต้มข่าไก่ (chicken coconut soup) must have:", [LanguageCode.FRENCH]: "ต้มข่าไก่ doit avoir :", [LanguageCode.PORTUGUESE]: "ต้มข่าไก่ deve ter:", [LanguageCode.MANDARIN]: "ต้มข่าไก่（椰奶雞湯）必須有：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ข่าและกะทิ", [LanguageCode.FRENCH]: "ข่าและกะทิ", [LanguageCode.PORTUGUESE]: "ข่าและกะทิ", [LanguageCode.MANDARIN]: "ข่าและกะทิ" },
                        { [LanguageCode.ENGLISH]: "ขิงและนม", [LanguageCode.FRENCH]: "ขิงและนม", [LanguageCode.PORTUGUESE]: "ขิงและนม", [LanguageCode.MANDARIN]: "ขิงและนม" },
                        { [LanguageCode.ENGLISH]: "กระเทียมและซีอิ๊ว", [LanguageCode.FRENCH]: "กระเทียมและซีอิ๊ว", [LanguageCode.PORTUGUESE]: "กระเทียมและซีอิ๊ว", [LanguageCode.MANDARIN]: "กระเทียมและซีอิ๊ว" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The most important seasoning in Thai cooking is:", [LanguageCode.FRENCH]: "L'assaisonnement le plus important dans la cuisine thaïlandaise est :", [LanguageCode.PORTUGUESE]: "O tempero mais importante na culinária tailandesa é:", [LanguageCode.MANDARIN]: "泰國烹飪中最重要的調味料是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "น้ำปลา", [LanguageCode.FRENCH]: "น้ำปลา", [LanguageCode.PORTUGUESE]: "น้ำปลา", [LanguageCode.MANDARIN]: "น้ำปลา" },
                        { [LanguageCode.ENGLISH]: "ซีอิ๊ว", [LanguageCode.FRENCH]: "ซีอิ๊ว", [LanguageCode.PORTUGUESE]: "ซีอิ๊ว", [LanguageCode.MANDARIN]: "ซีอิ๊ว" },
                        { [LanguageCode.ENGLISH]: "เกลือ", [LanguageCode.FRENCH]: "เกลือ", [LanguageCode.PORTUGUESE]: "เกลือ", [LanguageCode.MANDARIN]: "เกลือ" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the cooking instructions in the correct order.",
                [LanguageCode.FRENCH]: "Mettez les instructions de cuisson dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque as instruções de cozimento na ordem correta.",
                [LanguageCode.MANDARIN]: "將烹飪說明按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["หั่น", "กระเทียม", "เป็น", "ชิ้น", "เล็ก"], hint: { [LanguageCode.ENGLISH]: "Chop garlic into small pieces.", [LanguageCode.FRENCH]: "Coupez l'ail en petits morceaux.", [LanguageCode.PORTUGUESE]: "Corte o alho em pedaços pequenos.", [LanguageCode.MANDARIN]: "把大蒜切成小塊。" } },
                { correctOrder: ["ใส่", "น้ำปลา", "และ", "ปรุงรส"], hint: { [LanguageCode.ENGLISH]: "Add fish sauce and season.", [LanguageCode.FRENCH]: "Ajoutez la sauce de poisson et assaisonnez.", [LanguageCode.PORTUGUESE]: "Adicione molho de peixe e tempere.", [LanguageCode.MANDARIN]: "加魚露並調味。" } },
                { correctOrder: ["ผัด", "ผัก", "ด้วย", "ไฟ", "แรง"], hint: { [LanguageCode.ENGLISH]: "Stir-fry vegetables with high heat.", [LanguageCode.FRENCH]: "Faites sauter les légumes à feu vif.", [LanguageCode.PORTUGUESE]: "Refogue os vegetais em fogo alto.", [LanguageCode.MANDARIN]: "用大火炒蔬菜。" } },
                { correctOrder: ["ต้ม", "น้ำ", "จน", "เดือด"], hint: { [LanguageCode.ENGLISH]: "Boil water until boiling.", [LanguageCode.FRENCH]: "Faites bouillir l'eau jusqu'à ébullition.", [LanguageCode.PORTUGUESE]: "Ferva a água até ferver.", [LanguageCode.MANDARIN]: "把水煮到沸騰。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the recipe steps with cooking actions.",
                [LanguageCode.FRENCH]: "Complétez les étapes de la recette avec les actions de cuisson.",
                [LanguageCode.PORTUGUESE]: "Complete os passos da receita com ações de cozimento.",
                [LanguageCode.MANDARIN]: "用烹飪動作完成食譜步驟。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "___พริกและกระเทียมในครก", [LanguageCode.FRENCH]: "___le piment et l'ail dans le mortier", [LanguageCode.PORTUGUESE]: "___a pimenta e o alho no pilão", [LanguageCode.MANDARIN]: "在研缽中___辣椒和大蒜" }, correctAnswer: "โขลก", end: { [LanguageCode.ENGLISH]: " (pound chili and garlic in mortar)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___หอมเป็นแว่นบางๆ", [LanguageCode.FRENCH]: "___l'oignon en fines tranches", [LanguageCode.PORTUGUESE]: "___a cebola em fatias finas", [LanguageCode.MANDARIN]: "把洋蔥___成薄片" }, correctAnswer: "หั่น", end: { [LanguageCode.ENGLISH]: " (slice onion thinly)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ส่วนผสมให้เข้ากัน", [LanguageCode.FRENCH]: "___les ingrédients ensemble", [LanguageCode.PORTUGUESE]: "___os ingredientes juntos", [LanguageCode.MANDARIN]: "___配料混合" }, correctAnswer: "คน", end: { [LanguageCode.ENGLISH]: " (stir ingredients together)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ตามชอบด้วยน้ำปลา", [LanguageCode.FRENCH]: "___au goût avec de la sauce de poisson", [LanguageCode.PORTUGUESE]: "___a gosto com molho de peixe", [LanguageCode.MANDARIN]: "用魚露___調味" }, correctAnswer: "ปรุงรส", end: { [LanguageCode.ENGLISH]: " (season to taste with fish sauce)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the kitchen tools to their uses.",
                [LanguageCode.FRENCH]: "Associez les ustensiles de cuisine à leurs utilisations.",
                [LanguageCode.PORTUGUESE]: "Relacione os utensílios de cozinha aos seus usos.",
                [LanguageCode.MANDARIN]: "將廚房工具與其用途配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "wok/pan for stir-frying", [LanguageCode.FRENCH]: "wok pour sauter", [LanguageCode.PORTUGUESE]: "wok para refogar", [LanguageCode.MANDARIN]: "炒菜用的炒鍋" }, answer: { [LanguageCode.ENGLISH]: "กระทะ", [LanguageCode.FRENCH]: "กระทะ", [LanguageCode.PORTUGUESE]: "กระทะ", [LanguageCode.MANDARIN]: "กระทะ" } },
                { prompt: { [LanguageCode.ENGLISH]: "pot for soups", [LanguageCode.FRENCH]: "marmite pour soupes", [LanguageCode.PORTUGUESE]: "panela para sopas", [LanguageCode.MANDARIN]: "煮湯用的鍋" }, answer: { [LanguageCode.ENGLISH]: "หม้อ", [LanguageCode.FRENCH]: "หม้อ", [LanguageCode.PORTUGUESE]: "หม้อ", [LanguageCode.MANDARIN]: "หม้อ" } },
                { prompt: { [LanguageCode.ENGLISH]: "knife for cutting", [LanguageCode.FRENCH]: "couteau pour couper", [LanguageCode.PORTUGUESE]: "faca para cortar", [LanguageCode.MANDARIN]: "切菜用的刀" }, answer: { [LanguageCode.ENGLISH]: "มีด", [LanguageCode.FRENCH]: "มีด", [LanguageCode.PORTUGUESE]: "มีด", [LanguageCode.MANDARIN]: "มีด" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best cooking method for each food.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure méthode de cuisson pour chaque aliment.",
                [LanguageCode.PORTUGUESE]: "Escolha o melhor método de cozimento para cada alimento.",
                [LanguageCode.MANDARIN]: "為每種食物選擇最佳烹飪方法。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "For crispy golden chicken, you should:", [LanguageCode.FRENCH]: "Pour un poulet doré et croustillant, vous devriez :", [LanguageCode.PORTUGUESE]: "Para frango dourado e crocante, você deve:", [LanguageCode.MANDARIN]: "要做金黃酥脆的雞肉，你應該：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ทอด", [LanguageCode.FRENCH]: "ทอด", [LanguageCode.PORTUGUESE]: "ทอด", [LanguageCode.MANDARIN]: "ทอด" },
                        { [LanguageCode.ENGLISH]: "ต้ม", [LanguageCode.FRENCH]: "ต้ม", [LanguageCode.PORTUGUESE]: "ต้ม", [LanguageCode.MANDARIN]: "ต้ม" },
                        { [LanguageCode.ENGLISH]: "นึ่ง", [LanguageCode.FRENCH]: "นึ่ง", [LanguageCode.PORTUGUESE]: "นึ่ง", [LanguageCode.MANDARIN]: "นึ่ง" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "For healthy steamed fish, you should:", [LanguageCode.FRENCH]: "Pour un poisson vapeur sain, vous devriez :", [LanguageCode.PORTUGUESE]: "Para peixe saudável no vapor, você deve:", [LanguageCode.MANDARIN]: "要做健康的蒸魚，你應該：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ทอด", [LanguageCode.FRENCH]: "ทอด", [LanguageCode.PORTUGUESE]: "ทอด", [LanguageCode.MANDARIN]: "ทอด" },
                        { [LanguageCode.ENGLISH]: "นึ่ง", [LanguageCode.FRENCH]: "นึ่ง", [LanguageCode.PORTUGUESE]: "นึ่ง", [LanguageCode.MANDARIN]: "นึ่ง" },
                        { [LanguageCode.ENGLISH]: "ย่าง", [LanguageCode.FRENCH]: "ย่าง", [LanguageCode.PORTUGUESE]: "ย่าง", [LanguageCode.MANDARIN]: "ย่าง" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "For smoky grilled pork skewers, you should:", [LanguageCode.FRENCH]: "Pour des brochettes de porc grillées fumées, vous devriez :", [LanguageCode.PORTUGUESE]: "Para espetinhos de porco grelhados defumados, você deve:", [LanguageCode.MANDARIN]: "要做煙燻烤豬肉串，你應該：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ปิ้ง", [LanguageCode.FRENCH]: "ปิ้ง", [LanguageCode.PORTUGUESE]: "ปิ้ง", [LanguageCode.MANDARIN]: "ปิ้ง" },
                        { [LanguageCode.ENGLISH]: "ต้ม", [LanguageCode.FRENCH]: "ต้ม", [LanguageCode.PORTUGUESE]: "ต้ม", [LanguageCode.MANDARIN]: "ต้ม" },
                        { [LanguageCode.ENGLISH]: "นึ่ง", [LanguageCode.FRENCH]: "นึ่ง", [LanguageCode.PORTUGUESE]: "นึ่ง", [LanguageCode.MANDARIN]: "นึ่ง" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete sentences about Thai ingredients and flavors.",
                [LanguageCode.FRENCH]: "Complétez les phrases sur les ingrédients et saveurs thaïlandais.",
                [LanguageCode.PORTUGUESE]: "Complete frases sobre ingredientes e sabores tailandeses.",
                [LanguageCode.MANDARIN]: "完成關於泰國食材和風味的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ต้มยำต้องมี___และ___", [LanguageCode.FRENCH]: "Le tom yum doit avoir___ et___", [LanguageCode.PORTUGUESE]: "Tom yum deve ter___ e___", [LanguageCode.MANDARIN]: "冬陰湯必須有___ 和___" }, correctAnswer: "ตะไคร้ ข่า", end: { [LanguageCode.ENGLISH]: " (lemongrass and galangal)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "แกงเขียวหวานใช้___ทำให้ครีมมี่", [LanguageCode.FRENCH]: "Le curry vert utilise___ pour le rendre crémeux", [LanguageCode.PORTUGUESE]: "Curry verde usa___ para ficar cremoso", [LanguageCode.MANDARIN]: "綠咖哩用___使其奶油般" }, correctAnswer: "กะทิ", end: { [LanguageCode.ENGLISH]: " (coconut milk)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ส้มตำต้องมี___เพื่อรสเปรี้ยว", [LanguageCode.FRENCH]: "Le som tam doit avoir___ pour l'acidité", [LanguageCode.PORTUGUESE]: "Som tam deve ter___ para o azedo", [LanguageCode.MANDARIN]: "青木瓜沙拉必須有___才有酸味" }, correctAnswer: "น้ำมะนาว", end: { [LanguageCode.ENGLISH]: " (lime juice)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "อาหารไทยปรุงรสด้วย___เป็นหลัก", [LanguageCode.FRENCH]: "La cuisine thaïlandaise est principalement assaisonnée avec___", [LanguageCode.PORTUGUESE]: "Comida tailandesa é temperada principalmente com___", [LanguageCode.MANDARIN]: "泰國菜主要用___調味" }, correctAnswer: "น้ำปลา", end: { [LanguageCode.ENGLISH]: " (fish sauce)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete cooking sentences.",
                [LanguageCode.FRENCH]: "Construisez des phrases de cuisine complètes.",
                [LanguageCode.PORTUGUESE]: "Construa frases completas de cozimento.",
                [LanguageCode.MANDARIN]: "組成完整的烹飪句子。",
            },
            sentences: [
                { correctOrder: ["โขลก", "กระเทียม", "กับ", "พริก", "ใน", "ครก"], hint: { [LanguageCode.ENGLISH]: "Pound garlic with chili in the mortar.", [LanguageCode.FRENCH]: "Pilez l'ail avec le piment dans le mortier.", [LanguageCode.PORTUGUESE]: "Soque o alho com pimenta no pilão.", [LanguageCode.MANDARIN]: "在研缽中搗碎大蒜和辣椒。" } },
                { correctOrder: ["ผัด", "กะเพรา", "หมู", "ด้วย", "ไฟ", "แรง"], hint: { [LanguageCode.ENGLISH]: "Stir-fry pork basil with high heat.", [LanguageCode.FRENCH]: "Faites sauter le porc au basilic à feu vif.", [LanguageCode.PORTUGUESE]: "Refogue porco com manjericão em fogo alto.", [LanguageCode.MANDARIN]: "用大火炒豬肉打拋。" } },
                { correctOrder: ["ต้ม", "น้ำ", "ใส่", "ตะไคร้", "และ", "ข่า"], hint: { [LanguageCode.ENGLISH]: "Boil water, add lemongrass and galangal.", [LanguageCode.FRENCH]: "Faites bouillir l'eau, ajoutez la citronnelle et le galanga.", [LanguageCode.PORTUGUESE]: "Ferva a água, adicione capim-limão e galanga.", [LanguageCode.MANDARIN]: "煮水，加檸檬草和南薑。" } },
                { correctOrder: ["ปรุงรส", "ด้วย", "น้ำปลา", "และ", "น้ำตาล"], hint: { [LanguageCode.ENGLISH]: "Season with fish sauce and sugar.", [LanguageCode.FRENCH]: "Assaisonnez avec de la sauce de poisson et du sucre.", [LanguageCode.PORTUGUESE]: "Tempere com molho de peixe e açúcar.", [LanguageCode.MANDARIN]: "用魚露和糖調味。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the proteins and seafood.",
                [LanguageCode.FRENCH]: "Associez les protéines et fruits de mer.",
                [LanguageCode.PORTUGUESE]: "Relacione as proteínas e frutos do mar.",
                [LanguageCode.MANDARIN]: "配對蛋白質和海鮮。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "pork belly", [LanguageCode.FRENCH]: "poitrine de porc", [LanguageCode.PORTUGUESE]: "barriga de porco", [LanguageCode.MANDARIN]: "五花肉" }, answer: { [LanguageCode.ENGLISH]: "หมูสามชั้น", [LanguageCode.FRENCH]: "หมูสามชั้น", [LanguageCode.PORTUGUESE]: "หมูสามชั้น", [LanguageCode.MANDARIN]: "หมูสามชั้น" } },
                { prompt: { [LanguageCode.ENGLISH]: "squid", [LanguageCode.FRENCH]: "calmar", [LanguageCode.PORTUGUESE]: "lula", [LanguageCode.MANDARIN]: "魷魚" }, answer: { [LanguageCode.ENGLISH]: "ปลาหมึก", [LanguageCode.FRENCH]: "ปลาหมึก", [LanguageCode.PORTUGUESE]: "ปลาหมึก", [LanguageCode.MANDARIN]: "ปลาหมึก" } },
                { prompt: { [LanguageCode.ENGLISH]: "crab", [LanguageCode.FRENCH]: "crabe", [LanguageCode.PORTUGUESE]: "caranguejo", [LanguageCode.MANDARIN]: "螃蟹" }, answer: { [LanguageCode.ENGLISH]: "ปู", [LanguageCode.FRENCH]: "ปู", [LanguageCode.PORTUGUESE]: "ปู", [LanguageCode.MANDARIN]: "ปู" } },
                { prompt: { [LanguageCode.ENGLISH]: "tofu", [LanguageCode.FRENCH]: "tofu", [LanguageCode.PORTUGUESE]: "tofu", [LanguageCode.MANDARIN]: "豆腐" }, answer: { [LanguageCode.ENGLISH]: "เต้าหู้", [LanguageCode.FRENCH]: "เต้าหู้", [LanguageCode.PORTUGUESE]: "เต้าหู้", [LanguageCode.MANDARIN]: "เต้าหู้" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct ingredient combination for authentic Thai dishes.",
                [LanguageCode.FRENCH]: "Choisissez la bonne combinaison d'ingrédients pour les plats thaïlandais authentiques.",
                [LanguageCode.PORTUGUESE]: "Escolha a combinação correta de ingredientes para pratos tailandeses autênticos.",
                [LanguageCode.MANDARIN]: "為正宗泰國菜選擇正確的食材組合。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "To make authentic ผัดกะเพรา, you need:", [LanguageCode.FRENCH]: "Pour faire un ผัดกะเพรา authentique, vous avez besoin de :", [LanguageCode.PORTUGUESE]: "Para fazer ผัดกะเพรา autêntico, você precisa de:", [LanguageCode.MANDARIN]: "要做正宗的ผัดกะเพรา，你需要：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กะเพรา กระเทียม พริก น้ำปลา", [LanguageCode.FRENCH]: "กะเพรา กระเทียม พริก น้ำปลา", [LanguageCode.PORTUGUESE]: "กะเพรา กระเทียม พริก น้ำปลา", [LanguageCode.MANDARIN]: "กะเพรา กระเทียม พริก น้ำปลา" },
                        { [LanguageCode.ENGLISH]: "โหระพา ขิง ซีอิ๊ว", [LanguageCode.FRENCH]: "โหระพา ขิง ซีอิ๊ว", [LanguageCode.PORTUGUESE]: "โหระพา ขิง ซีอิ๊ว", [LanguageCode.MANDARIN]: "โหระพา ขิง ซีอิ๊ว" },
                        { [LanguageCode.ENGLISH]: "ผักชี ตะไคร้ กะทิ", [LanguageCode.FRENCH]: "ผักชี ตะไคร้ กะทิ", [LanguageCode.PORTUGUESE]: "ผักชี ตะไคร้ กะทิ", [LanguageCode.MANDARIN]: "ผักชี ตะไคร้ กะทิ" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The aromatic base for ต้มยำ soup includes:", [LanguageCode.FRENCH]: "La base aromatique de la soupe ต้มยำ comprend :", [LanguageCode.PORTUGUESE]: "A base aromática da sopa ต้มยำ inclui:", [LanguageCode.MANDARIN]: "ต้มยำ湯的香料底包括：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กะทิและน้ำตาล", [LanguageCode.FRENCH]: "กะทิและน้ำตาล", [LanguageCode.PORTUGUESE]: "กะทิและน้ำตาล", [LanguageCode.MANDARIN]: "กะทิและน้ำตาล" },
                        { [LanguageCode.ENGLISH]: "ตะไคร้ ข่า ใบมะกรูด", [LanguageCode.FRENCH]: "ตะไคร้ ข่า ใบมะกรูด", [LanguageCode.PORTUGUESE]: "ตะไคร้ ข่า ใบมะกรูด", [LanguageCode.MANDARIN]: "ตะไคร้ ข่า ใบมะกรูด" },
                        { [LanguageCode.ENGLISH]: "ซีอิ๊วและพริกไทย", [LanguageCode.FRENCH]: "ซีอิ๊วและพริกไทย", [LanguageCode.PORTUGUESE]: "ซีอิ๊วและพริกไทย", [LanguageCode.MANDARIN]: "ซีอิ๊วและพริกไทย" },
                    ],
                    correctIndex: 1
                }
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What ingredients do we need for pad krapao?", [LanguageCode.FRENCH]: "Quels ingrédients avons-nous besoin pour le pad krapao ?", [LanguageCode.PORTUGUESE]: "Quais ingredientes precisamos para pad krapao?", [LanguageCode.MANDARIN]: "我們做打拋炒需要什麼食材？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "We need holy basil, garlic, chilies, and fish sauce. First pound the garlic and chilies, then stir-fry with high heat.", [LanguageCode.FRENCH]: "Nous avons besoin de basilic sacré, d'ail, de piments et de sauce de poisson. D'abord pilez l'ail et les piments, puis faites sauter à feu vif.", [LanguageCode.PORTUGUESE]: "Precisamos de manjericão sagrado, alho, pimentas e molho de peixe. Primeiro soque o alho e as pimentas, depois refogue em fogo alto.", [LanguageCode.MANDARIN]: "我們需要聖羅勒、大蒜、辣椒和魚露。先搗碎大蒜和辣椒，然後用大火炒。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Should we use a wok or a pot?", [LanguageCode.FRENCH]: "Devrions-nous utiliser un wok ou une marmite ?", [LanguageCode.PORTUGUESE]: "Devemos usar um wok ou uma panela?", [LanguageCode.MANDARIN]: "我們應該用炒鍋還是湯鍋？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "Use a wok for stir-frying. The heat must be very high to get the smoky flavor.", [LanguageCode.FRENCH]: "Utilisez un wok pour sauter. Le feu doit être très vif pour obtenir la saveur fumée.", [LanguageCode.PORTUGUESE]: "Use um wok para refogar. O fogo deve estar muito alto para obter o sabor defumado.", [LanguageCode.MANDARIN]: "用炒鍋炒菜。火必須很大才能有煙燻味。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What herb is essential for pad krapao?", [LanguageCode.FRENCH]: "Quelle herbe est essentielle pour le pad krapao ?", [LanguageCode.PORTUGUESE]: "Qual erva é essencial para pad krapao?", [LanguageCode.MANDARIN]: "打拋炒需要什麼香草？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กะเพรา", [LanguageCode.FRENCH]: "กะเพรา", [LanguageCode.PORTUGUESE]: "กะเพรา", [LanguageCode.MANDARIN]: "กะเพรา" },
                        { [LanguageCode.ENGLISH]: "ตะไคร้", [LanguageCode.FRENCH]: "ตะไคร้", [LanguageCode.PORTUGUESE]: "ตะไคร้", [LanguageCode.MANDARIN]: "ตะไคร้" },
                        { [LanguageCode.ENGLISH]: "ข่า", [LanguageCode.FRENCH]: "ข่า", [LanguageCode.PORTUGUESE]: "ข่า", [LanguageCode.MANDARIN]: "ข่า" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What cooking tool should be used?", [LanguageCode.FRENCH]: "Quel ustensile de cuisine doit être utilisé ?", [LanguageCode.PORTUGUESE]: "Qual utensílio de cozinha deve ser usado?", [LanguageCode.MANDARIN]: "應該用什麼烹飪工具？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "หม้อ", [LanguageCode.FRENCH]: "หม้อ", [LanguageCode.PORTUGUESE]: "หม้อ", [LanguageCode.MANDARIN]: "หม้อ" },
                        { [LanguageCode.ENGLISH]: "กระทะ", [LanguageCode.FRENCH]: "กระทะ", [LanguageCode.PORTUGUESE]: "กระทะ", [LanguageCode.MANDARIN]: "กระทะ" },
                        { [LanguageCode.ENGLISH]: "มีด", [LanguageCode.FRENCH]: "มีด", [LanguageCode.PORTUGUESE]: "มีด", [LanguageCode.MANDARIN]: "มีด" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "อธิบายวิธีทำอาหารไทยจานโปรดของคุณ บอกส่วนผสมและวิธีทำ",
            [LanguageCode.FRENCH]: "อธิบายวิธีทำอาหารไทยจานโปรดของคุณ บอกส่วนผสมและวิธีทำ",
            [LanguageCode.PORTUGUESE]: "อธิบายวิธีทำอาหารไทยจานโปรดของคุณ บอกส่วนผสมและวิธีทำ",
            [LanguageCode.MANDARIN]: "อธิบายวิธีทำอาหารไทยจานโปรดของคุณ บอกส่วนผสมและวิธีทำ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Explain how to cook your favorite Thai dish. List the ingredients and cooking method then describe how it tastes.",
            [LanguageCode.FRENCH]: "Expliquez comment cuisiner votre plat thaïlandais préféré. Listez les ingrédients et la méthode de cuisson puis décrivez le goût.",
            [LanguageCode.PORTUGUESE]: "Explique como cozinhar seu prato tailandês favorito. Liste os ingredientes e o método de cozimento depois descreva o sabor.",
            [LanguageCode.MANDARIN]: "解釋如何烹飪你最喜歡的泰國菜。列出食材和烹飪方法，然後描述味道。",
        },
        speakingType: 'open-ended'
    }
};

