
const formregistro = document.getElementById('form2'); 



formregistro.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const nombre = document.getElementById('txtNombre').value;
  const apellido = document.getElementById('txtApellido').value;
  const fechaNacimiento = document.getElementById('dtpFecha').value;
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPass').value;

  
  const NuevoUsuario = {
    nombre: nombre,
    apellido: apellido,
    Nacimiento: fechaNacimiento,
    email: email,
    pass: password,
  };



  
  try {
    sessionStorage.setItem('usuario',JSON.stringify(NuevoUsuario))
    
    window.location.href = 'http://127.0.0.1:5502/index.html';
    
  } catch (err) {
    console.error('Error', err);
    
  }
});









            
         
        
      
       
         
    

      




        
                       
              