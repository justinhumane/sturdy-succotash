import "../../sass/navbar.scss";
import NavItem from "./NavItem";
import PropTypes from "prop-types";

const Navbar = ({ companyName, navigation }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>{companyName}</h1>
        <ul>
          {navigation.map((item) => (
            <NavItem name={item.name} href={item.href} current={item.current} key={item.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
//Added typechecking
Navbar.propTypes = {
  companyName: PropTypes.string,
  navigation: PropTypes.array,
};

export default Navbar;
