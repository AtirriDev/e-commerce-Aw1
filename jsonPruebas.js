
const form = document.getElementById('form'); // Get the registration form element

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get user data from form fields
  const nombre = document.getElementById('txtNombre').value;
  const apellido = document.getElementById('txtApellido').value;
  const fechaNacimiento = document.getElementById('dtpFecha').value;
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPass').value;

  // Create a new user object
  const newUser = {
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento,
    email: email,
    password: password,
  };

  // Read existing user data (if any)
  let userData = [];
  try {
    // Instead of reading from a file, check for existing data in localStorage
    const storedData = localStorage.getItem('usuarios');
    if (storedData) {
      userData = JSON.parse(storedData);
    }
  } catch (err) {
    // Handle potential errors (e.g., corrupted data in localStorage)
    console.error('Error reading user data from localStorage:', err);
  }

  // Add the new user to the data array
  userData.push(newUser);
  console.log(newUser);

  // Write the updated user data to localStorage
  try {
    sessionStorage.setItem('usuarios', JSON.stringify(userData));
    console.log(userData);

    // Optionally, clear the form or display a success message
  } catch (err) {
    console.error('Error', err);
    // Handle potential errors (e.g., storage quota exceeded)
  }
});



            
         
        
      
       
         
    

      




        
                       
               