import React from "react";

const Card = (props) => {
  const { img, name, address, organization, designation } = props;
  return (
    <div className="card">
      <div className="card-main">
        <div className="card-header">
          <div className="card-cover">
            <img
              src="https://images.hdqwalls.com/download/avengers-hulk-1440x900.jpg"
              alt=""
            />
            <div className="card-dp">
              <img src={img} alt="" />
            </div>
          </div>
        </div>

        <div className="card-content">
          <h1 className="card-name"> {name} </h1>

          <ul className="card-info">
            <li>{address}</li>
            <li>{organization}</li>
            <li>{designation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
