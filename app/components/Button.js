"use client";

import React from "react";

const Button = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Button Clicked");
        }}
        className="bg-orange-500 p-2 rounded-sm mt-5"
      >
        Click Here
      </button>
    </div>
  );
};

export default Button;
