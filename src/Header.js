import React, { useEffect, useState } from 'react';
import './style.css'; // Asegúrate de importar tus estilos
import logo from './logo_laborum.png'

const Header = () => {
    const [show, setShow] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = scrollPos > currentScrollPos;

        setScrollPos(currentScrollPos);
        setShow(visible);
    };

    return (
        <div className={`header ${show ? 'active' : 'hidden'}`}>
            {/* Aquí van los elementos de tu header */}
            <div>
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default Header;
