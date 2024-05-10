


const url = 'http://127.0.0.1:5500/'

/*Declaramos un arreglo con los datos de cada pagina  */
const ElementosNav= [
    {tittle:`<i class="fa-solid fa-house-crack ico"></i>`+'Home',link:`${url}Home.html`},
    {tittle:`<i class="fa-solid fa-shirt"></i>`+'Indumentaria',link:`${url}indumentaria.html`},
    {tittle:`<i class="fa-solid fa-shoe-prints"></i>`+'Calzado',link:`${url}calzado.html`},
    {tittle:`<i class="fa-regular fa-gem"></i>`+'Accesorios',link:`${url}accesorios.html`}
]



/* declaramos el elemento */
export const navbar = `

<nav class=" navbar navbar-expand-lg  " id="botonNav">
    
      
    <a href="./Home.html" class="navbar-brand" ><img src="./Imagenes/LOGO.png" alt=""></a>



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
            <button class="btn" id="btnCarrito"><i class="bi bi-cart"></i></i></button>
            <a href="./login.html" class="btn bi bi-box-arrow-left" id="btnLogin"></a>
        </div>




    </div>

</nav>


`








