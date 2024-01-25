
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import SpecialPage from './pages/SpecialPage';
import WishlistPage from './pages/WishlistPage';
import BasketPage from './pages/BasketPage';
import Addpage from './pages/Addpage';
import DetailPage from './pages/DetailPage';
import MainLayOut from './layout/MainLayOut';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut />} >
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="special" element={<SpecialPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="add" element={<Addpage />} />
            <Route path="detail/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
