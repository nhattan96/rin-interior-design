import logo from "../../assets/imgs/logo.png";

const Header = () => (
  <header>
    <div className="container">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
