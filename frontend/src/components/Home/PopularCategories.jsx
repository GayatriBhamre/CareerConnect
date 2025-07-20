import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
  ];

  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p className="title">{element.title}</p>
                <p className="subtitle">{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Inline CSS style block */}
      <style jsx="true">{`
        .categories {
          padding: 40px 20px;
          background: #f8f9fa;
          text-align: center;
        }

        .categories h3 {
          font-size: 28px;
          margin-bottom: 30px;
          color: #222;
        }

        .banner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: #fff;
          border-radius: 12px;
          padding: 25px 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .icon {
          font-size: 40px;
          color: #007bff;
          margin-bottom: 15px;
        }

        .title {
          font-weight: 600;
          font-size: 16px;
          color: #333;
          margin-bottom: 4px;
        }

        .subtitle {
          font-size: 14px;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default PopularCategories;
