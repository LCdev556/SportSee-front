import "../style/Sidebar.scss";

/**
 * Composant représentant la barre latérale de navigation avec des icônes d'activités.
 *
 * @returns {JSX.Element} - La barre latérale contenant des boutons pour accéder à différentes activités et le copyright.
 */
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">

        <button className="sidebar__icon"><img src="../src/assets/yogaIcon.svg" alt="Yoga" /></button>

        <button className="sidebar__icon"><img src="../src/assets/swimIcon.svg" alt="Natation" /></button>

        <button className="sidebar__icon"><img src="../src/assets/bikeIcon.svg" alt="Cyclisme" /></button>

        <button className="sidebar__icon"><img src="../src/assets/fitnessIcon.svg" alt="Musculation" /></button>
      </nav>
      <p className="sidebar__copyright">Copyright SportSee {new Date().getFullYear()}</p>
    </aside>
  );
};

export default Sidebar;
