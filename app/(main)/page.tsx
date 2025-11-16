import Navbar from "./_components/navbar";
import Cocktails from "./cocktails/page";
import Hero from "./hero/page";

const Home = () => {

  return ( 
    <div className="">
      <Navbar/>
      <Hero />
      <Cocktails />
    </div>
  );
}

export default Home;
