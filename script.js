document.addEventListener("DOMContentLoaded", () => {


/* =========================
SPOTLIGHT CARDS
========================= */


const spotlightContainer =
document.getElementById("resource-container");


const spotlightData = [

{
title:"Google Career Certificates",
category:"Training",
description:"Build career-ready skills with professional certificates.",
link:"training.html",
image:"images/training.jpg"
},

{
title:"Resume Support",
category:"Career",
description:"Improve resumes and prepare for job opportunities.",
link:"resume.html",
image:"images/resume.jpg"
},

{
title:"Technology Skills",
category:"Technology",
description:"Learn digital skills, IT, and cybersecurity.",
link:"technology.html",
image:"images/technology.jpg"
}

];



if(spotlightContainer){


spotlightData.forEach(item=>{


spotlightContainer.innerHTML += `

<div class="resource-card">


<div class="resource-info">


<h3>
${item.title}
</h3>


<p>
${item.category}
</p>


<p>
${item.description}
</p>


<a class="btn" href="${item.link}">
Explore
</a>


</div>


</div>

`;

});


}






/* =========================
SEARCH
========================= */


const searchInput =
document.getElementById("resourceSearch");


const searchButton =
document.getElementById("searchButton");



function runSearch(){


let term =
searchInput.value.toLowerCase();



if(term.trim()===""){

alert("Please enter a search term");

return;

}



let results = [

{
name:"Career Discovery",
page:"career.html"
},

{
name:"Resume Support",
page:"resume.html"
},

{
name:"Training Certifications",
page:"training.html"
},

{
name:"Technology Skills",
page:"technology.html"
},

{
name:"AI Skills",
page:"ai-skills.html"
},

{
name:"Business Resources",
page:"business.html"
}

];



let found =
results.find(item =>
item.name.toLowerCase().includes(term)
);



if(found){

window.location.href = found.page;

}

else{

alert(
"No matching resource found. Try career, resume, training, technology, AI, or business."
);

}


}



if(searchButton){

searchButton.addEventListener(
"click",
runSearch
);

}



if(searchInput){

searchInput.addEventListener(
"keypress",
function(event){

if(event.key==="Enter"){

runSearch();

}

});

}






/* =========================
OPPORTUNITY COACH
========================= */


const coachButtons =
document.querySelectorAll(".coach .btn");



coachButtons.forEach(button=>{


button.addEventListener("click",()=>{


});



});



});
