import Home from "module/home/home";
import "./App.css";
import Contact from "./module/contact/contact";
import Footer from "./module/footer/footer";
import Header from "./module/header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
