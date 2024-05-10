import { navbar } from "./componentes/navbar.js"




let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})



/*Declaramos un arreglo con los datos de la card  */
const ElementosCard= [
    {Marca:'Adidas',Categoria: 'Calzado',Producto:'Adidas OZWEEGO' , Precio:"$45000", imagen:"https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/718k23653a8jlma530bhvatlnb70/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"},
    {Marca:'Adidas',Categoria: 'Calzado',Producto:'Adidas Adi2000 X' , Precio:"$51000", imagen:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe441ad71/products/ADHQ6773/ADHQ6773-1.JPG"},
    {Marca:'Nike',Categoria: 'Calzado',Producto:'Nike Air Force 1' , Precio:"$80000", imagen:"https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/F/B/FB8877-200_0.jpg"},
    {Marca:'Puma',Categoria: 'Calzado',Producto:'Puma Ca Pro Classic' , Precio:"$40000", imagen:"https://newsport.vtexassets.com/arquivos/ids/17323926-800-auto?v=638342663125170000&width=800&height=auto&aspect=true"},
    {Marca:'Nike',Categoria: 'Calzado',Producto:'Nike Air Force 1 mid' , Precio:'$95000', imagen:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbf57af98/products/NIDZ2554-100/NIDZ2554-100-2.JPG"},
    {Marca:'Puma',Categoria: 'Calzado',Producto:'Puma Rs- x Efect' , Precio:'$42000',imagen:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc4e894d0/products/PU390048-03/PU390048-03-1.JPG" }
    
    

]

let contCardInd = document.getElementById("cards");

 const CardInd = `



    ${
        
      ElementosCard.map(e=>{  
        contCardInd.innerHTML +=`
                
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

