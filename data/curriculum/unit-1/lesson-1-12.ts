import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_12: Lesson = {
    id: "1.12",
    title: {
        [LanguageCode.ENGLISH]: "School & Learning",
        [LanguageCode.FRENCH]: "École et apprentissage",
        [LanguageCode.PORTUGUESE]: "Escola e Aprendizagem",
        [LanguageCode.MANDARIN]: "學校和學習",
    },
    vocabulary: [
        { thai: "โรงเรียน", phonetic: "rooŋ rian", translations: { [LanguageCode.ENGLISH]: "school", [LanguageCode.FRENCH]: "école", [LanguageCode.PORTUGUESE]: "escola", [LanguageCode.MANDARIN]: "學校" } },
        { thai: "ห้องเรียน", phonetic: "hɔ̂ɔŋ rian", translations: { [LanguageCode.ENGLISH]: "classroom", [LanguageCode.FRENCH]: "salle de classe", [LanguageCode.PORTUGUESE]: "sala de aula", [LanguageCode.MANDARIN]: "教室" } },
        { thai: "ครู", phonetic: "khruu", translations: { [LanguageCode.ENGLISH]: "teacher", [LanguageCode.FRENCH]: "professeur", [LanguageCode.PORTUGUESE]: "professor", [LanguageCode.MANDARIN]: "老師" } },
        { thai: "อาจารย์", phonetic: "aa-jaan", translations: { [LanguageCode.ENGLISH]: "teacher / professor (formal, respectful)", [LanguageCode.FRENCH]: "professeur (formel, respectueux)", [LanguageCode.PORTUGUESE]: "professor (formal, respeitoso)", [LanguageCode.MANDARIN]: "教授/老師（正式，尊敬）" } },
        { thai: "เรียน", phonetic: "rian", translations: { [LanguageCode.ENGLISH]: "to study / to learn", [LanguageCode.FRENCH]: "étudier / apprendre", [LanguageCode.PORTUGUESE]: "estudar / aprender", [LanguageCode.MANDARIN]: "學習" } },
        { thai: "สอบ", phonetic: "sɔ̀ɔp", translations: { [LanguageCode.ENGLISH]: "to take a test / exam", [LanguageCode.FRENCH]: "passer un examen", [LanguageCode.PORTUGUESE]: "fazer uma prova", [LanguageCode.MANDARIN]: "考試" } },
        { thai: "ภาษา", phonetic: "phaa-sǎa", translations: { [LanguageCode.ENGLISH]: "language", [LanguageCode.FRENCH]: "langue", [LanguageCode.PORTUGUESE]: "idioma", [LanguageCode.MANDARIN]: "語言" } },
        { thai: "วิชา", phonetic: "wí-chaa", translations: { [LanguageCode.ENGLISH]: "subject / course", [LanguageCode.FRENCH]: "matière / cours", [LanguageCode.PORTUGUESE]: "matéria / disciplina", [LanguageCode.MANDARIN]: "科目/課程" } },
        { thai: "วิทยาศาสตร์", phonetic: "wít-tá-yaa-sàat", translations: { [LanguageCode.ENGLISH]: "science", [LanguageCode.FRENCH]: "sciences", [LanguageCode.PORTUGUESE]: "ciências", [LanguageCode.MANDARIN]: "科學" } },
        { thai: "วิทย์", phonetic: "wít", translations: { [LanguageCode.ENGLISH]: "science (short form)", [LanguageCode.FRENCH]: "sciences (forme courte)", [LanguageCode.PORTUGUESE]: "ciências (forma curta)", [LanguageCode.MANDARIN]: "科學（簡稱）" } },
        { thai: "วิทยา", phonetic: "wít-tá-yaa", translations: { [LanguageCode.ENGLISH]: "science / study / knowledge", [LanguageCode.FRENCH]: "sciences / étude / connaissance", [LanguageCode.PORTUGUESE]: "ciência / estudo / conhecimento", [LanguageCode.MANDARIN]: "科學 / 學習 / 知識" } },
        { thai: "คณิตศาสตร์", phonetic: "khá-nít-tà-sàat", translations: { [LanguageCode.ENGLISH]: "mathematics", [LanguageCode.FRENCH]: "mathématiques", [LanguageCode.PORTUGUESE]: "matemática", [LanguageCode.MANDARIN]: "數學" } },
        { thai: "คณิต", phonetic: "khá-nít", translations: { [LanguageCode.ENGLISH]: "math (short form)", [LanguageCode.FRENCH]: "maths (forme courte)", [LanguageCode.PORTUGUESE]: "matemática (forma curta)", [LanguageCode.MANDARIN]: "數學（簡稱）" } },
        { thai: "เคมี", phonetic: "khee-mii", translations: { [LanguageCode.ENGLISH]: "chemistry", [LanguageCode.FRENCH]: "chimie", [LanguageCode.PORTUGUESE]: "química", [LanguageCode.MANDARIN]: "化學" } },
        { thai: "ฟิสิกส์", phonetic: "fí-sìk", translations: { [LanguageCode.ENGLISH]: "physics", [LanguageCode.FRENCH]: "physique", [LanguageCode.PORTUGUESE]: "física", [LanguageCode.MANDARIN]: "物理" } },
        { thai: "การเรียน", phonetic: "gaan rian", translations: { [LanguageCode.ENGLISH]: "studies / learning", [LanguageCode.FRENCH]: "études / apprentissage", [LanguageCode.PORTUGUESE]: "estudos / aprendizagem", [LanguageCode.MANDARIN]: "學習" } },
        { thai: "ตำรา", phonetic: "dtam-raa", translations: { [LanguageCode.ENGLISH]: "textbook", [LanguageCode.FRENCH]: "manuel scolaire", [LanguageCode.PORTUGUESE]: "livro didático", [LanguageCode.MANDARIN]: "教科書" } },
        { thai: "การบ้าน", phonetic: "gaan bâan", translations: { [LanguageCode.ENGLISH]: "homework", [LanguageCode.FRENCH]: "devoirs", [LanguageCode.PORTUGUESE]: "dever de casa", [LanguageCode.MANDARIN]: "作業" } },
        { thai: "นักเรียน", phonetic: "nák-rian", translations: { [LanguageCode.ENGLISH]: "student / pupil", [LanguageCode.FRENCH]: "élève", [LanguageCode.PORTUGUESE]: "aluno", [LanguageCode.MANDARIN]: "學生" } },
        { thai: "ชั้นเรียน", phonetic: "chán-rian", translations: { [LanguageCode.ENGLISH]: "class / grade level", [LanguageCode.FRENCH]: "classe / niveau scolaire", [LanguageCode.PORTUGUESE]: "turma / série", [LanguageCode.MANDARIN]: "班級/年級" } },
        { thai: "หอประชุม", phonetic: "hɔ̌ɔ prà-chum", translations: { [LanguageCode.ENGLISH]: "assembly hall / auditorium", [LanguageCode.FRENCH]: "salle de réunion / auditorium", [LanguageCode.PORTUGUESE]: "salão de assembleias / auditório", [LanguageCode.MANDARIN]: "禮堂" } },
        { thai: "ชุดนักเรียน", phonetic: "chút nák-rian", translations: { [LanguageCode.ENGLISH]: "student uniform", [LanguageCode.FRENCH]: "uniforme scolaire", [LanguageCode.PORTUGUESE]: "uniforme escolar", [LanguageCode.MANDARIN]: "學生制服" } },
        { thai: "โรงอาหาร", phonetic: "rooŋ aa-hǎan", translations: { [LanguageCode.ENGLISH]: "cafeteria / canteen", [LanguageCode.FRENCH]: "cafétéria / cantine", [LanguageCode.PORTUGUESE]: "refeitório / cantina", [LanguageCode.MANDARIN]: "食堂" } },
        { thai: "ห้องสมุด", phonetic: "hɔ̂ɔŋ-sà-mùt", translations: { [LanguageCode.ENGLISH]: "library", [LanguageCode.FRENCH]: "bibliothèque", [LanguageCode.PORTUGUESE]: "biblioteca", [LanguageCode.MANDARIN]: "圖書館" } },
        { thai: "มหาวิทยาลัย", phonetic: "má-hǎa-wít-tá-yaa-lai", translations: { [LanguageCode.ENGLISH]: "university", [LanguageCode.FRENCH]: "université", [LanguageCode.PORTUGUESE]: "universidade", [LanguageCode.MANDARIN]: "大學" } },
        { thai: "ประวัติศาสตร์", phonetic: "prà-wàt-tì-sàat", translations: { [LanguageCode.ENGLISH]: "history", [LanguageCode.FRENCH]: "histoire", [LanguageCode.PORTUGUESE]: "história", [LanguageCode.MANDARIN]: "歷史" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Schools: A Cultural Insight",
                [LanguageCode.FRENCH]: "Écoles thaïlandaises : Un aperçu culturel",
                [LanguageCode.PORTUGUESE]: "Escolas Tailandesas: Uma Visão Cultural",
                [LanguageCode.MANDARIN]: "泰國學校：文化洞察",
            },
            content: {
                [LanguageCode.ENGLISH]: "Education is highly valued in Thai culture, and schools play a central role in Thai society!\n\n**School Uniforms (ชุดนักเรียน)**\n\nThai students are required to wear uniforms from elementary through university:\n• **Primary & Secondary**: White shirt with navy/khaki shorts (boys) or skirts (girls)\n• **University**: Each university has its own unique uniform design\n• Uniforms symbolize equality and discipline\n• Students take great pride in their school uniforms!\n\n**Respect for Teachers**\n\nTeachers are highly respected in Thai culture:\n• ครู (khruu) = teacher (general)\n• อาจารย์ (aa-jaan) = teacher/professor (more formal and respectful)\n• Students traditionally perform a wâi (hands pressed together) to greet teachers\n• Teacher's Day (January 16) is a major celebration in Thailand\n\n**The Thai School Day**\n\nA typical school schedule:\n• 8:00 AM - Morning assembly (หอประชุม)\n• Students sing the national anthem and raise the flag\n• Classes run from 8:30 AM to 3:30 PM\n• Lunch break includes time at the โรงอาหาร (cafeteria)\n• Many students stay for extra tutoring or activities\n\n**Common School Subjects (วิชา)**\n\n• ภาษาไทย (phaa-sǎa thai) = Thai language\n• ภาษาอังกฤษ (phaa-sǎa aŋ-grìt) = English language\n• คณิตศาสตร์ (khá-nít-tà-sàat) = Mathematics\n• วิทยาศาสตร์ (wít-tá-yaa-sàat) = Science\n• ประวัติศาสตร์ (prà-wàt-tì-sàat) = History\n\n**Useful Vocabulary Combinations**\n\n• เรียนหนังสือ (rian nǎŋ-sʉ̌ʉ) = to study (literally: study books)\n• ทำการบ้าน (tham gaan bâan) = to do homework\n• สอบไล่ (sɔ̀ɔp lâi) = final exam\n• ชั้นเรียนเช้า (chán-rian cháao) = morning class\n\n**Student Life**\n\nThai students often:\n• Study very hard, with education seen as key to success\n• Attend extra tutoring sessions (โรงเรียนกวดวิชา)\n• Participate in school clubs and activities\n• Develop close friendships with classmates\n\n**การบ้าน (Homework) Culture**\n\nHomework is taken seriously:\n• Students are expected to complete all assignments\n• Parents often help with homework\n• การบ้าน (gaan bâan) literally means 'house work' but refers to homework\n\nUnderstanding Thai school culture helps you connect with Thai friends and appreciate the importance of education in Thai society!",
                [LanguageCode.FRENCH]: "L'éducation est hautement valorisée dans la culture thaïlandaise, et les écoles jouent un rôle central dans la société thaïlandaise !\n\n**Uniformes scolaires (ชุดนักเรียน)**\n\nLes étudiants thaïlandais sont tenus de porter des uniformes du primaire à l'université :\n• **Primaire et secondaire** : Chemise blanche avec short/jupe bleu marine ou kaki\n• **Université** : Chaque université a son propre design d'uniforme unique\n• Les uniformes symbolisent l'égalité et la discipline\n\n**Respect des enseignants**\n\nLes enseignants sont très respectés dans la culture thaïlandaise :\n• ครู (khruu) = enseignant (général)\n• อาจารย์ (aa-jaan) = enseignant/professeur (plus formel et respectueux)\n• Les étudiants effectuent traditionnellement un wâi pour saluer les enseignants\n\n**Journée scolaire typique**\n\n• 8h00 - Assemblée matinale (หอประชุม)\n• Les cours se déroulent de 8h30 à 15h30\n• Pause déjeuner à la โรงอาหาร (cafétéria)\n\n**Matières scolaires courantes (วิชา)**\n\n• ภาษาไทย = langue thaïlandaise\n• ภาษาอังกฤษ = langue anglaise\n• คณิตศาสตร์ = mathématiques\n• วิทยาศาสตร์ = sciences\n• ประวัติศาสตร์ = histoire",
                [LanguageCode.PORTUGUESE]: "A educação é altamente valorizada na cultura tailandesa, e as escolas desempenham um papel central na sociedade tailandesa!\n\n**Uniformes escolares (ชุดนักเรียน)**\n\nOs estudantes tailandeses são obrigados a usar uniformes do ensino fundamental até a universidade:\n• **Fundamental e Médio**: Camisa branca com short/saia azul marinho ou cáqui\n• **Universidade**: Cada universidade tem seu próprio design de uniforme único\n• Os uniformes simbolizam igualdade e disciplina\n\n**Respeito pelos professores**\n\nOs professores são altamente respeitados na cultura tailandesa:\n• ครู (khruu) = professor (geral)\n• อาจารย์ (aa-jaan) = professor (mais formal e respeitoso)\n• Os alunos tradicionalmente fazem um wâi para cumprimentar os professores\n\n**O dia escolar tailandês**\n\n• 8h00 - Assembleia matinal (หอประชุม)\n• As aulas vão das 8h30 às 15h30\n• Intervalo para almoço na โรงอาหาร (refeitório)\n\n**Matérias escolares comuns (วิชา)**\n\n• ภาษาไทย = língua tailandesa\n• ภาษาอังกฤษ = língua inglesa\n• คณิตศาสตร์ = matemática\n• วิทยาศาสตร์ = ciências\n• ประวัติศาสตร์ = história",
                [LanguageCode.MANDARIN]: "教育在泰國文化中受到高度重視，學校在泰國社會中扮演著核心角色！\n\n**校服（ชุดนักเรียน）**\n\n泰國學生從小學到大學都必須穿校服：\n• **中小學**：白襯衫配深藍色/卡其色短褲（男）或裙子（女）\n• **大學**：每所大學都有自己獨特的校服設計\n• 校服象徵平等和紀律\n\n**尊敬教師**\n\n教師在泰國文化中受到高度尊重：\n• ครู (khruu) = 老師（一般）\n• อาจารย์ (aa-jaan) = 老師/教授（更正式和尊敬）\n• 學生傳統上會做合十禮（wâi）向老師問候\n\n**泰國學校日**\n\n• 8:00 - 晨會（หอประชุม）\n• 課程從8:30到15:30\n• 午餐時間在โรงอาหาร（食堂）\n\n**常見學校科目（วิชา）**\n\n• ภาษาไทย = 泰語\n• ภาษาอังกฤษ = 英語\n• คณิตศาสตร์ = 數學\n• วิทยาศาสตร์ = 科學\n• ประวัติศาสตร์ = 歷史",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the school schedule with the correct subject names.",
                [LanguageCode.FRENCH]: "Remplissez l'emploi du temps avec les noms de matières corrects.",
                [LanguageCode.PORTUGUESE]: "Preencha o horário escolar com os nomes corretos das matérias.",
                [LanguageCode.MANDARIN]: "填入正確的科目名稱完成課表。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "8:00 AM - Morning assembly at the ___ (assembly hall)", [LanguageCode.FRENCH]: "8h00 - Assemblée matinale au ___ (salle de réunion)", [LanguageCode.PORTUGUESE]: "8h00 - Assembleia matinal no ___ (salão de assembleias)", [LanguageCode.MANDARIN]: "8:00 - 在___（禮堂）晨會" }, correctAnswer: "หอประชุม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "9:00 AM - ___ class (mathematics)", [LanguageCode.FRENCH]: "9h00 - Cours de ___ (mathématiques)", [LanguageCode.PORTUGUESE]: "9h00 - Aula de ___ (matemática)", [LanguageCode.MANDARIN]: "9:00 - ___課（數學）" }, correctAnswer: "คณิตศาสตร์", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "10:00 AM - ___ class (science)", [LanguageCode.FRENCH]: "10h00 - Cours de ___ (sciences)", [LanguageCode.PORTUGUESE]: "10h00 - Aula de ___ (ciências)", [LanguageCode.MANDARIN]: "10:00 - ___課（科學）" }, correctAnswer: "วิทยาศาสตร์", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "11:00 AM - Thai ___ (language)", [LanguageCode.FRENCH]: "11h00 - ___ thaïlandaise (langue)", [LanguageCode.PORTUGUESE]: "11h00 - ___ tailandesa (idioma)", [LanguageCode.MANDARIN]: "11:00 - 泰國___（語言）" }, correctAnswer: "ภาษา", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "12:00 PM - Lunch at the ___ (cafeteria)", [LanguageCode.FRENCH]: "12h00 - Déjeuner à la ___ (cafétéria)", [LanguageCode.PORTUGUESE]: "12h00 - Almoço no ___ (refeitório)", [LanguageCode.MANDARIN]: "12:00 - 在___（食堂）午餐" }, correctAnswer: "โรงอาหาร", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "1:00 PM - ___ class (history)", [LanguageCode.FRENCH]: "13h00 - Cours d' ___ (histoire)", [LanguageCode.PORTUGUESE]: "13h00 - Aula de ___ (história)", [LanguageCode.MANDARIN]: "13:00 - ___課（歷史）" }, correctAnswer: "ประวัติศาสตร์", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "2:00 PM - Study in the ___ (library)", [LanguageCode.FRENCH]: "14h00 - Étudier à la ___ (bibliothèque)", [LanguageCode.PORTUGUESE]: "14h00 - Estudar na ___ (biblioteca)", [LanguageCode.MANDARIN]: "14:00 - 在___（圖書館）學習" }, correctAnswer: "ห้องสมุด", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "3:00 PM - Do ___ (homework)", [LanguageCode.FRENCH]: "15h00 - Faire les ___ (devoirs)", [LanguageCode.PORTUGUESE]: "15h00 - Fazer ___ (dever de casa)", [LanguageCode.MANDARIN]: "15:00 - 做___（作業）" }, correctAnswer: "การบ้าน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to form correct classroom phrases.",
                [LanguageCode.FRENCH]: "Organisez les mots pour former des phrases de classe correctes.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para formar frases corretas de sala de aula.",
                [LanguageCode.MANDARIN]: "排列單詞以形成正確的課堂短語。",
            },
            sentences: [
                { correctOrder: ["นักเรียน", "เรียน", "ใน", "ห้องเรียน"], hint: { [LanguageCode.ENGLISH]: "Students study in the classroom.", [LanguageCode.FRENCH]: "Les élèves étudient dans la salle de classe.", [LanguageCode.PORTUGUESE]: "Os alunos estudam na sala de aula.", [LanguageCode.MANDARIN]: "學生在教室學習。" } },
                { correctOrder: ["ครู", "สอน", "วิชา", "ภาษา"], hint: { [LanguageCode.ENGLISH]: "The teacher teaches language class.", [LanguageCode.FRENCH]: "Le professeur enseigne le cours de langue.", [LanguageCode.PORTUGUESE]: "O professor ensina aula de idioma.", [LanguageCode.MANDARIN]: "老師教語言課。" } },
                { correctOrder: ["ผม", "ต้อง", "ทำ", "การบ้าน"], hint: { [LanguageCode.ENGLISH]: "I must do homework.", [LanguageCode.FRENCH]: "Je dois faire mes devoirs.", [LanguageCode.PORTUGUESE]: "Eu preciso fazer o dever de casa.", [LanguageCode.MANDARIN]: "我必須做作業。" } },
                { correctOrder: ["เรา", "สอบ", "วิชา", "คณิตศาสตร์", "วันนี้"], hint: { [LanguageCode.ENGLISH]: "We have a math test today.", [LanguageCode.FRENCH]: "Nous avons un examen de mathématiques aujourd'hui.", [LanguageCode.PORTUGUESE]: "Temos uma prova de matemática hoje.", [LanguageCode.MANDARIN]: "我們今天有數學考試。" } },
                { correctOrder: ["นักเรียน", "ใส่", "ชุดนักเรียน", "ไป", "โรงเรียน"], hint: { [LanguageCode.ENGLISH]: "Students wear uniforms to school.", [LanguageCode.FRENCH]: "Les élèves portent des uniformes à l'école.", [LanguageCode.PORTUGUESE]: "Os alunos usam uniformes para a escola.", [LanguageCode.MANDARIN]: "學生穿制服上學。" } },
                { correctOrder: ["อาจารย์", "อยู่", "ใน", "ห้องเรียน"], hint: { [LanguageCode.ENGLISH]: "The professor is in the classroom.", [LanguageCode.FRENCH]: "Le professeur est dans la salle de classe.", [LanguageCode.PORTUGUESE]: "O professor está na sala de aula.", [LanguageCode.MANDARIN]: "教授在教室裡。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the school vocabulary to its meaning.",
                [LanguageCode.FRENCH]: "Associez le vocabulaire scolaire à sa signification.",
                [LanguageCode.PORTUGUESE]: "Relacione o vocabulário escolar ao seu significado.",
                [LanguageCode.MANDARIN]: "將學校詞彙與其含義配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "โรงเรียน", [LanguageCode.FRENCH]: "โรงเรียน", [LanguageCode.PORTUGUESE]: "โรงเรียน", [LanguageCode.MANDARIN]: "โรงเรียน" }, answer: { [LanguageCode.ENGLISH]: "school", [LanguageCode.FRENCH]: "école", [LanguageCode.PORTUGUESE]: "escola", [LanguageCode.MANDARIN]: "學校" } },
                { prompt: { [LanguageCode.ENGLISH]: "ห้องเรียน", [LanguageCode.FRENCH]: "ห้องเรียน", [LanguageCode.PORTUGUESE]: "ห้องเรียน", [LanguageCode.MANDARIN]: "ห้องเรียน" }, answer: { [LanguageCode.ENGLISH]: "classroom", [LanguageCode.FRENCH]: "salle de classe", [LanguageCode.PORTUGUESE]: "sala de aula", [LanguageCode.MANDARIN]: "教室" } },
                { prompt: { [LanguageCode.ENGLISH]: "ห้องสมุด", [LanguageCode.FRENCH]: "ห้องสมุด", [LanguageCode.PORTUGUESE]: "ห้องสมุด", [LanguageCode.MANDARIN]: "ห้องสมุด" }, answer: { [LanguageCode.ENGLISH]: "library", [LanguageCode.FRENCH]: "bibliothèque", [LanguageCode.PORTUGUESE]: "biblioteca", [LanguageCode.MANDARIN]: "圖書館" } },
                { prompt: { [LanguageCode.ENGLISH]: "โรงอาหาร", [LanguageCode.FRENCH]: "โรงอาหาร", [LanguageCode.PORTUGUESE]: "โรงอาหาร", [LanguageCode.MANDARIN]: "โรงอาหาร" }, answer: { [LanguageCode.ENGLISH]: "cafeteria", [LanguageCode.FRENCH]: "cafétéria", [LanguageCode.PORTUGUESE]: "refeitório", [LanguageCode.MANDARIN]: "食堂" } },
                { prompt: { [LanguageCode.ENGLISH]: "หอประชุม", [LanguageCode.FRENCH]: "หอประชุม", [LanguageCode.PORTUGUESE]: "หอประชุม", [LanguageCode.MANDARIN]: "หอประชุม" }, answer: { [LanguageCode.ENGLISH]: "assembly hall", [LanguageCode.FRENCH]: "salle de réunion", [LanguageCode.PORTUGUESE]: "salão de assembleias", [LanguageCode.MANDARIN]: "禮堂" } },
                { prompt: { [LanguageCode.ENGLISH]: "ชุดนักเรียน", [LanguageCode.FRENCH]: "ชุดนักเรียน", [LanguageCode.PORTUGUESE]: "ชุดนักเรียน", [LanguageCode.MANDARIN]: "ชุดนักเรียน" }, answer: { [LanguageCode.ENGLISH]: "student uniform", [LanguageCode.FRENCH]: "uniforme scolaire", [LanguageCode.PORTUGUESE]: "uniforme escolar", [LanguageCode.MANDARIN]: "學生制服" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the school subjects to their Thai names.",
                [LanguageCode.FRENCH]: "Associez les matières scolaires à leurs noms thaïlandais.",
                [LanguageCode.PORTUGUESE]: "Relacione as matérias escolares aos seus nomes tailandeses.",
                [LanguageCode.MANDARIN]: "將學校科目與泰語名稱配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "คณิตศาสตร์", [LanguageCode.FRENCH]: "คณิตศาสตร์", [LanguageCode.PORTUGUESE]: "คณิตศาสตร์", [LanguageCode.MANDARIN]: "คณิตศาสตร์" }, answer: { [LanguageCode.ENGLISH]: "mathematics", [LanguageCode.FRENCH]: "mathématiques", [LanguageCode.PORTUGUESE]: "matemática", [LanguageCode.MANDARIN]: "數學" } },
                { prompt: { [LanguageCode.ENGLISH]: "วิทยาศาสตร์", [LanguageCode.FRENCH]: "วิทยาศาสตร์", [LanguageCode.PORTUGUESE]: "วิทยาศาสตร์", [LanguageCode.MANDARIN]: "วิทยาศาสตร์" }, answer: { [LanguageCode.ENGLISH]: "science", [LanguageCode.FRENCH]: "sciences", [LanguageCode.PORTUGUESE]: "ciências", [LanguageCode.MANDARIN]: "科學" } },
                { prompt: { [LanguageCode.ENGLISH]: "ประวัติศาสตร์", [LanguageCode.FRENCH]: "ประวัติศาสตร์", [LanguageCode.PORTUGUESE]: "ประวัติศาสตร์", [LanguageCode.MANDARIN]: "ประวัติศาสตร์" }, answer: { [LanguageCode.ENGLISH]: "history", [LanguageCode.FRENCH]: "histoire", [LanguageCode.PORTUGUESE]: "história", [LanguageCode.MANDARIN]: "歷史" } },
                { prompt: { [LanguageCode.ENGLISH]: "ภาษา", [LanguageCode.FRENCH]: "ภาษา", [LanguageCode.PORTUGUESE]: "ภาษา", [LanguageCode.MANDARIN]: "ภาษา" }, answer: { [LanguageCode.ENGLISH]: "language", [LanguageCode.FRENCH]: "langue", [LanguageCode.PORTUGUESE]: "idioma", [LanguageCode.MANDARIN]: "語言" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct answer for each school-related question.",
                [LanguageCode.FRENCH]: "Choisissez la bonne réponse pour chaque question liée à l'école.",
                [LanguageCode.PORTUGUESE]: "Escolha a resposta correta para cada pergunta relacionada à escola.",
                [LanguageCode.MANDARIN]: "為每個與學校相關的問題選擇正確答案。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "What do Thai students wear to school?", [LanguageCode.FRENCH]: "Que portent les étudiants thaïlandais à l'école ?", [LanguageCode.PORTUGUESE]: "O que os estudantes tailandeses usam na escola?", [LanguageCode.MANDARIN]: "泰國學生上學穿什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ชุดนักเรียน", [LanguageCode.FRENCH]: "ชุดนักเรียน", [LanguageCode.PORTUGUESE]: "ชุดนักเรียน", [LanguageCode.MANDARIN]: "ชุดนักเรียน（學生制服）" },
                        { [LanguageCode.ENGLISH]: "ห้องเรียน", [LanguageCode.FRENCH]: "ห้องเรียน", [LanguageCode.PORTUGUESE]: "ห้องเรียน", [LanguageCode.MANDARIN]: "ห้องเรียน（教室）" },
                        { [LanguageCode.ENGLISH]: "ตำรา", [LanguageCode.FRENCH]: "ตำรา", [LanguageCode.PORTUGUESE]: "ตำรา (livro didático)", [LanguageCode.MANDARIN]: "ตำรา（教科書）" },
                    ],
                    correctIndex: 0
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Where do students eat lunch at school?", [LanguageCode.FRENCH]: "Où les élèves mangent-ils le déjeuner à l'école ?", [LanguageCode.PORTUGUESE]: "Onde os alunos almoçam na escola?", [LanguageCode.MANDARIN]: "學生在學校哪裡吃午餐？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ห้องสมุด", [LanguageCode.FRENCH]: "ห้องสมุด (bibliothèque)", [LanguageCode.PORTUGUESE]: "ห้องสมุด", [LanguageCode.MANDARIN]: "ห้องสมุด（圖書館）" },
                        { [LanguageCode.ENGLISH]: "โรงอาหาร", [LanguageCode.FRENCH]: "โรงอาหาร (cafétéria)", [LanguageCode.PORTUGUESE]: "โรงอาหาร (refeitório)", [LanguageCode.MANDARIN]: "โรงอาหาร（食堂）" },
                        { [LanguageCode.ENGLISH]: "หอประชุม", [LanguageCode.FRENCH]: "หอประชุม (salle de réunion)", [LanguageCode.PORTUGUESE]: "หอประชุม (salão de assembleias)", [LanguageCode.MANDARIN]: "หอประชุม（禮堂）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What is the formal/respectful word for teacher?", [LanguageCode.FRENCH]: "Quel est le mot formel/respectueux pour professeur ?", [LanguageCode.PORTUGUESE]: "Qual é a palavra formal/respeitosa para professor?", [LanguageCode.MANDARIN]: "老師的正式/尊敬詞是什麼？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ครู", [LanguageCode.FRENCH]: "ครู", [LanguageCode.PORTUGUESE]: "ครู", [LanguageCode.MANDARIN]: "ครู" },
                        { [LanguageCode.ENGLISH]: "อาจารย์ (aa-jaan)", [LanguageCode.FRENCH]: "อาจารย์ (aa-jaan)", [LanguageCode.PORTUGUESE]: "อาจารย์ (aa-jaan)", [LanguageCode.MANDARIN]: "อาจารย์ (aa-jaan)" },
                        { [LanguageCode.ENGLISH]: "นักเรียน (nák-rian)", [LanguageCode.FRENCH]: "นักเรียน (nák-rian)", [LanguageCode.PORTUGUESE]: "นักเรียน (nák-rian)", [LanguageCode.MANDARIN]: "นักเรียน (nák-rian)" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "What does การบ้าน (gaan bâan) mean?", [LanguageCode.FRENCH]: "Que signifie การบ้าน (gaan bâan) ?", [LanguageCode.PORTUGUESE]: "O que significa การบ้าน (gaan bâan)?", [LanguageCode.MANDARIN]: "การบ้าน (gaan bâan) 是什麼意思？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "classroom", [LanguageCode.FRENCH]: "salle de classe", [LanguageCode.PORTUGUESE]: "sala de aula", [LanguageCode.MANDARIN]: "教室" },
                        { [LanguageCode.ENGLISH]: "homework", [LanguageCode.FRENCH]: "devoirs", [LanguageCode.PORTUGUESE]: "dever de casa", [LanguageCode.MANDARIN]: "作業" },
                        { [LanguageCode.ENGLISH]: "textbook", [LanguageCode.FRENCH]: "manuel scolaire", [LanguageCode.PORTUGUESE]: "livro didático", [LanguageCode.MANDARIN]: "教科書" },
                    ],
                    correctIndex: 1
                },
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
            [LanguageCode.ENGLISH]: "บรรยายวันเรียนของคุณในสี่ประโยค",
            [LanguageCode.FRENCH]: "บรรยายวันเรียนของคุณในสี่ประโยค",
            [LanguageCode.PORTUGUESE]: "บรรยายวันเรียนของคุณในสี่ประโยค",
            [LanguageCode.MANDARIN]: "บรรยายวันเรียนของคุณในสี่ประโยค",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Describe your school day in 4 sentences. Include what time you arrive at school, what subjects you study, where you eat lunch, and when you do homework. Use school vocabulary like โรงเรียน, วิชา, โรงอาหาร, and การบ้าน.",
            [LanguageCode.FRENCH]: "Décrivez votre journée scolaire en 4 phrases. Incluez l'heure à laquelle vous arrivez à l'école, quelles matières vous étudiez, où vous mangez le déjeuner et quand vous faites vos devoirs. Utilisez le vocabulaire scolaire comme โรงเรียน, วิชา, โรงอาหาร, et การบ้าน.",
            [LanguageCode.PORTUGUESE]: "Descreva seu dia escolar em 4 frases. Inclua que horas você chega à escola, quais matérias você estuda, onde você almoça e quando você faz o dever de casa. Use vocabulário escolar como โรงเรียน, วิชา, โรงอาหาร, e การบ้าน.",
            [LanguageCode.MANDARIN]: "用4句話描述你的學校日。包括你幾點到學校、你學習什麼科目、你在哪裡吃午餐，以及你什麼時候做作業。使用學校詞彙如 โรงเรียน、วิชา、โรงอาหาร 和 การบ้าน。",
        },
        speakingType: 'open-ended'
    }
};

