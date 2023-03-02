import logo from './logo.svg';
import './App.css';
import NavbarComp from './Component/HomeComp/NavbarComp';
import HeroComp from './Component/Title/HeroComp';
import MainProduct from './Component/Product/MainProduct';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './Component/Main';
import Cart from './Component/Cart/Cart';
import ErrorPage from './Component/ErrorPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {/* <Route path="/*" element={<ErrorPage/>}/> */}
        </Routes>
      </Router>
      {/* <Main/> */}
    
    </div>
  );
}

export default App;
