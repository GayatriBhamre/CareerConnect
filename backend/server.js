import app from "./app.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io"; 
import http from "http"; 
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js"; 

dotenv.config();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/user", userRoutes); 


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  
  socket.on("notify", (data) => {
    io.emit("notification", data); 
  });

  
  socket.on("chatMessage", async (data) => {
    const Message = (await import("./models/messageModel.js")).default;
    const { sender, receiver, content } = data;

    const message = await Message.create({ sender, receiver, content });
    io.emit(`chatMessage:${receiver}`, message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
