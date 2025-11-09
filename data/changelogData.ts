import { LanguageCode } from '../types';

export interface ChangelogEntry {
    version: string;
    date: string;
    newThings?: Record<LanguageCode, string[]>;
    fixes?: Record<LanguageCode, string[]>;
    comingSoon?: Record<LanguageCode, string[]>;
    description?: Record<LanguageCode, string>;
}

export interface ChangelogHighlight {
    message: Record<LanguageCode, string>;
    relatedVersion?: string;
}

export const CHANGELOG_HIGHLIGHTS: ChangelogHighlight[] = [
    // Add highlights here when needed, e.g.:
    // {
    //     message: {
    //         [LanguageCode.ENGLISH]: 'New features coming soon!',
    //         [LanguageCode.FRENCH]: 'Nouvelles fonctionnalités à venir!',
    //         [LanguageCode.PORTUGUESE]: 'Novos recursos em breve!',
    //         [LanguageCode.MANDARIN]: '新功能即將推出！',
    //     },
    //     relatedVersion: '1.3.0'
    // }
];

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
    {
        version: '1.2.2',
        date: 'saturday, nov 9 2025',
        fixes: {
            [LanguageCode.ENGLISH]: [
                'fixed firestore security rules that prevented donating points'
            ],
            [LanguageCode.FRENCH]: [
                'correction des règles de sécurité firestore qui empêchaient de donner des points'
            ],
            [LanguageCode.PORTUGUESE]: [
                'corrigidas regras de segurança do firestore que impediam doar pontos'
            ],
            [LanguageCode.MANDARIN]: [
                '修復了阻止捐贈點數的firestore安全規則'
            ]
        }
    },
    {
        version: '1.2.1',
        date: 'friday, nov 8 2025',
        newThings: {
            [LanguageCode.ENGLISH]: [
                '10 new lessons (1.11-1.20)',
                'new unit 2 with first lesson (2.0)',
                'logarithmic streak bonuses - earn up to 100 bonus points per day for maintaining long streaks'
            ],
            [LanguageCode.FRENCH]: [
                '10 nouvelles leçons (1.11-1.20)',
                'nouvelle unité 2 avec première leçon (2.0)',
                'bonus de série logarithmique - gagnez jusqu\'à 100 points bonus par jour pour maintenir de longues séries'
            ],
            [LanguageCode.PORTUGUESE]: [
                '10 novas lições (1.11-1.20)',
                'nova unidade 2 com primeira lição (2.0)',
                'bônus de sequência logarítmica - ganhe até 100 pontos bônus por dia para manter sequências longas'
            ],
            [LanguageCode.MANDARIN]: [
                '10個新課程 (1.11-1.20)',
                '新單元2及第一課 (2.0)',
                '對數連勝獎勵 - 保持長連勝每天最多可獲得100獎勵積分'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'fixed color of completed lessons on home page'
            ],
            [LanguageCode.FRENCH]: [
                'correction de la couleur des leçons terminées sur la page d\'accueil'
            ],
            [LanguageCode.PORTUGUESE]: [
                'corrigida a cor das lições concluídas na página inicial'
            ],
            [LanguageCode.MANDARIN]: [
                '修復首頁已完成課程的顏色'
            ]
        }
    },
    {
        version: '1.2.0',
        date: 'friday, nov 8 2025',
        newThings: {
            [LanguageCode.ENGLISH]: [
                'conversation progress tracking - see how many times you\'ve practiced each scenario (10 practices per lesson)',
                'overall conversation progress bar showing total completion percentage',
                'total time spent in conversations displayed at the top of conversation selector'
            ],
            [LanguageCode.FRENCH]: [
                'suivi de la progression des conversations - voyez combien de fois vous avez pratiqué chaque scénario (10 pratiques par leçon)',
                'barre de progression globale des conversations montrant le pourcentage d\'achèvement total',
                'temps total passé dans les conversations affiché en haut du sélecteur de conversation'
            ],
            [LanguageCode.PORTUGUESE]: [
                'rastreamento de progresso de conversação - veja quantas vezes você praticou cada cenário (10 práticas por lição)',
                'barra de progresso geral de conversação mostrando porcentagem total de conclusão',
                'tempo total gasto em conversas exibido no topo do seletor de conversação'
            ],
            [LanguageCode.MANDARIN]: [
                '對話進度追蹤 - 查看您練習每個場景的次數（每課10次練習）',
                '整體對話進度條顯示總完成百分比',
                '對話選擇器頂部顯示在對話中花費的總時間'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'fixed API keys and security rules',
                'fixed bug with handwriting analysis'
            ],
            [LanguageCode.FRENCH]: [
                'correction des clés API et des règles de sécurité',
                'correction d\'un bug avec l\'analyse de l\'écriture manuscrite'
            ],
            [LanguageCode.PORTUGUESE]: [
                'corrigidas chaves de API e regras de segurança',
                'corrigido bug com análise de caligrafia'
            ],
            [LanguageCode.MANDARIN]: [
                '修復API密鑰和安全規則',
                '修復手寫分析錯誤'
            ]
        }
    },
    {
        version: '1.1',
        date: 'thursday, nov 6 2025',
        newThings: {
            [LanguageCode.ENGLISH]: [
                '5 new lessons (1.6-1.10)',
                'audio analysis & structured feedback for conversations',
                'new cultural note added to lesson 1.4 on the verb len',
                'back gesture support added on android and ios',
                'install app from homepage',
                'new random option for no review cards in lessons',
                'all new rendering engine for handwriting practice, use on tablets for best results',
                'new shame wall mercy rule: 2,000+ points/week keeps you off the wall, even if you\'re in last place',
                'added ability to switch between "profile pictures" for other users'
            ],
            [LanguageCode.FRENCH]: [
                '5 nouvelles leçons (1.6-1.10)',
                'analyse audio et retour structuré pour les conversations',
                'nouvelle note culturelle ajoutée à la leçon 1.4 sur le verbe len',
                'support du geste de retour ajouté sur android et ios',
                'installer l\'application depuis la page d\'accueil',
                'nouvelle option aléatoire pour aucune carte de révision dans les leçons',
                'tout nouveau moteur de rendu pour la pratique de l\'écriture manuscrite, utilisez sur tablettes pour de meilleurs résultats',
                'nouvelle règle de clémence du mur de la honte: 2 000+ points/semaine vous garde hors du mur, même si vous êtes en dernière place',
                'ajout de la possibilité de changer entre les "photos de profil" pour les autres utilisateurs'
            ],
            [LanguageCode.PORTUGUESE]: [
                '5 novas lições (1.6-1.10)',
                'análise de áudio e feedback estruturado para conversas',
                'nova nota cultural adicionada à lição 1.4 sobre o verbo len',
                'suporte a gesto de retorno adicionado no android e ios',
                'instalar aplicativo na página inicial',
                'nova opção aleatória para nenhum cartão de revisão nas lições',
                'novo motor de renderização para prática de caligrafia, use em tablets para melhores resultados',
                'nova regra de misericórdia do muro da vergonha: 2.000+ pontos/semana mantém você fora do muro, mesmo se estiver em último lugar',
                'adicionada capacidade de alternar entre "fotos de perfil" para outros usuários'
            ],
            [LanguageCode.MANDARIN]: [
                '5個新課程 (1.6-1.10)',
                '音頻分析和對話結構化反饋',
                '在課程1.4中添加了關於動詞len的新文化筆記',
                '在android和ios上添加了返回手勢支持',
                '從主頁安裝應用程序',
                '課程中沒有複習卡的新隨機選項',
                '全新手寫練習渲染引擎，在平板電腦上使用以獲得最佳效果',
                '新的恥辱牆寬恕規則：每週2,000+積分讓您遠離恥辱牆，即使您排在最後',
                '添加了為其他用戶切換"個人資料圖片"的功能'
            ]
        },
        fixes: {
            [LanguageCode.ENGLISH]: [
                'flashcard sets now worth 5 points',
                'lesson 1.1: "yang" → "not yet" (vocab)',
                'lesson 1.4: "nawn" → "non" (romanization)',
                'fixed shame wall issue with color tinting',
                'solved logic concern that gave people with high streaks too many points'
            ],
            [LanguageCode.FRENCH]: [
                'les jeux de cartes mémoire valent maintenant 5 points',
                'leçon 1.1: "yang" → "pas encore" (vocab)',
                'leçon 1.4: "nawn" → "non" (romanisation)',
                'correction du problème du mur de la honte avec la teinte de couleur',
                'résolu le problème de logique qui donnait aux personnes avec de longues séries trop de points'
            ],
            [LanguageCode.PORTUGUESE]: [
                'conjuntos de cartões flash agora valem 5 pontos',
                'lição 1.1: "yang" → "ainda não" (vocab)',
                'lição 1.4: "nawn" → "non" (romanização)',
                'corrigido problema do muro da vergonha com tonalidade de cor',
                'resolvido problema de lógica que dava às pessoas com longas sequências muitos pontos'
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
                'more lessons: 1.11 through 1.20 will be coming in the next few days',
                'more reading lessons soon also! very important more reading practice (lessons 6 & 8)',
                'bug fix for issue with saved handwiring anaylisis',
                'looking ahead to version 2.0: culture lessons, i\'m very excited about this! you\'ll be able to learn vocabulary directly from music videos, movies, tiktok, and recent news events! any ideas on how to implement this are appreciated as i work on how to build out this feature'
            ],
            [LanguageCode.FRENCH]: [
                'plus de leçons: 1.11 à 1.20 arriveront dans les prochains jours',
                'plus de leçons de lecture bientôt aussi! très important plus de pratique de lecture (leçons 6 & 8)',
                'correction de bug pour le problème avec l\'analyse de l\'écriture manuscrite sauvegardée',
                'en regardant vers la version 2.0: leçons de culture, je suis très enthousiaste à ce sujet! vous pourrez apprendre du vocabulaire directement à partir de vidéos musicales, de films, de tiktok et d\'événements d\'actualité récents! toute idée sur la façon de mettre en œuvre cela est appréciée alors que je travaille sur la façon de construire cette fonctionnalité'
            ],
            [LanguageCode.PORTUGUESE]: [
                'mais lições: 1.11 a 1.20 virão nos próximos dias',
                'mais lições de leitura em breve também! muito importante mais prática de leitura (lições 6 & 8)',
                'correção de bug para problema com análise de caligrafia salva',
                'olhando para a versão 2.0: lições de cultura, estou muito animado com isso! você poderá aprender vocabulário diretamente de vídeos musicais, filmes, tiktok e eventos de notícias recentes! qualquer ideia sobre como implementar isso é apreciada enquanto trabalho em como construir este recurso'
            ],
            [LanguageCode.MANDARIN]: [
                '更多課程：1.11到1.20將在未來幾天內推出',
                '更多閱讀課程即將推出！非常重要的更多閱讀練習（課程6和8）',
                '修復保存的手寫分析問題的錯誤',
                '展望版本2.0：文化課程，我對此非常興奮！您將能夠直接從音樂視頻、電影、tiktok和最近的新聞事件中學習詞彙！在我研究如何構建此功能時，任何關於如何實施這一點的想法都將受到歡迎'
            ]
        }
    },
    {
        version: '1.0',
        date: 'tuesday, nov 4 2025',
        description: {
            [LanguageCode.ENGLISH]: 'app released! enjoy.',
            [LanguageCode.FRENCH]: 'application publiée! profitez-en.',
            [LanguageCode.PORTUGUESE]: 'aplicativo lançado! aproveite.',
            [LanguageCode.MANDARIN]: '應用程序發布！享受吧。'
        }
    }
];

