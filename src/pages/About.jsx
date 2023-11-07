import aboutImage from "../img/online.jpg";

const About = () => {
  return (
    <div className="bg-red h-screen mx-auto flex flex-col justify-center items-center">
      <div className="flex  flex-col-reverse md:flex-row w-full h-3/4 justify-center items-center xl:flex-row xl:items-end mt-6 xl:mt-24">
        <div className=" w-full xl:w-1/2 h-2/3 xl:h-full">
          <img src={aboutImage} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="w-full xl:w-1/2 h-full p-4 flex flex-col justify-center ">
          <h4 className="text-center text-4xl xl:text-7xl">About us</h4>
          <p className="leading-8 p-2 font-semibold">
            "Welcome to our company, where your shopping experience is our top
            priority. We pride ourselves on offering a vast selection of
            products that cater to your every need. Our team is committed to
            providing a secure, convenient, and enjoyable shopping journey. Join
            us in exploring endless opportunities and exceptional deals."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
