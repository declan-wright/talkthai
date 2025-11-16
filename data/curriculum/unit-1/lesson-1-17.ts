import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_17: Lesson = {
    id: "1.17",
    title: {
        [LanguageCode.ENGLISH]: "Weather & Environment",
        [LanguageCode.FRENCH]: "Météo et Environnement",
        [LanguageCode.PORTUGUESE]: "Clima e Meio Ambiente",
        [LanguageCode.MANDARIN]: "天氣與環境",
    },
    vocabulary: [
        // Weather conditions
        { thai: "อากาศ", phonetic: "aa-gàat", translations: { [LanguageCode.ENGLISH]: "weather/air", [LanguageCode.FRENCH]: "météo/air", [LanguageCode.PORTUGUESE]: "clima/ar", [LanguageCode.MANDARIN]: "天氣/空氣" } },
        { thai: "ร้อน", phonetic: "rɔ́ɔn", translations: { [LanguageCode.ENGLISH]: "hot", [LanguageCode.FRENCH]: "chaud", [LanguageCode.PORTUGUESE]: "quente", [LanguageCode.MANDARIN]: "熱" } },
        { thai: "หนาว", phonetic: "nǎao", translations: { [LanguageCode.ENGLISH]: "cold", [LanguageCode.FRENCH]: "froid", [LanguageCode.PORTUGUESE]: "frio", [LanguageCode.MANDARIN]: "冷" } },
        { thai: "ฝน", phonetic: "fǒn", translations: { [LanguageCode.ENGLISH]: "rain", [LanguageCode.FRENCH]: "pluie", [LanguageCode.PORTUGUESE]: "chuva", [LanguageCode.MANDARIN]: "雨" } },
        { thai: "ฟ้า", phonetic: "fáa", translations: { [LanguageCode.ENGLISH]: "sky", [LanguageCode.FRENCH]: "ciel", [LanguageCode.PORTUGUESE]: "céu", [LanguageCode.MANDARIN]: "天空" } },
        { thai: "แดด", phonetic: "dɛ̀ɛt", translations: { [LanguageCode.ENGLISH]: "sunlight/sunshine", [LanguageCode.FRENCH]: "soleil/lumière du soleil", [LanguageCode.PORTUGUESE]: "luz solar/sol", [LanguageCode.MANDARIN]: "陽光" } },
        { thai: "แดดออก", phonetic: "dɛ̀ɛt ɔ̀ɔk", translations: { [LanguageCode.ENGLISH]: "sunny (sun is out)", [LanguageCode.FRENCH]: "ensoleillé (le soleil est sorti)", [LanguageCode.PORTUGUESE]: "ensolarado (sol está fora)", [LanguageCode.MANDARIN]: "晴天（太陽出來）" } },
        { thai: "ฝนตก", phonetic: "fǒn dtòk", translations: { [LanguageCode.ENGLISH]: "raining (rain is falling)", [LanguageCode.FRENCH]: "il pleut (la pluie tombe)", [LanguageCode.PORTUGUESE]: "chovendo (chuva está caindo)", [LanguageCode.MANDARIN]: "下雨（雨在落）" } },
        { thai: "ลม", phonetic: "lom", translations: { [LanguageCode.ENGLISH]: "wind", [LanguageCode.FRENCH]: "vent", [LanguageCode.PORTUGUESE]: "vento", [LanguageCode.MANDARIN]: "風" } },
        { thai: "เมฆ", phonetic: "mêek", translations: { [LanguageCode.ENGLISH]: "cloud", [LanguageCode.FRENCH]: "nuage", [LanguageCode.PORTUGUESE]: "nuvem", [LanguageCode.MANDARIN]: "雲" } },
        { thai: "ฟ้าครึ้ม", phonetic: "fáa khrʉ́m", translations: { [LanguageCode.ENGLISH]: "cloudy/overcast", [LanguageCode.FRENCH]: "nuageux/couvert", [LanguageCode.PORTUGUESE]: "nublado/encoberto", [LanguageCode.MANDARIN]: "陰天/多雲" } },
        { thai: "พายุ", phonetic: "phaa-yú", translations: { [LanguageCode.ENGLISH]: "storm", [LanguageCode.FRENCH]: "tempête", [LanguageCode.PORTUGUESE]: "tempestade", [LanguageCode.MANDARIN]: "暴風雨" } },
        
        // Environment & nature
        { thai: "น้ำ", phonetic: "náam", translations: { [LanguageCode.ENGLISH]: "water", [LanguageCode.FRENCH]: "eau", [LanguageCode.PORTUGUESE]: "água", [LanguageCode.MANDARIN]: "水" } },
        { thai: "ป่า", phonetic: "bpàa", translations: { [LanguageCode.ENGLISH]: "forest/jungle", [LanguageCode.FRENCH]: "forêt/jungle", [LanguageCode.PORTUGUESE]: "floresta/selva", [LanguageCode.MANDARIN]: "森林" } },
        { thai: "ภูเขา", phonetic: "phuu-khǎo", translations: { [LanguageCode.ENGLISH]: "mountain", [LanguageCode.FRENCH]: "montagne", [LanguageCode.PORTUGUESE]: "montanha", [LanguageCode.MANDARIN]: "山" } },
        { thai: "ดอยภูเขา", phonetic: "dɔɔi phuu-khǎo", translations: { [LanguageCode.ENGLISH]: "mountain (Northern dialect)", [LanguageCode.FRENCH]: "montagne (dialecte du Nord)", [LanguageCode.PORTUGUESE]: "montanha (dialeto do Norte)", [LanguageCode.MANDARIN]: "山（北部方言）" } },
        { thai: "ทะเล", phonetic: "thá-lee", translations: { [LanguageCode.ENGLISH]: "sea/ocean", [LanguageCode.FRENCH]: "mer/océan", [LanguageCode.PORTUGUESE]: "mar/oceano", [LanguageCode.MANDARIN]: "海" } },
        { thai: "หาด", phonetic: "hàat", translations: { [LanguageCode.ENGLISH]: "beach", [LanguageCode.FRENCH]: "plage", [LanguageCode.PORTUGUESE]: "praia", [LanguageCode.MANDARIN]: "海灘" } },
        { thai: "แม่น้ำ", phonetic: "mɛ̂ɛ-náam", translations: { [LanguageCode.ENGLISH]: "river", [LanguageCode.FRENCH]: "rivière", [LanguageCode.PORTUGUESE]: "rio", [LanguageCode.MANDARIN]: "河流" } },
        { thai: "ทุ่งนา", phonetic: "thûng-naa", translations: { [LanguageCode.ENGLISH]: "rice field", [LanguageCode.FRENCH]: "rizière", [LanguageCode.PORTUGUESE]: "arrozal", [LanguageCode.MANDARIN]: "稻田" } },
        { thai: "ต้นไม้", phonetic: "dtôn-máai", translations: { [LanguageCode.ENGLISH]: "tree", [LanguageCode.FRENCH]: "arbre", [LanguageCode.PORTUGUESE]: "árvore", [LanguageCode.MANDARIN]: "樹" } },
        { thai: "ดอกไม้", phonetic: "dɔ̀ɔk-máai", translations: { [LanguageCode.ENGLISH]: "flower", [LanguageCode.FRENCH]: "fleur", [LanguageCode.PORTUGUESE]: "flor", [LanguageCode.MANDARIN]: "花" } },
        { thai: "สวน", phonetic: "sǔan", translations: { [LanguageCode.ENGLISH]: "garden/park", [LanguageCode.FRENCH]: "jardin/parc", [LanguageCode.PORTUGUESE]: "jardim/parque", [LanguageCode.MANDARIN]: "花園/公園" } },
        { thai: "เกาะ", phonetic: "gɔ̀", translations: { [LanguageCode.ENGLISH]: "island", [LanguageCode.FRENCH]: "île", [LanguageCode.PORTUGUESE]: "ilha", [LanguageCode.MANDARIN]: "島" } },
        { thai: "ธรรมชาติ", phonetic: "tham-má-châat", translations: { [LanguageCode.ENGLISH]: "nature", [LanguageCode.FRENCH]: "nature", [LanguageCode.PORTUGUESE]: "natureza", [LanguageCode.MANDARIN]: "自然" } },
        { thai: "สิ่งแวดล้อม", phonetic: "sìng-wɛ̂ɛt-lɔ́ɔm", translations: { [LanguageCode.ENGLISH]: "environment", [LanguageCode.FRENCH]: "environnement", [LanguageCode.PORTUGUESE]: "meio ambiente", [LanguageCode.MANDARIN]: "環境" } },
        
        // Seasons & temperature
        { thai: "ฤดู", phonetic: "rʉ́-duu", translations: { [LanguageCode.ENGLISH]: "season", [LanguageCode.FRENCH]: "saison", [LanguageCode.PORTUGUESE]: "estação", [LanguageCode.MANDARIN]: "季節" } },
        { thai: "ฤดูร้อน", phonetic: "rʉ́-duu-rɔ́ɔn", translations: { [LanguageCode.ENGLISH]: "hot season/summer", [LanguageCode.FRENCH]: "saison chaude/été", [LanguageCode.PORTUGUESE]: "estação quente/verão", [LanguageCode.MANDARIN]: "熱季/夏天" } },
        { thai: "ฤดูฝน", phonetic: "rʉ́-duu-fǒn", translations: { [LanguageCode.ENGLISH]: "rainy season", [LanguageCode.FRENCH]: "saison des pluies", [LanguageCode.PORTUGUESE]: "estação chuvosa", [LanguageCode.MANDARIN]: "雨季" } },
        { thai: "ฤดูหนาว", phonetic: "rʉ́-duu-nǎao", translations: { [LanguageCode.ENGLISH]: "cool season/winter", [LanguageCode.FRENCH]: "saison fraîche/hiver", [LanguageCode.PORTUGUESE]: "estação fria/inverno", [LanguageCode.MANDARIN]: "涼季/冬天" } },
        { thai: "อุณหภูมิ", phonetic: "ùn-hà-phuum", translations: { [LanguageCode.ENGLISH]: "temperature", [LanguageCode.FRENCH]: "température", [LanguageCode.PORTUGUESE]: "temperatura", [LanguageCode.MANDARIN]: "溫度" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Weather & Climate: Three Seasons",
                [LanguageCode.FRENCH]: "Météo et climat thaïlandais : Trois saisons",
                [LanguageCode.PORTUGUESE]: "Clima tailandês: Três estações",
                [LanguageCode.MANDARIN]: "泰國天氣與氣候：三個季節",
            },
            content: {
                [LanguageCode.ENGLISH]: "**Understanding Thai Weather**\n\nThailand has three main seasons, not four like many Western countries:\n\n**1. ฤดูร้อน (rʉ́-duu-rɔ́ɔn) - Hot Season (March-May)**\n• Temperatures: 35-40°C (95-104°F)\n• **ร้อนมาก (rɔ́ɔn mâak)** = \"Very hot!\"\n• The hottest time of year\n• Songkran (Thai New Year) happens in April\n• People say: **อากาศร้อนมาก (aa-gàat rɔ́ɔn mâak)** = \"The weather is very hot\"\n\n**2. ฤดูฝน (rʉ́-duu-fǒn) - Rainy Season (June-October)**\n• Monsoon season with heavy afternoon rains\n• **ฝนตก (fǒn dtòk)** = \"It's raining\"\n• **ฝนตกหนัก (fǒn dtòk nàk)** = \"Heavy rain\"\n• Still warm but more humid\n• Rice planting season in **ทุ่งนา (thûng-naa)** = rice fields\n\n**3. ฤดูหนาว (rʉ́-duu-nǎao) - Cool Season (November-February)**\n• Temperatures: 20-30°C (68-86°F)\n• Best time to visit Thailand!\n• **อากาศดี (aa-gàat dii)** = \"Nice weather\"\n• In the North (Chiang Mai), it can get quite **หนาว (nǎao)** = cold at night\n• In Bangkok, it's just pleasantly cool\n\n**Describing Today's Weather:**\n\nUse the pattern: **วันนี้ + [weather condition]**\n\n• **วันนี้อากาศร้อน (wan-níi aa-gàat rɔ́ɔn)** = \"Today the weather is hot\"\n• **วันนี้ฝนตก (wan-níi fǒn dtòk)** = \"Today it's raining\"\n• **วันนี้อากาศดี (wan-níi aa-gàat dii)** = \"Today the weather is nice\"\n• **วันนี้แดดออก (wan-níi dɛ̀ɛt ɔ̀ɔk)** = \"Today it's sunny\"\n• **วันนี้ฟ้าครึ้ม (wan-níi fáa khrʉ́m)** = \"Today it's cloudy\"\n\n**Important Weather Vocabulary:**\n\n• **ร้อน (rɔ́ɔn)** = hot\n• **หนาว (nǎao)** = cold\n• **แดด (dɛ̀ɛt)** = sunlight/sunshine\n• **ฝน (fǒn)** = rain\n• **ลม (lom)** = wind\n• **ฟ้า (fáa)** = sky\n• **เมฆ (mêek)** = cloud\n\n**Thailand's Beautiful Nature:**\n\nThailand is known for diverse landscapes:\n\n• **ทะเล (thá-lee)** = sea - Beautiful beaches in the South (Phuket, Krabi)\n• **ภูเขา (phuu-khǎo)** = mountain - Northern Thailand has stunning mountains\n• **ป่า (bpàa)** = forest/jungle - Dense tropical forests\n• **เกาะ (gɔ̀)** = island - Over 1,400 islands!\n• **ทุ่งนา (thûng-naa)** = rice fields - Iconic Thai landscape\n• **แม่น้ำ (mɛ̂ɛ-náam)** = river - The Chao Phraya flows through Bangkok\n\n**Pro Tip:** When Thais talk about the weather, they often use **มาก (mâak)** = \"very\" to emphasize:\n• **ร้อนมาก (rɔ́ɔn mâak)** = \"Very hot!\"\n• **หนาวมาก (nǎao mâak)** = \"Very cold!\"\n• **ฝนตกหนักมาก (fǒn dtòk nàk mâak)** = \"It's raining very heavily!\"",
                [LanguageCode.FRENCH]: "**Comprendre la météo thaïlandaise**\n\nLa Thaïlande a trois saisons principales, pas quatre comme dans de nombreux pays occidentaux :\n\n**1. ฤดูร้อน (rʉ́-duu-rɔ́ɔn) - Saison chaude (mars-mai)**\n• Températures : 35-40°C\n• La période la plus chaude de l'année\n• Songkran (Nouvel An thaïlandais) a lieu en avril\n\n**2. ฤดูฝน (rʉ́-duu-fǒn) - Saison des pluies (juin-octobre)**\n• Saison de mousson avec de fortes pluies l'après-midi\n• Toujours chaud mais plus humide\n• Saison de plantation du riz\n\n**3. ฤดูหนาว (rʉ́-duu-nǎao) - Saison fraîche (novembre-février)**\n• Températures : 20-30°C\n• Meilleure période pour visiter la Thaïlande !\n• Dans le Nord, il peut faire assez froid la nuit\n\n**Décrire la météo d'aujourd'hui :**\n• **วันนี้อากาศร้อน** = \"Aujourd'hui il fait chaud\"\n• **วันนี้ฝนตก** = \"Aujourd'hui il pleut\"\n• **วันนี้อากาศดี** = \"Aujourd'hui il fait beau\"",
                [LanguageCode.PORTUGUESE]: "**Entendendo o clima tailandês**\n\nA Tailândia tem três estações principais, não quatro como muitos países ocidentais:\n\n**1. ฤดูร้อน (rʉ́-duu-rɔ́ɔn) - Estação quente (março-maio)**\n• Temperaturas: 35-40°C\n• A época mais quente do ano\n• Songkran (Ano Novo Tailandês) acontece em abril\n\n**2. ฤดูฝน (rʉ́-duu-fǒn) - Estação chuvosa (junho-outubro)**\n• Temporada de monções com chuvas fortes à tarde\n• Ainda quente mas mais úmido\n• Época de plantio de arroz\n\n**3. ฤดูหนาว (rʉ́-duu-nǎao) - Estação fria (novembro-fevereiro)**\n• Temperaturas: 20-30°C\n• Melhor época para visitar a Tailândia!\n• No Norte, pode ficar bem frio à noite\n\n**Descrevendo o clima de hoje:**\n• **วันนี้อากาศร้อน** = \"Hoje está quente\"\n• **วันนี้ฝนตก** = \"Hoje está chovendo\"\n• **วันนี้อากาศดี** = \"Hoje o tempo está bom\"",
                [LanguageCode.MANDARIN]: "**了解泰國天氣**\n\n泰國有三個主要季節，不像許多西方國家有四個：\n\n**1. ฤดูร้อน (rʉ́-duu-rɔ́ɔn) - 熱季（3月-5月）**\n• 溫度：35-40°C\n• 一年中最熱的時候\n• 宋干節（泰國新年）在四月\n\n**2. ฤดูฝน (rʉ́-duu-fǒn) - 雨季（6月-10月）**\n• 季風季節，下午有大雨\n• 仍然炎熱但更潮濕\n• 水稻種植季節\n\n**3. ฤดูหนาว (rʉ́-duu-nǎao) - 涼季（11月-2月）**\n• 溫度：20-30°C\n• 訪問泰國的最佳時間！\n• 在北部，晚上可能會很冷\n\n**描述今天的天氣：**\n• **วันนี้อากาศร้อน** = 「今天很熱」\n• **วันนี้ฝนตก** = 「今天下雨」\n• **วันนี้อากาศดี** = 「今天天氣很好」",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the weather descriptions with the correct word.",
                [LanguageCode.FRENCH]: "Complétez les descriptions météo avec le bon mot.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições do clima com a palavra correta.",
                [LanguageCode.MANDARIN]: "用正確的詞完成天氣描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "วันนี้อากาศ___มาก", [LanguageCode.FRENCH]: "Aujourd'hui il fait très___", [LanguageCode.PORTUGUESE]: "Hoje está muito___", [LanguageCode.MANDARIN]: "今天很___" }, correctAnswer: "ร้อน", end: { [LanguageCode.ENGLISH]: " (Today is very hot)", [LanguageCode.FRENCH]: " (chaud)", [LanguageCode.PORTUGUESE]: " (quente)", [LanguageCode.MANDARIN]: " (熱)" } },
                { start: { [LanguageCode.ENGLISH]: "วันนี้___ตก", [LanguageCode.FRENCH]: "Aujourd'hui il___", [LanguageCode.PORTUGUESE]: "Hoje está___", [LanguageCode.MANDARIN]: "今天___" }, correctAnswer: "ฝน", end: { [LanguageCode.ENGLISH]: " (Today it's raining)", [LanguageCode.FRENCH]: " (pleut)", [LanguageCode.PORTUGUESE]: " (chovendo)", [LanguageCode.MANDARIN]: " (下雨)" } },
                { start: { [LanguageCode.ENGLISH]: "วันนี้___ออก", [LanguageCode.FRENCH]: "Aujourd'hui il y a du___", [LanguageCode.PORTUGUESE]: "Hoje está___", [LanguageCode.MANDARIN]: "今天___出來" }, correctAnswer: "แดด", end: { [LanguageCode.ENGLISH]: " (Today it's sunny)", [LanguageCode.FRENCH]: " (soleil)", [LanguageCode.PORTUGUESE]: " (ensolarado)", [LanguageCode.MANDARIN]: " (陽光)" } },
                { start: { [LanguageCode.ENGLISH]: "วันนี้___ครึ้ม", [LanguageCode.FRENCH]: "Aujourd'hui le ciel est___", [LanguageCode.PORTUGUESE]: "Hoje o céu está___", [LanguageCode.MANDARIN]: "今天天空___" }, correctAnswer: "ฟ้า", end: { [LanguageCode.ENGLISH]: " (Today it's cloudy)", [LanguageCode.FRENCH]: " (couvert)", [LanguageCode.PORTUGUESE]: " (nublado)", [LanguageCode.MANDARIN]: " (陰天)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to form correct weather sentences.",
                [LanguageCode.FRENCH]: "Organisez les mots pour former des phrases météo correctes.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para formar frases corretas sobre o clima.",
                [LanguageCode.MANDARIN]: "排列單詞以組成正確的天氣句子。",
            },
            sentences: [
                { correctOrder: ["วันนี้", "อากาศ", "ร้อน", "มาก"], hint: { [LanguageCode.ENGLISH]: "Today the weather is very hot.", [LanguageCode.FRENCH]: "Aujourd'hui il fait très chaud.", [LanguageCode.PORTUGUESE]: "Hoje está muito quente.", [LanguageCode.MANDARIN]: "今天天氣很熱。" } },
                { correctOrder: ["วันนี้", "ฝน", "ตก", "หนัก"], hint: { [LanguageCode.ENGLISH]: "Today it's raining heavily.", [LanguageCode.FRENCH]: "Aujourd'hui il pleut fort.", [LanguageCode.PORTUGUESE]: "Hoje está chovendo forte.", [LanguageCode.MANDARIN]: "今天雨下得很大。" } },
                { correctOrder: ["วันนี้", "แดด", "ออก"], hint: { [LanguageCode.ENGLISH]: "Today it's sunny.", [LanguageCode.FRENCH]: "Aujourd'hui il y a du soleil.", [LanguageCode.PORTUGUESE]: "Hoje está ensolarado.", [LanguageCode.MANDARIN]: "今天陽光明媚。" } },
                { correctOrder: ["วันนี้", "อากาศ", "ดี"], hint: { [LanguageCode.ENGLISH]: "Today the weather is nice.", [LanguageCode.FRENCH]: "Aujourd'hui il fait beau.", [LanguageCode.PORTUGUESE]: "Hoje o tempo está bom.", [LanguageCode.MANDARIN]: "今天天氣很好。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the environment vocabulary.",
                [LanguageCode.FRENCH]: "Associez le vocabulaire de l'environnement.",
                [LanguageCode.PORTUGUESE]: "Relacione o vocabulário do meio ambiente.",
                [LanguageCode.MANDARIN]: "配對環境詞彙。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "mountain", [LanguageCode.FRENCH]: "montagne", [LanguageCode.PORTUGUESE]: "montanha", [LanguageCode.MANDARIN]: "山" }, answer: { [LanguageCode.ENGLISH]: "ภูเขา", [LanguageCode.FRENCH]: "ภูเขา", [LanguageCode.PORTUGUESE]: "ภูเขา", [LanguageCode.MANDARIN]: "ภูเขา" } },
                { prompt: { [LanguageCode.ENGLISH]: "sea/ocean", [LanguageCode.FRENCH]: "mer/océan", [LanguageCode.PORTUGUESE]: "mar/oceano", [LanguageCode.MANDARIN]: "海" }, answer: { [LanguageCode.ENGLISH]: "ทะเล", [LanguageCode.FRENCH]: "ทะเล", [LanguageCode.PORTUGUESE]: "ทะเล", [LanguageCode.MANDARIN]: "ทะเล" } },
                { prompt: { [LanguageCode.ENGLISH]: "forest/jungle", [LanguageCode.FRENCH]: "forêt/jungle", [LanguageCode.PORTUGUESE]: "floresta/selva", [LanguageCode.MANDARIN]: "森林" }, answer: { [LanguageCode.ENGLISH]: "ป่า", [LanguageCode.FRENCH]: "ป่า", [LanguageCode.PORTUGUESE]: "ป่า", [LanguageCode.MANDARIN]: "ป่า" } },
                { prompt: { [LanguageCode.ENGLISH]: "rice field", [LanguageCode.FRENCH]: "rizière", [LanguageCode.PORTUGUESE]: "arrozal", [LanguageCode.MANDARIN]: "稻田" }, answer: { [LanguageCode.ENGLISH]: "ทุ่งนา", [LanguageCode.FRENCH]: "ทุ่งนา", [LanguageCode.PORTUGUESE]: "ทุ่งนา", [LanguageCode.MANDARIN]: "ทุ่งนา" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct weather or environment word.",
                [LanguageCode.FRENCH]: "Choisissez le bon mot météo ou environnement.",
                [LanguageCode.PORTUGUESE]: "Escolha a palavra correta de clima ou meio ambiente.",
                [LanguageCode.MANDARIN]: "選擇正確的天氣或環境詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Which season is the best time to visit Thailand?", [LanguageCode.FRENCH]: "Quelle saison est la meilleure pour visiter la Thaïlande ?", [LanguageCode.PORTUGUESE]: "Qual estação é a melhor época para visitar a Tailândia?", [LanguageCode.MANDARIN]: "哪個季節是訪問泰國的最佳時間？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ฤดูร้อน", [LanguageCode.FRENCH]: "ฤดูร้อน", [LanguageCode.PORTUGUESE]: "ฤดูร้อน (estação quente)", [LanguageCode.MANDARIN]: "ฤดูร้อน (熱季)" },
                        { [LanguageCode.ENGLISH]: "ฤดูฝน", [LanguageCode.FRENCH]: "ฤดูฝน", [LanguageCode.PORTUGUESE]: "ฤดูฝน (estação chuvosa)", [LanguageCode.MANDARIN]: "ฤดูฝน (雨季)" },
                        { [LanguageCode.ENGLISH]: "ฤดูหนาว", [LanguageCode.FRENCH]: "ฤดูหนาว (saison fraîche)", [LanguageCode.PORTUGUESE]: "ฤดูหนาว (estação fria)", [LanguageCode.MANDARIN]: "ฤดูหนาว (涼季)" },
                    ],
                    correctIndex: 2
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What do you call the water body that surrounds islands?", [LanguageCode.FRENCH]: "Comment appelle-t-on l'étendue d'eau qui entoure les îles ?", [LanguageCode.PORTUGUESE]: "Como você chama o corpo de água que cerca as ilhas?", [LanguageCode.MANDARIN]: "你如何稱呼環繞島嶼的水體？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "แม่น้ำ", [LanguageCode.FRENCH]: "แม่น้ำ (rivière)", [LanguageCode.PORTUGUESE]: "แม่น้ำ", [LanguageCode.MANDARIN]: "แม่น้ำ (河流)" },
                        { [LanguageCode.ENGLISH]: "ทะเล", [LanguageCode.FRENCH]: "ทะเล", [LanguageCode.PORTUGUESE]: "ทะเล", [LanguageCode.MANDARIN]: "ทะเล (海)" },
                        { [LanguageCode.ENGLISH]: "ทุ่งนา", [LanguageCode.FRENCH]: "ทุ่งนา (rizière)", [LanguageCode.PORTUGUESE]: "ทุ่งนา", [LanguageCode.MANDARIN]: "ทุ่งนา (稻田)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "When it's raining, you say:", [LanguageCode.FRENCH]: "Quand il pleut, vous dites :", [LanguageCode.PORTUGUESE]: "Quando está chovendo, você diz:", [LanguageCode.MANDARIN]: "下雨時，你說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "แดดออก", [LanguageCode.FRENCH]: "แดดออก", [LanguageCode.PORTUGUESE]: "แดดออก", [LanguageCode.MANDARIN]: "แดดออก" },
                        { [LanguageCode.ENGLISH]: "ฝนตก", [LanguageCode.FRENCH]: "ฝนตก", [LanguageCode.PORTUGUESE]: "ฝนตก", [LanguageCode.MANDARIN]: "ฝนตก" },
                        { [LanguageCode.ENGLISH]: "ฟ้าครึ้ม", [LanguageCode.FRENCH]: "ฟ้าครึ้ม", [LanguageCode.PORTUGUESE]: "ฟ้าครึ้ม", [LanguageCode.MANDARIN]: "ฟ้าครึ้ม" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the Thai seasons to their months.",
                [LanguageCode.FRENCH]: "Associez les saisons thaïlandaises à leurs mois.",
                [LanguageCode.PORTUGUESE]: "Relacione as estações tailandesas aos seus meses.",
                [LanguageCode.MANDARIN]: "將泰國季節與其月份配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "March-May", [LanguageCode.FRENCH]: "Mars-Mai", [LanguageCode.PORTUGUESE]: "Março-Maio", [LanguageCode.MANDARIN]: "3月-5月" }, answer: { [LanguageCode.ENGLISH]: "ฤดูร้อน", [LanguageCode.FRENCH]: "ฤดูร้อน", [LanguageCode.PORTUGUESE]: "ฤดูร้อน (estação quente)", [LanguageCode.MANDARIN]: "ฤดูร้อน (熱季)" } },
                { prompt: { [LanguageCode.ENGLISH]: "June-October", [LanguageCode.FRENCH]: "Juin-Octobre", [LanguageCode.PORTUGUESE]: "Junho-Outubro", [LanguageCode.MANDARIN]: "6月-10月" }, answer: { [LanguageCode.ENGLISH]: "ฤดูฝน", [LanguageCode.FRENCH]: "ฤดูฝน", [LanguageCode.PORTUGUESE]: "ฤดูฝน (estação chuvosa)", [LanguageCode.MANDARIN]: "ฤดูฝน (雨季)" } },
                { prompt: { [LanguageCode.ENGLISH]: "November-February", [LanguageCode.FRENCH]: "Novembre-Février", [LanguageCode.PORTUGUESE]: "Novembro-Fevereiro", [LanguageCode.MANDARIN]: "11月-2月" }, answer: { [LanguageCode.ENGLISH]: "ฤดูหนาว", [LanguageCode.FRENCH]: "ฤดูหนาว (saison fraîche)", [LanguageCode.PORTUGUESE]: "ฤดูหนาว (estação fria)", [LanguageCode.MANDARIN]: "ฤดูหนาว (涼季)" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the environment descriptions.",
                [LanguageCode.FRENCH]: "Complétez les descriptions de l'environnement.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições do meio ambiente.",
                [LanguageCode.MANDARIN]: "完成環境描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เชียงใหม่มี___สูง", [LanguageCode.FRENCH]: "Chiang Mai a de hautes___", [LanguageCode.PORTUGUESE]: "Chiang Mai tem___altas", [LanguageCode.MANDARIN]: "清邁有高___" }, correctAnswer: "ภูเขา", end: { [LanguageCode.ENGLISH]: " (Chiang Mai has high mountains)", [LanguageCode.FRENCH]: " (montagnes)", [LanguageCode.PORTUGUESE]: " (montanhas)", [LanguageCode.MANDARIN]: " (山)" } },
                { start: { [LanguageCode.ENGLISH]: "ภูเก็ตมี___สวย", [LanguageCode.FRENCH]: "Phuket a de belles___", [LanguageCode.PORTUGUESE]: "Phuket tem___bonitas", [LanguageCode.MANDARIN]: "普吉島有美麗的___" }, correctAnswer: "หาด/ทะเล", end: { [LanguageCode.ENGLISH]: " (Phuket has beautiful beaches/sea)", [LanguageCode.FRENCH]: " (plages/mer)", [LanguageCode.PORTUGUESE]: " (praias/mar)", [LanguageCode.MANDARIN]: " (海灘/海)" } },
                { start: { [LanguageCode.ENGLISH]: "ทุ่งนามี___เยอะ", [LanguageCode.FRENCH]: "Les rizières ont beaucoup de___", [LanguageCode.PORTUGUESE]: "Os arrozais têm muita___", [LanguageCode.MANDARIN]: "稻田有很多___" }, correctAnswer: "น้ำ", end: { [LanguageCode.ENGLISH]: " (Rice fields have a lot of water)", [LanguageCode.FRENCH]: " (eau)", [LanguageCode.PORTUGUESE]: " (água)", [LanguageCode.MANDARIN]: " (水)" } },
                { start: { [LanguageCode.ENGLISH]: "ในป่ามี___เยอะ", [LanguageCode.FRENCH]: "Dans la forêt il y a beaucoup d'___", [LanguageCode.PORTUGUESE]: "Na floresta há muitas___", [LanguageCode.MANDARIN]: "森林裡有很多___" }, correctAnswer: "ต้นไม้", end: { [LanguageCode.ENGLISH]: " (In the forest there are many trees)", [LanguageCode.FRENCH]: " (arbres)", [LanguageCode.PORTUGUESE]: " (árvores)", [LanguageCode.MANDARIN]: " (樹)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to describe nature and environment.",
                [LanguageCode.FRENCH]: "Organisez les mots pour décrire la nature et l'environnement.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para descrever a natureza e o meio ambiente.",
                [LanguageCode.MANDARIN]: "排列單詞以描述自然和環境。",
            },
            sentences: [
                { correctOrder: ["ประเทศไทย", "มี", "ธรรมชาติ", "สวย"], hint: { [LanguageCode.ENGLISH]: "Thailand has beautiful nature.", [LanguageCode.FRENCH]: "La Thaïlande a une belle nature.", [LanguageCode.PORTUGUESE]: "A Tailândia tem natureza bonita.", [LanguageCode.MANDARIN]: "泰國有美麗的自然。" } },
                { correctOrder: ["ทะเล", "ใน", "ประเทศไทย", "สวยมาก"], hint: { [LanguageCode.ENGLISH]: "The sea in Thailand is very beautiful.", [LanguageCode.FRENCH]: "La mer en Thaïlande est très belle.", [LanguageCode.PORTUGUESE]: "O mar na Tailândia é muito bonito.", [LanguageCode.MANDARIN]: "泰國的海很美。" } },
                { correctOrder: ["ป่า", "มี", "ต้นไม้", "เยอะ"], hint: { [LanguageCode.ENGLISH]: "The forest has many trees.", [LanguageCode.FRENCH]: "La forêt a beaucoup d'arbres.", [LanguageCode.PORTUGUESE]: "A floresta tem muitas árvores.", [LanguageCode.MANDARIN]: "森林有很多樹。" } },
            ]
        },
    ],
    listeningSpeaking: {
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "อธิบายอากาศวันนี้ 3 ประโยค",
            [LanguageCode.FRENCH]: "อธิบายอากาศวันนี้ 3 ประโยค",
            [LanguageCode.PORTUGUESE]: "อธิบายอากาศวันนี้ 3 ประโยค",
            [LanguageCode.MANDARIN]: "อธิบายอากาศวันนี้ 3 ประโยค",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe today's weather in 3 sentences. Example: wan-níi aa-gàat rɔ́ɔn mâak, mii dɛ̀ɛt ɔ̀ɔk, fáa sǎai (Today the weather is very hot, it's sunny, the sky is clear)",
            [LanguageCode.FRENCH]: "Décrivez la météo d'aujourd'hui en 3 phrases. Exemple : wan-níi aa-gàat rɔ́ɔn mâak, mii dɛ̀ɛt ɔ̀ɔk, fáa sǎai (Aujourd'hui il fait très chaud, il y a du soleil, le ciel est clair)",
            [LanguageCode.PORTUGUESE]: "Descreva o clima de hoje em 3 frases. Exemplo: wan-níi aa-gàat rɔ́ɔn mâak, mii dɛ̀ɛt ɔ̀ɔk, fáa sǎai (Hoje está muito quente, está ensolarado, o céu está claro)",
            [LanguageCode.MANDARIN]: "用3句話描述今天的天氣。例子：wan-níi aa-gàat rɔ́ɔn mâak, mii dɛ̀ɛt ɔ̀ɔk, fáa sǎai（今天天氣很熱，陽光明媚，天空晴朗）",
        },
        speakingType: 'open-ended'
    }
};

