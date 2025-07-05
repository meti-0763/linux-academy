import { get_me } from "./auth.js";
import {isLogin  } from "./utils.js";

  
let btn_start = document.querySelector("#btngetstart")








        

const  navigation_data = async ()=>{

    if(isLogin()){
   let userinfo = await  get_me()
            
   btn_start.innerHTML=`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">go to panel</button>`

   btn_start.setAttribute("href","index.html")

   console.log(userinfo);
   

  }else{
    console.log("not found");
  }

}     

        





export{navigation_data }