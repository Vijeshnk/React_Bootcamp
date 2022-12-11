import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Card from "./CardComponent";
import team from "./userDetails.json";

import "./style.css";

const App = () => {
  return (
    <div className="container">
      {/* Header with Logo */}
      <Header />

      <div className="card-container">
        {team.users.map((user) => {
          const { id, img, name, address, organization, designation } = user;
          return (
            <Card
              key={id}
              img={img}
              name={name}
              address={address}
              organization={organization}
              designation={designation}
            />
          );
        })}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
