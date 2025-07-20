import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <>
      <style>
        {`
          .heroSection {
            background: #f0f8ff;
            padding: 3rem 2rem;
            font-family: 'Segoe UI', sans-serif;
          }

          .heroSection .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
          }

          .heroSection .title h1 {
            font-size: 2.5rem;
            color: #004080;
            margin: 0;
          }

          .heroSection .title p {
            margin-top: 1rem;
            font-size: 1.1rem;
            color: #555;
            max-width: 500px;
          }

          .heroSection .image img {
            max-width: 100%;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(77, 166, 255, 0.3);
          }

          .heroSection .details {
            margin-top: 3rem;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .heroSection .card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
            padding: 1.2rem 2rem;
            min-width: 200px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .heroSection .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 18px rgba(0, 123, 255, 0.25);
          }

          .heroSection .icon {
            font-size: 2rem;
            color: #3399ff;
            margin-bottom: 0.5rem;
          }

          .heroSection .content p:first-child {
            font-size: 1.4rem;
            font-weight: bold;
            color: #004080;
          }

          .heroSection .content p:last-child {
            font-size: 1rem;
            color: #666;
          }

          @media (max-width: 768px) {
            .heroSection .container {
              flex-direction: column;
              text-align: center;
            }
          }
        `}
      </style>

      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>
              "Discover opportunities designed for your skills and interests.
              Build meaningful connections with employers and advance your career."
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>

        <div className="details">
          {details.map((element) => (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
