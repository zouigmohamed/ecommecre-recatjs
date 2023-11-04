import { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { SideBareContext } from "../contexts/SidebarContext";
import logo from "../img/logo.svg";
const Header = () => {
  const [isActive , setIsActive]= useState(true)
  const { setIsOpen, isOpen } = useContext(SideBareContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
  })
})
  return (
<header className={`${isActive ? "bg-white py-4 shadow-2xl" : "bg-transparent py-6"} fixed w-full z-50 h-20  transition-all`}>
  <div className="flex container mx-auto items-center justify-between h-full relative ">
    <Link to={"/"}>
      <div className="">
        <img src={logo} alt="" className="w-[40px]" />
      </div>
    </Link>
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
      <BsBag className="text-2xl" />
      <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] m-auto flex justify-center items-center rounded-full h-[18px] text-white">
        {itemAmount}
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;
