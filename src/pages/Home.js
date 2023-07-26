import React from "react";
import Hero from "../components/Hero";
import ThapRua from "../assets/thap_rua.jpg";
import LangBac from "../assets/lang-bac.jpg";
import HaLong from "../assets/halong.jpg";
import HoiAn from "../assets/hoi-an.jpg";
import DaNang from "../assets/da-nang.jpg";
import Hue from "../assets/hue.jpg";
import PhuQuoc from "../assets/phuquoc.jpg";
import PhongNha from "../assets/phong-nha-ke-bang.jpg";
import PhoCo from "../assets/pho_co_ha_noi.jpg";
import BenThanh from "../assets/Ben_Thanh_market.jpg";
import SonDoong from "../assets/son-doong.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import Img1 from "../assets/img-1.jpg";
import Img2 from "../assets/img-2.jpg";
import Img3 from "../assets/img-3.jpg";
import SimpleSlider from "../components/SimpleSlider";

function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-black-color w-full py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-7">
          <div className="text-white">
            <h1 className="font-bold text-6xl text-primary-color pb-6">VietNam</h1>
            <p className="text-justify">
              Vietnam is a country located in Southeast Asia, with a long coastline and many Ha Long
              bays, the Mekong Delta, the Northwest mountains, the highlands of the Central
              Highlands and many other large and small lakes. With the combination of nature and
              people, Vietnam has a unique beauty that attracts tourists from all over the world.
            </p>
          </div>
          <div>
            <img
              src={ThapRua}
              alt="/"
              className="w-full h-[300px] object-cover rounded-lg shadow-md shadow-slate-900"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full py-20 px-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-5xl pb-4">Tour List</h1>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="relative h-[400px] shadow-md shadow-slate-700">
            <img
              src={HaLong}
              alt="/"
              className="absolute top-0 left-0 right-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-2 bg-white">
              <h1 className="font-bold text-primary-color">9.500.000đ</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-2 ml-2 mb-2 rounded-xl backdrop-blur-md bg-white/5">
              <h1 className="font-bold text-white text-xl">HaLong Bay</h1>
              <p className="text-white text-[0.8rem] font-medium flex items-center">
                <FaCalendarAlt className="relative top-[-1px] mr-2" />3 Days 2 Nights
              </p>
            </div>
          </div>
          <div className="relative h-[400px] shadow-md shadow-slate-700">
            <img
              src={DaNang}
              alt="/"
              className="absolute top-0 left-0 right-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-2 bg-white">
              <h1 className="font-bold text-primary-color">3.000.000đ</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-2 ml-2 mb-2 rounded-xl backdrop-blur-md bg-white/5">
              <h1 className="font-bold text-white text-xl">Da Nang</h1>
              <p className="text-white text-[0.8rem] font-medium flex items-center">
                <FaCalendarAlt className="relative top-[-1px] mr-2" />4 Days 3 Nights
              </p>
            </div>
          </div>
          <div className="relative h-[400px] shadow-md shadow-slate-700">
            <img
              src={HoiAn}
              alt="/"
              className="absolute top-0 left-0 right-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-2 bg-white">
              <h1 className="font-bold text-primary-color">2.100.000đ</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-2 ml-2 mb-2 rounded-xl backdrop-blur-md bg-white/5">
              <h1 className="font-bold text-white text-xl">Hoi An</h1>
              <p className="text-white text-[0.8rem] font-medium flex items-center">
                <FaCalendarAlt className="relative top-[-1px] mr-2" />3 Days 2 Nights
              </p>
            </div>
          </div>
          <div className="relative h-[400px] shadow-md shadow-slate-700">
            <img
              src={Hue}
              alt="/"
              className="absolute top-0 left-0 right-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-2 bg-white">
              <h1 className="font-bold text-primary-color">1.200.000đ</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-2 ml-2 mb-2 rounded-xl backdrop-blur-md bg-white/5">
              <h1 className="font-bold text-white text-xl">Hue</h1>
              <p className="text-white text-[0.8rem] font-medium flex items-center">
                <FaCalendarAlt className="relative top-[-1px] mr-2" />3 Days 2 Nights
              </p>
            </div>
          </div>
          <div className="relative h-[400px] shadow-md shadow-slate-700">
            <img
              src={PhuQuoc}
              alt="/"
              className="absolute top-0 left-0 right-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-2 bg-white">
              <h1 className="font-bold text-primary-color">15.000.000đ</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-2 ml-2 mb-2 rounded-xl backdrop-blur-md bg-white/5">
              <h1 className="font-bold text-white text-xl">Phu Quoc Island</h1>
              <p className="text-white text-[0.8rem] font-medium flex items-center">
                <FaCalendarAlt className="relative top-[-1px] mr-2" />3 Days 2 Nights
              </p>
            </div>
          </div>
          <div className="relative h-[400px] shadow-md shadow-slate-700">
            <img
              src={PhongNha}
              alt="/"
              className="absolute top-0 left-0 right-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-2 bg-white">
              <h1 className="font-bold text-primary-color">1.000.000đ</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-2 ml-2 mb-2 rounded-xl backdrop-blur-md bg-white/5">
              <h1 className="font-bold text-white text-xl">Phong Nha Ke Bang</h1>
              <p className="text-white text-[0.8rem] font-medium flex items-center">
                <FaCalendarAlt className="relative top-[-1px] mr-2" />3 Days 2 Nights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-color w-full py-20 px-4">
        <div className="container mx-auto text-white">
          <div className="text-center">
            <h1 className="font-bold text-3xl md:text-5xl pb-4">Destinations Popular</h1>
            <p className="font-medium text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={LangBac}
                alt="/"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
              <div className="absolute bottom-0 left-0 pl-4 pb-3">
                <h1 className="font-bold text-white text-3xl drop-shadow-lg">
                  Ho Chi Minh's Mausoleum
                </h1>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={PhoCo}
                alt="/"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
              <div className="absolute bottom-0 left-0 pl-4 pb-3">
                <h1 className="font-bold text-white text-3xl drop-shadow-lg">
                  Ancient City of Hanoi
                </h1>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={SonDoong}
                alt="/"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
              <div className="absolute bottom-0 left-0 pl-4 pb-3">
                <h1 className="font-bold text-white text-3xl drop-shadow-lg">Son Doong Cave</h1>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={BenThanh}
                alt="/"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
              <div className="absolute bottom-0 left-0 pl-4 pb-3">
                <h1 className="font-bold text-white text-3xl drop-shadow-lg">Ben Thanh Market</h1>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={HaLong}
                alt="/"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
              <div className="absolute bottom-0 left-0 pl-4 pb-3">
                <h1 className="font-bold text-white text-3xl drop-shadow-lg">HaLong Bay</h1>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={HoiAn}
                alt="/"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
              <div className="absolute bottom-0 left-0 pl-4 pb-3">
                <h1 className="font-bold text-white text-3xl drop-shadow-lg">Hoi An</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full py-20 px-4">
        <div className="w-full grid md:grid-cols-2 gap-5">
          <div>
            <h1 className="text-xl lg:text-3xl font-bold pb-4">SIGN UP FOR OUR NEWSLETTER</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-solid border-primary-color outline-none py-2 px-6"
            />
            <button className="mt-4 w-full md:w-[200px] bg-primary-color text-white py-2 px-6">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black-color w-full py-20 px-4">
        <div className="container mx-auto text-white">
          <h1 className="mb-8 font-bold text-3xl md:text-5xl text-center">Customer's Feedback</h1>
          <SimpleSlider />
        </div>
      </div>
      <div className="container mx-auto w-full py-20 px-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-5xl pb-4">Gallery Photo</h1>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[300px_300px_300px] gap-4 mt-8">
          <div className="text-white flex justify-center items-center lg:row-start-1 lg:row-span-2">
            <img src={HaLong} alt="/" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="text-white flex justify-center items-center lg:col-start-2 lg:col-span-2">
            <img src={Img1} alt="/" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="text-white flex justify-center items-center">
            <img src={BenThanh} alt="/" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="text-white flex justify-center items-center">
            <img src={HoiAn} alt="/" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="text-white flex justify-center items-center">
            <img src={Img3} alt="/" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="text-white flex justify-center items-center lg:col-start-2 lg:col-span-2">
            <img src={Img2} alt="/" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
