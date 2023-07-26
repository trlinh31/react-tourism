import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
  BiPhone,
  BiEnvelope,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-black-color w-full py-10 px-4">
      <div className="container mx-auto text-white grid grid-cols-1 gap-y-12 lg:grid-cols-[40%_20%_20%_20%]">
        <div>
          <h1 className="font-bold text-3xl pb-4">About Us</h1>
          <p className="max-w-[440px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nisi eget libero
            dignissim, auctor pharetra elit hendrerit. Maecenas dignissim magna id nulla semper
            sagittis sed at purus.
          </p>
          <div className="flex items-center mt-4">
            <BiLogoFacebook className="text-2xl mr-4" />
            <BiLogoTwitter className="text-2xl mr-4" />
            <BiLogoInstagram className="text-2xl mr-4" />
            <BiLogoYoutube className="text-2xl" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl pb-4">Support</h1>
          <p className="pb-4">FAQ</p>
          <p className="pb-4">Privacy Policy</p>
          <p className="pb-4">Help</p>
        </div>
        <div>
          <h1 className="font-bold text-3xl pb-4">Tourism</h1>
          <p className="pb-4">Home</p>
          <p className="pb-4">Destinations</p>
          <p className="pb-4">About</p>
          <p className="pb-4">Contact</p>
        </div>
        <div>
          <h1 className="font-bold text-3xl pb-4">Contact Us</h1>
          <p className="pb-4 flex items-center">
            <BiPhone className="text-xl mr-2" />
            <span>+84979xxxx98</span>
          </p>
          <p className="pb-4 flex items-center">
            <BiEnvelope className="text-xl mr-2" />
            <span>vntourism@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
