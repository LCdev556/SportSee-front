import KeyDataCard from "./KeyDataCard";
import PropTypes from "prop-types";
import "../style/KeyDataSection.scss";

function KeyDataSection({ keyData }) {
  return (
    <section className="key-data-section">
      {Object.entries(keyData).map(([key, value]) => (
        <KeyDataCard key={key} type={key} value={value} />
      ))}
    </section>
  );
}

KeyDataSection.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};

export default KeyDataSection;