function saveUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
}

// Get users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      saveUser(username, password);
      alert('Registered successfully!');
      window.location.href = 'login.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      const users = getUsers();
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        alert('Login successful!');
        window.location.href = 'hospitals.html';
      } else {
        alert('Invalid credentials');
      }
    });
  }
});