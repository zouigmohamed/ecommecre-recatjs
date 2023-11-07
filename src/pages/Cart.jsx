// import { Link } from "react-router-dom";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className="mt-20 container mx-auto h-auto   ">
      <div className="flex items-center justify-between py-2 flex-row border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>

      </div>
      <div className=" flex flex-col gap-y-2 h-[600px]   flex-grow overflow-y-auto ">
        {cart.length === 0 ? (
          <div className="w-3/4 rounded-md mx-auto text-center py-8  px-2 uppercase leading-10 border-4  border-bg-slate-500/30 my-5">
          <h1 className="w-full rounded-md mx-auto text-center py-8  px-2 uppercase leading-10 ">
            no items added to your cart yet
          </h1>
          <Link
            to={"/"}
            className="bg-emerald-300 p-2 w-full rounded-lg text-gray-800  font-semibold "
          >
            explore our products
          </Link>
        </div>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className="flex flex-col  ">
        <div className="border-4 border-bg-pink-200 gap-2  w-full p-2 mt-2 rounded-lg flex  flex-row justify-between items-center font-semibold capitalize">
          <div className=" w-full flex h-full justify-start ">
            <span className="mr-2">total : </span>${" "}
            {parseFloat(total.toFixed(2))}
          </div>
          <div
            onClick={() => clearCart()}
            className={`${
              cart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
            }  text-white w-auto flex justify-center items-center text-xl  border-transparent rounded-lg transition-all duration-300 `}
          >
            <FiTrash2 className=" w-10 h-10 text-white hover:text-black bg-rose-400 border-2 border-rose-400 p-2 rounded-lg hover:bg-transparent " />
          </div>
        </div>
        <div className="flex flex-col justify-between  mx-auto tracking-[10px] w-full  ">

          <Link
            className={`${
              cart.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
            } capitalize bg-primary text-white p-4 flex justify-center items-center  rounded-lg hover:bg-white hover:text-black border-2 border-black font-bold my-2  `}
          >
            check out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
