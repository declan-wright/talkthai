import { LanguageCode } from '../types';

export interface ChangelogEntry {
    version: string;
    date: string;
    newThings?: Record<LanguageCode, string[]>;
    fixes?: Record<LanguageCode, string[]>;
    comingSoon?: Record<LanguageCode, string[]>;
    description?: Record<LanguageCode, string>;
    highlight?: Record<LanguageCode, string>;
}

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
    {
        version: '1.5.1',
        date: 'Friday, Nov 15 2025',
        fixes: {
            [LanguageCode.ENGLISH]: [
                'Added 267 audio files, improving reading practice',
                'Fixed bug with shame wall - people who miss a streak are now removed from the wall at midnight',
                'Lesson 6 added to reading practice',
                'Optimized audio hosting to prevent data usage'
            ],
            [LanguageCode.FRENCH]: [
                'Ajout de 267 fichiers audio, améliorant la pratique de la lecture',
                'Correction d\'un bug avec le mur de la honte - les personnes qui manquent une série sont maintenant retirées du mur à minuit',
                'Leçon 6 ajoutée à la pratique de la lecture',
                'Optimisation de l\'hébergement audio pour réduire l\'utilisation des données'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Adicionados 267 arquivos de áudio, melhorando a prática de leitura',
                'Corrigido bug com o muro da vergonha - pessoas que perdem uma sequência agora são removidas do muro à meia-noite',
                'Lição 6 adicionada à prática de leitura',
                'Otimizado hospedagem de áudio para reduzir o uso de dados'
            ],
            [LanguageCode.MANDARIN]: [
                '添加了267個音頻文件，改善閱讀練習',
                '修復了恥辱牆錯誤 - 錯過連勝的人現在會在午夜從恥辱牆上移除',
                '課程6添加到閱讀練習',
                '優化音頻託管以減少數據使用'
            ]
        }
    },
    {
        version: '1.5.0',
        date: 'Sunday, Nov 10 2025',
        highlight: {
            [LanguageCode.ENGLISH]: 'Zhuyin support is here! Mandarin speakers can now learn Thai pronunciation using Bopomofo. Try it now in the new Zhuyin Beta page',
            [LanguageCode.FRENCH]: 'Le support Zhuyin est arrivé! Les locuteurs mandarins peuvent maintenant apprendre la prononciation thaïlandaise en utilisant le Bopomofo. Essayez-le maintenant dans la nouvelle page Zhuyin Beta',
            [LanguageCode.PORTUGUESE]: 'Suporte Zhuyin chegou! Falantes de mandarim agora podem aprender pronúncia tailandesa usando Bopomofo. Experimente agora na nova página Zhuyin Beta',
            [LanguageCode.MANDARIN]: '注音支援來了！華語使用者現在可以使用注音符號學習泰語發音。立即在新的注音測試版頁面試用'
        },
        newThings: {
            [LanguageCode.ENGLISH]: [
                'Zhuyin (Bopomofo) conversion system for Thai romanization to help Taiwanese Mandarin speakers',
                'Interactive educational guide explaining invented Zhuyin symbols for Thai sounds',
                'Detailed tone mapping system showing how Thai tones correspond to Mandarin tones',
                'Toggle to enable Zhuyin in flashcards instead of romanization',
                'Access the new Zhuyin Beta feature from the homepage'
            ],
            [LanguageCode.FRENCH]: [
                'Système de conversion Zhuyin (Bopomofo) pour la romanisation thaïlandaise pour aider les locuteurs du mandarin taïwanais',
                'Guide éducatif interactif expliquant les symboles Zhuyin inventés pour les sons thaïlandais',
                'Système détaillé de mappage des tons montrant comment les tons thaïlandais correspondent aux tons mandarins',
                'Bascule pour activer Zhuyin dans les cartes flash au lieu de la romanisation',
                'Accédez à la nouvelle fonctionnalité Zhuyin Beta depuis la page d\'accueil'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Sistema de conversão Zhuyin (Bopomofo) para romanização tailandesa para ajudar falantes de mandarim taiwanês',
                'Guia educacional interativo explicando símbolos Zhuyin inventados para sons tailandeses',
                'Sistema detalhado de mapeamento de tons mostrando como os tons tailandeses correspondem aos tons mandarins',
                'Alternar para habilitar Zhuyin em flashcards em vez de romanização',
                'Acesse o novo recurso Zhuyin Beta na página inicial'
            ],
            [LanguageCode.MANDARIN]: [
                '泰語羅馬拼音注音化系統，幫助台灣華語使用者學習發音',
                '互動式教學指南，說明為泰語音設計的創新注音符號',
                '詳細的聲調對應系統，顯示泰語聲調如何對應華語聲調',
                '在字卡中啟用注音代替羅馬拼音的開關功能',
                '從主頁訪問新的注音測試版功能'
            ]
        }
    },
    {
        version: '1.4.0',
        date: 'Sunday, Nov 10 2025',
        highlight: {
            [LanguageCode.ENGLISH]: 'Enjoy the all new experience for taking tests! Try a test now or see below for the full list of updates',
            [LanguageCode.FRENCH]: 'Profitez de la toute nouvelle expérience pour prendre des tests! Essayez un test maintenant ou consultez ci-dessous pour la liste complète des mises à jour',
            [LanguageCode.PORTUGUESE]: 'Aproveite a nova experiência para tomar testes! Experimente um teste agora ou veja ci-dessous para a lista completa de atualizações',
            [LanguageCode.MANDARIN]: '享受全新的測驗體驗！立即嘗試測驗或查看下方完整更新列表'
        },
        newThings: {
            [LanguageCode.ENGLISH]: [
                'New pop-up to celebrate and reward streaks when you return to the home screen after earning points',
                'Update notifications now automatically let you know when new features are added',
                'Tests now use a proctoring system that detects unauthorized activity, adds a rules screen, and back button protection to prevent accidental exits',
                'You can now regrade fill-in-the-blank questions with lenient checking for typos, romanization, and alternative correct answers',
                'Retake tests for up to 80% score and earn the difference in points for a second chance',
                'Tests now use more intelligent, contextual questions based on the lesson'
            ],
            [LanguageCode.FRENCH]: [
                'Nouvelle fenêtre pop-up pour célébrer et récompenser les séries lorsque vous revenez à l\'écran d\'accueil après avoir gagné des points',
                'Les notifications de mise à jour vous informent maintenant automatiquement lorsque de nouvelles fonctionnalités sont ajoutées',
                'Les tests utilisent maintenant un système de surveillance qui détecte les activités non autorisées, ajoute un écran de règles et une protection du bouton retour pour éviter les sorties accidentelles',
                'Vous pouvez maintenant réévaluer les questions à compléter avec une vérification indulgente des fautes de frappe, de la romanisation et des réponses alternatives correctes',
                'Refaites les tests pour un score allant jusqu\'à 80% et gagnez la différence en points pour une seconde chance',
                'Les tests utilisent maintenant des questions plus intelligentes et contextuelles basées sur la leçon'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Novo pop-up para celebrar e recompensar sequências quando você retorna à tela inicial após ganhar pontos',
                'Notificações de atualização agora informam automaticamente quando novos recursos são adicionados',
                'Testes agora usam um sistema de fiscalização que detecta atividade não autorizada, adiciona uma tela de regras e proteção do botão voltar para evitar saídas acidentais',
                'Você agora pode reavaliar questões de preencher com verificação tolerante para erros de digitação, romanização e respostas alternativas corretas',
                'Refaça testes para pontuação de até 80% e ganhe a diferença em pontos para uma segunda chance',
                'Testes agora usam perguntas mais inteligentes e contextuais baseadas na lição'
            ],
            [LanguageCode.MANDARIN]: [
                '新的彈出窗口，在您獲得積分後返回主屏幕時慶祝並獎勵連勝',
                '更新通知現在會在添加新功能時自動通知您',
                '測驗現在使用監考系統檢測未經授權的活動，添加規則螢幕和返回按鈕保護以防止意外退出',
                '您現在可以重新評分填空題，寬鬆檢查拼寫錯誤、羅馬化和替代正確答案',
                '重考測驗最高可得80%分數並獲得分數差異以獲得第二次機會',
                '測驗現在使用基於課程的更智能、更具情境性的問題'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'Fixed bug where you could advance through test questions without providing answers',
                'Issue with profile pictures in the chat was fixed',
                'New fix for bugs with the anaylisis feedbacks for writing practice',
                'Added retry logic for 409 errors from Google Cloud',
                'Block automatic tranlation by web browsers',
                'Optomized speaking practice to support both open-ended and read prompts',
                'Issue causing test scores to ba capped at 88/100 was fixed. All users test scores are now displayed correctly. Enjoy the new points!'
            ],
            [LanguageCode.FRENCH]: [
                'Correction d\'un bug où vous pouviez avancer dans les questions du test sans fournir de réponses',
                'Problème avec les photos de profil dans le chat a été corrigé',
                'Nouvelle correction pour les bugs avec les retours d\'analyse pour la pratique de l\'écriture',
                'Ajout de la logique de nouvelle tentative pour les erreurs 409 de Google Cloud',
                'Bloque la traduction automatique par les navigateurs web',
                'Optimisation de la pratique de la parole pour prendre en charge les prompts ouverts et lus',
                'Problème causant le plafonnement des scores de test à 88/100 a été corrigé. Tous les scores de test des utilisateurs sont maintenant affichés correctement. Profitez des nouveaux points!'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Corrigido bug onde você podia avançar pelas questões do teste sem fornecer respostas',
                'Problema com fotos de perfil no chat foi corrigido',
                'Nova correção para bugs com os feedbacks de análise para prática de escrita',
                'Adicionada lógica de nova tentativa para erros 409 do Google Cloud',
                'Bloqueia a tradução automática por navegadores web',
                'Otimização da prática de fala para suportar prompts abertos e lidos',
                'Problema causando pontuações de teste limitadas a 88/100 foi corrigido. Todas as pontuações de teste dos usuários agora são exibidas corretamente. Aproveite os novos pontos!'
            ],
            [LanguageCode.MANDARIN]: [
                '修復了可以在不提供答案的情況下推進測驗問題的錯誤',
                '修復了聊天中的個人資料照片問題',
                '修復了手寫練習分析反饋的錯誤',
                '添加了409錯誤的重試邏輯來自Google Cloud',
                '阻止了網頁瀏覽器自動翻譯',
                '優化了說話練習，支持開放式和朗讀提示',
                '導致測驗分數限制在88/100的問題已修復。所有用戶的測驗分數現在都正確顯示。享受新的積分！'
            ]
        }
    },
    {
        version: '1.2.2',
        date: 'Saturday, Nov 9 2025',
        fixes: {
            [LanguageCode.ENGLISH]: [
                'Fixed Firestore security rules that prevented donating points'
            ],
            [LanguageCode.FRENCH]: [
                'Correction des règles de sécurité Firestore qui empêchaient de donner des points'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Corrigidas regras de segurança do Firestore que impediam doar pontos'
            ],
            [LanguageCode.MANDARIN]: [
                '修復了阻止捐贈點數的Firestore安全規則'
            ]
        }
    },
    {
        version: '1.2.1',
        date: 'Friday, Nov 8 2025',
        newThings: {
            [LanguageCode.ENGLISH]: [
                '10 new lessons (1.11-1.20)',
                'New unit 2 with first lesson (2.0)',
                'Logarithmic streak bonuses - earn up to 100 bonus points per day for maintaining long streaks'
            ],
            [LanguageCode.FRENCH]: [
                '10 nouvelles leçons (1.11-1.20)',
                'Nouvelle unité 2 avec première leçon (2.0)',
                'Bonus de série logarithmique - gagnez jusqu\'à 100 points bonus par jour pour maintenir de longues séries'
            ],
            [LanguageCode.PORTUGUESE]: [
                '10 novas lições (1.11-1.20)',
                'Nova unidade 2 com primeira lição (2.0)',
                'Bônus de sequência logarítmica - ganhe até 100 pontos bônus por dia para manter sequências longas'
            ],
            [LanguageCode.MANDARIN]: [
                '10個新課程 (1.11-1.20)',
                '新單元2及第一課 (2.0)',
                '對數連勝獎勵 - 保持長連勝每天最多可獲得100獎勵積分'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'Fixed color of completed lessons on home page'
            ],
            [LanguageCode.FRENCH]: [
                'Correction de la couleur des leçons terminées sur la page d\'accueil'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Corrigida a cor das lições concluídas na página inicial'
            ],
            [LanguageCode.MANDARIN]: [
                '修復首頁已完成課程的顏色'
            ]
        }
    },
    {
        version: '1.2.0',
        date: 'Friday, Nov 8 2025',
        highlight: {
            [LanguageCode.ENGLISH]: 'Check out progress tracking in the conversation tab, keep track of your effort and time spent learning',
            [LanguageCode.FRENCH]: 'Découvrez le suivi de progression dans l\'onglet conversation, suivez vos efforts et le temps passé à apprendre',
            [LanguageCode.PORTUGUESE]: 'Confira o rastreamento de progresso na aba de conversação, acompanhe seu esforço e tempo gasto aprendendo',
            [LanguageCode.MANDARIN]: '查看對話標籤中的進度追蹤，追蹤您的努力和學習時間'
        },
        newThings: {
            [LanguageCode.ENGLISH]: [
                'Conversation progress tracking - see how many times you\'ve practiced each scenario (10 practices per lesson)',
                'Overall conversation progress bar showing total completion percentage',
                'Total time spent in conversations displayed at the top of conversation selector'
            ],
            [LanguageCode.FRENCH]: [
                'Suivi de la progression des conversations - voyez combien de fois vous avez pratiqué chaque scénario (10 pratiques par leçon)',
                'Barre de progression globale des conversations montrant le pourcentage d\'achèvement total',
                'Temps total passé dans les conversations affiché en haut du sélecteur de conversation'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Rastreamento de progresso de conversação - veja quantas vezes você praticou cada cenário (10 práticas por lição)',
                'Barra de progresso geral de conversação mostrando porcentagem total de conclusão',
                'Tempo total gasto em conversas exibido no topo do seletor de conversação'
            ],
            [LanguageCode.MANDARIN]: [
                '對話進度追蹤 - 查看您練習每個場景的次數（每課10次練習）',
                '整體對話進度條顯示總完成百分比',
                '對話選擇器頂部顯示在對話中花費的總時間'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'Fixed API keys and security rules',
                'Fixed bug with handwriting analysis'
            ],
            [LanguageCode.FRENCH]: [
                'Correction des clés API et des règles de sécurité',
                'Correction d\'un bug avec l\'analyse de l\'écriture manuscrite'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Corrigidas chaves de API e regras de segurança',
                'Corrigido bug com análise de caligrafia'
            ],
            [LanguageCode.MANDARIN]: [
                '修復API密鑰和安全規則',
                '修復手寫分析錯誤'
            ]
        }
    },
    {
        version: '1.1',
        date: 'Thursday, Nov 6 2025',
        newThings: {
            [LanguageCode.ENGLISH]: [
                '5 new lessons (1.6-1.10)',
                'Audio analysis & structured feedback for conversations',
                'New cultural note added to lesson 1.4 on the verb len',
                'Back gesture support added on Android and iOS',
                'Install app from homepage',
                'New random option for no review cards in lessons',
                'All new rendering engine for handwriting practice, use on tablets for best results',
                'New shame wall mercy rule: 2,000+ points/week keeps you off the wall, even if you\'re in last place',
                'Added ability to switch between "profile pictures" for other users'
            ],
            [LanguageCode.FRENCH]: [
                '5 nouvelles leçons (1.6-1.10)',
                'Analyse audio et retour structuré pour les conversations',
                'Nouvelle note culturelle ajoutée à la leçon 1.4 sur le verbe len',
                'Support du geste de retour ajouté sur Android et iOS',
                'Installer l\'application depuis la page d\'accueil',
                'Nouvelle option aléatoire pour aucune carte de révision dans les leçons',
                'Tout nouveau moteur de rendu pour la pratique de l\'écriture manuscrite, utilisez sur tablettes pour de meilleurs résultats',
                'Nouvelle règle de clémence du mur de la honte: 2 000+ points/semaine vous garde hors du mur, même si vous êtes en dernière place',
                'Ajout de la possibilité de changer entre les "photos de profil" pour les autres utilisateurs'
            ],
            [LanguageCode.PORTUGUESE]: [
                '5 novas lições (1.6-1.10)',
                'Análise de áudio e feedback estruturado para conversas',
                'Nova nota cultural adicionada à lição 1.4 sobre o verbo len',
                'Suporte a gesto de retorno adicionado no Android e iOS',
                'Instalar aplicativo na página inicial',
                'Nova opção aleatória para nenhum cartão de revisão nas lições',
                'Novo motor de renderização para prática de caligrafia, use em tablets para melhores resultados',
                'Nova regra de misericórdia do muro da vergonha: 2.000+ pontos/semana mantém você fora do muro, mesmo se estiver em último lugar',
                'Adicionada capacidade de alternar entre "fotos de perfil" para outros usuários'
            ],
            [LanguageCode.MANDARIN]: [
                '5個新課程 (1.6-1.10)',
                '音頻分析和對話結構化反饋',
                '在課程1.4中添加了關於動詞len的新文化筆記',
                '在Android和iOS上添加了返回手勢支持',
                '從主頁安裝應用程序',
                '課程中沒有複習卡的新隨機選項',
                '全新手寫練習渲染引擎，在平板電腦上使用以獲得最佳效果',
                '新的恥辱牆寬恕規則：每週2,000+積分讓您遠離恥辱牆，即使您排在最後',
                '添加了為其他用戶切換"個人資料圖片"的功能'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'Flashcard sets now worth 5 points',
                'Lesson 1.1: "yang" → "not yet" (vocab)',
                'Lesson 1.4: "nawn" → "non" (romanization)',
                'Fixed shame wall issue with color tinting',
                'Solved logic concern that gave people with high streaks too many points'
            ],
            [LanguageCode.FRENCH]: [
                'Les jeux de cartes mémoire valent maintenant 5 points',
                'Leçon 1.1: "yang" → "pas encore" (vocab)',
                'Leçon 1.4: "nawn" → "non" (romanisation)',
                'Correction du problème du mur de la honte avec la teinte de couleur',
                'Résolu le problème de logique qui donnait aux personnes avec de longues séries trop de points'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Conjuntos de cartões flash agora valem 5 pontos',
                'Lição 1.1: "yang" → "ainda não" (vocab)',
                'Lição 1.4: "nawn" → "non" (romanização)',
                'Corrigido problema do muro da vergonha com tonalidade de cor',
                'Resolvido problema de lógica que dava às pessoas com longas sequências muitos pontos'
            ],
            [LanguageCode.MANDARIN]: [
                '閃卡集現在價值5積分',
                '課程1.1："yang" → "還沒有"（詞彙）',
                '課程1.4："nawn" → "non"（羅馬化）',
                '修復了恥辱牆顏色染色問題',
                '解決了給予長連勝者過多積分的邏輯問題'
            ]
        },
        comingSoon: {
            [LanguageCode.ENGLISH]: [
                'More lessons: 1.11 through 1.20 will be coming in the next few days',
                'More reading lessons soon also! Very important more reading practice (lessons 6 & 8)',
                'Bug fix for issue with saved handwiring anaylisis',
                'Looking ahead to version 2.0: culture lessons, I\'m very excited about this! You\'ll be able to learn vocabulary directly from music videos, movies, TikTok, and recent news events! Any ideas on how to implement this are appreciated as I work on how to build out this feature'
            ],
            [LanguageCode.FRENCH]: [
                'Plus de leçons: 1.11 à 1.20 arriveront dans les prochains jours',
                'Plus de leçons de lecture bientôt aussi! Très important plus de pratique de lecture (leçons 6 & 8)',
                'Correction de bug pour le problème avec l\'analyse de l\'écriture manuscrite sauvegardée',
                'En regardant vers la version 2.0: leçons de culture, je suis très enthousiaste à ce sujet! Vous pourrez apprendre du vocabulaire directement à partir de vidéos musicales, de films, de TikTok et d\'événements d\'actualité récents! Toute idée sur la façon de mettre en œuvre cela est appréciée alors que je travaille sur la façon de construire cette fonctionnalité'
            ],
            [LanguageCode.PORTUGUESE]: [
                'Mais lições: 1.11 a 1.20 virão nos próximos dias',
                'Mais lições de leitura em breve também! Muito importante mais prática de leitura (lições 6 & 8)',
                'Correção de bug para problema com análise de caligrafia salva',
                'Olhando para a versão 2.0: lições de cultura, estou muito animado com isso! Você poderá aprender vocabulário diretamente de vídeos musicais, filmes, TikTok e eventos de notícias recentes! Qualquer ideia sobre como implementar isso é apreciada enquanto trabalho em como construir este recurso'
            ],
            [LanguageCode.MANDARIN]: [
                '更多課程：1.11到1.20將在未來幾天內推出',
                '更多閱讀課程即將推出！非常重要的更多閱讀練習（課程6和8）',
                '修復保存的手寫分析問題的錯誤',
                '展望版本2.0：文化課程，我對此非常興奮！您將能夠直接從音樂視頻、電影、TikTok和最近的新聞事件中學習詞彙！在我研究如何構建此功能時，任何關於如何實施這一點的想法都將受到歡迎'
            ]
        }
    },
    {
        version: '1.0',
        date: 'Tuesday, Nov 4 2025',
        description: {
            [LanguageCode.ENGLISH]: 'App released! Enjoy.',
            [LanguageCode.FRENCH]: 'Application publiée! Profitez-en.',
            [LanguageCode.PORTUGUESE]: 'Aplicativo lançado! Aproveite.',
            [LanguageCode.MANDARIN]: '應用程序發布！享受吧。'
        }
    }
];

