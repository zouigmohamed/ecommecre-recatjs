import aboutImage from "../img/online.jpg";
const About = () => {
  return (
    <div className="h-[800px] mt-36 p-10  ">
      <h3 className="text-3xl underline font-bold tracking-[8px] text-center">
        About us
      </h3>
      <div className="flex gap-3 justify-center h-auto p-4">
        <div className="bg-red h-[600px] w-1/2   ">
          <img
            src={aboutImage}
            alt="about"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="bg-red h-auto w-1/2 my-auto flex flex-col justify-around">
          <p className="leading-[60px] text-lg">
            At our company , we're dedicated to delivering the finest products
            to your doorstep. With a passion for quality and innovation, we aim
            to provide you with a seamless shopping experience. Our mission is
            to bring you the latest trends, unmatched customer service, and
            unbeatable value. Discover a world of possibilities with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
