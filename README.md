# Feedback Collector

A professional-grade, single-page React application for collecting and managing user feedback with a modern, minimalistic design.

## Features

- **Modern UI Design**: Clean, minimalistic interface with intuitive user experience
- **Feedback Form**: Collect user feedback with real-time validation and visual feedback
- **Admin View**: Toggle between user and admin views with a single click
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **MongoDB Integration**: Secure storage and retrieval of feedback data
- **Form Validation**: Client-side validation with user-friendly error messages
- **Loading States**: Visual feedback during data submission and retrieval

## Tech Stack

### Frontend
- React 18 (with Vite)
- TailwindCSS for styling with custom design system
- JavaScript ES6+
- Custom hooks for state management
- Responsive design principles

### Backend
- Express.js with structured MVC architecture
- MongoDB (with Mongoose) for data persistence
- Node.js
- Environment-based configuration

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/sujal862/FeedbackCollector.git
   cd FeedbackCollector
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


## Project Structure

```
FeedbackCollector/
├── frontend/
│   ├── src/             # React components, hooks, and utilities
│   ├── public/          # Static assets
│   └── index.html       # HTML template
└── backend/
    ├── config/          # Configuration files
    ├── controllers/     # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── server.js        # Express server setup
```

## Design Patterns

### Modern UI Design
- **Minimalistic Approach**: Clean interfaces with ample white space for better readability
- **Card-Based Layout**: Content organized in well-defined cards with subtle shadows and borders
- **Iconography**: Meaningful icons to enhance visual communication
- **Consistent Color Scheme**: Harmonious color palette that works in both light and dark modes
- **Micro-interactions**: Subtle animations and transitions for better user experience

### Backend Architecture
- **MVC Pattern**: Separation of Models, Views (Routes), and Controllers
- **Modular Structure**: Code organized in dedicated folders by functionality
- **Middleware Pattern**: Reusable middleware for error handling and request processing
- **Repository Pattern**: Data access logic encapsulated in models

## License

MIT

## Author

Sujal Raj
