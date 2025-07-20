import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { Application } from "../models/applicationSchema.js"; 

const router = express.Router();

// ✅ Existing routes
router.post("/post", isAuthenticated, postApplication);
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);

// ✅ NEW route to fetch single application by ID
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate("applicantID.user")
      .populate("employerID.user");

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      success: true,
      applicant: application.applicantID.user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
