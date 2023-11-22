import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Thumbs({ logements }) {
  return (
    <>
      {logements.map((logement, index) => (
        <Link to={logement.id} key={index}>
          <article className="location__Thumb">
            <div className="location__Thumb__img">
              <img src={logement.cover} alt="Illustration du logement" />
              <h2 className="location__Thumb__img__title">{logement.title}</h2>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}

Thumbs.propTypes = {
  logements: PropTypes.arrayOf(PropTypes.object),
};

export default Thumbs;
