import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_9: Lesson = {
    id: "1.9",
    title: {
        [LanguageCode.ENGLISH]: "Drinks & Ordering",
        [LanguageCode.FRENCH]: "Boissons et commandes",
        [LanguageCode.PORTUGUESE]: "Bebidas e pedidos",
        [LanguageCode.MANDARIN]: "飲料與點單",
    },
    vocabulary: [
        // Thai drink classics
        { thai: "ชาไทย", phonetic: "chaa thai", translations: { [LanguageCode.ENGLISH]: "Thai iced tea", [LanguageCode.FRENCH]: "thé glacé thaï", [LanguageCode.PORTUGUESE]: "chá gelado tailandês", [LanguageCode.MANDARIN]: "泰式冰茶" } },
        { thai: "ชาเย็น", phonetic: "chaa yen", translations: { [LanguageCode.ENGLISH]: "iced tea (generic)", [LanguageCode.FRENCH]: "thé glacé", [LanguageCode.PORTUGUESE]: "chá gelado", [LanguageCode.MANDARIN]: "冰茶" } },
        { thai: "ชานม", phonetic: "chaa nom", translations: { [LanguageCode.ENGLISH]: "milk tea", [LanguageCode.FRENCH]: "thé au lait", [LanguageCode.PORTUGUESE]: "chá com leite", [LanguageCode.MANDARIN]: "奶茶" } },
        { thai: "ชาไข่มุก", phonetic: "chaa khài-mùk", translations: { [LanguageCode.ENGLISH]: "bubble tea", [LanguageCode.FRENCH]: "thé aux perles", [LanguageCode.PORTUGUESE]: "chá com pérolas", [LanguageCode.MANDARIN]: "珍珠奶茶" } },
        { thai: "ชามัทฉะ", phonetic: "chaa mát-chá", translations: { [LanguageCode.ENGLISH]: "matcha", [LanguageCode.FRENCH]: "matcha", [LanguageCode.PORTUGUESE]: "matcha", [LanguageCode.MANDARIN]: "抹茶" } },
        
        // Coffee
        { thai: "กาแฟ", phonetic: "gaa-fɛɛ", translations: { [LanguageCode.ENGLISH]: "coffee", [LanguageCode.FRENCH]: "café", [LanguageCode.PORTUGUESE]: "café", [LanguageCode.MANDARIN]: "咖啡" } },
        { thai: "กาแฟร้อน", phonetic: "gaa-fɛɛ rɔ́ɔn", translations: { [LanguageCode.ENGLISH]: "hot coffee", [LanguageCode.FRENCH]: "café chaud", [LanguageCode.PORTUGUESE]: "café quente", [LanguageCode.MANDARIN]: "熱咖啡" } },
        { thai: "กาแฟเย็น", phonetic: "gaa-fɛɛ yen", translations: { [LanguageCode.ENGLISH]: "iced coffee", [LanguageCode.FRENCH]: "café glacé", [LanguageCode.PORTUGUESE]: "café gelado", [LanguageCode.MANDARIN]: "冰咖啡" } },
        { thai: "กาแฟบราซิล", phonetic: "gaa-fɛɛ braa-sin", translations: { [LanguageCode.ENGLISH]: "Brazilian coffee", [LanguageCode.FRENCH]: "café brésilien", [LanguageCode.PORTUGUESE]: "café brasileiro", [LanguageCode.MANDARIN]: "巴西咖啡" } },
        { thai: "อเมริกาโน่", phonetic: "à-meh-rí-gaa-nôh", translations: { [LanguageCode.ENGLISH]: "americano", [LanguageCode.FRENCH]: "americano", [LanguageCode.PORTUGUESE]: "americano", [LanguageCode.MANDARIN]: "美式咖啡" } },
        { thai: "ลาเต้", phonetic: "laa-dtêe", translations: { [LanguageCode.ENGLISH]: "latte", [LanguageCode.FRENCH]: "latte", [LanguageCode.PORTUGUESE]: "latte", [LanguageCode.MANDARIN]: "拿鐵" } },
        { thai: "คาปูชิโน่", phonetic: "khaa-bpuu-chí-nôh", translations: { [LanguageCode.ENGLISH]: "cappuccino", [LanguageCode.FRENCH]: "cappuccino", [LanguageCode.PORTUGUESE]: "cappuccino", [LanguageCode.MANDARIN]: "卡布奇諾" } },
        { thai: "เอสเปรสโซ่", phonetic: "èt-bpray-sôh", translations: { [LanguageCode.ENGLISH]: "espresso", [LanguageCode.FRENCH]: "espresso", [LanguageCode.PORTUGUESE]: "espresso", [LanguageCode.MANDARIN]: "濃縮咖啡" } },
        { thai: "มอคค่า", phonetic: "mɔ́k-khâa", translations: { [LanguageCode.ENGLISH]: "mocha", [LanguageCode.FRENCH]: "moka", [LanguageCode.PORTUGUESE]: "mocha", [LanguageCode.MANDARIN]: "摩卡" } },
        
        // Other drinks
        { thai: "ชา", phonetic: "chaa", translations: { [LanguageCode.ENGLISH]: "tea", [LanguageCode.FRENCH]: "thé", [LanguageCode.PORTUGUESE]: "chá", [LanguageCode.MANDARIN]: "茶" } },
        { thai: "น้ำผลไม้", phonetic: "náam phǒn-lá-máai", translations: { [LanguageCode.ENGLISH]: "fruit juice", [LanguageCode.FRENCH]: "jus de fruit", [LanguageCode.PORTUGUESE]: "suco de fruta", [LanguageCode.MANDARIN]: "果汁" } },
        { thai: "น้ำส้ม", phonetic: "náam sôm", translations: { [LanguageCode.ENGLISH]: "orange juice", [LanguageCode.FRENCH]: "jus d'orange", [LanguageCode.PORTUGUESE]: "suco de laranja", [LanguageCode.MANDARIN]: "橙汁" } },
        { thai: "น้ำแข็ง", phonetic: "náam-khǎeng", translations: { [LanguageCode.ENGLISH]: "ice", [LanguageCode.FRENCH]: "glace", [LanguageCode.PORTUGUESE]: "gelo", [LanguageCode.MANDARIN]: "冰" } },
        { thai: "น้ำเปล่า", phonetic: "náam bplàao", translations: { [LanguageCode.ENGLISH]: "plain water", [LanguageCode.FRENCH]: "eau plate", [LanguageCode.PORTUGUESE]: "água pura", [LanguageCode.MANDARIN]: "白開水" } },
        { thai: "โซดา", phonetic: "soh-daa", translations: { [LanguageCode.ENGLISH]: "soda", [LanguageCode.FRENCH]: "soda", [LanguageCode.PORTUGUESE]: "refrigerante", [LanguageCode.MANDARIN]: "汽水" } },
        { thai: "น้ำโค้ก", phonetic: "náam khóhk", translations: { [LanguageCode.ENGLISH]: "Coke", [LanguageCode.FRENCH]: "Coca", [LanguageCode.PORTUGUESE]: "Coca-Cola", [LanguageCode.MANDARIN]: "可口可樂" } },
        { thai: "เป๊ปซี่", phonetic: "bpép-sîi", translations: { [LanguageCode.ENGLISH]: "Pepsi", [LanguageCode.FRENCH]: "Pepsi", [LanguageCode.PORTUGUESE]: "Pepsi", [LanguageCode.MANDARIN]: "百事可樂" } },
        
        // Sweetness & specifications
        { thai: "หวาน", phonetic: "wǎan", translations: { [LanguageCode.ENGLISH]: "sweet", [LanguageCode.FRENCH]: "sucré", [LanguageCode.PORTUGUESE]: "doce", [LanguageCode.MANDARIN]: "甜" } },
        { thai: "ไม่หวานเลย", phonetic: "mâi wǎan ləəi", translations: { [LanguageCode.ENGLISH]: "not sweet at all", [LanguageCode.FRENCH]: "pas sucré du tout", [LanguageCode.PORTUGUESE]: "nada doce", [LanguageCode.MANDARIN]: "完全不甜" } },
        { thai: "ร้อยเปอร์เซ็นต์", phonetic: "rɔ́ɔi-bpəə-sen", translations: { [LanguageCode.ENGLISH]: "100 percent", [LanguageCode.FRENCH]: "100 pourcent", [LanguageCode.PORTUGUESE]: "100 por cento", [LanguageCode.MANDARIN]: "百分之一百" } },
        { thai: "เจ็ดสิบห้า", phonetic: "jèt-sìp-hâa", translations: { [LanguageCode.ENGLISH]: "75 (seventy-five)", [LanguageCode.FRENCH]: "75 (soixante-quinze)", [LanguageCode.PORTUGUESE]: "75 (setenta e cinco)", [LanguageCode.MANDARIN]: "75（七十五）" } },
        { thai: "ห้าสิบ", phonetic: "hâa-sìp", translations: { [LanguageCode.ENGLISH]: "50 (fifty)", [LanguageCode.FRENCH]: "50 (cinquante)", [LanguageCode.PORTUGUESE]: "50 (cinquenta)", [LanguageCode.MANDARIN]: "50（五十）" } },
        { thai: "ยี่สิบห้า", phonetic: "yîi-sìp-hâa", translations: { [LanguageCode.ENGLISH]: "25 (twenty-five)", [LanguageCode.FRENCH]: "25 (vingt-cinq)", [LanguageCode.PORTUGUESE]: "25 (vinte e cinco)", [LanguageCode.MANDARIN]: "25（二十五）" } },
        { thai: "ศูนย์", phonetic: "sǔun", translations: { [LanguageCode.ENGLISH]: "zero", [LanguageCode.FRENCH]: "zéro", [LanguageCode.PORTUGUESE]: "zero", [LanguageCode.MANDARIN]: "零" } },
        
        // Ordering phrases
        { thai: "ใส่", phonetic: "sài", translations: { [LanguageCode.ENGLISH]: "put/add", [LanguageCode.FRENCH]: "mettre/ajouter", [LanguageCode.PORTUGUESE]: "colocar/adicionar", [LanguageCode.MANDARIN]: "放/加" } },
        { thai: "ไม่ใส่", phonetic: "mâi sài", translations: { [LanguageCode.ENGLISH]: "don't put/no", [LanguageCode.FRENCH]: "ne pas mettre", [LanguageCode.PORTUGUESE]: "não colocar", [LanguageCode.MANDARIN]: "不要放" } },
        { thai: "ปั่น", phonetic: "bpàn", translations: { [LanguageCode.ENGLISH]: "blended", [LanguageCode.FRENCH]: "mixé", [LanguageCode.PORTUGUESE]: "batido", [LanguageCode.MANDARIN]: "打碎/冰沙" } },
        { thai: "มี", phonetic: "mii", translations: { [LanguageCode.ENGLISH]: "have/with", [LanguageCode.FRENCH]: "avoir/avec", [LanguageCode.PORTUGUESE]: "ter/com", [LanguageCode.MANDARIN]: "有" } },
        { thai: "เอา", phonetic: "ao", translations: { [LanguageCode.ENGLISH]: "take/want (casual)", [LanguageCode.FRENCH]: "prendre/vouloir (familier)", [LanguageCode.PORTUGUESE]: "querer/pegar (casual)", [LanguageCode.MANDARIN]: "要（日常）" } },
        { thai: "ขอ", phonetic: "khɔ̌ɔ", translations: { [LanguageCode.ENGLISH]: "may I have (polite)", [LanguageCode.FRENCH]: "puis-je avoir (poli)", [LanguageCode.PORTUGUESE]: "posso ter (formal)", [LanguageCode.MANDARIN]: "請給我（禮貌）" } },
        { thai: "แก้ว", phonetic: "gâew", translations: { [LanguageCode.ENGLISH]: "glass/cup", [LanguageCode.FRENCH]: "verre", [LanguageCode.PORTUGUESE]: "copo", [LanguageCode.MANDARIN]: "杯" } },
        { thai: "ขวด", phonetic: "khùat", translations: { [LanguageCode.ENGLISH]: "bottle", [LanguageCode.FRENCH]: "bouteille", [LanguageCode.PORTUGUESE]: "garrafa", [LanguageCode.MANDARIN]: "瓶" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Drink Culture: เอา vs. ขอ and The Sweetness System",
                [LanguageCode.FRENCH]: "Culture des boissons thaïes : เอา vs. ขอ et le système de sucre",
                [LanguageCode.PORTUGUESE]: "Cultura de bebidas tailandesa: เอา vs. ขอ e o sistema de doçura",
                [LanguageCode.MANDARIN]: "泰國飲料文化：เอา vs. ขอ 與甜度系統",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Thai drink culture** is incredibly diverse, from classic ชาเย็น (Thai iced tea) to modern bubble tea shops on every corner!\n\n**เอา (ao) vs. ขอ (khɔ̌ɔ): The Real Way Thais Order**\n\nHere's something CRUCIAL to know: In real life, most Thais use **เอา (ao)** when ordering, NOT ขอ!\n\n**เอา (ao) = \"I'll take/I want\" (CASUAL, NATURAL)**\n• This is what you'll hear 90% of the time in cafes and restaurants\n• Direct and efficient - perfect for everyday ordering\n• Example: **เอาชาเย็นหนึ่งแก้ว (ao chaa yen nʉ̀ng gâew)** = \"I'll take one Thai iced tea\"\n\n**ขอ (khɔ̌ɔ) = \"May I have\" (POLITE, FORMAL)**\n• More polite and deferential\n• Used when you want to be extra respectful\n• Example: **ขอชาเย็นหนึ่งแก้ว (khɔ̌ɔ chaa yen nʉ̀ng gâew)** = \"May I have one Thai iced tea?\"\n\n**Pro Tip:** Use เอา for casual ordering (most of the time), and ขอ when you want to be more polite or formal. Both are correct, but เอา sounds more natural!\n\n**The Thai Sweetness System**\n\nThai drinks are SWEET by default! Coffee and bubble tea shops use a percentage system:\n\n• **ร้อยเปอร์เซ็นต์ (100%)** = Full sugar (VERY sweet!)\n• **เจ็ดสิบห้า (75%)** = 75% sugar (still quite sweet)\n• **ห้าสิบ (50%)** = Half sugar (moderate)\n• **ยี่สิบห้า (25%)** = Quarter sugar (lightly sweet)\n• **ศูนย์ (0%)** or **ไม่หวานเลย (mâi wǎan ləəi)** = No sugar (literally 'not sweet at all')\n\nMost Thais order 100% or 75%! If you're not used to Thai sweetness levels, start with 50% or 25%.\n\n**Classic Thai Drinks:**\n\n**ชาเย็น (chaa yen) - Thai Iced Tea**\n• Orange-colored, sweet, creamy\n• Made with black tea, sugar, and condensed milk\n• A MUST-TRY classic!\n\n**ชานม (chaa nom) - Milk Tea**\n• Simple milk tea, less sweet than ชาเย็น\n• Very popular in bubble tea shops\n\n**ชาไข่มุก (chaa khài-mùk) - Bubble Tea**\n• Literally \"pearl egg tea\" (because pearls look like fish eggs!)\n• Hugely popular with endless flavor options\n• Always specify: **มีไข่มุก (have pearls)** or **ไม่ใส่ไข่มุก (no pearls)**\n\n**Coffee Culture:**\n\nThailand has exploded with coffee culture! You'll find:\n• Traditional Thai coffee (strong and sweet)\n• Modern cafes with lattes, cappuccinos, americanos\n• **กาแฟร้อน (hot coffee)** vs. **กาแฟเย็น (iced coffee)**\n\n**Ordering Like a Local:**\n\nHere's the formula:\n1. Start with **เอา** (I'll take)\n2. Name the drink\n3. Specify sweetness: **หวานห้าสิบเปอร์เซ็นต์** (50% sweet)\n4. Add modifications: **ไม่ใส่น้ำแข็ง** (no ice) or **มีไข่มุก** (with pearls)\n5. Say how many: **หนึ่งแก้ว** (one cup)\n\n**Complete order examples:**\n• **เอาชานมหวานห้าสิบมีไข่มุกหนึ่งแก้ว** = \"I'll take one milk tea, 50% sweet, with pearls\"\n• **เอาลาเต้เย็นไม่หวานหนึ่งแก้ว** = \"I'll take one iced latte, no sugar\"\n• **เอาชาเย็นสองแก้ว** = \"I'll take two Thai iced teas\"\n\n**Common modifications:**\n• **ไม่ใส่น้ำแข็ง (mâi sài náam-khǎeng)** = no ice\n• **น้ำแข็งน้อย (náam-khǎeng nɔ́i)** = less ice\n• **ปั่น (bpàn)** = blended (frappe style)\n• **ร้อน (rɔ́ɔn)** = hot\n• **เย็น (yen)** = cold/iced\n\n**Cultural Note:**\n\nIced drinks are EVERYWHERE in Thailand because of the heat. Even in air-conditioned spaces, most people prefer เย็น (cold) drinks. Don't be surprised if hot drinks are less common!",
                [LanguageCode.FRENCH]: "**La culture des boissons thaïes** est incroyablement diversifiée ! Voici l'essentiel :\n\n**เอา (ao) vs. ขอ (khɔ̌ɔ)**\n\nEn réalité, la plupart des Thaïlandais utilisent **เอา (ao)** pour commander, PAS ขอ !\n\n**เอา (ao) = \"Je prends\" (FAMILIER)**\n• Ce que vous entendrez 90% du temps\n• Direct et naturel\n• Exemple : **เอาชาเย็นหนึ่งแก้ว** = \"Je prends un thé glacé thaï\"\n\n**ขอ (khɔ̌ɔ) = \"Puis-je avoir\" (POLI)**\n• Plus respectueux et formel\n• Exemple : **ขอชาเย็นหนึ่งแก้ว** = \"Puis-je avoir un thé glacé thaï ?\"\n\n**Le système de sucre :**\n• 100% = sucre complet (TRÈS sucré !)\n• 75% = assez sucré\n• 50% = moyennement sucré\n• 25% = légèrement sucré\n• 0% = sans sucre\n\nLa plupart des Thaïlandais commandent 100% ou 75% ! Si vous n'êtes pas habitué, commencez par 50%.\n\n**Boissons classiques :**\n• **ชาเย็น** - Thé glacé thaï orange et crémeux\n• **ชานม** - Thé au lait\n• **ชาไข่มุก** - Thé aux perles (bubble tea)\n\n**Commander comme un local :**\nFormule : เอา + boisson + % sucre + modifications + nombre\n\nExemple : **เอาชานมหวานห้าสิบมีไข่มุกหนึ่งแก้ว** = \"Je prends un thé au lait à 50% avec des perles\"",
                [LanguageCode.PORTUGUESE]: "**A cultura de bebidas tailandesa** é incrivelmente diversa! Aqui está o essencial:\n\n**เอา (ao) vs. ขอ (khɔ̌ɔ)**\n\nNa vida real, a maioria dos tailandeses usa **เอา (ao)** ao pedir, NÃO ขอ!\n\n**เอา (ao) = \"Eu quero\" (CASUAL)**\n• O que você ouvirá 90% das vezes\n• Direto e natural\n• Exemplo: **เอาชาเย็นหนึ่งแก้ว** = \"Eu quero um chá gelado tailandês\"\n\n**ขอ (khɔ̌ɔ) = \"Posso ter\" (FORMAL)**\n• Mais respeitoso e formal\n• Exemplo: **ขอชาเย็นหนึ่งแก้ว** = \"Posso ter um chá gelado tailandês?\"\n\n**O sistema de doçura:**\n• 100% = açúcar completo (MUITO doce!)\n• 75% = bastante doce\n• 50% = moderadamente doce\n• 25% = levemente doce\n• 0% = sem açúcar\n\nA maioria dos tailandeses pede 100% ou 75%! Se não está acostumado, comece com 50%.\n\n**Bebidas clássicas:**\n• **ชาเย็น** - Chá gelado tailandês laranja e cremoso\n• **ชานม** - Chá com leite\n• **ชาไข่มุก** - Chá com pérolas (bubble tea)\n\n**Pedindo como um local:**\nFórmula: เอา + bebida + % doçura + modificações + quantidade\n\nExemplo: **เอาชานมหวานห้าสิบมีไข่มุกหนึ่งแก้ว** = \"Eu quero um chá com leite 50% doce com pérolas\"",
                [LanguageCode.MANDARIN]: "**泰國飲料文化**非常多樣化！以下是要點：\n\n**เอา (ao) vs. ขอ (khɔ̌ɔ)**\n\n在現實中，大多數泰國人點餐時使用 **เอา (ao)**，而不是 ขอ！\n\n**เอา (ao) = 「我要」（日常）**\n• 你會聽到 90% 的時間\n• 直接自然\n• 例：**เอาชาเย็นหนึ่งแก้ว** = 「我要一杯泰式冰茶」\n\n**ขอ (khɔ̌ɔ) = 「請給我」（禮貌）**\n• 更尊重和正式\n• 例：**ขอชาเย็นหนึ่งแก้ว** = 「請給我一杯泰式冰茶」\n\n**甜度系統：**\n• 100% = 全糖（非常甜！）\n• 75% = 相當甜\n• 50% = 中等甜\n• 25% = 微糖\n• 0% = 無糖\n\n大多數泰國人點 100% 或 75%！如果不習慣，從 50% 開始。\n\n**經典飲料：**\n• **ชาเย็น** - 橙色奶油泰式冰茶\n• **ชานม** - 奶茶\n• **ชาไข่มุก** - 珍珠奶茶\n\n**像當地人一樣點餐：**\n公式：เอา + 飲料 + % 甜度 + 修改 + 數量\n\n例：**เอาชานมหวานห้าสิบมีไข่มุกหนึ่งแก้ว** = 「我要一杯五分糖珍珠奶茶」",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in drink orders with specifications.",
                [LanguageCode.FRENCH]: "Complétez les commandes de boissons avec les spécifications.",
                [LanguageCode.PORTUGUESE]: "Complete pedidos de bebidas com especificações.",
                [LanguageCode.MANDARIN]: "填入帶規格的飲料訂單。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "___ชานมหวาน___เปอร์เซ็นต์", [LanguageCode.FRENCH]: "___thé au lait sucré à ___pourcent", [LanguageCode.PORTUGUESE]: "___chá com leite ___por cento doce", [LanguageCode.MANDARIN]: "___奶茶___甜" }, correctAnswer: "เอา/ห้าสิบ/เจ็ดสิบห้า", end: { [LanguageCode.ENGLISH]: " (I'll take milk tea 50%/75% sweet)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เอาลาเต้เย็น___", [LanguageCode.FRENCH]: "Je prends un latte glacé ___", [LanguageCode.PORTUGUESE]: "Quero latte gelado ___", [LanguageCode.MANDARIN]: "我要冰拿鐵___" }, correctAnswer: "ไม่หวานเลย", end: { [LanguageCode.ENGLISH]: " (not sweet at all)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เอาชาไข่มุก___ไข่มุก", [LanguageCode.FRENCH]: "Je prends bubble tea ___perles", [LanguageCode.PORTUGUESE]: "Quero bubble tea ___pérolas", [LanguageCode.MANDARIN]: "我要珍珠奶茶___珍珠" }, correctAnswer: "มี", end: { [LanguageCode.ENGLISH]: " (with pearls)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เอากาแฟเย็น___น้ำแข็ง", [LanguageCode.FRENCH]: "Je prends café glacé ___glace", [LanguageCode.PORTUGUESE]: "Quero café gelado ___gelo", [LanguageCode.MANDARIN]: "我要冰咖啡___冰" }, correctAnswer: "ไม่ใส่", end: { [LanguageCode.ENGLISH]: " (no ice)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match drinks to their Thai names.",
                [LanguageCode.FRENCH]: "Associez les boissons à leurs noms thaïs.",
                [LanguageCode.PORTUGUESE]: "Relacione bebidas aos nomes tailandeses.",
                [LanguageCode.MANDARIN]: "將飲料與泰語名稱配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Thai iced tea", [LanguageCode.FRENCH]: "thé glacé thaï", [LanguageCode.PORTUGUESE]: "chá gelado tailandês", [LanguageCode.MANDARIN]: "泰式冰茶" }, answer: { [LanguageCode.ENGLISH]: "ชาเย็น", [LanguageCode.FRENCH]: "ชาเย็น", [LanguageCode.PORTUGUESE]: "ชาเย็น", [LanguageCode.MANDARIN]: "ชาเย็น" } },
                { prompt: { [LanguageCode.ENGLISH]: "bubble tea", [LanguageCode.FRENCH]: "thé aux perles", [LanguageCode.PORTUGUESE]: "chá com pérolas", [LanguageCode.MANDARIN]: "珍珠奶茶" }, answer: { [LanguageCode.ENGLISH]: "ชาไข่มุก", [LanguageCode.FRENCH]: "ชาไข่มุก", [LanguageCode.PORTUGUESE]: "ชาไข่มุก", [LanguageCode.MANDARIN]: "ชาไข่มุก" } },
                { prompt: { [LanguageCode.ENGLISH]: "iced coffee", [LanguageCode.FRENCH]: "café glacé", [LanguageCode.PORTUGUESE]: "café gelado", [LanguageCode.MANDARIN]: "冰咖啡" }, answer: { [LanguageCode.ENGLISH]: "กาแฟเย็น", [LanguageCode.FRENCH]: "กาแฟเย็น", [LanguageCode.PORTUGUESE]: "กาแฟเย็น", [LanguageCode.MANDARIN]: "กาแฟเย็น" } },
                { prompt: { [LanguageCode.ENGLISH]: "latte", [LanguageCode.FRENCH]: "latte", [LanguageCode.PORTUGUESE]: "latte", [LanguageCode.MANDARIN]: "拿鐵" }, answer: { [LanguageCode.ENGLISH]: "ลาเต้", [LanguageCode.FRENCH]: "ลาเต้", [LanguageCode.PORTUGUESE]: "ลาเต้", [LanguageCode.MANDARIN]: "ลาเต้" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct word for ordering drinks.",
                [LanguageCode.FRENCH]: "Choisissez le bon mot pour commander des boissons.",
                [LanguageCode.PORTUGUESE]: "Escolha a palavra correta para pedir bebidas.",
                [LanguageCode.MANDARIN]: "選擇點飲料的正確詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Which word do most Thais use when ordering casually?", [LanguageCode.FRENCH]: "Quel mot la plupart des Thaïlandais utilisent-ils pour commander de manière décontractée ?", [LanguageCode.PORTUGUESE]: "Qual palavra a maioria dos tailandeses usa ao pedir casualmente?", [LanguageCode.MANDARIN]: "大多數泰國人隨意點餐時用哪個詞？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เอา (ao)", [LanguageCode.FRENCH]: "เอา (ao)", [LanguageCode.PORTUGUESE]: "เอา (ao)", [LanguageCode.MANDARIN]: "เอา (ao)" },
                        { [LanguageCode.ENGLISH]: "ขอ (khɔ̌ɔ)", [LanguageCode.FRENCH]: "ขอ (khɔ̌ɔ)", [LanguageCode.PORTUGUESE]: "ขอ (khɔ̌ɔ)", [LanguageCode.MANDARIN]: "ขอ (khɔ̌ɔ)" },
                        { [LanguageCode.ENGLISH]: "สั่ง (sàng)", [LanguageCode.FRENCH]: "สั่ง (sàng)", [LanguageCode.PORTUGUESE]: "สั่ง (sàng)", [LanguageCode.MANDARIN]: "สั่ง (sàng)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "If you want no sugar in your drink, you say:", [LanguageCode.FRENCH]: "Si vous voulez sans sucre, vous dites :", [LanguageCode.PORTUGUESE]: "Se você quer sem açúcar, você diz:", [LanguageCode.MANDARIN]: "如果你想無糖，你說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ไม่หวานเลย", [LanguageCode.FRENCH]: "ไม่หวานเลย", [LanguageCode.PORTUGUESE]: "ไม่หวานเลย", [LanguageCode.MANDARIN]: "ไม่หวานเลย" },
                        { [LanguageCode.ENGLISH]: "ร้อยเปอร์เซ็นต์ (100%)", [LanguageCode.FRENCH]: "ร้อยเปอร์เซ็นต์ (100%)", [LanguageCode.PORTUGUESE]: "ร้อยเปอร์เซ็นต์ (100%)", [LanguageCode.MANDARIN]: "ร้อยเปอร์เซ็นต์ (100%)" },
                        { [LanguageCode.ENGLISH]: "ศูนย์ (0%)", [LanguageCode.FRENCH]: "ศูนย์ (0%)", [LanguageCode.PORTUGUESE]: "ศูนย์ (0%)", [LanguageCode.MANDARIN]: "ศูนย์ (0%)" },
                        { [LanguageCode.ENGLISH]: "ห้าสิบ (50%)", [LanguageCode.FRENCH]: "ห้าสิบ (50%)", [LanguageCode.PORTUGUESE]: "ห้าสิบ (50%)", [LanguageCode.MANDARIN]: "ห้าสิบ (50%)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "To say 'with pearls' in bubble tea, you say: ___ไข่มุก", [LanguageCode.FRENCH]: "Pour dire 'avec des perles', vous dites : ___ไข่มุก", [LanguageCode.PORTUGUESE]: "Para dizer 'com pérolas', você diz: ___ไข่มุก", [LanguageCode.MANDARIN]: "要說「加珍珠」，你說：___ไข่มุก" },
                    options: [
                        { [LanguageCode.ENGLISH]: "มี", [LanguageCode.FRENCH]: "มี", [LanguageCode.PORTUGUESE]: "มี", [LanguageCode.MANDARIN]: "มี" },
                        { [LanguageCode.ENGLISH]: "ไม่ใส่", [LanguageCode.FRENCH]: "ไม่ใส่", [LanguageCode.PORTUGUESE]: "ไม่ใส่", [LanguageCode.MANDARIN]: "ไม่ใส่" },
                        { [LanguageCode.ENGLISH]: "เอา", [LanguageCode.FRENCH]: "เอา", [LanguageCode.PORTUGUESE]: "เอา", [LanguageCode.MANDARIN]: "เอา" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete drink orders.",
                [LanguageCode.FRENCH]: "Construisez des commandes de boissons complètes.",
                [LanguageCode.PORTUGUESE]: "Construa pedidos completos de bebidas.",
                [LanguageCode.MANDARIN]: "組成完整的飲料訂單。",
            },
            sentences: [
                { correctOrder: ["เอา", "ชาเย็น", "หนึ่ง", "แก้ว"], hint: { [LanguageCode.ENGLISH]: "I'll take one Thai iced tea.", [LanguageCode.FRENCH]: "Je prends un thé glacé thaï.", [LanguageCode.PORTUGUESE]: "Eu quero um chá gelado tailandês.", [LanguageCode.MANDARIN]: "我要一杯泰式冰茶。" } },
                { correctOrder: ["เอา", "ชานม", "หวาน", "ห้าสิบ", "เปอร์เซ็นต์"], hint: { [LanguageCode.ENGLISH]: "I'll take milk tea 50% sweet.", [LanguageCode.FRENCH]: "Je prends thé au lait 50% sucré.", [LanguageCode.PORTUGUESE]: "Eu quero chá com leite 50% doce.", [LanguageCode.MANDARIN]: "我要五分糖奶茶。" } },
                { correctOrder: ["เอา", "ชาไข่มุก", "มี", "ไข่มุก"], hint: { [LanguageCode.ENGLISH]: "I'll take bubble tea with pearls.", [LanguageCode.FRENCH]: "Je prends bubble tea avec perles.", [LanguageCode.PORTUGUESE]: "Eu quero bubble tea com pérolas.", [LanguageCode.MANDARIN]: "我要加珍珠的奶茶。" } },
                { correctOrder: ["เอา", "กาแฟเย็น", "ไม่หวานเลย"], hint: { [LanguageCode.ENGLISH]: "I'll take iced coffee not sweet at all.", [LanguageCode.FRENCH]: "Je prends café glacé pas sucré du tout.", [LanguageCode.PORTUGUESE]: "Eu quero café gelado nada doce.", [LanguageCode.MANDARIN]: "我要完全不甜冰咖啡。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete bubble tea orders with specifications.",
                [LanguageCode.FRENCH]: "Complétez les commandes de bubble tea avec les spécifications.",
                [LanguageCode.PORTUGUESE]: "Complete pedidos de bubble tea com especificações.",
                [LanguageCode.MANDARIN]: "完成帶規格的珍珠奶茶訂單。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เอาชาไข่มุก___ไข่มุกหนึ่งแก้ว", [LanguageCode.FRENCH]: "Je prends bubble tea ___perles, un verre", [LanguageCode.PORTUGUESE]: "Quero bubble tea ___pérolas, um copo", [LanguageCode.MANDARIN]: "我要___珍珠的奶茶一杯" }, correctAnswer: "มี", end: { [LanguageCode.ENGLISH]: " (with pearls)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เอาชานม___น้ำแข็ง", [LanguageCode.FRENCH]: "Je prends thé au lait ___glace", [LanguageCode.PORTUGUESE]: "Quero chá com leite ___gelo", [LanguageCode.MANDARIN]: "我要奶茶___冰" }, correctAnswer: "ไม่ใส่", end: { [LanguageCode.ENGLISH]: " (no ice)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เอาชาเย็นหวาน___เปอร์เซ็นต์", [LanguageCode.FRENCH]: "Je prends thé glacé thaï ___pourcent sucré", [LanguageCode.PORTUGUESE]: "Quero chá gelado tailandês ___por cento doce", [LanguageCode.MANDARIN]: "我要___甜的泰式冰茶" }, correctAnswer: "ร้อยเปอร์เซ็นต์/เจ็ดสิบห้า/ห้าสิบ/ยี่สิบห้า", end: { [LanguageCode.ENGLISH]: " (100%/75%/50%/25%)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match sweetness levels to percentages.",
                [LanguageCode.FRENCH]: "Associez les niveaux de sucre aux pourcentages.",
                [LanguageCode.PORTUGUESE]: "Relacione níveis de doçura a percentagens.",
                [LanguageCode.MANDARIN]: "將甜度等級與百分比配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "full sugar", [LanguageCode.FRENCH]: "sucre complet", [LanguageCode.PORTUGUESE]: "açúcar total", [LanguageCode.MANDARIN]: "全糖" }, answer: { [LanguageCode.ENGLISH]: "ร้อยเปอร์เซ็นต์ (100%)", [LanguageCode.FRENCH]: "ร้อยเปอร์เซ็นต์ (100%)", [LanguageCode.PORTUGUESE]: "ร้อยเปอร์เซ็นต์ (100%)", [LanguageCode.MANDARIN]: "ร้อยเปอร์เซ็นต์ (100%)" } },
                { prompt: { [LanguageCode.ENGLISH]: "half sugar", [LanguageCode.FRENCH]: "demi-sucre", [LanguageCode.PORTUGUESE]: "meio açúcar", [LanguageCode.MANDARIN]: "半糖" }, answer: { [LanguageCode.ENGLISH]: "ห้าสิบ (50%)", [LanguageCode.FRENCH]: "ห้าสิบ (50%)", [LanguageCode.PORTUGUESE]: "ห้าสิบ (50%)", [LanguageCode.MANDARIN]: "ห้าสิบ (50%)" } },
                { prompt: { [LanguageCode.ENGLISH]: "not sweet at all", [LanguageCode.FRENCH]: "pas sucré du tout", [LanguageCode.PORTUGUESE]: "nada doce", [LanguageCode.MANDARIN]: "完全不甜" }, answer: { [LanguageCode.ENGLISH]: "ไม่หวานเลย", [LanguageCode.FRENCH]: "ไม่หวานเลย", [LanguageCode.PORTUGUESE]: "ไม่หวานเลย", [LanguageCode.MANDARIN]: "ไม่หวานเลย" } },
                { prompt: { [LanguageCode.ENGLISH]: "quarter sugar", [LanguageCode.FRENCH]: "quart-sucre", [LanguageCode.PORTUGUESE]: "um quarto açúcar", [LanguageCode.MANDARIN]: "微糖" }, answer: { [LanguageCode.ENGLISH]: "ยี่สิบห้า (25%)", [LanguageCode.FRENCH]: "ยี่สิบห้า (25%)", [LanguageCode.PORTUGUESE]: "ยี่สิบห้า (25%)", [LanguageCode.MANDARIN]: "ยี่สิบห้า (25%)" } },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What would you like to drink?", [LanguageCode.FRENCH]: "Que voulez-vous boire ?", [LanguageCode.PORTUGUESE]: "O que você gostaria de beber?", [LanguageCode.MANDARIN]: "你想喝什麼？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I'll take milk tea, 50% sweet, with pearls.", [LanguageCode.FRENCH]: "Je prends thé au lait, 50% sucré, avec perles.", [LanguageCode.PORTUGUESE]: "Eu quero chá com leite, 50% doce, com pérolas.", [LanguageCode.MANDARIN]: "我要五分糖珍珠奶茶。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Hot or iced?", [LanguageCode.FRENCH]: "Chaud ou glacé ?", [LanguageCode.PORTUGUESE]: "Quente ou gelado?", [LanguageCode.MANDARIN]: "熱的還是冰的？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "Iced, please. No ice.", [LanguageCode.FRENCH]: "Glacé, s'il vous plaît. Sans glace.", [LanguageCode.PORTUGUESE]: "Gelado, por favor. Sem gelo.", [LanguageCode.MANDARIN]: "冰的，不要冰塊。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What sweetness level did B order?", [LanguageCode.FRENCH]: "Quel niveau de sucre B a-t-il commandé ?", [LanguageCode.PORTUGUESE]: "Qual nível de doçura B pediu?", [LanguageCode.MANDARIN]: "B 點了什麼甜度？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "100%", [LanguageCode.FRENCH]: "100%", [LanguageCode.PORTUGUESE]: "100%", [LanguageCode.MANDARIN]: "100%" },
                        { [LanguageCode.ENGLISH]: "50%", [LanguageCode.FRENCH]: "50%", [LanguageCode.PORTUGUESE]: "50%", [LanguageCode.MANDARIN]: "50%" },
                        { [LanguageCode.ENGLISH]: "0%", [LanguageCode.FRENCH]: "0%", [LanguageCode.PORTUGUESE]: "0%", [LanguageCode.MANDARIN]: "0%" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Did B want ice?", [LanguageCode.FRENCH]: "B voulait-il de la glace ?", [LanguageCode.PORTUGUESE]: "B queria gelo?", [LanguageCode.MANDARIN]: "B 要冰塊嗎？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Yes", [LanguageCode.FRENCH]: "Oui", [LanguageCode.PORTUGUESE]: "Sim", [LanguageCode.MANDARIN]: "要" },
                        { [LanguageCode.ENGLISH]: "No", [LanguageCode.FRENCH]: "Non", [LanguageCode.PORTUGUESE]: "Não", [LanguageCode.MANDARIN]: "不要" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "สั่งเครื่องดื่มที่คุณชอบพร้อมรายละเอียดทั้งหมด",
            [LanguageCode.FRENCH]: "สั่งเครื่องดื่มที่คุณชอบพร้อมรายละเอียดทั้งหมด",
            [LanguageCode.PORTUGUESE]: "สั่งเครื่องดื่มที่คุณชอบพร้อมรายละเอียดทั้งหมด",
            [LanguageCode.MANDARIN]: "สั่งเครื่องดื่มที่คุณชอบพร้อมรายละเอียดทั้งหมด",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Order your favorite drink with exact specifications. Example: ao chaa nom wǎan hâa-sìp bpəə-sen mii khài-mùk mâi sài náam-khǎeng nʉ̀ng gâew (I'll take milk tea 50% sweet with pearls, no ice, one cup)",
            [LanguageCode.FRENCH]: "Commandez votre boisson préférée avec des spécifications exactes. Ex : ao chaa nom wǎan hâa-sìp bpəə-sen mii khài-mùk mâi sài náam-khǎeng nʉ̀ng gâew",
            [LanguageCode.PORTUGUESE]: "Peça sua bebida favorita com especificações exatas. Ex.: ao chaa nom wǎan hâa-sìp bpəə-sen mii khài-mùk mâi sài náam-khǎeng nʉ̀ng gâew",
            [LanguageCode.MANDARIN]: "用精確規格點你最喜歡的飲料。例：ao chaa nom wǎan hâa-sìp bpəə-sen mii khài-mùk mâi sài náam-khǎeng nʉ̀ng gâew（我要五分糖珍珠奶茶不要冰一杯）",
        },
        speakingType: 'open-ended'
    }
};

