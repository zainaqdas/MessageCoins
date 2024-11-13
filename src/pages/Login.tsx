import React, { useEffect } from 'react';
import { Coins } from 'lucide-react';

const Login = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', 'ChatCoinsBot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    script.async = true;
    document.getElementById('telegram-login')?.appendChild(script);

    window.onTelegramAuth = (user: any) => {
      console.log('Logged in as', user);
      // Handle authentication here
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center space-y-6">
          <Coins className="h-16 w-16 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome to ChatCoins</h1>
          <p className="text-gray-600 text-center">
            Earn rewards for your Telegram activity and compete with friends!
          </p>
          <div id="telegram-login" className="w-full flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;