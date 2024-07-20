import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Card = (props) => {

let review=props.review;
    return (
      <div className=" bg-white flex flex-col text-black gap-3 lg:relative ">
        <div className="profilepic lg:absolute md:top-[-5rem] left-[-0.5rem]  mx-auto">
          <img
            className="aspect-square w-[140px] h-[140px] rounded-full"
            src={review.profile}
            alt="profile photo "
          />
          
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
