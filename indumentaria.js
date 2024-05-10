import { navbar } from "./componentes/navbar.js"




let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})



/*Declaramos un arreglo con los datos de la card  */
const ElementosCard= [
    {Marca:'Stussy',Categoria: 'Indumentaria',Producto:'Remera Zion' , Precio:"$18500", imagen:"https://http2.mlstatic.com/D_NQ_NP_826032-MLA73028709156_112023-O.webp"},
    {Marca:'Moist',Categoria: 'Indumentaria',Producto:'Pantalon Biggie' , Precio:"$22000", imagen:"https://m.media-amazon.com/images/I/714MdJkY3dL._AC_SL1500_.jpg"},
    {Marca:'Tussy',Categoria: 'Indumentaria',Producto:'Jacket Onhix' , Precio:"$60000", imagen:"https://m.media-amazon.com/images/I/81zyRGZFabL._AC_SL1500_.jpg"},
    {Marca:'Jordan',Categoria: 'Indumentaria',Producto:'Short Jump23' , Precio:"$17000", imagen:"https://essential.vtexassets.com/arquivos/ids/1225508/302-1162_2.jpg?v=638382638254900000"},
    {Marca:'Tussy',Categoria: 'Indumentaria',Producto:'Remera Whithe Pigeon' , Precio:'$19000', imagen:"data:image/jpeg;base64,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fumV87VYfRtqY+Ln74GCCDGYgBJkCTARIJgQJiIgJGZMiAgxEDOOiKpjaIHjT/Go/FOhJzl0VvjadLzTHvqU50bAREQEREBERAREQEREBERAREQE526W3zte4H0UpL+7VvxTomc3dKLZ2xfEfSpj3W9IfdAxSIiAkyJMBERAREQIMQYgBBERAyno0bG06B/99ND906TnMu4D6dpW3mWHuUt906agIiICIiAiIgIiICIiAiIgIiICc0dI76trX5/SqPs00H3Tpecwb9VNW1NoH/FOv2cL+GBYogxACTIEmAiIgIiICRJiBERiIF53ObTf2p+u3/jedRzlbdg4vbY/XPxRh986nU5APlA9REQEREBERAREQEREBERAREQE5Y3sbVtDaB8b2v8ACqwnU85R3gOq8vG8busffVeBQxIiBIkyIgTEjMQJiQJMCCYiICIkGBcd3mxd2v8A3VHv4ffOp7c5RT4qD8Jylsc4ubU/4in/AL1nVVic0qR8aan/AEiBUREQEREBERAREQEREBERAREQE5J2nUBr3BJGTXcnJ8XYzraWm92FRrOzuG1NjOG4cABy9QEDlbUPEfCTkeInTj7oWp56/wB2f4rPg+49oeYz+slE/ggc06x4j3iTqX6Q94nTVLc+2XkXHkopqPgs+/8AZa2/SfaH8oHL2tfpD3iRrHiPeJ0+d07Y/T96f0zz/ZC1+v8Au/6IHMWseI94k61+kPeJ05/ZC18an7r+mehulbDvqe9P6YHMOseI94jWPEfCdQDda2/SfaH8p86m6Fq3PX7dB/isDmMuPESC48R7xOlhuRajkCPUtH+mfVNzrUcjU9nVD8MDm3Zrjr6GCDish4eTrOqtlHNCgf0S/wC0S3LuxbjvqHy1AfwEu9CiqIqL6KKFXPHgBgQPtERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k="},
    {Marca:'D-stroy',Categoria: 'Indumentaria',Producto:'Sweater Big Flames' , Precio:'$32000',imagen:"https://www.fugazee.com/cdn/shop/products/1_86559268-97bc-4bc1-b6d5-b974426bf21a.jpg?v=1664516774&width=1500" },
    

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