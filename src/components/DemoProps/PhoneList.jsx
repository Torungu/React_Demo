import React from "react";

const PhoneList = ({ listPhones, title, renderDetail }) => {
  return (
    <div className="grid grid-cols-4">
      {listPhones.map((item, index) => {
        return (
          <div>
            <img src={item.image} alt="" className="w-1/2" />
            <h3>{item.name}</h3>
            <button
              className="bg-blue-500 py-2 px-5 rounded-md"
              onClick={() => {
                renderDetail(item);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PhoneList;
