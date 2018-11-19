import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImgCards from "./components/ImgCards";
import Footer from "./components/Footer";
import images from "./images.json"

const App = () => (
    <div className="container">
        <Navbar />
        <Header />      
        <ImgCards 
          id={images[0].id}
          image={images[0].image}
        />
        <Footer />
    </div>
);

export default App;
