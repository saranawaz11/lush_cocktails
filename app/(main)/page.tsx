import Navbar from "./_components/navbar";
import About from "./about/page";
import Art from "./art/page";
import Cocktails from "./cocktails/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Menu from "./menu/page";

const Home = () => {

  return ( 
    <div className="">
      <Navbar/>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </div>
  );
}

export default Home;
