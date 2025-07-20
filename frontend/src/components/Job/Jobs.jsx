import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { FaSearch } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/job/getall", {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const styles = {
    page: {
      padding: "40px 20px",
      background: "linear-gradient(to right, #dbeafe, #e0f2fe)",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "32px",
      marginBottom: "30px",
      color: "#1e3a8a",
      fontWeight: "bold",
    },
    searchWrapper: {
      position: "relative",
      maxWidth: "400px",
      width: "100%",
      margin: "0 auto 30px",
    },
    searchInput: {
      width: "100%",
      padding: "12px 40px 12px 16px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      fontSize: "16px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    searchIcon: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#64748b",
      pointerEvents: "none",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "24px",
    },
    cardBase: {
      background: "#ffffff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e2e8f0",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(59,130,246,0.2)",
    },
    cardTitle: {
      margin: "0 0 12px",
      color: "#1e293b",
      fontSize: "20px",
      fontWeight: "600",
    },
    cardText: {
      color: "#475569",
      fontSize: "15px",
      margin: "4px 0",
    },
    detailsLink: {
      display: "inline-block",
      marginTop: "12px",
      padding: "10px 18px",
      background: "linear-gradient(90deg, #3b82f6, #1e40af)",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "14px",
      transition: "all 0.3s ease",
    },
    noResults: {
      textAlign: "center",
      color: "#64748b",
      fontSize: "16px",
      marginTop: "20px",
    },
  };

  return (
    <section style={styles.page}>
      <div className="container">
        <h1 style={styles.title}>ALL AVAILABLE JOBS</h1>

        <div style={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search by role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />
          <FaSearch style={styles.searchIcon} />
        </div>

        <div style={styles.grid}>
          {jobs.jobs &&
            jobs.jobs
              .filter((job) =>
                job.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((job, index) => (
                <div
                  key={job._id}
                  style={{
                    ...styles.cardBase,
                    ...(hoveredCard === index ? styles.cardHover : {}),
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 style={styles.cardTitle}>{job.title}</h3>
                  <p style={styles.cardText}>Category: {job.category}</p>
                  <p style={styles.cardText}>Location: {job.country}</p>
                  <Link to={`/job/${job._id}`} style={styles.detailsLink}>
                    View Details
                  </Link>
                </div>
              ))}

          {jobs.jobs &&
            jobs.jobs.filter((job) =>
              job.title.toLowerCase().includes(search.toLowerCase())
            ).length === 0 && (
              <p style={styles.noResults}>No matching jobs found.</p>
            )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
