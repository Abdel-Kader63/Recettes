import React from "react";
import { useState, useEffect} from "react";
import { recipes } from "../recettes";




function Searchbar(){

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value);
    }
    const Resultat = recipes.filter((val) => {

        return val.name.toLowerCase().includes(searchTerm.toLowerCase());

      });

    return(
        <>
        
            <div className="searchBar">
                <input
                    type="search"
                    name="searchBar"
                    id="searchBar"
                    className="searchBarchamp"
                    placeholder="Rechercher une recette..."
            
                    onChange={handleSearchTerm}
                    
                    />
            </div>
            <div className="ResultatdeRecherche">

            {/* Condition if not find  */}
            {Resultat.length > 0 ? (
                
                // méthode .map pour parcourir les objets(recettes) de mon api
                Resultat.map((val) => (
                  
                    <div className="ResultatdeRecherche
                    " key={val.id}>
                        <div className="carte_recette">
                       <h2 class="lesH2"> {val.name}</h2>
                       <img src= {require (`../images_recettes/${val.name}.jpg`)} className="img_recettes"/>
                        <h3>{val.description}</h3>
                       
                        <p>{val.quantity}</p>
                        
                        {val.ingredients[1].ingredient}
                        </div>
                    </div>
                    
                    
                   
                    

                )))
                    // condition "else" représenté par les deux point :
                    : (<div id="message_erreur"><p >Veullez renseigner une recettes disponible !</p></div>)}

            </div>
            
        </>
    );
}
export default Searchbar;