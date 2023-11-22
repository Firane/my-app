import { NavLink } from "react-router-dom";

// Importation de NavLink pour le lien de redirection

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}

export default NotFound;
