import React, { useState } from "react";
import image from "./images/img1.png";
import Compt from "./Compt";

function Heading(props) {
  const state = useState();
  const [txtColor, setColor] = useState("#FF4500");
  const txtCol = () => {
    props.setIsClicked(!props.isClicked);
    setColor("#A52A2A");

  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <div>
            <h1 className="ms-5 fw-bold" style={{ color: txtColor }}>
              Explore and Travel
            </h1>
            <h3>Holiday finder</h3>
            <div className="row">
              <div className="col-12 ">
                <select
                  name="Location"
                  id="Loc"
                  className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 col-12 w-30"
                >
                  <option value="Loc1">Location</option>
                  <option value="Loc2">Location1</option>
                  <option value="Loc3">Location2</option>
                  <option value="Loc4">Location3</option>
                </select>

                <select
                  name="Activity"
                  id="Act"
                  className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 col-12 w-30 ms-4"
                >
                  <option value="Act1">Activity</option>
                  <option value="Act2">Activity1</option>
                  <option value="Act3">Activity2</option>
                  <option value="Act4">Activity3</option>
                </select>
              </div>
              <div className="col-12 ">
                <select
                  name="Location"
                  id="Loc"
                  className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 col-12 w-30 "
                >
                  <option value="Loc1">Location</option>
                  <option value="Loc2">Location1</option>
                  <option value="Loc3">Location2</option>
                  <option value="Loc4">Location3</option>
                </select>

                <select
                  name="Activity"
                  id="Act"
                  className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 col-12 w-30 mt-2 ms-4"
                >
                  <option value="Act1">Activity</option>
                  <option value="Act2">Activity1</option>
                  <option value="Act3">Activity2</option>
                  <option value="Act4">Activity3</option>
                </select>
              </div>
            </div>

            <button
              className="btn btn-outline-warning  mt-3 "
              style={{ backgroundColor: "orange", color: "white" }}
              onClick={txtCol}
            >
              Explore
            </button>
          </div>
        </div>
        <div className="col-6">
          <img src={image} alt="images" style={{ width: "70%" }}></img>
        </div>
      </div>

    </div>
  );
}
export default Heading;
