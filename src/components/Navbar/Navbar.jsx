import "../../sass/navbar.scss";
import NavItem from "./NavItem";

const Navbar = ({ companyName, navigation }) => {
  return (
    <nav className="navbar">
      <h1>{companyName}</h1>
      <ul>
        {navigation.map((item) => (
          <NavItem name={item.name} href={item.href} current={item.current} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
