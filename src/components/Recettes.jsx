
function Content() {
    return (

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
     );
}


export default Content;