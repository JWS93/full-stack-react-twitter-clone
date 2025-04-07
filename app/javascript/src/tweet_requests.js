export const postTweet = async (message) => {
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    const response = await fetch('api/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ tweet: { message } }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const errorData = await response.json();
      return { success: false, errors: errorData.errors || ['Something went wrong'] };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, errors: ['Network error'] };
  }
};

export const getAllTweets = async () => {
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    const response = await fetch('api/tweets', {
      method: 'GET',
      headers: {
        'X-CSRF-Token': csrfToken
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const errorData = await response.json();
      return { success: false, errors: errorData.errors || ['Something went wrong'] };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, errors: ['Network error'] };
  }
};