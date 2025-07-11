import {isLogin , gettoken ,UrlParams} from "./funcs/utils.js";
import {get_me } from "./funcs/auth.js";
import {navigation_data  } from "./funcs/shared-componnent.js";



window.addEventListener("DOMContentLoaded", ()=>{

    navigation_data()
   let nnnm = UrlParams("cou")

   const  Show_category = async ()=>{

    let mm = await get_me()
    let mms =  gettoken()

     let vfv = await mm

     console.log(mms);
     

    
    let category1 = await fetch(`http://localhost:4000/v1/courses/${nnnm}`,{

        method: 'POST',

        headers: {
            Authorization: `Bearer ${mms}`
          }


    })
    
    let catgres = await category1.json()
        console.log(catgres);



    


    
    
    } 

Show_category()


})
