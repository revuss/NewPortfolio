import "./App.css";
import AboutMain from "./componets/About/aboutMain";
import Lenis from "@studio-freight/lenis";
import HomePage from "./componets/Home/homePage";
import { useEffect } from "react";
import ContactForm from "./componets/Contact/contactForm";
import SkillsPage from "./componets/Skills/skillsPage";
import ProjectMain from "./componets/Projects/projectMain";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      direction: "horizontal",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="App">
      <HomePage />
      <AboutMain />
      <SkillsPage />
      <ProjectMain id="id1" />
      <ContactForm />
    </div>
  );
}

export default App;
