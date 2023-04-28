import React from "react";
import Title from "../components/Title";
import cake from '../img/cheesecake.jpeg';
import chocolat from '../img/fondant.jpg';
import tiramisu from '../img/tiramisu.jpg';
import raviolis from '../img/raviolis.jpg';
import pizza from '../img/pizza.jpg';
import bruschetta from '../img/bruschetta.jpg';
import frite_nutella from '../img/frite_nutella.jpg';
import oignon_chocolat from '../img/confit_oignon_chocolat.jpg';
import anchois_chocolat from '../img/anchois_chocolat.jpg';


function Recettes() {
    return (
        <div>
            <Title text="Nos recettes"/>
            <container>

                <h2>Sucré</h2>
                <div className="liste_card">
                <div className="card">
                        <img src={tiramisu} alt="tiramisu" className="image_recette"></img>
                        <h3>Tiramisu</h3>
                        <p>En savoir plus...</p>
                </div>
                <div className="card">
                        <img src={chocolat} alt="fondant au chocolat" className="image_recette"></img>
                        <h3>Fondant au chocolat</h3>
                        <p>En savoir plus...</p>
                </div>
                <div className="card">
                        <img src={cake} alt="cheesecake" className="image_recette"></img>
                        <h3>Cheesecake</h3>
                        <p>En savoir plus...</p>
                </div>
                </div>

                <div className="espaceur"></div>
    <h2>Salé</h2>
                <div className="liste_card">
                <div className="card">
                        <img src={raviolis} alt="raviolis" className="image_recette"></img>
                        <h3>Raviolis</h3>
                        <p>En savoir plus...</p>
                </div>
                <div className="card">
                        <img src={pizza} alt="pizza" className="image_recette"></img>
                        <h3>Pizza</h3>
                        <p>En savoir plus...</p>
                </div>
                <div className="card">
                        <img src={bruschetta} alt="bruschetta" className="image_recette"></img>
                        <h3>Bruschetta</h3>
                        <p>En savoir plus...</p>
                </div>
                </div>

                <div className="espaceur"></div>

                <h2>Surprise</h2>
                <div className="liste_card">
                <div className="card">
                        <img src={frite_nutella} alt="frite au nutella" className="image_recette"></img>
                        <h3>Frite au nutella</h3>
                        <p>En savoir plus...</p>
                </div>
                <div className="card">
                        <img src={oignon_chocolat} alt="Confit d'oignon au chocolat" className="image_recette"></img>
                        <h3>Confit d'oignon au chocolat</h3>
                        <p>En savoir plus...</p>
                </div>
                <div className="card">
                        <img src={anchois_chocolat} alt="Anchois au chocolat" className="image_recette"></img>
                        <h3>Anchois au chocolat</h3>
                        <p>En savoir plus...</p>
                </div>
                </div>
                <div className="espaceur"></div>
                </container>
            </div>
     );
}


export default Recettes;