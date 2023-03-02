import logo from './logo.svg';
import './App.css';
import NavbarComp from './Component/HomeComp/NavbarComp';
import HeroComp from './Component/Title/HeroComp';
import MainProduct from './Component/Product/MainProduct';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './Component/Main';
import Cart from './Component/Cart/Cart';
import ErrorPage from './Component/ErrorPage';
import ContextComp from './Component/Context/ContextComp';

function App() {
  return (

    <div className="App">
    <ContextComp>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
          <Route path='/Google_Store' element={<Main/>}/>

        </Routes>
      </Router>
      {/* <Main/> */}
      </ContextComp>
    

    
    </div>
  );
}

export default App;
