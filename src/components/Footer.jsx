import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import React from "react";

const iconStyling = {
  color: "white",
  borderRadius: "50%",
  fontSize: 35,
  borderWidth: "1px",
  padding: "4px",
  cursor: "pointer",
};

const Footer = () => {
  return (
    <div className="w-full h-[150px] bg-gray-900 text-white ">
      <div className="flex items-center justify-center h-[50%] space-x-4">
        <Facebook
          style={{
            ...iconStyling,
            backgroundColor: "#3b5998",
            borderColor: "#3b5998",
          }}
        />
        <Instagram
          style={{
            ...iconStyling,
            backgroundColor: "#bc2a8d",
            borderColor: "#bc2a8d",
          }}
        />
        <Twitter
          style={{
            ...iconStyling,
            backgroundColor: "#00acee",
            borderColor: "#00acee",
          }}
        />
        <WhatsApp
          style={{
            ...iconStyling,
            backgroundColor: "#25D366",
            borderColor: "#25D366",
          }}
        />
      </div>
      <div className="flex h-[15%] w-full justify-center items-center space-x-6">
        <h1 className="text-lg font-medium cursor-pointer">Home</h1>
        <h1 className="text-lg font-medium cursor-pointer">Services</h1>
        <h1 className="text-lg font-medium cursor-pointer">About</h1>
        <h1 className="text-lg font-medium cursor-pointer">Terms</h1>
        <h1 className="text-lg font-medium cursor-pointer">Privacy Policy</h1>
      </div>
      <p className="text-center p-2">
        &copy; 2021-2022, HomeKart.com, Inc. or its affiliates
      </p>
    </div>
  );
};

export default Footer;
