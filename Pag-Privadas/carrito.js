import { navbar } from "../componentes/navbar.js"
import { carrito_tabla } from "../componentes/tablacarrito.js";



let Carrito = [
    
   
];
const modalPagar= document.getElementById('modal-pagar')
let navContenedor = document.querySelector(`header`)
let ContTablaProductos = document.getElementById("bodytabla");
const mimodal= document.getElementById('modal')
const btnpagar = document.getElementById('btn-pagar')
let totalCarrito= document.getElementById("total")

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    Carrito = JSON.parse(localStorage.getItem('Carrito'))
    console.log(Carrito)
    let totalparcial = 0
    let totalfinal =0

  if(!Carrito){
    mostrarModalVacio(mimodal)
  }
    
   

   MostrarCarrito(Carrito)

   
   
   


   
    
    
    
    
    
    
    console.log(totalfinal)
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn') && event.target.classList.contains('fa-trash-can')) {
      // Verificar si el clic fue en un botón con las clases 'btn' y 'fa-trash-can'
      
      const idProducto = event.target.id; // Obtener el ID del producto del botón clicado

      console.log('Producto con id : '+ {idProducto} + ' fue eliminado del carrito' )
      eliminarProducto(idProducto); // Llamar a una función para eliminar el producto del vector
    }
  });
  
  function eliminarProducto(id) {
    
    Carrito = Carrito.filter(p => p.id != id);
    
    //Carrito.remove(ProdEliminar)
    console.log(Carrito)


    //mostrar los productos
    
    MostrarCarrito(Carrito);

    //Actualizar el carrito del local
    localStorage.setItem('Carrito',JSON.stringify(Carrito))

    
   
}

function mostrarModalVacio(modal) {
  ContTablaProductos.style.display = 'none';
  modal.style.display = 'block';
 
  
}


function MostrarCarrito(vector){
  let totalparcial = 0
  let totalfinal =0

  // vaciar la tabla 
  ContTablaProductos.innerHTML= "";
    
  if (vector.length === 0) {
    mostrarModalVacio(mimodal); // Mostrar modal cuando el carrito está vacío
  } 
  else {

   
    modal.style.display = 'none'; // Ocultar el modal si hay productos
    vector.forEach(producto => {
        totalparcial = producto.Precio * producto.Cantidad
        totalfinal =totalfinal+ totalparcial
        ContTablaProductos.innerHTML += carrito_tabla(producto); 
      
        let total = "Total : $ " + totalfinal
        totalCarrito.innerHTML = total
   });
   
  }
}

// funcionalidad boton pagar
btnpagar.addEventListener('click',() =>{

  Carrito = []
  localStorage.removeItem('Carrito')
  MostrarCarrito(Carrito)
  mostrarModalVacio(modalPagar)



})
  





   


