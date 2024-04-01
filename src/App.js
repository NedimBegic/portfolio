import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./mainComponents/Header";
import About from "./mainComponents/About";
import Skils from "./mainComponents/Skils";
import Work from "./mainComponents/Work";
import Contact from "./mainComponents/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skils />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
