// import { create_account } from './funcs/auth.js';

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
        if (res.status==201) {
            Swal.fire({
                title: 'خطا!',
                text: 'ثبت نام انجام نشد',
                icon: 'error',
                confirmButtonText: 'تلاش مجدد'
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
              }).then((result) => {
                if (result.isConfirmed) {
                  // اینجا کاری که می‌خوای انجام بده
                  alert('دکمه تلاش مجدد کلیک شد!');
                  // یا مثلاً دوباره تابع ثبت‌نام رو صدا بزن:
                  // signupFunction();
                }
              });
        }
      })
    //   .then(data => console.log(data))
    //   .catch(err => console.error("خطا:", err));
  };
  

  document.querySelector("#btn-acc").addEventListener("click",(e)=>{
      console.log("Dddd")
    e.preventDefault()
    create_account()

  
    
})