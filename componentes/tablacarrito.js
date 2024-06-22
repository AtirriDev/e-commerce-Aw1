export function carrito_tabla(producto){
    
    return `
                 
            <tr>
                        <td> <img src="${producto.imagen}" alt="" width="100" height="100"></td>
                        <td ">${producto.Producto + " " +producto.Marca}</td>
                        <td ">$${producto.Precio}</td>
                        <td ">${producto.Cantidad}</td>
                        <td ">${producto.Cantidad * producto.Precio} </td>
                        <td "><button class="btn fa-solid fa-trash-can" id=${producto.id} ><i  i></i></button></td>
             </tr>
           
   `;
 }    