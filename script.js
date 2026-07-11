document.addEventListener("DOMContentLoaded", function () {


const resources = [

{
title:"Free Technology Training",
category:"Technology Skills",
description:"Explore free IT, cybersecurity, and digital skill training programs.",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
link:"technology.html"
},


{
title:"Free Career Certifications",
category:"Training",
description:"Find professional certificates that can help build career skills.",
image:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
link:"training.html"
},


{
title:"AI Learning Resources",
category:"Artificial Intelligence",
description:"Discover beginner-friendly AI tools and learning opportunities.",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995",
link:"ai-skills.html"
},


{
title:"Entrepreneurship Resources",
category:"Business",
description:"Learn business planning, marketing, and startup skills.",
image:"https://images.unsplash.com/photo-1556761175-b413da4baf72",
link:"business.html"
}


];



const container =
document.getElementById("resource-container");



let current = 0;



function displayResources(){


container.innerHTML="";


for(
let i=current;
i<current+3 && i<resources.length;
i++
){


let resource = resources[i];


let card=document.createElement("div");

card.className="resource-card";


card.innerHTML=`

<a href="${resource.link}">

<img src="${resource.image}">


<div class="resource-info">

<h3>${resource.title}</h3>

<p>
${resource.category}
</p>

<p>
${resource.description}
</p>

</div>

</a>

`;


container.appendChild(card);


}


}



displayResources();





document
.getElementById("nextBtn")
?.addEventListener("click",function(){


current++;

if(current >= resources.length){

current=0;

}


displayResources();


});





document
.getElementById("prevBtn")
?.addEventListener("click",function(){


current--;

if(current < 0){

current=resources.length-1;

}


displayResources();


});






// SEARCH FEATURE


const searchButton =
document.getElementById("searchButton");


const searchInput =
document.getElementById("resourceSearch");



searchButton?.addEventListener(
"click",
function(){


let value =
searchInput.value.toLowerCase();



alert(
"Searching resources for: " 
+ value
);


});
