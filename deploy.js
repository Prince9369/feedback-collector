/**
 * Deployment helper script
 * 
 * This script helps prepare the project for deployment to Netlify.
 * It copies necessary files and ensures the correct structure.
 */

const fs = require('fs');
const path = require('path');

// Create netlify directory if it doesn't exist
if (!fs.existsSync('netlify')) {
  fs.mkdirSync('netlify');
}

// Create functions directory if it doesn't exist
if (!fs.existsSync('netlify/functions')) {
  fs.mkdirSync('netlify/functions');
}

// Copy MongoDB dependency to functions directory
if (!fs.existsSync('netlify/functions/node_modules')) {
  console.log('Installing MongoDB dependency for Netlify Functions...');
  const { execSync } = require('child_process');
  execSync('cd netlify/functions && npm install mongodb', { stdio: 'inherit' });
}

console.log('Deployment preparation complete!');
console.log('');
console.log('Next steps:');
console.log('1. Push your code to GitHub');
console.log('2. Create a new site on Netlify');
console.log('3. Connect to your GitHub repository');
console.log('4. Configure the build settings as described in the README');
console.log('5. Set up the MONGODB_URI environment variable');
console.log('6. Deploy your site');
console.log('');
console.log('Happy deploying!');
