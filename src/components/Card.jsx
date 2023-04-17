import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const homeCardDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div
      className="bg-white w-[220px] h-[220px] rounded"
      onClick={() => homeCardDetail(props.id)}
    >
      <div className="flex flex-col w-full h-full text-center bg-white font-bold break-words rounded cursor-pointer">
        <img
          src={props.thumbnail}
          alt={props.title}
          className="w-full h-[65%]"
        />
        <div className="flex justify-center items-center">
          <Rating name="read-only" value={props.rating} readOnly />
        </div>
        <p>{props.brand}</p>
        <p>
          {props.title.length > 15
            ? props.title.slice(0, 15) + "..."
            : props.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
