document.addEventListener("DOMContentLoaded", function () {


/* ==========================
OPPORTUNITY SPOTLIGHT
========================== */


const spotlightContainer = 
document.getElementById("resource-container");


const spotlightData = [


{
title: "Career Support",
description:
"Explore career pathways, job resources, and professional growth opportunities.",
link: "career.html",
image: "images/career-support.jpg"
},


{
title: "Technology Training",
description:
"Learn IT skills, coding, cybersecurity, and digital skills.",
link: "technology.html",
image: "images/technology-training.jpg"
},


{
title: "Small Business",
description:
"Discover entrepreneurship resources, planning tools, and startup support.",
link: "business.html",
image: "images/small-business.jpg"
},


{
title: "Healthcare Benefits",
description:
"Find healthcare support and helpful community resources.",
link: "financial.html",
image: "images/healthcare-benefits.jpg"
},


{
title: "Housing Resources",
description:
"Explore housing support and stability resources.",
link: "financial.html",
image: "images/housing-resources.jpg"
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
${item.description}
</p>


<span class="spotlight-button">
Explore
</span>


</div>


</a>


</div>


`;

}


}



displaySpotlight();





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


/* ==========================
RESOURCE SEARCH
========================== */


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
}


];





function searchResources(){


const searchValue =
searchInput.value.toLowerCase().trim();



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







/* ==========================
AI ASSISTANT
========================== */


const askAI =
document.getElementById("askAI");


const aiQuestion =
document.getElementById("aiQuestion");


const aiResponse =
document.getElementById("aiResponse");




if(askAI){


askAI.addEventListener(
"click",
function(){



const question =
aiQuestion.value.toLowerCase();




if(
question.includes("job") ||
question.includes("career")
){


aiResponse.innerHTML =

`
<p>
Start with Career Resources to explore job pathways,
employment tools, and opportunities.
</p>
`;



}




else if(

question.includes("resume") ||
question.includes("interview")

){


aiResponse.innerHTML =

`
<p>
Resume Support can help improve applications,
resumes, and interview preparation.
</p>
`;



}



else if(

question.includes("learn") ||
question.includes("training") ||
question.includes("school")

){


aiResponse.innerHTML =

`
<p>
Explore Training and Certifications to build new skills.
</p>
`;



}



else if(

question.includes("business")

){


aiResponse.innerHTML =

`
<p>
Explore Business Resources for entrepreneurship support.
</p>
`;



}



else{


aiResponse.innerHTML =

`
<p>
Try asking:
<br>
"I need help finding a job"
<br>
"I need resume help"
<br>
"I want training"
<br>
"I want to start a business"
</p>
`;



}



});


}



});
