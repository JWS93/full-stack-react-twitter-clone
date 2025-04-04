
export const newUser = async (username, email, password) => {
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    const response = await fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({
        user: { username, email, password },
      }),
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
