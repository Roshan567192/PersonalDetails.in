📝 Personal Details Form - Full Stack App

This is a full-stack application built using:

React (Frontend) — for a dynamic personal details form

Node.js + Express (Backend) — REST API with validation

MongoDB (Database) — stores user-submitted profile data

Ideal for profile-based systems like matrimony, onboarding, or registration flows.

🔧 Tech Stack
Layer	Technology
Frontend	React, Axios
Backend	Node.js, Express
Database	MongoDB, Mongoose
🌐 API Endpoints
Method	Endpoint	Description
POST	/api/personal-details	Submit personal details form
GET	/api/personal-details	Fetch all submitted profiles
🚀 Run Backend
Setup
cd server
npm install

Run the Server
node server.js


Runs on http://localhost:5000

Make sure MongoDB is running locally on mongodb://localhost:27017/matrimony

💻 Run Frontend
Setup
cd client
npm install

Start React App
npm start


React app will run at http://localhost:3000

Make sure the backend is running for API calls to work.

📁 Folder Structure
personal-details-form/
├── client/                      # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── PersonalDetailsForm.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                      # Express backend
│   └── server.js
│   └── package.json
│
└── README.md                    # Project documentation
