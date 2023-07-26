import React from "react";

function TitleWrapper(props) {
  return (
    <div>
      <div className="relative h-[50vh] flex items-center justify-center">
        <img
          src={props.path}
          alt="/"
          className="absolute top-0 left-0 right-0 w-full h-full object-cover"
        />
        <h1 className="absolute font-bold text-6xl text-white uppercase">{props.title}</h1>
      </div>
    </div>
  );
}

export default TitleWrapper;
