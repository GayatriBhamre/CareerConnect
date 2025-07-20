import multer from "multer";

// Use memory storage so we get req.file.buffer
const storage = multer.memoryStorage();

export const upload = multer({ storage });
