import PropTypes from "prop-types";
import calorieIcon from "../assets/calorie-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbohydrateIcon from "../assets/carbs-icon.svg";
import lipidIcon from "../assets/fat-icon.svg";
import "../style/KeyDataCard.scss";

// Mapping des icônes et des unités pour chaque type de donnée
const icons = {
  calorieCount: { src: calorieIcon, alt: "Icône Calories", unit: "kCal" },
  proteinCount: { src: proteinIcon, alt: "Icône Protéines", unit: "g" },
  carbohydrateCount: { src: carbohydrateIcon, alt: "Icône Glucides", unit: "g" },
  lipidCount: { src: lipidIcon, alt: "Icône Lipides", unit: "g" },
};

/**
 * Composant affichant une carte de données clés (calories, protéines, glucides, lipides).
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.type - Le type de donnée à afficher (calories, protéines, glucides, lipides).
 * @param {number} props.value - La valeur de la donnée à afficher.
 * @returns {JSX.Element} - Un élément JSX représentant une carte de données avec une icône et la valeur.
 */
function KeyDataCard({ type, value }) {
  return (
    <div className="key-data-card">
      <img src={icons[type].src} alt={icons[type].alt} className="key-data-card__icon" />
      <div className="key-data-card__info">
        <p className="key-data-card__value">
          {value.toLocaleString()} {icons[type].unit}
        </p>
        <p className="key-data-card__label">{type === "calorieCount" ? "Calories" : type === "proteinCount" ? "Protéines" : type === "carbohydrateCount" ? "Glucides" : "Lipides"}</p>
      </div>
    </div>
  );
}

// Définition des types des propriétés du composant `KeyDataCard`
KeyDataCard.propTypes = {
  type: PropTypes.oneOf(["calorieCount", "proteinCount", "carbohydrateCount", "lipidCount"]).isRequired,
  value: PropTypes.number.isRequired,
};

export default KeyDataCard;