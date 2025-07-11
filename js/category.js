
import {isLogin , gettoken , UrlParams} from "./funcs/utils.js";
import {get_me } from "./funcs/auth.js";
import {navigation_data } from "./funcs/shared-componnent.js";

document.querySelector("#catgd")
document.querySelector("#dropdownDefaultButton")



const  sortcatg = async ()=>{

    let category1 = await fetch("http://localhost:4000/v1/courses")
    
    let catgres = await category1.json()


    document.querySelectorAll(".dp11").forEach(elem =>{
      elem.addEventListener("click", (e)=>{

        document.querySelector("#dropdownDefaultButton").innerHTML=""
        document.querySelector("#dropdownDefaultButton").insertAdjacentHTML("beforeend",`${e.target.innerText}
      
      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>`)


      let outsort = resshort(catgres,e.target.innerText)

      outsort.forEach(element => {

        let template = `  <div class="sec3_course_box border  p-2 border-gray-400 rounded-2xl  ">
    <div class="sec3_course_box-head relative ">
      <img class="h-auto w-full rounded-lg " src="http://localhost:4000/courses/covers/${element.cover}" alt="">
    <div class="absolute w-full flex justify-center items-center  top-[80%]    gap-0.5   ">
      <p class="text-black bg backdrop-blur-3xl  px-1.5  py-1    rounded-2xl bg-[rgba(246, 246, 246, 0.2)]   ">17 Lessons</p>
      <p class="text-black bg backdrop-blur-3xl px-1.5  py-1    rounded-2xl  bg-[rgba(246, 246, 246, 0.2)]  ">17 Lessons</p>
      <p class="text-black bg backdrop-blur-3xl px-1.5  py-1    rounded-2xl  bg-[rgba(246, 246, 246, 0.2)]  ">17 Lessons</p>
    </div>
    </div>

    <div class="sec3_course_box-main flex">
      <div class="box-content my-3   ">
        <h4 class="text-2xl font-black ">${element.name}</h4>
        <div class="content_teacher flex gap-3 items-center my-2.5  ">
          <i class="fa-regular fa-chalkboard-user text-primary-800 text-lg  "></i> 
            <span class="text-gray-700 font-black text-base     ">${element.creator}</span>
        </div>
        <div class="content-level flex">
          <button type="button" class="text-gray-700  bg-[#F5F5F6]   font-black  rounded-full text-lg  py-2 px-4         text-center me-2 mb-2 "> <i class="fa-solid fa-signal-bars"></i> beginner </button>
          <div class="flex -space-x-4 rtl:space-x-reverse">
            <img class="w-10 h-10  rounded-full dark:border-gray-800" src="../img/global/avatar/Ellipse-1.png" alt="">
            <img class="w-10 h-10  rounded-full dark:border-gray-800" src="../img/global/avatar/Ellipse-2.png" alt="">
            <img class="w-10 h-10  rounded-full dark:border-gray-800" src="../img/global/avatar/Ellipse-3.png" alt="">
            <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
        </div>
        </div>
        <div class="content-price">
          <span class="text-primary-800 font-black text-xl ">${element.price == 0 ? "رایگان" : element.price.toLocaleString() } </span><span>/lifetime</span>
        </div>
      </div>
        <div class="box-star"></div>
    </div>
  </div>`
        
  document.querySelector("#catgd").insertAdjacentHTML("beforeend", template)


    });
        

      })
        
    })




    


    
    
    } 
const  showallcourses = async ()=>{

    let category1 = await fetch("http://localhost:4000/v1/courses")
    
    let catgres = await category1.json()
        // console.log(catgres);

    catgres.splice(0,6).forEach(element => {

        let template = `  <div class="sec3_course_box border  p-2 border-gray-400 rounded-2xl  ">
    <div class="sec3_course_box-head relative ">
      <img class="h-auto w-full rounded-lg " src="http://localhost:4000/courses/covers/${element.cover}" alt="">
    <div class="absolute w-full flex justify-center items-center  top-[80%]    gap-0.5   ">
      <p class="text-black bg backdrop-blur-3xl  px-1.5  py-1    rounded-2xl bg-[rgba(246, 246, 246, 0.2)]   ">17 Lessons</p>
      <p class="text-black bg backdrop-blur-3xl px-1.5  py-1    rounded-2xl  bg-[rgba(246, 246, 246, 0.2)]  ">17 Lessons</p>
      <p class="text-black bg backdrop-blur-3xl px-1.5  py-1    rounded-2xl  bg-[rgba(246, 246, 246, 0.2)]  ">17 Lessons</p>
    </div>
    </div>

    <div class="sec3_course_box-main flex">
      <div class="box-content my-3   ">
        <h4 class="text-2xl font-black ">${element.name}</h4>
        <div class="content_teacher flex gap-3 items-center my-2.5  ">
          <i class="fa-regular fa-chalkboard-user text-primary-800 text-lg  "></i> 
            <span class="text-gray-700 font-black text-base     ">${element.creator}</span>
        </div>
        <div class="content-level flex">
          <button type="button" class="text-gray-700  bg-[#F5F5F6]   font-black  rounded-full text-lg  py-2 px-4         text-center me-2 mb-2 "> <i class="fa-solid fa-signal-bars"></i> beginner </button>
          <div class="flex -space-x-4 rtl:space-x-reverse">
            <img class="w-10 h-10  rounded-full dark:border-gray-800" src="../img/global/avatar/Ellipse-1.png" alt="">
            <img class="w-10 h-10  rounded-full dark:border-gray-800" src="../img/global/avatar/Ellipse-2.png" alt="">
            <img class="w-10 h-10  rounded-full dark:border-gray-800" src="../img/global/avatar/Ellipse-3.png" alt="">
            <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
        </div>
        </div>
        <div class="content-price">
          <span class="text-primary-800 font-black text-xl ">${element.price == 0 ? "رایگان" : element.price.toLocaleString() } </span><span>/lifetime</span>
        </div>
      </div>
        <div class="box-star"></div>
    </div>
  </div>`
        
  document.querySelector("#catgd").insertAdjacentHTML("beforeend", template)


    });
    


    
    
    } 

   function resshort (arry , methods){

        console.log("ddd");
        console.log(methods);
        

        let outarry = []

        switch (methods) {
            case "free":

            outarry = [...arry].filter(corses => corses.price==0 )
            break;
            
            default:

           break;
            }
           let bb = document.querySelector("#catgd")

           bb.innerHTML=""
            return outarry

        } 



    showallcourses()
    sortcatg()