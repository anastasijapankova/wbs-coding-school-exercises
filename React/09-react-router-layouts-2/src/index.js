import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { Dashboard } from './components/dashboard';
import { Profile } from './components/profile';
import { Settings } from './components/settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

