import React from "react";
import Img from "../assets/img-1.jpg";
import TitleWrapper from "../components/TitleWrapper";
import { BiUser, BiEnvelope, BiMobileAlt } from "react-icons/bi";

function Contact() {
  return (
    <div>
      <TitleWrapper path={Img} title="Contact Us" />
      <div className="max-w-[992px] mx-auto bg-white shadow-md shadow-gray-300 p-8 my-8 rounded-lg flex">
        <div className="mr-8 hidden md:block">
          <img src={Img} alt="/" className="w-[500px] h-full object-cover" />
        </div>
        <div>
          <h1 className="font-bold text-3xl uppercase pb-2">Get In Touch</h1>
          <p className="pb-8 text-gray-400 text-sm">
            24/7 We will answer your questions and problems
          </p>
          <div className="flex items-center">
            <div className="flex items-center mr-4 border-solid border-[1px] border-gray-300 h-[60px] px-4">
              <BiUser className="text-2xl" />
              <input
                type="text"
                placeholder="First Name"
                className="outline-none w-full h-full ml-2"
              />
            </div>
            <div className="flex items-center border-solid border-[1px] border-gray-300 h-[60px] px-4">
              <BiUser className="text-2xl" />
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none w-full h-full ml-2"
              />
            </div>
          </div>
          <div className="w-full mt-4 flex items-center mr-4 border-solid border-[1px] border-gray-300 h-[60px] px-4">
            <BiEnvelope className="text-2xl" />
            <input type="email" placeholder="Email" className="outline-none w-full h-full ml-2" />
          </div>
          <div className="w-full mt-4 flex items-center mr-4 border-solid border-[1px] border-gray-300 h-[60px] px-4">
            <BiMobileAlt className="text-2xl" />
            <input type="number" placeholder="Phone" className="outline-none w-full h-full ml-2" />
          </div>
          <div className="w-full mt-4 border-[1px] border-gray-300">
            <textarea
              cols={1}
              rows={8}
              className="w-full resize-none outline-none p-4"
              placeholder="Describe your issue"
            />
          </div>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
