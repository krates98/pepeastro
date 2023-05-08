import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HowToBuy from "./pages/Howtobuy";
import SpellCasting from "./pages/SpellCasting";
import Tokenomics from "./pages/Tokenomics";
import TopHeader from "./pages/TopHeader";

function App() {
  return (
    <>
      <Navbar />
      <HowToBuy />
      <TopHeader />
      <Header />
      <SpellCasting />
      <Tokenomics />
      <Footer />
    </>
  );
}

export default App;
