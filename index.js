

 // ~~~~~~~~~ Api/url Call ~~~~~~~~~~

 const apiUrl="https://randomuser.me/api/?results=12";


// //     || -------------- Get Html div and Others tag for Dom --------------------------- ||
const gallery=document.getElementById('gallery');
const cardimg=document.getElementsByClassName('card-img');

let modalClick=document.getElementsByClassName('modal-container');
// let maincard=document.getElementsByClassName('card');
let mainCard=document.getElementById('mainCard');

        let card=document.querySelector('.card');
        let btn =document.getElementById('btn');
        let modalOpen =document.querySelector('.modal-container');
        let closeBtn=document.querySelector('.modal-close-btn');
        btn.onclick=function(){
            modalOpen.style.display="block";
            console.log("jvfjkhb")
        };
        // card.onclick=function(){
        //     modalOpen.style.display="block";
        // };
        closeBtn.onclick=function(){
            modalOpen.style.display="none";
            
        };



getData();

// // xxxxxxxxxxxx Async Await Function for fetching Data usin json formate xxxxxxxxxxxx
async function getData(){
    const fetchData= await fetch(apiUrl);
    const jsonFormateGet = await fetchData.json();
    // console.log(jsonFormateGet.results[0]);
    let value=jsonFormateGet.results;
    
    pageRandorData(jsonFormateGet.results);
}




// // -------------- Rendor Value on Page using pageRandorData function ---------------
function pageRandorData(values){
    
    gallery.innerHTML=" ";
    values.forEach((value) => {
       
        const fullName=value.name.title+" "+value.name.first+" "+value.name.last;
        const email=value.email;
        console.log(value.name);
        const picture=value.picture.medium;
        const address=value.location.street.number+ " " +value.location.street.name+ " , " +value.location.city+ " - " +value.location.country;
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
        
                   
                   
              <div class="card-img-container">
                   <img class="card-img" src="${picture}" alt="${fullName}">
               </div>
                 <div class="card-info-container">
                     <h3 id="name" class="card-name cap">Name : ${fullName}</h3>
                     <p class="card-text">Email Address : ${email}</p>
                     <p class="card-text cap">Address : ${address}</p>
                           <div>
                                <button  id="btn">Detais</button>
                            </div>
                  </div>
                   
                  
               <div class="modal-container">
                 <div class="modal">
                     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${picture}" alt="${fullName}">
                        <h3 id="name" class="modal-name cap">Name : ${fullName}</h3>
                        <p class="modal-text">email :  ${email}</p>
                        <p class="modal-text cap">${address}</p>
                        <hr>
                        <p class="modal-text">${value.phone}</p>
                        
                        <p class="modal-text">Age : ${value.dob.age}</p>
                    </div>
                </div>

                
               </div>
               
        `;
         gallery.appendChild(div);
        
   
   }
   
   
   );
   
}