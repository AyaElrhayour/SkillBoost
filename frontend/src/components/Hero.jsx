import Button from "../shared/Button";
import Navigation from "../shared/Navigation";



const Hero = () => {
  return (
    <div className=" px-32 bg-[#7FB5FF] rounded-b-[300px]">
      <Navigation />
      <div className="flex gap-8 items-center">
        <div className="flex flex-col items-start gap-8 w-2/3">
          <h1 className="text-5xl font-bold text-white ">
            <span className="text-[#001D6E] ">Studying</span> Online is now much
            easier
          </h1>
          <p className="text-2xl text-left text-white">
            SkillBoost is an interesting platform that will teach you in more an
            interactive way
          </p>
          <Button bgColor="bg-red-100" textSize="text-lg" content={"Join for free"} />
        </div>
        <div>
          <img src="/src/assets/heropic.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
