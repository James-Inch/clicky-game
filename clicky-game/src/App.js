import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImgCards from "./components/ImgCards";
import Footer from "./components/Footer";

const App = () => (
    <div className="container">
        <Navbar />
        <Header />
        <ImgCards />
        <Footer />
    </div>
);

export default App;
