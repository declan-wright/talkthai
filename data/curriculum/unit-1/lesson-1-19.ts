import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_19: Lesson = {
    id: "1.19",
    title: {
        [LanguageCode.ENGLISH]: "Transportation",
        [LanguageCode.FRENCH]: "Transport",
        [LanguageCode.PORTUGUESE]: "Transporte",
        [LanguageCode.MANDARIN]: "交通",
    },
    vocabulary: [
        // Core transportation vocabulary
        { thai: "รถ", phonetic: "rót", translations: { [LanguageCode.ENGLISH]: "car/vehicle", [LanguageCode.FRENCH]: "voiture/véhicule", [LanguageCode.PORTUGUESE]: "carro/veículo", [LanguageCode.MANDARIN]: "車/車輛" } },
        { thai: "รถเมล์", phonetic: "rót mee", translations: { [LanguageCode.ENGLISH]: "bus", [LanguageCode.FRENCH]: "bus", [LanguageCode.PORTUGUESE]: "ônibus", [LanguageCode.MANDARIN]: "公車" } },
        { thai: "บัส", phonetic: "bát", translations: { [LanguageCode.ENGLISH]: "bus (English loanword)", [LanguageCode.FRENCH]: "bus (emprunt anglais)", [LanguageCode.PORTUGUESE]: "ônibus (empréstimo inglês)", [LanguageCode.MANDARIN]: "巴士（英語外來詞）" } },
        { thai: "แกร็บ", phonetic: "grɛ́p", translations: { [LanguageCode.ENGLISH]: "Grab (ride-hailing app)", [LanguageCode.FRENCH]: "Grab (application de transport)", [LanguageCode.PORTUGUESE]: "Grab (aplicativo de transporte)", [LanguageCode.MANDARIN]: "Grab（叫車軟體）" } },
        { thai: "แท็กซี่", phonetic: "thɛ́k-sîi", translations: { [LanguageCode.ENGLISH]: "taxi", [LanguageCode.FRENCH]: "taxi", [LanguageCode.PORTUGUESE]: "táxi", [LanguageCode.MANDARIN]: "計程車" } },
        { thai: "รถตุ๊กตุ๊ก", phonetic: "rót túk-túk", translations: { [LanguageCode.ENGLISH]: "tuk-tuk (three-wheeled taxi)", [LanguageCode.FRENCH]: "tuk-tuk (taxi à trois roues)", [LanguageCode.PORTUGUESE]: "tuk-tuk (táxi de três rodas)", [LanguageCode.MANDARIN]: "嘟嘟車（三輪計程車）" } },
        { thai: "เดิน", phonetic: "dəən", translations: { [LanguageCode.ENGLISH]: "to walk", [LanguageCode.FRENCH]: "marcher", [LanguageCode.PORTUGUESE]: "andar/caminhar", [LanguageCode.MANDARIN]: "走路" } },
        { thai: "มอเตอร์ไซค์", phonetic: "mɔɔ-dtəə-sai", translations: { [LanguageCode.ENGLISH]: "motorcycle/scooter", [LanguageCode.FRENCH]: "moto/scooter", [LanguageCode.PORTUGUESE]: "motocicleta/scooter", [LanguageCode.MANDARIN]: "摩托車" } },
        { thai: "วิน", phonetic: "win", translations: { [LanguageCode.ENGLISH]: "motorcycle taxi", [LanguageCode.FRENCH]: "moto-taxi", [LanguageCode.PORTUGUESE]: "moto-táxi", [LanguageCode.MANDARIN]: "摩托計程車" } },
        { thai: "ขับ", phonetic: "khàp", translations: { [LanguageCode.ENGLISH]: "to drive", [LanguageCode.FRENCH]: "conduire", [LanguageCode.PORTUGUESE]: "dirigir", [LanguageCode.MANDARIN]: "開車" } },
        { thai: "นั่ง", phonetic: "nâŋ", translations: { [LanguageCode.ENGLISH]: "to sit/ride", [LanguageCode.FRENCH]: "s'asseoir/monter", [LanguageCode.PORTUGUESE]: "sentar/andar de", [LanguageCode.MANDARIN]: "坐" } },
        { thai: "ไป", phonetic: "pai", translations: { [LanguageCode.ENGLISH]: "to go", [LanguageCode.FRENCH]: "aller", [LanguageCode.PORTUGUESE]: "ir", [LanguageCode.MANDARIN]: "去" } },
        { thai: "เวลา", phonetic: "wee-laa", translations: { [LanguageCode.ENGLISH]: "time", [LanguageCode.FRENCH]: "temps", [LanguageCode.PORTUGUESE]: "tempo", [LanguageCode.MANDARIN]: "時間" } },
        { thai: "รถไฟ", phonetic: "rót fai", translations: { [LanguageCode.ENGLISH]: "train", [LanguageCode.FRENCH]: "train", [LanguageCode.PORTUGUESE]: "trem", [LanguageCode.MANDARIN]: "火車" } },
        { thai: "สนามบิน", phonetic: "sà-nǎam bin", translations: { [LanguageCode.ENGLISH]: "airport", [LanguageCode.FRENCH]: "aéroport", [LanguageCode.PORTUGUESE]: "aeroporto", [LanguageCode.MANDARIN]: "機場" } },
        { thai: "เครื่องบิน", phonetic: "khrʉ̂aŋ bin", translations: { [LanguageCode.ENGLISH]: "airplane", [LanguageCode.FRENCH]: "avion", [LanguageCode.PORTUGUESE]: "avião", [LanguageCode.MANDARIN]: "飛機" } },
        { thai: "ตรวจความปลอดภัย", phonetic: "dtrùat khwaam bplɔ̀ɔt-phai", translations: { [LanguageCode.ENGLISH]: "security checkpoint", [LanguageCode.FRENCH]: "contrôle de sécurité", [LanguageCode.PORTUGUESE]: "controle de segurança", [LanguageCode.MANDARIN]: "安檢" } },
        { thai: "หนังสือเดินทาง", phonetic: "nǎŋ-sʉ̌ʉ dəən-thaaŋ", translations: { [LanguageCode.ENGLISH]: "passport", [LanguageCode.FRENCH]: "passeport", [LanguageCode.PORTUGUESE]: "passaporte", [LanguageCode.MANDARIN]: "護照" } },
        { thai: "วีซ่า", phonetic: "wii-sâa", translations: { [LanguageCode.ENGLISH]: "visa", [LanguageCode.FRENCH]: "visa", [LanguageCode.PORTUGUESE]: "visto", [LanguageCode.MANDARIN]: "簽證" } },
        { thai: "ขึ้น", phonetic: "khʉ̂n", translations: { [LanguageCode.ENGLISH]: "to get on/board", [LanguageCode.FRENCH]: "monter", [LanguageCode.PORTUGUESE]: "embarcar/subir", [LanguageCode.MANDARIN]: "上車" } },
        { thai: "ลง", phonetic: "loŋ", translations: { [LanguageCode.ENGLISH]: "to get off/down", [LanguageCode.FRENCH]: "descendre", [LanguageCode.PORTUGUESE]: "descer/desembarcar", [LanguageCode.MANDARIN]: "下車" } },
        { thai: "สถานี", phonetic: "sà-thǎa-nii", translations: { [LanguageCode.ENGLISH]: "station", [LanguageCode.FRENCH]: "station/gare", [LanguageCode.PORTUGUESE]: "estação", [LanguageCode.MANDARIN]: "車站" } },
        { thai: "ค่าโดยสาร", phonetic: "khâa dooi-sǎan", translations: { [LanguageCode.ENGLISH]: "fare/ticket price", [LanguageCode.FRENCH]: "tarif/prix du billet", [LanguageCode.PORTUGUESE]: "tarifa/preço da passagem", [LanguageCode.MANDARIN]: "車資/票價" } },
        { thai: "เร็ว", phonetic: "reo", translations: { [LanguageCode.ENGLISH]: "fast", [LanguageCode.FRENCH]: "rapide", [LanguageCode.PORTUGUESE]: "rápido", [LanguageCode.MANDARIN]: "快" } },
        { thai: "ช้า", phonetic: "cháa", translations: { [LanguageCode.ENGLISH]: "slow", [LanguageCode.FRENCH]: "lent", [LanguageCode.PORTUGUESE]: "lento", [LanguageCode.MANDARIN]: "慢" } },
        { thai: "ติด", phonetic: "dtìt", translations: { [LanguageCode.ENGLISH]: "stuck/traffic jam", [LanguageCode.FRENCH]: "coincé/embouteillage", [LanguageCode.PORTUGUESE]: "preso/engarrafamento", [LanguageCode.MANDARIN]: "塞車" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Getting Around Thailand: Transportation Guide",
                [LanguageCode.FRENCH]: "Se déplacer en Thaïlande : Guide des transports",
                [LanguageCode.PORTUGUESE]: "Locomoção na Tailândia: Guia de Transporte",
                [LanguageCode.MANDARIN]: "泰國交通：交通指南",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thailand has a diverse and vibrant transportation system! Understanding how to get around is essential for daily life.\n\n**Common Transportation Methods:**\n\n**1. Grab (แกร็บ - grɛ́p)**\n• THE most popular ride-hailing app in Thailand\n• Safer and more reliable than regular taxis\n• Fixed prices (no meter haggling!)\n• Available in most cities\n• **เรียกแกร็บ (rîak grɛ́p)** = \"Call a Grab\"\n• Can order: cars, motorcycles, and even food delivery\n\n**2. Taxis (แท็กซี่ - thɛ́k-sîi)**\n• Metered taxis are common in Bangkok\n• Always insist on the meter: **เปิดมิเตอร์ (bpə̀ət mí-dtəə)**\n• Starting fare is around 35 baht\n• Can be difficult to find during rush hour\n• Some drivers may refuse short trips\n\n**3. Tuk-Tuks (รถตุ๊กตุ๊ก - rót túk-túk)**\n• Iconic three-wheeled vehicles\n• Fun for tourists but often expensive\n• ALWAYS negotiate price before getting in\n• Not metered - agree on price first!\n• Great for short distances in tourist areas\n• **เท่าไหร่ (thâo-rài)** = \"How much?\"\n\n**4. Buses (รถเมล์/บัส - rót mee/bát)**\n• Very cheap (8-20 baht)\n• Can be confusing for foreigners\n• Air-conditioned buses cost more\n• Routes cover most of Bangkok\n• **ขึ้นรถเมล์ (khʉ̂n rót mee)** = \"Get on the bus\"\n\n**5. Motorcycle Taxis / Win (วิน - win)**\n• Drivers wear orange vests\n• Fast way to beat traffic\n• Common for short trips\n• Usually wait at designated spots\n\n**6. BTS/MRT (รถไฟฟ้า - rót fai-fáa)**\n• Skytrain (BTS) and subway (MRT) in Bangkok\n• Clean, fast, air-conditioned\n• Avoid traffic completely!\n• Use Rabbit Card for convenience\n• **ขึ้นรถไฟฟ้า (khʉ̂n rót fai-fáa)** = \"Take the skytrain\"\n\n**7. Walking (เดิน - dəən)**\n• Bangkok is NOT very walkable\n• Sidewalks can be uneven or blocked\n• Very hot and humid\n• But great for exploring local areas\n• **เดินไป (dəən pai)** = \"Walk there\"\n\n**Essential Transportation Vocabulary:**\n\n**รถ (rót)** = Car/Vehicle\n• Basic word for any vehicle\n• **ขับรถ (khàp rót)** = \"Drive a car\"\n• **นั่งรถ (nâŋ rót)** = \"Ride in a car\"\n\n**ไป (pai)** = To go\n• Essential verb for transportation!\n• **ไปไหน (pai nǎi)** = \"Where are you going?\"\n• **ไปทำงาน (pai tham-ŋaan)** = \"Go to work\"\n• **ไปบ้าน (pai bâan)** = \"Go home\"\n\n**ขึ้น (khʉ̂n)** / **ลง (loŋ)** = Get on / Get off\n• **ขึ้นรถ (khʉ̂n rót)** = \"Get on the vehicle\"\n• **ลงรถ (loŋ rót)** = \"Get off the vehicle\"\n• **ขึ้นเครื่องบิน (khʉ̂n khrʉ̂aŋ bin)** = \"Board the plane\"\n\n**นั่ง (nâŋ)** = To sit/ride\n• **นั่งรถเมล์ (nâŋ rót mee)** = \"Take the bus\" (literally \"sit bus\")\n• **นั่งแท็กซี่ (nâŋ thɛ́k-sîi)** = \"Take a taxi\"\n• **นั่งแกร็บ (nâŋ grɛ́p)** = \"Take a Grab\"\n\n**ขับ (khàp)** = To drive\n• **ขับรถ (khàp rót)** = \"Drive a car\"\n• **ขับมอเตอร์ไซค์ (khàp mɔɔ-dtəə-sai)** = \"Drive a motorcycle\"\n• **คนขับ (khon khàp)** = \"Driver\"\n\n**เดิน (dəən)** = To walk\n• **เดินไป (dəən pai)** = \"Walk there\"\n• **เดินทาง (dəən-thaaŋ)** = \"Travel/journey\"\n• **หนังสือเดินทาง (nǎŋ-sʉ̌ʉ dəən-thaaŋ)** = \"Passport\" (literally \"travel book\")\n\n**Common Transportation Phrases:**\n\n• **ไปไหน (pai nǎi)** = \"Where are you going?\"\n• **ไปทำงาน (pai tham-ŋaan)** = \"Go to work\"\n• **ไปบ้าน (pai bâan)** = \"Go home\"\n• **ไปตลาด (pai dtà-làat)** = \"Go to the market\"\n• **เรียกแกร็บ (rîak grɛ́p)** = \"Call a Grab\"\n• **ขึ้นรถ (khʉ̂n rót)** = \"Get in the car\"\n• **ลงรถ (loŋ rót)** = \"Get out of the car\"\n• **รถติด (rót dtìt)** = \"Traffic jam\" (literally \"car stuck\")\n• **ขับรถไป (khàp rót pai)** = \"Drive there\"\n• **เดินไป (dəən pai)** = \"Walk there\"\n\n**Airport Vocabulary:**\n\n**สนามบิน (sà-nǎam bin)** = Airport\n• **ไปสนามบิน (pai sà-nǎam bin)** = \"Go to the airport\"\n• Bangkok has two airports: Suvarnabhumi (BKK) and Don Mueang (DMK)\n\n**เครื่องบิน (khrʉ̂aŋ bin)** = Airplane\n• **ขึ้นเครื่องบิน (khʉ̂n khrʉ̂aŋ bin)** = \"Board the plane\"\n• **ลงเครื่องบิน (loŋ khrʉ̂aŋ bin)** = \"Get off the plane\"\n\n**หนังสือเดินทาง (nǎŋ-sʉ̌ʉ dəən-thaaŋ)** = Passport\n• Literally means \"travel book\"\n• Essential for international travel\n\n**วีซ่า (wii-sâa)** = Visa\n• Many nationalities get visa on arrival or visa exemption\n• **ต้องการวีซ่าไหม (dtɔ̂ŋ-gaan wii-sâa mái)** = \"Do you need a visa?\"\n\n**Traffic Conditions:**\n\n**รถติด (rót dtìt)** = Traffic jam\n• VERY common in Bangkok!\n• **รถติดมาก (rót dtìt mâak)** = \"Very heavy traffic\"\n• Rush hour (7-9 AM, 5-8 PM) is terrible\n\n**เร็ว (reo)** / **ช้า (cháa)** = Fast / Slow\n• **รถเร็ว (rót reo)** = \"Fast car\"\n• **รถช้า (rót cháa)** = \"Slow car\"\n• **ไปเร็วหน่อย (pai reo nɔ̀i)** = \"Go faster please\"\n\n**Pro Tips:**\n\n1. **Always use Grab** - It's safer, cheaper, and more reliable than taxis\n2. **Learn the BTS/MRT** (if you're in Bangkok) - Best way to avoid Bangkok traffic\n3. **Negotiate tuk-tuk prices** - Before getting in!\n4. **Wear sunglasses on motorcycle taxis** - If riding on the highway, or use a helmet with a wind visor\n5. **Google Maps works well** - But it often won't have addresses beyond business locations. Use carefully and trust locals. Don't even think about Apple Maps/Waze\n6. **Avoid rush hour** - 7-9 AM and 5-8 PM are terrible\n\n**Common Trip Patterns:**\n\n• **Home → Work**: Usually **นั่งแกร็บ (nâŋ grɛ́p)** or **ขับรถ (khàp rót)**\n• **Home → Market**: **เดินไป (dəən pai)** or **นั่งวิน (nâŋ win)**\n• **Home → Airport**: **นั่งแกร็บ (nâŋ grɛ́p)** or **ขึ้นรถไฟ (khʉ̂n rót fai)**\n• **Tourist areas**: **นั่งตุ๊กตุ๊ก (nâŋ túk-túk)** for fun!\n\nUnderstanding Thai transportation will make your life in Thailand much easier!",
                [LanguageCode.FRENCH]: "La Thaïlande dispose d'un système de transport diversifié et dynamique ! Comprendre comment se déplacer est essentiel pour la vie quotidienne.\n\n**Méthodes de transport courantes :**\n\n**1. Grab (แกร็บ)**\n• L'application de transport la plus populaire en Thaïlande\n• Plus sûre et plus fiable que les taxis réguliers\n• Prix fixes (pas de négociation de compteur !)\n\n**2. Taxis (แท็กซี่)**\n• Les taxis à compteur sont courants à Bangkok\n• Insistez toujours sur le compteur\n\n**3. Tuk-Tuks (รถตุ๊กตุ๊ก)**\n• Véhicules emblématiques à trois roues\n• Amusant pour les touristes mais souvent cher\n• Négociez TOUJOURS le prix avant de monter\n\n**Vocabulaire essentiel :**\n\n**รถ (rót)** = Voiture/Véhicule\n**ไป (pai)** = Aller\n**ขึ้น (khʉ̂n)** / **ลง (loŋ)** = Monter / Descendre\n**นั่ง (nâŋ)** = S'asseoir/Prendre\n**ขับ (khàp)** = Conduire\n**เดิน (dəən)** = Marcher",
                [LanguageCode.PORTUGUESE]: "A Tailândia tem um sistema de transporte diversificado e vibrante! Entender como se locomover é essencial para a vida diária.\n\n**Métodos comuns de transporte:**\n\n**1. Grab (แกร็บ)**\n• O aplicativo de transporte mais popular na Tailândia\n• Mais seguro e confiável que táxis regulares\n• Preços fixos (sem negociação de taxímetro!)\n\n**2. Táxis (แท็กซี่)**\n• Táxis com taxímetro são comuns em Bangkok\n• Sempre insista no taxímetro\n\n**3. Tuk-Tuks (รถตุ๊กตุ๊ก)**\n• Veículos icônicos de três rodas\n• Divertido para turistas mas geralmente caro\n• SEMPRE negocie o preço antes de entrar\n\n**Vocabulário essencial:**\n\n**รถ (rót)** = Carro/Veículo\n**ไป (pai)** = Ir\n**ขึ้น (khʉ̂n)** / **ลง (loŋ)** = Embarcar / Desembarcar\n**นั่ง (nâŋ)** = Sentar/Pegar\n**ขับ (khàp)** = Dirigir\n**เดิน (dəən)** = Andar",
                [LanguageCode.MANDARIN]: "泰國擁有多樣化且充滿活力的交通系統！了解如何出行對日常生活至關重要。\n\n**常見交通方式：**\n\n**1. Grab (แกร็บ)**\n• 泰國最受歡迎的叫車應用程式\n• 比普通計程車更安全可靠\n• 固定價格（無需討價還價！）\n\n**2. 計程車 (แท็กซี่)**\n• 曼谷常見計程車\n• 務必堅持使用計程表\n\n**3. 嘟嘟車 (รถตุ๊กตุ๊ก)**\n• 標誌性的三輪車\n• 對遊客來說很有趣但通常很貴\n• 上車前務必協商價格\n\n**基本詞彙：**\n\n**รถ (rót)** = 車/車輛\n**ไป (pai)** = 去\n**ขึ้น (khʉ̂n)** / **ลง (loŋ)** = 上車 / 下車\n**นั่ง (nâŋ)** = 坐/搭乘\n**ขับ (khàp)** = 開車\n**เดิน (dəən)** = 走路",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the blanks with the correct transportation method.",
                [LanguageCode.FRENCH]: "Remplissez les blancs avec le bon moyen de transport.",
                [LanguageCode.PORTUGUESE]: "Preencha os espaços com o método de transporte correto.",
                [LanguageCode.MANDARIN]: "填入正確的交通方式。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "I take a ___ to work every day", [LanguageCode.FRENCH]: "Je prends un ___ pour aller au travail chaque jour", [LanguageCode.PORTUGUESE]: "Eu pego um ___ para o trabalho todo dia", [LanguageCode.MANDARIN]: "我每天搭___去上班" }, correctAnswer: "แกร็บ/รถเมล์/รถไฟ", end: { [LanguageCode.ENGLISH]: " (Grab/bus/train)", [LanguageCode.FRENCH]: " (Grab/bus/train)", [LanguageCode.PORTUGUESE]: " (Grab/ônibus/trem)", [LanguageCode.MANDARIN]: " (Grab/公車/火車)" } },
                { start: { [LanguageCode.ENGLISH]: "The ___ to the airport is 300 baht", [LanguageCode.FRENCH]: "Le ___ pour l'aéroport coûte 300 bahts", [LanguageCode.PORTUGUESE]: "O ___ para o aeroporto custa 300 baht", [LanguageCode.MANDARIN]: "去機場的___是300泰銖" }, correctAnswer: "แท็กซี่/แกร็บ", end: { [LanguageCode.ENGLISH]: " (taxi/Grab)", [LanguageCode.FRENCH]: " (taxi/Grab)", [LanguageCode.PORTUGUESE]: " (táxi/Grab)", [LanguageCode.MANDARIN]: " (計程車/Grab)" } },
                { start: { [LanguageCode.ENGLISH]: "I ___ to the market because it's close", [LanguageCode.FRENCH]: "Je ___ au marché car c'est proche", [LanguageCode.PORTUGUESE]: "Eu ___ até o mercado porque é perto", [LanguageCode.MANDARIN]: "我___去市場因為很近" }, correctAnswer: "เดิน", end: { [LanguageCode.ENGLISH]: " (walk)", [LanguageCode.FRENCH]: " (marche)", [LanguageCode.PORTUGUESE]: " (ando)", [LanguageCode.MANDARIN]: " (走路)" } },
                { start: { [LanguageCode.ENGLISH]: "I need to ___ my car to work", [LanguageCode.FRENCH]: "Je dois ___ ma voiture au travail", [LanguageCode.PORTUGUESE]: "Eu preciso ___ meu carro para o trabalho", [LanguageCode.MANDARIN]: "我需要___車去上班" }, correctAnswer: "ขับ", end: { [LanguageCode.ENGLISH]: " (drive)", [LanguageCode.FRENCH]: " (conduire)", [LanguageCode.PORTUGUESE]: " (dirigir)", [LanguageCode.MANDARIN]: " (開)" } },
                { start: { [LanguageCode.ENGLISH]: "I ___ the bus at the station", [LanguageCode.FRENCH]: "Je ___ le bus à la station", [LanguageCode.PORTUGUESE]: "Eu ___ o ônibus na estação", [LanguageCode.MANDARIN]: "我在車站___公車" }, correctAnswer: "ขึ้น", end: { [LanguageCode.ENGLISH]: " (get on)", [LanguageCode.FRENCH]: " (monte dans)", [LanguageCode.PORTUGUESE]: " (embarco)", [LanguageCode.MANDARIN]: " (上)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to plan your trip correctly.",
                [LanguageCode.FRENCH]: "Organisez les mots pour planifier correctement votre voyage.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para planejar sua viagem corretamente.",
                [LanguageCode.MANDARIN]: "排列單詞以正確規劃您的行程。",
            },
            sentences: [
                { correctOrder: ["ผม", "ไป", "ทำงาน", "นั่ง", "แกร็บ"], hint: { [LanguageCode.ENGLISH]: "I go to work by Grab.", [LanguageCode.FRENCH]: "Je vais au travail en Grab.", [LanguageCode.PORTUGUESE]: "Eu vou para o trabalho de Grab.", [LanguageCode.MANDARIN]: "我搭Grab去上班。" } },
                { correctOrder: ["เขา", "ขับ", "รถ", "ไป", "สนามบิน"], hint: { [LanguageCode.ENGLISH]: "He drives to the airport.", [LanguageCode.FRENCH]: "Il conduit à l'aéroport.", [LanguageCode.PORTUGUESE]: "Ele dirige para o aeroporto.", [LanguageCode.MANDARIN]: "他開車去機場。" } },
                { correctOrder: ["เรา", "เดิน", "ไป", "ตลาด"], hint: { [LanguageCode.ENGLISH]: "We walk to the market.", [LanguageCode.FRENCH]: "Nous marchons au marché.", [LanguageCode.PORTUGUESE]: "Nós andamos até o mercado.", [LanguageCode.MANDARIN]: "我們走路去市場。" } },
                { correctOrder: ["พวกเขา", "นั่ง", "รถเมล์", "ไป", "โรงเรียน"], hint: { [LanguageCode.ENGLISH]: "They take the bus to school.", [LanguageCode.FRENCH]: "Ils prennent le bus pour aller à l'école.", [LanguageCode.PORTUGUESE]: "Eles pegam o ônibus para a escola.", [LanguageCode.MANDARIN]: "他們搭公車去學校。" } },
                { correctOrder: ["ดิฉัน", "ขึ้น", "เครื่องบิน", "ไป", "เชียงใหม่"], hint: { [LanguageCode.ENGLISH]: "I take a plane to Chiang Mai.", [LanguageCode.FRENCH]: "Je prends l'avion pour Chiang Mai.", [LanguageCode.PORTUGUESE]: "Eu pego um avião para Chiang Mai.", [LanguageCode.MANDARIN]: "我搭飛機去清邁。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the transportation method to the situation.",
                [LanguageCode.FRENCH]: "Associez le moyen de transport à la situation.",
                [LanguageCode.PORTUGUESE]: "Relacione o método de transporte à situação.",
                [LanguageCode.MANDARIN]: "將交通方式與情況配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Going to work", [LanguageCode.FRENCH]: "Aller au travail", [LanguageCode.PORTUGUESE]: "Indo para o trabalho", [LanguageCode.MANDARIN]: "去上班" }, answer: { [LanguageCode.ENGLISH]: "นั่งแกร็บ/ขับรถ", [LanguageCode.FRENCH]: "นั่งแกร็บ/ขับรถ", [LanguageCode.PORTUGUESE]: "นั่งแกร็บ/ขับรถ", [LanguageCode.MANDARIN]: "นั่งแกร็บ/ขับรถ" } },
                { prompt: { [LanguageCode.ENGLISH]: "Going to the market nearby", [LanguageCode.FRENCH]: "Aller au marché à proximité", [LanguageCode.PORTUGUESE]: "Indo ao mercado próximo", [LanguageCode.MANDARIN]: "去附近的市場" }, answer: { [LanguageCode.ENGLISH]: "เดินไป", [LanguageCode.FRENCH]: "เดินไป", [LanguageCode.PORTUGUESE]: "เดินไป", [LanguageCode.MANDARIN]: "เดินไป" } },
                { prompt: { [LanguageCode.ENGLISH]: "Going to the airport", [LanguageCode.FRENCH]: "Aller à l'aéroport", [LanguageCode.PORTUGUESE]: "Indo para o aeroporto", [LanguageCode.MANDARIN]: "去機場" }, answer: { [LanguageCode.ENGLISH]: "นั่งแกร็บ/แท็กซี่", [LanguageCode.FRENCH]: "นั่งแกร็บ/แท็กซี่", [LanguageCode.PORTUGUESE]: "นั่งแกร็บ/แท็กซี่", [LanguageCode.MANDARIN]: "นั่งแกร็บ/แท็กซี่" } },
                { prompt: { [LanguageCode.ENGLISH]: "Tourist sightseeing", [LanguageCode.FRENCH]: "Visite touristique", [LanguageCode.PORTUGUESE]: "Turismo", [LanguageCode.MANDARIN]: "觀光旅遊" }, answer: { [LanguageCode.ENGLISH]: "นั่งตุ๊กตุ๊ก", [LanguageCode.FRENCH]: "นั่งตุ๊กตุ๊ก", [LanguageCode.PORTUGUESE]: "นั่งตุ๊กตุ๊ก", [LanguageCode.MANDARIN]: "นั่งตุ๊กตุ๊ก" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct transportation vocabulary.",
                [LanguageCode.FRENCH]: "Choisissez le bon vocabulaire de transport.",
                [LanguageCode.PORTUGUESE]: "Escolha o vocabulário de transporte correto.",
                [LanguageCode.MANDARIN]: "選擇正確的交通詞彙。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "What is the most popular ride-hailing app in Thailand?", [LanguageCode.FRENCH]: "Quelle est l'application de transport la plus populaire en Thaïlande ?", [LanguageCode.PORTUGUESE]: "Qual é o aplicativo de transporte mais popular na Tailândia?", [LanguageCode.MANDARIN]: "泰國最受歡迎的叫車應用程式是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Uber", [LanguageCode.FRENCH]: "Uber", [LanguageCode.PORTUGUESE]: "Uber", [LanguageCode.MANDARIN]: "Uber" },
                        { [LanguageCode.ENGLISH]: "แกร็บ (Grab)", [LanguageCode.FRENCH]: "แกร็บ (Grab)", [LanguageCode.PORTUGUESE]: "แกร็บ (Grab)", [LanguageCode.MANDARIN]: "แกร็บ (Grab)" },
                        { [LanguageCode.ENGLISH]: "Lyft", [LanguageCode.FRENCH]: "Lyft", [LanguageCode.PORTUGUESE]: "Lyft", [LanguageCode.MANDARIN]: "Lyft" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you say 'to walk' in Thai?", [LanguageCode.FRENCH]: "Comment dit-on 'marcher' en thaï ?", [LanguageCode.PORTUGUESE]: "Como se diz 'andar' em tailandês?", [LanguageCode.MANDARIN]: "泰語中「走路」怎麼說？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขับ (drive)", [LanguageCode.FRENCH]: "ขับ (conduire)", [LanguageCode.PORTUGUESE]: "ขับ (dirigir)", [LanguageCode.MANDARIN]: "ขับ (開車)" },
                        { [LanguageCode.ENGLISH]: "เดิน (walk)", [LanguageCode.FRENCH]: "เดิน (marcher)", [LanguageCode.PORTUGUESE]: "เดิน (andar)", [LanguageCode.MANDARIN]: "เดิน (走路)" },
                        { [LanguageCode.ENGLISH]: "นั่ง (sit/ride)", [LanguageCode.FRENCH]: "นั่ง (s'asseoir/monter)", [LanguageCode.PORTUGUESE]: "นั่ง (sentar/pegar)", [LanguageCode.MANDARIN]: "นั่ง (坐)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What does รถติด (rót dtìt) mean?", [LanguageCode.FRENCH]: "Que signifie รถติด (rót dtìt) ?", [LanguageCode.PORTUGUESE]: "O que significa รถติด (rót dtìt)?", [LanguageCode.MANDARIN]: "รถติด (rót dtìt) 是什麼意思？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "Fast car", [LanguageCode.FRENCH]: "Voiture rapide", [LanguageCode.PORTUGUESE]: "Carro rápido", [LanguageCode.MANDARIN]: "快車" },
                        { [LanguageCode.ENGLISH]: "Traffic jam", [LanguageCode.FRENCH]: "Embouteillage", [LanguageCode.PORTUGUESE]: "Engarrafamento", [LanguageCode.MANDARIN]: "塞車" },
                        { [LanguageCode.ENGLISH]: "New car", [LanguageCode.FRENCH]: "Voiture neuve", [LanguageCode.PORTUGUESE]: "Carro novo", [LanguageCode.MANDARIN]: "新車" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What do you need to board an international flight?", [LanguageCode.FRENCH]: "De quoi avez-vous besoin pour embarquer sur un vol international ?", [LanguageCode.PORTUGUESE]: "O que você precisa para embarcar em um voo internacional?", [LanguageCode.MANDARIN]: "登上國際航班需要什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "หนังสือเดินทาง (passport)", [LanguageCode.FRENCH]: "หนังสือเดินทาง (passeport)", [LanguageCode.PORTUGUESE]: "หนังสือเดินทาง (passaporte)", [LanguageCode.MANDARIN]: "หนังสือเดินทาง (護照)" },
                        { [LanguageCode.ENGLISH]: "รถเมล์ (bus)", [LanguageCode.FRENCH]: "รถเมล์ (bus)", [LanguageCode.PORTUGUESE]: "รถเมล์ (ônibus)", [LanguageCode.MANDARIN]: "รถเมล์ (公車)" },
                        { [LanguageCode.ENGLISH]: "ตุ๊กตุ๊ก (tuk-tuk)", [LanguageCode.FRENCH]: "ตุ๊กตุ๊ก (tuk-tuk)", [LanguageCode.PORTUGUESE]: "ตุ๊กตุ๊ก (tuk-tuk)", [LanguageCode.MANDARIN]: "ตุ๊กตุ๊ก (嘟嘟車)" },
                    ],
                    correctIndex: 0
                },
            ]
        },
    ],
    listeningSpeaking: {
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "อธิบายว่าคุณไปสามสถานที่ทั่วไปอย่างไร",
            [LanguageCode.FRENCH]: "อธิบายว่าคุณไปสามสถานที่ทั่วไปอย่างไร",
            [LanguageCode.PORTUGUESE]: "อธิบายว่าคุณไปสามสถานที่ทั่วไปอย่างไร",
            [LanguageCode.MANDARIN]: "อธิบายว่าคุณไปสามสถานที่ทั่วไปอย่างไร",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Explain how you get to 3 common places. Example: phǒm pai tham-ŋaan nâŋ grɛ́p, phǒm pai dtà-làat dəən pai, phǒm pai sà-nǎam bin nâŋ thɛ́k-sîi (I go to work by Grab, I walk to the market, I take a taxi to the airport)",
            [LanguageCode.FRENCH]: "Expliquez comment vous vous rendez à 3 endroits courants. Exemple : phǒm pai tham-ŋaan nâŋ grɛ́p, phǒm pai dtà-làat dəən pai, phǒm pai sà-nǎam bin nâŋ thɛ́k-sîi (Je vais au travail en Grab, je marche au marché, je prends un taxi pour l'aéroport)",
            [LanguageCode.PORTUGUESE]: "Explique como você chega a 3 lugares comuns. Exemplo: phǒm pai tham-ŋaan nâŋ grɛ́p, phǒm pai dtà-làat dəən pai, phǒm pai sà-nǎam bin nâŋ thɛ́k-sîi (Eu vou para o trabalho de Grab, eu ando até o mercado, eu pego um táxi para o aeroporto)",
            [LanguageCode.MANDARIN]: "解釋你如何到達3個常見地點。例子：phǒm pai tham-ŋaan nâŋ grɛ́p, phǒm pai dtà-làat dəən pai, phǒm pai sà-nǎam bin nâŋ thɛ́k-sîi（我搭Grab去上班，我走路去市場，我搭計程車去機場）",
        }
    }
};

