import PropTypes from "prop-types";

function Banniere({ img, id, alt, children }) {
  return (
    <div>
      <div className="banner">
        <div className="banner__content">
          <img className="banner__content__img" id={id} src={img} alt={alt} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Banniere;

Banniere.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};
