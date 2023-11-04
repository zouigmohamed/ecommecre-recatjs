import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Loading from "../components/Loading";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen text-3xl flex justify-center  items-center">
        <Loading/>
      </section>
    );
  } else {
    return (
      <section className="pt-[32px] pb-12 lg:py-32 flex h-auto mt-32 justify-center items-center ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-h-[200px] lg:max-w-sm "
                src={
                  product.api_featured_image
                    ? product.api_featured_image
                    : product.image_link
                }
                alt="image"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {product.name}
              </h1>
              <div className="text-x text-red-500 font-medium mb-6">
                $ {product.price}
              </div>
              <p className="mb-8">{product.description}</p>
              <button
                onClick={() => {
                  addToCart(product.id, product);
                }}
                className="capitalize bg-primary py-4 px-8 text-white rounded-md"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductDetails;
