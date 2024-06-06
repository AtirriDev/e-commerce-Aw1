import { navbar } from "../componentes/navbar.js"
import { Card } from "../componentes/card.js";


let contCardAcc = document.getElementById("cards");
let navContenedor = document.querySelector(`header`)

/* Codigo para deslogearse */

    /* Primero obtenemos el usario que se logeo */
const ObtenerUsuario = (usuario) =>{

    return JSON.parse(sessionStorage.getItem(usuario));
}
const LogOut=(user)=>
{
    sessionStorage.removeItem(user)
}






/* Carga de navbar y las cards */
window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
   
    const infousuario = ObtenerUsuario('usuario')
    console.log(infousuario)

    document.getElementById('btnLogOut').addEventListener('click',()=>{
        LogOut('usuario');
        window.location.href = 'http://127.0.0.1:5502/index.html';
    })
    
   
    
})

fetch('/Datos/Productos.json').then(resp => resp.json()).then(productos => {
    console.log(productos)
    const Calzado = productos.filter(producto => producto.Categoria === 'Calzado');
    const Accesorios = productos.filter(producto => producto.Categoria === 'Accesorios');
    const Indumentaria = productos.filter(producto => producto.Categoria === 'Indumentaria');
   
    let calselecc = Calzado.slice(0,3)
    let Accselecc = Accesorios.slice(0,3)
    let Indselecc = Indumentaria.slice(0,3)
   
    const Prodhome = calselecc.concat(Accselecc,Indselecc)
    console.log(Prodhome)
    
   
    // Recorrer Accesorios y usar la función del componente Card
    Prodhome.forEach(producto => {
        contCardAcc.innerHTML += Card(producto); 
      });
    
    
    
    
})
    
