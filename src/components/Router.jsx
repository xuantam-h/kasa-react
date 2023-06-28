import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';

const Router = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </BrowserRouter>
    );
  }
  
  export default Router;