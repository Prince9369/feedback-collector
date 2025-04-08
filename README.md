# Feedback Collector

A professional-grade, single-page React application for collecting and managing user feedback.

## Features

- **Feedback Form**: Collect user feedback with validation
- **Admin View**: Toggle between user and admin views
- **Dark/Light Theme**: Toggle between dark and light themes
- **Responsive Design**: Works on all device sizes
- **MongoDB Integration**: Store and retrieve feedback data

## Tech Stack

### Frontend
- React (with Vite)
- TailwindCSS for styling
- JavaScript

### Backend
- Express.js
- MongoDB (with Mongoose)
- Node.js

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd feedback-collector
   ```

2. Install dependencies:
   ```
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Environment Setup:
   - Create a `.env` file in the backend directory with the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Backend Deployment
1. Deploy to a Node.js hosting service like Heroku, Render, or Railway
2. Set the environment variables in your hosting dashboard

### Frontend Deployment
1. Build the frontend:
   ```
   cd frontend
   npm run build
   ```
2. Deploy the contents of the `dist` folder to Netlify or Vercel

## Project Structure

```
feedback-collector/
├── frontend/
│   ├── src/
│   │   ├── api/         # API service functions
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── styles/      # CSS and Tailwind styles
│   │   ├── utils/       # Utility functions
│   │   ├── App.jsx      # Main application component
│   │   └── main.jsx     # Entry point
│   ├── public/          # Static assets
│   └── index.html       # HTML template
│
└── backend/
    ├── server.js        # Express server and API routes
    └── package.json     # Backend dependencies
```

## License

MIT

## Author

Sujal Raj
