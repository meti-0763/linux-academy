

let crateStg = localStorage.getItem("user")


if(!crateStg){
    localStorage.setItem("user", JSON.stringify("[]"))
}

const setlecalstorag = (key , value )=>{
return localStorage.setItem(key,JSON.stringify(value))
}
const getlecalstorag = (key )=>{
return JSON.parse(localStorage.getItem(key))
}
const gettoken = ()=>{
    
return JSON.parse(localStorage.getItem("user")).token

}

const isLogin = ()=>{

    let loginInfos = gettoken() 

    console.log(loginInfos);
   
    if(loginInfos){
        return  true
    }else{
        return false}
 
        

} 

export{getlecalstorag,setlecalstorag,gettoken , isLogin}