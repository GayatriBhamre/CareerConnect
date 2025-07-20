import React from "react";
import { FaMicrosoft, FaApple, FaAmazon, FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Gachibowli, Hyderabad",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Whitefield, Bengaluru",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "BKC, Mumbai",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Google",
      location: "Hinjewadi, Pune",
      openPositions: 12,
      icon: <FaGoogle />,
    },
    {
      id: 5,
      title: "Amazon",
      location: "Financial District, Hyderabad",
      openPositions: 15,
      icon: <FaAmazon />,
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
