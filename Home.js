import { navbar } from "./componentes/navbar.js"
let contCardAcc = document.getElementById("cards");
let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})

fetch('./Productos.json').then(resp => resp.json()).then(productos =>{
    console.log(productos)
    const Calzado = productos.filter(producto => producto.Categoria === 'Calzado');
    const Accesorios = productos.filter(producto => producto.Categoria === 'Accesorios');
    const Indumentaria = productos.filter(producto => producto.Categoria === 'Indumentaria');
   
    let calselecc = Calzado.slice(0,3)
    let Accselecc = Accesorios.slice(0,3)
    let Indselecc = Indumentaria.slice(0,3)
   
    const Prodhome = calselecc.concat(Accselecc,Indselecc)
    
    
   
    console.log(Prodhome)
    
    
    
    let CardAcc = `



    ${
        
      Prodhome.map(e=>{  
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
})
    
