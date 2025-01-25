# Quiz-App

## Description

Quiz-App is a full-stack application consisting of both a backend API and a frontend user interface. The backend serves questions from a JSON file, while the frontend allows users to interact with the questions. The project is divided into two main folders: frontend (for the React app) and backend (for the Node.js API).

## Features

- The backend serves questions stored in the data/data.json file.
- The frontend allows users to view and interact with the questions.
- The backend API supports fetching all questions or a specific question by its ID.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

### 1. Install dependencies for both frontend and backend

- First, navigate to the frontend folder and install the necessary dependencies:

  ```bash
  cd Frontend
  npm i
  ```

- Then, navigate to the backend folder and install the necessary dependencies:

  ```bash
  cd ../backend
  npm install
  ```

### 2. Running the Application

- **Start the frontend**:

  1. Open a terminal in the `Frontend` folder and run:
     ```bash
     npm run dev
     ```
  2. The frontend will be available at http://localhost:5173.

- **Start the backend**:

  1. Open another terminal in the `Backend` folder and run:

     ```bash
     npm run start:prod
     ```

## Modifying Questions

1. **The questions are stored in a JSON file located at: `data/data.json`**

2. **You can modify this file to add or edit questions. Each question must follow this structure:**
   ```json
   [
     {
       "id": 1,
       "question": "Your question here",
       "choices": ["Choice A", "Choice B", "Choice C", "Choice D"],
       "answer": "A"
     }
   ]
   ```
