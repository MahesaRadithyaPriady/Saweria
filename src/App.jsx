import GambarSaweriaReady from "./components/GambarSaweriaReady";
import CardEmpat from "./components/CardE";
import BtnTutorial from "./components/BtnSectionBottom";
import Footer from "./components/Footer";
import CardWithHeader from "./fragments/CardWithHeader";
import Header from "./fragments/Header";
import HeroSectionPage from "./fragments/HeroSection";
import CardPaymentMethodPage from "./fragments/CardPaymentMethod";
import Navbar from "./components/Navbar";
const CrudHome = () => {
  return (
    <>
      <Header />
      <div className="container">
        <HeroSectionPage />
        <CardPaymentMethodPage />
        <CardWithHeader header="starting out">
          <div className="kartu kartu-border card " style={{ width: "90vh" }}>
            <div className="card-body">
              <ol className="pt-3">
                <li>Register your account</li>
                <li>Verify your account</li>
                <li>Choose and set your overlay</li>
                <li>Don’t forget to put the QR and your Saweria link</li>
                <li>Say thank you to your tipper!</li>
              </ol>
            </div>
          </div>
        </CardWithHeader>
        <GambarSaweriaReady />
        <CardWithHeader header="Pricing">
          <div
            className="container kartu kartu-border card "
            style={{ width: "90vh" }}
          >
            <div className="card-body d-flex flex-row ms-4">
              <h5 className="w-50">
                Every transaction will be charged with a 10% platform fee (5-6%
                for Indonesia) with a minimum of 1.5 PHP (Rp150 for Indonesia)
                Cashout to your bank/e-wallet will be charged with transfer fee
                of IDR 5.000 / PHP 50
              </h5>
              <div className="ms-5 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraccoon_happy.e82cc2b2.svg&w=384&q=75"
                  alt="Uyuu"
                  width={"160px"}
                  className="ms-3"
                />
              </div>
            </div>
          </div>
        </CardWithHeader>
        <CardEmpat />
        <BtnTutorial />
        <Footer />
      </div>
    </>
  );
};

export default CrudHome;
