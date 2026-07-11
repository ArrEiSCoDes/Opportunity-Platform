document.addEventListener("DOMContentLoaded", function () {


/* =================================
   OPPORTUNITY SPOTLIGHT
================================= */


const spotlightContainer =
document.getElementById("resource-container");



const spotlightData = [

{
title: "Google Career Certificates",
category: "🎓 Training",
description: "Build career-ready skills through professional certificates and workforce programs.",
link: "./training.html",
image: "./images/training.jpg"
},


{
title: "Resume Support",
category: "📝 Career",
description: "Create stronger resumes, improve applications, and prepare for interviews.",
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
title: "Entrepreneurship Resources",
category: "🚀 Business",
description: "Learn business planning, marketing, and startup skills.",
link: "./business.html",
image: "./images/business.jpg"
},


{
title: "Financial Growth",
category: "💰 Finance",
description: "Explore financial literacy, budgeting, and money management resources.",
link: "./financial.html",
image: "./images/finance.jpg"
}


];




let spotlightIndex = 0;





function displaySpotlight(){


if(!spotlightContainer){

return;

}



spotlightContainer.innerHTML = "";




for(
let i = spotlightIndex;
i < spotlightIndex + 3;
i++
){


const item =
spotlightData[i % spotlightData.length];



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


<span class="spotlight-button">
Explore →
</span>


</div>


</a>


</div>

`;

}


}




displaySpotlight();







/* =================================
   SPOTLIGHT BUTTONS
================================= */


const nextButton =
document.getElementById("nextBtn");


const previousButton =
document.getElementById("prevBtn");





if(nextButton){


nextButton.addEventListener(
"click",
function(){


spotlightIndex++;


if(
spotlightIndex >= spotlightData.length
){

spotlightIndex = 0;

}


displaySpotlight();


});


}






if(previousButton){


previousButton.addEventListener(
"click",
function(){


spotlightIndex--;


if(
spotlightIndex < 0
){

spotlightIndex =
spotlightData.length - 1;

}


displaySpotlight();


});


}









/* =================================
   RESOURCE SEARCH
================================= */


const searchInput =
document.getElementById("resourceSearch");


const searchButton =
document.getElementById("searchButton");





const searchDatabase = [


{
terms:[
"career",
"job",
"employment",
"work"
],
page:"career.html"
},


{
terms:[
"resume",
"cv",
"interview",
"application"
],
page:"resume.html"
},


{
terms:[
"training",
"class",
"certificate",
"education",
"school"
],
page:"training.html"
},


{
terms:[
"technology",
"computer",
"IT",
"coding",
"cybersecurity"
],
page:"technology.html"
},


{
terms:[
"ai",
"artificial intelligence"
],
page:"ai-skills.html"
},


{
terms:[
"finance",
"money",
"budget",
"credit"
],
page:"financial.html"
},


{
terms:[
"business",
"entrepreneur",
"startup"
],
page:"business.html"
},


{
terms:[
"leadership",
"management"
],
page:"leadership.html"
}


];







function searchResources(){



const searchValue =
searchInput.value
.toLowerCase()
.trim();




if(searchValue === ""){


alert(
"Please enter a resource to search."
);


return;


}





const result =
searchDatabase.find(resource =>


resource.terms.some(term =>

searchValue.includes(term)

)

);






if(result){


window.location.href =
result.page;


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
searchResources
);


}






if(searchInput){


searchInput.addEventListener(
"keypress",
function(event){


if(event.key === "Enter"){


searchResources();


}


});


}





});
