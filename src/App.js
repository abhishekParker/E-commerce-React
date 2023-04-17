import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import HomeDetail from "./pages/HomeDetail";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        <></>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="detail/:id" element={<HomeDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        <></>
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
