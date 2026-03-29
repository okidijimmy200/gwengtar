import Navbar from "./components/Navbar";
import Hero from "./components/Bacground";
import About from "./components/About";
import Objectives from "./components/Objectives";
import Projects from "./components/Projects";
import ImageCatalog from "./components/Catalog";
import CompletedProjects from "./components/CompletedProjects";
import Equipment from "./components/Equipment";
import Partnerships from "./components/Partnerships";
import Footer from "./components/Footer";
import ESGSection from "./components/ESG";

function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Objectives />
    <Projects />
    <CompletedProjects />
    <Equipment />
    <ImageCatalog />
    <ESGSection />
    <Partnerships />
    <Footer />
  </>
  );
}

export default App;
