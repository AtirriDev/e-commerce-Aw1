import { navbar } from "./componentes/navbar.js"




let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})



/*Declaramos un arreglo con los datos de la card  */
const ElementosCard= [
    {Marca:'Nike',Categoria: 'Accesorios',Producto:'Gorra SB aero' , Precio:"$20000", imagen:"https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/6/2/629243-459_0.jpg"},
    {Marca:'Adidas',Categoria: 'Accesorios',Producto:'Medias 3/4 Pack x3' , Precio:"$5100", imagen:"https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/m/e/medias-ca-a-alta-adidas-3-tiras-100040dz9345001-1.jpg"},
    {Marca:'Revolver',Categoria: 'Accesorios',Producto:'Bufanda RvR' , Precio:"$8000", imagen:"https://www.digitalsport.com.ar/files/products/661ffde9dd5d2-648066-500x500.jpg"},
    {Marca:'Puma',Categoria: 'Accesorios',Producto:'Morral Cross Body' , Precio:"$17000", imagen:"https://www.digitalsport.com.ar/files/products/65a92cb204027-624720-500x500.jpg"},
    {Marca:'New Era',Categoria: 'Accesorios',Producto:'Gorra Fish Koi' , Precio:'$9500', imagen:"https://www.digitalsport.com.ar/files/products/662c3eefe968b-651630-500x500.jpg"},
    {Marca:'Jordan',Categoria: 'Accesorios',Producto:'Mochila Air jordan' , Precio:'$18000',imagen:"https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/7/A/7A0654-W0J_1.jpg" },


]

let contCardAcc = document.getElementById("cards");

 const CardAcc = `



    ${
        
      ElementosCard.map(e=>{  
        contCardAcc.innerHTML +=`
                
        <div class="col">
            <div class="Card" >
      
                  <div class="text-center">
                      <img class="imagenes" src=${e.imagen} alt="" >
                  </div>
              
                  <div class="card-body">
                      <h5>${e.Marca}</h5>
                      <h4><b>${e.Producto}</b></h4>
                  </div>
                  <div class="card-footer">
                      <div>
                          <div class="col" style="display: flex; flex-direction: row; gap: 5px; align-items:center">
                          <h5 class="price">${e.Precio}</h5>
                          <input type="number" class="form-control" min="0" max="5" placeholder="0" step="1" style="height: 40px">
                      </div>
                  </div>
                  
                  <div>
                      <button class="btn" id="Comprar">COMPRAR</button>
                  </div>
          
             </div>
         </div>
          
  `
        
      
       
         
      }).join(``)
  }
      
`