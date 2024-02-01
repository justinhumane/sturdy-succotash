import "../../sass/footer.scss"
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
return (
   <footer className="footer">
    <button><FaGithub /></button>
    <button><FaTwitter /></button>
    <button><FaInstagram /></button>
    <button><FaLinkedin /></button>
   </footer>
);
}

export default Footer;
