import React, { useState } from "react";
import image from "./images/sec.png";

//let head1 = "Guides by Thousands Sunny";

function Compt(props) {
  const state = useState();
  const array = [];
  const [count, setCount] = useState(0);
  const [head1, sethead] = useState([
    "Guides by Thousands Sunny",
    "Arzoo",
    "Ayesha",
    "Rabia",
  ]);
  const [txtcolor, setColor] = useState("#FF4500");
  const chgCol = () => {
    setColor("#A52A2A");
  };
  const chgNam = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row   ">
        <div className="col-6 d-flex justify-content-center">
          <div>
            <h1 className="fw-bold ms-3 col-10" style={{ color: props.color }}>
              {head1[count]}
            </h1>
            <p className="ms-3 col-8">
              Packed with tips and advice from our on-the-ground experts, our
              city guides app (iOS and Android) is the ultimate resource before
              and during a trip.
            </p>
            <button
              className="btn btn-outline-warning  mt-3 ms-3 "
              style={{ backgroundColor: "orange", color: "white" }}
              //onClick={chgNam}
            >
              Download
            </button>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div>
            <img src={image} alt="images" style={{ width: "70%" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Compt;
