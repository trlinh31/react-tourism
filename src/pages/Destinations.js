import React from "react";
import LangBac from "../assets/lang-bac.jpg";
import HaLong from "../assets/halong.jpg";
import HoiAn from "../assets/hoi-an.jpg";
import PhoCo from "../assets/pho_co_ha_noi.jpg";
import BenThanh from "../assets/Ben_Thanh_market.jpg";
import SonDoong from "../assets/son-doong.jpg";
import TitleWrapper from "../components/TitleWrapper";
import Img from "../assets/img-1.jpg";

function Destinations() {
  return (
    <div>
      <TitleWrapper path={Img} title="Destinations" />
      <div className="container mx-auto py-20 px-4">
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
  );
}

export default Destinations;
