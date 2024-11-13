import React from 'react';
import { Coins, MessageSquare, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Messages', value: '1,234', icon: MessageSquare },
    { label: 'ChatCoins Balance', value: '567', icon: Coins },
    { label: 'Current Rank', value: '#42', icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-white p-6 rounded-xl shadow-sm">
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

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Next Milestone</h2>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                234/1000 messages
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: '23.4%' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            Earn 100 ChatCoins when you reach 1000 messages!
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Connected Groups</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Crypto Enthusiasts</p>
                <p className="text-sm text-gray-500">156 messages today</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;