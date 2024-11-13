import TelegramBot from 'node-telegram-bot-api';
import { db } from '../firebase';
import { doc, updateDoc, increment, getDoc, setDoc } from 'firebase/firestore';

const token = '7317256499:AAEdO6tEwFbXfO_NqpUzuCTL4S1rjmRLIBk';
const bot = new TelegramBot(token, { polling: true });

export const initializeBot = () => {
  bot.onText(/\/start (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const referralCode = match[1];
    
    if (referralCode) {
      // Handle referral
      await handleReferral(chatId, referralCode);
    }
    
    bot.sendMessage(chatId, 'Welcome to ChatCoins! Start earning rewards for your messages.');
  });

  bot.on('message', async (msg) => {
    if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
      await handleGroupMessage(msg);
    }
  });
};

const handleGroupMessage = async (msg: TelegramBot.Message) => {
  const userId = msg.from?.id;
  if (!userId) return;

  const userRef = doc(db, 'users', userId.toString());
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    await updateDoc(userRef, {
      messageCount: increment(1),
      lastMessageAt: new Date().toISOString()
    });

    // Check for rewards
    await checkAndAwardMilestones(userId.toString());
  }
};

const handleReferral = async (userId: number, referralCode: string) => {
  const referrerDoc = await getDoc(doc(db, 'referralCodes', referralCode));
  
  if (referrerDoc.exists()) {
    const referrerId = referrerDoc.data().userId;
    
    // Update referrer's stats
    await updateDoc(doc(db, 'users', referrerId), {
      referralCount: increment(1),
      coins: increment(50) // Bonus for successful referral
    });
    
    // Create new user with referral info
    await setDoc(doc(db, 'users', userId.toString()), {
      referredBy: referrerId,
      messageCount: 0,
      coins: 0,
      createdAt: new Date().toISOString()
    });
  }
};

const checkAndAwardMilestones = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  
  if (!userDoc.exists()) return;
  
  const { messageCount, coins } = userDoc.data();
  
  // Check milestones and award coins
  if (messageCount >= 1000 && coins < 100) {
    await updateDoc(userRef, {
      coins: increment(100)
    });
  }
};

export default {
  initializeBot,
  handleGroupMessage,
  handleReferral,
  checkAndAwardMilestones
};