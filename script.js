document.addEventListener("DOMContentLoaded", function () {



/* ==========================
OPPORTUNITY SPOTLIGHT
========================== */


const spotlightContainer =
document.getElementById("resource-container");



const spotlightData = [


{
title:"Career Support",
category:"💼 Careers",
description:
"Explore job resources, career pathways, and employment opportunities.",
link:"career.html",
image:"images/career-support.jpg"
},



{
title:"Technology Training",
category:"💻 Technology",
description:
"Build IT skills, coding knowledge, and cybersecurity experience.",
link:"technology.html",
image:"images/technology-training.jpg"
},



{
title:"Small Business",
category:"🚀 Entrepreneurship",
description:
"Learn business planning, marketing, and startup skills.",
link:"business.html",
image:"images/small-business.jpg"
},



{
title:"Healthcare Benefits",
category:"🏥 Support",
description:
"Find healthcare programs and important benefit resources.",
link:"financial.html",
image:"images/healthcare-benefits.jpg"
},



{
title:"Housing Resources",
category:"🏠 Community",
description:
"Explore housing support and stability resources.",
link:"financial.html",
image:"images/housing-resources.jpg"
}


];





if(spotlightContainer){


spotlightData.forEach(item => {



spotlightContainer.innerHTML += `


<div class="resource-card">



<img

src="${item.image}"

alt="${item.title}"

>



<div class="resource-info">



<h3>

${item.category}

</h3>



<h4>

${item.title}

</h4>



<p>

${item.description}

</p>



<a

href="${item.link}"

class="spotlight-button">

Explore

</a>



</div>



</div>



`;



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
aiQuestion.value.toLowerCase().trim();




if(question === ""){


aiResponse.innerHTML =

`
<p>
Please ask a question about careers,
training, technology, business,
or resources.
</p>
`;

return;

}




if(

question.includes("job") ||
question.includes("career") ||
question.includes("work") ||
question.includes("remote")

){


aiResponse.innerHTML =

`
<p>
💼 Career Support can help you explore
job pathways and employment resources.
</p>

<a href="career.html">
View Career Resources
</a>
`;



}


else if(

question.includes("resume") ||
question.includes("interview") ||
question.includes("application") ||
question.includes("cv")

){


aiResponse.innerHTML =

`
<p>
📝 Resume Support can help improve resumes,
applications, and interview preparation.
</p>


<a href="resume.html">
View Resume Support
</a>
`;



}





else if(

question.includes("training") ||
question.includes("learn") ||
question.includes("course") ||
question.includes("certificate") ||
question.includes("class")

){


aiResponse.innerHTML =

`
<p>
🎓 Training resources can help you build
skills and earn certifications.
</p>


<a href="training.html">
Explore Training
</a>
`;



}







else if(

question.includes("technology") ||
question.includes("computer") ||
question.includes("coding") ||
question.includes("cybersecurity") ||
question.includes("it")

){


aiResponse.innerHTML =

`
<p>
💻 Technology resources can help you build
IT, coding, and cybersecurity skills.
</p>


<a href="technology.html">
Explore Technology Skills
</a>
`;



}







else if(

question.includes("business") ||
question.includes("startup") ||
question.includes("entrepreneur") ||
question.includes("sell")

){


aiResponse.innerHTML =

`
<p>
🚀 Business resources can help with
entrepreneurship, planning, and growth.
</p>


<a href="business.html">
Explore Business Resources
</a>
`;



}







else if(

question.includes("money") ||
question.includes("finance") ||
question.includes("budget") ||
question.includes("credit")

){


aiResponse.innerHTML =

`
<p>
💰 Financial resources can help with
money management and planning.
</p>


<a href="financial.html">
Explore Financial Resources
</a>
`;



}







else{


aiResponse.innerHTML =

`
<p>
🤖 I can help you find resources for:
</p>


<ul>

<li>💼 Jobs and careers</li>

<li>📝 Resume help</li>

<li>🎓 Training and certifications</li>

<li>💻 Technology skills</li>

<li>🚀 Starting a business</li>

<li>💰 Financial resources</li>

</ul>


<p>

Try asking:

<br><br>

"I need help finding a job"

<br>

"I need resume help"

<br>

"What training programs are available?"

<br>

"How do I start a business?"

</p>

`;



}



});


}



});
