import logo from "../../img/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__img">
        <img className="header__img__file" src={logo} alt="Logo de Kasa" />
      </div>
      <div className="header__links">
        {/* J'utilise une fonction de navlink qui permet de savoir sur quelle page on est, et de définir une classe selon si c'est sur ce lien qu'on est ou non. */}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "header__links__content active"
              : "header__links__content"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "header__links__content header__links__content__secondary active"
              : "header__links__content header__links__content__secondary"
          }
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
