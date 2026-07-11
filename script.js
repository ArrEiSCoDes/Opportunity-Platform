document.addEventListener("DOMContentLoaded", function () {


/* ==============================
   OPPORTUNITY SPOTLIGHT
================================ */


const spotlightContainer = document.getElementById("resource-container");


const spotlightData = [

{
title: "Google Career Certificates",
category: "🎓 Training",
description: "Build career-ready skills through professional certificates and learning programs.",
link: "./training.html",
image: "./images/training.jpg"
},

{
title: "Resume Support",
category: "📝 Career",
description: "Create stronger resumes and prepare for interviews and applications.",
link: "./resume.html",
image: "./images/resume.jpg"
},

{
title: "Technology Skills",
category: "💻 Technology",
description: "Learn IT, cybersecurity, coding, and digital skills.",
link: "./technology.html",
image: "./images/technology.jpg"
},

{
title: "Entrepreneurship",
category: "🚀 Business",
description: "Learn business planning, marketing, and startup skills.",
link: "./business.html",
image: "./images/business.jpg"
}

];



let spotlightPosition = 0;



function displaySpotlight() {


if (!spotlightContainer) {
return;
}


spotlightContainer.innerHTML = "";



for (
let i = spotlightPosition;
i < spotlightPosition + 3;
i++
) {


const item = spotlightData[i % spotlightData.length];



spotlightContainer.innerHTML += `

<div class="resource-card">


<a href="${item.link}">


<img
src="${item.image}"
alt="${item.title}"
>


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


<span class="btn">
Explore →
</span>


</div>


</a>


</div>

`;

}

}



displaySpotlight();





const nextButton = document.getElementById("nextBtn");

const previousButton = document.getElementById("prevBtn");



if(nextButton){

nextButton.addEventListener("click", function(){

spotlightPosition++;

if(spotlightPosition >= spotlightData.length){

spotlightPosition = 0;

}

displaySpotlight();


});

}



if(previousButton){

previousButton.addEventListener("click", function(){


spotlightPosition--;


if(spotlightPosition < 0){

spotlightPosition = spotlightData.length - 1;

}


displaySpotlight();


});

}







/* ==============================
   SEARCH SYSTEM
================================ */


const searchInput =
document.getElementById("resourceSearch");


const searchButton =
document.getElementById("searchButton");



const searchResources = [


{
keywords:[
"career",
"job",
"employment"
],
page:"career.html"
},


{
keywords:[
"resume",
"cv",
"interview"
],
page:"resume.html"
},


{
keywords:[
"training",
"certificate",
"education",
"school"
],
page:"training.html"
},


{
keywords:[
"technology",
"computer",
"IT",
"cybersecurity",
"coding"
],
page:"technology.html"
},


{
keywords:[
"ai",
"artificial intelligence"
],
page:"ai-skills.html"
},


{
keywords:[
"money",
"finance",
"budget",
"credit"
],
page:"financial.html"
},


{
keywords:[
"business",
"entrepreneur",
"startup"
],
page:"business.html"
}


];






function runSearch(){


const searchTerm =
searchInput.value.toLowerCase().trim();



if(searchTerm === ""){

alert("Please enter a search term.");

return;

}




const result =
searchResources.find(resource =>


resource.keywords.some(keyword =>

searchTerm.includes(keyword)

)


);



if(result){


window.location.href = result.page;


}

else{


alert(
"No matching resource found. Try career, resume, training, technology, AI, finance, or business."
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


if(event.key === "Enter"){

runSearch();

}


});


}





});
