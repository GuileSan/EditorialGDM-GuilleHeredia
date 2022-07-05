
import './App.css';
import ItemCount from './components/itemCount/ItemCount';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FilterCategory from './components/FilterCategory/FilterCategory'

function App() {
  // let initial = 1;
  // let stock = 8;

 
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
