import PropTypes from "prop-types";

const NavItem = ({ name, href, current }) => {
  return (
    <li className={current ? "current" : ""}>
      <a href={href}>{name}</a>
    </li>
  );
};
//Added Typechecking with PropTypes
NavItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  current: PropTypes.bool,
};
export default NavItem;
