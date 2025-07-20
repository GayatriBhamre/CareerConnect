import express from "express";
import { getInterviewQuestions } from "../controllers/interviewController.js";

const router = express.Router();

router.get("/questions", getInterviewQuestions);

export default router;