export const CHANGELOG_UI_STRINGS = {
    title: {
        [LanguageCode.ENGLISH]: 'release notes',
        [LanguageCode.FRENCH]: 'notes de version',
        [LanguageCode.PORTUGUESE]: 'notas de versão',
        [LanguageCode.MANDARIN]: '版本說明'
    },
    version: {
        [LanguageCode.ENGLISH]: 'version',
        [LanguageCode.FRENCH]: 'version',
        [LanguageCode.PORTUGUESE]: 'versão',
        [LanguageCode.MANDARIN]: '版本'
    },
    newThings: {
        [LanguageCode.ENGLISH]: 'new things:',
        [LanguageCode.FRENCH]: 'nouveautés:',
        [LanguageCode.PORTUGUESE]: 'novidades:',
        [LanguageCode.MANDARIN]: '新功能：'
    },
    fixes: {
        [LanguageCode.ENGLISH]: 'issues/fixes:',
        [LanguageCode.FRENCH]: 'problèmes/corrections:',
        [LanguageCode.PORTUGUESE]: 'problemas/correções:',
        [LanguageCode.MANDARIN]: '問題/修復：'
    },
    comingSoon: {
        [LanguageCode.ENGLISH]: 'coming soon:',
        [LanguageCode.FRENCH]: 'à venir:',
        [LanguageCode.PORTUGUESE]: 'em breve:',
        [LanguageCode.MANDARIN]: '即將推出：'
    },
    highlight: {
        [LanguageCode.ENGLISH]: 'announcement:',
        [LanguageCode.FRENCH]: 'annonce:',
        [LanguageCode.PORTUGUESE]: 'anúncio:',
        [LanguageCode.MANDARIN]: '公告：'
    }
};

