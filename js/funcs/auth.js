const create_account = () => {
    let name_elem = document.querySelector("#name");
    let userid_elem = document.querySelector("#userid");
    let password_elem = document.querySelector("#password");
    let email_elem = document.querySelector("#email");
    let phone_elem = document.querySelector("#phone");
  
    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name_elem.value.trim(),
        username: userid_elem.value.trim(),
        email: email_elem.value.trim(),
        phone: phone_elem.value.trim(),
        password: password_elem.value.trim(),
        confirmPassword: password_elem.value.trim()
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("خطا:", err));
  };
  
  export { create_account };
  