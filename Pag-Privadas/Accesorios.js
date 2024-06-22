import { navbar } from "../componentes/navbar.js"
import { Card } from "../componentes/card.js";


let contCardAcc = document.getElementById("cards");
let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})

fetch('/Datos/Productos.json').then(resp => resp.json()).then(productos => {
    
    const Accesorios = productos.filter(producto => producto.Categoria === 'Accesorios');
   
  
    // Recorrer Accesorios y usar la función del componente Card
    Accesorios.forEach(producto => {
      contCardAcc.innerHTML += Card(producto); 
    });
  });