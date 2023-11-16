import './App.css';
import Home from './component/Home/Home';
import Carddetail from './component/carddetail/Carddetail'
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from './component/Cart/Cart';
import Products from './Data'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home Products={Products}/>}/>
        <Route path="/Carddetail/:id" element={<Carddetail Products={Products}/>}/>
        <Route path="/Cart" element={<Cart Products={Products}/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
