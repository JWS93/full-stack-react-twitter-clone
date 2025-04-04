import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export const newUser = async (username, email, password) => {
  try {
    const response = await fetch('api/users', {
      method: 'POST',
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
