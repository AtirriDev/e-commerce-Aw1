import { navbar } from "../componentes/navbar.js"
import { Card } from "../componentes/card.js";

let contCardAcc = document.getElementById("cards");
let navContenedor = document.querySelector(`header`)
const cate = document.getElementById("categoria").value;

let CarritoCompras = []

/* Codigo para deslogearse */

    /* Primero obtenemos el usario que se logeo */
    const ObtenerUsuario = (usuario) =>{

      return JSON.parse(sessionStorage.getItem(usuario));
  }
  const LogOut=(user)=>
  {
      sessionStorage.removeItem(user)
  }

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar

    const prodCarrito = JSON.parse(localStorage.getItem('Carrito'))
    const infousuario = ObtenerUsuario('usuario')
    console.log(infousuario)

    if(prodCarrito){
      prodCarrito.forEach(element => {

          
          console.log(element.Producto)
          CarritoCompras.push(element)
      
  
  });
}


    /* Logout */
    document.getElementById('btnLogOut').addEventListener('click',()=>{
      LogOut('usuario');
      window.location.href = 'http://127.0.0.1:5502/index.html';
    })
    


})


let CatalogoStock = [];
fetch('/Datos/Productos.json').then(resp => resp.json()).then(productos => {
     
    let Catalogo  = [];
    if (cate === "Home") {
        const Calzado = productos.filter(producto => producto.Categoria === 'Calzado');
        const Accesorios = productos.filter(producto => producto.Categoria === 'Accesorios');
        const Indumentaria = productos.filter(producto => producto.Categoria === 'Indumentaria');
    
        let calselecc = Calzado.slice(0,3)
        let Accselecc = Accesorios.slice(0,3)
        let Indselecc = Indumentaria.slice(0,3)
   
         Catalogo = calselecc.concat(Accselecc,Indselecc)
        productos.forEach(element => {
          CatalogoStock.push(element);
        });
        console.log(CatalogoStock);
        localStorage.setItem('StockProductos',JSON.stringify(CatalogoStock)) 
    }else{
         Catalogo = productos.filter(producto => producto.Categoria === cate);
    }
  
    // Recorrer Accesorios y usar la función del componente Card
    Catalogo.forEach(producto => {
      contCardAcc.innerHTML += Card(producto);
      
    });
  });

/* FUNCIONALIDAD DEL BOTON COMPRAR */
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


/*FUNCIONALIDAD DEL BOTON DETALLE */




  document.addEventListener('click', function(event) {
      const boton = event.target;
      
      if (boton.classList.contains('detalle')) {
          RedirigirDetalle2(boton);
          console.log("Hola, soy el evento de clic el producto es el id :" + boton.id);
      }
  });


    function RedirigirDetalle2(boton) {
      // Comprueba si existe el elemento del botón
      if (boton) {
        // Redirige a la página de detalles utilizando el ID del botón
        localStorage.setItem('ProductoSeleccionado',JSON.stringify(boton.id))
        window.location.href = 'http://127.0.0.1:5502/Pag-Privadas/paginaDesc.html';
      } 
    }

    /* FUNCIONALIDAD DEL BOTON AGREGAR CARRITO */
    document.addEventListener('click', function(event) {
      const boton = event.target;
      
      if (boton.classList.contains('comprar2')) {
          // La función para manejar la compra se ejecuta aquí
          BotonComprar(boton);
      }
  
 
  
 
});