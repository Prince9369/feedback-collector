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
- React 19 (with Vite)
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
   git clone https://github.com/Prince9369/feedback-collector.git
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

   Or use the convenience script from the root directory:
   ```
   npm run install:all
   ```

3. Environment Setup:
   - Create a `.env` file in the backend directory with the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     FRONTEND_URL=http://localhost:5173
     NODE_ENV=development
     ```
   - Create a `.env` file in the frontend directory with the following variable:
     ```
     VITE_API_URL=http://localhost:5000
     ```

### Running the Application

1. Run both frontend and backend concurrently:
   ```
   npm run dev
   ```

   Or run them separately:
   ```
   # Start the backend server
   npm run dev:backend

   # Start the frontend development server
   npm run dev:frontend
   ```

2. Open your browser and navigate to `http://localhost:5173`


## Project Structure

```
feedback-collector/
├── frontend/            # Frontend React application
│   ├── src/             # React components, hooks, and utilities
│   │   ├── api/         # API integration
│   │   ├── assets/      # Static assets
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   └── utils/       # Utility functions
│   ├── public/          # Public assets
│   ├── index.html       # HTML template
│   ├── package.json     # Frontend dependencies
│   └── vite.config.js   # Vite configuration
├── backend/             # Backend Express application
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Express middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── server.js        # Express server setup
│   └── package.json     # Backend dependencies
├── LICENSE              # MIT License file
├── README.md            # Project documentation
└── package.json         # Root package.json with scripts
```

## Design Patterns

### UI Design
- Clean interfaces with white space
- Card-based layout
- Meaningful icons
- Consistent colors for light and dark modes
- Subtle animations

### Backend Structure
- MVC Pattern
- Modular organization
- Middleware for error handling
- Data access in models

## License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for more details.

## Deployment

### Step 1: Set Up MongoDB Atlas Database

1. Create a MongoDB Atlas account:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account

2. Create a new cluster:
   - Choose the free tier option (M0 Sandbox)
   - Select a cloud provider and region closest to your users
   - Click "Create Cluster"

3. Set up database access:
   - Go to "Database Access" under Security
   - Add a new database user with password authentication
   - Give the user "Read and Write to Any Database" permissions
   - Save the username and password for later use

4. Set up network access:
   - Go to "Network Access" under Security
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (for development) or add specific IP addresses
   - Click "Confirm"

5. Get your connection string:
   - Go to "Databases" and click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user's password
   - Replace `<dbname>` with a name for your database (e.g., "feedback-collector")

### Step 2: Backend Deployment to Render

1. Create a Render account:
   - Go to [Render](https://render.com/)
   - Sign up for a free account

2. Deploy the backend:
   - Click "New" and select "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. Configure the service:
   - Name: `feedback-collector-backend`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Select the "Free" plan

4. Set up environment variables:
   - Scroll down to the "Environment" section
   - Add the following key-value pairs:
     - `NODE_ENV`: `production`
     - `PORT`: `5000`
     - `MONGODB_URI`: Your MongoDB Atlas connection string from Step 1
     - `FRONTEND_URL`: Leave blank for now (we'll update after deploying the frontend)

5. Click "Create Web Service"
   - Wait for the deployment to complete
   - Note the URL of your deployed backend (e.g., `https://feedback-collector-backend.onrender.com`)

### Step 3: Frontend Deployment to Netlify

1. Create a Netlify account:
   - Go to [Netlify](https://app.netlify.com/)
   - Sign up for a free account

2. Deploy the frontend:
   - Click "New site from Git"
   - Connect to your GitHub repository
   - Select the repository

3. Configure build settings:
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/dist`
   - Click "Show advanced" and add an environment variable:
     - Key: `VITE_API_URL`
     - Value: Your Render backend URL from Step 2 (e.g., `https://feedback-collector-backend.onrender.com`)

4. Click "Deploy site"
   - Wait for the deployment to complete
   - Note the URL of your deployed frontend (e.g., `https://your-feedback-collector.netlify.app`)

### Step 4: Update Backend CORS Settings

1. Go back to your Render dashboard
2. Select your backend service
3. Go to the "Environment" section
4. Update the `FRONTEND_URL` variable with your Netlify URL from Step 3
5. Click "Save Changes"
6. Your backend will automatically redeploy with the updated settings

### Step 5: Verify the Deployment

1. Open your Netlify URL in a browser
2. Test the feedback form by submitting a test message
3. Switch to the admin view to verify that your submission was saved to the database

### Troubleshooting

If you encounter issues with the deployment:

1. Check the Netlify and Render logs for error messages
2. Verify that all environment variables are set correctly
3. Ensure your MongoDB Atlas database is accessible from Render
4. Check that CORS is properly configured to allow requests from your Netlify domain

## Authors

- Original:Prince

