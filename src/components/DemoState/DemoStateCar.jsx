import React, { useState } from "react";

const DemoStateCar = () => {
  let arrButton = [
    {
      icon: "/CarBasic/icons/icon-black.jpg",
      title: "Crystal Black",
      subTitle: "F",
      selectCar: "black-car.jpg",
    },
    {
      icon: "/CarBasic/icons/icon-red.jpg",
      title: "Rally Red",
      subTitle: "U",
      selectCar: "red-car.jpg",
    },
    {
      icon: "/CarBasic/icons/icon-silver.jpg",
      title: "Lunar Silver",
      subTitle: "C",
      selectCar: "silver-car.jpg",
    },
    {
      icon: "/CarBasic/icons/icon-steel.jpg",
      title: "Modern Steel",
      subTitle: "K",
      selectCar: "steel-car.jpg",
    },
  ];
  const [selectCar, setSelectCar] = useState("black-car.jpg");
  return (
    <div>
      <div className="flex">
        <div className="w-2/3">
          {/* <img src={`/public/CarBasic/products/${selectCar}`} alt="" /> */}
          <img src={`public/CarBasic/products/${selectCar}`} alt="" />
        </div>
        <div className="w-1/3">
          {arrButton.map((item, index) => {
            return (
              <button
                className="flex items-center py-2 px-5 rounded-lg border border-black space-x-3 w-1/2 mb-5"
                onClick={() => {
                  setSelectCar(item.selectCar);
                }}
              >
                <img src={item.icon} alt="" className="w-10" />
                <div className="text-left">
                  <b>{item.title}</b>
                  <p>{item.subTitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoStateCar;
