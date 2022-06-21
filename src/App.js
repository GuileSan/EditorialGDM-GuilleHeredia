//@ts-check

import './App.css';
import ItemCount from './components/itemCount/ItemCount';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
function App() {
  let initial = 1;
  let stock = 8;

  function onAdd(valor) {
    alert("Agregaste" + valor + "productos a tu compra")
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" />
       
      </header>
      <body>
         <ItemCount initial ={initial} stock ={stock} onAdd ={onAdd}/>
      </body>
    </div>
  );
}

export default App;
