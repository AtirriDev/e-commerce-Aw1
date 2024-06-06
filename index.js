const form = document.getElementById('login')
const mimodal= document.getElementById('modal')

let UsuariosVector = []


const usuariosLocalStorage = JSON.parse(localStorage.getItem('usuarios'));

// verificamos si el Local storage tiene algo si no tiene nada cargamos los usuarios desde el json 
if (!usuariosLocalStorage || usuariosLocalStorage.length === 0){
  fetch('./Datos/usuarios.json')
  .then(response => response.json())
  .then(data => {
    

   
    localStorage.setItem('usuarios',JSON.stringify(data)) 
    console.log("usuarios cargados desde el archivo usuarios.json")
  })
  .catch(error => console.error('Error al leer el archivo JSON:', error));
}else {
  console.log("ya hay usuarios cargados en el Local y el vector")
}

 

  
  
// Cuando carga la pagina se fija si tiene un usuario en Session storage , si lo tiene quiere decir q alguien se registro
window.addEventListener('load', () => {
    // pasamos a una variable el usuario si es que lo hay en el session
    const usuarioSession = JSON.parse(sessionStorage.getItem('usuario'));
    
    //Pasamos el local storage al vector con los usuarios al vector
    const usuariosLocal = JSON.parse(localStorage.getItem('usuarios'))
    for (let i = 0; i < usuariosLocal.length; i++) {
    

      UsuariosVector.push(usuariosLocal[i]);
    }
    
    
    // si hay un usuario registrado en el session lo agregamos al vector de usuarios y lo sacamos del session 
    if (usuarioSession) {
      // Asi hay usuario lo agrego al vector
      UsuariosVector.push(usuarioSession);
      sessionStorage.clear();
      
      // Guardamos / actualizamos todos los usuarios en locastorage
      localStorage.setItem('usuarios',JSON.stringify(UsuariosVector))
      console.log("se agrego usuario desde registro ")
    }else{
      console.log("no hay usuario para agregar")
    }
});


/// metodo para verificacion del login 
form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let usuarioEmail = document.getElementById('txtUsuario').value
  let usuarioPass = document.getElementById('txtPass').value
  
  const user = UsuariosVector.find(e=> e.email == usuarioEmail && e.pass === usuarioPass)
      if (!user) 
        {
            modal.style.display = 'block'; // Display the modal
            modal.addEventListener('click', (event) => {
                if (event.target === modal.querySelector('.modal-content')) {
                  return; 
                }
                modal.style.display = 'none'; 
              });
        }
        else
        {
            /*Session Storage*/
            sessionStorage.setItem('usuario', JSON.stringify(user))
            console.log(user);
            window.location.href = 'http://127.0.0.1:5502/Pag-Privadas/Home.html';
        }
    
 });
      
     
     




