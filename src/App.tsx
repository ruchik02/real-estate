import Cards from "./components/Cards/Cards";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residiences from "./components/Residiences/Residiences";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Cards />
      <Residiences />
      <Companies />
      <Value />
      <GetStarted />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
