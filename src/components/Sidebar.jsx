// import { Link } from "react-router-dom";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
// import CartItem from "../components/CartItem"
import { Link } from "react-router-dom";
import { SideBareContext } from "../contexts/SidebarContext";
const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const { isOpen, handleClose } = useContext(SideBareContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  bg-white fixed top-0 h-full  w-full z-50 shadow-2xl md:w-[40vw] xl:max-w-[45vw] flex flex-col justify-between transition-all duration-300  px-4 lg:px-[35px] `}
    >
      <div className="flex items-center justify-between py-6 flex-row border-b  ">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={() => handleClose()}
          className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-sm bg-orange-700/40"
        >
          <IoMdArrowForward className="text-3xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[120px] lg:h-[440px] sm:h-[400px]  flex-grow overflow-y-auto ">
        {cart.length === 0 ? (
          <h1 className="w-3/4 rounded-md mx-auto text-center py-8  px-2 uppercase leading-10 border-4  border-bg-slate-500/30 my-5">
            no items added to your cart yet{" "}
          </h1>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className="flex flex-col ">
        <div className="border-4 border-bg-pink-200 w-full p-2 mt-2  rounded-lg flex justify-between items-center font-semibold capitalize">
          <div>
            <span className="mr-2">total : </span>${" "}
            {parseFloat(total.toFixed(2))}
          </div>
          <div
            onClick={() => clearCart()}
            className={`${
              cart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
            } py-4 bg-rose-600  text-white w-12 h-12 flex justify-center items-center text-xl border-2 border-transparent rounded-lg transition-all duration-300 hover:bg-transparent hover:text-black hover:border-rose-600`}
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="flex flex-col justify-between  mt-4 tracking-[10px] ">
          <Link
            className={`${
              cart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
            } uppercase bg-gray-200 p-4 flex justify-center items-center font-medium rounded-lg  text-primary w-full `}
          >
            view cart
          </Link>
          <Link
            className={`${
              cart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
            } uppercase bg-primary text-white p-4 flex justify-center items-center font-medium rounded-lg    my-2 w-full `}
          >
            check out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
