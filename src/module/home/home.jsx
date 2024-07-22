import "./home.css";
import homeImg from "../../assets/imgs/home.jpg";
import homeImg2 from "../../assets/imgs/home2.jpg";

const Home = () => (
  <div className="container home">
    <section id="home" className="intro">
      <div className="left">
        <h1>RIN DESIGN</h1>
        <p>
          We transform spaces into inspiring interiors. <br /> Let us bring your
          vision to life.
        </p>
      </div>
      <div className="right">
        <h2>LET'S MAKE YOUR DREAM COME TRUE</h2>
        <img className="img-front" src={homeImg} alt="homeImg" />
        <img className="img-behind" src={homeImg2} alt="homeImg2" />
      </div>
      {/* <div className="">
       
        <a href="#services" className="btn">
          Discover Our Services
        </a>
      </div> */}
    </section>
    {/* 
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-item">
          <img src="service1.jpg" alt="Service 1"></img>
          <h3>Residential Design</h3>
          <p>Customized interior design solutions for homes and apartments.</p>
        </div>
        <div className="service-item">
          <img src="service2.jpg" alt="Service 2"></img>
          <h3>Commercial Design</h3>
          <p>
            Functional and aesthetic design for offices, retail spaces, and
            more.
          </p>
        </div>
      </div>
    </section>

    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="gallery-carousel">
          <div className="slider">
            <div>
              <img src="portfolio1.jpg" alt="Portfolio 1"></img>
            </div>
            <div>
              <img src="portfolio2.jpg" alt="Portfolio 2"></img>
            </div>
            <div>
              <img src="portfolio3.jpg" alt="Portfolio 3"></img>
            </div>
          </div>
        </div>
        <h2>Gallery</h2>
        <div className="gallery-pinterest">
          <div>
            <img src="gallery1.jpg" alt="Gallery 1"></img>
          </div>
          <div>
            <img src="gallery2.jpg" alt="Gallery 2"></img>
          </div>
          <div>
            <img src="gallery3.jpg" alt="Gallery 3"></img>
          </div>
          <div>
            <img src="gallery4.jpg" alt="Gallery 4"></img>
          </div>
          <div>
            <img src="gallery5.jpg" alt="Gallery 5"></img>
          </div>
          <div>
            <img src="gallery6.jpg" alt="Gallery 6"></img>
          </div>
        </div>
      </div>
    </section> */}
  </div>
);

export default Home;
