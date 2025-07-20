import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Career Connect Works !</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign up for a free account and build your professional profile to showcase your skills to recruiters.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job / Post a Job</p>
              <p>
                Search and apply for thousands of jobs, or post job listings to reach qualified candidates easily.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job / Recruit Suitable Candidates</p>
              <p>
                Quickly apply to roles you love, or manage and select top talent seamlessly for your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
