import React, {useState, useEffect}  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Cabecalho from './components/Cabecalho'
import Home from './components/Home'
import Corpo from './components/Corpo'
import Footer from './components/Footer'
import HistoriaCowboy from './components/HistoriaCowboy'
import FilmagensHistoria from './components/FilmagensHistoria'
import Musicas from './components/Musicas'
import Fundo169 from './imagens/FundoCowboy169.png'
import Fundo916 from './imagens/FundoCowboy916.png'


function App() {

  return (
    <div className='App' 
    style={{backgroundImage: `url(${Fundo169})`,
          backgroundPosition: 'center',
          backgroundRepeat  : 'no-repeat',
          backgroundAttachment: 'unset',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          opacity: 1}}>
          <Cabecalho />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Videos" element={<Corpo />} />
              <Route path="/HistoriaFilmagens" element={<FilmagensHistoria />} />
              <Route path="/HistoriaCowboy" element={<HistoriaCowboy />} />
              <Route path="/Musicas" element={<Musicas />} />
            </Routes>
          </Router>
          <Footer />
    </div>
    
  );
}

export default App;
