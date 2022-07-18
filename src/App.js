
import './App.css';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';




function App() {


 
  return (
    
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" />}/>
      <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenido al sitio oficial de Editorial GDM" />}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </BrowserRouter>
  
  );
}

export default App;
