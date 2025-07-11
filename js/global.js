
import {isLogin , gettoken , UrlParams} from "./funcs/utils.js";
import {get_me } from "./funcs/auth.js";
import {navigation_data } from "./funcs/shared-componnent.js";




window.addEventListener("DOMContentLoaded", ()=>{

    navigation_data()
    UrlParams("cat")
    

})

