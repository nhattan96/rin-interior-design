import Home from "module/home/home";
import "./App.css";
import Contact from "./module/contact/contact";
import Footer from "./module/footer/footer";
import Header from "./module/header/header";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <>
          <Header></Header>
          <Home></Home>
          <Contact></Contact>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default App;
