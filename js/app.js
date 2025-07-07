import {isLogin , gettoken } from "./funcs/utils.js";
import {get_me } from "./funcs/auth.js";
import {navigation_data  } from "./funcs/shared-componnent.js";


// برا ی نمایش دوره ها 

let courses_shows = document.querySelector("#courseBoxList")
let catgory_shows = document.querySelector("#catgBoxList")

courses_shows.innerHTML = ""
catgory_shows.innerHTML = ""

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
        
        courses_shows.insertAdjacentHTML("beforeend", template)


    });
    


    
    
    } 


    const  Show_category = async ()=>{




        let templates = [` <i class="fa-thin fa-chart-user text-5xl"></i>`,`<i class="fa-thin fa-code text-5xl"></i>`,`<i class=" text-5xl fa-brands fa-android"></i>`,`<i class="fa-brands fa-python text-5xl"></i>` ]

        console.log(templates);
        


        let category1 = await fetch("http://localhost:4000/v1/category")
        
        let catgres = await category1.json()
            console.log(catgres[1]);
    

            let counter = -1

        catgres.splice(0,6).forEach(element => {

            counter++
            console.log(counter);
            
    
            let template =    `          <a href="category.html?cat=${element.name}" class="w-full md:w-4/12">
            <div class="catg-box flex flex-col   gap-4  p-6     ">
              ${templates[counter]}
              <span class="text-2xl  ">${element.title}</span>
              <p class="text-lg ">test mant</p>
            </div>
          </a>`
            
          catgory_shows.insertAdjacentHTML("beforeend", template)
    
    
        });
        
    
    
        
        
        } 

    showallcourses()
    Show_category()























































//اینو واسه کتابخونه ها و اینا گذاشتم 







const accordionElement = document.getElementById('accordion-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: false 
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    },

];

// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-blue-500    text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 bg-blue-500   dark:text-gray-400',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

// instance options object
const instanceOptions = {
    id: 'accordion-example',
    override: true
};


