import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <nav className="navLinks">
                <ul>
                    <li><NavLink exact to="/accueil">Accueil</NavLink></li>
                    <li><NavLink exact to="/carousel">Carousel</NavLink></li>
                    <li><NavLink exact to="/tableau">Tableau</NavLink></li>
                    <li><NavLink exact to="/calendrier">Calendrier</NavLink></li>
                    <li><NavLink exact to="/convertisseur">Convertisseur</NavLink></li>
                    <li><NavLink to="/crypto">Crypto</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;