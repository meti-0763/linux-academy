

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

   
    if(loginInfos){
        return  true
    }else{
        return false}
 
        

} 

const UrlParams = (key)=>{

    const params = new URLSearchParams(window.location.search);

    return params.get(key)    


}

export{getlecalstorag,setlecalstorag,gettoken , isLogin , UrlParams}