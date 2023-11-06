import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { socialMediaData } from "../data/Data";
const Contact = () => {
  return (
    <div className=" bg-gray-100  ">
      <div className="container mx-auto flex h-full mb-0">
        <section className="text-gray-600 body-font container flex flex-col ">
          <div className="container px-5 pt-32 mx-auto mb-0 flex flex-col ">
            <div className="flex flex-col text-center justify-between w-full mb-2">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                in our Company, we are committed to providing the best shopping
                experience for our valued customers. If you have any questions,
                concerns, or feedback, our dedicated customer support team is
                here to assist you. Whether you need assistance with an order,
                have inquiries about our products, or simply want to share your
                thoughts, we're just a message away. Please feel free to reach
                out to us via email or use the contact form on this page. We aim
                to respond to your inquiries promptly and ensure that your
                shopping experience with us is smooth and enjoyable. Thank you
                for choosing our company for your shopping needs. We look
                forward to hearing from you and providing the best service
                possible..
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto h-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full ">
                  <button className="flex  capitalize mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    submit
                  </button>
                </div>
                <div className="p-2 w-auto mx-auto pt-8 mt-8 border-t border-gray-200 text-center ">
                  <a className="text-indigo-500">example@email.com</a>
                  <p className="leading-normal my-5">
                    49 Street Street
                    <br />
                    city , city 56301
                  </p>
                  <span className="flex justify-center items-center w-auto mx-auto py-2  ">
                    {socialMediaData.map((socialMedia) => (
                      <a
                        key={socialMedia.name}
                        href={socialMedia.url}
                        target="_blank"
                            rel="noopener noreferrer"
                            className="mx-4"
                      >
                        {socialMedia.icon === "FaFacebookSquare" && (
                          <FaFacebookSquare />
                        )}
                        {socialMedia.icon === "FaTwitterSquare" && (
                          <FaTwitterSquare />
                        )}
                        {socialMedia.icon === "FaInstagramSquare" && (
                          <FaInstagramSquare />
                        )}
                        {socialMedia.icon === "FaLinkedin" && <FaLinkedin />}
                        {socialMedia.icon === "FaYoutubeSquare" && (
                          <FaYoutubeSquare />
                        )}
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
