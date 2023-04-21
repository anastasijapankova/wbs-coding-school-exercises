import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './Layouts/dashboardLayout';
import { Dashboard } from './components/dashboard';
import { LoginLayout } from './Layouts/loginLayout';
import { Login } from './components/login';
import { Navigation } from './components/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

