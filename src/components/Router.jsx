import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Accomodation from '../pages/Accomodation';
import Error from '../pages/Error';
import Header from './Header'; 

const Router = () => {
    return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/accomodation/:id' element={<Accomodation/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </BrowserRouter>
    );
  }
  
  export default Router;