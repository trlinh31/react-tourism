import React from "react";
import TitleWrapper from "../components/TitleWrapper";
import Img from "../assets/img-1.jpg";
import Banner from "../assets/banner.jpg";

function About() {
  return (
    <div>
      <TitleWrapper path={Img} title="About Us" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 py-20 px-4">
          <img src={Banner} alt="/" />
          <div className="flex flex-col justify-center pl-4">
            <h1 className="font-bold text-4xl pb-4">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain gravida nibh vel velit an
              auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum. Lorem ipsim
              dolor sit amet auctor aliqueenean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
