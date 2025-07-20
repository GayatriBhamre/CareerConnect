# Job Portal App (MERN Stack)

A job portal built with the MERN stack that allows users to browse jobs, apply online, and manage applications seamlessly.

---

##  Features

- *User Authentication & Authorization**  
✅ **Post & Apply to Jobs**  
✅ **Job Search with Filters**  
✅ **Cloudinary Image Upload** 
✅ **JobBot Chat Assistant** 
✅ **Admin Dashboard for Job & User Management**  


---

##  Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Auth**: JWT, bcrypt
- **File Storage**: Cloudinary

---

##  Setup

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### Installation

```bash
git clone https://github.com/GayatriBhamre/JOB_PORTAL.git
Install dependencies:

bash
Copy
Edit
cd JOB_PORTAL/backend
npm install

cd ../frontend
npm install
Environment Variables
Create /backend/config/config.env:

env
Copy
Edit
PORT=4000
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
FRONTEND_URL=http://localhost:5173
DB_URL=your_mongodb_url
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
NODE_ENV=development
Running Locally
Backend:

bash
Copy
Edit
npm run dev
Frontend:

bash
Copy
Edit
npm run dev
Visit: http://localhost:5173

🤝 Contributing
Fork & clone the repo
Create a feature branch
Commit and push your changes
Open a pull request

📬 Contact
GitHub: GayatriBhamre
Email: bhamregayatri28@gmail.com