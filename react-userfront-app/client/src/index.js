import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { PasswordReset } from './pages/password-reset';
import { Dashboard } from './pages/dashboard';
import { Private } from './components/private';

const App = ({ children }) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
