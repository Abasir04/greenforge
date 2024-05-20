import React from 'react';
import './App.css';

import Hero from './components/hero/Hero';
import Categories from './components/categories/Categories';
import Ourplants from './components/ourplants/Ourplants';
import Tips from './components/tips/Tips';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Categories />
      <Ourplants />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;
