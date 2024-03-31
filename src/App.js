import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./mainComponents/Header";
import About from "./mainComponents/About";
import Skils from "./mainComponents/Skils";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skils />
    </div>
  );
}

export default App;
