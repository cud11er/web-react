import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">
    <Header />
    <Content />
    <Footer />
  </div>
);

