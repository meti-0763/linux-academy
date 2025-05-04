let $ = document ;

import { metimenu } from "../component/menu/menu.js";

window.customElements.define(`meti-menu`, metimenu)

 let cardDes = document.createElement('meti-menu')


window.addEventListener("DOMContentLoaded", async ()=>{
    
    let bb = await fetch("https://fakestoreapi.com/products/categories")

    if(bb.status===200){
        
        let ff = await bb.json()


    //   let nn (JSON.stringify(ff));

        cardDes.setAttribute("options" , JSON.stringify(ff))

         $.getElementById("navs").appendChild(cardDes)

    }

    
    
})






















