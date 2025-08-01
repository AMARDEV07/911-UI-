import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import MainLayout from './layouts/mainLayout';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home/>} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
