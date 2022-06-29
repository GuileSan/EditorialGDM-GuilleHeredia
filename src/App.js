

import './App.css';
import ItemCount from './components/itemCount/ItemCount';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
function App() {
  let initial = 1;
  let stock = 8;

 
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        {/* <ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" /> */}
       <ItemDetail />
      </header>
      
    </div>
  );
}

export default App;