export const CHANGELOG_UI_STRINGS = {
    title: {
        [LanguageCode.ENGLISH]: 'Release Notes',
        [LanguageCode.FRENCH]: 'Notes de Version',
        [LanguageCode.PORTUGUESE]: 'Notas de Versão',
        [LanguageCode.MANDARIN]: '版本說明'
    },
    version: {
        [LanguageCode.ENGLISH]: 'Version',
        [LanguageCode.FRENCH]: 'Version',
        [LanguageCode.PORTUGUESE]: 'Versão',
        [LanguageCode.MANDARIN]: '版本'
    },
    newThings: {
        [LanguageCode.ENGLISH]: 'New Things:',
        [LanguageCode.FRENCH]: 'Nouveautés:',
        [LanguageCode.PORTUGUESE]: 'Novidades:',
        [LanguageCode.MANDARIN]: '新功能：'
    },
    fixes: {
        [LanguageCode.ENGLISH]: 'Issues/Fixes:',
        [LanguageCode.FRENCH]: 'Problèmes/Corrections:',
        [LanguageCode.PORTUGUESE]: 'Problemas/Correções:',
        [LanguageCode.MANDARIN]: '問題/修復：'
    },
    comingSoon: {
        [LanguageCode.ENGLISH]: 'Coming Soon:',
        [LanguageCode.FRENCH]: 'À Venir:',
        [LanguageCode.PORTUGUESE]: 'Em Breve:',
        [LanguageCode.MANDARIN]: '即將推出：'
    },
    highlight: {
        [LanguageCode.ENGLISH]: 'Announcement:',
        [LanguageCode.FRENCH]: 'Annonce:',
        [LanguageCode.PORTUGUESE]: 'Anúncio:',
        [LanguageCode.MANDARIN]: '公告：'
    }
};

