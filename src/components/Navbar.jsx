import logo from '../logo2.jpg';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <div class="barnav">
            
            <div className='BurgerLogo'>
            <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
          
            <ul class="menu__box">
              <li><NavLink class="menu__item" to="/Recettes">Recettes sucrées</NavLink></li>
              <li><NavLink class="menu__item" to="/Recettes">Recettes salées </NavLink></li>
              <li><NavLink class="menu__item"  to="/Recettes">Surprise</NavLink></li>
            </ul>
         
          </div>
          <img className='logo2' src={logo} alt="rien"/>
          </div>
         

            
            <nav>
                <ul class="nav">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Recettes">Recettes</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Navbar;