import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export const login = async (username, password) => {
  try {
    const response = await fetch('api/sessions', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });

    if (response.ok) {
      return { successs: true };
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
    const response = await fetch('api/sessions', {
      method: 'GET',
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