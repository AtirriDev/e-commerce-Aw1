import { navbar } from "../componentes/navbar.js"
import { Card } from "../componentes/card.js";


let contCardAcc = document.getElementById("cards");
let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})

fetch('/Datos/Productos.json').then(resp => resp.json()).then(productos => {
    console.log(productos);
    const Indumentaria = productos.filter(producto => producto.Categoria === 'Indumentaria');
    console.log(Indumentaria);
  
    // Recorrer Accesorios y usar la función del componente Card
    Indumentaria.forEach(producto => {
      contCardAcc.innerHTML += Card(producto); 
    });
  });
    