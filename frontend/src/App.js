import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
