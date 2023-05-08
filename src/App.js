import "./App.css";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;
