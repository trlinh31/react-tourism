import React from "react";
import TitleWrapper from "../components/TitleWrapper";
import Img from "../assets/img-1.jpg";
import Banner from "../assets/banner.jpg";

function About() {
  return (
    <div>
      <TitleWrapper path={Img} title="About Us" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 py-20 px-4">
          <img src={Banner} alt="/" />
          <div className="flex flex-col justify-center pl-4">
            <h1 className="font-bold text-4xl pb-4">About Us</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lacus, lacinia vel
              sagittis ut, consequat ut eros. Aliquam convallis magna at sapien volutpat mattis.
              Donec commodo ante non fringilla lobortis. Aenean volutpat velit ac tincidunt
              tristique. Curabitur tortor mauris, semper vitae sodales et, eleifend eu leo. Integer
              nec placerat enim. Duis sit amet egestas erat. Mauris dignissim justo vel metus
              faucibus, eu egestas orci viverra. Nam dapibus, nisi nec fringilla sollicitudin, ex
              enim hendrerit risus, a posuere ipsum libero quis leo. Curabitur quis tempus ex.
              Nullam semper odio eget sem mollis ornare. Nullam faucibus dolor volutpat tempus
              varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
