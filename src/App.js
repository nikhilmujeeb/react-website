import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Todo from "./pages/todo";
import Countries from "./pages/Countries";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/index" />} />
                        <Route path="/index" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/countries" element={<Countries />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
