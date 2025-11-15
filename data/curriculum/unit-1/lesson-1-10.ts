import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_10: Lesson = {
    id: "1.10",
    title: {
        [LanguageCode.ENGLISH]: "Family & Social Terms",
        [LanguageCode.FRENCH]: "Famille et termes sociaux",
        [LanguageCode.PORTUGUESE]: "Família e Termos Sociais",
        [LanguageCode.MANDARIN]: "家庭和社交術語",
    },
    vocabulary: [
        { thai: "พี่", phonetic: "phîi", translations: { [LanguageCode.ENGLISH]: "older sibling / older person (informal)", [LanguageCode.FRENCH]: "frère/sœur aîné(e) / personne plus âgée", [LanguageCode.PORTUGUESE]: "irmão/irmã mais velho(a) / pessoa mais velha", [LanguageCode.MANDARIN]: "哥哥/姐姐 / 年長者" } },
        { thai: "น้อง", phonetic: "nɔ́ɔŋ", translations: { [LanguageCode.ENGLISH]: "younger sibling / younger person (informal)", [LanguageCode.FRENCH]: "frère/sœur cadet(te) / personne plus jeune", [LanguageCode.PORTUGUESE]: "irmão/irmã mais novo(a) / pessoa mais nova", [LanguageCode.MANDARIN]: "弟弟/妹妹 / 年輕者" } },
        { thai: "พ่อ", phonetic: "phɔ̂ɔ", translations: { [LanguageCode.ENGLISH]: "father / dad", [LanguageCode.FRENCH]: "père / papa", [LanguageCode.PORTUGUESE]: "pai / papai", [LanguageCode.MANDARIN]: "父親 / 爸爸" } },
        { thai: "แม่", phonetic: "mɛ̂ɛ", translations: { [LanguageCode.ENGLISH]: "mother / mom", [LanguageCode.FRENCH]: "mère / maman", [LanguageCode.PORTUGUESE]: "mãe / mamãe", [LanguageCode.MANDARIN]: "母親 / 媽媽" } },
        { thai: "ลูก", phonetic: "lûuk", translations: { [LanguageCode.ENGLISH]: "child / son / daughter", [LanguageCode.FRENCH]: "enfant / fils / fille", [LanguageCode.PORTUGUESE]: "filho(a) / criança", [LanguageCode.MANDARIN]: "孩子 / 兒子 / 女兒" } },
        { thai: "ลุง", phonetic: "lung", translations: { [LanguageCode.ENGLISH]: "uncle (older than parents) / aunt (older than parents)", [LanguageCode.FRENCH]: "oncle (plus âgé que les parents) / tante (plus âgée)", [LanguageCode.PORTUGUESE]: "tio (mais velho que os pais) / tia (mais velha)", [LanguageCode.MANDARIN]: "叔叔/伯伯/嬸嬸 (比父母年長)" } },
        { thai: "ป้า", phonetic: "bpâa", translations: { [LanguageCode.ENGLISH]: "aunt (older than parents) / older woman", [LanguageCode.FRENCH]: "tante (plus âgée que les parents) / femme plus âgée", [LanguageCode.PORTUGUESE]: "tia (mais velha que os pais) / mulher mais velha", [LanguageCode.MANDARIN]: "阿姨/姑姑 (比父母年長)" } },
        { thai: "น้า", phonetic: "náa", translations: { [LanguageCode.ENGLISH]: "uncle/aunt (younger than parents)", [LanguageCode.FRENCH]: "oncle/tante (plus jeune que les parents)", [LanguageCode.PORTUGUESE]: "tio/tia (mais novo(a) que os pais)", [LanguageCode.MANDARIN]: "叔叔/阿姨 (比父母年輕)" } },
        { thai: "ปู่", phonetic: "bpùu", translations: { [LanguageCode.ENGLISH]: "grandfather (paternal)", [LanguageCode.FRENCH]: "grand-père (paternel)", [LanguageCode.PORTUGUESE]: "avô (paterno)", [LanguageCode.MANDARIN]: "爺爺 (父方)" } },
        { thai: "ย่า", phonetic: "yâa", translations: { [LanguageCode.ENGLISH]: "grandmother (paternal)", [LanguageCode.FRENCH]: "grand-mère (paternelle)", [LanguageCode.PORTUGUESE]: "avó (paterna)", [LanguageCode.MANDARIN]: "奶奶 (父方)" } },
        { thai: "ตา", phonetic: "dtaa", translations: { [LanguageCode.ENGLISH]: "grandfather (maternal)", [LanguageCode.FRENCH]: "grand-père (maternel)", [LanguageCode.PORTUGUESE]: "avô (materno)", [LanguageCode.MANDARIN]: "外公 (母方)" } },
        { thai: "ยาย", phonetic: "yaai", translations: { [LanguageCode.ENGLISH]: "grandmother (maternal)", [LanguageCode.FRENCH]: "grand-mère (maternelle)", [LanguageCode.PORTUGUESE]: "avó (materna)", [LanguageCode.MANDARIN]: "外婆 (母方)" } },
        { thai: "เพื่อน", phonetic: "phʉ̂an", translations: { [LanguageCode.ENGLISH]: "friend", [LanguageCode.FRENCH]: "ami(e)", [LanguageCode.PORTUGUESE]: "amigo(a)", [LanguageCode.MANDARIN]: "朋友" } },
        { thai: "แฟน", phonetic: "fɛɛn", translations: { [LanguageCode.ENGLISH]: "boyfriend / girlfriend / partner", [LanguageCode.FRENCH]: "petit(e) ami(e) / partenaire", [LanguageCode.PORTUGUESE]: "namorado(a) / parceiro(a)", [LanguageCode.MANDARIN]: "男朋友 / 女朋友 / 伴侶" } },
        { thai: "นักเรียน", phonetic: "nák-rian", translations: { [LanguageCode.ENGLISH]: "student", [LanguageCode.FRENCH]: "étudiant(e) / élève", [LanguageCode.PORTUGUESE]: "estudante / aluno(a)", [LanguageCode.MANDARIN]: "學生" } },
        { thai: "ครู", phonetic: "khruu", translations: { [LanguageCode.ENGLISH]: "teacher", [LanguageCode.FRENCH]: "professeur / enseignant(e)", [LanguageCode.PORTUGUESE]: "professor(a)", [LanguageCode.MANDARIN]: "老師" } },
        { thai: "คน", phonetic: "khon", translations: { [LanguageCode.ENGLISH]: "person / people (classifier)", [LanguageCode.FRENCH]: "personne / gens (classificateur)", [LanguageCode.PORTUGUESE]: "pessoa / pessoas (classificador)", [LanguageCode.MANDARIN]: "人 / 人們（量詞）" } },
        { thai: "ครอบครัว", phonetic: "khrɔ̂ɔp-khruua", translations: { [LanguageCode.ENGLISH]: "family", [LanguageCode.FRENCH]: "famille", [LanguageCode.PORTUGUESE]: "família", [LanguageCode.MANDARIN]: "家庭" } },
        { thai: "สามี", phonetic: "sǎa-mii", translations: { [LanguageCode.ENGLISH]: "husband", [LanguageCode.FRENCH]: "mari / époux", [LanguageCode.PORTUGUESE]: "marido / esposo", [LanguageCode.MANDARIN]: "丈夫" } },
        { thai: "ภรรยา", phonetic: "phan-rá-yaa", translations: { [LanguageCode.ENGLISH]: "wife", [LanguageCode.FRENCH]: "femme / épouse", [LanguageCode.PORTUGUESE]: "esposa / mulher", [LanguageCode.MANDARIN]: "妻子" } },
        { thai: "หลาน", phonetic: "lǎan", translations: { [LanguageCode.ENGLISH]: "nephew / niece / grandchild", [LanguageCode.FRENCH]: "neveu / nièce / petit-enfant", [LanguageCode.PORTUGUESE]: "sobrinho(a) / neto(a)", [LanguageCode.MANDARIN]: "侄子/侄女/孫子/孫女" } },
        { thai: "คนรู้จัก", phonetic: "khon rúu-jàk", translations: { [LanguageCode.ENGLISH]: "acquaintance / someone you know", [LanguageCode.FRENCH]: "connaissance / quelqu'un que vous connaissez", [LanguageCode.PORTUGUESE]: "conhecido(a) / alguém que você conhece", [LanguageCode.MANDARIN]: "熟人 / 認識的人" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Understanding พี่ and น้อง: The Foundation of Thai Social Structure",
                [LanguageCode.FRENCH]: "Comprendre พี่ et น้อง : La base de la structure sociale thaïlandaise",
                [LanguageCode.PORTUGUESE]: "Entendendo พี่ e น้อง: A Base da Estrutura Social Tailandesa",
                [LanguageCode.MANDARIN]: "理解 พี่ 和 น้อง：泰國社會結構的基礎",
            },
            content: {
                [LanguageCode.ENGLISH]: "In Thai culture, age and seniority are EXTREMELY important. The words พี่ (phîi) and น้อง (nɔ́ɔŋ) are used constantly and go far beyond just siblings!\n\n**พี่ (phîi) = Older person / senior**\n\nThis word is used for:\n• Older siblings (brother or sister)\n• Older friends, classmates, or colleagues\n• Anyone older than you in a casual/friendly context\n• Shows respect while maintaining friendliness\n\nExamples:\n• พี่ชาย (phîi-chaai) = older brother (specifically male)\n• พี่สาว (phîi-sǎao) = older sister (specifically female)\n• Just พี่ can be used for both genders in casual speech\n\n**น้อง (nɔ́ɔŋ) = Younger person / junior**\n\nThis word is used for:\n• Younger siblings (brother or sister)\n• Younger friends, classmates, or colleagues\n• Anyone younger than you in a casual/friendly context\n• Shows affection and care\n\nExamples:\n• น้องชาย (nɔ́ɔŋ-chaai) = younger brother (specifically male)\n• น้องสาว (nɔ́ɔŋ-sǎao) = younger sister (specifically female)\n• Just น้อง can be used for both genders in casual speech\n\n**Why This Matters:**\n\nIn Thailand, determining who is older is often one of the FIRST things people establish when meeting:\n1. Age determines who should wai first (younger wais to older)\n2. Age determines pronouns (older uses น้อง, younger uses พี่)\n3. Age determines who pays for meals (usually older)\n4. Age determines social hierarchy and respect levels\n\n**Pro Tip:**\nIf you're not sure of someone's age, it's polite to use พี่ and let them correct you if they're younger. It's better to show too much respect than too little!\n\n**Common Phrases:**\n• พี่กี่ขวบ? (phîi gìi khùap) = How old are you, older sibling/person?\n• น้องชื่ออะไร? (nɔ́ɔŋ chʉ̂ʉ à-rai) = What's your name, younger person?\n• ขอบคุณพี่ (khɔ̀ɔp-khun phîi) = Thank you, older person",
                [LanguageCode.FRENCH]: "Dans la culture thaïlandaise, l'âge et l'ancienneté sont EXTRÊMEMENT importants. Les mots พี่ (phîi) et น้อง (nɔ́ɔŋ) sont utilisés constamment et vont bien au-delà des simples frères et sœurs !\n\n**พี่ (phîi) = Personne plus âgée / aîné**\n\nCe mot est utilisé pour :\n• Les frères et sœurs aînés\n• Les amis, camarades de classe ou collègues plus âgés\n• Toute personne plus âgée que vous dans un contexte décontracté/amical\n• Montre du respect tout en maintenant la convivialité\n\n**น้อง (nɔ́ɔŋ) = Personne plus jeune / cadet**\n\nCe mot est utilisé pour :\n• Les frères et sœurs cadets\n• Les amis, camarades de classe ou collègues plus jeunes\n• Toute personne plus jeune que vous dans un contexte décontracté/amical\n• Montre de l'affection et du soin\n\n**Pourquoi c'est important :**\n\nEn Thaïlande, déterminer qui est le plus âgé est souvent l'une des PREMIÈRES choses que les gens établissent lors d'une rencontre :\n1. L'âge détermine qui doit wai en premier (le plus jeune wai au plus âgé)\n2. L'âge détermine les pronoms (le plus âgé utilise น้อง, le plus jeune utilise พี่)\n3. L'âge détermine qui paie les repas (généralement le plus âgé)\n4. L'âge détermine la hiérarchie sociale et les niveaux de respect",
                [LanguageCode.PORTUGUESE]: "Na cultura tailandesa, idade e senioridade são EXTREMAMENTE importantes. As palavras พี่ (phîi) e น้อง (nɔ́ɔŋ) são usadas constantemente e vão muito além de apenas irmãos!\n\n**พี่ (phîi) = Pessoa mais velha / sênior**\n\nEsta palavra é usada para:\n• Irmãos mais velhos (irmão ou irmã)\n• Amigos mais velhos, colegas de classe ou colegas de trabalho\n• Qualquer pessoa mais velha que você em um contexto casual/amigável\n• Mostra respeito mantendo a amizade\n\n**น้อง (nɔ́ɔŋ) = Pessoa mais nova / júnior**\n\nEsta palavra é usada para:\n• Irmãos mais novos (irmão ou irmã)\n• Amigos mais novos, colegas de classe ou colegas de trabalho\n• Qualquer pessoa mais nova que você em um contexto casual/amigável\n• Mostra afeição e cuidado\n\n**Por que isso importa:**\n\nNa Tailândia, determinar quem é mais velho é frequentemente uma das PRIMEIRAS coisas que as pessoas estabelecem ao se conhecerem:\n1. A idade determina quem deve fazer wai primeiro (mais novo faz wai para mais velho)\n2. A idade determina pronomes (mais velho usa น้อง, mais novo usa พี่)\n3. A idade determina quem paga as refeições (geralmente o mais velho)\n4. A idade determina a hierarquia social e os níveis de respeito",
                [LanguageCode.MANDARIN]: "在泰國文化中，年齡和資歷極其重要。พี่ (phîi) 和 น้อง (nɔ́ɔŋ) 這兩個詞經常使用，遠不止於兄弟姐妹！\n\n**พี่ (phîi) = 年長者 / 前輩**\n\n這個詞用於：\n• 年長的兄弟姐妹\n• 年長的朋友、同學或同事\n• 在隨意/友好的情況下任何比你年長的人\n• 表達尊重的同時保持友好\n\n**น้อง (nɔ́ɔŋ) = 年輕者 / 晚輩**\n\n這個詞用於：\n• 年幼的兄弟姐妹\n• 年輕的朋友、同學或同事\n• 在隨意/友好的情況下任何比你年輕的人\n• 表達關愛和照顧\n\n**為什麼這很重要：**\n\n在泰國，確定誰更年長通常是人們見面時最先確定的事情之一：\n1. 年齡決定誰先行合十禮（年輕者向年長者行禮）\n2. 年齡決定代詞的使用（年長者用 น้อง，年輕者用 พี่）\n3. 年齡決定誰付飯錢（通常是年長者）\n4. 年齡決定社會等級和尊重程度",
            }
        },
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Family Terms: The Grandparent Distinction",
                [LanguageCode.FRENCH]: "Termes familiaux thaïlandais : La distinction des grands-parents",
                [LanguageCode.PORTUGUESE]: "Termos Familiares Tailandeses: A Distinção dos Avós",
                [LanguageCode.MANDARIN]: "泰國家庭術語：祖父母的區別",
            },
            content: {
                [LanguageCode.ENGLISH]: "Unlike English, Thai has DIFFERENT words for grandparents depending on whether they're on your father's or mother's side:\n\n**Father's Side (Paternal):**\n• ปู่ (bpùu) = grandfather (father's father)\n• ย่า (yâa) = grandmother (father's mother)\n\n**Mother's Side (Maternal):**\n• ตา (dtaa) = grandfather (mother's father)\n• ยาย (yaai) = grandmother (mother's mother)\n\n**Aunts and Uncles - It Gets Complex!**\n\nThai also distinguishes aunts and uncles by whether they're older or younger than your parents:\n\n• **ลุง (lung)** = uncle/aunt who is OLDER than your parents (usually father's or mother's older sibling)\n• **ป้า (bpâa)** = aunt who is OLDER than your parents (father's or mother's older sister) OR older woman (casual address)\n• **น้า (náa)** = uncle/aunt who is YOUNGER than your parents (father's or mother's younger sibling)\n\n**Why This Matters:**\n\n1. Shows the importance of lineage in Thai culture\n2. Reflects respect for both sides of the family\n3. Helps maintain clarity in family relationships\n4. These terms are often used as polite address for older people, even non-relatives\n   - ลุง/ป้า can be used for any older person (roughly parent's age or older)\n   - Similar to calling someone \"uncle\" or \"auntie\" in English\n\n**Using คน (khon) as a Classifier:**\n\nคน (khon) means \"person\" but is also the CLASSIFIER for counting people:\n• คนหนึ่ง (khon nʉ̀ŋ) = one person\n• สองคน (sɔ̌ɔŋ khon) = two people\n• ครอบครัวมีสี่คน (khrɔ̂ɔp-khruua mii sìi khon) = The family has four people\n\nRemember: In Thai, you need to use classifiers when counting things!",
                [LanguageCode.FRENCH]: "Contrairement à l'anglais, le thaï a des mots DIFFÉRENTS pour les grands-parents selon qu'ils sont du côté de votre père ou de votre mère :\n\n**Côté du père (paternel) :**\n• ปู่ (bpùu) = grand-père (père du père)\n• ย่า (yâa) = grand-mère (mère du père)\n\n**Côté de la mère (maternel) :**\n• ตา (dtaa) = grand-père (père de la mère)\n• ยาย (yaai) = grand-mère (mère de la mère)\n\n**Oncles et tantes - Ça devient complexe !**\n\nLe thaï distingue également les oncles et tantes selon qu'ils sont plus âgés ou plus jeunes que vos parents :\n\n• **ลุง (lung)** = oncle/tante qui est PLUS ÂGÉ(E) que vos parents\n• **ป้า (bpâa)** = tante qui est PLUS ÂGÉE que vos parents OU femme plus âgée (adresse informelle)\n• **น้า (náa)** = oncle/tante qui est PLUS JEUNE que vos parents\n\n**Pourquoi c'est important :**\n\n1. Montre l'importance de la lignée dans la culture thaïlandaise\n2. Reflète le respect des deux côtés de la famille\n3. Aide à maintenir la clarté dans les relations familiales\n4. Ces termes sont souvent utilisés comme adresse polie pour les personnes âgées, même les non-parents",
                [LanguageCode.PORTUGUESE]: "Ao contrário do inglês, o tailandês tem palavras DIFERENTES para avós dependendo se são do lado do seu pai ou da sua mãe:\n\n**Lado do Pai (Paterno):**\n• ปู่ (bpùu) = avô (pai do pai)\n• ย่า (yâa) = avó (mãe do pai)\n\n**Lado da Mãe (Materno):**\n• ตา (dtaa) = avô (pai da mãe)\n• ยาย (yaai) = avó (mãe da mãe)\n\n**Tios e Tias - Fica Complexo!**\n\nO tailandês também distingue tios e tias se eles são mais velhos ou mais novos que seus pais:\n\n• **ลุง (lung)** = tio/tia que é MAIS VELHO(A) que seus pais\n• **ป้า (bpâa)** = tia que é MAIS VELHA que seus pais OU mulher mais velha (tratamento casual)\n• **น้า (náa)** = tio/tia que é MAIS NOVO(A) que seus pais\n\n**Por que isso importa:**\n\n1. Mostra a importância da linhagem na cultura tailandesa\n2. Reflete respeito por ambos os lados da família\n3. Ajuda a manter clareza nas relações familiares\n4. Esses termos são frequentemente usados como tratamento educado para pessoas mais velhas, mesmo não-parentes",
                [LanguageCode.MANDARIN]: "與英語不同，泰語對祖父母有不同的詞，取決於他們是父系還是母系：\n\n**父親一方（父系）：**\n• ปู่ (bpùu) = 爺爺（父親的父親）\n• ย่า (yâa) = 奶奶（父親的母親）\n\n**母親一方（母系）：**\n• ตา (dtaa) = 外公（母親的父親）\n• ยาย (yaai) = 外婆（母親的母親）\n\n**叔叔阿姨 - 變得複雜！**\n\n泰語還根據他們是比你父母年長還是年輕來區分叔叔阿姨：\n\n• **ลุง (lung)** = 比你父母年長的叔叔/阿姨\n• **ป้า (bpâa)** = 比你父母年長的阿姨或年長的女性（隨意稱呼）\n• **น้า (náa)** = 比你父母年輕的叔叔/阿姨\n\n**為什麼這很重要：**\n\n1. 顯示泰國文化中血統的重要性\n2. 反映對家庭雙方的尊重\n3. 有助於保持家庭關係的清晰\n4. 這些詞經常用作對年長者的禮貌稱呼，即使不是親戚",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the Family Tree: Complete the family tree with the correct Thai family terms.",
                [LanguageCode.FRENCH]: "Remplissez l'arbre généalogique : Complétez l'arbre généalogique avec les termes familiaux thaïlandais corrects.",
                [LanguageCode.PORTUGUESE]: "Preencha a Árvore Genealógica: Complete a árvore genealógica com os termos familiares tailandeses corretos.",
                [LanguageCode.MANDARIN]: "填寫家譜：用正確的泰語家庭術語完成家譜。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "My father's father is my ", [LanguageCode.FRENCH]: "Le père de mon père est mon ", [LanguageCode.PORTUGUESE]: "O pai do meu pai é meu ", [LanguageCode.MANDARIN]: "我父親的父親是我的 " }, correctAnswer: "ปู่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "My mother's mother is my ", [LanguageCode.FRENCH]: "La mère de ma mère est ma ", [LanguageCode.PORTUGUESE]: "A mãe da minha mãe é minha ", [LanguageCode.MANDARIN]: "我母親的母親是我的 " }, correctAnswer: "ยาย", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Someone older than me is my ", [LanguageCode.FRENCH]: "Quelqu'un de plus âgé que moi est mon/ma ", [LanguageCode.PORTUGUESE]: "Alguém mais velho que eu é meu/minha ", [LanguageCode.MANDARIN]: "比我年長的人是我的 " }, correctAnswer: "พี่", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "My father is my ", [LanguageCode.FRENCH]: "Mon père est mon ", [LanguageCode.PORTUGUESE]: "Meu pai é meu ", [LanguageCode.MANDARIN]: "我的父親是我的 " }, correctAnswer: "พ่อ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "My uncle who is older than my parents is my ", [LanguageCode.FRENCH]: "Mon oncle qui est plus âgé que mes parents est mon ", [LanguageCode.PORTUGUESE]: "Meu tio que é mais velho que meus pais é meu ", [LanguageCode.MANDARIN]: "比我父母年長的叔叔是我的 " }, correctAnswer: "ลุง", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange the words to form correct introductions.",
                [LanguageCode.FRENCH]: "Organisez les mots pour former des présentations correctes.",
                [LanguageCode.PORTUGUESE]: "Organize as palavras para formar introduções corretas.",
                [LanguageCode.MANDARIN]: "排列單詞以形成正確的介紹。",
            },
            sentences: [
                { correctOrder: ["นี่", "คือ", "พี่", "ชาย", "ของ", "ผม"], hint: { [LanguageCode.ENGLISH]: "This is my older brother.", [LanguageCode.FRENCH]: "C'est mon frère aîné.", [LanguageCode.PORTUGUESE]: "Este é meu irmão mais velho.", [LanguageCode.MANDARIN]: "這是我哥哥。" } },
                { correctOrder: ["เพื่อน", "ของ", "ฉัน", "เป็น", "นักเรียน"], hint: { [LanguageCode.ENGLISH]: "My friend is a student.", [LanguageCode.FRENCH]: "Mon ami(e) est étudiant(e).", [LanguageCode.PORTUGUESE]: "Meu amigo(a) é estudante.", [LanguageCode.MANDARIN]: "我的朋友是學生。" } },
                { correctOrder: ["ครอบครัว", "ของ", "ผม", "มี", "ห้า", "คน"], hint: { [LanguageCode.ENGLISH]: "My family has five people.", [LanguageCode.FRENCH]: "Ma famille a cinq personnes.", [LanguageCode.PORTUGUESE]: "Minha família tem cinco pessoas.", [LanguageCode.MANDARIN]: "我家有五個人。" } },
                { correctOrder: ["แฟน", "ของ", "เขา", "เป็น", "ครู"], hint: { [LanguageCode.ENGLISH]: "His/her partner is a teacher.", [LanguageCode.FRENCH]: "Son/sa partenaire est professeur.", [LanguageCode.PORTUGUESE]: "O(a) parceiro(a) dele(a) é professor(a).", [LanguageCode.MANDARIN]: "他/她的伴侶是老師。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the relationship to the correct Thai term.",
                [LanguageCode.FRENCH]: "Associez la relation au terme thaïlandais correct.",
                [LanguageCode.PORTUGUESE]: "Relacione o relacionamento ao termo tailandês correto.",
                [LanguageCode.MANDARIN]: "將關係與正確的泰語術語配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Maternal grandfather:", [LanguageCode.FRENCH]: "Grand-père maternel :", [LanguageCode.PORTUGUESE]: "Avô materno:", [LanguageCode.MANDARIN]: "外公：" }, answer: { [LanguageCode.ENGLISH]: "ตา", [LanguageCode.FRENCH]: "ตา", [LanguageCode.PORTUGUESE]: "ตา", [LanguageCode.MANDARIN]: "ตา" } },
                { prompt: { [LanguageCode.ENGLISH]: "Younger sibling:", [LanguageCode.FRENCH]: "Frère/sœur cadet(te) :", [LanguageCode.PORTUGUESE]: "Irmão/irmã mais novo(a):", [LanguageCode.MANDARIN]: "弟弟/妹妹：" }, answer: { [LanguageCode.ENGLISH]: "น้อง", [LanguageCode.FRENCH]: "น้อง", [LanguageCode.PORTUGUESE]: "น้อง", [LanguageCode.MANDARIN]: "น้อง" } },
                { prompt: { [LanguageCode.ENGLISH]: "Mother:", [LanguageCode.FRENCH]: "Mère :", [LanguageCode.PORTUGUESE]: "Mãe:", [LanguageCode.MANDARIN]: "母親：" }, answer: { [LanguageCode.ENGLISH]: "แม่", [LanguageCode.FRENCH]: "แม่", [LanguageCode.PORTUGUESE]: "แม่", [LanguageCode.MANDARIN]: "แม่" } },
                { prompt: { [LanguageCode.ENGLISH]: "Friend:", [LanguageCode.FRENCH]: "Ami(e) :", [LanguageCode.PORTUGUESE]: "Amigo(a):", [LanguageCode.MANDARIN]: "朋友：" }, answer: { [LanguageCode.ENGLISH]: "เพื่อน", [LanguageCode.FRENCH]: "เพื่อน", [LanguageCode.PORTUGUESE]: "เพื่อน", [LanguageCode.MANDARIN]: "เพื่อน" } },
                { prompt: { [LanguageCode.ENGLISH]: "Aunt/uncle (younger than parents):", [LanguageCode.FRENCH]: "Oncle/tante (plus jeune que les parents) :", [LanguageCode.PORTUGUESE]: "Tio/tia (mais novo que os pais):", [LanguageCode.MANDARIN]: "叔叔/阿姨（比父母年輕）：" }, answer: { [LanguageCode.ENGLISH]: "น้า", [LanguageCode.FRENCH]: "น้า", [LanguageCode.PORTUGUESE]: "น้า", [LanguageCode.MANDARIN]: "น้า" } },
                { prompt: { [LanguageCode.ENGLISH]: "Boyfriend/girlfriend:", [LanguageCode.FRENCH]: "Petit(e) ami(e) :", [LanguageCode.PORTUGUESE]: "Namorado(a):", [LanguageCode.MANDARIN]: "男/女朋友：" }, answer: { [LanguageCode.ENGLISH]: "แฟน", [LanguageCode.FRENCH]: "แฟน", [LanguageCode.PORTUGUESE]: "แฟน", [LanguageCode.MANDARIN]: "แฟน" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct family term for each scenario.",
                [LanguageCode.FRENCH]: "Choisissez le terme familial correct pour chaque scénario.",
                [LanguageCode.PORTUGUESE]: "Escolha o termo familiar correto para cada cenário.",
                [LanguageCode.MANDARIN]: "為每個場景選擇正確的家庭術語。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Your father's mother is called:", [LanguageCode.FRENCH]: "La mère de votre père s'appelle :", [LanguageCode.PORTUGUESE]: "A mãe do seu pai é chamada:", [LanguageCode.MANDARIN]: "你父親的母親稱為：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ยาย", [LanguageCode.FRENCH]: "ยาย", [LanguageCode.PORTUGUESE]: "ยาย", [LanguageCode.MANDARIN]: "ยาย" },
                        { [LanguageCode.ENGLISH]: "ย่า", [LanguageCode.FRENCH]: "ย่า", [LanguageCode.PORTUGUESE]: "ย่า", [LanguageCode.MANDARIN]: "ย่า" },
                        { [LanguageCode.ENGLISH]: "ตา", [LanguageCode.FRENCH]: "ตา", [LanguageCode.PORTUGUESE]: "ตา", [LanguageCode.MANDARIN]: "ตา" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "You meet someone 5 years older than you. You should call them:", [LanguageCode.FRENCH]: "Vous rencontrez quelqu'un de 5 ans plus âgé que vous. Vous devriez l'appeler :", [LanguageCode.PORTUGUESE]: "Você conhece alguém 5 anos mais velho que você. Você deve chamá-lo(a) de:", [LanguageCode.MANDARIN]: "你遇到一個比你大5歲的人。你應該稱呼他們：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "น้อง", [LanguageCode.FRENCH]: "น้อง", [LanguageCode.PORTUGUESE]: "น้อง", [LanguageCode.MANDARIN]: "น้อง" },
                        { [LanguageCode.ENGLISH]: "พี่", [LanguageCode.FRENCH]: "พี่", [LanguageCode.PORTUGUESE]: "พี่", [LanguageCode.MANDARIN]: "พี่" },
                        { [LanguageCode.ENGLISH]: "ลุง", [LanguageCode.FRENCH]: "ลุง", [LanguageCode.PORTUGUESE]: "ลุง", [LanguageCode.MANDARIN]: "ลุง" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The classifier word for counting people is:", [LanguageCode.FRENCH]: "Le mot classificateur pour compter les personnes est :", [LanguageCode.PORTUGUESE]: "A palavra classificadora para contar pessoas é:", [LanguageCode.MANDARIN]: "數人的量詞是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "คน", [LanguageCode.FRENCH]: "คน", [LanguageCode.PORTUGUESE]: "คน", [LanguageCode.MANDARIN]: "คน" },
                        { [LanguageCode.ENGLISH]: "อัน", [LanguageCode.FRENCH]: "อัน", [LanguageCode.PORTUGUESE]: "อัน", [LanguageCode.MANDARIN]: "อัน" },
                        { [LanguageCode.ENGLISH]: "ตัว", [LanguageCode.FRENCH]: "ตัว", [LanguageCode.PORTUGUESE]: "ตัว", [LanguageCode.MANDARIN]: "ตัว" },
                    ],
                    correctIndex: 0
                }
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
            [LanguageCode.ENGLISH]: "แนะนำคนสี่คนในชีวิตของคุณพร้อมความสัมพันธ์",
            [LanguageCode.FRENCH]: "แนะนำคนสี่คนในชีวิตของคุณพร้อมความสัมพันธ์",
            [LanguageCode.PORTUGUESE]: "แนะนำคนสี่คนในชีวิตของคุณพร้อมความสัมพันธ์",
            [LanguageCode.MANDARIN]: "แนะนำคนสี่คนในชีวิตของคุณพร้อมความสัมพันธ์",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Introduce four people in your life with their relationships to you. Use family terms like พี่, น้อง, พ่อ, แม่, เพื่อน, etc.",
            [LanguageCode.FRENCH]: "Présentez quatre personnes dans votre vie avec leurs relations avec vous. Utilisez des termes familiaux comme พี่, น้อง, พ่อ, แม่, เพื่อน, etc.",
            [LanguageCode.PORTUGUESE]: "Apresente quatro pessoas em sua vida com seus relacionamentos com você. Use termos familiares como พี่, น้อง, พ่อ, แม่, เพื่อน, etc.",
            [LanguageCode.MANDARIN]: "介紹你生活中的四個人以及他們與你的關係。使用家庭術語如 พี่、น้อง、พ่อ、แม่、เพื่อน 等。",
        },
        speakingType: 'open-ended'
    }
};

