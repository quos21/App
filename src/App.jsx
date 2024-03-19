import Test from "./Test";
import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/> 
    </section>
    <section><Parallax type="services"/></section>
    <section id="Skills"><Skills/></section>
    <section id='Projects'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    {/* <Test/> */}
  </div>;
};

export default App;
