import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./mainComponents/Header";
import About from "./mainComponents/About";
import Skils from "./mainComponents/Skils";
import Work from "./mainComponents/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skils />
      <Work />
    </div>
  );
}

export default App;