export const UPDATE_NOTIFICATION_STRINGS = {
    title: {
        [LanguageCode.ENGLISH]: 'Your Experience Just Got Better',
        [LanguageCode.FRENCH]: 'Votre Expérience Vient de S\'améliorer',
        [LanguageCode.PORTUGUESE]: 'Sua Experiência Acabou de Melhorar',
        [LanguageCode.MANDARIN]: '您的體驗剛剛變得更好'
    },
    subtitle: {
        [LanguageCode.ENGLISH]: 'Here\'s What\'s New',
        [LanguageCode.FRENCH]: 'Voici les Nouveautés',
        [LanguageCode.PORTUGUESE]: 'Veja as Novidades',
        [LanguageCode.MANDARIN]: '這是新功能'
    },
    letsGo: {
        [LanguageCode.ENGLISH]: 'Let\'s Go',
        [LanguageCode.FRENCH]: 'C\'est Parti',
        [LanguageCode.PORTUGUESE]: 'Vamos Lá',
        [LanguageCode.MANDARIN]: '開始吧'
    },
    viewMore: {
        [LanguageCode.ENGLISH]: 'View More',
        [LanguageCode.FRENCH]: 'Voir Plus',
        [LanguageCode.PORTUGUESE]: 'Ver Mais',
        [LanguageCode.MANDARIN]: '查看更多'
    }
};

