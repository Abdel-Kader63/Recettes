import Title from '../components/Title';
import React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
    return(
        
        <div>
            <Title text="Trouves ta recette favorite !"/>
            <div class="bloc1">
            <Link to="../Recettes">
                <div class="sousbloc1">
                <h2 class="content3bloc">Surprise</h2>
                </div>
            </Link>
            </div>
        </div>
    );
    
}

export default Accueil;