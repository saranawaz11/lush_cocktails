import Navbar from "./_components/navbar";
import About from "./about/page";
import Art from "./art/page";
import Cocktails from "./cocktails/page";
import Hero from "./hero/page";

const Home = () => {

  return ( 
    <div className="">
      <Navbar/>
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </div>
  );
}

export default Home;
