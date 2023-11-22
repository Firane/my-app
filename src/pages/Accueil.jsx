import { useState, useEffect } from "react";
import Thumb from "../components/Thumbs/Thumbs";
import Banner from "../components/Banner/Banner";
import Cliff from "../img/e270fc8fc902a1eb738458e7b29c1899.jpg";
// import { element } from "prop-types";

function Accueil() {
  // Déclaration d'une variable constituant tous les logements, pour l'instant un tableau vide
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Création d'une fonction de fetching et association du résultat a la variable logement

  const fetchData = async () => {
    try {
      const response = await fetch("logements.json");
      const result = await response.json();
      setLogements(result);
    } catch (error) {
      console.error("Error fetching data :", error);
    }
  };

  // Ici, tant que logement est vide je fais jouer une animation de chargement.
  // Sinon, une fois que les logements sont établis, je génère la vraie page attendue. J'utilise la variable Cliff générée via l'importation de l'image au début du .jsx

  if (logements.length === 0) {
    return (
      <>
        <div className="lds-dual-ring"></div>
      </>
    );
  } else {
    return (
      <>
        <Banner img={Cliff} alt="Endroit avec la mer et des falaises">
          <p className="banner__content__text">
            Chez vous,
            <br /> partout et ailleurs
          </p>
        </Banner>
        <section className="location">
          <Thumb logements={logements} />
        </section>
      </>
    );
  }
}

export default Accueil;
