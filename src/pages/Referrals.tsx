import React from 'react';
import { Share2, Users, Gift, Copy } from 'lucide-react';

const Referrals = () => {
  const referralCode = 'CHAT123XYZ';
  const referralLink = `https://t.me/ChatCoinsBot?start=${referralCode}`;

  const referralStats = [
    { label: 'Total Referrals', value: '12', icon: Users },
    { label: 'Coins Earned', value: '600', icon: Gift },
    { label: 'Active Referrals', value: '8', icon: Share2 },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add toast notification here
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Share2 className="h-6 w-6 text-indigo-600" />
          Invite Friends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {referralStats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{label}</p>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                </div>
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Your Referral Code</label>
            <div className="flex">
              <input
                type="text"
                readOnly
                value={referralCode}
                className="flex-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                onClick={() => copyToClipboard(referralCode)}
                className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Referral Link</label>
            <div className="flex">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="flex-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                onClick={() => copyToClipboard(referralLink)}
                className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 bg-indigo-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-indigo-900 mb-2">How it works</h3>
            <ul className="space-y-2 text-sm text-indigo-700">
              <li>1. Share your referral code or link with friends</li>
              <li>2. Friends join using your referral</li>
              <li>3. Earn 50 ChatCoins for each friend who joins</li>
              <li>4. Earn 10% of their earned ChatCoins</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;