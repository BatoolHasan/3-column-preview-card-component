import './App.css';
import Card from "./components/Card";
import luxuryIcon from "./images/icon-luxury.svg";
import luxurySedans from "./images/icon-sedans.svg";
import luxurySuvs from "./images/icon-suvs.svg";
function App() {
  const cards = [
    {
      backgroundColor:"hsl(31, 77%, 52%)",
      imgSrc: luxurySedans,
      title:"sedans",
      body:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
    {
      backgroundColor:"hsl(184, 100%, 22%)",
      imgSrc: luxurySuvs,
      title:"suvs",
      body:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    },
    {
      backgroundColor:"hsl(179, 100%, 13%)",
      imgSrc: luxuryIcon,
      title:"luxury",
      body:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    }
  ];
  return (<main>
    <div className="container">
      <div className="container--cards">
        {cards.map((card,i)=>(
          <Card key={i} backgroundColor={card.backgroundColor} imgSrc={card.imgSrc} title={card.title} body={card.body}/>
        ))}
      </div>
      <footer>
        <div>
          Challenge by <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/BatoolHasan/3-column-preview-card-component">Batool H.</a>
        </div>
      </footer>
    </div>
    </main>
  );
}

export default App;
