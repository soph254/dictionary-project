
import './App.css';
import Footer from "./Footer";
import Dictionary from "./Dictionary";
import knowledge from "./Knowledge.png";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={knowledge} className="KnowledgeIcon" alt="icon" />
          <h1> Dictionary </h1>

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
