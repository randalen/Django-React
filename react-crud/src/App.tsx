import React from 'react';
import Products from './admin/Products';
import './App.css';
import Menu from './components/Menu';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './main/Main';
import ProductsEdit from './components/ProductsEdit';
import ProductsCreate from './components/ProductsCreate';

function App() {
  return (
    <div className="App">
      <Nav />


<div className="container-fluid">
  <div className="row">

    <Menu />
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='products/create' element={<ProductsCreate />}/>
          <Route path='products/:id/edit' element={<ProductsEdit />}/>
        </Routes>
      </BrowserRouter>

    </main>
  </div>
</div>
    </div>
  );
}

export default App;
