import { labelData } from './labels.js';
import { Data } from './dataCard.js';





let filter = document.querySelector('.filter-box');
let searchBar = document.querySelector('.search-bar');
let viewData = Data;
let checkboxData = [];



const card = document.querySelector('.results');
const dataItems = document.createElement('div');
const searchbar = document.querySelector('.border')
const list = document.createElement('ul');
dataItems.classList.add('flex-box');
let values = document.querySelectorAll('.checkbox');
card.appendChild(dataItems);




//Regex function to filter the display based on user searchBar

searchBar.addEventListener('keyup',()=>{
 
 let re = new RegExp(searchBar.value,"gi")
 
  viewData = Data.filter(data => Object.keys(data).some((key)=> (data[key]).match(re)))
  showCards(viewData);
  searchbar.textContent = searchBar.value ? `Events matching " ${searchBar.value} " `:'';
})




filter.appendChild(list);

for(let i of labelData){
   list.innerHTML += `<li>
                      <input class = 'checkbox' type="checkbox" value=${i.value} name="c" id=${i.category}/>
                      <label for=${i.category}>${i.type}</label>
                     </li>
                     `
}



//This function generates the cards of the Events 
function showCards(data) {
   dataItems.innerHTML = '';
   for(let i of data){
      dataItems.innerHTML  += 

                         

      
      
      
      `  
                                 <div class='card'>  
                               
                                 <img class='image' src=${i.imageUrl} alt=${i.title} title=${i.title}/>
                                 <div class='title-box'>
                                 <h3 class='title'>${i.title}</h3>
                                 <div class='card-box'>
                                 <div class='card-singer'>
                                 <img class='singer-image' src=${i.imageUrl} alt=${i.title}></img>
                                 <h3 class='singer-title'>${i.singer}</h3>
                                 </div>

                                 <input type='button' id='follow' class='follow-button' value='Follow'></input>
                                 </div>
                                </div>
                                 <hr>

                                 <div class='date-box'>
                                
                                 <img class='icon' src='../assets/calender.webp' alt='date'></img>
                                 <p>${i.date}</p>
                                 </div>
                                 
                                 <div class='date-box'>
                                
                                 <img class='time-icon' src='../assets/time.png' alt='date'></img>
                                 <p>${i.time}<p>
                                 </div >
                                 <div class='date-box'>
                                 <img class='icon' src='../assets/location.png' alt='location'><img>
                                 <p>${i.address}</p>
                                 </div>
                                 <p class='artist'>
                                 
                                ${i.title}
                                 </p>
                                 </div>`
   };
}




let btn = document.createElement('input');

   btn.setAttribute('type','button');
   btn.setAttribute('value','Follow');
   
   btn.onclick = ()=>console.log('button clicked');

for(let data of values){
      data.addEventListener('click',()=> {
      if(data.checked == true){
        checkboxData.push(data.value); 
         }
      else{
         checkboxData = checkboxData.filter(value => value !== data.value);
        }  
          viewData =  Data.filter(data => checkboxData.includes(data.number));
          viewData = viewData.length === 0 ? Data : viewData;
          showCards(viewData);
   })
  
}


//This function is for accordion to open on user events

let acc = document.querySelector(".accordion");
  acc.addEventListener("click", function() {
    acc.classList.toggle("active");
      accordionToggler();
  });



  // Accordion toggler


  function accordionToggler(){
   var panel = acc.nextElementSibling;
   if (panel.style.display === "block") {
     panel.style.display = "none";
     document.querySelector('.accordion').innerHTML=' <i class="fas fa-filter"></i>'
   } else {
     panel.style.display = "block";
     document.querySelector('.accordion').textContent='Filter'
   }
  }
showCards(viewData);


//Foolow Button



