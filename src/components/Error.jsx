import React from "react";

const Error = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-800 text-white uppercase p-2 font-bold">
      {children}
    </div>
  );
};

export default Error;
