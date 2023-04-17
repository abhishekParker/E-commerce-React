import SliceCard from "../components/SliceCard";
import Slider from "react-slick";
import { data } from "../Slider-data/data";
import Card from "../components/Card";
import "../index.css";
// import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDailyData } from "../store/cartSlice";

const Home = () => {
  const homeData = useSelector((state) => state.cart.homeData);
  const dispatch = useDispatch();
  // const [dailyProducts, setDailyProducts] = useState([]);
  useEffect(() => {
    // const fetchDailyProducts = async () => {
    //   const res = await fetch("https://dummyjson.com/products");
    //   const dpData = await res.json();
    //   setDailyProducts(dpData.products);
    // };
    // fetchDailyProducts();
    dispatch(fetchDailyData());
  }, [dispatch]);
  console.log(homeData);
  var settings = {
    infinite: true,
    speed: 800,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const setting1 = { arrows: false, ...settings };
  const setting2 = {
    arrows: true,
    ...settings,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    dots: false,
  };
  return (
    <div className="w-full h-full bg-blue-300 p-3">
      <Slider {...setting1}>
        {data.map(({ name, img, id }) => (
          <SliceCard key={id} name={name} img={img} />
        ))}
      </Slider>

      <div className="my-8 w-[98%] mx-auto p-3">
        <h1 className="text-lg font-bold p-2">Smartphones and Laptops</h1>
        <div className="bg-black p-8 flex flex-col rounded slider-two">
          <Slider {...setting2}>
            {homeData
              .slice(0, 10)
              .map(
                ({
                  brand,
                  title,
                  price,
                  thumbnail,
                  images,
                  rating,
                  description,
                  id,
                }) => (
                  <Card
                    key={id}
                    id={id}
                    brand={brand}
                    title={title}
                    price={price}
                    thumbnail={images[0]}
                    rating={rating}
                    description={description}
                  />
                )
              )}
          </Slider>
        </div>
      </div>
      <div className="my-8 mt-[5px] w-[98%] mx-auto p-3">
        <h1 className="text-lg font-bold p-2">Skincare Products</h1>
        <div className="bg-black p-8 flex flex-col rounded slider-two">
          <Slider {...setting2}>
            {homeData
              .slice(11, 20)
              .map(
                ({
                  brand,
                  title,
                  price,
                  thumbnail,
                  rating,
                  description,
                  id,
                }) => (
                  <Card
                    key={id}
                    id={id}
                    brand={brand}
                    title={title}
                    price={price}
                    thumbnail={thumbnail}
                    rating={rating}
                    description={description}
                  />
                )
              )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
