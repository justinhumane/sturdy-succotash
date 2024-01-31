const NavItem = ({ name, href, current }) => {
  return (
    <li className={current ? "current" : ""}>
      <a href={href}>{name}</a>
    </li>
  );
};

export default NavItem;
