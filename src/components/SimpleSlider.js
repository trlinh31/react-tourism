import React from "react";
import Slider from "react-slick";
import Man from "../assets/man-1.jpg";
import { FaStar } from "react-icons/fa";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="flex flex-col items-center md:flex-row bg-white text-black p-8 rounded-lg">
        <img src={Man} alt="/" className="w-[100px] h-[100px] rounded-full object-cover mr-4" />
        <div>
          <h1 className="font-bold text-center md:text-left">Customer 1</h1>
          <p className="flex w-full text-xs pt-2 justify-center md:justify-start">
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </p>
          <p className="text-left pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row bg-white text-black p-8 rounded-lg">
        <img src={Man} alt="/" className="w-[100px] h-[100px] rounded-full object-cover mr-4" />
        <div>
          <h1 className="font-bold text-center md:text-left">Customer 2</h1>
          <p className="flex w-full text-xs pt-2 justify-center md:justify-start">
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </p>
          <p className="text-left pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row bg-white text-black p-8 rounded-lg">
        <img src={Man} alt="/" className="w-[100px] h-[100px] rounded-full object-cover mr-4" />
        <div>
          <h1 className="font-bold text-center md:text-left">Customer 3</h1>
          <p className="flex w-full text-xs pt-2 justify-center md:justify-start">
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </p>
          <p className="text-left pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row bg-white text-black p-8 rounded-lg">
        <img src={Man} alt="/" className="w-[100px] h-[100px] rounded-full object-cover mr-4" />
        <div>
          <h1 className="font-bold text-center md:text-left">Customer 4</h1>
          <p className="flex w-full text-xs pt-2 justify-center md:justify-start">
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </p>
          <p className="text-left pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row bg-white text-black p-8 rounded-lg">
        <img src={Man} alt="/" className="w-[100px] h-[100px] rounded-full object-cover mr-4" />
        <div>
          <h1 className="font-bold text-center md:text-left">Customer 5</h1>
          <p className="flex w-full text-xs pt-2 justify-center md:justify-start">
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </p>
          <p className="text-left pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row bg-white text-black p-8 rounded-lg">
        <img src={Man} alt="/" className="w-[100px] h-[100px] rounded-full object-cover mr-4" />
        <div>
          <h1 className="font-bold text-center md:text-left">Customer 6</h1>
          <p className="flex w-full text-xs pt-2 justify-center md:justify-start">
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="mr-1 text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </p>
          <p className="text-left pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
