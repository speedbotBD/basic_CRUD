# Basic CRUD API

## Project Description

This project was created as my first hands-on practice with backend development using Node.js and Express.js.

Through this project, I learned how to set up a backend project, install and use npm packages, create a REST API, organize project files, and understand how middleware works. I also practiced connecting MongoDB with Mongoose to store and manage student data.

## Features

- Create a new student
- Retrieve all students
- Retrieve a single student by ID
- Update student information
- Delete a student by ID
- Validate student data when creating a student
- Connect to MongoDB using Mongoose
- Log HTTP requests using Morgan
- Handle errors using Express middleware

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Morgan

## Project Structure

```text
CURD_Project/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── student.controller.js
│   ├── models/
│   │   └── student.js
│   ├── services/
│   │   └── student.service.js
│   └── data/
│       └── students.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Folder and File Responsibilities

- **app.js:** Configures the Express application, middleware, routes, and server.
- **config/db.js:** Connects the application to MongoDB.
- **controllers/:** Handles incoming requests and sends responses.
- **models/:** Defines the Student schema and Mongoose model.
- **services/:** Contains the database operations for students.
- **data/:** Contains the original student data file used during practice.

## Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas or a local MongoDB server

### 1. Clone the Repository

```bash
git clone https://github.com/speedbotBD/basic_CRUD.git
```

### 2. Navigate to the Project Folder

```bash
cd basic_CRUD
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root directory.

Add the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB connection string. Never commit your real database credentials to GitHub.

### 5. Start the Server

```bash
node src/app.js
```

If the database connection succeeds, the application will start listening on the configured port.

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/student` | Retrieve all students |
| GET | `/student/:id` | Retrieve a student by ID |
| POST | `/student` | Create a new student |
| PUT | `/student/:id` | Update a student's information |
| DELETE | `/student/:id` | Delete a student by ID |

### Student Data Fields

A student record contains the following fields:

- `name`: Student's name (String)
- `age`: Student's age (Number, between 1 and 100)
- `dept`: Student's department (String)

## Testing

You can test the API endpoints using Postman by sending HTTP requests to your local server.

For example, if the server is running on port 5000, the endpoint for retrieving all students is:

`http://localhost:5000/student`

## Future Improvements

- Improve input validation for all endpoints
- Add more detailed error handling
- Add automated API tests
- Improve API documentation
- Implement authentication and authorization
- Deploy the application to a hosting platform

## Learning Outcomes

By building this project, I practiced the fundamentals of backend development, REST API design, Express middleware, project structure, MongoDB integration, and basic CRUD operations.

This project represents my first practical step toward becoming a backend developer.
