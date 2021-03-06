
import Menu from "./components/Menu";
import Egg from "./components/Egg";
import LearnMoreBoxOne from "./components/LearnMoreBoxOne";
import PinkCup from "./components/PinkCup";
import LearnMoreBoxTwo from "./components/LearnMoreBoxTwo";
import Cherries from "./components/Cherries";
import Orange from "./components/Orange";
import Testimonials from "./components/Testimonials";
import FourSquare from "./components/FourSquare";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app-container">
      <Menu />

      <div className={"app-egg-learn-more-combo"}>
        <Egg />

        <LearnMoreBoxOne />
      </div>
      
      <div className={"app-cup-learn-more-combo"}>
        <PinkCup />

        <LearnMoreBoxTwo />
      </div>
      
      <div className={"app-cherries-orange-combo"}>
        <Cherries />

        <Orange />
      </div>
      

      <Testimonials />

      <FourSquare />

      <Footer />
    </div>
  );
}

export default App;
