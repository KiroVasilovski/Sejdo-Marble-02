import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Navbar from "./components/structure/Navbar";
import About from "./components/about/About";
import Footer from "./components/structure/Footer";
import ScrollToTop from "./components/structure/ScrollToTop";
import Privacy from "./components/structure/Privacy";
import NotFound from "./components/structure/NotFound";

function App() {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Routes basename="/Sejdo-Marble-02">
                <Route path="/" exact element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
