
import './App.css';
import Knowledge from "./Knowledge.png";
import Footer from "./Footer";
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={Knowledge} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <Dictionary />


        </main>


      </div>
      <Footer />
    </div>
  );
}

export default App;
