import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Generate from './Generate'; // Asegúrate de importar tu componente Generate
import SelectTemplate from './SelectTemplate';
import { Button } from '@mui/material';
import './App.css'


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <div className='home-container'>
                            <h3>Generador de Curriculum en Línea</h3>
                            <h1 className='main-title'>CREA TU CV DE MANERA GRATUITA AQUÍ</h1>
                            <p style={{fontSize: '20px'}}>
                                Potencia tu empleabilidad con estos diseños de CV que puede ser leído por todas las plataformas. Fácil de usar y listo en cuestión de minutos. ¡Pruébelo ahora gratis!
                            </p>
                            <Link to="/select">
                                <Button variant="contained" style={{backgroundColor: '#DF321A'}}>
                                    Diseñar mi Curriculum
                                </Button>
                            </Link>
                        </div>
                    }/>
                    <Route path="/select" element={<SelectTemplate />} />
                    <Route path="/generate" element={<Generate />} /> {/* Añade esta línea */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
