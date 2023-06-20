import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import ShopContextProvider from "./context/ShopContext";
import CheckOut from "./pages/checkout/CheckOut";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
