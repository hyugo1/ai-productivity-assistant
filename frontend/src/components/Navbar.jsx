// Navbar.jsx

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">AI Productivity Assistant</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/email" className="hover:text-blue-300">Email Generator</Link>
        <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link to="/login" className="hover:text-blue-300">Login</Link>
        <Link to="/register" className="hover:text-blue-300">Register</Link>
      </div>
    </nav>
  );
}