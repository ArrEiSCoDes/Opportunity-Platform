```javascript
document.addEventListener("DOMContentLoaded", function(){


/* ============================
   OPPORTUNITY SPOTLIGHT
============================ */


const spotlightContainer =
document.getElementById("resource-container");



const spotlightData = [


{
title:"Google Career Certificates",
category:"🎓 Training",
description:"Build career-ready skills through professional certificates and learning programs.",
link:"./training.html",
image:"./images/training.jpg"
},


{
title:"Resume Support",
category:"📝 Career",
description:"Create stronger resumes and prepare for job opportunities.",
link:"./resume.html",
image:"./images/resume.jpg"
},


{
title:"Technology Skills",
category:"💻 Technology",
description:"Learn IT, cybersecurity, coding, and digital skills.",
link:"./technology.html",
image:"./images/technology.jpg"
},


{
title:"Entrepreneurship",
category:"🚀 Business",
description:"Learn business planning, marketing, and startup skills.",
link:"./business.html",
image:"./images/business.jpg"
}


];





let spotlightPosition = 0;



function displaySpotlight(){


if(!spotlightContainer){
return;
}



spotlightContainer.innerHTML="";



for(
let i = spotlightPosition;
i < spotlightPosition + 3;
i++
){


let item =
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





document
.getElementById("nextBtn")
?.addEventListener(
"click",
function(){

spotlightPosition++;

displaySpotlight();

});





document
.getElementById("prevBtn")
?.addEventListener(
"click",
function(){


spotlightPosition--;


if(spotlightPosition < 0){

spotlightPosition =
spotlightData.length - 1;

}


displaySpotlight();


});








/* ============================
   RESOURCE SEARCH
============================ */



const resources = [


{
name:"Career Discovery",
keywords:"career jobs employment",
page:"career.html"
},


{
name:"Resume Support",
keywords:"resume cv interview job",
page:"resume.html"
},


{
name:"Training Certifications",
keywords:"training certification education school",
page:"training.html"
},


{
name:"Technology Skills",
keywords:"technology IT coding cybersecurity",
page:"technology.html"
},


{
name:"AI Skills",
keywords:"AI artificial intelligence",
page:"ai-skills.html"
},


{
name:"Financial Growth",
keywords:"money finance budgeting credit",
page:"financial.html"
},


{
name:"Business",
keywords:"business entrepreneur startup",
page:"business.html"
}


];







const searchInput =
document.getElementById("resourceSearch");



const searchButton =
document.getElementById("searchButton");





function searchResources(){


let search =
searchInput.value
.toLowerCase()
.trim();



if(search===""){

return;

}




let result =
resources.find(resource =>

resource.keywords.includes(search)

||
resource.name.toLowerCase().includes(search)

);



if(result){

window.location.href =
result.page;

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
searchResources
);


}





if(searchInput){


searchInput.addEventListener(
"keypress",
function(event){


if(event.key==="Enter"){


searchResources();


}


});


}






});
```

