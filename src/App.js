import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Accueil from './Components/Accueil';
import Carousel from './Components/Carousel';
import Tableau from './Components/Tableau';
import Calendrier from './Components/Calendrier';
import Convertisseur from './Components/Convertisseur';
import Crypto from './Components/Crypto';
import Fibonnaci from './Components/Fibonnaci';
import FibonnaciWebWorker from './Components/FibonnaciWebWorker';

// Le site web : https://tp1-fr-ll-app-web.vercel.app/

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Accueil/>}></Route>
        <Route exact path="/carousel" element={<Carousel/>}></Route>
        <Route exact path="/tableau" element={<Tableau/>}></Route>
        <Route exact path="/calendrier" element={<Calendrier/>}></Route>
        <Route exact path="/convertisseur" element={<Convertisseur/>}></Route>
        <Route exact path="/crypto" element={<Crypto/>}></Route>
        <Route exact path="/fibonnaci1t" element={<Fibonnaci/>}></Route>
        <Route exact path="/fibonnaci2t" element={<FibonnaciWebWorker/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
