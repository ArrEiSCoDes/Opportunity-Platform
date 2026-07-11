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
/* ==========================
   OPPORTUNITY AI ASSISTANT
========================== */


const askAI =
document.getElementById("askAI");


const aiQuestion =
document.getElementById("aiQuestion");


const aiResponse =
document.getElementById("aiResponse");



if(askAI){


askAI.addEventListener("click", function(){


const question =
aiQuestion.value.toLowerCase();



if(question.includes("job") || question.includes("career")){


aiResponse.innerHTML =
`
I recommend starting with Career Discovery.

<a href="career.html">
Explore Careers →
</a>
`;

}



else if(question.includes("resume") || question.includes("interview")){


aiResponse.innerHTML =
`
Resume Support can help improve applications and interviews.

<a href="resume.html">
Resume Help →
</a>
`;

}




else if(question.includes("learn") || question.includes("training")){


aiResponse.innerHTML =
`
Explore training programs and certifications.

<a href="training.html">
Training Resources →
</a>
`;

}




else if(question.includes("business")){


aiResponse.innerHTML =
`
Explore entrepreneurship resources.

<a href="business.html">
Business Resources →
</a>
`;

}



else{


aiResponse.innerHTML =
`
Try asking:
<br>
"Help me find a job"
<br>
"I need resume help"
<br>
"I want training"
<br>
"I want to start a business"
`;

}



});


}
