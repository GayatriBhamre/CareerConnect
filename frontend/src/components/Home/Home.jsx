import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate, Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }

  const buttonStyle = {
    padding: "12px 24px",
    background: "linear-gradient(90deg, #4b6cb7, #182848)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease"
  };

  const containerStyle = {
    textAlign: "center",
    marginTop: "20px"
  };

  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />

        <div style={containerStyle}>
          <Link to="/interview-prep">
            <button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#334d8f")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #4b6cb7, #182848)")
              }
            >
              Go to Interview Prep
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
