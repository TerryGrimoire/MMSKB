import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Covoiturage from "./pages/Covoiturage";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Make Me Scream Kiki Ball",
    href: "https://makemescreamkikiball.grimoire.re/",
    description:
      "Retrouver toute la ballroom scene de la Réunion pour le ball d'Halloween. Par la communauté LGBTQIA+ pour la communauté kwir de la Réunion.",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Services" element={<Services helmet={helmet} />} />
        <Route path="/Covoiturage" element={<Covoiturage helmet={helmet} />} />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
