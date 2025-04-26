// Import MongoDB client
const { MongoClient } = require('mongodb');

// MongoDB connection string from environment variable
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'feedback-collector';
const COLLECTION_NAME = 'feedbacks';

// Handler function for the API endpoint
exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Connect to MongoDB
  let client;
  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    const database = client.db(DB_NAME);
    const collection = database.collection(COLLECTION_NAME);
    
    // Get all feedbacks, sorted by timestamp (newest first)
    const feedbacks = await collection.find({})
      .sort({ timestamp: -1 })
      .toArray();
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(feedbacks)
    };
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch feedbacks' })
    };
  } finally {
    if (client) {
      await client.close();
    }
  }
};
