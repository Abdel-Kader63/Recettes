import Title from '../components/Title';
import React from 'react';

function Accueil() {
    return(
        
        <div>
            <Title text="BIENVENUE AUX FINS GOURMETS"/>
            <div id="bloc1">
                
                <div class="sousbloc1">
                    <h2 class="content3bloc">Sucré</h2>
                </div>
                <div class="sousbloc1">
                    <h2 class="content3bloc">Salé</h2>
                </div>
                <div class="sousbloc1">
                    <h2 class="content3bloc">Surprise</h2>

                </div>
            </div>
        </div>
    );
    
}

export default Accueil;