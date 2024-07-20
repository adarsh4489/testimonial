import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Card = (props) => {

let review=props.review;
    return (
      <div className=" bg-white flex flex-col text-black gap-3 md:relative ">
        <div className="profilepic md:absolute md:top-[-4rem] md:z-[10] mx-auto">
          <img
            className="z-[25] aspect-square w-[140px] h-[140px] rounded-full"
            src={review.profile}
            alt="profile photo "
          />
          <div className="rounded-full z-[-10] absolute w-[140px] h-[140px] bg-purple-600 top-[-6px] left-[4px] "></div>
        </div>
        <div className="">
          <h3 className="name text-2xl font-semibold">{review.name}</h3>
          <h4 className="designation text-sm text-slate-400 font-semibold italic">
            {review.designation}
          </h4>
        </div>
        <div className="description flex  gap-4 flex-col items-center">
          <div className="icon ">
            <FaQuoteLeft />
          </div>
          <p>{review.message}</p>
          <div className="icon">
            <FaQuoteRight />
          </div>
        </div>
      </div>
    );
};

export default Card;
