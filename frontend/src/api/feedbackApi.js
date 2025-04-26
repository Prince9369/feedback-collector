/**
 * Submit feedback to the server
 * @param {Object} feedbackData - The feedback data to submit
 * @returns {Promise} - The response from the server
 */
export const submitFeedback = async (feedbackData) => {
  try {
    // Use environment variable for API URL or default to localhost in development
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const response = await fetch(`${API_URL}/submit-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }
    return await response.json();

  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

/**
 * Get all feedbacks from the server
 * @returns {Promise} - The response from the server
 */

export const getFeedbacks = async () => {
  try {
    // Use environment variable for API URL or default to localhost in development
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const response = await fetch(`${API_URL}/feedbacks`);

    if (!response.ok) {
      throw new Error('Failed to fetch feedbacks');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    throw error;
  }
};
