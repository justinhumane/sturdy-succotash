import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

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
    </>
  );
}

export default App;
