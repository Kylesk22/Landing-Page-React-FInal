import logo from './logo.svg';
import './App.css';
import './AppB.css';
import Card from './Component/Card';
import Jumbotron from './Component/Jumbotron';
import Navbar from './Component/Navbar';
import Pic1 from './Images/Pic1.jpg';
import Pic2 from './Images/Pic2.jpg';
import Pic3 from './Images/Pic3.jpg';
import Pic4 from './Images/Pic4.jpg';

function App() {
  return (
    <div className="App container">
      
      <Navbar />
      <Jumbotron />
      <div className="allCards">
        <Card cardImage={Pic1} cardTitle={"CODING"} cardText={"coding ABCs"}/>
        <Card cardImage={Pic2} cardTitle={"IS"} cardText={"A = Always"}/>
        <Card cardImage={Pic3} cardTitle={"SO"} cardText={"B = Be"}/>
        <Card cardImage={Pic4} cardTitle={"Awesome!"} cardText={"C = Coding"} />
      </div>
    </div>
  
  );
}

export default App;
