import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Navbar from "./components/structure/Navbar";
import About from "./components/about/About";

function App() {
    return (
        <div>
            <Navbar />
            <h1> Delete me afterwards! </h1>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
