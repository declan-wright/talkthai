import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_2_3: Lesson = {
    id: "2.3",
    title: {
        [LanguageCode.ENGLISH]: "Hobbies & Free Time",
        [LanguageCode.FRENCH]: "Loisirs et temps libre",
        [LanguageCode.PORTUGUESE]: "Hobbies e tempo livre",
        [LanguageCode.MANDARIN]: "愛好與閒暇時間",
    },
    vocabulary: [
        // Core hobby/activity words
        { thai: "งานอดิเรก", phonetic: "ngaan à-dì-rèek", translations: { [LanguageCode.ENGLISH]: "hobby", [LanguageCode.FRENCH]: "passe-temps", [LanguageCode.PORTUGUESE]: "hobby", [LanguageCode.MANDARIN]: "愛好" } },
        { thai: "เวลาว่าง", phonetic: "weh-laa wâang", translations: { [LanguageCode.ENGLISH]: "free time", [LanguageCode.FRENCH]: "temps libre", [LanguageCode.PORTUGUESE]: "tempo livre", [LanguageCode.MANDARIN]: "空閒時間" } },
        { thai: "เล่น", phonetic: "lên", translations: { [LanguageCode.ENGLISH]: "play/do (activity)", [LanguageCode.FRENCH]: "jouer/faire", [LanguageCode.PORTUGUESE]: "brincar/fazer", [LanguageCode.MANDARIN]: "玩/做" } },
        { thai: "ชอบ", phonetic: "chɔ̂ɔp", translations: { [LanguageCode.ENGLISH]: "like/love", [LanguageCode.FRENCH]: "aimer", [LanguageCode.PORTUGUESE]: "gostar", [LanguageCode.MANDARIN]: "喜歡" } },

        // Sports & Physical Activities
        { thai: "กีฬา", phonetic: "gii-laa", translations: { [LanguageCode.ENGLISH]: "sports", [LanguageCode.FRENCH]: "sport", [LanguageCode.PORTUGUESE]: "esporte", [LanguageCode.MANDARIN]: "運動" } },
        { thai: "ฟุตบอล", phonetic: "fút-bɔɔn", translations: { [LanguageCode.ENGLISH]: "football/soccer", [LanguageCode.FRENCH]: "football", [LanguageCode.PORTUGUESE]: "futebol", [LanguageCode.MANDARIN]: "足球" } },
        { thai: "บาส", phonetic: "bàat", translations: { [LanguageCode.ENGLISH]: "basketball", [LanguageCode.FRENCH]: "basket", [LanguageCode.PORTUGUESE]: "basquete", [LanguageCode.MANDARIN]: "籃球" } },
        { thai: "มวย", phonetic: "muay", translations: { [LanguageCode.ENGLISH]: "boxing/Muay Thai", [LanguageCode.FRENCH]: "boxe/Muay Thai", [LanguageCode.PORTUGUESE]: "boxe/Muay Thai", [LanguageCode.MANDARIN]: "拳擊/泰拳" } },
        { thai: "ว่ายน้ำ", phonetic: "wâai-náam", translations: { [LanguageCode.ENGLISH]: "swim/swimming", [LanguageCode.FRENCH]: "nager/natation", [LanguageCode.PORTUGUESE]: "nadar/natação", [LanguageCode.MANDARIN]: "游泳" } },
        { thai: "ปิงปอง", phonetic: "bping-bpɔɔng", translations: { [LanguageCode.ENGLISH]: "ping pong/table tennis", [LanguageCode.FRENCH]: "ping-pong/tennis de table", [LanguageCode.PORTUGUESE]: "pingue-pongue/tênis de mesa", [LanguageCode.MANDARIN]: "乒乓球/桌球" } },
        { thai: "ฟิตเนส", phonetic: "fít-nêet", translations: { [LanguageCode.ENGLISH]: "gym", [LanguageCode.FRENCH]: "salle de sport", [LanguageCode.PORTUGUESE]: "academia", [LanguageCode.MANDARIN]: "健身房" } },
        { thai: "โยคะ", phonetic: "yoh-khá", translations: { [LanguageCode.ENGLISH]: "yoga", [LanguageCode.FRENCH]: "yoga", [LanguageCode.PORTUGUESE]: "yoga", [LanguageCode.MANDARIN]: "瑜伽" } },
        { thai: "เทนนิส", phonetic: "then-nít", translations: { [LanguageCode.ENGLISH]: "tennis", [LanguageCode.FRENCH]: "tennis", [LanguageCode.PORTUGUESE]: "tênis", [LanguageCode.MANDARIN]: "網球" } },
        { thai: "ปั่นจักรยาน", phonetic: "bpàn jàk-grà-yaan", translations: { [LanguageCode.ENGLISH]: "ride bicycle/cycling", [LanguageCode.FRENCH]: "faire du vélo", [LanguageCode.PORTUGUESE]: "andar de bicicleta", [LanguageCode.MANDARIN]: "騎自行車" } },
        { thai: "เต้น", phonetic: "dtên", translations: { [LanguageCode.ENGLISH]: "dance/dancing", [LanguageCode.FRENCH]: "danser/danse", [LanguageCode.PORTUGUESE]: "dançar/dança", [LanguageCode.MANDARIN]: "跳舞" } },

        // Entertainment & Media
        { thai: "ดูหนัง", phonetic: "duu nǎng", translations: { [LanguageCode.ENGLISH]: "watch movies", [LanguageCode.FRENCH]: "regarder des films", [LanguageCode.PORTUGUESE]: "assistir filmes", [LanguageCode.MANDARIN]: "看電影" } },
        { thai: "ฟังเพลง", phonetic: "fang phlehng", translations: { [LanguageCode.ENGLISH]: "listen to music", [LanguageCode.FRENCH]: "écouter de la musique", [LanguageCode.PORTUGUESE]: "ouvir música", [LanguageCode.MANDARIN]: "聽音樂" } },
        { thai: "อ่านหนังสือ", phonetic: "àan nǎng-sʉ̌ʉ", translations: { [LanguageCode.ENGLISH]: "read books", [LanguageCode.FRENCH]: "lire des livres", [LanguageCode.PORTUGUESE]: "ler livros", [LanguageCode.MANDARIN]: "看書" } },
        { thai: "เล่นเกม", phonetic: "lên geehm", translations: { [LanguageCode.ENGLISH]: "play games/gaming", [LanguageCode.FRENCH]: "jouer aux jeux vidéo", [LanguageCode.PORTUGUESE]: "jogar videogames", [LanguageCode.MANDARIN]: "玩遊戲" } },
        { thai: "เล่นมือถือ", phonetic: "lên mʉʉ-thʉ̌ʉ", translations: { [LanguageCode.ENGLISH]: "use phone (gaming/social)", [LanguageCode.FRENCH]: "utiliser le téléphone", [LanguageCode.PORTUGUESE]: "usar celular", [LanguageCode.MANDARIN]: "玩手機" } },
        { thai: "ดูซีรีส์", phonetic: "duu sii-ríi", translations: { [LanguageCode.ENGLISH]: "watch series/shows", [LanguageCode.FRENCH]: "regarder des séries", [LanguageCode.PORTUGUESE]: "assistir séries", [LanguageCode.MANDARIN]: "看連續劇" } },
        { thai: "เน็ตฟลิกซ์", phonetic: "nét-fá-lík", translations: { [LanguageCode.ENGLISH]: "Netflix", [LanguageCode.FRENCH]: "Netflix", [LanguageCode.PORTUGUESE]: "Netflix", [LanguageCode.MANDARIN]: "Netflix" } },
        { thai: "ยูทูป", phonetic: "yuu-thûup", translations: { [LanguageCode.ENGLISH]: "YouTube", [LanguageCode.FRENCH]: "YouTube", [LanguageCode.PORTUGUESE]: "YouTube", [LanguageCode.MANDARIN]: "YouTube" } },

        // Creative & Social Hobbies
        { thai: "เล่นดนตรี", phonetic: "lên don-dtrii", translations: { [LanguageCode.ENGLISH]: "play music/instruments", [LanguageCode.FRENCH]: "jouer de la musique/instruments", [LanguageCode.PORTUGUESE]: "tocar música/instrumentos", [LanguageCode.MANDARIN]: "演奏音樂/樂器" } },
        { thai: "วาดรูป", phonetic: "wâat rûup", translations: { [LanguageCode.ENGLISH]: "draw/drawing", [LanguageCode.FRENCH]: "dessiner", [LanguageCode.PORTUGUESE]: "desenhar", [LanguageCode.MANDARIN]: "畫畫" } },
        { thai: "แคมป์ปิ้ง", phonetic: "khɛ́m-bpîng", translations: { [LanguageCode.ENGLISH]: "camping", [LanguageCode.FRENCH]: "camping", [LanguageCode.PORTUGUESE]: "acampar/camping", [LanguageCode.MANDARIN]: "露營" } },
        { thai: "ท่องเที่ยว", phonetic: "thɔ̂ɔng-thîao", translations: { [LanguageCode.ENGLISH]: "travel/tourism", [LanguageCode.FRENCH]: "voyager/tourisme", [LanguageCode.PORTUGUESE]: "viajar/turismo", [LanguageCode.MANDARIN]: "旅遊" } },
        { thai: "ช็อป", phonetic: "chɔ́p", translations: { [LanguageCode.ENGLISH]: "shop/shopping", [LanguageCode.FRENCH]: "faire du shopping", [LanguageCode.PORTUGUESE]: "fazer compras", [LanguageCode.MANDARIN]: "購物" } },
        { thai: "คาราโอเกะ", phonetic: "khaa-raa-oh-gé", translations: { [LanguageCode.ENGLISH]: "karaoke", [LanguageCode.FRENCH]: "karaoké", [LanguageCode.PORTUGUESE]: "karaokê", [LanguageCode.MANDARIN]: "卡拉OK" } },
        { thai: "นอน", phonetic: "nɔɔn", translations: { [LanguageCode.ENGLISH]: "sleep/nap", [LanguageCode.FRENCH]: "dormir/faire la sieste", [LanguageCode.PORTUGUESE]: "dormir/cochilar", [LanguageCode.MANDARIN]: "睡覺" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Leisure Culture: How Thais Spend Free Time",
                [LanguageCode.FRENCH]: "Culture des loisirs thaïlandaise : Comment les Thaïlandais passent leur temps libre",
                [LanguageCode.PORTUGUESE]: "Cultura de lazer tailandesa: Como os tailandeses passam o tempo livre",
                [LanguageCode.MANDARIN]: "泰國休閒文化：泰國人如何度過閒暇時間",
            },
            content: {
                [LanguageCode.ENGLISH]: "Understanding how Thais talk about hobbies and leisure activities is essential for making friends and having conversations!\n\n**Core Phrases:**\n\n**ชอบ (chɔ̂ɔp) = like/love**\n• This is THE most important word!\n• \"ชอบทำอะไร (chɔ̂ɔp tham à-rai)\" = \"What do you like to do?\"\n• \"ผมชอบเล่นกีฬา (phǒm chɔ̂ɔp lên gii-laa)\" = \"I like playing sports\"\n\n**เล่น (lên) = play/do**\n• VERY versatile! Used for sports, games, instruments, activities\n• \"เล่นฟุตบอล\" (lên fút-bɔɔn) = play football\n• \"เล่นเกม\" (lên geehm) = play games\n• \"เล่นมือถือ\" (lên mʉʉ-thʉ̌ʉ) = use phone (for fun)\n\n**งานอดิเรก (ngaan à-dì-rèek) = hobby**\n• More formal way to say \"hobby\"\n• \"งานอดิเรกของคุณคืออะไร\" = \"What's your hobby?\"\n• In casual conversation, just use \"ชอบทำอะไร\" (what do you like to do?)\n\n**Sports & Fitness:**\n\nThais are VERY into fitness and sports, especially in cities!\n\n**Popular Sports:**\n• **ฟุตบอล (fút-bɔɔn)** = Football/Soccer - THE most popular sport!\n• **บาส (bàat)** = Basketball - shortened from บาสเกตบอล\n  - Note: Thais ALWAYS say \"บาส\", never the full word!\n• **มวย (muay)** = Muay Thai boxing\n• **วอลเลย์บอล (wɔɔn-lee-bɔɔn)** = Volleyball\n• **แบดมินตัน (bɛ̀t-min-tan)** = Badminton\n\n**Fitness Culture:**\n• **ออกกำลังกาย (ɔ̀ɔk gam-lang gaai)** = exercise (formal)\n  - Literally \"release strength body\"\n• **ฟิตเนส (fít-nêet)** = gym/fitness\n  - \"ไปฟิตเนส\" (bpai fít-nêet) = go to the gym\n  - Super popular among young urban Thais!\n• **วิ่ง (wîng)** = running\n  - \"วิ่งเล่น\" (wîng lên) = jog casually\n  - \"วิ่งมาราธอน\" (wîng maa-raa-thɔɔn) = run marathons\n• **โยคะ (yoh-khá)** = yoga\n  - Increasingly popular!\n\n**Entertainment & Digital Life:**\n\nYoung Thais are EXTREMELY online and into entertainment!\n\n**Watching & Listening:**\n• **ดูหนัง (duu nǎng)** = watch movies\n  - \"ดูหนังที่โรงหนัง\" = watch at cinema\n  - \"ดูหนังที่บ้าน\" = watch at home\n• **ดูซีรีส์ (duu sii-ríi)** = watch series/shows\n  - HUGE in Thailand! Thai dramas (ละคร - lá-khɔɔn) are very popular\n• **เน็ตฟลิกซ์ (nét-fá-lík)** = Netflix\n  - Yes, they use the Thai transliteration!\n  - \"ดูเน็ตฟลิกซ์\" = watch Netflix\n• **ฟังเพลง (fang phlehng)** = listen to music\n  - Music is HUGE in Thai culture\n\n**Gaming & Social Media:**\n• **เล่นเกม (lên geehm)** = play games/gaming\n  - Mobile gaming is MASSIVE in Thailand\n  - Popular: RoV (เกม RoV), PUBG, Free Fire\n• **เล่นมือถือ (lên mʉʉ-thʉ̌ʉ)** = use phone (for entertainment)\n  - Literally \"play mobile phone\"\n  - Used for gaming AND scrolling social media\n• **ยูทูป (yuu-thûup)** = YouTube\n  - Extremely popular! Many Thai YouTubers\n• Social media apps:\n  - IG (ไอจี) = Instagram\n  - TikTok (ทิกต็อก)\n  - Facebook is still huge in Thailand!\n\n**Creative & Lifestyle Hobbies:**\n\n• **ทำอาหาร (tham aa-hǎan)** = cooking\n  - \"ชอบทำอาหาร\" = like cooking\n  - Food is life in Thailand!\n• **วาดรูป (wâat rûup)** = drawing/art\n• **ถ่ายรูป (thàai rûup)** = photography\n  - Thai people LOVE taking photos!\n  - IG culture is huge\n• **อ่านหนังสือ (àan nǎng-sʉ̌ʉ)** = reading books\n  - Also used for reading anything (articles, etc.)\n• **ช็อป (chɔ́p)** = shopping\n  - Shortened from ช็อปปิ้ง (chɔ́p-bpîng)\n  - \"ไปช็อป\" (bpai chɔ́p) = go shopping\n  - Shopping malls (ห้าง - hâang) are social hubs!\n\n**Going Out & Social Activities:**\n\n• **ท่องเที่ยว (thɔ̂ɔng-thîao)** = travel/tourism\n  - Thais LOVE to travel, both domestically and internationally\n• **ไปเที่ยว (bpai thîao)** = go out/hang out/go somewhere fun\n  - Very common phrase!\n  - \"เที่ยวไหนมา\" (thîao nǎi maa) = \"Where did you go?\"\n• **คาราโอเกะ (khaa-raa-oh-gé)** = karaoke\n  - SUPER popular in Thailand!\n  - Social activity with friends\n• **กินข้าว (gin khâao)** = eat (literally \"eat rice\")\n  - Going out to eat IS a hobby in Thailand!\n  - \"ชอบกินข้าว\" = love eating/going to restaurants\n\n**The Ultimate Thai Hobby:**\n\n• **นอน (nɔɔn)** = sleep/nap\n  - Yes, this is legitimately a hobby!\n  - \"ชอบนอน\" (chɔ̂ɔp nɔɔn) = love sleeping\n  - \"วันหยุดนอนทั้งวัน\" = sleep all day on holidays\n  - VERY relatable for many Thais!\n\n**Asking About Hobbies - Common Questions:**\n\n1. **ชอบทำอะไรในเวลาว่าง (chɔ̂ɔp tham à-rai nai weh-laa wâang)**\n   = \"What do you like to do in your free time?\"\n   - Most natural way to ask!\n\n2. **งานอดิเรกของคุณคืออะไร (ngaan à-dì-rèek khɔ̌ɔng khun khʉʉ à-rai)**\n   = \"What is your hobby?\"\n   - More formal\n\n3. **เล่นกีฬาไหม (lên gii-laa mǎi)**\n   = \"Do you play any sports?\"\n\n4. **ชอบดูหนังไหม (chɔ̂ɔp duu nǎng mǎi)**\n   = \"Do you like watching movies?\"\n\n**Answering About Your Hobbies:**\n\nPattern: **ผม/ดิฉัน + ชอบ + [activity]**\n\nExamples:\n• \"ผมชอบเล่นฟุตบอล\" (phǒm chɔ̂ɔp lên fút-bɔɔn) = I like playing football\n• \"ดิฉันชอบดูซีรีส์\" (dì-chǎn chɔ̂ɔp duu sii-ríi) = I like watching series\n• \"ผมชอบไปฟิตเนส\" (phǒm chɔ̂ɔp bpai fít-nêet) = I like going to the gym\n• \"ชอบฟังเพลงและเล่นเกม\" = I like listening to music and playing games\n\n**Expressing Frequency:**\n\n• **ทุกวัน (thúk wan)** = every day\n• **บ่อยๆ (bɔ̀ɔi bɔ̀ɔi)** = often\n• **เป็นบางครั้ง (bpen baang khráng)** = sometimes\n• **วันหยุด (wan yùt)** = on holidays/weekends\n• **เวลาว่าง (weh-laa wâang)** = in free time\n\nExamples:\n• \"ผมเล่นบาสทุกวัน\" = I play basketball every day\n• \"ดูเน็ตฟลิกซ์บ่อยๆ\" = Watch Netflix often\n• \"ไปช็อปเป็นบางครั้ง\" = Go shopping sometimes\n\n**Cultural Notes:**\n\n1. **Work-Life Balance:** While traditional Thai culture values hard work (ขยัน), younger Thais increasingly value work-life balance and leisure time.\n\n2. **Group Activities:** Thais prefer doing activities WITH friends rather than alone. Asking \"ไปด้วยกันไหม\" (bpai dûay gan mǎi) = \"Want to go together?\" is very common!\n\n3. **Food = Activity:** Eating out and trying new restaurants is genuinely considered a leisure activity in Thailand. Don't be surprised when someone lists \"กินข้าว\" (eating) as their hobby!\n\n4. **Mobile Everything:** Thailand is extremely mobile-first. Most entertainment and social life happens through phones - from gaming to shopping to socializing.\n\n5. **Mall Culture:** Shopping malls are social hubs, not just for shopping but for hanging out, eating, watching movies, and escaping the heat!\n\n6. **Sanuk (สนุก):** The concept of \"fun\" is central to Thai culture. Activities should be สนุก (fun). If something isn't fun, Thais might lose interest quickly!\n\nRemember: When talking about hobbies with Thais, be ready to actually DO these activities together - it's a great way to make friends!",
                [LanguageCode.FRENCH]: "Comprendre comment les Thaïlandais parlent des loisirs et des activités de détente est essentiel pour se faire des amis et avoir des conversations !\n\n**Phrases essentielles :**\n\n**ชอบ (chɔ̂ɔp) = aimer**\n• C'est LE mot le plus important !\n• \"ชอบทำอะไร\" = \"Qu'aimez-vous faire ?\"\n\n**เล่น (lên) = jouer/faire**\n• Très polyvalent ! Utilisé pour les sports, les jeux, les instruments, les activités\n\n**Sports et fitness :**\n• **ฟุตบอล (fút-bɔɔn)** = Football - le sport le plus populaire !\n• **บาส (bàat)** = Basketball\n• **ฟิตเนส (fít-nêet)** = gym/fitness\n\n**Divertissement :**\n• **ดูหนัง (duu nǎng)** = regarder des films\n• **ฟังเพลง (fang phlehng)** = écouter de la musique\n• **เล่นเกม (lên geehm)** = jouer aux jeux vidéo",
                [LanguageCode.PORTUGUESE]: "Entender como os tailandeses falam sobre hobbies e atividades de lazer é essencial para fazer amigos e ter conversas!\n\n**Frases principais:**\n\n**ชอบ (chɔ̂ɔp) = gostar**\n• Esta é A palavra mais importante!\n• \"ชอบทำอะไร\" = \"O que você gosta de fazer?\"\n\n**เล่น (lên) = brincar/fazer**\n• MUITO versátil! Usado para esportes, jogos, instrumentos, atividades\n\n**Esportes e fitness:**\n• **ฟุตบอล (fút-bɔɔn)** = Futebol - o esporte mais popular!\n• **บาส (bàat)** = Basquete\n• **ฟิตเนส (fít-nêet)** = academia/fitness\n\n**Entretenimento:**\n• **ดูหนัง (duu nǎng)** = assistir filmes\n• **ฟังเพลง (fang phlehng)** = ouvir música\n• **เล่นเกม (lên geehm)** = jogar videogames",
                [LanguageCode.MANDARIN]: "了解泰國人如何談論愛好和休閒活動對於交朋友和進行對話至關重要！\n\n**核心短語：**\n\n**ชอบ (chɔ̂ɔp) = 喜歡**\n• 這是最重要的詞！\n• \"ชอบทำอะไร\" = \"你喜歡做什麼？\"\n\n**เล่น (lên) = 玩/做**\n• 非常多用途！用於運動、遊戲、樂器、活動\n\n**運動和健身：**\n• **ฟุตบอล (fút-bɔɔn)** = 足球 - 最受歡迎的運動！\n• **บาส (bàat)** = 籃球\n• **ฟิตเนส (fít-nêet)** = 健身房/健身\n\n**娛樂：**\n• **ดูหนัง (duu nǎng)** = 看電影\n• **ฟังเพลง (fang phlehng)** = 聽音樂\n• **เล่นเกม (lên geehm)** = 玩遊戲",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the sports and activities.",
                [LanguageCode.FRENCH]: "Associez les sports et activités.",
                [LanguageCode.PORTUGUESE]: "Relacione os esportes e atividades.",
                [LanguageCode.MANDARIN]: "配對運動和活動。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "football/soccer", [LanguageCode.FRENCH]: "football", [LanguageCode.PORTUGUESE]: "futebol", [LanguageCode.MANDARIN]: "足球" }, answer: { [LanguageCode.ENGLISH]: "ฟุตบอล", [LanguageCode.FRENCH]: "ฟุตบอล", [LanguageCode.PORTUGUESE]: "ฟุตบอล", [LanguageCode.MANDARIN]: "ฟุตบอล" } },
                { prompt: { [LanguageCode.ENGLISH]: "basketball", [LanguageCode.FRENCH]: "basket", [LanguageCode.PORTUGUESE]: "basquete", [LanguageCode.MANDARIN]: "籃球" }, answer: { [LanguageCode.ENGLISH]: "บาส", [LanguageCode.FRENCH]: "บาส", [LanguageCode.PORTUGUESE]: "บาส", [LanguageCode.MANDARIN]: "บาส" } },
                { prompt: { [LanguageCode.ENGLISH]: "swim/swimming", [LanguageCode.FRENCH]: "natation", [LanguageCode.PORTUGUESE]: "natação", [LanguageCode.MANDARIN]: "游泳" }, answer: { [LanguageCode.ENGLISH]: "ว่ายน้ำ", [LanguageCode.FRENCH]: "ว่ายน้ำ", [LanguageCode.PORTUGUESE]: "ว่ายน้ำ", [LanguageCode.MANDARIN]: "ว่ายน้ำ" } },
                { prompt: { [LanguageCode.ENGLISH]: "run/running", [LanguageCode.FRENCH]: "course", [LanguageCode.PORTUGUESE]: "corrida", [LanguageCode.MANDARIN]: "跑步" }, answer: { [LanguageCode.ENGLISH]: "วิ่ง", [LanguageCode.FRENCH]: "วิ่ง", [LanguageCode.PORTUGUESE]: "วิ่ง", [LanguageCode.MANDARIN]: "วิ่ง" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete sentences about hobbies and activities.",
                [LanguageCode.FRENCH]: "Complétez les phrases sur les loisirs et activités.",
                [LanguageCode.PORTUGUESE]: "Complete frases sobre hobbies e atividades.",
                [LanguageCode.MANDARIN]: "完成關於愛好和活動的句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ผมชอบ___ในเวลาว่าง", [LanguageCode.FRENCH]: "J'aime___ pendant mon temps libre", [LanguageCode.PORTUGUESE]: "Eu gosto de___ no tempo livre", [LanguageCode.MANDARIN]: "我喜歡在空閒時間___" }, correctAnswer: "เล่นกีฬา/ดูหนัง/อ่านหนังสือ", end: { [LanguageCode.ENGLISH]: " (play sports/watch movies/read books)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พี่ชายผม___ทุกวัน เพื่อสุขภาพ", [LanguageCode.FRENCH]: "Mon frère___ tous les jours pour la santé", [LanguageCode.PORTUGUESE]: "Meu irmão___ todo dia para a saúde", [LanguageCode.MANDARIN]: "我哥哥每天___ 為了健康" }, correctAnswer: "วิ่ง/ออกกำลังกาย", end: { [LanguageCode.ENGLISH]: " (runs/exercises)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "เธอชอบ___กับเพื่อนๆ วันเสาร์", [LanguageCode.FRENCH]: "Elle aime___ avec ses amis le samedi", [LanguageCode.PORTUGUESE]: "Ela gosta de___ com amigos no sábado", [LanguageCode.MANDARIN]: "她喜歡週六和朋友___" }, correctAnswer: "ช็อป/คาราโอเกะ", end: { [LanguageCode.ENGLISH]: " (shop/karaoke)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "วันหยุดผม___และ___ทั้งวัน", [LanguageCode.FRENCH]: "Le week-end je___ et___ toute la journée", [LanguageCode.PORTUGUESE]: "No feriado eu___ e___ o dia todo", [LanguageCode.MANDARIN]: "假日我整天___ 和___" }, correctAnswer: "ดูซีรีส์ นอน", end: { [LanguageCode.ENGLISH]: " (watch series and sleep)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the entertainment activities.",
                [LanguageCode.FRENCH]: "Associez les activités de divertissement.",
                [LanguageCode.PORTUGUESE]: "Relacione as atividades de entretenimento.",
                [LanguageCode.MANDARIN]: "配對娛樂活動。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "watch movies", [LanguageCode.FRENCH]: "regarder des films", [LanguageCode.PORTUGUESE]: "assistir filmes", [LanguageCode.MANDARIN]: "看電影" }, answer: { [LanguageCode.ENGLISH]: "ดูหนัง", [LanguageCode.FRENCH]: "ดูหนัง", [LanguageCode.PORTUGUESE]: "ดูหนัง", [LanguageCode.MANDARIN]: "ดูหนัง" } },
                { prompt: { [LanguageCode.ENGLISH]: "listen to music", [LanguageCode.FRENCH]: "écouter de la musique", [LanguageCode.PORTUGUESE]: "ouvir música", [LanguageCode.MANDARIN]: "聽音樂" }, answer: { [LanguageCode.ENGLISH]: "ฟังเพลง", [LanguageCode.FRENCH]: "ฟังเพลง", [LanguageCode.PORTUGUESE]: "ฟังเพลง", [LanguageCode.MANDARIN]: "ฟังเพลง" } },
                { prompt: { [LanguageCode.ENGLISH]: "play games/gaming", [LanguageCode.FRENCH]: "jouer aux jeux", [LanguageCode.PORTUGUESE]: "jogar videogames", [LanguageCode.MANDARIN]: "玩遊戲" }, answer: { [LanguageCode.ENGLISH]: "เล่นเกม", [LanguageCode.FRENCH]: "เล่นเกม", [LanguageCode.PORTUGUESE]: "เล่นเกม", [LanguageCode.MANDARIN]: "เล่นเกม" } },
                { prompt: { [LanguageCode.ENGLISH]: "watch series/shows", [LanguageCode.FRENCH]: "regarder des séries", [LanguageCode.PORTUGUESE]: "assistir séries", [LanguageCode.MANDARIN]: "看連續劇" }, answer: { [LanguageCode.ENGLISH]: "ดูซีรีส์", [LanguageCode.FRENCH]: "ดูซีรีส์", [LanguageCode.PORTUGUESE]: "ดูซีรีส์", [LanguageCode.MANDARIN]: "ดูซีรีส์" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best activity for each scenario.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure activité pour chaque scénario.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor atividade para cada cenário.",
                [LanguageCode.MANDARIN]: "為每個場景選擇最佳活動。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You want to get healthy and lose weight. You should:", [LanguageCode.FRENCH]: "Vous voulez être en bonne santé et perdre du poids. Vous devriez :", [LanguageCode.PORTUGUESE]: "Você quer ficar saudável e perder peso. Você deveria:", [LanguageCode.MANDARIN]: "你想健康減肥。你應該：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "นอนทั้งวัน", [LanguageCode.FRENCH]: "นอนทั้งวัน", [LanguageCode.PORTUGUESE]: "นอนทั้งวัน", [LanguageCode.MANDARIN]: "นอนทั้งวัน" },
                        { [LanguageCode.ENGLISH]: "ออกกำลังกายและไปฟิตเนส", [LanguageCode.FRENCH]: "ออกกำลังกายและไปฟิตเนส", [LanguageCode.PORTUGUESE]: "ออกกำลังกายและไปฟิตเนส", [LanguageCode.MANDARIN]: "ออกกำลังกายและไปฟิตเนส" },
                        { [LanguageCode.ENGLISH]: "เล่นเกมทั้งคืน", [LanguageCode.FRENCH]: "เล่นเกมทั้งคืน", [LanguageCode.PORTUGUESE]: "เล่นเกมทั้งคืน", [LanguageCode.MANDARIN]: "เล่นเกมทั้งคืน" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "It's raining outside and you're at home alone. You might:", [LanguageCode.FRENCH]: "Il pleut dehors et vous êtes seul à la maison. Vous pourriez :", [LanguageCode.PORTUGUESE]: "Está chovendo lá fora e você está sozinho em casa. Você pode:", [LanguageCode.MANDARIN]: "外面下雨，你一個人在家。你可能：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ปั่นจักรยาน", [LanguageCode.FRENCH]: "ปั่นจักรยาน", [LanguageCode.PORTUGUESE]: "ปั่นจักรยาน", [LanguageCode.MANDARIN]: "ปั่นจักรยาน" },
                        { [LanguageCode.ENGLISH]: "ดูเน็ตฟลิกซ์หรืออ่านหนังสือ", [LanguageCode.FRENCH]: "ดูเน็ตฟลิกซ์หรืออ่านหนังสือ", [LanguageCode.PORTUGUESE]: "ดูเน็ตฟลิกซ์หรืออ่านหนังสือ", [LanguageCode.MANDARIN]: "ดูเน็ตฟลิกซ์หรืออ่านหนังสือ" },
                        { [LanguageCode.ENGLISH]: "ว่ายน้ำ", [LanguageCode.FRENCH]: "ว่ายน้ำ", [LanguageCode.PORTUGUESE]: "ว่ายน้ำ", [LanguageCode.MANDARIN]: "ว่ายน้ำ" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Your friends invite you out on Saturday night. You might:", [LanguageCode.FRENCH]: "Vos amis vous invitent samedi soir. Vous pourriez :", [LanguageCode.PORTUGUESE]: "Seus amigos te convidam para sair no sábado à noite. Você pode:", [LanguageCode.MANDARIN]: "你的朋友週六晚上邀請你出去。你可能：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ไปคาราโอเกะหรือดูหนัง", [LanguageCode.FRENCH]: "ไปคาราโอเกะหรือดูหนัง", [LanguageCode.PORTUGUESE]: "ไปคาราโอเกะหรือดูหนัง", [LanguageCode.MANDARIN]: "ไปคาราโอเกะหรือดูหนัง" },
                        { [LanguageCode.ENGLISH]: "โยคะคนเดียว", [LanguageCode.FRENCH]: "โยคะคนเดียว", [LanguageCode.PORTUGUESE]: "โยคะคนเดียว", [LanguageCode.MANDARIN]: "โยคะคนเดียว" },
                        { [LanguageCode.ENGLISH]: "อ่านหนังสือที่บ้าน", [LanguageCode.FRENCH]: "อ่านหนังสือที่บ้าน", [LanguageCode.PORTUGUESE]: "อ่านหนังสือที่บ้าน", [LanguageCode.MANDARIN]: "อ่านหนังสือที่บ้าน" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Put the sentences about hobbies in correct order.",
                [LanguageCode.FRENCH]: "Mettez les phrases sur les loisirs dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Coloque as frases sobre hobbies na ordem correta.",
                [LanguageCode.MANDARIN]: "將關於愛好的句子按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["ผม", "ชอบ", "เล่น", "ฟุตบอล", "ทุกวัน"], hint: { [LanguageCode.ENGLISH]: "I like playing football every day.", [LanguageCode.FRENCH]: "J'aime jouer au football tous les jours.", [LanguageCode.PORTUGUESE]: "Eu gosto de jogar futebol todo dia.", [LanguageCode.MANDARIN]: "我喜歡每天踢足球。" } },
                { correctOrder: ["เธอ", "ไป", "ฟิตเนส", "บ่อยๆ"], hint: { [LanguageCode.ENGLISH]: "She goes to the gym often.", [LanguageCode.FRENCH]: "Elle va souvent à la salle de sport.", [LanguageCode.PORTUGUESE]: "Ela vai à academia frequentemente.", [LanguageCode.MANDARIN]: "她經常去健身房。" } },
                { correctOrder: ["วันหยุด", "เรา", "ชอบ", "ดู", "เน็ตฟลิกซ์"], hint: { [LanguageCode.ENGLISH]: "On holidays we like watching Netflix.", [LanguageCode.FRENCH]: "Pendant les vacances, nous aimons regarder Netflix.", [LanguageCode.PORTUGUESE]: "Nos feriados gostamos de assistir Netflix.", [LanguageCode.MANDARIN]: "假日我們喜歡看Netflix。" } },
                { correctOrder: ["เพื่อน", "ผม", "ชอบ", "ถ่ายรูป", "และ", "ท่องเที่ยว"], hint: { [LanguageCode.ENGLISH]: "My friend likes taking photos and traveling.", [LanguageCode.FRENCH]: "Mon ami aime prendre des photos et voyager.", [LanguageCode.PORTUGUESE]: "Meu amigo gosta de tirar fotos e viajar.", [LanguageCode.MANDARIN]: "我朋友喜歡拍照和旅遊。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete real conversations about free time.",
                [LanguageCode.FRENCH]: "Complétez de vraies conversations sur le temps libre.",
                [LanguageCode.PORTUGUESE]: "Complete conversas reais sobre tempo livre.",
                [LanguageCode.MANDARIN]: "完成關於空閒時間的真實對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "เวลาว่างชอบทำ___", [LanguageCode.FRENCH]: "Pendant le temps libre j'aime___", [LanguageCode.PORTUGUESE]: "No tempo livre gosto de___", [LanguageCode.MANDARIN]: "空閒時間喜歡___" }, correctAnswer: "อะไร", end: { [LanguageCode.ENGLISH]: " (What do you like to do in free time?)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ผมชอบ___และ___มาก", [LanguageCode.FRENCH]: "J'aime beaucoup___ et___", [LanguageCode.PORTUGUESE]: "Eu gosto muito de___ e___", [LanguageCode.MANDARIN]: "我很喜歡___ 和___" }, correctAnswer: "ดูหนัง ฟังเพลง", end: { [LanguageCode.ENGLISH]: " (I really like watching movies and listening to music)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "พรุ่งนี้ไป___กับเพื่อนๆ", [LanguageCode.FRENCH]: "Demain je vais___ avec des amis", [LanguageCode.PORTUGUESE]: "Amanhã vou___ com amigos", [LanguageCode.MANDARIN]: "明天和朋友去___" }, correctAnswer: "ช็อป/คาราโอเกะ/ดูหนัง", end: { [LanguageCode.ENGLISH]: " (Tomorrow going shopping/karaoke/movies with friends)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "คุณเล่น___ไหม เล่นเป็นไหม", [LanguageCode.FRENCH]: "Jouez-vous au___ ? Savez-vous jouer ?", [LanguageCode.PORTUGUESE]: "Você joga___? Sabe jogar?", [LanguageCode.MANDARIN]: "你玩___嗎？會玩嗎？" }, correctAnswer: "บาส/ฟุตบอล/เกม", end: { [LanguageCode.ENGLISH]: " (Do you play basketball/football/games? Can you play?)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the creative hobbies.",
                [LanguageCode.FRENCH]: "Associez les loisirs créatifs.",
                [LanguageCode.PORTUGUESE]: "Relacione os hobbies criativos.",
                [LanguageCode.MANDARIN]: "配對創意愛好。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "cook/cooking", [LanguageCode.FRENCH]: "cuisiner", [LanguageCode.PORTUGUESE]: "cozinhar", [LanguageCode.MANDARIN]: "做飯/烹飪" }, answer: { [LanguageCode.ENGLISH]: "ทำอาหาร", [LanguageCode.FRENCH]: "ทำอาหาร", [LanguageCode.PORTUGUESE]: "ทำอาหาร", [LanguageCode.MANDARIN]: "ทำอาหาร" } },
                { prompt: { [LanguageCode.ENGLISH]: "draw/drawing", [LanguageCode.FRENCH]: "dessiner", [LanguageCode.PORTUGUESE]: "desenhar", [LanguageCode.MANDARIN]: "畫畫" }, answer: { [LanguageCode.ENGLISH]: "วาดรูป", [LanguageCode.FRENCH]: "วาดรูป", [LanguageCode.PORTUGUESE]: "วาดรูป", [LanguageCode.MANDARIN]: "วาดรูป" } },
                { prompt: { [LanguageCode.ENGLISH]: "take photos/photography", [LanguageCode.FRENCH]: "prendre des photos", [LanguageCode.PORTUGUESE]: "tirar fotos", [LanguageCode.MANDARIN]: "拍照/攝影" }, answer: { [LanguageCode.ENGLISH]: "ถ่ายรูป", [LanguageCode.FRENCH]: "ถ่ายรูป", [LanguageCode.PORTUGUESE]: "ถ่ายรูป", [LanguageCode.MANDARIN]: "ถ่ายรูป" } },
                { prompt: { [LanguageCode.ENGLISH]: "travel/tourism", [LanguageCode.FRENCH]: "voyager", [LanguageCode.PORTUGUESE]: "viajar", [LanguageCode.MANDARIN]: "旅遊" }, answer: { [LanguageCode.ENGLISH]: "ท่องเที่ยว", [LanguageCode.FRENCH]: "ท่องเที่ยว", [LanguageCode.PORTUGUESE]: "ท่องเที่ยว", [LanguageCode.MANDARIN]: "ท่องเที่ยว" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the most natural response to each question.",
                [LanguageCode.FRENCH]: "Choisissez la réponse la plus naturelle à chaque question.",
                [LanguageCode.PORTUGUESE]: "Escolha a resposta mais natural para cada pergunta.",
                [LanguageCode.MANDARIN]: "為每個問題選擇最自然的回答。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "ชอบทำอะไรในเวลาว่าง (What do you like to do in free time?)", [LanguageCode.FRENCH]: "ชอบทำอะไรในเวลาว่าง (Qu'aimez-vous faire pendant votre temps libre ?)", [LanguageCode.PORTUGUESE]: "ชอบทำอะไรในเวลาว่าง (O que você gosta de fazer no tempo livre?)", [LanguageCode.MANDARIN]: "ชอบทำอะไรในเวลาว่าง（你空閒時間喜歡做什麼？）" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ชอบดูหนังและฟังเพลง", [LanguageCode.FRENCH]: "ชอบดูหนังและฟังเพลง", [LanguageCode.PORTUGUESE]: "ชอบดูหนังและฟังเพลง", [LanguageCode.MANDARIN]: "ชอบดูหนังและฟังเพลง" },
                        { [LanguageCode.ENGLISH]: "ไม่ชอบเวลาว่าง", [LanguageCode.FRENCH]: "ไม่ชอบเวลาว่าง", [LanguageCode.PORTUGUESE]: "ไม่ชอบเวลาว่าง", [LanguageCode.MANDARIN]: "ไม่ชอบเวลาว่าง" },
                        { [LanguageCode.ENGLISH]: "อาหาร", [LanguageCode.FRENCH]: "อาหาร", [LanguageCode.PORTUGUESE]: "อาหาร", [LanguageCode.MANDARIN]: "อาหาร" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "เล่นกีฬาไหม (Do you play any sports?)", [LanguageCode.FRENCH]: "เล่นกีฬาไหม (Faites-vous du sport ?)", [LanguageCode.PORTUGUESE]: "เล่นกีฬาไหม (Você pratica esportes?)", [LanguageCode.MANDARIN]: "เล่นกีฬาไหม（你做運動嗎？）" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เล่นฟุตบอลทุกวัน", [LanguageCode.FRENCH]: "เล่นฟุตบอลทุกวัน", [LanguageCode.PORTUGUESE]: "เล่นฟุตบอลทุกวัน", [LanguageCode.MANDARIN]: "เล่นฟุตบอลทุกวัน" },
                        { [LanguageCode.ENGLISH]: "ชอบนอน", [LanguageCode.FRENCH]: "ชอบนอน", [LanguageCode.PORTUGUESE]: "ชอบนอน", [LanguageCode.MANDARIN]: "ชอบนอน" },
                        { [LanguageCode.ENGLISH]: "ดูเน็ตฟลิกซ์", [LanguageCode.FRENCH]: "ดูเน็ตฟลิกซ์", [LanguageCode.PORTUGUESE]: "ดูเน็ตฟลิกซ์", [LanguageCode.MANDARIN]: "ดูเน็ตฟลิกซ์" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "วันหยุดทำอะไร (What do you do on holidays?)", [LanguageCode.FRENCH]: "วันหยุดทำอะไร (Que faites-vous pendant les vacances ?)", [LanguageCode.PORTUGUESE]: "วันหยุดทำอะไร (O que você faz nos feriados?)", [LanguageCode.MANDARIN]: "วันหยุดทำอะไร（假日做什麼？）" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ไปทำงาน", [LanguageCode.FRENCH]: "ไปทำงาน", [LanguageCode.PORTUGUESE]: "ไปทำงาน", [LanguageCode.MANDARIN]: "ไปทำงาน" },
                        { [LanguageCode.ENGLISH]: "ไปช็อปหรือท่องเที่ยว", [LanguageCode.FRENCH]: "ไปช็อปหรือท่องเที่ยว", [LanguageCode.PORTUGUESE]: "ไปช็อปหรือท่องเที่ยว", [LanguageCode.MANDARIN]: "ไปช็อปหรือท่องเที่ยว" },
                        { [LanguageCode.ENGLISH]: "เรียนหนังสือ", [LanguageCode.FRENCH]: "เรียนหนังสือ", [LanguageCode.PORTUGUESE]: "เรียนหนังสือ", [LanguageCode.MANDARIN]: "เรียนหนังสือ" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Build complete hobby conversations.",
                [LanguageCode.FRENCH]: "Construisez des conversations complètes sur les loisirs.",
                [LanguageCode.PORTUGUESE]: "Construa conversas completas sobre hobbies.",
                [LanguageCode.MANDARIN]: "組成完整的愛好對話。",
            },
            sentences: [
                { correctOrder: ["คุณ", "ชอบ", "ทำ", "อะไร", "ใน", "เวลาว่าง"], hint: { [LanguageCode.ENGLISH]: "What do you like to do in your free time?", [LanguageCode.FRENCH]: "Qu'aimez-vous faire pendant votre temps libre ?", [LanguageCode.PORTUGUESE]: "O que você gosta de fazer no seu tempo livre?", [LanguageCode.MANDARIN]: "你空閒時間喜歡做什麼？" } },
                { correctOrder: ["ผม", "ชอบ", "ไป", "ฟิตเนส", "และ", "เล่น", "บาส"], hint: { [LanguageCode.ENGLISH]: "I like going to the gym and playing basketball.", [LanguageCode.FRENCH]: "J'aime aller à la salle de sport et jouer au basket.", [LanguageCode.PORTUGUESE]: "Eu gosto de ir à academia e jogar basquete.", [LanguageCode.MANDARIN]: "我喜歡去健身房和打籃球。" } },
                { correctOrder: ["เธอ", "ดู", "ยูทูป", "และ", "เล่น", "เกม", "ทุกวัน"], hint: { [LanguageCode.ENGLISH]: "She watches YouTube and plays games every day.", [LanguageCode.FRENCH]: "Elle regarde YouTube et joue aux jeux tous les jours.", [LanguageCode.PORTUGUESE]: "Ela assiste YouTube e joga games todo dia.", [LanguageCode.MANDARIN]: "她每天看YouTube和玩遊戲。" } },
                { correctOrder: ["วันหยุด", "ผม", "ชอบ", "ท่องเที่ยว", "และ", "ถ่ายรูป"], hint: { [LanguageCode.ENGLISH]: "On holidays I like traveling and taking photos.", [LanguageCode.FRENCH]: "Pendant les vacances, j'aime voyager et prendre des photos.", [LanguageCode.PORTUGUESE]: "Nos feriados gosto de viajar e tirar fotos.", [LanguageCode.MANDARIN]: "假日我喜歡旅遊和拍照。" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete descriptions of daily routines and hobbies.",
                [LanguageCode.FRENCH]: "Complétez les descriptions des routines quotidiennes et loisirs.",
                [LanguageCode.PORTUGUESE]: "Complete descrições de rotinas diárias e hobbies.",
                [LanguageCode.MANDARIN]: "完成日常生活和愛好的描述。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "ตอนเช้า___และ___เพื่อสุขภาพ", [LanguageCode.FRENCH]: "Le matin je___ et___ pour la santé", [LanguageCode.PORTUGUESE]: "De manhã___ e___ para a saúde", [LanguageCode.MANDARIN]: "早上___ 和___ 為了健康" }, correctAnswer: "วิ่ง โยคะ", end: { [LanguageCode.ENGLISH]: " (run and do yoga)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ตอนเย็นชอบ___และ___", [LanguageCode.FRENCH]: "Le soir j'aime___ et___", [LanguageCode.PORTUGUESE]: "À noite gosto de___ e___", [LanguageCode.MANDARIN]: "晚上喜歡___ 和___" }, correctAnswer: "ฟังเพลง ดูซีรีส์", end: { [LanguageCode.ENGLISH]: " (listen to music and watch series)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "วันเสาร์___กับเพื่อนที่ห้าง", [LanguageCode.FRENCH]: "Le samedi___ avec des amis au centre commercial", [LanguageCode.PORTUGUESE]: "Sábado___ com amigos no shopping", [LanguageCode.MANDARIN]: "週六和朋友在商場___" }, correctAnswer: "ช็อป", end: { [LanguageCode.ENGLISH]: " (shop)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "วันอาทิตย์ไม่ทำอะไร แค่___ทั้งวัน", [LanguageCode.FRENCH]: "Le dimanche je ne fais rien, juste___ toute la journée", [LanguageCode.PORTUGUESE]: "Domingo não faço nada, só___ o dia todo", [LanguageCode.MANDARIN]: "星期天什麼都不做，只是整天___" }, correctAnswer: "นอน", end: { [LanguageCode.ENGLISH]: " (sleep)", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the activity that best completes the description.",
                [LanguageCode.FRENCH]: "Choisissez l'activité qui complète le mieux la description.",
                [LanguageCode.PORTUGUESE]: "Escolha a atividade que melhor completa a descrição.",
                [LanguageCode.MANDARIN]: "選擇最能完成描述的活動。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "She's very creative and artistic. She likes to:", [LanguageCode.FRENCH]: "Elle est très créative et artistique. Elle aime :", [LanguageCode.PORTUGUESE]: "Ela é muito criativa e artística. Ela gosta de:", [LanguageCode.MANDARIN]: "她很有創意和藝術感。她喜歡：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "วาดรูปและถ่ายรูป", [LanguageCode.FRENCH]: "วาดรูปและถ่ายรูป", [LanguageCode.PORTUGUESE]: "วาดรูปและถ่ายรูป", [LanguageCode.MANDARIN]: "วาดรูปและถ่ายรูป" },
                        { [LanguageCode.ENGLISH]: "เล่นฟุตบอล", [LanguageCode.FRENCH]: "เล่นฟุตบอล", [LanguageCode.PORTUGUESE]: "เล่นฟุตบอล", [LanguageCode.MANDARIN]: "เล่นฟุตบอล" },
                        { [LanguageCode.ENGLISH]: "นอน", [LanguageCode.FRENCH]: "นอน", [LanguageCode.PORTUGUESE]: "นอน", [LanguageCode.MANDARIN]: "นอน" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "He's always on his phone. He probably:", [LanguageCode.FRENCH]: "Il est toujours sur son téléphone. Il probablement :", [LanguageCode.PORTUGUESE]: "Ele está sempre no celular. Ele provavelmente:", [LanguageCode.MANDARIN]: "他總是在玩手機。他可能：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ปั่นจักรยาน", [LanguageCode.FRENCH]: "ปั่นจักรยาน", [LanguageCode.PORTUGUESE]: "ปั่นจักรยาน", [LanguageCode.MANDARIN]: "ปั่นจักรยาน" },
                        { [LanguageCode.ENGLISH]: "เล่นเกมและดูยูทูป", [LanguageCode.FRENCH]: "เล่นเกมและดูยูทูป", [LanguageCode.PORTUGUESE]: "เล่นเกมและดูยูทูป", [LanguageCode.MANDARIN]: "เล่นเกมและดูยูทูป" },
                        { [LanguageCode.ENGLISH]: "ว่ายน้ำ", [LanguageCode.FRENCH]: "ว่ายน้ำ", [LanguageCode.PORTUGUESE]: "ว่ายน้ำ", [LanguageCode.MANDARIN]: "ว่ายน้ำ" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "They love trying new restaurants and street food. Their hobby is:", [LanguageCode.FRENCH]: "Ils adorent essayer de nouveaux restaurants et la street food. Leur passe-temps est :", [LanguageCode.PORTUGUESE]: "Eles adoram experimentar novos restaurantes e comida de rua. O hobby deles é:", [LanguageCode.MANDARIN]: "他們喜歡嘗試新餐廳和街頭小吃。他們的愛好是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "กินข้าวและทำอาหาร", [LanguageCode.FRENCH]: "กินข้าวและทำอาหาร", [LanguageCode.PORTUGUESE]: "กินข้าวและทำอาหาร", [LanguageCode.MANDARIN]: "กินข้าวและทำอาหาร" },
                        { [LanguageCode.ENGLISH]: "วิ่ง", [LanguageCode.FRENCH]: "วิ่ง", [LanguageCode.PORTUGUESE]: "วิ่ง", [LanguageCode.MANDARIN]: "วิ่ง" },
                        { [LanguageCode.ENGLISH]: "อ่านหนังสือ", [LanguageCode.FRENCH]: "อ่านหนังสือ", [LanguageCode.PORTUGUESE]: "อ่านหนังสือ", [LanguageCode.MANDARIN]: "อ่านหนังสือ" },
                    ],
                    correctIndex: 0
                }
            ]
        }
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "What do you like to do in your free time?", [LanguageCode.FRENCH]: "Qu'aimez-vous faire pendant votre temps libre ?", [LanguageCode.PORTUGUESE]: "O que você gosta de fazer no seu tempo livre?", [LanguageCode.MANDARIN]: "你空閒時間喜歡做什麼？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "I like playing sports and watching movies. I play football every day and go to the gym.", [LanguageCode.FRENCH]: "J'aime faire du sport et regarder des films. Je joue au football tous les jours et je vais à la salle de sport.", [LanguageCode.PORTUGUESE]: "Eu gosto de fazer esportes e assistir filmes. Jogo futebol todo dia e vou à academia.", [LanguageCode.MANDARIN]: "我喜歡做運動和看電影。我每天踢足球和去健身房。" } },
            { speaker: "A", line: { [LanguageCode.ENGLISH]: "That's cool! What about on weekends?", [LanguageCode.FRENCH]: "C'est cool ! Et le week-end ?", [LanguageCode.PORTUGUESE]: "Que legal! E nos fins de semana?", [LanguageCode.MANDARIN]: "很酷！週末呢？" } },
            { speaker: "B", line: { [LanguageCode.ENGLISH]: "On weekends I like going shopping with friends or watching Netflix at home. Sometimes we go to karaoke too.", [LanguageCode.FRENCH]: "Le week-end, j'aime faire du shopping avec des amis ou regarder Netflix à la maison. Parfois, nous allons aussi au karaoké.", [LanguageCode.PORTUGUESE]: "Nos fins de semana gosto de fazer compras com amigos ou assistir Netflix em casa. Às vezes vamos ao karaokê também.", [LanguageCode.MANDARIN]: "週末我喜歡和朋友去購物或在家看Netflix。有時我們也去卡拉OK。" } },
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
                    question: { [LanguageCode.ENGLISH]: "What does B do every day?", [LanguageCode.FRENCH]: "Que fait B tous les jours ?", [LanguageCode.PORTUGUESE]: "O que B faz todo dia?", [LanguageCode.MANDARIN]: "B 每天做什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เล่นฟุตบอล", [LanguageCode.FRENCH]: "เล่นฟุตบอล", [LanguageCode.PORTUGUESE]: "เล่นฟุตบอล", [LanguageCode.MANDARIN]: "เล่นฟุตบอล" },
                        { [LanguageCode.ENGLISH]: "ช็อป", [LanguageCode.FRENCH]: "ช็อป", [LanguageCode.PORTUGUESE]: "ช็อป", [LanguageCode.MANDARIN]: "ช็อป" },
                        { [LanguageCode.ENGLISH]: "คาราโอเกะ", [LanguageCode.FRENCH]: "คาราโอเกะ", [LanguageCode.PORTUGUESE]: "คาราโอเกะ", [LanguageCode.MANDARIN]: "คาราโอเกะ" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What are B's weekend activities?", [LanguageCode.FRENCH]: "Quelles sont les activités de week-end de B ?", [LanguageCode.PORTUGUESE]: "Quais são as atividades de fim de semana de B?", [LanguageCode.MANDARIN]: "B 的週末活動是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ช็อป ดูเน็ตฟลิกซ์ และคาราโอเกะ", [LanguageCode.FRENCH]: "ช็อป ดูเน็ตฟลิกซ์ และคาราโอเกะ", [LanguageCode.PORTUGUESE]: "ช็อป ดูเน็ตฟลิกซ์ และคาราโอเกะ", [LanguageCode.MANDARIN]: "ช็อป ดูเน็ตฟลิกซ์ และคาราโอเกะ" },
                        { [LanguageCode.ENGLISH]: "เล่นกีฬาทั้งวัน", [LanguageCode.FRENCH]: "เล่นกีฬาทั้งวัน", [LanguageCode.PORTUGUESE]: "เล่นกีฬาทั้งวัน", [LanguageCode.MANDARIN]: "เล่นกีฬาทั้งวัน" },
                        { [LanguageCode.ENGLISH]: "นอนทั้งวัน", [LanguageCode.FRENCH]: "นอนทั้งวัน", [LanguageCode.PORTUGUESE]: "นอนทั้งวัน", [LanguageCode.MANDARIN]: "นอนทั้งวัน" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "บอกงานอดิเรกและกิจกรรมที่ชอบทำในเวลาว่าง อธิบายว่าทำบ่อยแค่ไหน",
            [LanguageCode.FRENCH]: "บอกงานอดิเรกและกิจกรรมที่ชอบทำในเวลาว่าง อธิบายว่าทำบ่อยแค่ไหน",
            [LanguageCode.PORTUGUESE]: "บอกงานอดิเรกและกิจกรรมที่ชอบทำในเวลาว่าง อธิบายว่าทำบ่อยแค่ไหน",
            [LanguageCode.MANDARIN]: "บอกงานอดิเรกและกิจกรรมที่ชอบทำในเวลาว่าง อธิบายว่าทำบ่อยแค่ไหน",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Talk about your hobbies and activities you like to do in your free time. Explain how often you do them.",
            [LanguageCode.FRENCH]: "Parlez de vos loisirs et des activités que vous aimez faire pendant votre temps libre. Expliquez à quelle fréquence vous les faites.",
            [LanguageCode.PORTUGUESE]: "Fale sobre seus hobbies e atividades que você gosta de fazer no seu tempo livre. Explique com que frequência você os faz.",
            [LanguageCode.MANDARIN]: "談談你的愛好和你喜歡在空閒時間做的活動。解釋你多久做一次。",
        },
        speakingType: 'open-ended'
    }
};
