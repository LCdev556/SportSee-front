import KeyDataCard from "./KeyDataCard";
import PropTypes from "prop-types";
import "../style/KeyDataSection.scss";

/**
 * Composant affichant une section de données clés, chaque donnée étant présentée par une carte.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.keyData - Les données clés à afficher (calories, protéines, glucides, lipides).
 * @returns {JSX.Element} - Un élément JSX représentant la section de données clés, avec une carte pour chaque donnée.
 */
function KeyDataSection({ keyData }) {
  return (
    <section className="key-data-section">
      {Object.entries(keyData).map(([key, value]) => (
        <KeyDataCard key={key} type={key} value={value} />
      ))}
    </section>
  );
}

// Définition des types des propriétés du composant `KeyDataSection`
KeyDataSection.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};

export default KeyDataSection;