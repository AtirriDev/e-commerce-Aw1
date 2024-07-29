
export function Card(producto){
    
    return `
                 
         <div class="col">
             <div class="Card" >
       
                   <div class="text-center">
                       <img class="imagenes" src=${producto.imagen} alt="${producto.Producto +" "+ producto.Marca }" onclick="irAPagina(${producto.id})" >
                   </div>
               
                   <div class="card-body">
                       <h5>${producto.Marca}</h5>
                       <h4><b>${producto.Producto}</b></h4>
                   </div>
                   <div class="card-footer">
                       <div>
                           <div class="col" style="display: flex; flex-direction: row; gap: 5px; align-items:center">
                           <h5 class="price">$${producto.Precio}</h5>
                           <input type="number" id="cantidad-${producto.id}" class="form-control" min="0" max="5" placeholder="0" step="1" style="height: 40px" >
                       </div>
                   </div>
                   
                   <div>
                        <button class="detalle" id="${producto.id}"><b>Ver en detalle</></button>
                        <button class="comprar" id="${producto.id}">COMPRAR</button>
                   </div>
           
              </div>
          </div>
           
   `;
 }    