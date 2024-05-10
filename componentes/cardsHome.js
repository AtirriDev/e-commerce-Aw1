const url = 'http://127.0.0.1:5500/'

/*Declaramos un arreglo con los datos de la card  */
const ElementosCard= [
    {Marca:'Adidas',Categoria: 'Calzado',Producto:'Adidas OZWEEGO' , Precio:"$45000", imagen:"https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/718k23653a8jlma530bhvatlnb70/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"},
    {Marca:'Stussy',Categoria: 'Indumentaria',Producto:'Remera Zion' , Precio:"$18500", imagen:"https://http2.mlstatic.com/D_NQ_NP_826032-MLA73028709156_112023-O.webp"},
    {Marca:'New Era',Categoria: 'Accesorios',Producto:'Gorra Fish Koi' , Precio:'$9500', imagen:"https://www.digitalsport.com.ar/files/products/662c3eefe968b-651630-500x500.jpg"},
    {Marca:'Adidas',Categoria: 'Calzado',Producto:'Adidas Adi2000 X' , Precio:"$51000", imagen:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe441ad71/products/ADHQ6773/ADHQ6773-1.JPG"},
    {Marca:'Tussy',Categoria: 'Indumentaria',Producto:'Jacket Onhix' , Precio:"$60000", imagen:"https://m.media-amazon.com/images/I/81zyRGZFabL._AC_SL1500_.jpg"},
    {Marca:'Puma',Categoria: 'Accesorios',Producto:'Morral Cross Body' , Precio:"$17000", imagen:"https://www.digitalsport.com.ar/files/products/65a92cb204027-624720-500x500.jpg"},
    {Marca:'Nike',Categoria: 'Calzado',Producto:'Nike Air Force 1 mid' , Precio:'$95000', imagen:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbf57af98/products/NIDZ2554-100/NIDZ2554-100-2.JPG"},
    {Marca:'Moist',Categoria: 'Indumentaria',Producto:'Pantalon Biggie' , Precio:"$22000", imagen:"https://m.media-amazon.com/images/I/714MdJkY3dL._AC_SL1500_.jpg"},
    {Marca:'Revolver',Categoria: 'Accesorios',Producto:'Bufanda RvR' , Precio:"$8000", imagen:"https://www.digitalsport.com.ar/files/products/661ffde9dd5d2-648066-500x500.jpg"}
    

]

let contCardHome = document.getElementById("cards");

export const CardHome = `



    ${
        
      ElementosCard.map(e=>{  
       contCardHome.innerHTML +=`
                
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


   





                  
                
                
           









            

        
       

        

             
        
            















