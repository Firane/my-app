import dropdownArrow from "../../img/arrow_back.png";
import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({ title, children }) {
  // Je déclare 2 useStage : la première servant a définir si mon dropdown est supposé être ouvert ou fermé
  // Le deuxieme, me permet de définir un état par défault du dropdown pour l'ouverture de la page : fermé.

  const [isOpen, setIsOpen] = useState(false);
  const [stayClosed, setStayClosed] = useState(true);

  // si c'est ouvert, je ferme, si c'est fermé, j'ouvre. Je définis le statut par default a false et le redéfinis pas, car il ne sera pas réutiliser
  function opener() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setStayClosed(false);
    }
  }

  // J'insère une condition ici, mon useState est ouvert, je met la classe qui correspond a l'ouverture, et inversement.
  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={opener}>
        {title}
        <img
          src={dropdownArrow}
          alt="Une fleche indiquant le déroulement du menu"
          className={
            isOpen === true
              ? " dropdown__button__arrow opened"
              : "dropdown__button__arrow closed"
          }
        />
      </button>
      {/* Ici j'ajoute une condition, celle du comportement par défault avec le useState Stayclosed */}
      <div
        className={`dropdown__container ${isOpen ? "showed" : "hidden"} ${
          stayClosed ? "default" : ""
        }`}
      >
        <div
          className={
            isOpen === true
              ? " dropdown__container__content showed"
              : "dropdown__container__content hidden"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Dropdown;
