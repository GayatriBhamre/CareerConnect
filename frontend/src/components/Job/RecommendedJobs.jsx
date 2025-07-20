import React, { useEffect, useState } from "react";
import axios from "axios";

const RecommendedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/job/recommend",
          { withCredentials: true }
        );
        setJobs(data.jobs);
      } catch (error) {
        setJobs([]);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended Jobs</h2>
      {jobs.length === 0 && <p>No recommendations yet.</p>}
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
};
export default RecommendedJobs;