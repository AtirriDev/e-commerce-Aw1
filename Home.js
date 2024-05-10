import { navbar } from "./componentes/navbar.js"
import { CardHome } from "./componentes/cardsHome.js"



let navContenedor = document.querySelector(`header`)

window.addEventListener(`load` , () => {
    navContenedor.innerHTML= navbar
    
})

