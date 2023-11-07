import { useContext } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div id="home">
      <Hero />
      <section className="py-16 ">
        <div className=" container w-full mx-auto flex justify-center mt-20">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx-0">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
