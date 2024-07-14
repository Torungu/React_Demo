import React from "react";

const PhoneDetail = ({ iphone }) => {
  let { image, screen, os, ram, rom } = iphone;
  return (
    <div className="flex mt-10">
      <div className="w-4/12">
        <img src={image} alt="" className="w-1/2" />
      </div>
      <div className="w-8/12">
        <h3 className="text-xl font-bold">Details System</h3>
        <table border={2} cellPadding={10}>
          <tr>
            <td>Screen: {screen} </td>
          </tr>
          <tr>
            <td>OS: {os}</td>
          </tr>
          <tr>
            <td>Ram: {ram}</td>
          </tr>
          <tr>
            <td>Rom: {rom}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PhoneDetail;
