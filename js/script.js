```javascript
document.addEventListener("DOMContentLoaded", function () {


/* ============================
   OPPORTUNITY SPOTLIGHT DATA
============================ */


const spotlightResources = [

{
title:"Google Career Certificates",
category:"Training",
description:"Build career-ready skills through professional certificates.",
link:"training.html",
image:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
},


{
title:"Technology Skills Training",
category:"Technology",
description:"Explore IT, coding, cybersecurity, and digital learning.",
link:"technology.html",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
},


{
title:"Entrepreneurship Resources",
category:"Business",
description:"Learn business planning, marketing, and startup skills.",
link:"business.html",
image:"https://images.unsplash.com/photo-1556761175-b413da4baf72"
},


{
title:"AI Learning Resources",
category:"Artificial Intelligence",
description:"Discover beginner-friendly artificial intelligence resources.",
link:"ai-skills.html",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995"
}

];





/* ============================
   SEARCH DATABASE
============================ */


const resources = [


{
title:"Career Discovery",
category:"Career",
description:"Explore careers, job pathways, and career assessments.",
link:"career.html"
},


{
title:"Resume Support",
category:"Resume",
description:"Create resumes, improve applications, and prepare for interviews.",
link:"resume.html"
},


{
title:"Training & Certifications",
category:"Training",
description:"Find certifications, workforce programs, and education resources.",
link:"training.html"
},


{
title:"Technology Skills",
category:"Technology",
description:"Learn IT, coding, cybersecurity, and digital skills.",
link:"technology.html"
},


{
title:"AI Skills",
category:"AI",
description:"Learn artificial intelligence tools and concepts.",
link:"ai-skills.html"
},


{
title:"Financial Growth",
category:"Finance",
description:"Build financial literacy and money management skills.",
link:"financial.html"
},


{
title:"Entrepreneurship",
category:"Business",
description:"Start or grow a business with learning resources.",
link:"business.html"
},


{
title:"Leadership Development",
category:"Leadership",
description:"Build leadership and professional skills.",
link:"leadership.html"
}


];







/* ============================
   SPOTLIGHT DISPLAY
============================ */


const spotlightContainer =
document.getElementById("resource-container");


let spotlightIndex = 0;



function showSpotlight(){


if(!spotlightContainer){
return;
}


spotlightContainer.innerHTML="";



for(
let i = spotlightIndex;
i < spotlightIndex + 3;
i++
){


let resource =
spotlightResources[i % spotlightResources.length];



spotlightContainer.innerHTML += `


<div class="resource-card">


<a href="${resource.link}">


<img src="${resource.image}">


<div class="resource-info">


<h3>
${resource.title}
</h3>


<p>
${resource.category}
</p>


<p>
${resource.description}
</p>


</div>


</a>


</div>


`;

}


}



showSpotlight();





document
.getElementById("nextBtn")
?.addEventListener("click", function(){


spotlightIndex++;

showSpotlight();


});





document
.getElementById("prevBtn")
?.addEventListener("click", function(){


spotlightIndex--;

if(spotlightIndex < 0){

spotlightIndex =
spotlightResources.length - 1;

}


showSpotlight();


});









/* ============================
   SEARCH FUNCTION
============================ */


const searchButton =
document.getElementById("searchButton");


const searchInput =
document.getElementById("resourceSearch");



if(searchButton && searchInput){



searchButton.addEventListener("click", function(){


const searchTerm =
searchInput.value.toLowerCase().trim();



const results =
resources.filter(resource =>


resource.title.toLowerCase().includes(searchTerm)

||

resource.category.toLowerCase().includes(searchTerm)

||

resource.description.toLowerCase().includes(searchTerm)


);



spotlightContainer.innerHTML="";



if(results.length === 0){


spotlightContainer.innerHTML = `


<div class="resource-card">


<div class="resource-info"
style="transform:translateY(0);">


<h3>
No Resources Found
</h3>


<p>
Try searching:
career, resume, training, AI, business
</p>


</div>


</div>


`;


return;


}




results.forEach(resource => {


spotlightContainer.innerHTML += `


<div class="resource-card">


<div class="resource-info"
style="transform:translateY(0);">


<h3>
${resource.title}
</h3>


<p>
${resource.description}
</p>


<a class="btn" href="${resource.link}">
Explore
</a>


</div>


</div>


`;


});



});



}





});
```

