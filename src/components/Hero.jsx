import womanImage from "../img/woman_hero.png"
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className=" h-[800px] bg-hero bg-no-repeat bg-center py-24">
    <div className="container mx-auto flex justify-around h-full">
      <div className="flex flex-col justify-center">
        <div className="font-semibold flex items-center uppercase">
          <div className="w-10 h-[2px] bg-red-500 mr-3"></div>new trends
        </div>
        <h1 className="uppercase text-[70px] leading-[1.1] font-light mb-4">autumn sale stylish <br />
        <span className="uppercase font-semibold">Womans</span>
        </h1>
        <Link to={"/products"} className="self-start uppercase font-semibold border-b-2 border-primary">discover more</Link>
      </div>
      <div className="hidden lg:block">
        <img src={womanImage} />
      </div>
    </div>
  </section>;
};

export default Hero;
