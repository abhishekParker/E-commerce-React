import React from "react";
import { Link } from "react-router-dom";

const SliceCard = ({ name, img }) => {
  return (
    <div className="w-full h-[450px] flex items-center bg-white">
      <div className="w-full h-full flex items-center">
        <div className="ml-6 space-y-3 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium whitespace-nowrap">
            {`Grab 50% Deals on ${name}!`}
          </h2>
          <p className="text-lg text-center font-medium">
            Grab these exciting winter deals now...
          </p>
          <Link
            to="/products"
            className="border-2 border-black font-medium px-2 py-1 hover:bg-black hover:text-white duration-200"
          >
            Go to Deals
          </Link>
        </div>
        <div className="w-full h-full">
          <img src={img} alt="img" className="w-full h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default SliceCard;
