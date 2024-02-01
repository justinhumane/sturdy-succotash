import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./sass/index.scss";

const navigation = [
  { id: 1, name: "Hem", href: "/", current: true },
  { id: 2, name: "Produkter", href: "/produkter", current: false },
  { id: 3, name: "Kontakt", href: "/kontakt", current: false },
];

function App() {
  return (
    <>
      <Navbar companyName={"Coolt företagsnamn"} navigation={navigation} />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
