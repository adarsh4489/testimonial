import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaSurprise } from 'react-icons/fa';

const Testimonial = (props) => {
  let reviews=props.reviews;
  const[index,setIndex]=useState(0);
  function leftHandler()
  {
if(index-1<0)
  setIndex(reviews.length-1);
else setIndex(index-1);
  }
  function rightHandler()
  {
    if(index+1>=reviews.length-1)
      setIndex(0);
    else{
      setIndex(index+1);
    }

  }

  function SurpriseHandler()
  {
let randomIndex=Math.floor(Math.random()*reviews.length);
setIndex(randomIndex);
  }

  return (
    <div className="flex flex-col items-center w-2/5  text-center mx-auto gap-2 mt-4 p-6 rounded-md bg-white">
      <Card review={reviews[index]} />
      <div className="slider-buttons text-center text-slate-500 text-4xl ">
        <button className="hover:bg-slate-400 gap-10" onClick={leftHandler}>
          <FiChevronLeft />
        </button>
        <button className="hover:bg-slate-400 gap-10" onClick={rightHandler}>
          <FiChevronRight />
        </button>
      </div>
      <button
        onClick={SurpriseHandler}
        className="text-xl font-semibold hover:bg-purple-700 text-white bg-purple-600 py-2 px-4 rounded-md"
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Testimonial
