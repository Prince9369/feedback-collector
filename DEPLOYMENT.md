# Deployment Guide for Feedback Collector

This guide provides detailed instructions for deploying the Feedback Collector application to Netlify (frontend) and Render (backend).

## Prerequisites

Before you begin, make sure you have:

1. A GitHub account with the repository cloned/forked
2. A MongoDB Atlas account (free tier is sufficient)
3. A Netlify account (free tier is sufficient)
4. A Render account (free tier is sufficient)

## Step 1: Set Up MongoDB Atlas Database

1. **Create a MongoDB Atlas account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account

2. **Create a new cluster**:
   - Choose the free tier option (M0 Sandbox)
   - Select a cloud provider and region closest to your users
   - Click "Create Cluster"

3. **Set up database access**:
   - Go to "Database Access" under Security
   - Add a new database user with password authentication
   - Give the user "Read and Write to Any Database" permissions
   - Save the username and password for later use

4. **Set up network access**:
   - Go to "Network Access" under Security
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (for deployment) or add specific IP addresses
   - Click "Confirm"

5. **Get your connection string**:
   - Go to "Databases" and click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user's password
   - Replace `<dbname>` with a name for your database (e.g., "feedback-collector")

## Step 2: Deploy Backend to Render

1. **Create a Render account**:
   - Go to [Render](https://render.com/)
   - Sign up for a free account

2. **Deploy the backend**:
   - Click "New" and select "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure the service**:
   - Name: `feedback-collector-backend`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Select the "Free" plan

4. **Set up environment variables**:
   - Scroll down to the "Environment" section
   - Add the following key-value pairs:
     - `NODE_ENV`: `production`
     - `PORT`: `5000`
     - `MONGODB_URI`: Your MongoDB Atlas connection string from Step 1
     - `FRONTEND_URL`: Leave blank for now (we'll update after deploying the frontend)

5. **Create Web Service**:
   - Click "Create Web Service"
   - Wait for the deployment to complete
   - Note the URL of your deployed backend (e.g., `https://feedback-collector-backend.onrender.com`)

## Step 3: Deploy Frontend to Netlify

1. **Create a Netlify account**:
   - Go to [Netlify](https://app.netlify.com/)
   - Sign up for a free account

2. **Deploy the frontend**:
   - Click "New site from Git"
   - Connect to your GitHub repository
   - Select the repository

3. **Configure build settings**:
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/dist`
   - Click "Show advanced" and add an environment variable:
     - Key: `VITE_API_URL`
     - Value: Your Render backend URL from Step 2 (e.g., `https://feedback-collector-backend.onrender.com`)

4. **Deploy site**:
   - Click "Deploy site"
   - Wait for the deployment to complete
   - Note the URL of your deployed frontend (e.g., `https://your-feedback-collector.netlify.app`)

## Step 4: Update Backend CORS Settings

1. **Go back to your Render dashboard**
2. **Select your backend service**
3. **Go to the "Environment" section**
4. **Update the `FRONTEND_URL` variable** with your Netlify URL from Step 3
5. **Click "Save Changes"**
6. Your backend will automatically redeploy with the updated settings

## Step 5: Verify the Deployment

1. **Open your Netlify URL** in a browser
2. **Test the feedback form** by submitting a test message
3. **Switch to the admin view** to verify that your submission was saved to the database

## Troubleshooting

If you encounter issues with the deployment:

1. **Check the logs**:
   - Netlify: Go to your site > Deploys > Select the latest deploy > View deploy log
   - Render: Go to your service > Logs

2. **Verify environment variables**:
   - Make sure all environment variables are set correctly
   - Check that the MongoDB URI is correct and accessible

3. **Check CORS issues**:
   - Open browser developer tools (F12) and look for CORS errors in the Console
   - Ensure the `FRONTEND_URL` in your backend environment variables matches your Netlify URL exactly

4. **Database connection issues**:
   - Verify that your MongoDB Atlas cluster is running
   - Check that your IP whitelist includes `0.0.0.0/0` or the Render IP addresses

5. **Deployment fails**:
   - Check that your repository structure matches the expected structure
   - Ensure all dependencies are correctly listed in package.json

## Maintenance

1. **Monitor your application**:
   - Regularly check the logs for errors
   - Set up monitoring tools if needed

2. **Update dependencies**:
   - Periodically update your dependencies to fix security issues
   - Test thoroughly after updates

3. **Backup your database**:
   - MongoDB Atlas provides automated backups on paid plans
   - Consider setting up manual backups for the free tier

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
