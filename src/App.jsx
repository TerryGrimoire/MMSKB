import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Change Title",
    href: "https://changehref.com",
    description: "Change description",
  };
  return (
    <BrowserRouter>
      <Header helmet={helmet} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Services" element={<Services helmet={helmet} />} />
        <Route path="/Tarifs" element={<Tarifs helmet={helmet} />} />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
