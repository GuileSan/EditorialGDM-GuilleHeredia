
import './App.css';
import ItemCount from './components/itemCount/ItemCount';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useContext } from 'react';
import { MyCartContext } from './Context/CartContext';



function App() {
//const {cantCart, cart, addItem, removeItem, clear, precioTotal} = useContext(MyCartContext);

 
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" />}/>
      <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" />}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