export const UPDATE_NOTIFICATION_STRINGS = {
    title: {
        [LanguageCode.ENGLISH]: 'your experience just got better',
        [LanguageCode.FRENCH]: 'votre expérience vient de s\'améliorer',
        [LanguageCode.PORTUGUESE]: 'sua experiência acabou de melhorar',
        [LanguageCode.MANDARIN]: '您的體驗剛剛變得更好'
    },
    subtitle: {
        [LanguageCode.ENGLISH]: 'here\'s what\'s new',
        [LanguageCode.FRENCH]: 'voici les nouveautés',
        [LanguageCode.PORTUGUESE]: 'veja as novidades',
        [LanguageCode.MANDARIN]: '這是新功能'
    },
    letsGo: {
        [LanguageCode.ENGLISH]: 'let\'s go',
        [LanguageCode.FRENCH]: 'c\'est parti',
        [LanguageCode.PORTUGUESE]: 'vamos lá',
        [LanguageCode.MANDARIN]: '開始吧'
    },
    viewMore: {
        [LanguageCode.ENGLISH]: 'view more',
        [LanguageCode.FRENCH]: 'voir plus',
        [LanguageCode.PORTUGUESE]: 'ver mais',
        [LanguageCode.MANDARIN]: '查看更多'
    }
};

