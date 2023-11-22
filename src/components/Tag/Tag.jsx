import PropTypes from "prop-types";

function Tag({ tags }) {
  return (
    <ul className="tag">
      {tags.map((tag, index) => (
        <li key={index} className="tag__element">
          {tag}
        </li>
      ))}
    </ul>
  );
}

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Tag;
