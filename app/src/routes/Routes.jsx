import { Home, Profil, Setting, Community } from "./index";
import { Routes, Route } from "react-router-dom";

/**
 * Composant contenant la configuration des routes de l'application.
 * @returns {JSX.Element} Routes de l'application.
 */
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/community" element={<Community />} />
        
      </Routes>
    );
  };
  
  export default AppRoutes;