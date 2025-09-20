import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header/header";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
