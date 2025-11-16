import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_14: Lesson = {
    id: "1.14",
    title: {
        [LanguageCode.ENGLISH]: "Location & Direction Basics",
        [LanguageCode.FRENCH]: "Bases de localisation et direction",
        [LanguageCode.PORTUGUESE]: "Noções Básicas de Localização e Direção",
        [LanguageCode.MANDARIN]: "位置和方向基礎",
    },
    vocabulary: [
        // Location words
        { thai: "ที่นี่", phonetic: "thîi-nîi", translations: { [LanguageCode.ENGLISH]: "here / this place", [LanguageCode.FRENCH]: "ici / cet endroit", [LanguageCode.PORTUGUESE]: "aqui / este lugar", [LanguageCode.MANDARIN]: "這裡 / 這個地方" } },
        { thai: "ที่นั่น", phonetic: "thîi-nân", translations: { [LanguageCode.ENGLISH]: "there / that place", [LanguageCode.FRENCH]: "là-bas / cet endroit-là", [LanguageCode.PORTUGUESE]: "ali / aquele lugar", [LanguageCode.MANDARIN]: "那裡 / 那個地方" } },
        { thai: "ที่ไหน", phonetic: "thîi-nǎi", translations: { [LanguageCode.ENGLISH]: "where? / which place?", [LanguageCode.FRENCH]: "où ? / quel endroit ?", [LanguageCode.PORTUGUESE]: "onde? / qual lugar?", [LanguageCode.MANDARIN]: "哪裡？/ 哪個地方？" } },
        { thai: "อยู่", phonetic: "yùu", translations: { [LanguageCode.ENGLISH]: "to be located / to be at", [LanguageCode.FRENCH]: "être situé / être à", [LanguageCode.PORTUGUESE]: "estar localizado / estar em", [LanguageCode.MANDARIN]: "位於 / 在" } },

        // Position words (prepositions)
        { thai: "บน", phonetic: "bon", translations: { [LanguageCode.ENGLISH]: "on / on top of / above", [LanguageCode.FRENCH]: "sur / en haut de / au-dessus", [LanguageCode.PORTUGUESE]: "em cima de / sobre", [LanguageCode.MANDARIN]: "在上面 / 上方" } },
        { thai: "ล่าง", phonetic: "lâang", translations: { [LanguageCode.ENGLISH]: "below / under / downstairs", [LanguageCode.FRENCH]: "en bas / sous / en dessous", [LanguageCode.PORTUGUESE]: "embaixo / abaixo", [LanguageCode.MANDARIN]: "下面 / 樓下" } },
        { thai: "ข้าง", phonetic: "khâang", translations: { [LanguageCode.ENGLISH]: "side / next to / beside", [LanguageCode.FRENCH]: "côté / à côté de", [LanguageCode.PORTUGUESE]: "lado / ao lado de", [LanguageCode.MANDARIN]: "旁邊 / 側面" } },
        { thai: "ใน", phonetic: "nai", translations: { [LanguageCode.ENGLISH]: "in / inside", [LanguageCode.FRENCH]: "dans / à l'intérieur", [LanguageCode.PORTUGUESE]: "dentro / em", [LanguageCode.MANDARIN]: "在裡面 / 內" } },
        { thai: "นอก", phonetic: "nɔ̂ɔk", translations: { [LanguageCode.ENGLISH]: "outside / out", [LanguageCode.FRENCH]: "dehors / à l'extérieur", [LanguageCode.PORTUGUESE]: "fora / externo", [LanguageCode.MANDARIN]: "外面 / 外" } },
        { thai: "หน้า", phonetic: "nâa", translations: { [LanguageCode.ENGLISH]: "in front of / front", [LanguageCode.FRENCH]: "devant / en face de", [LanguageCode.PORTUGUESE]: "na frente de / frente", [LanguageCode.MANDARIN]: "前面 / 前方" } },
        { thai: "หลัง", phonetic: "lǎng", translations: { [LanguageCode.ENGLISH]: "behind / back", [LanguageCode.FRENCH]: "derrière / arrière", [LanguageCode.PORTUGUESE]: "atrás / trás", [LanguageCode.MANDARIN]: "後面 / 後方" } },

        // Distance
        { thai: "ใกล้", phonetic: "glâi", translations: { [LanguageCode.ENGLISH]: "near / close", [LanguageCode.FRENCH]: "près / proche", [LanguageCode.PORTUGUESE]: "perto / próximo", [LanguageCode.MANDARIN]: "近 / 附近" } },
        { thai: "ไกล", phonetic: "glai", translations: { [LanguageCode.ENGLISH]: "far / distant", [LanguageCode.FRENCH]: "loin / distant", [LanguageCode.PORTUGUESE]: "longe / distante", [LanguageCode.MANDARIN]: "遠 / 遙遠" } },

        // Direction verbs
        { thai: "ไป", phonetic: "bpai", translations: { [LanguageCode.ENGLISH]: "to go", [LanguageCode.FRENCH]: "aller", [LanguageCode.PORTUGUESE]: "ir", [LanguageCode.MANDARIN]: "去" } },
        { thai: "มา", phonetic: "maa", translations: { [LanguageCode.ENGLISH]: "to come", [LanguageCode.FRENCH]: "venir", [LanguageCode.PORTUGUESE]: "vir", [LanguageCode.MANDARIN]: "來" } },
        { thai: "เลี้ยว", phonetic: "líao", translations: { [LanguageCode.ENGLISH]: "to turn", [LanguageCode.FRENCH]: "tourner", [LanguageCode.PORTUGUESE]: "virar / dobrar", [LanguageCode.MANDARIN]: "轉彎" } },
        { thai: "ตรง", phonetic: "dtroŋ", translations: { [LanguageCode.ENGLISH]: "straight / direct", [LanguageCode.FRENCH]: "tout droit / direct", [LanguageCode.PORTUGUESE]: "reto / direto", [LanguageCode.MANDARIN]: "直 / 直走" } },
        { thai: "หยุด", phonetic: "yùt", translations: { [LanguageCode.ENGLISH]: "to stop", [LanguageCode.FRENCH]: "arrêter / s'arrêter", [LanguageCode.PORTUGUESE]: "parar", [LanguageCode.MANDARIN]: "停 / 停下" } },

        // Common places
        { thai: "ตลาด", phonetic: "dtà-làat", translations: { [LanguageCode.ENGLISH]: "market", [LanguageCode.FRENCH]: "marché", [LanguageCode.PORTUGUESE]: "mercado", [LanguageCode.MANDARIN]: "市場" } },
        { thai: "ร้าน", phonetic: "ráan", translations: { [LanguageCode.ENGLISH]: "shop / store", [LanguageCode.FRENCH]: "magasin / boutique", [LanguageCode.PORTUGUESE]: "loja", [LanguageCode.MANDARIN]: "商店 / 店" } },
        { thai: "ห้องน้ำ", phonetic: "hɔ̂ɔŋ-náam", translations: { [LanguageCode.ENGLISH]: "bathroom / restroom", [LanguageCode.FRENCH]: "toilettes / salle de bain", [LanguageCode.PORTUGUESE]: "banheiro", [LanguageCode.MANDARIN]: "廁所 / 洗手間" } },

        // Directional words
        { thai: "ซ้าย", phonetic: "sáai", translations: { [LanguageCode.ENGLISH]: "left", [LanguageCode.FRENCH]: "gauche", [LanguageCode.PORTUGUESE]: "esquerda", [LanguageCode.MANDARIN]: "左" } },
        { thai: "ขวา", phonetic: "khwǎa", translations: { [LanguageCode.ENGLISH]: "right", [LanguageCode.FRENCH]: "droite", [LanguageCode.PORTUGUESE]: "direita", [LanguageCode.MANDARIN]: "右" } },
        { thai: "ข้างหน้า", phonetic: "khâang-nâa", translations: { [LanguageCode.ENGLISH]: "ahead / in front", [LanguageCode.FRENCH]: "devant / en avant", [LanguageCode.PORTUGUESE]: "à frente / na frente", [LanguageCode.MANDARIN]: "前面 / 前方" } },

        // Additional useful words
        { thai: "ห้าง", phonetic: "hâaŋ", translations: { [LanguageCode.ENGLISH]: "shopping mall / department store", [LanguageCode.FRENCH]: "centre commercial / grand magasin", [LanguageCode.PORTUGUESE]: "shopping / loja de departamentos", [LanguageCode.MANDARIN]: "購物中心 / 百貨公司" } },
        { thai: "ถนน", phonetic: "thà-nǒn", translations: { [LanguageCode.ENGLISH]: "road / street", [LanguageCode.FRENCH]: "route / rue", [LanguageCode.PORTUGUESE]: "estrada / rua", [LanguageCode.MANDARIN]: "路 / 街道" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Navigating Thailand: Essential Direction Skills",
                [LanguageCode.FRENCH]: "Naviguer en Thaïlande : Compétences essentielles en direction",
                [LanguageCode.PORTUGUESE]: "Navegando pela Tailândia: Habilidades Essenciais de Direção",
                [LanguageCode.MANDARIN]: "在泰國導航：必備方向技能",
            },
            content: {
                [LanguageCode.ENGLISH]: "Learning basic directions in Thai is ESSENTIAL for getting around! Whether you're asking for the bathroom at a mall or giving directions to a Grab driver, these phrases will save you.\n\n**Key Direction Phrases for Grab/Taxi:**\n\n**หยุดที่นี่ (yùt thîi-nîi)** = \"Stop here\"\n• The MOST useful phrase when you're in a taxi or Grab!\n• Say this when you've arrived at your destination\n• Can also say: **จอดที่นี่ครับ/ค่ะ (jɔ̀ɔt thîi-nîi khráp/khâ)** = \"Park here\"\n\n**เลี้ยวซ้าย (líao sáai)** = \"Turn left\"\n**เลี้ยวขวา (líao khwǎa)** = \"Turn right\"\n**ตรงไป (dtroŋ bpai)** = \"Go straight\"\n\n**หยุดข้างหน้า (yùt khâang-nâa)** = \"Stop up ahead\"\n• Perfect for telling the driver to stop a bit further\n• Very natural and commonly used!\n\n**หยุดตรงนั้น (yùt dtroŋ nán)** = \"Stop right there\"\n• Point while you say this for clarity\n\n**ข้างหน้าอีกนิดหน่อย (khâang-nâa ìik nít nɔ̀i)** = \"A little bit further ahead\"\n\n**Finding the Bathroom at a Mall:**\n\n**ห้องน้ำอยู่ที่ไหนครับ/ค่ะ (hɔ̂ɔŋ-náam yùu thîi-nǎi khráp/khâ)** = \"Where is the bathroom?\"\n\nYou might hear:\n• **อยู่ข้างบน (yùu khâang bon)** = \"It's upstairs\"\n• **อยู่ข้างล่าง (yùu khâang lâang)** = \"It's downstairs\"\n• **อยู่ข้างหน้า (yùu khâang-nâa)** = \"It's ahead/in front\"\n• **อยู่ข้างหลัง (yùu khâang lǎng)** = \"It's in the back/behind\"\n• **เลี้ยวซ้ายแล้วตรงไป (líao sáai lɛ́ɛo dtroŋ bpai)** = \"Turn left then go straight\"\n\n**Position Words in Use:**\n\n**ใน (nai)** = in/inside\n• **อยู่ในห้าง (yùu nai hâaŋ)** = \"It's inside the mall\"\n• **ในร้าน (nai ráan)** = \"in the shop\"\n\n**นอก (nɔ̂ɔk)** = outside\n• **อยู่นอกห้าง (yùu nɔ̂ɔk hâaŋ)** = \"It's outside the mall\"\n\n**ข้าง (khâang)** = beside/next to\n• **อยู่ข้างร้านกาแฟ (yùu khâang ráan gaa-fɛɛ)** = \"It's next to the coffee shop\"\n• **ข้างๆ (khâang-khâang)** = right next to (more casual)\n\n**หน้า (nâa)** = in front of\n• **อยู่หน้าตลาด (yùu nâa dtà-làat)** = \"It's in front of the market\"\n\n**หลัง (lǎng)** = behind\n• **อยู่หลังร้าน (yùu lǎng ráan)** = \"It's behind the shop\"\n\n**Distance Indicators:**\n\n**ใกล้ (glâi)** = near/close\n• **ใกล้ที่นี่ (glâi thîi-nîi)** = \"close to here\"\n• **ใกล้มาก (glâi mâak)** = \"very close\"\n\n**ไกล (glai)** = far\n• **ไกลไหม (glai mǎi)** = \"Is it far?\"\n• **ไกลมาก (glai mâak)** = \"very far\"\n\n**Pro Tips:**\n\n1. **Always add ครับ/ค่ะ** at the end to be polite!\n2. **Point while giving directions** - it's totally normal and helpful\n3. **Repeat if needed** - drivers appreciate clear communication\n4. **Use simple phrases** - \"หยุดที่นี่\" is often enough!\n5. **Learn landmarks** - Thais often give directions using landmarks rather than street names\n\n**Common Patterns:**\n\n• **อยู่ + location** = \"is located at...\"\n• **ไป + direction** = \"go to...\"\n• **เลี้ยว + ซ้าย/ขวา** = \"turn left/right\"\n• **หยุด + location** = \"stop at...\"\n\n**Example Conversation with Grab Driver:**\n\nYou: **ไปตรงนี้ครับ (bpai dtroŋ nîi khráp)** = \"Go straight here\"\nDriver: คะ (khá) = \"Okay\"\nYou: **เลี้ยวขวาครับ (líao khwǎa khráp)** = \"Turn right\"\nYou: **หยุดข้างหน้าครับ (yùt khâang-nâa khráp)** = \"Stop up ahead\"\nYou: **ที่นี่พอดีครับ (thîi-nîi phɔɔ-dii khráp)** = \"Right here is perfect!\"\n\nMastering these basic direction phrases will make your life in Thailand SO much easier!",
                [LanguageCode.FRENCH]: "Apprendre les directions de base en thaï est ESSENTIEL pour se déplacer ! Que vous demandiez où sont les toilettes dans un centre commercial ou que vous donniez des directions à un chauffeur Grab, ces phrases vous sauveront.\n\n**Phrases clés pour Grab/Taxi :**\n\n**หยุดที่นี่ (yùt thîi-nîi)** = \"Arrêtez ici\"\n• La phrase LA PLUS utile quand vous êtes en taxi ou Grab !\n• Dites ceci quand vous êtes arrivé à destination\n\n**เลี้ยวซ้าย (líao sáai)** = \"Tournez à gauche\"\n**เลี้ยวขวา (líao khwǎa)** = \"Tournez à droite\"\n**ตรงไป (dtroŋ bpai)** = \"Allez tout droit\"\n\n**หยุดข้างหน้า (yùt khâang-nâa)** = \"Arrêtez plus loin\"\n**หยุดตรงนั้น (yùt dtroŋ nán)** = \"Arrêtez juste là\"\n\n**Trouver les toilettes au centre commercial :**\n\n**ห้องน้ำอยู่ที่ไหนครับ/ค่ะ (hɔ̂ɔŋ-náam yùu thîi-nǎi)** = \"Où sont les toilettes ?\"\n\nVous pourriez entendre :\n• **อยู่ข้างบน (yùu khâang bon)** = \"C'est en haut\"\n• **อยู่ข้างล่าง (yùu khâang lâang)** = \"C'est en bas\"\n• **อยู่ข้างหน้า (yùu khâang-nâa)** = \"C'est devant\"\n• **เลี้ยวซ้ายแล้วตรงไป (líao sáai lɛ́ɛo dtroŋ bpai)** = \"Tournez à gauche puis tout droit\"",
                [LanguageCode.PORTUGUESE]: "Aprender direções básicas em tailandês é ESSENCIAL para se locomover! Seja perguntando onde fica o banheiro no shopping ou dando direções para um motorista Grab, essas frases vão te salvar.\n\n**Frases-chave para Grab/Taxi:**\n\n**หยุดที่นี่ (yùt thîi-nîi)** = \"Pare aqui\"\n• A frase MAIS útil quando você está em um táxi ou Grab!\n• Diga isso quando chegar ao seu destino\n\n**เลี้ยวซ้าย (líao sáai)** = \"Vire à esquerda\"\n**เลี้ยวขวา (líao khwǎa)** = \"Vire à direita\"\n**ตรงไป (dtroŋ bpai)** = \"Vá em frente\"\n\n**หยุดข้างหน้า (yùt khâang-nâa)** = \"Pare mais à frente\"\n**หยุดตรงนั้น (yùt dtroŋ nán)** = \"Pare bem ali\"\n\n**Encontrando o banheiro no shopping:**\n\n**ห้องน้ำอยู่ที่ไหนครับ/ค่ะ (hɔ̂ɔŋ-náam yùu thîi-nǎi)** = \"Onde fica o banheiro?\"\n\nVocê pode ouvir:\n• **อยู่ข้างบน (yùu khâang bon)** = \"Fica no andar de cima\"\n• **อยู่ข้างล่าง (yùu khâang lâang)** = \"Fica no andar de baixo\"\n• **อยู่ข้างหน้า (yùu khâang-nâa)** = \"Fica à frente\"\n• **เลี้ยวซ้ายแล้วตรงไป (líao sáai lɛ́ɛo dtroŋ bpai)** = \"Vire à esquerda e siga em frente\"",
                [LanguageCode.MANDARIN]: "學習基本的泰語方向是至關重要的！無論您是在商場詢問廁所位置還是給 Grab 司機指路，這些短語都會幫助您。\n\n**Grab/計程車的關鍵短語：**\n\n**หยุดที่นี่ (yùt thîi-nîi)** = 「在這裡停」\n• 當您在計程車或 Grab 時最有用的短語！\n• 當您到達目的地時說這個\n\n**เลี้ยวซ้าย (líao sáai)** = 「左轉」\n**เลี้ยวขวา (líao khwǎa)** = 「右轉」\n**ตรงไป (dtroŋ bpai)** = 「直走」\n\n**หยุดข้างหน้า (yùt khâang-nâa)** = 「在前面停」\n**หยุดตรงนั้น (yùt dtroŋ nán)** = 「就在那裡停」\n\n**在商場找廁所：**\n\n**ห้องน้ำอยู่ที่ไหนครับ/ค่ะ (hɔ̂ɔŋ-náam yùu thîi-nǎi)** = 「廁所在哪裡？」\n\n您可能會聽到：\n• **อยู่ข้างบน (yùu khâang bon)** = 「在樓上」\n• **อยู่ข้างล่าง (yùu khâang lâang)** = 「在樓下」\n• **อยู่ข้างหน้า (yùu khâang-nâa)** = 「在前面」\n• **เลี้ยวซ้ายแล้วตรงไป (líao sáai lɛ́ɛo dtroŋ bpai)** = 「左轉然後直走」",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the location descriptions with the correct position words.",
                [LanguageCode.FRENCH]: "Remplissez les descriptions de localisation avec les bons mots de position.",
                [LanguageCode.PORTUGUESE]: "Complete as descrições de localização com as palavras de posição corretas.",
                [LanguageCode.MANDARIN]: "用正確的位置詞填寫位置描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "The bathroom is ___ the mall", [LanguageCode.FRENCH]: "Les toilettes sont ___ le centre commercial", [LanguageCode.PORTUGUESE]: "O banheiro fica ___ do shopping", [LanguageCode.MANDARIN]: "廁所在購物中心___" }, correctAnswer: "ใน/นอก", end: { [LanguageCode.ENGLISH]: " (inside/outside)", [LanguageCode.FRENCH]: " (dans/dehors)", [LanguageCode.PORTUGUESE]: " (dentro/fora)", [LanguageCode.MANDARIN]: " (裡面/外面)" } },
                { start: { [LanguageCode.ENGLISH]: "The shop is ___ the market", [LanguageCode.FRENCH]: "Le magasin est ___ le marché", [LanguageCode.PORTUGUESE]: "A loja fica ___ do mercado", [LanguageCode.MANDARIN]: "商店在市場___" }, correctAnswer: "ข้าง/หน้า/หลัง", end: { [LanguageCode.ENGLISH]: " (beside/in front/behind)", [LanguageCode.FRENCH]: " (à côté/devant/derrière)", [LanguageCode.PORTUGUESE]: " (ao lado/na frente/atrás)", [LanguageCode.MANDARIN]: " (旁邊/前面/後面)" } },
                { start: { [LanguageCode.ENGLISH]: "The restaurant is ___ upstairs", [LanguageCode.FRENCH]: "Le restaurant est ___ en haut", [LanguageCode.PORTUGUESE]: "O restaurante fica ___ no andar de cima", [LanguageCode.MANDARIN]: "餐廳在___樓上" }, correctAnswer: "ข้างบน/บน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Is it ___ from here?", [LanguageCode.FRENCH]: "Est-ce ___ d'ici ?", [LanguageCode.PORTUGUESE]: "Fica ___ daqui?", [LanguageCode.MANDARIN]: "從這裡___嗎？" }, correctAnswer: "ใกล้/ไกล", end: { [LanguageCode.ENGLISH]: " (near/far)", [LanguageCode.FRENCH]: " (près/loin)", [LanguageCode.PORTUGUESE]: " (perto/longe)", [LanguageCode.MANDARIN]: " (近/遠)" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the direction instructions in the correct order.",
                [LanguageCode.FRENCH]: "Mettez les instructions de direction dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque as instruções de direção na ordem correta.",
                [LanguageCode.MANDARIN]: "將方向指示按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["หยุด", "ที่นี่"], hint: { [LanguageCode.ENGLISH]: "Stop here", [LanguageCode.FRENCH]: "Arrêtez ici", [LanguageCode.PORTUGUESE]: "Pare aqui", [LanguageCode.MANDARIN]: "在這裡停" } },
                { correctOrder: ["เลี้ยว", "ซ้าย"], hint: { [LanguageCode.ENGLISH]: "Turn left", [LanguageCode.FRENCH]: "Tournez à gauche", [LanguageCode.PORTUGUESE]: "Vire à esquerda", [LanguageCode.MANDARIN]: "左轉" } },
                { correctOrder: ["เลี้ยว", "ขวา"], hint: { [LanguageCode.ENGLISH]: "Turn right", [LanguageCode.FRENCH]: "Tournez à droite", [LanguageCode.PORTUGUESE]: "Vire à direita", [LanguageCode.MANDARIN]: "右轉" } },
                { correctOrder: ["ตรง", "ไป"], hint: { [LanguageCode.ENGLISH]: "Go straight", [LanguageCode.FRENCH]: "Allez tout droit", [LanguageCode.PORTUGUESE]: "Vá em frente", [LanguageCode.MANDARIN]: "直走" } },
                { correctOrder: ["ห้องน้ำ", "อยู่", "ที่ไหน"], hint: { [LanguageCode.ENGLISH]: "Where is the bathroom?", [LanguageCode.FRENCH]: "Où sont les toilettes ?", [LanguageCode.PORTUGUESE]: "Onde fica o banheiro?", [LanguageCode.MANDARIN]: "廁所在哪裡？" } },
                { correctOrder: ["อยู่", "ข้าง", "บน"], hint: { [LanguageCode.ENGLISH]: "It's upstairs", [LanguageCode.FRENCH]: "C'est en haut", [LanguageCode.PORTUGUESE]: "Fica no andar de cima", [LanguageCode.MANDARIN]: "在樓上" } },
                { correctOrder: ["อยู่", "ข้าง", "ล่าง"], hint: { [LanguageCode.ENGLISH]: "It's downstairs", [LanguageCode.FRENCH]: "C'est en bas", [LanguageCode.PORTUGUESE]: "Fica no andar de baixo", [LanguageCode.MANDARIN]: "在樓下" } },
                { correctOrder: ["หยุด", "ข้างหน้า"], hint: { [LanguageCode.ENGLISH]: "Stop up ahead", [LanguageCode.FRENCH]: "Arrêtez plus loin", [LanguageCode.PORTUGUESE]: "Pare mais à frente", [LanguageCode.MANDARIN]: "在前面停" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the position words with their meanings.",
                [LanguageCode.FRENCH]: "Associez les mots de position avec leurs significations.",
                [LanguageCode.PORTUGUESE]: "Relacione as palavras de posição com seus significados.",
                [LanguageCode.MANDARIN]: "將位置詞與其含義配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "บน", [LanguageCode.FRENCH]: "บน", [LanguageCode.PORTUGUESE]: "บน", [LanguageCode.MANDARIN]: "บน" }, answer: { [LanguageCode.ENGLISH]: "on top / above", [LanguageCode.FRENCH]: "sur / au-dessus", [LanguageCode.PORTUGUESE]: "em cima / acima", [LanguageCode.MANDARIN]: "上面 / 上方" } },
                { prompt: { [LanguageCode.ENGLISH]: "ล่าง", [LanguageCode.FRENCH]: "ล่าง", [LanguageCode.PORTUGUESE]: "ล่าง", [LanguageCode.MANDARIN]: "ล่าง" }, answer: { [LanguageCode.ENGLISH]: "below / under", [LanguageCode.FRENCH]: "en bas / sous", [LanguageCode.PORTUGUESE]: "embaixo / abaixo", [LanguageCode.MANDARIN]: "下面 / 下方" } },
                { prompt: { [LanguageCode.ENGLISH]: "ข้าง", [LanguageCode.FRENCH]: "ข้าง", [LanguageCode.PORTUGUESE]: "ข้าง", [LanguageCode.MANDARIN]: "ข้าง" }, answer: { [LanguageCode.ENGLISH]: "beside / next to", [LanguageCode.FRENCH]: "à côté de", [LanguageCode.PORTUGUESE]: "ao lado de", [LanguageCode.MANDARIN]: "旁邊" } },
                { prompt: { [LanguageCode.ENGLISH]: "หน้า", [LanguageCode.FRENCH]: "หน้า", [LanguageCode.PORTUGUESE]: "หน้า", [LanguageCode.MANDARIN]: "หน้า" }, answer: { [LanguageCode.ENGLISH]: "in front of", [LanguageCode.FRENCH]: "devant", [LanguageCode.PORTUGUESE]: "na frente de", [LanguageCode.MANDARIN]: "前面" } },
                { prompt: { [LanguageCode.ENGLISH]: "หลัง", [LanguageCode.FRENCH]: "หลัง", [LanguageCode.PORTUGUESE]: "หลัง", [LanguageCode.MANDARIN]: "หลัง" }, answer: { [LanguageCode.ENGLISH]: "behind", [LanguageCode.FRENCH]: "derrière", [LanguageCode.PORTUGUESE]: "atrás", [LanguageCode.MANDARIN]: "後面" } },
                { prompt: { [LanguageCode.ENGLISH]: "ใน", [LanguageCode.FRENCH]: "ใน", [LanguageCode.PORTUGUESE]: "ใน", [LanguageCode.MANDARIN]: "ใน" }, answer: { [LanguageCode.ENGLISH]: "inside / in", [LanguageCode.FRENCH]: "dans / à l'intérieur", [LanguageCode.PORTUGUESE]: "dentro / em", [LanguageCode.MANDARIN]: "裡面 / 內" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best response for each direction scenario.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure réponse pour chaque scénario de direction.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor resposta para cada cenário de direção.",
                [LanguageCode.MANDARIN]: "為每個方向場景選擇最佳答案。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You're in a Grab and you've arrived. You say:", [LanguageCode.FRENCH]: "Vous êtes dans un Grab et vous êtes arrivé. Vous dites :", [LanguageCode.PORTUGUESE]: "Você está no Grab e chegou. Você diz:", [LanguageCode.MANDARIN]: "您在 Grab 中到達了。您說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "หยุดที่นี่", [LanguageCode.FRENCH]: "หยุดที่นี่ (arrêtez ici)", [LanguageCode.PORTUGUESE]: "หยุดที่นี่", [LanguageCode.MANDARIN]: "หยุดที่นี่ (在這裡停)" },
                        { [LanguageCode.ENGLISH]: "ไปที่นี่", [LanguageCode.FRENCH]: "ไปที่นี่", [LanguageCode.PORTUGUESE]: "ไปที่นี่ (vá aqui)", [LanguageCode.MANDARIN]: "ไปที่นี่ (去這裡)" },
                        { [LanguageCode.ENGLISH]: "มาที่นี่", [LanguageCode.FRENCH]: "มาที่นี่", [LanguageCode.PORTUGUESE]: "มาที่นี่", [LanguageCode.MANDARIN]: "มาที่นี่ (來這裡)" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "At the mall, you ask where the bathroom is. The person points upward. They say:", [LanguageCode.FRENCH]: "Au centre commercial, vous demandez où sont les toilettes. La personne pointe vers le haut. Elle dit :", [LanguageCode.PORTUGUESE]: "No shopping, você pergunta onde fica o banheiro. A pessoa aponta para cima. Ela diz:", [LanguageCode.MANDARIN]: "在商場，您問廁所在哪裡。那個人指向上方。他們說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อยู่ข้างล่าง (it's downstairs)", [LanguageCode.FRENCH]: "อยู่ข้างล่าง (c'est en bas)", [LanguageCode.PORTUGUESE]: "อยู่ข้างล่าง", [LanguageCode.MANDARIN]: "อยู่ข้างล่าง (在樓下)" },
                        { [LanguageCode.ENGLISH]: "อยู่ข้างบน (it's upstairs)", [LanguageCode.FRENCH]: "อยู่ข้างบน (c'est en haut)", [LanguageCode.PORTUGUESE]: "อยู่ข้างบน", [LanguageCode.MANDARIN]: "อยู่ข้างบน (在樓上)" },
                        { [LanguageCode.ENGLISH]: "อยู่ข้างนอก (it's outside)", [LanguageCode.FRENCH]: "อยู่ข้างนอก (c'est dehors)", [LanguageCode.PORTUGUESE]: "อยู่ข้างนอก", [LanguageCode.MANDARIN]: "อยู่ข้างนอก (在外面)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The driver needs to turn right. You say:", [LanguageCode.FRENCH]: "Le chauffeur doit tourner à droite. Vous dites :", [LanguageCode.PORTUGUESE]: "O motorista precisa virar à direita. Você diz:", [LanguageCode.MANDARIN]: "司機需要右轉。您說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เลี้ยวซ้าย", [LanguageCode.FRENCH]: "เลี้ยวซ้าย (tournez à gauche)", [LanguageCode.PORTUGUESE]: "เลี้ยวซ้าย (vire à esquerda)", [LanguageCode.MANDARIN]: "เลี้ยวซ้าย (左轉)" },
                        { [LanguageCode.ENGLISH]: "เลี้ยวขวา", [LanguageCode.FRENCH]: "เลี้ยวขวา (tournez à droite)", [LanguageCode.PORTUGUESE]: "เลี้ยวขวา (vire à direita)", [LanguageCode.MANDARIN]: "เลี้ยวขวา (右轉)" },
                        { [LanguageCode.ENGLISH]: "ตรงไป", [LanguageCode.FRENCH]: "ตรงไป", [LanguageCode.PORTUGUESE]: "ตรงไป (vá em frente)", [LanguageCode.MANDARIN]: "ตรงไป (直走)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You want to ask where something is. You say:", [LanguageCode.FRENCH]: "Vous voulez demander où se trouve quelque chose. Vous dites :", [LanguageCode.PORTUGUESE]: "Você quer perguntar onde algo está. Você diz:", [LanguageCode.MANDARIN]: "您想問某物在哪裡。您說：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "อยู่ที่นี่", [LanguageCode.FRENCH]: "อยู่ที่นี่", [LanguageCode.PORTUGUESE]: "อยู่ที่นี่ (está aqui)", [LanguageCode.MANDARIN]: "อยู่ที่นี่ (在這裡)" },
                        { [LanguageCode.ENGLISH]: "อยู่ที่ไหน", [LanguageCode.FRENCH]: "อยู่ที่ไหน (où est)", [LanguageCode.PORTUGUESE]: "อยู่ที่ไหน", [LanguageCode.MANDARIN]: "อยู่ที่ไหน (在哪裡)" },
                        { [LanguageCode.ENGLISH]: "อยู่ที่นั่น", [LanguageCode.FRENCH]: "อยู่ที่นั่น (est là-bas)", [LanguageCode.PORTUGUESE]: "อยู่ที่นั่น (está ali)", [LanguageCode.MANDARIN]: "อยู่ที่นั่น (在那裡)" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the Grab driver directions.",
                [LanguageCode.FRENCH]: "Complétez les directions pour le chauffeur Grab.",
                [LanguageCode.PORTUGUESE]: "Complete as direções para o motorista Grab.",
                [LanguageCode.MANDARIN]: "完成給 Grab 司機的方向指示。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "Turn left: เลี้ยว___", [LanguageCode.FRENCH]: "Tournez à gauche : เลี้ยว___", [LanguageCode.PORTUGUESE]: "Vire à esquerda: เลี้ยว___", [LanguageCode.MANDARIN]: "左轉：เลี้ยว___" }, correctAnswer: "ซ้าย", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Turn right: เลี้ยว___", [LanguageCode.FRENCH]: "Tournez à droite : เลี้ยว___", [LanguageCode.PORTUGUESE]: "Vire à direita: เลี้ยว___", [LanguageCode.MANDARIN]: "右轉：เลี้ยว___" }, correctAnswer: "ขวา", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Go straight: ___ไป", [LanguageCode.FRENCH]: "Allez tout droit : ___ไป", [LanguageCode.PORTUGUESE]: "Vá em frente: ___ไป", [LanguageCode.MANDARIN]: "直走：___ไป" }, correctAnswer: "ตรง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Stop here: ___ที่นี่", [LanguageCode.FRENCH]: "Arrêtez ici : ___ที่นี่", [LanguageCode.PORTUGUESE]: "Pare aqui: ___ที่นี่", [LanguageCode.MANDARIN]: "在這裡停：___ที่นี่" }, correctAnswer: "หยุด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Stop up ahead: หยุด___", [LanguageCode.FRENCH]: "Arrêtez plus loin : หยุด___", [LanguageCode.PORTUGUESE]: "Pare mais à frente: หยุด___", [LanguageCode.MANDARIN]: "在前面停：หยุด___" }, correctAnswer: "ข้างหน้า", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
    ],
    listeningSpeaking: {
        conversation: [],
        comprehensionQuestions: {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "No listening comprehension for this lesson.",
                [LanguageCode.FRENCH]: "Pas de compréhension orale pour cette leçon.",
                [LanguageCode.PORTUGUESE]: "Sem compreensão auditiva para esta lição.",
                [LanguageCode.MANDARIN]: "本課沒有聽力理解。",
            },
            questions: []
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "ให้คำแนะนำจากบ้านของคุณไปยังสองสถานที่",
            [LanguageCode.FRENCH]: "ให้คำแนะนำจากบ้านของคุณไปยังสองสถานที่",
            [LanguageCode.PORTUGUESE]: "ให้คำแนะนำจากบ้านของคุณไปยังสองสถานที่",
            [LanguageCode.MANDARIN]: "ให้คำแนะนำจากบ้านของคุณไปยังสองสถานที่",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Give directions from your house to 2 places (e.g., nearest market, mall, or restaurant). Use direction words like ตรงไป (go straight), เลี้ยวซ้าย (turn left), เลี้ยวขวา (turn right), ใกล้ (near), ไกล (far). Example: จากบ้านฉันไปตลาดใกล้มาก ตรงไปแล้วเลี้ยวซ้าย (From my house to the market is very close. Go straight then turn left)",
            [LanguageCode.FRENCH]: "Donnez des directions depuis votre maison vers 2 endroits (par exemple, le marché le plus proche, le centre commercial ou le restaurant). Utilisez des mots de direction comme ตรงไป (aller tout droit), เลี้ยวซ้าย (tourner à gauche), เลี้ยวขวา (tourner à droite), ใกล้ (près), ไกล (loin).",
            [LanguageCode.PORTUGUESE]: "Dê direções da sua casa para 2 lugares (por exemplo, mercado mais próximo, shopping ou restaurante). Use palavras de direção como ตรงไป (vá em frente), เลี้ยวซ้าย (vire à esquerda), เลี้ยวขวา (vire à direita), ใกล้ (perto), ไกล (longe).",
            [LanguageCode.MANDARIN]: "從您家到2個地方的方向指示（例如，最近的市場、購物中心或餐廳）。使用方向詞如 ตรงไป（直走）、เลี้ยวซ้าย（左轉）、เลี้ยวขวา（右轉）、ใกล้（近）、ไกล（遠）。",
        },
        speakingType: 'open-ended'
    }
};
