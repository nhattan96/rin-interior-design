import "./App.css";
import Contact from "./module/contact/contact";
import Footer from "./module/footer/footer";
import Header from "./module/header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <section id="home" className="hero">
        <div className="container">
          <h2>Welcome to Our Interior Design Studio</h2>
          <p>
            We transform spaces into inspiring interiors. Let us bring your
            vision to life.
          </p>
          <a href="#services" className="btn">
            Discover Our Services
          </a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-item">
            <img src="service1.jpg" alt="Service 1"></img>
            <h3>Residential Design</h3>
            <p>
              Customized interior design solutions for homes and apartments.
            </p>
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
      </section>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
