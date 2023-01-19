import './App.css';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Vedios from "./components/Vedios"



function App() {
  return (
    <div className="App">


      <Navbar />

      <div className="apps flex">
      <Sidebar />
      <Vedios />
      </div>
      
    </div>
  );
}

export default App;
