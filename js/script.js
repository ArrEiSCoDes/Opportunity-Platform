```javascript
document.addEventListener("DOMContentLoaded", function () {


/* ===============================
RESOURCE SPOTLIGHT
================================ */


const resources = [

{
title:"Free Certifications",
category:"certifications",
description:"Find free career certificates from universities, companies, and workforce programs.",
link:"certifications.html",
image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644"
},


{
title:"Technology Training",
category:"technology",
description:"Explore IT, cybersecurity, cloud, and technology career pathways.",
link:"technology.html",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
},


{
title:"AI Learning Resources",
category:"AI",
description:"Learn how artificial intelligence can support careers and productivity.",
link:"ai-skills.html",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995"
},


{
title:"Small Business Support",
category:"business",
description:"Resources for entrepreneurs building ideas into businesses.",
link:"business.html",
image:"https://images.unsplash.com/photo-1556761175-b413da4baf72"
},


{
title:"Financial Growth",
category:"financial",
description:"Learn budgeting, credit, saving, and financial planning skills.",
link:"financial.html",
image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f"
}

];



const spotlight =
document.getElementById("resource-container");


if(spotlight){


resources.forEach(resource => {


let card=document.createElement("div");


card.className="resource-card";


card.innerHTML=`

<a href="${resource.link}">


<img src="${resource.image}" alt="${resource.title}">


<div class="resource-info">

<h3>${resource.title}</h3>

<p>${resource.description}</p>

</div>


</a>

`;


spotlight.appendChild(card);


});


}






/* ===============================
RESOURCE SEARCH
================================ */


const search =
document.getElementById("resourceSearch");


if(search){


search.addEventListener("keyup", function(){


let value =
search.value.toLowerCase();


document.querySelectorAll(".library-card")
.forEach(card=>{


let text =
card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


});


}







/* ===============================
OPPORTUNITY COACH
================================ */


const coachButtons =
document.querySelectorAll(".coach-option");


const coachResponse =
document.getElementById("coachResponse");



coachButtons.forEach(button=>{


button.addEventListener("click",function(){


let answer =
button.dataset.answer;


coachResponse.innerHTML=
`
<h3>Opportunity Coach</h3>

<p>${answer}</p>
`;


});


});







/* ===============================
UPDATE LOG
================================ */


const updates=[

"Added free certification resources",

"Expanded technology career pathways",

"Added entrepreneurship learning tools",

"Updated financial education resources"

];



const updateBox =
document.getElementById("updateLog");



if(updateBox){


updates.forEach(update=>{


let item=document.createElement("p");


item.innerHTML="✅ "+update;


updateBox.appendChild(item);


});


}



});
```
