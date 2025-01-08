import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-opacity-50 bg-black fixed top-0 left-0 w-full">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
