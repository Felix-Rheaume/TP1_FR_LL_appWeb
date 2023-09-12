import './App.css';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
