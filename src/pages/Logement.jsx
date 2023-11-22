import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Dropdown from "../components/Dropdown/Dropdown";
import Tag from "../components/Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  // On récupère l'id dans l'url
  let { id } = useParams();

  // Déclaration de la variable du logement, ainsi que de la variable qui servira a définir si notre fetch est en loading ou non
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  // Je déclare un useEffect pour fetch avec comme parametre l'id récupéré plus haut.

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await fetch("logements.json");
      const result = await response.json();
      const data = result.find((object) => object.id === id);
      setLoading(false);

      // On déclare le loading terminé
      if (data) {
        setLogement(data);
      }
    } catch (error) {
      console.error("Error fetching data :", error);
    }
  };

  // Si le loading est true alors on met une animation de chargement
  if (loading) {
    return (
      <>
        <div className="lds-dual-ring"></div>
      </>
    );
  } else {
    // Si l'id ne correspond a rien, redirection vers la page notfound
    if (logement === null) {
      return <Navigate to="/NotFound" />;
    } else {
      // Sinon, si tout ce passe bien, je genere le contenu attendu.
      function ratingGenerator() {
        // Je déclare le rating du logement, ainsi qu'un tableau pour dans l'avenir contenir les éléments nécessaire a l'affichage des étoiles de notation.
        const rated = parseInt(logement.rating);
        const content = [];
        // tant que i est inférieur a la note finale, j'ajoute une étoile orange. Si ça atteint le nombre maximal detoiles, cad 5, je retourne l'élément comme il est.
        // Sinon, je le complete avec mes étoiles grises jusqu'à avoir un total de 5 étoiles de couleurs différentes. Je retourne ensuite mes 5 etoiles bicolores.
        for (let i = 0; i < rated; i++) {
          content.push(
            <li key={i}>
              <FontAwesomeIcon icon={faStar} />
            </li>
          );
        }
        if (content.length === 5) {
          return content;
        } else {
          for (let i = content.length; i < 5; i++) {
            content.push(
              <li key={i} className="grey">
                <FontAwesomeIcon icon={faStar} />
              </li>
            );
          }
        }
        return content;
      }

      // Je vais chercher les infos dynamiques que je souhaite dans le tableau logement déclaré et fetché au début. Je joue ma fonction pour les étoiles a l'intérieur du ul.
      return (
        <>
          <Carrousel pictures={logement.pictures} />
          <section className="logement__content">
            <div>
              <div className="logement__content__left">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <Tag tags={logement.tags} />
              </div>
              <div className="logement__content__right">
                <div className="logement__content__right__host">
                  <div className="logement__content__right__host__name">
                    {logement.host.name.split(" ").join("\n")}
                  </div>
                  <div className="logement__content__right__host__picture">
                    <img src={logement.host.picture} alt="Hebergeur" />
                  </div>
                </div>
                <div className="logement__content__right__stars">
                  <ul>{ratingGenerator()}</ul>
                </div>
              </div>
            </div>

            {/* ici j'itère dans mon tableau d'équipements pour générer un li contenant la valeur de l'équipement. Je passe un argument key= parceque pour react il est nécéssaire
de donner une clé a chacun de mes éléments ici présents. */}
            <div className="dropdowns">
              <Dropdown title="Description">
                <p>{logement.description}</p>
              </Dropdown>
              <Dropdown title="Équipements">
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Dropdown>
            </div>
          </section>
        </>
      );
    }
  }
}

export default Logement;
