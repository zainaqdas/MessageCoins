import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coins, MessageSquare, Trophy, Users } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', icon: MessageSquare, label: 'Dashboard' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/tasks', icon: Coins, label: 'Tasks' },
    { path: '/referrals', icon: Users, label: 'Referrals' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">ChatCoins</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;