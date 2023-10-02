import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import "./Footer.css"
import useTheme from '../../hooks/useTheme';

const Footer = () => {
  const { footerColor } = useTheme();
  return (
    <footer className={
      footerColor ? "footer-container home-footer-background" :"footer-container" }>
      <address>
        Readwell Bookstore<br />
        123 Bookworm Lane<br />
        Your City, ST 12345<br />
      </address>
      <p>Or give us a call at: <a href="tel:+1234567890">(123) 456-7890</a></p>
      <ul>
        <li><a href="#"><BsFacebook /></a></li>
        <li><a href="#"><BsTwitter /></a></li>
        <li><a href="#"><BsInstagram /></a></li>
      </ul>
      <p>&copy; 2023 Readwell</p>
    </footer>
  );
};

export default Footer;
