import { Lesson, LanguageCode, ExerciseType } from '../../../types';

export const lesson_1_20: Lesson = {
    id: "1.20",
    title: {
        [LanguageCode.ENGLISH]: "Review & Real Conversations",
        [LanguageCode.FRENCH]: "Révision et vraies conversations",
        [LanguageCode.PORTUGUESE]: "Revisão e Conversas Reais",
        [LanguageCode.MANDARIN]: "複習與真實對話",
    },
    vocabulary: [
        // Commonly missed/confused words from earlier lessons
        { thai: "แล้ว", phonetic: "lɛ́ɛo", translations: { [LanguageCode.ENGLISH]: "already/then", [LanguageCode.FRENCH]: "déjà/alors", [LanguageCode.PORTUGUESE]: "já/então", [LanguageCode.MANDARIN]: "已經/然後" } },
        { thai: "เหมือนกัน", phonetic: "mʉ̌an gan", translations: { [LanguageCode.ENGLISH]: "same/also/too", [LanguageCode.FRENCH]: "pareil/aussi", [LanguageCode.PORTUGUESE]: "igual/também", [LanguageCode.MANDARIN]: "一樣/也" } },
        { thai: "หรือเปล่า", phonetic: "rʉ̌ʉ bplào", translations: { [LanguageCode.ENGLISH]: "or not? (question particle)", [LanguageCode.FRENCH]: "ou pas ? (particule interrogative)", [LanguageCode.PORTUGUESE]: "ou não? (partícula de pergunta)", [LanguageCode.MANDARIN]: "還是不？（疑問詞）" } },
        { thai: "หรือ", phonetic: "rʉ̌ʉ", translations: { [LanguageCode.ENGLISH]: "or", [LanguageCode.FRENCH]: "ou", [LanguageCode.PORTUGUESE]: "ou", [LanguageCode.MANDARIN]: "或者" } },
        { thai: "เลย", phonetic: "lə̄əi", translations: { [LanguageCode.ENGLISH]: "at all (emphasis)", [LanguageCode.FRENCH]: "du tout (emphase)", [LanguageCode.PORTUGUESE]: "absolutamente (ênfase)", [LanguageCode.MANDARIN]: "根本（強調）" } },
        { thai: "จัง", phonetic: "jing", translations: { [LanguageCode.ENGLISH]: "very/so (colloquial emphasis)", [LanguageCode.FRENCH]: "très/tellement (emphase familière)", [LanguageCode.PORTUGUESE]: "muito (ênfase coloquial)", [LanguageCode.MANDARIN]: "真的（口語強調）" } },
        { thai: "ด้วย", phonetic: "dûai", translations: { [LanguageCode.ENGLISH]: "also/too/with", [LanguageCode.FRENCH]: "aussi/avec", [LanguageCode.PORTUGUESE]: "também/com", [LanguageCode.MANDARIN]: "也/與" } },
        
        // Casual conversation slangs
        { thai: "เออ", phonetic: "əə", translations: { [LanguageCode.ENGLISH]: "yeah/uh-huh (informal yes)", [LanguageCode.FRENCH]: "ouais (oui informel)", [LanguageCode.PORTUGUESE]: "é/aham (sim informal)", [LanguageCode.MANDARIN]: "嗯（非正式的是）" } },
        { thai: "อืม", phonetic: "ʉʉm", translations: { [LanguageCode.ENGLISH]: "hmm/um", [LanguageCode.FRENCH]: "euh/hum", [LanguageCode.PORTUGUESE]: "hum", [LanguageCode.MANDARIN]: "嗯" } },
        { thai: "อ่า", phonetic: "àa", translations: { [LanguageCode.ENGLISH]: "oh/ah (realization)", [LanguageCode.FRENCH]: "ah (réalisation)", [LanguageCode.PORTUGUESE]: "ah (percepção)", [LanguageCode.MANDARIN]: "啊（恍然大悟）" } },
        { thai: "เหรอ", phonetic: "rə̌ə", translations: { [LanguageCode.ENGLISH]: "really?/is that so? (informal)", [LanguageCode.FRENCH]: "vraiment ? (informel)", [LanguageCode.PORTUGUESE]: "sério? (informal)", [LanguageCode.MANDARIN]: "真的嗎？（非正式）" } },
        { thai: "จริงเหรอ", phonetic: "jing rə̌ə", translations: { [LanguageCode.ENGLISH]: "really? (for real?)", [LanguageCode.FRENCH]: "vraiment ? (pour de vrai ?)", [LanguageCode.PORTUGUESE]: "sério mesmo?", [LanguageCode.MANDARIN]: "真的嗎？" } },
        { thai: "จิงๆ", phonetic: "jing jing", translations: { [LanguageCode.ENGLISH]: "really/truly (emphasis)", [LanguageCode.FRENCH]: "vraiment (emphase)", [LanguageCode.PORTUGUESE]: "realmente (ênfase)", [LanguageCode.MANDARIN]: "真的（強調）" } },
        { thai: "อะไรนะ", phonetic: "à-rai ná", translations: { [LanguageCode.ENGLISH]: "what? (didn't catch that)", [LanguageCode.FRENCH]: "quoi ? (je n'ai pas compris)", [LanguageCode.PORTUGUESE]: "o quê? (não entendi)", [LanguageCode.MANDARIN]: "什麼？（沒聽清楚）" } },
        { thai: "ก็", phonetic: "gɔ̂ɔ", translations: { [LanguageCode.ENGLISH]: "well/then/also (filler, 'lok gɔ̂ɔ')", [LanguageCode.FRENCH]: "alors/aussi (remplissage)", [LanguageCode.PORTUGUESE]: "então/também (preenchimento)", [LanguageCode.MANDARIN]: "那麼/也（填充詞）" } },
        
        // End particles (softeners)
        { thai: "นะ", phonetic: "ná", translations: { [LanguageCode.ENGLISH]: "ok?/you know (softener particle)", [LanguageCode.FRENCH]: "d'accord ? (particule adoucisseur)", [LanguageCode.PORTUGUESE]: "tá? (partícula suavizador)", [LanguageCode.MANDARIN]: "哦（語氣助詞）" } },
        { thai: "อ่ะ", phonetic: "à", translations: { [LanguageCode.ENGLISH]: "ok/yeah (casual end particle)", [LanguageCode.FRENCH]: "ok/ouais (particule finale décontractée)", [LanguageCode.PORTUGUESE]: "ok/é (partícula final casual)", [LanguageCode.MANDARIN]: "好（隨意尾助詞）" } },
        { thai: "ว่ะ", phonetic: "wâ", translations: { [LanguageCode.ENGLISH]: "particle for commands/emphasis (informal)", [LanguageCode.FRENCH]: "particule pour ordres/emphase (informel)", [LanguageCode.PORTUGUESE]: "partícula para comandos/ênfase (informal)", [LanguageCode.MANDARIN]: "命令/強調助詞（非正式）" } },
        { thai: "นะครับ", phonetic: "ná khráp", translations: { [LanguageCode.ENGLISH]: "ok? (male, polite)", [LanguageCode.FRENCH]: "d'accord ? (masculin, poli)", [LanguageCode.PORTUGUESE]: "tá? (masculino, educado)", [LanguageCode.MANDARIN]: "好嗎？（男性，禮貌）" } },
        { thai: "นะคะ", phonetic: "ná khá", translations: { [LanguageCode.ENGLISH]: "ok? (female, polite)", [LanguageCode.FRENCH]: "d'accord ? (féminin, poli)", [LanguageCode.PORTUGUESE]: "tá? (feminino, educado)", [LanguageCode.MANDARIN]: "好嗎？（女性，禮貌）" } },
        { thai: "ซิ", phonetic: "sí", translations: { [LanguageCode.ENGLISH]: "go ahead/just (encouragement)", [LanguageCode.FRENCH]: "vas-y (encouragement)", [LanguageCode.PORTUGUESE]: "vai (encorajamento)", [LanguageCode.MANDARIN]: "吧（鼓勵）" } },
        { thai: "สิ", phonetic: "sì", translations: { [LanguageCode.ENGLISH]: "(emphasis particle)", [LanguageCode.FRENCH]: "(particule d'emphase)", [LanguageCode.PORTUGUESE]: "(partícula de ênfase)", [LanguageCode.MANDARIN]: "（強調助詞）" } },
        
        // More conversation fillers
        { thai: "คือ", phonetic: "khʉʉ", translations: { [LanguageCode.ENGLISH]: "like/I mean (filler)", [LanguageCode.FRENCH]: "genre/je veux dire", [LanguageCode.PORTUGUESE]: "tipo/quer dizer", [LanguageCode.MANDARIN]: "就是（填充詞）" } },
        { thai: "แบบว่า", phonetic: "bɛ̀ɛp wâa", translations: { [LanguageCode.ENGLISH]: "like/you know (filler)", [LanguageCode.FRENCH]: "genre/tu sais", [LanguageCode.PORTUGUESE]: "tipo/sabe", [LanguageCode.MANDARIN]: "就像（填充詞）" } },
        { thai: "อย่างว่า", phonetic: "yàaŋ wâa", translations: { [LanguageCode.ENGLISH]: "as I said/like (filler)", [LanguageCode.FRENCH]: "comme je disais", [LanguageCode.PORTUGUESE]: "como eu disse", [LanguageCode.MANDARIN]: "就像我說的" } },
        { thai: "โอเค", phonetic: "oo-khee", translations: { [LanguageCode.ENGLISH]: "okay", [LanguageCode.FRENCH]: "d'accord", [LanguageCode.PORTUGUESE]: "ok", [LanguageCode.MANDARIN]: "好" } },
    ],
    worksheet: [
        {
            type: ExerciseType.CULTURAL_NOTE,
            title: {
                [LanguageCode.ENGLISH]: "Natural Thai Conversation: Fillers & Casual Speech",
                [LanguageCode.FRENCH]: "Conversation thaïlandaise naturelle : Remplissages et langage familier",
                [LanguageCode.PORTUGUESE]: "Conversação Tailandesa Natural: Preenchimentos e Fala Casual",
                [LanguageCode.MANDARIN]: "自然泰語對話：填充詞與隨意說話",
            },
            content: {
                [LanguageCode.ENGLISH]: "Now that you've learned the basics, let's make your Thai sound more natural! Real Thai conversations use lots of fillers, particles, and casual expressions.\n\n**Common Conversation Fillers:**\n\n**เออ (əə)** = Yeah/uh-huh (informal yes)\n• Super casual way to say 'yes'\n• Used between friends\n• Example: 'เออ ไปกินข้าวไหม' (əə pai gin khâao mái) = 'Yeah, wanna go eat?'\n\n**อืม (ʉʉm)** = Hmm/um\n• Thinking sound\n• Hesitation or considering\n• Example: 'อืม ไม่แน่ใจ' (ʉʉm mâi nɛ̂ɛ jai) = 'Hmm, not sure'\n\n**อ่า (àa)** = Oh/ah (realization)\n• When you suddenly understand\n• Example: 'อ่า เข้าใจแล้ว!' (àa khâo jai lɛ́ɛo!) = 'Oh, I get it now!'\n\n**เหรอ (rə̌ə)** = Really?/is that so?\n• Informal question response\n• Shows surprise or interest\n• Example: 'เหรอ จริงเหรอ?' (rə̌ə jiŋ rə̌ə?) = 'Really? For real?'\n\n**คือ (khʉʉ)** = Like/I mean\n• Conversation filler (like 'um' or 'like')\n• Example: 'คือ ผมอยากไป แต่ว่า...' (khʉʉ phǒm yàak pai, tɛ̀ɛ wâa...) = 'Like, I want to go, but...'\n\n**แบบว่า (bɛ̀ɛp wâa)** = Like/you know\n• Another common filler\n• Example: 'แบบว่า เราไปกินไหม' (bɛ̀ɛp wâa rao pai gin mái) = 'Like, should we go eat?'\n\n**Important Particles:**\n\n**นะ (ná)** = Ok?/you know (softener)\n• Softens requests or statements\n• Makes you sound more polite/friendly\n• Example: 'ไปด้วยกันนะ' (pai dûai gan ná) = 'Let's go together, ok?'\n\n**ซิ (sí)** = Go ahead/just (encouragement)\n• Encourages action\n• Example: 'กินซิ' (gin sí) = 'Go ahead and eat!'\n\n**จัง (jing)** = Very/so (colloquial emphasis)\n• Casual way to say 'very'\n• Example: 'อร่อยจัง' (à-rɔ̀i jing) = 'So delicious!'\n\n**เลย (lə̄əi)** = At all (emphasis)\n• Adds emphasis to negative or extreme statements\n• Example: 'ไม่อร่อยเลย' (mâi à-rɔ̀i lə̄əi) = 'Not delicious at all'\n\n**Useful Casual Expressions:**\n\n**แล้ว (lɛ́ɛo)** = Already/then\n• Multiple uses in conversation\n• 'เสร็จแล้ว' (sèt lɛ́ɛo) = 'Already done'\n• 'แล้วไง' (lɛ́ɛo ŋai) = 'So what?'\n\n**เหมือนกัน (mʉ̌an gan)** = Same/also/too\n• Agreement expression\n• Example: 'ผมด้วยเหมือนกัน' (phǒm dûai mʉ̌an gan) = 'Me too/same here'\n\n**หรือเปล่า (rʉ̌ʉ bplào)** = Or not? (question particle)\n• Makes yes/no questions\n• Example: 'ไปหรือเปล่า' (pai rʉ̌ʉ bplào) = 'Are you going or not?'\n\n**Real Conversation Examples:**\n\n1. **Asking to hang out:**\n• 'เฮ้ เออ ว่างไหม แบบว่า ไปกินข้าวกันไหม' \n• (hée əə wâaŋ mái bɛ̀ɛp wâa pai gin khâao gan mái)\n• 'Hey, yeah, you free? Like, wanna go eat together?'\n\n2. **Agreeing enthusiastically:**\n• 'อ่า โอเคเลย ไปซิ'\n• (àa oo-khee lə̄əi pai sí)\n• 'Oh yeah, totally okay, let's go!'\n\n3. **Expressing surprise:**\n• 'เหรอ จริงหรอ ไม่เชื่อเลย'\n• (rə̌ə jiŋ rə̌ə mâi chʉ̂a lə̄əi)\n• 'Really? Seriously? I don't believe it at all!'\n\n4. **Softening a request:**\n• 'ช่วยหน่อยนะครับ'\n• (chûai nɔ̀i ná khráp)\n• 'Could you help me a bit, please?'\n\nThese fillers and particles will make your Thai sound much more natural and fluent!",
                [LanguageCode.FRENCH]: "Maintenant que vous avez appris les bases, rendons votre thaï plus naturel ! Les vraies conversations thaïlandaises utilisent beaucoup de mots de remplissage, de particules et d'expressions familières.\n\n**Mots de remplissage courants :**\n\n**เออ (əə)** = Ouais/uh-huh\n• Façon super décontractée de dire 'oui'\n• Utilisé entre amis\n\n**อืม (ʉʉm)** = Euh/hum\n• Son de réflexion\n• Hésitation\n\n**อ่า (àa)** = Oh/ah (réalisation)\n• Quand vous comprenez soudainement\n\n**Particules importantes :**\n\n**นะ (ná)** = D'accord ? (adoucisseur)\n• Adoucit les demandes\n\n**จัง (jing)** = Très (emphase familière)\n• Façon décontractée de dire 'très'\n\n**เลย (lə̄əi)** = Du tout (emphase)\n• Ajoute de l'emphase",
                [LanguageCode.PORTUGUESE]: "Agora que você aprendeu o básico, vamos fazer seu tailandês soar mais natural! Conversas tailandesas reais usam muitos preenchimentos, partículas e expressões casuais.\n\n**Preenchimentos comuns:**\n\n**เออ (əə)** = É/aham\n• Forma super casual de dizer 'sim'\n• Usado entre amigos\n\n**อืม (ʉʉm)** = Hum\n• Som de pensamento\n• Hesitação\n\n**อ่า (àa)** = Ah (percepção)\n• Quando você entende de repente\n\n**Partículas importantes:**\n\n**นะ (ná)** = Tá? (suavizador)\n• Suaviza pedidos\n\n**จัง (jing)** = Muito (ênfase casual)\n• Forma casual de dizer 'muito'\n\n**เลย (lə̄əi)** = Absolutamente (ênfase)\n• Adiciona ênfase",
                [LanguageCode.MANDARIN]: "既然你已經學會了基礎，讓我們讓你的泰語聽起來更自然！真正的泰語對話使用很多填充詞、助詞和隨意表達。\n\n**常見對話填充詞：**\n\n**เออ (əə)** = 嗯/啊哈\n• 非常隨意地說「是」的方式\n• 朋友之間使用\n\n**อืม (ʉʉm)** = 嗯\n• 思考的聲音\n• 猶豫\n\n**อ่า (àa)** = 哦/啊（恍然大悟）\n• 當你突然理解時\n\n**重要助詞：**\n\n**นะ (ná)** = 好嗎？（語氣助詞）\n• 軟化請求\n\n**จัง (jing)** = 非常（口語強調）\n• 隨意地說「非常」的方式\n\n**เลย (lə̄əi)** = 根本（強調）\n• 增加強調",
            }
        },
        {
            type: ExerciseType.FILL_IN_THE_BLANK,
            prompt: {
                [LanguageCode.ENGLISH]: "Fill in the blanks with appropriate conversation fillers or commonly missed words.",
                [LanguageCode.FRENCH]: "Remplissez les blancs avec des mots de remplissage appropriés ou des mots souvent manqués.",
                [LanguageCode.PORTUGUESE]: "Preencha os espaços com preenchimentos de conversa apropriados ou palavras comumente perdidas.",
                [LanguageCode.MANDARIN]: "填入適當的對話填充詞或常被遺漏的詞。",
            },
            sentences: [
                { start: { [LanguageCode.ENGLISH]: "A: Are you free? B: ___, I'm free", [LanguageCode.FRENCH]: "A: Tu es libre ? B: ___, je suis libre", [LanguageCode.PORTUGUESE]: "A: Você está livre? B: ___, estou livre", [LanguageCode.MANDARIN]: "A: 你有空嗎？B: ___，我有空" }, correctAnswer: "เออ", end: { [LanguageCode.ENGLISH]: " (yeah)", [LanguageCode.FRENCH]: " (ouais)", [LanguageCode.PORTUGUESE]: " (é)", [LanguageCode.MANDARIN]: " (嗯)" } },
                { start: { [LanguageCode.ENGLISH]: "This food is delicious ___ (very!)", [LanguageCode.FRENCH]: "Cette nourriture est délicieuse ___ (très !)", [LanguageCode.PORTUGUESE]: "Esta comida é deliciosa ___ (muito!)", [LanguageCode.MANDARIN]: "這個食物好吃___（非常！）" }, correctAnswer: "จัง/จิงๆ", end: { [LanguageCode.ENGLISH]: " (jing/jing jing)", [LanguageCode.FRENCH]: " (jing/jing jing)", [LanguageCode.PORTUGUESE]: " (jing/jing jing)", [LanguageCode.MANDARIN]: " (jing/jing jing)" } },
                { start: { [LanguageCode.ENGLISH]: "___ really? I didn't know that!", [LanguageCode.FRENCH]: "___ vraiment ? Je ne savais pas ça !", [LanguageCode.PORTUGUESE]: "___ sério? Eu não sabia disso!", [LanguageCode.MANDARIN]: "___真的嗎？我不知道那個！" }, correctAnswer: "เหรอ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Let's go together, ___", [LanguageCode.FRENCH]: "Allons-y ensemble, ___", [LanguageCode.PORTUGUESE]: "Vamos juntos, ___", [LanguageCode.MANDARIN]: "我們一起去___" }, correctAnswer: "นะ", end: { [LanguageCode.ENGLISH]: " (ok?)", [LanguageCode.FRENCH]: " (d'accord ?)", [LanguageCode.PORTUGUESE]: " (tá?)", [LanguageCode.MANDARIN]: " (好嗎？)" } },
                { start: { [LanguageCode.ENGLISH]: "I don't like it ___ (at all)", [LanguageCode.FRENCH]: "Je ne l'aime pas ___ (du tout)", [LanguageCode.PORTUGUESE]: "Eu não gosto ___ (absolutamente)", [LanguageCode.MANDARIN]: "我不喜歡___（根本）" }, correctAnswer: "เลย", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Are you going ___ (or not)?", [LanguageCode.FRENCH]: "Tu y vas ___ (ou pas) ?", [LanguageCode.PORTUGUESE]: "Você vai ___ (ou não)?", [LanguageCode.MANDARIN]: "你去___（還是不去）？" }, correctAnswer: "หรือเปล่า", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "Me too! Same here ___ !", [LanguageCode.FRENCH]: "Moi aussi ! Pareil ___ !", [LanguageCode.PORTUGUESE]: "Eu também! Igual ___!", [LanguageCode.MANDARIN]: "我也是！一樣___！" }, correctAnswer: "เหมือนกัน", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "I've ___ eaten (already)", [LanguageCode.FRENCH]: "J'ai ___ mangé (déjà)", [LanguageCode.PORTUGUESE]: "Eu ___ comi (já)", [LanguageCode.MANDARIN]: "我___吃了（已經）" }, correctAnswer: "แล้ว", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
                { start: { [LanguageCode.ENGLISH]: "___ I want to say that...", [LanguageCode.FRENCH]: "___ je veux dire que...", [LanguageCode.PORTUGUESE]: "___ eu quero dizer que...", [LanguageCode.MANDARIN]: "___我想說..." }, correctAnswer: "คือ", end: { [LanguageCode.ENGLISH]: " (like/I mean)", [LanguageCode.FRENCH]: " (genre)", [LanguageCode.PORTUGUESE]: " (tipo)", [LanguageCode.MANDARIN]: " (就是)" } },
                { start: { [LanguageCode.ENGLISH]: "Go ahead and eat ___!", [LanguageCode.FRENCH]: "Vas-y et mange ___ !", [LanguageCode.PORTUGUESE]: "Vai e come ___!", [LanguageCode.MANDARIN]: "去吃___！" }, correctAnswer: "ซิ", end: { [LanguageCode.ENGLISH]: "", [LanguageCode.FRENCH]: "", [LanguageCode.PORTUGUESE]: "", [LanguageCode.MANDARIN]: "" } },
            ]
        },
        {
            type: ExerciseType.JUMBLED_SENTENCE,
            prompt: {
                [LanguageCode.ENGLISH]: "Arrange these realistic conversation exchanges in the correct order.",
                [LanguageCode.FRENCH]: "Organisez ces échanges de conversation réalistes dans le bon ordre.",
                [LanguageCode.PORTUGUESE]: "Organize essas trocas de conversa realistas na ordem correta.",
                [LanguageCode.MANDARIN]: "將這些真實對話交流按正確順序排列。",
            },
            sentences: [
                { correctOrder: ["เฮ้", "ว่างไหม", "ไปกินข้าวกัน", "นะ"], hint: { [LanguageCode.ENGLISH]: "Hey, are you free? Let's go eat together, ok?", [LanguageCode.FRENCH]: "Hé, tu es libre ? Allons manger ensemble, d'accord ?", [LanguageCode.PORTUGUESE]: "Ei, você está livre? Vamos comer juntos, tá?", [LanguageCode.MANDARIN]: "嘿，你有空嗎？我們一起去吃飯，好嗎？" } },
                { correctOrder: ["เหรอ", "จริงเหรอ", "ไม่เชื่อ", "เลย"], hint: { [LanguageCode.ENGLISH]: "Really? Seriously? I don't believe it at all!", [LanguageCode.FRENCH]: "Vraiment ? Sérieusement ? Je ne le crois pas du tout !", [LanguageCode.PORTUGUESE]: "Sério? De verdade? Não acredito absolutamente!", [LanguageCode.MANDARIN]: "真的嗎？認真的嗎？我根本不相信！" } },
                { correctOrder: ["อ่า", "เข้าใจ", "แล้ว", "ขอบคุณ", "จัง"], hint: { [LanguageCode.ENGLISH]: "Oh, I understand now. Thanks so much!", [LanguageCode.FRENCH]: "Oh, je comprends maintenant. Merci beaucoup !", [LanguageCode.PORTUGUESE]: "Ah, entendo agora. Muito obrigado!", [LanguageCode.MANDARIN]: "啊，我現在明白了。非常感謝！" } },
                { correctOrder: ["คือ", "ผม", "อยากไป", "แต่ว่า", "ไม่มีเวลา"], hint: { [LanguageCode.ENGLISH]: "Like, I want to go, but I don't have time.", [LanguageCode.FRENCH]: "Genre, je veux y aller, mais je n'ai pas le temps.", [LanguageCode.PORTUGUESE]: "Tipo, eu quero ir, mas não tenho tempo.", [LanguageCode.MANDARIN]: "就是，我想去，但我沒有時間。" } },
                { correctOrder: ["ผม", "ด้วย", "เหมือนกัน", "ไปกัน", "ซิ"], hint: { [LanguageCode.ENGLISH]: "Me too! Same here. Let's go together!", [LanguageCode.FRENCH]: "Moi aussi ! Pareil. Allons-y ensemble !", [LanguageCode.PORTUGUESE]: "Eu também! Igual. Vamos juntos!", [LanguageCode.MANDARIN]: "我也是！一樣。我們一起去吧！" } },
            ]
        },
        {
            type: ExerciseType.MATCHING,
            prompt: {
                [LanguageCode.ENGLISH]: "Match the conversation filler to its usage context.",
                [LanguageCode.FRENCH]: "Associez le mot de remplissage à son contexte d'utilisation.",
                [LanguageCode.PORTUGUESE]: "Relacione o preenchimento de conversa ao seu contexto de uso.",
                [LanguageCode.MANDARIN]: "將對話填充詞與其使用情境配對。",
            },
            pairs: [
                { prompt: { [LanguageCode.ENGLISH]: "เหรอ", [LanguageCode.FRENCH]: "เหรอ", [LanguageCode.PORTUGUESE]: "เหรอ", [LanguageCode.MANDARIN]: "เหรอ" }, answer: { [LanguageCode.ENGLISH]: "Expressing surprise: 'Really?'", [LanguageCode.FRENCH]: "Exprimer la surprise : 'Vraiment ?'", [LanguageCode.PORTUGUESE]: "Expressar surpresa: 'Sério?'", [LanguageCode.MANDARIN]: "表達驚訝：「真的嗎？」" } },
                { prompt: { [LanguageCode.ENGLISH]: "นะ", [LanguageCode.FRENCH]: "นะ", [LanguageCode.PORTUGUESE]: "นะ", [LanguageCode.MANDARIN]: "นะ" }, answer: { [LanguageCode.ENGLISH]: "Softening request: 'ok?'", [LanguageCode.FRENCH]: "Adoucir demande : 'd'accord ?'", [LanguageCode.PORTUGUESE]: "Suavizar pedido: 'tá?'", [LanguageCode.MANDARIN]: "軟化請求：「好嗎？」" } },
                { prompt: { [LanguageCode.ENGLISH]: "จัง (jing)", [LanguageCode.FRENCH]: "จัง (jing)", [LanguageCode.PORTUGUESE]: "จัง (jing)", [LanguageCode.MANDARIN]: "จัง (jing)" }, answer: { [LanguageCode.ENGLISH]: "Casual emphasis: 'so/very'", [LanguageCode.FRENCH]: "Emphase familière : 'très'", [LanguageCode.PORTUGUESE]: "Ênfase casual: 'muito'", [LanguageCode.MANDARIN]: "隨意強調：「非常」" } },
                { prompt: { [LanguageCode.ENGLISH]: "ซิ", [LanguageCode.FRENCH]: "ซิ", [LanguageCode.PORTUGUESE]: "ซิ", [LanguageCode.MANDARIN]: "ซิ" }, answer: { [LanguageCode.ENGLISH]: "Encouragement: 'go ahead'", [LanguageCode.FRENCH]: "Encouragement : 'vas-y'", [LanguageCode.PORTUGUESE]: "Encorajamento: 'vai'", [LanguageCode.MANDARIN]: "鼓勵：「去吧」" } },
                { prompt: { [LanguageCode.ENGLISH]: "คือ", [LanguageCode.FRENCH]: "คือ", [LanguageCode.PORTUGUESE]: "คือ", [LanguageCode.MANDARIN]: "คือ" }, answer: { [LanguageCode.ENGLISH]: "Filler word: 'like/I mean'", [LanguageCode.FRENCH]: "Mot de remplissage : 'genre'", [LanguageCode.PORTUGUESE]: "Palavra de preenchimento: 'tipo'", [LanguageCode.MANDARIN]: "填充詞：「就是」" } },
                { prompt: { [LanguageCode.ENGLISH]: "เลย", [LanguageCode.FRENCH]: "เลย", [LanguageCode.PORTUGUESE]: "เลย", [LanguageCode.MANDARIN]: "เลย" }, answer: { [LanguageCode.ENGLISH]: "Emphasis: 'at all'", [LanguageCode.FRENCH]: "Emphase : 'du tout'", [LanguageCode.PORTUGUESE]: "Ênfase: 'absolutamente'", [LanguageCode.MANDARIN]: "強調：「根本」" } },
            ]
        },
        {
            type: ExerciseType.MULTIPLE_CHOICE,
            prompt: {
                [LanguageCode.ENGLISH]: "Choose the most natural way to complete these conversations.",
                [LanguageCode.FRENCH]: "Choisissez la manière la plus naturelle de compléter ces conversations.",
                [LanguageCode.PORTUGUESE]: "Escolha a maneira mais natural de completar essas conversas.",
                [LanguageCode.MANDARIN]: "選擇最自然的方式來完成這些對話。",
            },
            questions: [
                {
                    question: { [LanguageCode.ENGLISH]: "A: 'Want to go eat?' B: '___! Let's go!'", [LanguageCode.FRENCH]: "A: 'Tu veux aller manger ?' B: '___ ! Allons-y !'", [LanguageCode.PORTUGUESE]: "A: 'Quer ir comer?' B: '___! Vamos!'", [LanguageCode.MANDARIN]: "A: 「想去吃飯嗎？」B: 「___！走吧！」" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ใช่ครับ (formal yes)", [LanguageCode.FRENCH]: "ใช่ครับ (oui formel)", [LanguageCode.PORTUGUESE]: "ใช่ครับ (sim formal)", [LanguageCode.MANDARIN]: "ใช่ครับ（正式的是）" },
                        { [LanguageCode.ENGLISH]: "เออ (casual yeah)", [LanguageCode.FRENCH]: "เออ (ouais décontracté)", [LanguageCode.PORTUGUESE]: "เออ (é casual)", [LanguageCode.MANDARIN]: "เออ（隨意的嗯）" },
                        { [LanguageCode.ENGLISH]: "ครับ (polite yes)", [LanguageCode.FRENCH]: "ครับ (oui poli)", [LanguageCode.PORTUGUESE]: "ครับ (sim educado)", [LanguageCode.MANDARIN]: "ครับ（禮貌的是）" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Which particle makes this sound encouraging: 'Eat ___!'", [LanguageCode.FRENCH]: "Quelle particule rend cela encourageant : 'Mange ___ !'", [LanguageCode.PORTUGUESE]: "Qual partícula torna isso encorajador: 'Come ___!'", [LanguageCode.MANDARIN]: "哪個助詞使這聽起來鼓勵：「吃___！」" },
                    options: [
                        { [LanguageCode.ENGLISH]: "นะ", [LanguageCode.FRENCH]: "นะ", [LanguageCode.PORTUGUESE]: "นะ", [LanguageCode.MANDARIN]: "นะ" },
                        { [LanguageCode.ENGLISH]: "ซิ", [LanguageCode.FRENCH]: "ซิ", [LanguageCode.PORTUGUESE]: "ซิ", [LanguageCode.MANDARIN]: "ซิ" },
                        { [LanguageCode.ENGLISH]: "เลย", [LanguageCode.FRENCH]: "เลย", [LanguageCode.PORTUGUESE]: "เลย", [LanguageCode.MANDARIN]: "เลย" },
                    ],
                    correctIndex: 1
                },
                {
                    question: { [LanguageCode.ENGLISH]: "How do you say 'Me too!' casually?", [LanguageCode.FRENCH]: "Comment dit-on 'Moi aussi !' de manière décontractée ?", [LanguageCode.PORTUGUESE]: "Como você diz 'Eu também!' casualmente?", [LanguageCode.MANDARIN]: "如何隨意地說「我也是！」？" },
                    options: [
                        { [LanguageCode.ENGLISH]: "ผมด้วย", [LanguageCode.FRENCH]: "ผมด้วย", [LanguageCode.PORTUGUESE]: "ผมด้วย", [LanguageCode.MANDARIN]: "ผมด้วย" },
                        { [LanguageCode.ENGLISH]: "เหมือนกัน", [LanguageCode.FRENCH]: "เหมือนกัน", [LanguageCode.PORTUGUESE]: "เหมือนกัน", [LanguageCode.MANDARIN]: "เหมือนกัน" },
                        { [LanguageCode.ENGLISH]: "ผมด้วยเหมือนกัน", [LanguageCode.FRENCH]: "ผมด้วยเหมือนกัน", [LanguageCode.PORTUGUESE]: "ผมด้วยเหมือนกัน", [LanguageCode.MANDARIN]: "ผมด้วยเหมือนกัน" },
                    ],
                    correctIndex: 2
                },
                {
                    question: { [LanguageCode.ENGLISH]: "Which emphasizes 'not at all': 'I don't like it ___'", [LanguageCode.FRENCH]: "Lequel souligne 'pas du tout' : 'Je ne l'aime pas ___'", [LanguageCode.PORTUGUESE]: "Qual enfatiza 'absolutamente não': 'Eu não gosto ___'", [LanguageCode.MANDARIN]: "哪個強調「根本不」：「我不喜歡___」" },
                    options: [
                        { [LanguageCode.ENGLISH]: "จัง", [LanguageCode.FRENCH]: "จัง", [LanguageCode.PORTUGUESE]: "จัง", [LanguageCode.MANDARIN]: "จัง" },
                        { [LanguageCode.ENGLISH]: "เลย", [LanguageCode.FRENCH]: "เลย", [LanguageCode.PORTUGUESE]: "เลย", [LanguageCode.MANDARIN]: "เลย" },
                        { [LanguageCode.ENGLISH]: "นะ", [LanguageCode.FRENCH]: "นะ", [LanguageCode.PORTUGUESE]: "นะ", [LanguageCode.MANDARIN]: "นะ" },
                    ],
                    correctIndex: 1
                },
            ]
        },
    ],
    listeningSpeaking: {
        speakingPrompt: {
            [LanguageCode.ENGLISH]: "แนะนำตัวเอง กิจวัตรประจำวัน และแผนอนาคต",
            [LanguageCode.FRENCH]: "แนะนำตัวเอง กิจวัตรประจำวัน และแผนอนาคต",
            [LanguageCode.PORTUGUESE]: "แนะนำตัวเอง กิจวัตรประจำวัน และแผนอนาคต",
            [LanguageCode.MANDARIN]: "แนะนำตัวเอง กิจวัตรประจำวัน และแผนอนาคต",
        },
        phoneticPrompt: {
            [LanguageCode.ENGLISH]: "Record a 2-minute introduction about yourself. Include: 1) Who you are (name, where you're from, what you do), 2) Your daily routine (when you wake up, go to work/school, eat, etc.), 3) Your plans (what you want to do today/this week/in Thailand). Use as much vocabulary from Unit 1 as possible, and try to include some casual fillers like คือ, นะ, or เลย to sound natural!",
            [LanguageCode.FRENCH]: "Enregistrez une introduction de 2 minutes sur vous-même. Incluez : 1) Qui vous êtes (nom, d'où vous venez, ce que vous faites), 2) Votre routine quotidienne (quand vous vous réveillez, allez au travail/à l'école, mangez, etc.), 3) Vos projets (ce que vous voulez faire aujourd'hui/cette semaine/en Thaïlande). Utilisez autant de vocabulaire de l'Unité 1 que possible, et essayez d'inclure des mots de remplissage familiers comme คือ, นะ, ou เลย pour paraître naturel !",
            [LanguageCode.PORTUGUESE]: "Grave uma introdução de 2 minutos sobre você. Inclua: 1) Quem você é (nome, de onde você é, o que você faz), 2) Sua rotina diária (quando você acorda, vai para o trabalho/escola, come, etc.), 3) Seus planos (o que você quer fazer hoje/esta semana/na Tailândia). Use o máximo de vocabulário da Unidade 1 possível, e tente incluir alguns preenchimentos casuais como คือ, นะ, ou เลย para soar natural!",
            [LanguageCode.MANDARIN]: "錄製一個2分鐘的自我介紹。包括：1）你是誰（姓名、來自哪裡、做什麼），2）你的日常生活（什麼時候起床、去上班/上學、吃飯等），3）你的計劃（你今天/本週/在泰國想做什麼）。盡可能使用單元1的詞彙，並嘗試包含一些隨意的填充詞，如 คือ、นะ 或 เลย，以聽起來自然！",
        },
        speakingType: 'open-ended'
    }
};

