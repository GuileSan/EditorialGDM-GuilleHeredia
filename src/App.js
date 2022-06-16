//@ts-check

import './App.css';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" />
      </header>
    </div>
  );
}

export default App;
