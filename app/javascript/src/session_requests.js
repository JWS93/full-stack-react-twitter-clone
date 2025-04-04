
export const login = async (username, password) => {
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    const response = await fetch('api/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ user: { username, password } }),
      credentials: 'include',
    });

    if (response.ok) {
      return { success: true };
    } else {
      const data = await response.json();
      return { success: false, errors: data.errors || ['Login Failed'] };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, errors: ['Network error'] };
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch('api/authenticated', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, user: data.user };
    } else {
      return { success: false, user: null };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, user: null, errors: ['Network error'] };
  }
};