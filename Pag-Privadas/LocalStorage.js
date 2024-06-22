



let CarritoCompras = []

/* funcion para obtener el producto y sumarlo al local storage*/

window.addEventListener(`load` , () => {
    

    const prodCarrito = JSON.parse(localStorage.getItem('Carrito'))
   
    if(prodCarrito){
            prodCarrito.forEach(element => {

                
                console.log(element.Producto)
                CarritoCompras.push(element)
            
        
        });
    }

    

       
   
    
   
    
})


document.addEventListener('click', function(event) {
    const boton = event.target;
    
    if (boton.classList.contains('comprar')) {
        // La función para manejar la compra se ejecuta aquí
        BotonComprar(boton);
    }
    
   
    
   
});




function BotonComprar(buttonElement) {
    // Identifica el producto asociado al botón
    const Id_Producto = buttonElement.id; // Ejemplo de uso de data-attribute
    //const Cantidad =  document.querySelector(); // Obtener el elemento de entrada para el producto
   
    
    BuscarProducto(Id_Producto)
  

    
}


function BuscarProducto(id){
   

     // obtener los productos del local y buscar con el id obtenido
    let ListaProductos = JSON.parse(localStorage.getItem('StockProductos'))
    
    const cantidadInput = document.getElementById(`cantidad-${id}`);
    const cantidadSeleccionada = cantidadInput.value;
   
    ListaProductos.forEach(element => {
        if(element.id == id){
            
            const NewProducto = {
                id: element.id,
                Marca: element.Marca,
                Categoria: element.Categoria,
                Producto: element.Producto, 
                Precio: element.Precio,
                imagen: element.imagen,
                Cantidad: cantidadSeleccionada

            }
            
            if(NewProducto.Cantidad == 0){
                cantidadInput.classList.add("cantidad-error"); // pintamos de color el contador de cantidad marcando que hay un error
                return
            }
            else{
                CarritoCompras.push(NewProducto)
                localStorage.setItem('Carrito',JSON.stringify(CarritoCompras))
                cantidadInput.value = 0;// volvemos el contador a cero
                cantidadInput.classList.remove("cantidad-error"); // sacamos el error de cantidad si es que sucedio previamente
            }
            
        
            
        }
    });
   console.log(CarritoCompras)

    
}

