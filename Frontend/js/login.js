 // Inicio de sesión con verificación de administrador
 function loginUser(event) {
   event.preventDefault();
 
   const username = document.getElementById('login-username').value;
   const password = document.getElementById('login-password').value;
 
   const users = JSON.parse(localStorage.getItem('users')) || [];
   
   // Verificación del administrador
   if (username === 'admin' && password === '1234') {
     alert(`Bienvenido, administrador`);
     console.log("Administrador logueado");
     localStorage.setItem('loggedInUser', 'admin');  
     window.location.href = '/Frontend/html/admin.html';  
     return;
   }
 
   // Verificación de un usuario normal
   const user = users.find(u => u.username === username && u.password === password);
 
   if (user) {
     alert(`Bienvenido, ${user.username}`);
     localStorage.setItem('loggedInUser', username);  
     window.location.href = '/index.html'; 
   } else {
     alert('Usuario o contraseña incorrectos');
   }
 }

 // Agregar los event listeners en los formularios
 document.addEventListener('DOMContentLoaded', function() {
   const registerForm = document.getElementById('register-form');
   const loginForm = document.getElementById('login-form');

   if (loginForm) {
     loginForm.addEventListener('submit', loginUser);
   }
 });

 document.getElementById('hamburger-btn').addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active'); 
});
/* Cambio de modo oscuro - claro vs claro - oscuro */
document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Aplicar el tema guardado en localStorage
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Modo Claro';
  } else {
    themeToggleBtn.textContent = 'Modo Oscuro';
  }

  // Evento de clic en el botón para alternar el tema
  themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Verificar el estado actual y actualizar el botón
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = 'Modo Claro';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = 'Modo Oscuro';
      localStorage.setItem('theme', 'light');
    }
  });
});