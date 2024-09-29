import './App.css';

import AppNavbar from './components/AppNavbar';
import { Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Card from './components/Card';
import ProductDetails from "./components/ProductDetails";




function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="Card" element={<Card />} />
        <Route path="ProductDetails/:productID" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
