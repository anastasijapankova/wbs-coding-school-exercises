import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/mainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/about" element={<About />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


