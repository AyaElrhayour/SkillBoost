import Description from "../components/Description";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import OurFeatures from "../components/OurFeatures";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <Hero />
      <Description />
      <Introduction />
      <OurFeatures />
      <Footer/>
    </div>
  );
};

export default Home;
