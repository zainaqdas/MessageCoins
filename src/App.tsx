import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Coins, MessageSquare, Trophy, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Tasks from './pages/Tasks';
import Referrals from './pages/Referrals';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/referrals" element={<Referrals />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;