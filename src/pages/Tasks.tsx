import React from 'react';
import { CheckCircle, Clock, Gift, Coins } from 'lucide-react';

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Send 100 messages',
      description: 'Send 100 messages in any connected group',
      reward: 50,
      progress: 65,
      total: 100,
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Invite 3 friends',
      description: 'Invite 3 friends to any connected group',
      reward: 100,
      progress: 2,
      total: 3,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Daily login',
      description: 'Log in to ChatCoins for 5 consecutive days',
      reward: 25,
      progress: 5,
      total: 5,
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Gift className="h-6 w-6 text-indigo-600" />
            Daily Tasks
          </h2>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            Resets in 12:34:56
          </div>
        </div>

        <div className="grid gap-6">
          {tasks.map((task) => (
            <div key={task.id} className="border rounded-lg p-4 hover:border-indigo-200 transition-colors">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Coins className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{task.reward}</span>
                </div>
              </div>

              <div className="mt-4">
                {task.status === 'completed' ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Progress</span>
                      <span>{task.progress}/{task.total}</span>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(task.progress / task.total) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;