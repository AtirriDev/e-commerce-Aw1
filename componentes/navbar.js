


const url = 'http://127.0.0.1:5500/'

/*Declaramos un arreglo con los datos de cada pagina  */
const ElementosNav= [
    {tittle:`<i class="fa-solid fa-house-crack ico"></i>`+'Home',link:`"Home.html"`},
    {tittle:`<i class="fa-solid fa-shirt"></i>`+'Indumentaria',link:`"./indumentaria.html"`},
    {tittle:`<i class="fa-solid fa-shoe-prints"></i>`+'Calzado',link:`"./calzado.html"`},
    {tittle:`<i class="fa-regular fa-gem"></i>`+'Accesorios',link:`"./accesorios.html"`}
    
]



/* declaramos el elemento */
export const navbar = `

<nav class=" navbar navbar-expand-lg  " id="botonNav">
    
      
    <a href="./Home.html" class="navbar-brand" ><img src="/Imagenes/LOGO.png" alt=""></a>



    <button class=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse  " id="navbarCollapse">
        <ul class="navbar-nav">
            
    
            ${
                ElementosNav.map(e => {
                    return`

                            <li class="nav-item">
                                <a href=${e.link} class="nav-link">${e.tittle}</a>
                            </li>
                    ` 
                     
                }).join('')
            }
            
    
            
 
        </ul>
  
        <div class="ms-auto ">
            
            <a href="./carrito.html" class="btn bi bi bi-cart" id="btnCarrito"></a>
            <a href="../index.html" class="btn bi bi-box-arrow-left" id="btnLogOut"></a>
           
        </div>




    </div>

</nav>


`








