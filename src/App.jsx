import HeroPage from "./components/Hero";
import Navbar from "./components/Navbar";
import SaweriaLogo from "./components/SaweriaLogo";
import CardP from "./components/CardP";
import CardK from "./components/CardK";
import StartingOut from "./components/StartingOut";
import GambarSaweriaReady from "./components/GambarSaweriaReady";
import PricingCard from "./components/PricingCard";
import CardTiga from "./components/CardT";
import CardEmpat from "./components/CardE";
import BtnTutorial from "./components/BtnTutorial";
import Footer from "./components/Footer";
const CrudHome = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SaweriaLogo />
        <CardP />
        <StartingOut />
        <CardK />
        <GambarSaweriaReady />
        <PricingCard />
        <CardTiga />
        <CardEmpat />
        <BtnTutorial />
        <Footer />
      </div>
    </>
  );
};

export default CrudHome;
