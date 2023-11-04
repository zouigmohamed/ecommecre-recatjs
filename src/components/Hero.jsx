import { Link } from "react-router-dom";
import womanImage from "../img/woman_hero.png";
const Hero = () => {
  return (
    <section className=" h-[800px] bg-hero bg-no-repeat bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className=" gap-2">
              <div className="flex justify-start items-center">
                <div className="w-10 h-[2px] bg-red-500 mr-3"></div>new trends
              </div>
              <div className="flex justify-start items-center">
                <div className="w-10 h-[2px] bg-orange-500 mr-3"></div>new
                electronic gadgets
              </div>{" "}
            </div>
          </div>
          <h1 className="uppercase text-[70px] leading-[1.1] font-light mb-4">
            autumn sale stylish <br />
            <span className="uppercase font-semibold">women & men </span>
          </h1>
          <Link
            to={"/product"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            discover more
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={womanImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
