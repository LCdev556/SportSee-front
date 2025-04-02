import { NavLink } from "react-router-dom";
import "../style/layout.scss"; 
import Sidebar from "./Sidebar";

/**
 * Composant de mise en page pour structurer la page avec un en-tête, un menu de navigation et un corps principal.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {React.ReactNode} props.children - Le contenu à afficher dans la partie principale de la mise en page.
 * @returns {JSX.Element} - Le composant de mise en page avec l'en-tête, le menu et le contenu principal.
 */
function Layout({ children }) {
  return (
    <div className="layout"> 
      
      <header className="layout__header"> 
        <img className="layout__headerlogo" src="../src/assets/logo.svg" alt="Logo" /> 
        
        <nav className="hearderNavLinks"> 
          <ul> 
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