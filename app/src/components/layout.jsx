import { NavLink } from "react-router-dom";
import "../style/layout.scss"; 
import Sidebar from "./Sidebar";

/**
 * Composant de mise en page pour rendre la structure de la page
 * @param {object} props - Les propriétés passées au composant
 * @param {React.ReactNode} props.children - Le contenu à afficher à l'intérieur de la mise en page
 * @returns {JSX.Element} Le composant de mise en page rendu
 */
function Layout({ children }) {
  return (
    <div className="layout"> {/* Conteneur principal pour toute la mise en page */}
      
      <header className="layout__header"> {/* En-tête contenant le logo et la navigation */}
        <img className="layout__headerlogo" src="../src/assets/logo.svg"/> {/* Logo du header */}
        
        <nav className="hearderNavLinks"> {/* Menu de navigation */}
          <ul> {/* Liste des liens de navigation */}
            <li>
                <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Accueil
                </NavLink>
            </li>
            
            <li>
                <NavLink
                to="/profil"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Profil
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/setting"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Réglage
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/community"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Communauté
                </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="layout__body"> 
        <Sidebar /> 
        
        <main className="layout__content"> 
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout; 