import "./App.css";
import Ensure from "./Ensure/Ensure";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import FrontPage from "./FrontPage/FrontPage";
import NavBar from "./Header/NavBar";
import Journey from "./Journey/Journey";
import Steps from "./Steps/Steps";
import Why from "./Why/Why";
import Worked from "./Worked/Worked";

function App() {
  return (
    <>
      <NavBar />
      <FrontPage />
      <Steps />
      <Worked />
      <Ensure />
      <Journey />
      <Why />
      <FAQ />
      <Footer/>
   </>
  );
}

export default App;
