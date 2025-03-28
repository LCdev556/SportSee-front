import "../style/HelloBanner.scss";

const HelloBanner = ({ name }) => {
    return (
      
      <div className="HelloBanner">
       <h1>Bonjour <span>{name}</span> </h1>
       <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p> 
      </div>
    );
  };
  
  export default HelloBanner;