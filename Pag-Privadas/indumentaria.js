import { navbar } from "../componentes/navbar.js"
import { Card } from "../componentes/card.js";


let contCardAcc = document.getElementById("cards");
let navContenedor = document.querySelector(`header`)
let CarritoCompras = []


window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar

    // codigo para el carrito 
    //Pasamos el local storage al vector con los usuarios al vector
   const carritoLocal = JSON.parse(localStorage.getItem('Carrito'))


 
   if(!carritoLocal){
        console.log('No hay productos en el local para agregar')
        CarritoCompras=[]
   }else{
      console.log('se cargaron productos desde el local')
          for (let i = 0; i < carritoLocal.length; i++) {
        
            
            CarritoCompras.push(carritoLocal[i]);
            
        }
        
        localStorage.setItem('Carrito',JSON.stringify(CarritoCompras))
   }
   
})

fetch('/Datos/Productos.json').then(resp => resp.json()).then(productos => {
    
    const Indumentaria = productos.filter(producto => producto.Categoria === 'Indumentaria');
    
  
    // Recorrer Accesorios y usar la función del componente Card
    Indumentaria.forEach(producto => {
      contCardAcc.innerHTML += Card(producto); 
    });
  });
    