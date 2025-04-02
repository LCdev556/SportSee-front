import PropTypes from "prop-types";
import "../style/HelloBanner.scss";

/**
 * Composant affichant un message de bienvenue personnalisé.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.name - Le nom de l'utilisateur à afficher dans le message de bienvenue.
 * @returns {JSX.Element} - Un élément JSX contenant le message de bienvenue personnalisé.
 */
const HelloBanner = ({ name }) => {
  return (
    <div className="HelloBanner">
      <h1>Bonjour <span>{name}</span> </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p> 
    </div>
  );
};

// Définition des types des propriétés du composant `HelloBanner`
HelloBanner.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloBanner;