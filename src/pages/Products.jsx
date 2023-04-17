import React from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsData } from "../store/cartSlice";
import { BounceLoader } from "react-spinners";
const Products = () => {
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.cart.products);
  const isLoading = useSelector((state) => state.cart.mainState.isLoading);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <div
      className={`w-full ${
        !isLoading ? "h-full" : "h-screen"
      } py-8 px-3 bg-blue-300 text-black relative`}
    >
      {!isLoading ? (
        <div className="sm:grid sm:grid-cols-5 sm:gap-3 flex flex-col space-y-3">
          {products.map(({ title, image, price, id, description }) => (
            <ProductCard
              key={id}
              title={title}
              image={image}
              price={price}
              id={id}
              description={description}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex items-start justify-center absolute top-[45%]">
          <BounceLoader color="black" size={60} />
        </div>
      )}
    </div>
  );
};

export default Products;
