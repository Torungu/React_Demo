import React, { useState } from "react";
import blackCar from "./../../assets/products/black-car.jpg";
const DemoState = () => {
  const [state, setState] = useState(8);
  const [name, setName] = useState();
  let diemToan = 9;
  return (
    <div>
      <p>{diemToan}</p>
      <p>state value: {state}</p>
      <button
        className="py-2 px-5 bg-red-500 rounded-lg"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Show
      </button>
      <div>
        <label htmlFor="">Text </label>
        <input
          type="text"
          className="p-2 border"
          placeholder="your name ?"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <p>Your Name is {name}</p>
      </div>
      <div>
        <img src={blackCar} alt="" className="w-2/4" />
      </div>
    </div>
  );
};

export default DemoState;
