import { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  ).filter((category) => category !== null && category !== "");

  const filteredProductsCategory = (cat) => {
    const filtered = products.filter((product) => product.category === cat);
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  return (
    <>
      <div className="mt-24 mb-5  flex justify-center container gap-2 items-center mx-auto flex-wrap border-b-2 border-primary/40 p-2 ">
        <button
          onClick={() => setFilteredProducts(products)}
          className="bg-emerald-300 p-2 h-auto rounded-xl   capitalize border-2 w-auto border-emerald-400 hover:bg-transparent"
        >
          All
        </button>
        {uniqueCategories.map((cat) => (
          <div key={cat}>
            <button
              onClick={() => filteredProductsCategory(cat)}
              className="bg-emerald-300 p-2 h-auto rounded-xl capitalize border-2 w-auto     border-emerald-400 hover:bg-transparent"
            >
              {cat}
            </button>
          </div>
        ))}
      </div>
        <h3 className="text-center p-2 text-2xl capitalize">  {filteredProducts.length} - products found </h3>
      <>
 
        <section className="py-16 border-2 border-primary/40 container rounded-lg px-5 mx-auto">
          <div className="container w-full mx-auto flex justify-center ">
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx-0">
              {filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
