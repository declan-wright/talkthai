import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_2_1: Lesson = {
    id: "2.1",
    title: {
        [LanguageCode.ENGLISH]: "Describing People in Detail",
        [LanguageCode.FRENCH]: "Décrire les gens en détail",
        [LanguageCode.PORTUGUESE]: "Descrevendo Pessoas em Detalhe",
        [LanguageCode.MANDARIN]: "詳細描述人物",
    },
    vocabulary: [
        // Physical appearance - Height & Build
        { thai: "รูปร่าง", phonetic: "rûup-râang", translations: { [LanguageCode.ENGLISH]: "body shape/figure", [LanguageCode.FRENCH]: "silhouette/forme", [LanguageCode.PORTUGUESE]: "forma do corpo/figura", [LanguageCode.MANDARIN]: "體型/身材" } },
        { thai: "หุ่นดี", phonetic: "hùn dii", translations: { [LanguageCode.ENGLISH]: "good body/fit", [LanguageCode.FRENCH]: "bonne silhouette", [LanguageCode.PORTUGUESE]: "corpo bonito/em forma", [LanguageCode.MANDARIN]: "身材好" } },
        { thai: "ตัวเล็ก", phonetic: "dtuua lék", translations: { [LanguageCode.ENGLISH]: "small-framed/petite", [LanguageCode.FRENCH]: "petite carrure", [LanguageCode.PORTUGUESE]: "franzino(a)", [LanguageCode.MANDARIN]: "嬌小" } },
        { thai: "ตัวใหญ่", phonetic: "dtuua yài", translations: { [LanguageCode.ENGLISH]: "large-framed/big", [LanguageCode.FRENCH]: "grande carrure", [LanguageCode.PORTUGUESE]: "grande/corpulento(a)", [LanguageCode.MANDARIN]: "體型大" } },
        { thai: "ล่ำ", phonetic: "lâm", translations: { [LanguageCode.ENGLISH]: "muscular/buff", [LanguageCode.FRENCH]: "musclé(e)", [LanguageCode.PORTUGUESE]: "musculoso(a)", [LanguageCode.MANDARIN]: "健壯" } },
        
        // Facial features & appearance
        { thai: "หน้าตา", phonetic: "nâa-dtaa", translations: { [LanguageCode.ENGLISH]: "face/appearance", [LanguageCode.FRENCH]: "visage/apparence", [LanguageCode.PORTUGUESE]: "rosto/aparência", [LanguageCode.MANDARIN]: "面容/外表" } },
        { thai: "หล่อมาก", phonetic: "lɔ̀ɔ mâak", translations: { [LanguageCode.ENGLISH]: "very handsome", [LanguageCode.FRENCH]: "très beau", [LanguageCode.PORTUGUESE]: "muito bonito", [LanguageCode.MANDARIN]: "很帥" } },
        { thai: "ปัง", phonetic: "bpang", translations: { [LanguageCode.ENGLISH]: "hot/stunning", [LanguageCode.FRENCH]: "canon", [LanguageCode.PORTUGUESE]: "gato(a)/incrível", [LanguageCode.MANDARIN]: "正/超讚" } },
        { thai: "เท่", phonetic: "thêe", translations: { [LanguageCode.ENGLISH]: "cool/stylish", [LanguageCode.FRENCH]: "cool/stylé(e)", [LanguageCode.PORTUGUESE]: "descolado(a)", [LanguageCode.MANDARIN]: "酷" } },
        { thai: "กล้องโทรทรรศน์", phonetic: "glɔ̂ɔng-thoh-rá-thát", translations: { [LanguageCode.ENGLISH]: "telescope", [LanguageCode.FRENCH]: "télescope", [LanguageCode.PORTUGUESE]: "telescópio", [LanguageCode.MANDARIN]: "望遠鏡" } },
        { thai: "เก๋", phonetic: "gěe", translations: { [LanguageCode.ENGLISH]: "chic/stylish", [LanguageCode.FRENCH]: "chic/élégant(e)", [LanguageCode.PORTUGUESE]: "chique/estiloso(a)", [LanguageCode.MANDARIN]: "時髦" } },
        { thai: "สเปค", phonetic: "sà-bpék", translations: { [LanguageCode.ENGLISH]: "specs/qualities", [LanguageCode.FRENCH]: "qualités", [LanguageCode.PORTUGUESE]: "qualidades", [LanguageCode.MANDARIN]: "條件" } },
        
        // Hair
        { thai: "ผมยาว", phonetic: "phǒm yaao", translations: { [LanguageCode.ENGLISH]: "long hair", [LanguageCode.FRENCH]: "cheveux longs", [LanguageCode.PORTUGUESE]: "cabelo comprido", [LanguageCode.MANDARIN]: "長髮" } },
        { thai: "ผมสั้น", phonetic: "phǒm sân", translations: { [LanguageCode.ENGLISH]: "short hair", [LanguageCode.FRENCH]: "cheveux courts", [LanguageCode.PORTUGUESE]: "cabelo curto", [LanguageCode.MANDARIN]: "短髮" } },
        { thai: "หัวล้าน", phonetic: "hǔa láan", translations: { [LanguageCode.ENGLISH]: "bald", [LanguageCode.FRENCH]: "chauve", [LanguageCode.PORTUGUESE]: "careca", [LanguageCode.MANDARIN]: "禿頭" } },
        
        // Clothing items
        { thai: "เสื้อผ้า", phonetic: "sʉ̂a-phâa", translations: { [LanguageCode.ENGLISH]: "clothes/clothing", [LanguageCode.FRENCH]: "vêtements", [LanguageCode.PORTUGUESE]: "roupas", [LanguageCode.MANDARIN]: "衣服" } },
        { thai: "กางเกง", phonetic: "gaang-geeng", translations: { [LanguageCode.ENGLISH]: "pants/trousers", [LanguageCode.FRENCH]: "pantalon", [LanguageCode.PORTUGUESE]: "calças", [LanguageCode.MANDARIN]: "褲子" } },
        { thai: "กระโปรง", phonetic: "grà-bprooŋ", translations: { [LanguageCode.ENGLISH]: "skirt", [LanguageCode.FRENCH]: "jupe", [LanguageCode.PORTUGUESE]: "saia", [LanguageCode.MANDARIN]: "裙子" } },
        { thai: "ชุด", phonetic: "chút", translations: { [LanguageCode.ENGLISH]: "outfit/suit/dress", [LanguageCode.FRENCH]: "tenue/costume/robe", [LanguageCode.PORTUGUESE]: "roupa/terno/vestido", [LanguageCode.MANDARIN]: "套裝/洋裝" } },
        { thai: "รองเท้า", phonetic: "rɔɔŋ-tháao", translations: { [LanguageCode.ENGLISH]: "shoes", [LanguageCode.FRENCH]: "chaussures", [LanguageCode.PORTUGUESE]: "sapatos", [LanguageCode.MANDARIN]: "鞋子" } },
        { thai: "หมวก", phonetic: "mùak", translations: { [LanguageCode.ENGLISH]: "hat/cap", [LanguageCode.FRENCH]: "chapeau/casquette", [LanguageCode.PORTUGUESE]: "chapéu/boné", [LanguageCode.MANDARIN]: "帽子" } },
        
        // Personality traits - Positive
        { thai: "ใจดี", phonetic: "jai-dii", translations: { [LanguageCode.ENGLISH]: "kind/nice", [LanguageCode.FRENCH]: "gentil(le)", [LanguageCode.PORTUGUESE]: "gentil/legal", [LanguageCode.MANDARIN]: "善良" } },
        { thai: "ขยัน", phonetic: "khà-yǎn", translations: { [LanguageCode.ENGLISH]: "diligent/hardworking", [LanguageCode.FRENCH]: "diligent(e)/travailleur", [LanguageCode.PORTUGUESE]: "diligente/trabalhador", [LanguageCode.MANDARIN]: "勤奮" } },
        { thai: "ฉลาด", phonetic: "chà-làat", translations: { [LanguageCode.ENGLISH]: "smart/clever", [LanguageCode.FRENCH]: "intelligent(e)", [LanguageCode.PORTUGUESE]: "inteligente", [LanguageCode.MANDARIN]: "聰明" } },
        { thai: "สนุก", phonetic: "sà-nùk", translations: { [LanguageCode.ENGLISH]: "fun/enjoyable", [LanguageCode.FRENCH]: "amusant(e)", [LanguageCode.PORTUGUESE]: "divertido(a)", [LanguageCode.MANDARIN]: "有趣" } },
        { thai: "ฮา", phonetic: "haa", translations: { [LanguageCode.ENGLISH]: "funny/hilarious", [LanguageCode.FRENCH]: "drôle/hilarant", [LanguageCode.PORTUGUESE]: "engraçado/hilário", [LanguageCode.MANDARIN]: "搞笑" } },
        { thai: "เซ็ง", phonetic: "seng", translations: { [LanguageCode.ENGLISH]: "boring/lame", [LanguageCode.FRENCH]: "ennuyeux/nul", [LanguageCode.PORTUGUESE]: "chato/sem graça", [LanguageCode.MANDARIN]: "無聊" } },
        { thai: "เท่ห์", phonetic: "thêe", translations: { [LanguageCode.ENGLISH]: "cool person", [LanguageCode.FRENCH]: "personne cool", [LanguageCode.PORTUGUESE]: "pessoa descolada", [LanguageCode.MANDARIN]: "酷的人" } },
        { thai: "น่ารัก", phonetic: "nâa-rák", translations: { [LanguageCode.ENGLISH]: "cute/sweet", [LanguageCode.FRENCH]: "mignon(ne)/adorable", [LanguageCode.PORTUGUESE]: "fofo(a)/querido(a)", [LanguageCode.MANDARIN]: "可愛" } },
        { thai: "เจ๋ง", phonetic: "jěng", translations: { [LanguageCode.ENGLISH]: "awesome/cool", [LanguageCode.FRENCH]: "génial/cool", [LanguageCode.PORTUGUESE]: "incrível/legal", [LanguageCode.MANDARIN]: "厲害" } },
        { thai: "มั่นใจ", phonetic: "mân-jai", translations: { [LanguageCode.ENGLISH]: "confident", [LanguageCode.FRENCH]: "confiant(e)", [LanguageCode.PORTUGUESE]: "confiante", [LanguageCode.MANDARIN]: "自信" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Describing People in Thai: Cultural Sensitivity",
                [LanguageCode.FRENCH]: "Décrire les gens en thaï : Sensibilité culturelle",
                [LanguageCode.PORTUGUESE]: "Descrevendo Pessoas em Tailandês: Sensibilidade Cultural",
                [LanguageCode.MANDARIN]: "用泰語描述人物：文化敏感性",
            },
            content: {
                [LanguageCode.ENGLISH]: "Describing people in Thai requires cultural awareness. Here's what you need to know:\n\n**Physical Appearance:**\n\n**Body Shape & Build:**\n• **รูปร่าง (rûup-râang)** = body shape/figure\n  - \"รูปร่างดี\" (rûup-râang dii) = good figure\n• **สันทัด (sǎn-thát)** = well-proportioned/fit\n• **ตัวเล็ก (dtuua lék)** = small-framed/petite\n• **ตัวใหญ่ (dtuua yài)** = large-framed/big\n• **ล่ำ (lâm)** = muscular/buff\n\n**CULTURAL NOTE:** Thais are often quite direct about physical appearance. It's common to hear comments like \"คุณอ้วนขึ้น\" (you've gotten fatter) or \"ผอมลง\" (you've gotten thinner). While this might seem rude in Western cultures, it's generally not meant as an insult in Thailand - just an observation. However, as a foreigner, be more cautious and polite!\n\n**Facial Features:**\n• **หน้าตา (nâa-dtaa)** = face/appearance\n  - \"หน้าตาดี\" (nâa-dtaa dii) = good-looking\n• **หล่อ (lɔ̀ɔ)** = handsome (for men)\n  - Very commonly used compliment!\n• **สวย (sǔay)** = beautiful/pretty (for any gender)\n  - Can also describe things, not just people\n• **น่ารัก (nâa-rák)** = cute/adorable\n  - Used for both people and things\n  - Very popular compliment in Thailand!\n\n**Skin Tone:**\n• **ขาว (khǎao)** = white/pale skin\n• **คล้ำ (khláam)** = dark skin\n\n**IMPORTANT CULTURAL NOTE:** Thailand has a strong cultural preference for lighter skin, which is associated with beauty and higher social status. You'll see many skin-whitening products. However, this is a sensitive topic. As a foreigner, avoid making comments about skin color. If you must describe someone, focus on other features.\n\n**Hair:**\n• **ผมยาว (phǒm yaao)** = long hair\n• **ผมสั้น (phǒm sân)** = short hair\n• **หัวล้าน (hǔa láan)** = bald\n  - Note: ผม means both \"hair\" and \"I\" (for males)!\n\n**Clothing Vocabulary:**\n\n• **เสื้อ (sʉ̂a)** = shirt/top (general upper body clothing)\n  - **เสื้อยืด** (sʉ̂a yʉ̂ʉt) = t-shirt\n  - **เสื้อเชิ้ต** (sʉ̂a chə́ət) = dress shirt\n• **กางเกง (gaang-geeng)** = pants/trousers\n  - **กางเกงยีนส์** (gaang-geeng yiin) = jeans\n  - **กางเกงขาสั้น** (gaang-geeng khǎa sân) = shorts\n• **กระโปรง (grà-bprooŋ)** = skirt\n• **ชุด (chút)** = outfit/suit/dress/set\n  - Very versatile word!\n  - **ชุดไทย** (chút thai) = Thai traditional dress\n  - **ชุดทำงาน** (chút tham-ngaan) = work outfit\n  - **ชุดนอน** (chút nɔɔn) = pajamas\n• **รองเท้า (rɔɔŋ-tháao)** = shoes\n  - Literal: \"support\" + \"foot\"\n• **แว่นตา (wɛ̂n-dtaa)** = glasses\n  - **แว่นกันแดด** (wɛ̂n gan dɛ̀ɛt) = sunglasses\n\n**Personality Traits:**\n\n**Positive Traits:**\n• **ใจดี (jai-dii)** = kind/nice\n  - Literal: \"heart\" + \"good\"\n  - One of the highest compliments!\n• **ขยัน (khà-yǎn)** = diligent/hardworking\n  - Very valued in Thai culture\n• **ฉลาด (chà-làat)** = smart/clever\n• **สนุก (sà-nùk)** = fun/enjoyable\n  - Can describe people or activities\n  - \"เขาสนุกมาก\" = He's very fun (to be around)\n• **ตลก (dtà-lòk)** = funny\n  - \"คนตลก\" (khon dtà-lòk) = funny person/comedian\n• **เงียบ (ŋîap)** = quiet\n  - Not necessarily negative in Thai culture\n• **พูดเยอะ (phûut yə́)** = talkative\n  - Literal: \"speak\" + \"a lot\"\n• **เป็นมิตร (bpen-mít)** = friendly\n• **อดทน (òt-thon)** = patient\n• **มั่นใจ (mân-jai)** = confident\n  - Literal: \"firm\" + \"heart\"\n\n**Describing Someone - Sentence Patterns:**\n\n1. **[Person] + [adjective]**\n   - เขาสูง (khǎo sǔung) = He/She is tall\n   - คุณสวย (khun sǔay) = You're beautiful\n\n2. **[Person] + [adjective] + มาก (mâak) = very**\n   - เขาหล่อมาก (khǎo lɔ̀ɔ mâak) = He's very handsome\n   - เธอใจดีมาก (thəə jai-dii mâak) = She's very kind\n\n3. **[Person] + ใส่ (sài) + [clothing]**\n   - เขาใส่เสื้อสีแดง (khǎo sài sʉ̂a sǐi dɛɛŋ) = He's wearing a red shirt\n   - เธอใส่กระโปรง (thəə sài grà-bprooŋ) = She's wearing a skirt\n\n4. **[Person] + มี (mii) + [feature]**\n   - เขามีผมยาว (khǎo mii phǒm yaao) = He/She has long hair\n   - คุณมีแว่นตา (khun mii wɛ̂n-dtaa) = You have glasses\n\n**Complete Description Example:**\n\n\"เพื่อนผมชื่อสมชาย เขาสูงและล่ำ หน้าตาหล่อมาก มีผมสั้นและใส่แว่นตา วันนี้เขาใส่เสื้อเชิ้ตสีขาวกับกางเกงยีนส์ เขาเป็นคนใจดีและตลกมาก\"\n\n(My friend's name is Somchai. He's tall and muscular. Very handsome face. Has short hair and wears glasses. Today he's wearing a white dress shirt with jeans. He's a very kind and funny person.)\n\n**Cultural Tips:**\n\n1. **Compliments are common:** Thais frequently compliment appearance, especially saying someone is สวย (beautiful), หล่อ (handsome), or น่ารัก (cute).\n\n2. **Age comments:** Thais might comment on age-related changes. \"แก่ขึ้น\" (gɛ̀ɛ khʉ̂n) = \"You've gotten older\" is not necessarily rude!\n\n3. **Weight comments:** As mentioned, direct comments about weight are common. Try to not take offense if someone says you've gained or lost weight.\n\n4. **Nicknames:** Most Thais go by nicknames (ชื่อเล่น - chʉ̂ʉ lên) which are often based on appearance or personality. Common ones: เล็ก (small), ใหญ่ (big), ดำ (dark), ขาว (white).\n\n5. **Modesty:** When receiving compliments, Thais often deflect or downplay them. If someone says you're สวย/หล่อ, you might respond with \"ไม่หรอก\" (mâi rɔ̀ɔk) = \"Not really\" or \"เกินไป\" (gəən bpai) = \"Too much/You exaggerate.\"\n\n6. **Respect with elders:** When describing older people, be more respectful and focus on positive traits. Use คุณ (khun) as a respectful title.\n\nRemember: While Thais can be direct about appearance, as a foreigner learning the language, err on the side of politeness and focus on positive traits!",
                [LanguageCode.FRENCH]: "Décrire les gens en thaï nécessite une conscience culturelle. Voici ce que vous devez savoir :\n\n**Apparence physique :**\n\n**Taille et corpulence :**\n• **สูง (sǔung)** = grand(e)\n• **เตี้ย (dtîa)** = petit(e) (taille)\n• **ผอม (phɔ̌ɔm)** = mince/maigre\n• **อ้วน (ûan)** = gros(se) (à utiliser avec précaution !)\n• **ล่ำ (lâm)** = musclé(e)\n\n**NOTE CULTURELLE :** Les Thaïlandais sont souvent assez directs sur l'apparence physique. Il est courant d'entendre des commentaires comme \"คุณอ้วนขึ้น\" (vous avez grossi) ou \"ผอมลง\" (vous avez maigri). Bien que cela puisse sembler impoli dans les cultures occidentales, ce n'est généralement pas une insulte en Thaïlande - juste une observation.\n\n**Traits du visage :**\n• **หน้าตา (nâa-dtaa)** = visage/apparence\n• **หล่อ (lɔ̀ɔ)** = beau (pour les hommes)\n• **สวย (sǔay)** = belle/jolie (pour all people)\n• **น่ารัก (nâa-rák)** = mignon(ne)/adorable\n\n**Teint de peau :**\n• **ขาว (khǎao)** = peau blanche/pâle\n• **คล้ำ (khláam)** = peau foncée\n\n**Vêtements :**\n• **เสื้อ (sʉ̂a)** = chemise/haut\n• **กางเกง (gaang-geeng)** = pantalon\n• **กระโปรง (grà-bprooŋ)** = jupe\n• **ชุด (chút)** = tenue/costume/robe\n• **รองเท้า (rɔɔŋ-tháao)** = chaussures\n• **แว่นตา (wɛ̂n-dtaa)** = lunettes\n\n**Traits de personnalité :**\n• **ใจดี (jai-dii)** = gentil(le)\n• **ขยัน (khà-yǎn)** = diligent(e)/travailleur\n• **ฉลาด (chà-làat)** = intelligent(e)\n• **สนุก (sà-nùk)** = amusant(e)\n• **ตลก (dtà-lòk)** = drôle",
                [LanguageCode.PORTUGUESE]: "Descrever pessoas em tailandês requer consciência cultural. Aqui está o que você precisa saber:\n\n**Aparência física:**\n\n**Altura e constituição:**\n• **สูง (sǔung)** = alto(a)\n• **เตี้ย (dtîa)** = baixo(a) (altura)\n• **ผอม (phɔ̌ɔm)** = magro(a)\n• **อ้วน (ûan)** = gordo(a) (use com cuidado!)\n• **ล่ำ (lâm)** = musculoso(a)\n\n**NOTA CULTURAL:** Os tailandeses são frequentemente bastante diretos sobre aparência física. É comum ouvir comentários como \"คุณอ้วนขึ้น\" (você /engordou) ou \"ผอมลง\" (você emagreceu). Embora isso possa parecer rude em culturas ocidentais, geralmente não é uma ofensa na Tailândia - apenas uma observação.\n\n**Características faciais:**\n• **หน้าตา (nâa-dtaa)** = rosto/aparência\n• **หล่อ (lɔ̀ɔ)** = bonito (para homens)\n• **สวย (sǔay)** = bonita/linda (para all people)\n• **น่ารัก (nâa-rák)** = fofo(a)/adorável\n\n**Tom de pele:**\n• **ขาว (khǎao)** = pele branca/pálida\n• **คล้ำ (khláam)** = pele escura\n\n**Roupas:**\n• **เสื้อ (sʉ̂a)** = camisa/blusa\n• **กางเกง (gaang-geeng)** = calças\n• **กระโปรง (grà-bprooŋ)** = saia\n• **ชุด (chút)** = roupa/terno/vestido\n• **รองเท้า (rɔɔŋ-tháao)** = sapatos\n• **แว่นตา (wɛ̂n-dtaa)** = óculos\n\n**Traços de personalidade:**\n• **ใจดี (jai-dii)** = gentil/legal\n• **ขยัน (khà-yǎn)** = diligente/trabalhador\n• **ฉลาด (chà-làat)** = inteligente\n• **สนุก (sà-nùk)** = divertido(a)\n• **ตลก (dtà-lòk)** = engraçado(a)",
                [LanguageCode.MANDARIN]: "用泰語描述人物需要文化意識。以下是你需要知道的：\n\n**身體外貌：**\n\n**身高和體型：**\n• **สูง (sǔung)** = 高\n• **เตี้ย (dtîa)** = 矮（身高）\n• **ผอม (phɔ̌ɔm)** = 瘦\n• **อ้วน (ûan)** = 胖（小心使用！）\n• **ล่ำ (lâm)** = 健壯\n\n**文化注意：**泰國人對身體外貌通常相當直接。聽到「คุณอ้วนขึ้น」（你變胖了）或「ผอมลง」（你變瘦了）這樣的評論很常見。雖然這在西方文化中可能顯得粗魯，但在泰國通常不是侮辱 - 只是觀察。\n\n**面部特徵：**\n• **หน้าตา (nâa-dtaa)** = 面容/外表\n• **หล่อ (lɔ̀ɔ)** = 帥（男性）\n• **สวย (sǔay)** = 美麗/漂亮（人性）\n• **น่ารัก (nâa-rák)** = 可愛\n\n**膚色：**\n• **ขาว (khǎao)** = 白皮膚/蒼白\n• **คล้ำ (khláam)** = 黑皮膚\n\n**服裝：**\n• **เสื้อ (sʉ̂a)** = 上衣\n• **กางเกง (gaang-geeng)** = 褲子\n• **กระโปรง (grà-bprooŋ)** = 裙子\n• **ชุด (chút)** = 套裝/洋裝\n• **รองเท้า (rɔɔŋ-tháao)** = 鞋子\n• **แว่นตา (wɛ̂n-dtaa)** = 眼鏡\n\n**性格特質：**\n• **ใจดี (jai-dii)** = 善良\n• **ขยัน (khà-yǎn)** = 勤奮\n• **ฉลาด (chà-làat)** = 聰明\n• **สนุก (sà-nùk)** = 有趣\n• **ตลก (dtà-lòk)** = 搞笑",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the physical descriptions.",
                [LanguageCode.FRENCH]: "Associez les descriptions physiques.",
                [LanguageCode.PORTUGUESE]: "Relacione as descrições físicas.",
                [LanguageCode.MANDARIN]: "配對身體描述。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "body shape/figure", [LanguageCode.FRENCH]: "silhouette/forme", [LanguageCode.PORTUGUESE]: "forma do corpo/figura", [LanguageCode.MANDARIN]: "體型/身材" }, answer: { [LanguageCode.ENGLISH]: "รูปร่าง", [LanguageCode.FRENCH]: "รูปร่าง", [LanguageCode.PORTUGUESE]: "รูปร่าง", [LanguageCode.MANDARIN]: "รูปร่าง" } },
                { prompt: { [LanguageCode.ENGLISH]: "good body/fit", [LanguageCode.FRENCH]: "bonne silhouette", [LanguageCode.PORTUGUESE]: "corpo bonito/em forma", [LanguageCode.MANDARIN]: "身材好" }, answer: { [LanguageCode.ENGLISH]: "หุ่นดี", [LanguageCode.FRENCH]: "หุ่นดี", [LanguageCode.PORTUGUESE]: "หุ่นดี", [LanguageCode.MANDARIN]: "หุ่นดี" } },
                { prompt: { [LanguageCode.ENGLISH]: "hot/stunning (slang)", [LanguageCode.FRENCH]: "canon (argot)", [LanguageCode.PORTUGUESE]: "gato(a)/incrível (gíria)", [LanguageCode.MANDARIN]: "正/超讚（俚語）" }, answer: { [LanguageCode.ENGLISH]: "ปัง", [LanguageCode.FRENCH]: "ปัง", [LanguageCode.PORTUGUESE]: "ปัง", [LanguageCode.MANDARIN]: "ปัง" } },
                { prompt: { [LanguageCode.ENGLISH]: "specs/qualities (slang)", [LanguageCode.FRENCH]: "qualités (argot)", [LanguageCode.PORTUGUESE]: "qualidades (gíria)", [LanguageCode.MANDARIN]: "條件（俚語）" }, answer: { [LanguageCode.ENGLISH]: "สเปค", [LanguageCode.FRENCH]: "สเปค", [LanguageCode.PORTUGUESE]: "สเปค", [LanguageCode.MANDARIN]: "สเปค" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the descriptions with appearance words.",
                [LanguageCode.FRENCH]: "Complétez les descriptions avec des mots d'apparence.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições com palavras de aparência.",
                [LanguageCode.MANDARIN]: "用外貌詞完成描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เธอ___มาก ออกกำลังกายเป็นประจำ", [LanguageCode.FRENCH]: "Elle a___ elle fait de l'exercice régulièrement", [LanguageCode.PORTUGUESE]: "Ela tem___ faz exercício regularmente", [LanguageCode.MANDARIN]: "她___ 經常運動" }, correctAnswer: "หุ่นดี", end: { [LanguageCode.ENGLISH]: " (good body/fit)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พี่ชายผม___และ___ ทุกคนชอบ", [LanguageCode.FRENCH]: "Mon frère est___ et___ tout le monde l'aime", [LanguageCode.PORTUGUESE]: "Meu irmão é___ e___ todo mundo gosta", [LanguageCode.MANDARIN]: "我哥哥___ 和___ 大家喜歡" }, correctAnswer: "หล่อมาก เท่", end: { [LanguageCode.ENGLISH]: " (very handsome and cool)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "น้องสาวผม___มาก เธอ___", [LanguageCode.FRENCH]: "Ma petite sœur est très___ elle est___", [LanguageCode.PORTUGUESE]: "Minha irmã mais nova é muito___ ela é___", [LanguageCode.MANDARIN]: "我妹妹很___ 她___" }, correctAnswer: "น่ารัก ปัง", end: { [LanguageCode.ENGLISH]: " (cute, stunning)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เพื่อนผม___มาก เขา___", [LanguageCode.FRENCH]: "Mon ami est très___ il est___", [LanguageCode.PORTUGUESE]: "Meu amigo é muito___ ele é___", [LanguageCode.MANDARIN]: "我朋友很___ 他___" }, correctAnswer: "ฮา เจ๋ง", end: { [LanguageCode.ENGLISH]: " (funny, awesome)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the clothing items.",
                [LanguageCode.FRENCH]: "Associez les vêtements.",
                [LanguageCode.PORTUGUESE]: "Relacione as peças de roupa.",
                [LanguageCode.MANDARIN]: "配對服裝項目。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "clothes/clothing", [LanguageCode.FRENCH]: "vêtements", [LanguageCode.PORTUGUESE]: "roupas", [LanguageCode.MANDARIN]: "衣服" }, answer: { [LanguageCode.ENGLISH]: "เสื้อผ้า", [LanguageCode.FRENCH]: "เสื้อผ้า", [LanguageCode.PORTUGUESE]: "เสื้อผ้า", [LanguageCode.MANDARIN]: "เสื้อผ้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "pants/trousers", [LanguageCode.FRENCH]: "pantalon", [LanguageCode.PORTUGUESE]: "calças", [LanguageCode.MANDARIN]: "褲子" }, answer: { [LanguageCode.ENGLISH]: "กางเกง", [LanguageCode.FRENCH]: "กางเกง", [LanguageCode.PORTUGUESE]: "กางเกง", [LanguageCode.MANDARIN]: "กางเกง" } },
                { prompt: { [LanguageCode.ENGLISH]: "skirt", [LanguageCode.FRENCH]: "jupe", [LanguageCode.PORTUGUESE]: "saia", [LanguageCode.MANDARIN]: "裙子" }, answer: { [LanguageCode.ENGLISH]: "กระโปรง", [LanguageCode.FRENCH]: "กระโปรง", [LanguageCode.PORTUGUESE]: "กระโปรง", [LanguageCode.MANDARIN]: "กระโปรง" } },
                { prompt: { [LanguageCode.ENGLISH]: "shoes", [LanguageCode.FRENCH]: "chaussures", [LanguageCode.PORTUGUESE]: "sapatos", [LanguageCode.MANDARIN]: "鞋子" }, answer: { [LanguageCode.ENGLISH]: "รองเท้า", [LanguageCode.FRENCH]: "รองเท้า", [LanguageCode.PORTUGUESE]: "รองเท้า", [LanguageCode.MANDARIN]: "รองเท้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "hat/cap", [LanguageCode.FRENCH]: "chapeau/casquette", [LanguageCode.PORTUGUESE]: "chapéu/boné", [LanguageCode.MANDARIN]: "帽子" }, answer: { [LanguageCode.ENGLISH]: "หมวก", [LanguageCode.FRENCH]: "หมวก", [LanguageCode.PORTUGUESE]: "หมวก", [LanguageCode.MANDARIN]: "หมวก" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct word to describe what people are wearing.",
                [LanguageCode.FRENCH]: "Choisissez le bon mot pour décrire ce que les gens portent.",
                [LanguageCode.PORTUGUESE]: "Escolha a palavra correta para descrever o que as pessoas estão vestindo.",
                [LanguageCode.MANDARIN]: "選擇正確的詞來描述人們穿什麼。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "She's wearing a beautiful dress to the party. เธอใส่___สวยไปงานเลี้ยง", [LanguageCode.FRENCH]: "Elle porte une belle robe à la fête. เธอใส่___สวยไปงานเลี้ยง", [LanguageCode.PORTUGUESE]: "Ela está usando um vestido bonito para a festa. เธอใส่___สวยไปงานเลี้ยง", [LanguageCode.MANDARIN]: "她穿漂亮的洋裝去派對。เธอใส่___สวยไปงานเลี้ยง" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กางเกง", [LanguageCode.FRENCH]: "กางเกง", [LanguageCode.PORTUGUESE]: "กางเกง", [LanguageCode.MANDARIN]: "กางเกง" },
                        { [LanguageCode.ENGLISH]: "ชุด", [LanguageCode.FRENCH]: "ชุด", [LanguageCode.PORTUGUESE]: "ชุด", [LanguageCode.MANDARIN]: "ชุด" },
                        { [LanguageCode.ENGLISH]: "รองเท้า", [LanguageCode.FRENCH]: "รองเท้า", [LanguageCode.PORTUGUESE]: "รองเท้า", [LanguageCode.MANDARIN]: "รองเท้า" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "He wears a hat when it's sunny. เขาใส่___เมื่ออากาศร้อน", [LanguageCode.FRENCH]: "Il porte un chapeau quand il fait soleil. เขาใส่___เมื่ออากาศร้อน", [LanguageCode.PORTUGUESE]: "Ele usa chapéu quando está ensolarado. เขาใส่___เมื่ออากาศร้อน", [LanguageCode.MANDARIN]: "他天氣熱時戴帽子。เขาใส่___เมื่ออากาศร้อน" },
                    options: [
                        { [LanguageCode.ENGLISH]: "หมวก", [LanguageCode.FRENCH]: "หมวก", [LanguageCode.PORTUGUESE]: "หมวก", [LanguageCode.MANDARIN]: "หมวก" },
                        { [LanguageCode.ENGLISH]: "เสื้อผ้า", [LanguageCode.FRENCH]: "เสื้อผ้า", [LanguageCode.PORTUGUESE]: "เสื้อผ้า", [LanguageCode.MANDARIN]: "เสื้อผ้า" },
                        { [LanguageCode.ENGLISH]: "กระโปรง", [LanguageCode.FRENCH]: "กระโปรง", [LanguageCode.PORTUGUESE]: "กระโปรง", [LanguageCode.MANDARIN]: "กระโปรง" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "I'm wearing jeans and a t-shirt today. วันนี้ผมใส่___กับเสื้อยืด", [LanguageCode.FRENCH]: "Je porte un jean et un t-shirt aujourd'hui. วันนี้ผมใส่___กับเสื้อยืด", [LanguageCode.PORTUGUESE]: "Estou usando jeans e camiseta hoje. วันนี้ผมใส่___กับเสื้อยืด", [LanguageCode.MANDARIN]: "今天我穿牛仔褲和T恤。วันนี้ผมใส่___กับเสื้อยืด" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กระโปรง", [LanguageCode.FRENCH]: "กระโปรง", [LanguageCode.PORTUGUESE]: "กระโปรง", [LanguageCode.MANDARIN]: "กระโปรง" },
                        { [LanguageCode.ENGLISH]: "กางเกง", [LanguageCode.FRENCH]: "กางเกง", [LanguageCode.PORTUGUESE]: "กางเกง", [LanguageCode.MANDARIN]: "กางเกง" },
                        { [LanguageCode.ENGLISH]: "ชุด", [LanguageCode.FRENCH]: "ชุด", [LanguageCode.PORTUGUESE]: "ชุด", [LanguageCode.MANDARIN]: "ชุด" },
                    ],
                    correctIndex: 1
                },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete sentences about what people are wearing.",
                [LanguageCode.FRENCH]: "Complétez les phrases sur ce que les gens portent.",
                [LanguageCode.PORTUGUESE]: "Complete frases sobre o que as pessoas estão vestindo.",
                [LanguageCode.MANDARIN]: "完成關於人們穿著的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "วันนี้ผมซื้อ___ใหม่", [LanguageCode.FRENCH]: "Aujourd'hui j'achète de nouveaux___", [LanguageCode.PORTUGUESE]: "Hoje compro___ novas", [LanguageCode.MANDARIN]: "今天我買新___" }, correctAnswer: "เสื้อผ้า", end: { [LanguageCode.ENGLISH]: " (clothes)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอใส่___สั้นเพราะอากาศร้อน", [LanguageCode.FRENCH]: "Elle porte une___ courte parce qu'il fait chaud", [LanguageCode.PORTUGUESE]: "Ela está usando___ curta porque está quente", [LanguageCode.MANDARIN]: "她穿短___因為天氣熱" }, correctAnswer: "กระโปรง", end: { [LanguageCode.ENGLISH]: " (skirt)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เขาใส่___เมื่อออกไปข้างนอก", [LanguageCode.FRENCH]: "Il porte un___ quand il sort", [LanguageCode.PORTUGUESE]: "Ele usa___ quando sai", [LanguageCode.MANDARIN]: "他出去時戴___" }, correctAnswer: "หมวก", end: { [LanguageCode.ENGLISH]: " (hat)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พี่สาวผมใส่___ไปทำงานทุกวัน", [LanguageCode.FRENCH]: "Ma sœur porte un___ pour aller au travail tous les jours", [LanguageCode.PORTUGUESE]: "Minha irmã usa___ para ir trabalhar todo dia", [LanguageCode.MANDARIN]: "我姐姐每天穿___去上班" }, correctAnswer: "ชุดทำงาน", end: { [LanguageCode.ENGLISH]: " (work outfit)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the personality traits.",
                [LanguageCode.FRENCH]: "Associez les traits de personnalité.",
                [LanguageCode.PORTUGUESE]: "Relacione os traços de personalidade.",
                [LanguageCode.MANDARIN]: "配對性格特質。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "kind/nice", [LanguageCode.FRENCH]: "gentil(le)", [LanguageCode.PORTUGUESE]: "gentil/legal", [LanguageCode.MANDARIN]: "善良" }, answer: { [LanguageCode.ENGLISH]: "ใจดี", [LanguageCode.FRENCH]: "ใจดี", [LanguageCode.PORTUGUESE]: "ใจดี", [LanguageCode.MANDARIN]: "ใจดี" } },
                { prompt: { [LanguageCode.ENGLISH]: "diligent/hardworking", [LanguageCode.FRENCH]: "diligent(e)/travailleur", [LanguageCode.PORTUGUESE]: "diligente/trabalhador", [LanguageCode.MANDARIN]: "勤奮" }, answer: { [LanguageCode.ENGLISH]: "ขยัน", [LanguageCode.FRENCH]: "ขยัน", [LanguageCode.PORTUGUESE]: "ขยัน", [LanguageCode.MANDARIN]: "ขยัน" } },
                { prompt: { [LanguageCode.ENGLISH]: "smart/clever", [LanguageCode.FRENCH]: "intelligent(e)", [LanguageCode.PORTUGUESE]: "inteligente", [LanguageCode.MANDARIN]: "聰明" }, answer: { [LanguageCode.ENGLISH]: "ฉลาด", [LanguageCode.FRENCH]: "ฉลาด", [LanguageCode.PORTUGUESE]: "ฉลาด", [LanguageCode.MANDARIN]: "ฉลาด" } },
                { prompt: { [LanguageCode.ENGLISH]: "funny", [LanguageCode.FRENCH]: "drôle", [LanguageCode.PORTUGUESE]: "engraçado(a)", [LanguageCode.MANDARIN]: "搞笑" }, answer: { [LanguageCode.ENGLISH]: "ตลก", [LanguageCode.FRENCH]: "ตลก", [LanguageCode.PORTUGUESE]: "ตลก", [LanguageCode.MANDARIN]: "ตลก" } },
                { prompt: { [LanguageCode.ENGLISH]: "friendly", [LanguageCode.FRENCH]: "amical(e)", [LanguageCode.PORTUGUESE]: "amigável", [LanguageCode.MANDARIN]: "友好" }, answer: { [LanguageCode.ENGLISH]: "เป็นมิตร", [LanguageCode.FRENCH]: "เป็นมิตร", [LanguageCode.PORTUGUESE]: "เป็นมิตร", [LanguageCode.MANDARIN]: "เป็นมิตร" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the personality descriptions.",
                [LanguageCode.FRENCH]: "Complétez les descriptions de personnalité.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições de personalidade.",
                [LanguageCode.MANDARIN]: "完成性格描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เพื่อนผม___มาก ช่วยคนอื่นเสมอ", [LanguageCode.FRENCH]: "Mon ami est très___ il aide toujours les autres", [LanguageCode.PORTUGUESE]: "Meu amigo é muito___ sempre ajuda os outros", [LanguageCode.MANDARIN]: "我朋友很___ 總是幫助別人" }, correctAnswer: "ใจดี", end: { [LanguageCode.ENGLISH]: " (kind)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอ___มาก เรียนหนังสือทุกวัน", [LanguageCode.FRENCH]: "Elle est très___ elle étudie tous les jours", [LanguageCode.PORTUGUESE]: "Ela é muito___ estuda todo dia", [LanguageCode.MANDARIN]: "她很___ 每天學習" }, correctAnswer: "ขยัน", end: { [LanguageCode.ENGLISH]: " (diligent)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พี่ชาย___และ___ ทำให้ทุกคนหัวเราะ", [LanguageCode.FRENCH]: "Mon frère est___ et___ il fait rire tout le monde", [LanguageCode.PORTUGUESE]: "Meu irmão é___ e___ faz todo mundo rir", [LanguageCode.MANDARIN]: "我哥哥___ 和___ 讓大家笑" }, correctAnswer: "สนุก ตลก", end: { [LanguageCode.ENGLISH]: " (fun and funny)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ครูของเรา___มาก รอเด็กได้นาน", [LanguageCode.FRENCH]: "Notre professeur est très___ il peut attendre les enfants longtemps", [LanguageCode.PORTUGUESE]: "Nosso professor é muito___ pode esperar as crianças por muito tempo", [LanguageCode.MANDARIN]: "我們老師很___ 可以等孩子很久" }, correctAnswer: "อดทน", end: { [LanguageCode.ENGLISH]: " (patient)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the description sentences in correct order.",
                [LanguageCode.FRENCH]: "Mettez les phrases de description dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque as frases de descrição na ordem correta.",
                [LanguageCode.MANDARIN]: "將描述句子按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["เพื่อน", "ผม", "สูง", "และ", "ผอม"], hint: { [LanguageCode.ENGLISH]: "My friend is tall and thin.", [LanguageCode.FRENCH]: "Mon ami est grand et mince.", [LanguageCode.PORTUGUESE]: "Meu amigo é alto e magro.", [LanguageCode.MANDARIN]: "我朋友又高又瘦。" } },
                { correctOrder: ["เธอ", "ใส่", "กระโปรง", "สวย"], hint: { [LanguageCode.ENGLISH]: "She's wearing a beautiful skirt.", [LanguageCode.FRENCH]: "Elle porte une belle jupe.", [LanguageCode.PORTUGUESE]: "Ela está usando uma saia bonita.", [LanguageCode.MANDARIN]: "她穿漂亮的裙子。" } },
                { correctOrder: ["พี่สาว", "ผม", "หน้าตา", "สวย", "มาก"], hint: { [LanguageCode.ENGLISH]: "My older sister is very beautiful.", [LanguageCode.FRENCH]: "Ma sœur aînée est très belle.", [LanguageCode.PORTUGUESE]: "Minha irmã mais velha é muito bonita.", [LanguageCode.MANDARIN]: "我姐姐很漂亮。" } },
                { correctOrder: ["เขา", "เป็นคน", "ใจดี", "และ", "ขยัน"], hint: { [LanguageCode.ENGLISH]: "He is a kind and hardworking person.", [LanguageCode.FRENCH]: "Il est une personne gentille et travailleuse.", [LanguageCode.PORTUGUESE]: "Ele é uma pessoa gentil e trabalhadora.", [LanguageCode.MANDARIN]: "他是善良又勤奮的人。" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best description for each person.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure description pour chaque personne.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor descrição para cada pessoa.",
                [LanguageCode.MANDARIN]: "為每個人選擇最佳描述。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Someone who makes everyone laugh at parties:", [LanguageCode.FRENCH]: "Quelqu'un qui fait rire tout le monde aux fêtes :", [LanguageCode.PORTUGUESE]: "Alguém que faz todo mundo rir em festas:", [LanguageCode.MANDARIN]: "在派對上讓大家笑的人：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เงียบ", [LanguageCode.FRENCH]: "เงียบ", [LanguageCode.PORTUGUESE]: "เงียบ", [LanguageCode.MANDARIN]: "เงียบ" },
                        { [LanguageCode.ENGLISH]: "ตลก", [LanguageCode.FRENCH]: "ตลก", [LanguageCode.PORTUGUESE]: "ตลก", [LanguageCode.MANDARIN]: "ตลก" },
                        { [LanguageCode.ENGLISH]: "ผอม", [LanguageCode.FRENCH]: "ผอม", [LanguageCode.PORTUGUESE]: "ผอม", [LanguageCode.MANDARIN]: "ผอม" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "A person who studies every day and gets good grades:", [LanguageCode.FRENCH]: "Une personne qui étudie tous les jours et obtient de bonnes notes :", [LanguageCode.PORTUGUESE]: "Uma pessoa que estuda todo dia e tira boas notas:", [LanguageCode.MANDARIN]: "每天學習成績好的人：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขยันและฉลาด", [LanguageCode.FRENCH]: "ขยันและฉลาด", [LanguageCode.PORTUGUESE]: "ขยันและฉลาด", [LanguageCode.MANDARIN]: "ขยันและฉลาด" },
                        { [LanguageCode.ENGLISH]: "สูงและผอม", [LanguageCode.FRENCH]: "สูงและผอม", [LanguageCode.PORTUGUESE]: "สูงและผอม", [LanguageCode.MANDARIN]: "สูงและผอม" },
                        { [LanguageCode.ENGLISH]: "หล่อและสวย", [LanguageCode.FRENCH]: "หล่อและสวย", [LanguageCode.PORTUGUESE]: "หล่อและสวย", [LanguageCode.MANDARIN]: "หล่อและสวย" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Someone who always helps others without complaining:", [LanguageCode.FRENCH]: "Quelqu'un qui aide toujours les autres sans se plaindre :", [LanguageCode.PORTUGUESE]: "Alguém que sempre ajuda os outros sem reclamar:", [LanguageCode.MANDARIN]: "總是幫助別人不抱怨的人：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ใจดีและอดทน", [LanguageCode.FRENCH]: "ใจดีและอดทน", [LanguageCode.PORTUGUESE]: "ใจดีและอดทน", [LanguageCode.MANDARIN]: "ใจดีและอดทน" },
                        { [LanguageCode.ENGLISH]: "เตี้ยและอ้วน", [LanguageCode.FRENCH]: "เตี้ยและอ้วน", [LanguageCode.PORTUGUESE]: "เตี้ยและอ้วน", [LanguageCode.MANDARIN]: "เตี้ยและอ้วน" },
                        { [LanguageCode.ENGLISH]: "พูดเยอะ", [LanguageCode.FRENCH]: "พูดเยอะ", [LanguageCode.PORTUGUESE]: "พูดเยอะ", [LanguageCode.MANDARIN]: "พูดเยอะ" },
                    ],
                    correctIndex: 0
                },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the full person descriptions.",
                [LanguageCode.FRENCH]: "Complétez les descriptions complètes des personnes.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições completas das pessoas.",
                [LanguageCode.MANDARIN]: "完成完整的人物描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "พี่ชายผม___มาก มี___ยาว และใส่___", [LanguageCode.FRENCH]: "Mon frère est très___ a des___ longs et porte un___", [LanguageCode.PORTUGUESE]: "Meu irmão é muito___ tem___ comprido e usa___", [LanguageCode.MANDARIN]: "我哥哥很___ 有___長髮 戴___" }, correctAnswer: "หน้าตาดี ผม หมวก", end: { [LanguageCode.ENGLISH]: " (good-looking, hair, hat)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เพื่อนผมเป็นคน___และ___ ทำให้ทุกคนชอบ", [LanguageCode.FRENCH]: "Mon ami est___ et___ ce qui fait que tout le monde l'aime", [LanguageCode.PORTUGUESE]: "Meu amigo é___ e___ faz todo mundo gostar dele", [LanguageCode.MANDARIN]: "我朋友___ 和___ 讓大家喜歡" }, correctAnswer: "ใจดี สนุก", end: { [LanguageCode.ENGLISH]: " (kind, fun)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "คุณครู___และ___ เธอ___มาก", [LanguageCode.FRENCH]: "La professeure est___ et___ elle est très___", [LanguageCode.PORTUGUESE]: "A professora é___ e___ ela é muito___", [LanguageCode.MANDARIN]: "老師___ 和___ 她很___" }, correctAnswer: "ดูดี ใจดี อดทน", end: { [LanguageCode.ENGLISH]: " (attractive, kind, patient)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พ่อผม___และ___ เพราะออกกำลังกายทุกวัน", [LanguageCode.FRENCH]: "Mon père a___ et est___ parce qu'il fait de l'exercice tous les jours", [LanguageCode.PORTUGUESE]: "Meu pai tem___ e é___ porque faz exercício todo dia", [LanguageCode.MANDARIN]: "我爸爸___ 和___ 因為每天運動" }, correctAnswer: "หุ่นดี ล่ำ", end: { [LanguageCode.ENGLISH]: " (good body, muscular)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the hair descriptions.",
                [LanguageCode.FRENCH]: "Associez les descriptions de cheveux.",
                [LanguageCode.PORTUGUESE]: "Relacione as descrições de cabelo.",
                [LanguageCode.MANDARIN]: "配對頭髮描述。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "long hair", [LanguageCode.FRENCH]: "cheveux longs", [LanguageCode.PORTUGUESE]: "cabelo comprido", [LanguageCode.MANDARIN]: "長髮" }, answer: { [LanguageCode.ENGLISH]: "ผมยาว", [LanguageCode.FRENCH]: "ผมยาว", [LanguageCode.PORTUGUESE]: "ผมยาว", [LanguageCode.MANDARIN]: "ผมยาว" } },
                { prompt: { [LanguageCode.ENGLISH]: "short hair", [LanguageCode.FRENCH]: "cheveux courts", [LanguageCode.PORTUGUESE]: "cabelo curto", [LanguageCode.MANDARIN]: "短髮" }, answer: { [LanguageCode.ENGLISH]: "ผมสั้น", [LanguageCode.FRENCH]: "ผมสั้น", [LanguageCode.PORTUGUESE]: "ผมสั้น", [LanguageCode.MANDARIN]: "ผมสั้น" } },
                { prompt: { [LanguageCode.ENGLISH]: "bald", [LanguageCode.FRENCH]: "chauve", [LanguageCode.PORTUGUESE]: "careca", [LanguageCode.MANDARIN]: "禿頭" }, answer: { [LanguageCode.ENGLISH]: "หัวล้าน", [LanguageCode.FRENCH]: "หัวล้าน", [LanguageCode.PORTUGUESE]: "หัวล้าน", [LanguageCode.MANDARIN]: "หัวล้าน" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete sentences describing people.",
                [LanguageCode.FRENCH]: "Construisez des phrases complètes décrivant les gens.",
                [LanguageCode.PORTUGUESE]: "Construa frases completas descrevendo pessoas.",
                [LanguageCode.MANDARIN]: "組成描述人物的完整句子。",
            },
            sentences: [
                { correctOrder: ["เขา", "มี", "ผมยาว", "และ", "ใส่", "หมวก"], hint: { [LanguageCode.ENGLISH]: "He has long hair and wears a hat.", [LanguageCode.FRENCH]: "Il a les cheveux longs et porte un chapeau.", [LanguageCode.PORTUGUESE]: "Ele tem cabelo comprido e usa chapéu.", [LanguageCode.MANDARIN]: "他有長髮戴帽子。" } },
                { correctOrder: ["เธอ", "ซื้อ", "เสื้อผ้า", "ใหม่", "ที่", "ห้าง"], hint: { [LanguageCode.ENGLISH]: "She buys new clothes at the mall.", [LanguageCode.FRENCH]: "Elle achète de nouveaux vêtements au centre commercial.", [LanguageCode.PORTUGUESE]: "Ela compra roupas novas no shopping.", [LanguageCode.MANDARIN]: "她在商場買新衣服。" } },
                { correctOrder: ["พี่ชาย", "ผม", "หล่อ", "ล่ำ", "และ", "มั่นใจ"], hint: { [LanguageCode.ENGLISH]: "My older brother is handsome, muscular, and confident.", [LanguageCode.FRENCH]: "Mon frère aîné est beau, musclé et confiant.", [LanguageCode.PORTUGUESE]: "Meu irmão mais velho é bonito, musculoso e confiante.", [LanguageCode.MANDARIN]: "我哥哥帥、健壯又自信。" } },
                { correctOrder: ["เพื่อน", "ผม", "เป็นคน", "ฉลาด", "ขยัน", "และ", "เป็นมิตร"], hint: { [LanguageCode.ENGLISH]: "My friend is a smart, hardworking, and friendly person.", [LanguageCode.FRENCH]: "Mon ami est une personne intelligente, travailleuse et amicale.", [LanguageCode.PORTUGUESE]: "Meu amigo é uma pessoa inteligente, trabalhadora e amigável.", [LanguageCode.MANDARIN]: "我朋友是聰明、勤奮又友好的人。" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the most appropriate combination of traits.",
                [LanguageCode.FRENCH]: "Choisissez la combinaison de traits la plus appropriée.",
                [LanguageCode.PORTUGUESE]: "Escolha a combinação de características mais apropriada.",
                [LanguageCode.MANDARIN]: "選擇最合適的特質組合。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "A good teacher should be:", [LanguageCode.FRENCH]: "Un bon enseignant devrait être :", [LanguageCode.PORTUGUESE]: "Um bom professor deve ser:", [LanguageCode.MANDARIN]: "一個好老師應該是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อดทน ใจดี และฉลาด", [LanguageCode.FRENCH]: "อดทน ใจดี และฉลาด", [LanguageCode.PORTUGUESE]: "อดทน ใจดี และฉลาด", [LanguageCode.MANDARIN]: "อดทน ใจดี และฉลาด" },
                        { [LanguageCode.ENGLISH]: "สูง ผอม และหล่อ", [LanguageCode.FRENCH]: "สูง ผอม และหล่อ", [LanguageCode.PORTUGUESE]: "สูง ผอม และหล่อ", [LanguageCode.MANDARIN]: "สูง ผอม และหล่อ" },
                        { [LanguageCode.ENGLISH]: "เงียบ เตี้ย และอ้วน", [LanguageCode.FRENCH]: "เงียบ เตี้ย และอ้วน", [LanguageCode.PORTUGUESE]: "เงียบ เตี้ย และอ้วน", [LanguageCode.MANDARIN]: "เงียบ เตี้ย และอ้วน" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "A professional athlete is usually:", [LanguageCode.FRENCH]: "Un athlète professionnel est généralement :", [LanguageCode.PORTUGUESE]: "Um atleta profissional geralmente é:", [LanguageCode.MANDARIN]: "職業運動員通常是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เงียบและพูดเยอะ", [LanguageCode.FRENCH]: "เงียบและพูดเยอะ", [LanguageCode.PORTUGUESE]: "เงียบและพูดเยอะ", [LanguageCode.MANDARIN]: "เงียบและพูดเยอะ" },
                        { [LanguageCode.ENGLISH]: "ล่ำ ขยัน และมั่นใจ", [LanguageCode.FRENCH]: "ล่ำ ขยัน และมั่นใจ", [LanguageCode.PORTUGUESE]: "ล่ำ ขยัน และมั่นใจ", [LanguageCode.MANDARIN]: "ล่ำ ขยัน และมั่นใจ" },
                        { [LanguageCode.ENGLISH]: "หัวล้านและเตี้ย", [LanguageCode.FRENCH]: "หัวล้านและเตี้ย", [LanguageCode.PORTUGUESE]: "หัวล้านและเตี้ย", [LanguageCode.MANDARIN]: "หัวล้านและเตี้ย" },
                    ],
                    correctIndex: 1
                },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "Tell me about your best friend.", [LanguageCode.FRENCH]: "Parle-moi de ton meilleur ami.", [LanguageCode.PORTUGUESE]: "Me fale sobre seu melhor amigo.", [LanguageCode.MANDARIN]: "跟我說說你最好的朋友。" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "My best friend is named Nok. She's tall and has long hair. She's very beautiful and kind.", [LanguageCode.FRENCH]: "Ma meilleure amie s'appelle Nok. Elle est grande et a les cheveux longs. Elle est très belle et gentille.", [LanguageCode.PORTUGUESE]: "Minha melhor amiga se chama Nok. Ela é alta e tem cabelo comprido. Ela é muito bonita e gentil.", [LanguageCode.MANDARIN]: "我最好的朋友叫 Nok。她很高，有長髮。她很漂亮又善良。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What's her personality like?", [LanguageCode.FRENCH]: "Comment est sa personnalité ?", [LanguageCode.PORTUGUESE]: "Como é a personalidade dela?", [LanguageCode.MANDARIN]: "她的性格怎麼樣？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "She's very funny and friendly. Everyone likes her because she's patient and hardworking too.", [LanguageCode.FRENCH]: "Elle est très drôle et amicale. Tout le monde l'aime parce qu'elle est aussi patiente et travailleuse.", [LanguageCode.PORTUGUESE]: "Ela é muito engraçada e amigável. Todo mundo gosta dela porque ela também é paciente e trabalhadora.", [LanguageCode.MANDARIN]: "她很搞笑又友好。大家都喜歡她因為她也很有耐心又勤奮。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What does Nok look like?", [LanguageCode.FRENCH]: "À quoi ressemble Nok ?", [LanguageCode.PORTUGUESE]: "Como Nok se parece?", [LanguageCode.MANDARIN]: "Nok 長什麼樣？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Short with short hair", [LanguageCode.FRENCH]: "Petite avec des cheveux courts", [LanguageCode.PORTUGUESE]: "Baixa com cabelo curto", [LanguageCode.MANDARIN]: "矮，短髮" },
                        { [LanguageCode.ENGLISH]: "Tall with long hair", [LanguageCode.FRENCH]: "Grande avec des cheveux longs", [LanguageCode.PORTUGUESE]: "Alta com cabelo comprido", [LanguageCode.MANDARIN]: "高，長髮" },
                        { [LanguageCode.ENGLISH]: "Muscular and bald", [LanguageCode.FRENCH]: "Musclée et chauve", [LanguageCode.PORTUGUESE]: "Musculosa e careca", [LanguageCode.MANDARIN]: "健壯，禿頭" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Which personality traits does Nok have?", [LanguageCode.FRENCH]: "Quels traits de personnalité Nok a-t-elle ?", [LanguageCode.PORTUGUESE]: "Quais características de personalidade Nok tem?", [LanguageCode.MANDARIN]: "Nok 有哪些性格特質？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Quiet and shy", [LanguageCode.FRENCH]: "Silencieuse et timide", [LanguageCode.PORTUGUESE]: "Quieta e tímida", [LanguageCode.MANDARIN]: "安靜害羞" },
                        { [LanguageCode.ENGLISH]: "Funny, friendly, patient, and hardworking", [LanguageCode.FRENCH]: "Drôle, amicale, patiente et travailleuse", [LanguageCode.PORTUGUESE]: "Engraçada, amigável, paciente e trabalhadora", [LanguageCode.MANDARIN]: "搞笑、友好、有耐心又勤奮" },
                        { [LanguageCode.ENGLISH]: "Tall and beautiful", [LanguageCode.FRENCH]: "Grande et belle", [LanguageCode.PORTUGUESE]: "Alta e bonita", [LanguageCode.MANDARIN]: "高又美" },
                    ],
                    correctIndex: 1
                },
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บรรยายคนที่คุณรู้จัก อธิบายหน้าตา เสื้อผ้า และบุคลิกภาพ",
            [LanguageCode.FRENCH]: "บรรยายคนที่คุณรู้จัก อธิบายหน้าตา เสื้อผ้า และบุคลิกภาพ",
            [LanguageCode.PORTUGUESE]: "บรรยายคนที่คุณรู้จัก อธิบายหน้าตา เสื้อผ้า และบุคลิกภาพ",
            [LanguageCode.MANDARIN]: "บรรยายคนที่คุณรู้จัก อธิบายหน้าตา เสื้อผ้า และบุคลิกภาพ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe someone you know - their appearance, clothing, and personality.",
            [LanguageCode.FRENCH]: "Décrivez quelqu'un que vous connaissez - son apparence, ses vêtements et sa personnalité.",
            [LanguageCode.PORTUGUESE]: "Descreva alguém que você conhece - aparência, roupas e personalidade.",
            [LanguageCode.MANDARIN]: "描述你認識的人 - 他們的外貌、服裝和性格。",
        },
        speakingType: 'open-ended'
    }
};

