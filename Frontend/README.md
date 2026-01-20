#  Employee Directory Management System (MERN)

A full-stack **Employee Directory Management System** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This application allows users to **add, view, search, edit, and delete employees** with a clean and user-friendly interface.

This project was developed as part of an assignment and follows proper **project structure, documentation, and coding standards**.

---

##  Features

- Add new employee
- View all employees in a dashboard
- Search employees by **name** or **department**
- Edit existing employee details
- Delete employee
- Reusable components
- Proper API structure (REST)
- Fully documented code (JSDoc style)
- Clean and responsive UI

---

## Tech Stack

### Frontend:
- React.js
- React Router DOM
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

---

## Project Structure

root
├── backend
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── server.js
│ └── .env
│
└── frontend
├── src
│ ├── components
│ ├── pages
│ ├── services
│ ├── App.js
│ └── index.js


---

## Installation & Setup

### Clone the Repository

```bash
git clone <your-github-repo-url>

2️. Backend Setup
cd backend
npm install


Create a .env file inside backend folder and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start backend server:
npm start
Server will run on:
http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start
Frontend will run on:
http://localhost:3000


🔗 API Endpoints:

Method	Endpoint	Description
GET	/api/employees	Get all employees
GET	/api/employees/:id	Get employee by ID
POST	/api/employees	Add new employee
PUT	/api/employees/:id	Update employee
DELETE	/api/employees/:id	Delete employee

🖥️ Application Pages:

🏠 Employee List (Dashboard)
➕ Add Employee
✏️ Edit Employee

🧠 Project Highlights:

Follows MVC architecture in backend
Uses service layer in frontend for API calls
Fully reusable components
Clean separation of concerns
All major files are properly documented

📸 Screenshots

(Add screenshots here if required)

👨‍💻 Author:

Avijit Sharma
B.Tech CSE Student

📄 License

This project is for educational / assignment purposes.

Submission Note:

This project fulfills all the requirements mentioned in the assignment:
CRUD operations
Search functionality
Clean UI
Proper documentation
Structured codebase

Thank you!


