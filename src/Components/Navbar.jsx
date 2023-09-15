import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <nav className="navLinks">
                <ul>
                    <li><NavLink to="/accueil" className="navLink">Accueil</NavLink></li>
                    <li><NavLink to="/carousel" className="navLink">Carousel</NavLink></li>
                    <li><NavLink to="/tableau" className="navLink">Tableau</NavLink></li>
                    <li><NavLink to="/calendrier" className="navLink">Calendrier</NavLink></li>
                    <li><NavLink to="/convertisseur" className="navLink">Convertisseur</NavLink></li>
                    <li><NavLink to="/crypto" className="navLink">Crypto</NavLink></li>
                    <li><NavLink to="/fibonnaci1t" className="navLink">Fibonnaci</NavLink></li>
                    <li><NavLink to="/fibonnaci2t" className="navLink">Fibonnaci Web Worker</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;