

const Usuarios= [ 
  {nombre:'Pablo',apellido:'caboni burgos',FechaNac:'16/09/1991',email: 'pablo@ejemplo.com',password: '1010'},
  {nombre:'joaco',apellido:'perez',FechaNac:'11/05/1994',email: 'usuario@ejemplo.com',password: '123456'}



]

function login() {
    
    event.preventDefault()
  
    // Obtener los valores ingresados por el usuario
    const email = document.getElementById('txtUsuario').value;
    const password = document.getElementById('txtPass').value;
  
  const usuarioEncontrado = Usuarios.find(usuario => usuario.email === email);

  // Validate credentials
  if (usuarioEncontrado && usuarioEncontrado.password === password) {
    // Login successful, redirect to home page
    window.location.href = 'home.html';
  } else {
    // Invalid credentials, display an error message
    alert('Usuario no registrado o datos incorrectos. Verifique nuevamente.');
  }

  return false;
    
       
    }
  








