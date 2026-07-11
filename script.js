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
OPPORTUNITY AI ASSISTANT
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
aiQuestion.value.toLowerCase().trim();



if(question === ""){


aiResponse.innerHTML =

`
<p>
Please ask me a question about careers, training,
resumes, technology, business, or resources.
</p>
`;

return;

}




/* CAREER QUESTIONS */

if(

question.includes("job") ||
question.includes("career") ||
question.includes("work") ||
question.includes("employment") ||
question.includes("hire") ||
question.includes("remote")

){


aiResponse.innerHTML =

`
<p>
💼 Career Support can help you explore job pathways,
employment resources, and career opportunities.
</p>

<a href="career.html">
Go to Career Resources
</a>

`;

}





/* RESUME QUESTIONS */


else if(

question.includes("resume") ||
question.includes("cv") ||
question.includes("interview") ||
question.includes("application")

){


aiResponse.innerHTML =

`
<p>
📝 Resume Support can help improve your resume,
applications, and interview preparation.
</p>

<a href="resume.html">
Go to Resume Support
</a>

`;

}





/* TRAINING QUESTIONS */


else if(

question.includes("learn") ||
question.includes("training") ||
question.includes("class") ||
question.includes("certificate") ||
question.includes("school") ||
question.includes("course")

){


aiResponse.innerHTML =

`
<p>
🎓 Training resources can help you build skills
and earn certifications.
</p>

<a href="training.html">
Explore Training
</a>

`;

}





/* TECHNOLOGY QUESTIONS */


else if(

question.includes("computer") ||
question.includes("technology") ||
question.includes("coding") ||
question.includes("cyber") ||
question.includes("IT")

){


aiResponse.innerHTML =

`
<p>
💻 Technology resources can help you develop
digital skills, IT knowledge, and cybersecurity skills.
</p>

<a href="technology.html">
Explore Technology Skills
</a>

`;

}





/* BUSINESS QUESTIONS */


else if(

question.includes("business") ||
question.includes("startup") ||
question.includes("entrepreneur") ||
question.includes("sell")

){


aiResponse.innerHTML =

`
<p>
🚀 Business resources can help with entrepreneurship,
planning, and growing ideas.
</p>

<a href="business.html">
Explore Business Resources
</a>

`;

}





/* FINANCIAL QUESTIONS */


else if(

question.includes("money") ||
question.includes("finance") ||
question.includes("budget") ||
question.includes("credit")

){


aiResponse.innerHTML =

`
<p>
💰 Financial resources can help with money management,
planning, and financial growth.
</p>

<a href="financial.html">
Explore Financial Resources
</a>

`;

}





/* GENERAL QUESTIONS */


else{


aiResponse.innerHTML =

`
<p>
🤖 I can help you find resources for:
</p>

<ul>

<li>💼 Jobs and careers</li>

<li>📝 Resumes and interviews</li>

<li>🎓 Training and certifications</li>

<li>💻 Technology skills</li>

<li>🚀 Starting a business</li>

<li>💰 Financial growth</li>

</ul>

<p>
Try asking:
<br><br>

"What jobs are available?"
<br>
"How can I improve my resume?"
<br>
"What training programs can I take?"
<br>
"How do I start a business?"

</p>

`;

}


});


}
