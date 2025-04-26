// Import MongoDB client
const { MongoClient } = require('mongodb');

// MongoDB connection string from environment variable
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'feedback';
const COLLECTION_NAME = 'feedbacks';

// Handler function for the API endpoint
exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Parse the request body
  let feedbackData;
  try {
    feedbackData = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid request body' })
    };
  }

  // Validate required fields
  const { fullName, email, message } = feedbackData;
  if (!fullName || !email || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing required fields' })
    };
  }

  // Add timestamp if not provided
  if (!feedbackData.timestamp) {
    feedbackData.timestamp = new Date().toISOString();
  }

  // Connect to MongoDB
  let client;
  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();

    const database = client.db(DB_NAME);
    const collection = database.collection(COLLECTION_NAME);

    // Insert the feedback
    const result = await collection.insertOne(feedbackData);

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({
        success: true,
        feedback: { ...feedbackData, _id: result.insertedId }
      })
    };
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to submit feedback' })
    };
  } finally {
    if (client) {
      await client.close();
    }
  }
};
