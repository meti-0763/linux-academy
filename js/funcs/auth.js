
import { setlecalstorag,getlecalstorag , gettoken} from "./utils.js";



let name_elem = document.querySelector("#name");
let userid_elem = document.querySelector("#userid");
let email_elem = document.querySelector("#email1");
let phone_elem = document.querySelector("#phone");
let password_elem = document.querySelector("#password1");


const create_account = () => {

    console.log("dsksks");
    let datas = {
        name: name_elem.value.trim(),
        username: userid_elem.value.trim(),
        email: email_elem.value.trim(),
        phone: phone_elem.value.trim(),
        password: password_elem.value.trim(),
        confirmPassword: password_elem.value.trim()
    }
    
    console.log(datas);
    
    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datas)
    })
      .then(res => {
        
        console.log(res);
        
        if (res.status==201) {
            Swal.fire({
                title: 'موفقیت',
                text: 'ثبت نام انجام شد',
                icon: 'succses',
                confirmButtonText: 'ورود به پنل'
              }).then((result) => {
                if (result.isConfirmed) {
            location.href="index.html"
                }
              });
        }else{
            Swal.fire({
                title: 'خطا!',
                text: 'ثبت نام انجام نشد',
                icon: 'error',
                confirmButtonText: 'تلاش مجدد'
              });
        }

        return res.json()
      }).then(data => {
        setlecalstorag("user",{ token: data.accessToken})

        let hh = getlecalstorag("user")

        console.log(hh);
        
        
      })
    //   .then(data => console.log(data))
    //   .catch(err => console.error("خطا:", err));
  };


  const login_user = ()=>{

    console.log("login");
    
    let login_email = document.querySelector("#login-email").value
    let login_password = document.querySelector("#login-password").value

    fetch("http://localhost:4000/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "identifier": login_email,
                "password": login_password
            }
        )
      }).then(res =>{
console.log(res);

if (res.status==200) {
    Swal.fire({
        title: 'موفقیت',
        text: 'ورود انجام شد',
        icon: 'succses',
        confirmButtonText: 'ورود به پنل'
      }).then((result) => {
        if (result.isConfirmed) {
    location.href="index.html"
        }
      });
}else{
    Swal.fire({
        title: 'خطا!',
        text: 'ثبت نام انجام نشد',
        icon: 'error',
        confirmButtonText: 'تلاش مجدد'
      });
}


return res.json()

      })

      .then(data =>{

        console.log(data);
        
        setlecalstorag("user",{ token: data.accessToken})
      })
  };



    const get_me = async () => {
     
          let token = gettoken(); 
      
          if (token) {
            let backfetch = await fetch("http://localhost:4000/v1/auth/me", {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
      
            let data1 = await backfetch.json();
            return data1
          } else {
           return console.log("No token found.");
          }
        
      };
         

  

  export{create_account , login_user , get_me}