import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { SideBareContext } from "../contexts/SidebarContext";
import { navLinks } from "../data/Data";
const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { setIsOpen, isOpen, handleClose } = useContext(SideBareContext);
  const { itemAmount } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-2xl" : "bg-transparent py-6"
      } fixed w-full z-50 h-20  transition-all top-0 `}
    >
      <div className="flex container mx-auto items-center  justify-between h-full relative   ">
        <Link to={"/home"}
        onClick={() => {
          handleClose();
        }}
        >
          <div className="" >
            <AiOutlineShop className="text-4xl" />
          </div>
        </Link>

        <div className=" mx-auto w-full">
        <div className="flex-row  mx-auto   p-4  w-full  rounded-xl  justify-center capitalize    items-center hidden md:flex">
          {navLinks.map((link) => (
            <Link
              to={`${link.url}`}
              key={link.text}
              onClick={() => handleClose()}
            >
              <div className="hover:bg-slate-600/10 p-2 rounded-md  text-lg">
                <h3>{link.text}</h3>
              </div>
            </Link>
          ))}
        </div>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative mx-auto"
        >
          <BsBag className="text-2xl flex mx-auto" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] m-auto flex justify-center items-center rounded-full h-[18px] text-white">
            {itemAmount}
          </div>
        </div>
        <a onClick={() => setToggle(!toggle)}>
          <div className="block md:hidden cursor-pointer rounded-full ml-4 hover:bg-slate-200 p-2 ">
            {toggle ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </a>
        <div
          className={`${
            toggle
              ? "flex-col absolute top-16 p-4 border-b-2 w-full right-0 bg-gray-300 rounded-b-lg flex justify-center capitalize   items-start"
              : "hidden"
          } md:hidden `}
        >
          {navLinks.map((link) => (
            <Link
              to={`${link.url}`}
              className="w-full"
              key={link.text}
              onClick={() => {
                setToggle(false);
                handleClose();
              }}
            >
              <div className="hover:bg-slate-600 hover:ml-2 transition-all duration-300 p-2 rounded-lg hover:text-white text-lg   ">
                <h3>{link.text}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
