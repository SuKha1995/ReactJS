import React from 'react';
import './App.css';
import Header from './BaiTapThucHanhlayout/Header';
import Banner from './BaiTapThucHanhlayout/Banner';
import Product from './BaiTapThucHanhlayout/Product';
import Footer from './BaiTapThucHanhlayout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
