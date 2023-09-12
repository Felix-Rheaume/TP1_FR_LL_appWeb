import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <nav className="navLinks">
                <ul>
                    <li><NavLink exact to="/accueil" className="navLink">Accueil</NavLink></li>
                    <li><NavLink exact to="/carousel" className="navLink">Carousel</NavLink></li>
                    <li><NavLink exact to="/tableau" className="navLink">Tableau</NavLink></li>
                    <li><NavLink exact to="/calendrier" className="navLink">Calendrier</NavLink></li>
                    <li><NavLink exact to="/convertisseur" className="navLink">Convertisseur</NavLink></li>
                    <li><NavLink to="/crypto" className="navLink">Crypto</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;