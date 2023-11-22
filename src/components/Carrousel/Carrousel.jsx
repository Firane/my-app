import leftArrow from "../../img/VectorGauche.png";
import rightArrow from "../../img/VectorDroite.png";
import { useState } from "react";
import PropTypes from "prop-types";

function Carrousel({ pictures }) {
  // Je défini un usestate correspondant a l'indexation de l'image affichée a l'écran.
  const [index, setIndex] = useState(0);

  // Je créer une fonction protégeant le cas de figure ou j'arrive en dessous de l'index 0, je le remet a l'indexation maximale, pour éviter d'être a l'index -1 par exemple
  function decrementCount() {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  // A l'inverse, ici j'évite d'arriver plus haut que le nombre d'image total. Je remet donc l'indexation a 0 lorsque j'atteint l'indexation maximale
  function incrementCount() {
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  // Je rend le composant carrousel, avec comme image source picture.index, la fonction increment/decrement sur le clic des fleches
  // et j'utilise une classe hidden en plus sur mes fleches pour les cachées seulement si il y a qu'une seule image comme convenu dans le briefing
  return (
    <>
      <div className="carrousel">
        <img
          className="carrousel__img"
          src={pictures[index]}
          alt="Illustration du logement"
        />
        <div
          className={
            pictures.length === 1
              ? "carrousel__arrows hidden"
              : "carrousel__arrows"
          }
        >
          <img
            src={leftArrow}
            alt="Fleche gauche"
            className="carrousel__arrows__leftArrow"
            id="left"
            onClick={decrementCount}
          />
          <img
            src={rightArrow}
            alt="Fleche droite"
            className="carrousel__arrows__rightArrow"
            id="right"
            onClick={incrementCount}
          />
        </div>
      </div>
    </>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Carrousel;
