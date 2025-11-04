
import type { ConversationTopic } from '../types';
import { LanguageCode } from '../types';

export const CONVERSATION_TOPICS: ConversationTopic[] = [
  // Beginner
  { id: 1, translations: {
    [LanguageCode.ENGLISH]: { title: 'Ordering Coffee', scenario: 'Ordering a coffee and a pastry at a local cafe in Nakhon Sawan.' },
    [LanguageCode.FRENCH]: { title: 'Commander un café', scenario: 'Commander un café et une pâtisserie dans un café local à Nakhon Sawan.' },
    [LanguageCode.PORTUGUESE]: { title: 'Pedir um café', scenario: 'Pedir um café e um doce em uma cafeteria local em Nakhon Sawan.' },
    [LanguageCode.MANDARIN]: { title: '點咖啡', scenario: '在Nakhon Sawan的當地咖啡館點一杯咖啡和一份糕點。' }
  }, emoji: '☕', level: 'Beginner' },
  { id: 2, translations: {
    [LanguageCode.ENGLISH]: { title: 'Asking for Directions', scenario: 'Asking a stranger for directions to get to Central.' },
    [LanguageCode.FRENCH]: { title: 'Demander son chemin', scenario: 'Demander son chemin à un inconnu pour se rendre à Central.' },
    [LanguageCode.PORTUGUESE]: { title: 'Pedir informações', scenario: 'Pedir informações a um estranho para chegar ao Central.' },
    [LanguageCode.MANDARIN]: { title: '問路', scenario: '向陌生人問路去Central百貨。' }
  }, emoji: '🗺️', level: 'Beginner' },
  { id: 3, translations: {
    [LanguageCode.ENGLISH]: { title: 'At the Market', scenario: 'Buying fruits from a vendor at a night market and asking for the price.' },
    [LanguageCode.FRENCH]: { title: 'Au marché', scenario: 'Acheter des fruits à un vendeur dans un marché de nuit et demander le prix.' },
    [LanguageCode.PORTUGUESE]: { title: 'No mercado', scenario: 'Comprar frutas de um vendedor em um mercado noturno e perguntar o preço.' },
    [LanguageCode.MANDARIN]: { title: '在市場', scenario: '在夜市向攤販買水果並詢問價格。' }
  }, emoji: '🍉', level: 'Beginner' },
  { id: 5, translations: {
    [LanguageCode.ENGLISH]: { title: 'Restaurant Greetings', scenario: 'Greeting the staff at a restaurant and asking for a table for two.' },
    [LanguageCode.FRENCH]: { title: 'Salutations au restaurant', scenario: 'Saluer le personnel d\'un restaurant et demander une table pour deux.' },
    [LanguageCode.PORTUGUESE]: { title: 'Saudações no restaurante', scenario: 'Cumprimentar a equipe de um restaurante e pedir uma mesa para dois.' },
    [LanguageCode.MANDARIN]: { title: '餐廳問候', scenario: '在餐廳向工作人員打招呼並要求一張兩人桌。' }
  }, emoji: '🍽️', level: 'Beginner' },
  { id: 6, translations: {
    [LanguageCode.ENGLISH]: { title: 'Greetings', scenario: 'Greeting someone formally and asking "how are you?"' },
    [LanguageCode.FRENCH]: { title: 'Salutations', scenario: 'Saluer quelqu\'un formellement et demander "comment ça va ?"' },
    [LanguageCode.PORTUGUESE]: { title: 'Saudações', scenario: 'Cumprimentar alguém formalmente e perguntar "como você está?"' },
    [LanguageCode.MANDARIN]: { title: '問候', scenario: '正式問候某人並詢問“你好嗎？”' }
  }, emoji: '👋', level: 'Beginner' },
  { id: 7, translations: {
    [LanguageCode.ENGLISH]: { title: 'At the Convenience Store', scenario: 'Buying a drink and a snack at a 7-Eleven.' },
    [LanguageCode.FRENCH]: { title: 'À la supérette', scenario: 'Acheter une boisson et une collation dans un 7-Eleven.' },
    [LanguageCode.PORTUGUESE]: { title: 'Na loja de conveniência', scenario: 'Comprar uma bebida e um lanche em um 7-Eleven.' },
    [LanguageCode.MANDARIN]: { title: '在便利商店', scenario: '在7-Eleven買飲料和點心。' }
  }, emoji: '🏪', level: 'Beginner' },

  // Intermediate
  { id: 4, translations: {
    [LanguageCode.ENGLISH]: { title: 'Hailing a Ride', scenario: 'Negotiating with a motorcycle taxi driver to get a ride home.' },
    [LanguageCode.FRENCH]: { title: 'Héler un transport', scenario: 'Négocier avec un chauffeur de moto-taxi pour rentrer à la maison.' },
    [LanguageCode.PORTUGUESE]: { title: 'Chamar um transporte', scenario: 'Negociar com um motorista de mototáxi para voltar para casa.' },
    [LanguageCode.MANDARIN]: { title: '叫車', scenario: '與摩托計程車司機協商回家。' }
  }, emoji: '🛺', level: 'Intermediate' },
  { id: 8, translations: {
    [LanguageCode.ENGLISH]: { title: 'Simple Temple Visit', scenario: 'Asking for permission to take a photo inside a temple.' },
    [LanguageCode.FRENCH]: { title: 'Visite simple d\'un temple', scenario: 'Demander la permission de prendre une photo à l\'intérieur d\'un temple.' },
    [LanguageCode.PORTUGUESE]: { title: 'Visita simples ao templo', scenario: 'Pedir permissão para tirar uma foto dentro de um templo.' },
    [LanguageCode.MANDARIN]: { title: '簡單的寺廟參觀', scenario: '請求允許在寺廟內拍照。' }
  }, emoji: '🙏', level: 'Intermediate' },
  { id: 9, translations: {
    [LanguageCode.ENGLISH]: { title: 'Ordering Street Food', scenario: 'Ordering noodle soup from a street food vendor, specifying ingredients.' },
    [LanguageCode.FRENCH]: { title: 'Commander de la nourriture de rue', scenario: 'Commander une soupe de nouilles à un vendeur de rue, en spécifiant les ingrédients.' },
    [LanguageCode.PORTUGUESE]: { title: 'Pedir comida de rua', scenario: 'Pedir sopa de macarrão de um vendedor de rua, especificando os ingredientes.' },
    [LanguageCode.MANDARIN]: { title: '點街頭小吃', scenario: '向街頭小販點湯麵，並指定食材。' }
  }, emoji: '🍜', level: 'Intermediate' },
  { id: 10, translations: {
    [LanguageCode.ENGLISH]: { title: 'Shopping for Clothes', scenario: 'Asking for a different size or color of a shirt at a market stall.' },
    [LanguageCode.FRENCH]: { title: 'Acheter des vêtements', scenario: 'Demander une autre taille ou couleur de chemise à un stand de marché.' },
    [LanguageCode.PORTUGUESE]: { title: 'Comprar roupas', scenario: 'Pedir um tamanho ou cor diferente de uma camisa em uma barraca de mercado.' },
    [LanguageCode.MANDARIN]: { title: '買衣服', scenario: '在市場攤位詢問不同尺寸或顏色的襯衫。' }
  }, emoji: '👕', level: 'Intermediate' },
  { id: 11, translations: {
    [LanguageCode.ENGLISH]: { title: 'Making Friends', scenario: 'Introducing yourself to another student at school and asking what class they are in.' },
    [LanguageCode.FRENCH]: { title: 'Se faire des amis', scenario: 'Se présenter à un autre étudiant à l\'école et lui demander dans quelle classe il est.' },
    [LanguageCode.PORTUGUESE]: { title: 'Fazer amigos', scenario: 'Apresentar-se a outro aluno na escola e perguntar em que turma ele está.' },
    [LanguageCode.MANDARIN]: { title: '交朋友', scenario: '在學校向另一位同學介紹自己，並詢問他們在哪個班級。' }
  }, emoji: '👋', level: 'Intermediate' },
  { id: 12, translations: {
    [LanguageCode.ENGLISH]: { title: 'At the Pharmacy', scenario: 'Describing simple symptoms like a headache to a pharmacist.' },
    [LanguageCode.FRENCH]: { title: 'À la pharmacie', scenario: 'Décrire des symptômes simples comme un mal de tête à un pharmacien.' },
    [LanguageCode.PORTUGUESE]: { title: 'Na farmácia', scenario: 'Descrever sintomas simples como dor de cabeça para um farmacêutico.' },
    [LanguageCode.MANDARIN]: { title: '在藥房', scenario: '向藥劑師描述頭痛等簡單症狀。' }
  }, emoji: '💊', level: 'Intermediate' },
  
  // Expert
  { id: 13, translations: {
    [LanguageCode.ENGLISH]: { title: 'Buying a SIM card', scenario: 'Asking for a tourist SIM card with a data package at a mobile phone shop in a mall.' },
    [LanguageCode.FRENCH]: { title: 'Acheter une carte SIM', scenario: 'Demander une carte SIM touriste avec un forfait de données dans une boutique de téléphonie mobile d\'un centre commercial.' },
    [LanguageCode.PORTUGUESE]: { title: 'Comprar um chip', scenario: 'Pedir um chip de turista com um pacote de dados em uma loja de celulares em um shopping.' },
    [LanguageCode.MANDARIN]: { title: '購買SIM卡', scenario: '在購物中心的手機店詢問帶有數據套餐的遊客SIM卡。' }
  }, emoji: '📱', level: 'Expert' },
  { id: 14, translations: {
    [LanguageCode.ENGLISH]: { title: 'Opening a Bank Account', scenario: 'Asking about the documents needed to open a student bank account.' },
    [LanguageCode.FRENCH]: { title: 'Ouvrir un compte bancaire', scenario: 'Se renseigner sur les documents nécessaires pour ouvrir un compte bancaire étudiant.' },
    [LanguageCode.PORTUGUESE]: { title: 'Abrir uma conta bancária', scenario: 'Perguntar sobre os documentos necessários para abrir uma conta bancária de estudante.' },
    [LanguageCode.MANDARIN]: { title: '開設銀行帳戶', scenario: '詢問開設學生銀行帳戶所需的文件。' }
  }, emoji: '🏦', level: 'Expert' },
  { id: 15, translations: {
    [LanguageCode.ENGLISH]: { title: 'Discussing Weekend Plans', scenario: 'Making plans with a friend to visit a temple and a market over the weekend.' },
    [LanguageCode.FRENCH]: { title: 'Discuter des plans du week-end', scenario: 'Faire des plans avec un ami pour visiter un temple et un marché pendant le week-end.' },
    [LanguageCode.PORTUGUESE]: { title: 'Discutir planos para o fim de semana', scenario: 'Fazer planos com um amigo para visitar um templo e um mercado no fim de semana.' },
    [LanguageCode.MANDARIN]: { title: '討論週末計畫', scenario: '與朋友計劃週末去參觀寺廟和市場。' }
  }, emoji: '✨', level: 'Expert' },
];
