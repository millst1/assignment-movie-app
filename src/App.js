import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Aboutus from './components/Aboutus';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<Aboutus/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//<Route path="/universities" elements={<Universities/>}></Route>