
import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_0: Lesson = {
    id: "1.0",
    title: {
        [LanguageCode.ENGLISH]: "Survival Phrases",
        [LanguageCode.FRENCH]: "Phrases de survie",
        [LanguageCode.PORTUGUESE]: "Frases de Sobrevivência",
        [LanguageCode.MANDARIN]: "生存用語",
    },
    vocabulary: [
        { thai: "ผม", phonetic: "phǒm", translations: { [LanguageCode.ENGLISH]: "I (male, formal)", [LanguageCode.FRENCH]: "Je (masculin, formel)", [LanguageCode.PORTUGUESE]: "Eu (masculino, formal)", [LanguageCode.MANDARIN]: "我（男性，正式）" } },
        { thai: "ดิฉัน", phonetic: "dì-chǎn", translations: { [LanguageCode.ENGLISH]: "I (female, formal)", [LanguageCode.FRENCH]: "Je (féminin, formel)", [LanguageCode.PORTUGUESE]: "Eu (feminino, formal)", [LanguageCode.MANDARIN]: "我（女性，正式）" } },
        { thai: "ฉัน", phonetic: "chǎn", translations: { [LanguageCode.ENGLISH]: "I (general)", [LanguageCode.FRENCH]: "Je (général)", [LanguageCode.PORTUGUESE]: "Eu (geral)", [LanguageCode.MANDARIN]: "我（一般）" } },
        { thai: "คุณ", phonetic: "khun", translations: { [LanguageCode.ENGLISH]: "You (polite)", [LanguageCode.FRENCH]: "Tu/Vous (poli)", [LanguageCode.PORTUGUESE]: "Você (formal)", [LanguageCode.MANDARIN]: "你（禮貌）" } },
        { thai: "เขา", phonetic: "khǎo", translations: { [LanguageCode.ENGLISH]: "He / She / They", [LanguageCode.FRENCH]: "Il / Elle / Ils", [LanguageCode.PORTUGUESE]: "Ele / Ela / Eles", [LanguageCode.MANDARIN]: "他/她/他們" } },
        { thai: "เธอ", phonetic: "thəə", translations: { [LanguageCode.ENGLISH]: "You / He / She (informal)", [LanguageCode.FRENCH]: "Tu / Il / Elle (familier)", [LanguageCode.PORTUGUESE]: "Você / Ele / Ela (informal)", [LanguageCode.MANDARIN]: "你/他/她（非正式）" } },
        { thai: "เรา", phonetic: "rao", translations: { [LanguageCode.ENGLISH]: "We / Us / I (informal)", [LanguageCode.FRENCH]: "Nous / Je (familier)", [LanguageCode.PORTUGUESE]: "Nós / Eu (informal)", [LanguageCode.MANDARIN]: "我們/我（非正式）" } },
        { thai: "พวกเรา", phonetic: "phûak-rao", translations: { [LanguageCode.ENGLISH]: "We / Us (plural)", [LanguageCode.FRENCH]: "Nous (pluriel)", [LanguageCode.PORTUGUESE]: "Nós (plural)", [LanguageCode.MANDARIN]: "我們（複數）" } },
        { thai: "พวกเขา", phonetic: "phûak-khǎo", translations: { [LanguageCode.ENGLISH]: "They / Them", [LanguageCode.FRENCH]: "Ils / Elles / Eux", [LanguageCode.PORTUGUESE]: "Eles / Elas", [LanguageCode.MANDARIN]: "他們" } },
        { thai: "สวัสดี", phonetic: "sà-wàt-dii", translations: { [LanguageCode.ENGLISH]: "Hello / Goodbye", [LanguageCode.FRENCH]: "Bonjour / Au revoir", [LanguageCode.PORTUGUESE]: "Olá / Adeus", [LanguageCode.MANDARIN]: "你好 / 再見" } },
        { thai: "ขอบคุณ", phonetic: "khòp-khun", translations: { [LanguageCode.ENGLISH]: "Thank you", [LanguageCode.FRENCH]: "Merci", [LanguageCode.PORTUGUESE]: "Obrigado(a)", [LanguageCode.MANDARIN]: "謝謝" } },
        { thai: "ครับ / ค่ะ", phonetic: "khráp / khâ", translations: { [LanguageCode.ENGLISH]: "Polite particle (male / female)", [LanguageCode.FRENCH]: "Particule de politesse (masc. / fém.)", [LanguageCode.PORTUGUESE]: "Partícula de polidez (masc. / fem.)", [LanguageCode.MANDARIN]: "禮貌語氣詞（男性/女性）" } },
        { thai: "ไม่เป็นไร", phonetic: "mâi bpen rai", translations: { [LanguageCode.ENGLISH]: "It's okay / You're welcome", [LanguageCode.FRENCH]: "Ce n'est pas grave / De rien", [LanguageCode.PORTUGUESE]: "Tudo bem / De nada", [LanguageCode.MANDARIN]: "沒關係 / 不客氣" } },
        { thai: "ขอโทษ", phonetic: "khŏr-thôht", translations: { [LanguageCode.ENGLISH]: "Excuse me / Sorry", [LanguageCode.FRENCH]: "Excusez-moi / Désolé(e)", [LanguageCode.PORTUGUESE]: "Com licença / Desculpe", [LanguageCode.MANDARIN]: "對不起 / 不好意思" } },
        { thai: "ใช่", phonetic: "châi", translations: { [LanguageCode.ENGLISH]: "Yes", [LanguageCode.FRENCH]: "Oui", [LanguageCode.PORTUGUESE]: "Sim", [LanguageCode.MANDARIN]: "是" } },
        { thai: "ไม่ใช่", phonetic: "mâi châi", translations: { [LanguageCode.ENGLISH]: "No", [LanguageCode.FRENCH]: "Non", [LanguageCode.PORTUGUESE]: "Não", [LanguageCode.MANDARIN]: "不是" } },
        { thai: "เข้าใจ", phonetic: "khâo-jai", translations: { [LanguageCode.ENGLISH]: "Understand", [LanguageCode.FRENCH]: "Comprendre", [LanguageCode.PORTUGUESE]: "Entender", [LanguageCode.MANDARIN]: "明白" } },
        { thai: "ไม่เข้าใจ", phonetic: "mâi khâo-jai", translations: { [LanguageCode.ENGLISH]: "Don't understand", [LanguageCode.FRENCH]: "Ne pas comprendre", [LanguageCode.PORTUGUESE]: "Não entender", [LanguageCode.MANDARIN]: "不明白" } },
        { thai: "สบายดีไหม", phonetic: "sà-baai-dii mǎi", translations: { [LanguageCode.ENGLISH]: "How are you?", [LanguageCode.FRENCH]: "Comment ça va ?", [LanguageCode.PORTUGUESE]: "Como vai?", [LanguageCode.MANDARIN]: "你好吗？" } },
        { thai: "สบายดี", phonetic: "sà-baai-dii", translations: { [LanguageCode.ENGLISH]: "I'm fine", [LanguageCode.FRENCH]: "Je vais bien", [LanguageCode.PORTUGUESE]: "Estou bem", [LanguageCode.MANDARIN]: "我很好" } },
        { thai: "ชื่ออะไร", phonetic: "chʉ̂ʉ à-rai", translations: { [LanguageCode.ENGLISH]: "What is your name?", [LanguageCode.FRENCH]: "Comment tu t'appelles ?", [LanguageCode.PORTUGUESE]: "Como você se chama?", [LanguageCode.MANDARIN]: "你叫什麼名字？" } },
        { thai: "ยินดีที่ได้รู้จัก", phonetic: "yin-dii thîi dâai rúu-jàk", translations: { [LanguageCode.ENGLISH]: "Nice to meet you", [LanguageCode.FRENCH]: "Ravi de te rencontrer", [LanguageCode.PORTUGUESE]: "Prazer em conhecer", [LanguageCode.MANDARIN]: "很高興認識你" } },
        { thai: "เจอกัน", phonetic: "jəə gan", translations: { [LanguageCode.ENGLISH]: "See you later", [LanguageCode.FRENCH]: "À plus tard", [LanguageCode.PORTUGUESE]: "Até mais", [LanguageCode.MANDARIN]: "待會見" } },
        { thai: "พูดช้าๆหน่อยได้ไหม", phonetic: "phûut chǎa-chǎa nòi dâai mǎi", translations: { [LanguageCode.ENGLISH]: "Please speak slowly", [LanguageCode.FRENCH]: "Parlez lentement, s'il vous plaît", [LanguageCode.PORTUGUESE]: "Fale devagar, por favor", [LanguageCode.MANDARIN]: "請說慢一點" } },
        { thai: "อีกรอบ", phonetic: "ìik rɔ̂ɔp", translations: { [LanguageCode.ENGLISH]: "Again", [LanguageCode.FRENCH]: "Encore", [LanguageCode.PORTUGUESE]: "De novo", [LanguageCode.MANDARIN]: "再一次" } },
        { thai: "ห้องน้ำอยู่ไหน", phonetic: "hɔ̂ŋ-náam yùu năi", translations: { [LanguageCode.ENGLISH]: "Where is the bathroom?", [LanguageCode.FRENCH]: "Où sont les toilettes ?", [LanguageCode.PORTUGUESE]: "Onde fica o banheiro?", [LanguageCode.MANDARIN]: "洗手間在哪裡？" } },
        { thai: "นี่เท่าไหร่", phonetic: "nîi thâo-rài", translations: { [LanguageCode.ENGLISH]: "How much is this?", [LanguageCode.FRENCH]: "C'est combien ?", [LanguageCode.PORTUGUESE]: "Quanto custa isto?", [LanguageCode.MANDARIN]: "這個多少錢？" } },
        { thai: "อันนี้", phonetic: "an níi", translations: { [LanguageCode.ENGLISH]: "This", [LanguageCode.FRENCH]: "Ceci", [LanguageCode.PORTUGUESE]: "Isto", [LanguageCode.MANDARIN]: "這個" } },
        { thai: "อันนั้น", phonetic: "an nán", translations: { [LanguageCode.ENGLISH]: "That", [LanguageCode.FRENCH]: "Cela", [LanguageCode.PORTUGUESE]: "Aquilo", [LanguageCode.MANDARIN]: "那個" } },
        { thai: "ช่วยด้วย", phonetic: "chûai dûai", translations: { [LanguageCode.ENGLISH]: "Help!", [LanguageCode.FRENCH]: "À l'aide !", [LanguageCode.PORTUGUESE]: "Socorro!", [LanguageCode.MANDARIN]: "救命！" } },
        { thai: "ได้ไหม", phonetic: "dâai mǎi", translations: { [LanguageCode.ENGLISH]: "Can (I/you)?", [LanguageCode.FRENCH]: "Est-ce que je/tu peux ?", [LanguageCode.PORTUGUESE]: "Pode?", [LanguageCode.MANDARIN]: "可以嗎？" } },
        { thai: "หน่อย", phonetic: "nòi", translations: { [LanguageCode.ENGLISH]: "(A little) please", [LanguageCode.FRENCH]: "(Un peu) s'il te/vous plaît", [LanguageCode.PORTUGUESE]: "(Um pouco) por favor", [LanguageCode.MANDARIN]: "稍微一下，請" } },
        { thai: "บราซิล", phonetic: "braa-sin", translations: { [LanguageCode.ENGLISH]: "Brazil", [LanguageCode.FRENCH]: "Brésil", [LanguageCode.PORTUGUESE]: "Brasil", [LanguageCode.MANDARIN]: "巴西" } },
        { thai: "อเมริกา", phonetic: "à-mee-rí-gaa", translations: { [LanguageCode.ENGLISH]: "America", [LanguageCode.FRENCH]: "Amérique", [LanguageCode.PORTUGUESE]: "América", [LanguageCode.MANDARIN]: "美國" } },
        { thai: "ฝรั่งเศส", phonetic: "fà-ràng-sèet", translations: { [LanguageCode.ENGLISH]: "France", [LanguageCode.FRENCH]: "France", [LanguageCode.PORTUGUESE]: "França", [LanguageCode.MANDARIN]: "法國" } },
        { thai: "ประเทศไทย", phonetic: "bprà-thêet-thai", translations: { [LanguageCode.ENGLISH]: "Thailand", [LanguageCode.FRENCH]: "Thaïlande", [LanguageCode.PORTUGUESE]: "Tailândia", [LanguageCode.MANDARIN]: "泰國" } },
        { thai: "ไทย", phonetic: "thai", translations: { [LanguageCode.ENGLISH]: "Thai", [LanguageCode.FRENCH]: "Thaïlandais(e)", [LanguageCode.PORTUGUESE]: "Tailandês(a)", [LanguageCode.MANDARIN]: "泰國的" } },
    ],
    worksheet: [
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the Thai phrase to the correct situation.",
                [LanguageCode.FRENCH]: "Associez la phrase thaïlandaise à la bonne situation.",
                [LanguageCode.PORTUGUESE]: "Combine a frase em tailandês com a situação correta.",
                [LanguageCode.MANDARIN]: "將泰語短語與正確的情境進行配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "When you receive a gift:", [LanguageCode.FRENCH]: "Quand vous recevez un cadeau :", [LanguageCode.PORTUGUESE]: "Quando você recebe um presente:", [LanguageCode.MANDARIN]: "當你收到禮物時：" }, answer: { [LanguageCode.ENGLISH]: "ขอบคุณ", [LanguageCode.FRENCH]: "ขอบคุณ", [LanguageCode.PORTUGUESE]: "ขอบคุณ", [LanguageCode.MANDARIN]: "ขอบคุณ" } },
                { prompt: { [LanguageCode.ENGLISH]: "When you greet someone:", [LanguageCode.FRENCH]: "Quand vous saluez quelqu'un :", [LanguageCode.PORTUGUESE]: "Quando você cumprimenta alguém:", [LanguageCode.MANDARIN]: "當你問候別人時：" }, answer: { [LanguageCode.ENGLISH]: "สวัสดี", [LanguageCode.FRENCH]: "สวัสดี", [LanguageCode.PORTUGUESE]: "สวัสดี", [LanguageCode.MANDARIN]: "สวัสดี" } },
                { prompt: { [LanguageCode.ENGLISH]: "When you bump into someone:", [LanguageCode.FRENCH]: "Quand vous bousculez quelqu'un :", [LanguageCode.PORTUGUESE]: "Quando você esbarra em alguém:", [LanguageCode.MANDARIN]: "當你撞到人時：" }, answer: { [LanguageCode.ENGLISH]: "ขอโทษ", [LanguageCode.FRENCH]: "ขอโทษ", [LanguageCode.PORTUGUESE]: "ขอโทษ", [LanguageCode.MANDARIN]: "ขอโทษ" } },
                { prompt: { [LanguageCode.ENGLISH]: "When someone thanks you:", [LanguageCode.FRENCH]: "Quand quelqu'un vous remercie :", [LanguageCode.PORTUGUESE]: "Quando alguém te agradece:", [LanguageCode.MANDARIN]: "當有人感謝你時：" }, answer: { [LanguageCode.ENGLISH]: "ไม่เป็นไร", [LanguageCode.FRENCH]: "ไม่เป็นไร", [LanguageCode.PORTUGUESE]: "ไม่เป็นไร", [LanguageCode.MANDARIN]: "ไม่เป็นไร" } },
                { prompt: { [LanguageCode.ENGLISH]: "You want slower speech:", [LanguageCode.FRENCH]: "Vous voulez qu'on parle plus lentement :", [LanguageCode.PORTUGUESE]: "Você quer que falem mais devagar:", [LanguageCode.MANDARIN]: "你想對方說慢一點：" }, answer: { [LanguageCode.ENGLISH]: "พูดช้าๆหน่อยได้ไหม", [LanguageCode.FRENCH]: "พูดช้าๆหน่อยได้ไหม", [LanguageCode.PORTUGUESE]: "พูดช้าๆหน่อยได้ไหม", [LanguageCode.MANDARIN]: "พูดช้าๆหน่อยได้ไหม" } },
                { prompt: { [LanguageCode.ENGLISH]: "You will see them later:", [LanguageCode.FRENCH]: "Vous les reverrez plus tard :", [LanguageCode.PORTUGUESE]: "Você os verá mais tarde:", [LanguageCode.MANDARIN]: "你稍後會見到他們：" }, answer: { [LanguageCode.ENGLISH]: "เจอกัน", [LanguageCode.FRENCH]: "เจอกัน", [LanguageCode.PORTUGUESE]: "เจอกัน", [LanguageCode.MANDARIN]: "เจอกัน" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Drag the words to form the correct sentence.",
                [LanguageCode.FRENCH]: "Faites glisser les mots pour former la phrase correcte.",
                [LanguageCode.PORTUGUESE]: "Arraste as palavras para formar a frase correta.",
                [LanguageCode.MANDARIN]: "拖曳單詞以組成正確的句子。",
            },
            sentences: [
                { correctOrder: ["ห้องน้ำ", "อยู่", "ไหน"], hint: { [LanguageCode.ENGLISH]: "Where is the bathroom?", [LanguageCode.FRENCH]: "Où sont les toilettes ?", [LanguageCode.PORTUGUESE]: "Onde fica o banheiro?", [LanguageCode.MANDARIN]: "洗手間在哪裡？" } },
                { correctOrder: ["พูด", "ช้าๆ", "หน่อย", "ได้ไหม"], hint: { [LanguageCode.ENGLISH]: "Please speak slowly.", [LanguageCode.FRENCH]: "Parlez lentement, s'il vous plaît.", [LanguageCode.PORTUGUESE]: "Fale devagar, por favor.", [LanguageCode.MANDARIN]: "請說慢一點。" } },
                { correctOrder: ["ยินดี", "ที่ได้", "รู้จัก"], hint: { [LanguageCode.ENGLISH]: "Nice to meet you.", [LanguageCode.FRENCH]: "Ravi de te rencontrer.", [LanguageCode.PORTUGUESE]: "Prazer em conhecer.", [LanguageCode.MANDARIN]: "很高興認識你。" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the meaning to the Thai word.",
                [LanguageCode.FRENCH]: "Associez le sens au mot thaï.",
                [LanguageCode.PORTUGUESE]: "Relacione o significado à palavra tailandesa.",
                [LanguageCode.MANDARIN]: "將意思與泰語單詞配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Help!", [LanguageCode.FRENCH]: "À l'aide !", [LanguageCode.PORTUGUESE]: "Socorro!", [LanguageCode.MANDARIN]: "救命！" }, answer: { [LanguageCode.ENGLISH]: "ช่วยด้วย", [LanguageCode.FRENCH]: "ช่วยด้วย", [LanguageCode.PORTUGUESE]: "ช่วยด้วย", [LanguageCode.MANDARIN]: "ช่วยด้วย" } },
                { prompt: { [LanguageCode.ENGLISH]: "How much is this?", [LanguageCode.FRENCH]: "C'est combien ?", [LanguageCode.PORTUGUESE]: "Quanto custa isto?", [LanguageCode.MANDARIN]: "這個多少錢？" }, answer: { [LanguageCode.ENGLISH]: "นี่เท่าไหร่", [LanguageCode.FRENCH]: "นี่เท่าไหร่", [LanguageCode.PORTUGUESE]: "นี่เท่าไหร่", [LanguageCode.MANDARIN]: "นี่เท่าไหร่" } },
                { prompt: { [LanguageCode.ENGLISH]: "Where is the bathroom?", [LanguageCode.FRENCH]: "Où sont les toilettes ?", [LanguageCode.PORTUGUESE]: "Onde fica o banheiro?", [LanguageCode.MANDARIN]: "洗手間在哪裡？" }, answer: { [LanguageCode.ENGLISH]: "ห้องน้ำอยู่ไหน", [LanguageCode.FRENCH]: "ห้องน้ำอยู่ไหน", [LanguageCode.PORTUGUESE]: "ห้องน้ำอยู่ไหน", [LanguageCode.MANDARIN]: "ห้องน้ำอยู่ไหน" } },
                { prompt: { [LanguageCode.ENGLISH]: "Nice to meet you", [LanguageCode.FRENCH]: "Ravi de te rencontrer", [LanguageCode.PORTUGUESE]: "Prazer em conhecer", [LanguageCode.MANDARIN]: "很高興認識你" }, answer: { [LanguageCode.ENGLISH]: "ยินดีที่ได้รู้จัก", [LanguageCode.FRENCH]: "ยินดีที่ได้รู้จัก", [LanguageCode.PORTUGUESE]: "ยินดีที่ได้รู้จัก", [LanguageCode.MANDARIN]: "ยินดีที่ได้รู้จัก" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the concept to the Thai word.",
                [LanguageCode.FRENCH]: "Associez le concept au mot thaïlandais.",
                [LanguageCode.PORTUGUESE]: "Combine o conceito com a palavra tailandesa.",
                [LanguageCode.MANDARIN]: "將概念與泰語單詞配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Yes (Correct)", [LanguageCode.FRENCH]: "Oui (Correct)", [LanguageCode.PORTUGUESE]: "Sim (Correto)", [LanguageCode.MANDARIN]: "是的（正確）" }, answer: { [LanguageCode.ENGLISH]: "ใช่", [LanguageCode.FRENCH]: "ใช่", [LanguageCode.PORTUGUESE]: "ใช่", [LanguageCode.MANDARIN]: "ใช่" } },
                { prompt: { [LanguageCode.ENGLISH]: "No (Not correct)", [LanguageCode.FRENCH]: "Non (Incorrect)", [LanguageCode.PORTUGUESE]: "Não (Incorreto)", [LanguageCode.MANDARIN]: "不（不正確）" }, answer: { [LanguageCode.ENGLISH]: "ไม่ใช่", [LanguageCode.FRENCH]: "ไม่ใช่", [LanguageCode.PORTUGUESE]: "ไม่ใช่", [LanguageCode.MANDARIN]: "ไม่ใช่" } },
                { prompt: { [LanguageCode.ENGLISH]: "I understand", [LanguageCode.FRENCH]: "Je comprends", [LanguageCode.PORTUGUESE]: "Eu entendo", [LanguageCode.MANDARIN]: "我明白" }, answer: { [LanguageCode.ENGLISH]: "เข้าใจ", [LanguageCode.FRENCH]: "เข้าใจ", [LanguageCode.PORTUGUESE]: "เข้าใจ", [LanguageCode.MANDARIN]: "เข้าใจ" } },
                { prompt: { [LanguageCode.ENGLISH]: "I don't understand", [LanguageCode.FRENCH]: "Je ne comprends pas", [LanguageCode.PORTUGUESE]: "Eu não entendo", [LanguageCode.MANDARIN]: "我不明白" }, answer: { [LanguageCode.ENGLISH]: "ไม่เข้าใจ", [LanguageCode.FRENCH]: "ไม่เข้าใจ", [LanguageCode.PORTUGUESE]: "ไม่เข้าใจ", [LanguageCode.MANDARIN]: "不明白" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the sentences with ครับ (khráp) for male speakers or ค่ะ (khâ) for female speakers.",
                [LanguageCode.FRENCH]: "Complétez les phrases avec ครับ (khráp) pour les locuteurs masculins ou ค่ะ (khâ) pour les locutrices.",
                [LanguageCode.PORTUGUESE]: "Complete as frases com ครับ (khráp) para homens ou ค่ะ (khâ) para mulheres.",
                [LanguageCode.MANDARIN]: "用 ครับ (khráp)（男性）或 ค่ะ (khâ)（女性）完成句子。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "สวัสดี___", [LanguageCode.FRENCH]: "สวัสดี___", [LanguageCode.PORTUGUESE]: "สวัสดี___", [LanguageCode.MANDARIN]: "สวัสดี___" }, correctAnswer: "ครับ/ค่ะ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ขอบคุณ___", [LanguageCode.FRENCH]: "ขอบคุณ___", [LanguageCode.PORTUGUESE]: "ขอบคุณ___", [LanguageCode.MANDARIN]: "ขอบคุณ___" }, correctAnswer: "ครับ/ค่ะ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "ขอโทษ___", [LanguageCode.FRENCH]: "ขอโทษ___", [LanguageCode.PORTUGUESE]: "ขอโทษ___", [LanguageCode.MANDARIN]: "ขอโทษ___" }, correctAnswer: "ครับ/ค่ะ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the blank with the correct Thai word from the vocabulary list.",
                [LanguageCode.FRENCH]: "Remplissez le vide avec le mot thaïlandais correct de la liste de vocabulaire.",
                [LanguageCode.PORTUGUESE]: "Preencha o espaço em branco com a palavra tailandesa correta da lista de vocabulário.",
                [LanguageCode.MANDARIN]: "用詞彙表中的正確泰語單詞填空。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "If you don't hear what someone said, you can say ", [LanguageCode.FRENCH]: "Si vous n'entendez pas ce que quelqu'un a dit, vous pouvez dire ", [LanguageCode.PORTUGUESE]: "Se você não ouviu o que alguém disse, você pode dizer ", [LanguageCode.MANDARIN]: "如果你沒聽到別人說什麼，你可以說 " }, correctAnswer: "ขอโทษ", end: { [LanguageCode.ENGLISH]: ".", [LanguageCode.FRENCH]: ".", [LanguageCode.PORTUGUESE]: ".", [LanguageCode.MANDARIN]: "。" } },
                { start: { [LanguageCode.ENGLISH]: "A: Is this correct? B: ", [LanguageCode.FRENCH]: "A: Est-ce correct ? B: ", [LanguageCode.PORTUGUESE]: "A: Isso está correto? B: ", [LanguageCode.MANDARIN]: "A: 這個對嗎？ B: " }, correctAnswer: "ใช่", end: { [LanguageCode.ENGLISH]: ", it is correct.", [LanguageCode.FRENCH]: ", c'est correct.", [LanguageCode.PORTUGUESE]: ", está correto.", [LanguageCode.MANDARIN]: "，是對的。" } },
                { start: { [LanguageCode.ENGLISH]: "To ask the price, say ", [LanguageCode.FRENCH]: "Pour demander le prix, dites ", [LanguageCode.PORTUGUESE]: "Para perguntar o preço, diga ", [LanguageCode.MANDARIN]: "要問價格，說 " }, correctAnswer: "นี่เท่าไหร่", end: { [LanguageCode.ENGLISH]: "?", [LanguageCode.FRENCH]: " ?", [LanguageCode.PORTUGUESE]: "?", [LanguageCode.MANDARIN]: "？" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct answer.",
                [LanguageCode.FRENCH]: "Choisissez la bonne réponse.",
                [LanguageCode.PORTUGUESE]: "Escolha a resposta correta.",
                [LanguageCode.MANDARIN]: "選擇正確答案。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "Which word is the polite particle used by female speakers?", [LanguageCode.FRENCH]: "Quel mot est la particule de politesse utilisée par les locutrices ?", [LanguageCode.PORTUGUESE]: "Qual palavra é a partícula de polidez usada por falantes do sexo feminino?", [LanguageCode.MANDARIN]: "哪個詞是女性使用的禮貌語氣詞？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ครับ (khráp)", [LanguageCode.FRENCH]: "ครับ (khráp)", [LanguageCode.PORTUGUESE]: "ครับ (khráp)", [LanguageCode.MANDARIN]: "ครับ (khráp)" },
                        { [LanguageCode.ENGLISH]: "ค่ะ (khâ)", [LanguageCode.FRENCH]: "ค่ะ (khâ)", [LanguageCode.PORTUGUESE]: "ค่ะ (khâ)", [LanguageCode.MANDARIN]: "ค่ะ (khâ)" },
                        { [LanguageCode.ENGLISH]: "จ้ะ (jà)", [LanguageCode.FRENCH]: "จ้ะ (jà)", [LanguageCode.PORTUGUESE]: "จ้ะ (jà)", [LanguageCode.MANDARIN]: "จ้ะ (jà)" },
                    ],
                    correctIndex: 1
                },
                 {
                    question: { [LanguageCode.ENGLISH]: "What does 'ไม่เป็นไร' (mâi bpen rai) mean?", [LanguageCode.FRENCH]: "Que signifie 'ไม่เป็นไร' (mâi bpen rai) ?", [LanguageCode.PORTUGUESE]: "O que significa 'ไม่เป็นไร' (mâi bpen rai)?", [LanguageCode.MANDARIN]: "「ไม่เป็นไร」(mâi bpen rai) 是什麼意思？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "I don't understand", [LanguageCode.FRENCH]: "Je ne comprends pas", [LanguageCode.PORTUGUESE]: "Eu não entendo", [LanguageCode.MANDARIN]: "我不明白" },
                        { [LanguageCode.ENGLISH]: "Thank you", [LanguageCode.FRENCH]: "Merci", [LanguageCode.PORTUGUESE]: "Obrigado(a)", [LanguageCode.MANDARIN]: "謝謝" },
                        { [LanguageCode.ENGLISH]: "It's okay / You're welcome", [LanguageCode.FRENCH]: "Ce n'est pas grave / De rien", [LanguageCode.PORTUGUESE]: "Tudo bem / De nada", [LanguageCode.MANDARIN]: "沒關係 / 不客氣" },
                    ],
                    correctIndex: 2
                }
            ]
        },
         {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the best phrase for the situation.",
                [LanguageCode.FRENCH]: "Choisissez la meilleure phrase pour la situation.",
                [LanguageCode.PORTUGUESE]: "Escolha a melhor frase para a situação.",
                [LanguageCode.MANDARIN]: "為情境選擇最佳短語。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "You are meeting a friend at a cafe.", [LanguageCode.FRENCH]: "Vous rencontrez un ami dans un café.", [LanguageCode.PORTUGUESE]: "Você está encontrando um amigo em um café.", [LanguageCode.MANDARIN]: "你在咖啡館見朋友。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ขอบคุณ", [LanguageCode.FRENCH]: "ขอบคุณ", [LanguageCode.PORTUGUESE]: "ขอบคุณ", [LanguageCode.MANDARIN]: "ขอบคุณ" },
                        { [LanguageCode.ENGLISH]: "สวัสดี", [LanguageCode.FRENCH]: "สวัสดี", [LanguageCode.PORTUGUESE]: "สวัสดี", [LanguageCode.MANDARIN]: "สวัสดี" },
                        { [LanguageCode.ENGLISH]: "ขอโทษ", [LanguageCode.FRENCH]: "ขอโทษ", [LanguageCode.PORTUGUESE]: "ขอโทษ", [LanguageCode.MANDARIN]: "ขอโทษ" },
                    ],
                    correctIndex: 1
                },
                 {
                    question: { [LanguageCode.ENGLISH]: "A teacher explains a concept to you, and you understand it.", [LanguageCode.FRENCH]: "Un enseignant vous explique un concept, et vous le comprenez.", [LanguageCode.PORTUGUESE]: "Um professor lhe explica um conceito, e você o entende.", [LanguageCode.MANDARIN]: "老師向你解釋一個概念，你聽懂了。" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เข้าใจ", [LanguageCode.FRENCH]: "เข้าใจ", [LanguageCode.PORTUGUESE]: "เข้าใจ", [LanguageCode.MANDARIN]: "เข้าใจ" },
                        { [LanguageCode.ENGLISH]: "ไม่เข้าใจ", [LanguageCode.FRENCH]: "ไม่เข้าใจ", [LanguageCode.PORTUGUESE]: "ไม่เข้าใจ", [LanguageCode.MANDARIN]: "ไม่เข้าใจ" },
                        { [LanguageCode.ENGLISH]: "ไม่ใช่", [LanguageCode.FRENCH]: "ไม่ใช่", [LanguageCode.PORTUGUESE]: "ไม่ใช่", [LanguageCode.MANDARIN]: "ไม่ใช่" },
                    ],
                    correctIndex: 0
                }
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Complete the conversation with survival phrases.",
                [LanguageCode.FRENCH]: "Complétez la conversation avec les phrases de survie.",
                [LanguageCode.PORTUGUESE]: "Complete a conversa com frases de sobrevivência.",
                [LanguageCode.MANDARIN]: "用生存用語完成對話。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A: สวัสดีครับ B: ___", [LanguageCode.FRENCH]: "A: Bonjour B: ___", [LanguageCode.PORTUGUESE]: "A: Olá B: ___", [LanguageCode.MANDARIN]: "A: 你好 B: ___" }, correctAnswer: "สวัสดีค่ะ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: ขอบคุณมากครับ B: ___", [LanguageCode.FRENCH]: "A: Merci beaucoup B: ___", [LanguageCode.PORTUGUESE]: "A: Muito obrigado B: ___", [LanguageCode.MANDARIN]: "A: 非常感謝 B: ___" }, correctAnswer: "ไม่เป็นไร", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "A: คุณเข้าใจไหม B: ___", [LanguageCode.FRENCH]: "A: Vous comprenez? B: ___", [LanguageCode.PORTUGUESE]: "A: Você entende? B: ___", [LanguageCode.MANDARIN]: "A: 你明白嗎？ B: ___" }, correctAnswer: "เข้าใจ/ไม่เข้าใจ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Thai Pronouns: Choosing the Right 'I' and 'You'",
                [LanguageCode.FRENCH]: "Pronoms thaïlandais : Choisir le bon 'je' et 'tu'",
                [LanguageCode.PORTUGUESE]: "Pronomes Tailandeses: Escolhendo o 'Eu' e 'Você' Corretos",
                [LanguageCode.MANDARIN]: "泰語代詞：選擇正確的「我」和「你」",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai pronouns change based on formality, gender, and context. Here's what you need to know:\n\n**Saying 'I' (First Person):**\n\n• **ผม (phǒm)** - Male, formal/polite\n  Use in: Professional settings, with strangers, formal situations\n  Example: ผมชื่อจอห์น (I'm John)\n\n• **ดิฉัน (dì-chǎn)** - Female, very formal\n  Use in: Very formal settings, official situations, presentations\n  Note: Many women use ฉัน in most situations\n\n• **ฉัน (chǎn)** - General, neutral\n  Use in: Most everyday situations, can be used by anyone\n  Note: Very common for female speakers\n\n• **เรา (rao)** - Informal 'I'\n  Use in: With close friends, very casual situations\n  Note: Also means 'we' depending on context\n\n**Saying 'You' (Second Person):**\n\n• **คุณ (khun)** - Polite 'you'\n  Use in: Most situations, shows respect\n  Safe default choice when unsure\n\n• **เธอ (thəə)** - Informal 'you'\n  Use in: With close friends, people your age or younger\n  Can also mean 'he/she' when referring to friends\n\n**Saying 'He/She/They' (Third Person):**\n\n• **เขา (khǎo)** - He/She/They\n  Use in: General reference to others\n  Gender-neutral in Thai!\n\n• **เธอ (thəə)** - He/She (informal)\n  Use in: Talking about friends, peers\n\n• **พวกเขา (phûak-khǎo)** - They/Them (plural)\n  Use in: Clearly referring to multiple people\n\n**PRO TIP:** When in doubt, use:\n- ผม (men) or ฉัน (women) for 'I'\n- คุณ for 'you'\n- เขา for 'he/she/they'\n\nThese are safe, polite choices that work in most situations!",
                [LanguageCode.FRENCH]: "Les pronoms thaïlandais changent selon la formalité, le genre et le contexte. Voici ce que vous devez savoir :\n\n**Dire 'Je' (Première Personne) :**\n\n• **ผม (phǒm)** - Masculin, formel/poli\n  Utiliser dans : Contextes professionnels, avec des inconnus, situations formelles\n\n• **ดิฉัน (dì-chǎn)** - Féminin, très formel\n  Utiliser dans : Contextes très formels, situations officielles, présentations\n\n• **ฉัน (chǎn)** - Général, neutre\n  Utiliser dans : La plupart des situations quotidiennes\n\n• **เรา (rao)** - 'Je' informel\n  Utiliser dans : Avec des amis proches, situations très décontractées\n\n**Dire 'Tu/Vous' (Deuxième Personne) :**\n\n• **คุณ (khun)** - 'Vous' poli\n  Utiliser dans : La plupart des situations, montre du respect\n\n• **เธอ (thəə)** - 'Tu' informel\n  Utiliser dans : Avec des amis proches, des personnes de votre âge\n\n**CONSEIL:** En cas de doute, utilisez ผม (hommes) ou ฉัน (femmes) pour 'je' et คุณ pour 'tu/vous'.",
                [LanguageCode.PORTUGUESE]: "Os pronomes tailandeses mudam com base na formalidade, gênero e contexto. Aqui está o que você precisa saber:\n\n**Dizendo 'Eu' (Primeira Pessoa):**\n\n• **ผม (phǒm)** - Masculino, formal/educado\n  Use em: Ambientes profissionais, com estranhos, situações formais\n\n• **ดิฉัน (dì-chǎn)** - Feminino, muito formal\n  Use em: Ambientes muito formais, situações oficiais, apresentações\n\n• **ฉัน (chǎn)** - Geral, neutro\n  Use em: A maioria das situações do dia a dia\n\n• **เรา (rao)** - 'Eu' informal\n  Use em: Com amigos próximos, situações muito casuais\n\n**Dizendo 'Você' (Segunda Pessoa):**\n\n• **คุณ (khun)** - 'Você' educado\n  Use em: A maioria das situações, mostra respeito\n\n• **เธอ (thəə)** - 'Você' informal\n  Use em: Com amigos próximos, pessoas da sua idade\n\n**DICA:** Na dúvida, use ผม (homens) ou ฉัน (mulheres) para 'eu' e คุณ para 'você'.",
                [LanguageCode.MANDARIN]: "泰語代詞根據正式程度、性別和語境而變化。以下是你需要知道的：\n\n**說「我」（第一人稱）：**\n\n• **ผม (phǒm)** - 男性，正式/禮貌\n  用於：專業場合、與陌生人、正式場合\n\n• **ดิฉัน (dì-chǎn)** - 女性，非常正式\n  用於：非常正式的場合、官方場合、演講\n\n• **ฉัน (chǎn)** - 一般，中性\n  用於：大多數日常情況\n\n• **เรา (rao)** - 非正式的「我」\n  用於：與親密朋友，非常隨意的場合\n\n**說「你」（第二人稱）：**\n\n• **คุณ (khun)** - 禮貌的「你」\n  用於：大多數情況，表示尊重\n\n• **เธอ (thəə)** - 非正式的「你」\n  用於：與親密朋友，同齡人或更年輕的人\n\n**提示：**有疑問時，男性用 ผม，女性用 ฉัน 表示「我」，用 คุณ 表示「你」。",
            }
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the pronoun to its usage context.",
                [LanguageCode.FRENCH]: "Associez le pronom à son contexte d'utilisation.",
                [LanguageCode.PORTUGUESE]: "Relacione o pronome ao contexto de uso.",
                [LanguageCode.MANDARIN]: "將代詞與其使用情境配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "Male speaking formally:", [LanguageCode.FRENCH]: "Homme parlant formellement :", [LanguageCode.PORTUGUESE]: "Homem falando formalmente:", [LanguageCode.MANDARIN]: "男性正式說話：" }, answer: { [LanguageCode.ENGLISH]: "ผม", [LanguageCode.FRENCH]: "ผม", [LanguageCode.PORTUGUESE]: "ผม", [LanguageCode.MANDARIN]: "ผม" } },
                { prompt: { [LanguageCode.ENGLISH]: "Polite 'you':", [LanguageCode.FRENCH]: "'Vous' poli :", [LanguageCode.PORTUGUESE]: "'Você' educado:", [LanguageCode.MANDARIN]: "禮貌的「你」：" }, answer: { [LanguageCode.ENGLISH]: "คุณ", [LanguageCode.FRENCH]: "คุณ", [LanguageCode.PORTUGUESE]: "คุณ", [LanguageCode.MANDARIN]: "คุณ" } },
                { prompt: { [LanguageCode.ENGLISH]: "Talking about someone else:", [LanguageCode.FRENCH]: "Parler de quelqu'un d'autre :", [LanguageCode.PORTUGUESE]: "Falando sobre outra pessoa:", [LanguageCode.MANDARIN]: "談論別人：" }, answer: { [LanguageCode.ENGLISH]: "เขา", [LanguageCode.FRENCH]: "เขา", [LanguageCode.PORTUGUESE]: "เขา", [LanguageCode.MANDARIN]: "เขา" } },
                { prompt: { [LanguageCode.ENGLISH]: "Informal 'I' with friends:", [LanguageCode.FRENCH]: "'Je' informel avec des amis :", [LanguageCode.PORTUGUESE]: "'Eu' informal com amigos:", [LanguageCode.MANDARIN]: "與朋友非正式說「我」：" }, answer: { [LanguageCode.ENGLISH]: "เรา", [LanguageCode.FRENCH]: "เรา", [LanguageCode.PORTUGUESE]: "เรา", [LanguageCode.MANDARIN]: "เรา" } },
            ]
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the correct pronoun for each situation.",
                [LanguageCode.FRENCH]: "Choisissez le bon pronom pour chaque situation.",
                [LanguageCode.PORTUGUESE]: "Escolha o pronome correto para cada situação.",
                [LanguageCode.MANDARIN]: "為每種情況選擇正確的代詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "___ชื่อจอห์น (Formal introduction, male)", [LanguageCode.FRENCH]: "___ชื่อจอห์น (Présentation formelle, homme)", [LanguageCode.PORTUGUESE]: "___ชื่อจอห์น (Apresentação formal, homem)", [LanguageCode.MANDARIN]: "___ชื่อจอห์น（正式介紹，男性）" }, correctAnswer: "ผม", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___สบายดีไหม (Polite: How are you?)", [LanguageCode.FRENCH]: "___สบายดีไหม (Poli : Comment allez-vous ?)", [LanguageCode.PORTUGUESE]: "___สบายดีไหม (Educado: Como vai?)", [LanguageCode.MANDARIN]: "___สบายดีไหม（禮貌：你好嗎？）" }, correctAnswer: "คุณ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ไปทำงาน (He/She goes to work)", [LanguageCode.FRENCH]: "___ไปทำงาน (Il/Elle va au travail)", [LanguageCode.PORTUGUESE]: "___ไปทำงาน (Ele/Ela vai trabalhar)", [LanguageCode.MANDARIN]: "___ไปทำงาน（他/她去上班）" }, correctAnswer: "เขา", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___เป็นนักเรียน (General: I am a student)", [LanguageCode.FRENCH]: "___เป็นนักเรียน (Général : Je suis étudiant)", [LanguageCode.PORTUGUESE]: "___เป็นนักเรียน (Geral: Eu sou estudante)", [LanguageCode.MANDARIN]: "___เป็นนักเรียน（一般：我是學生）" }, correctAnswer: "ฉัน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the most appropriate pronoun for the situation.",
                [LanguageCode.FRENCH]: "Choisissez le pronom le plus approprié pour la situation.",
                [LanguageCode.PORTUGUESE]: "Escolha o pronome mais apropriado para a situação.",
                [LanguageCode.MANDARIN]: "為情境選擇最合適的代詞。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "A male tourist introducing himself to a hotel receptionist should use:", [LanguageCode.FRENCH]: "Un touriste masculin se présentant à un réceptionniste d'hôtel devrait utiliser :", [LanguageCode.PORTUGUESE]: "Um turista homem se apresentando a um recepcionista de hotel deve usar:", [LanguageCode.MANDARIN]: "一位男遊客向酒店接待員介紹自己應該使用：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ฉัน", [LanguageCode.FRENCH]: "ฉัน", [LanguageCode.PORTUGUESE]: "ฉัน", [LanguageCode.MANDARIN]: "ฉัน" },
                        { [LanguageCode.ENGLISH]: "ผม", [LanguageCode.FRENCH]: "ผม", [LanguageCode.PORTUGUESE]: "ผม", [LanguageCode.MANDARIN]: "ผม" },
                        { [LanguageCode.ENGLISH]: "เรา", [LanguageCode.FRENCH]: "เรา", [LanguageCode.PORTUGUESE]: "เรา", [LanguageCode.MANDARIN]: "เรา" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "When talking to a Thai friend about their sibling, use:", [LanguageCode.FRENCH]: "Quand vous parlez à un ami thaïlandais de son frère/sa sœur, utilisez :", [LanguageCode.PORTUGUESE]: "Ao falar com um amigo tailandês sobre o irmão/irmã dele(a), use:", [LanguageCode.MANDARIN]: "與泰國朋友談論他們的兄弟姐妹時，使用：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "คุณ", [LanguageCode.FRENCH]: "คุณ", [LanguageCode.PORTUGUESE]: "คุณ", [LanguageCode.MANDARIN]: "คุณ" },
                        { [LanguageCode.ENGLISH]: "เขา", [LanguageCode.FRENCH]: "เขา", [LanguageCode.PORTUGUESE]: "เขา", [LanguageCode.MANDARIN]: "เขา" },
                        { [LanguageCode.ENGLISH]: "ผม", [LanguageCode.FRENCH]: "ผม", [LanguageCode.PORTUGUESE]: "ผม", [LanguageCode.MANDARIN]: "ผม" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "The safest, most polite word for 'you' in most situations is:", [LanguageCode.FRENCH]: "Le mot le plus sûr et le plus poli pour 'vous' dans la plupart des situations est :", [LanguageCode.PORTUGUESE]: "A palavra mais segura e educada para 'você' na maioria das situações é:", [LanguageCode.MANDARIN]: "在大多數情況下，最安全、最禮貌的「你」是：" },
                    options: [
                        { [LanguageCode.ENGLISH]: "เธอ", [LanguageCode.FRENCH]: "เธอ", [LanguageCode.PORTUGUESE]: "เธอ", [LanguageCode.MANDARIN]: "เธอ" },
                        { [LanguageCode.ENGLISH]: "คุณ", [LanguageCode.FRENCH]: "คุณ", [LanguageCode.PORTUGUESE]: "คุณ", [LanguageCode.MANDARIN]: "คุณ" },
                        { [LanguageCode.ENGLISH]: "เรา", [LanguageCode.FRENCH]: "เรา", [LanguageCode.PORTUGUESE]: "เรา", [LanguageCode.MANDARIN]: "เรา" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "The 'Wai' (ไหว้)",
                [LanguageCode.FRENCH]: "Le 'Wai' (ไหว้)",
                [LanguageCode.PORTUGUESE]: "O 'Wai' (ไหว้)",
                [LanguageCode.MANDARIN]: "合十禮 (ไหว้)",
            },
            content: {
                [LanguageCode.ENGLISH]: "Thai greeting: wai (wâi, ไหว้)\n- Put your palms together at chest level.\n- Say 'sà-wàt-dii'. Smile softly.\n- For peers: thumbs near chin. For elders/monks: thumbs higher (near nose/forehead) with a deeper bow.\n- If someone wais to you, wai back.",
                [LanguageCode.FRENCH]: "Le 'wai' est une salutation traditionnelle thaïlandaise où vous pressez vos paumes l'une contre l'autre comme pour une prière. Il est utilisé pour dire 'bonjour', 'au revoir', 'merci' et 'désolé'. La hauteur de vos mains et la profondeur de votre inclinaison montrent le niveau de respect. En saluant les moines ou les aînés, vos pouces doivent toucher votre nez. Pour les pairs, ils doivent toucher votre menton.",
                [LanguageCode.PORTUGUESE]: "O 'wai' é uma saudação tradicional tailandesa onde você pressiona as palmas das mãos juntas como em uma oração. É usado para dizer 'olá', 'adeus', 'obrigado' e 'desculpe'. A altura de suas mãos e a profundidade de sua inclinação mostram o nível de respeito. Ao cumprimentar monges ou idosos, seus polegares devem tocar seu nariz. Para colegas, eles devem tocar seu queixo.",
                [LanguageCode.MANDARIN]: "「Wai」是泰國傳統的問候方式，將手掌合十呈祈禱狀。它用於說「你好」、「再見」、「謝謝」和「對不起」。手的高度和鞠躬的深度表示尊敬的程度。問候僧侶或長者時，拇指應觸及鼻子。對於同輩，則應觸及下巴。",
            }
        },
    ],
    listeningSpeaking: {
        conversation: [
            { speaker: "Male", line: { [LanguageCode.ENGLISH]: "Hello!", [LanguageCode.FRENCH]: "Bonjour !", [LanguageCode.PORTUGUESE]: "Olá!", [LanguageCode.MANDARIN]: "你好！" } },
            { speaker: "Female", line: { [LanguageCode.ENGLISH]: "Hello!", [LanguageCode.FRENCH]: "Bonjour !", [LanguageCode.PORTUGUESE]: "Olá!", [LanguageCode.MANDARIN]: "你好！" } }
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
                    question: { [LanguageCode.ENGLISH]: "How many people were in the conversation?", [LanguageCode.FRENCH]: "Combien de personnes participaient à la conversation ?", [LanguageCode.PORTUGUESE]: "Quantas pessoas estavam na conversa?", [LanguageCode.MANDARIN]: "對話中有多少人？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "One", [LanguageCode.FRENCH]: "Une", [LanguageCode.PORTUGUESE]: "Uma", [LanguageCode.MANDARIN]: "一" },
                        { [LanguageCode.ENGLISH]: "Two", [LanguageCode.FRENCH]: "Deux", [LanguageCode.PORTUGUESE]: "Duas", [LanguageCode.MANDARIN]: "二" },
                        { [LanguageCode.ENGLISH]: "Three", [LanguageCode.FRENCH]: "Trois", [LanguageCode.PORTUGUESE]: "Três", [LanguageCode.MANDARIN]: "三" },
                    ],
                    correctIndex: 1
                }
            ]
        },
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "สวัสดีครับ",
            [LanguageCode.FRENCH]: "สวัสดีครับ",
            [LanguageCode.PORTUGUESE]: "สวัสดีครับ",
            [LanguageCode.MANDARIN]: "สวัสดีครับ",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "sà-wàt-dii khráp",
            [LanguageCode.FRENCH]: "sà-wàt-dii khráp",
            [LanguageCode.PORTUGUESE]: "sà-wàt-dii khráp",
            [LanguageCode.MANDARIN]: "sà-wàt-dii khráp",
        },
        speakingType: 'read'
    }
};