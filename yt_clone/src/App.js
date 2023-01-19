import './App.css';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Vedio from "./components/Vedio"



function App() {
  return (
    <div className="App">


      <Navbar />

      <div className="apps flex">
      <Sidebar />
      <Vedio />
      </div>
      
    </div>
  );
}

export default App;
