Student Management System
A simple web-based Student Management System for managing student records (CRUD operations).

Features
Add, update, delete, and view student details
Search for students by ID
Basic error handling
Tech Stack
Backend: Node.js, Express
Database: MongoDB
Installation
Clone the repo:


git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
Install dependencies:


npm install
Set up MongoDB: Create a .env file:

env
MONGO_URI=your_mongo_db_connection_string
PORT=3000
Run the app:

npm start
API Endpoints
Method	Endpoint	Description
POST	/students	Create a new student
GET	/students	Get all students
GET	/students/:id	Get a student by ID
PUT	/students/:id	Update a student by ID
DELETE	/students/:id	Delete a student by ID
