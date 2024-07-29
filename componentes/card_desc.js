

export function Card_Desc(seleccionado){
    
    return `
                 
          <div class="card" id="card_desc">
                <div class="row">
                    <div class="col-md-6">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src=${seleccionado.imagen} class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item">
                                <img src=${seleccionado.img2} class="d-block w-100" alt="...">
                              </div>
                              
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon btn" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                              <span class="carousel-control-next-icon btn" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body mt-5">
                    <a href="./${seleccionado.Categoria}.html">${seleccionado.Categoria}</a>
                    <h2>${seleccionado.Marca}</h2>
                        <h4><b>${seleccionado.Producto}</b></h4>
                        <div class="row">
                        <div class="col-md-6">
                            <h5 class="price">$${seleccionado.Precio}</h5>
                        </div>
                        <div class="col-md-6">
                            <input type="number" id="cantidad-${seleccionado.id}" class="form-control" min="0" max="5" placeholder="0" step="1" style="height: 40px" >
                        </div>
                        </div>
                        <div class="button-container">
                            <button class="comprar2" id="${seleccionado.id}">Agregar al Carrito</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
           
   `;
 }    