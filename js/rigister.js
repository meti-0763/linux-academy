import { create_account , login_user} from './funcs/auth.js';


  document.querySelector("#btn-acc").addEventListener("click",(e)=>{
    e.preventDefault()
    create_account()
})
  document.querySelector("#login-btn").addEventListener("click",(e)=>{
    e.preventDefault()
    login_user()
})



