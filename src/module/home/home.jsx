import "./home.css";
import homeImg2 from "../../assets/imgs/home2.jpg";
import ImgsChange from "module/common/imgs-change/imgs-change";
import MasonryLayout from "module/common/masonry/masonry";
import AnimatedText from "module/common/animated-text/animated-text";

const Home = () => {
  const introImgs = [
    "https://images.pexels.com/photos/7060827/pexels-photo-7060827.jpeg",
    "https://images.pexels.com/photos/6480206/pexels-photo-6480206.jpeg",
    "https://images.pexels.com/photos/6587847/pexels-photo-6587847.jpeg",
    "https://images.pexels.com/photos/6480214/pexels-photo-6480214.jpeg",
    "https://images.pexels.com/photos/6480194/pexels-photo-6480194.jpeg",
    "https://images.pexels.com/photos/6587842/pexels-photo-6587842.jpeg",
    "https://images.pexels.com/photos/6480196/pexels-photo-6480196.jpeg",
    "https://images.pexels.com/photos/6587856/pexels-photo-6587856.jpeg",
    "https://images.pexels.com/photos/6587864/pexels-photo-6587864.jpeg",
    "https://images.pexels.com/photos/6480213/pexels-photo-6480213.jpeg",
    "https://images.pexels.com/photos/6480193/pexels-photo-6480193.jpeg",
    "https://images.pexels.com/photos/6480204/pexels-photo-6480204.jpeg",
  ];

  const gallery = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/300?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/600?random=5",
    "https://picsum.photos/800/800?random=6",
    "https://picsum.photos/400/600?random=7",
    "https://picsum.photos/800/900?random=8",
    "https://picsum.photos/300/600?random=9",
    "https://picsum.photos/800/600?random=10",
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/500/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/300/600?random=5",
  ];

  return (
    <div className="container home">
      <section id="home" className="intro">
        <div className="left">
          <h1>
            <AnimatedText text={"Rin Design"} type={"character"}></AnimatedText>
          </h1>
          <p>
            <br />
            <AnimatedText
              text={"We transform spaces into inspiring interiors. Let us bring your vision to life."}
              type={"word"}
            ></AnimatedText>
          </p>

          <a href="#services" className="btn">
            Discover Our Services
          </a>
        </div>
        <div className="right">
          <h2>LET'S MAKE YOUR DREAM COME TRUE</h2>
          <ImgsChange
            images={introImgs}
            time="5000"
            className="img-front"
          ></ImgsChange>

          <img className="img-behind" src={homeImg2} alt="homeImg2" />
        </div>
      </section>
      <br />
      <hr />
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <img
            src="https://images.pexels.com/photos/6480204/pexels-photo-6480204.jpeg"
            alt="Service 1"
          ></img>
          <h3>Residential Design</h3>
          <p>Customized interior design solutions for homes and apartments.</p>
        </div>
        <div className="service-item">
          <img
            src="https://images.pexels.com/photos/6480204/pexels-photo-6480204.jpeg"
            alt="Service 2"
          ></img>
          <h3>Commercial Design</h3>
          <p>
            Functional and aesthetic design for coffee shop, offices, retail
            spaces, and more.
          </p>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        {/* <div className="gallery-carousel">
          <img
            src="https://images.pexels.com/photos/6480204/pexels-photo-6480204.jpeg"
            alt="Interior Design"
          />
        </div> */}
        <h2>Gallery</h2>
        <div className="gallery">
          <MasonryLayout
            custom={{
              default: 5,
              1100: 4,
              700: 2,
              500: 2,
            }}
            items={gallery}
          ></MasonryLayout>
        </div>
      </section>
    </div>
  );
};

export default Home;
