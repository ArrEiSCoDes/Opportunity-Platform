document.addEventListener("DOMContentLoaded", function () {


/* =====================================
   OPPORTUNITY SPOTLIGHT
===================================== */


const spotlightContainer = document.getElementById(
    "resource-container"
);


const spotlightData = [

{
    title: "Google Career Certificates",
    category: "🎓 Training",
    description:
    "Build career-ready skills through professional certificates and workforce programs.",
    link: "training.html",
    image: "images/training.jpg"
},

{
    title: "Resume Support",
    category: "📝 Resume Help",
    description:
    "Create stronger resumes, improve applications, and prepare for interviews.",
    link: "resume.html",
    image: "images/resume.jpg"
},

{
    title: "Technology Skills",
    category: "💻 Technology",
    description:
    "Learn IT, cybersecurity, coding, and digital skills.",
    link: "technology.html",
    image: "images/technology.jpg"
},

{
    title: "Entrepreneurship Resources",
    category: "🚀 Business",
    description:
    "Learn business planning, marketing, and startup skills.",
    link: "business.html",
    image: "images/business.jpg"
},

{
    title: "Financial Growth",
    category: "💰 Finance",
    description:
    "Explore budgeting, financial literacy, and money management resources.",
    link: "financial.html",
    image: "images/finance.jpg"
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





/* =====================================
   SPOTLIGHT ARROWS
===================================== */


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
/* =====================================
   RESOURCE SEARCH
===================================== */


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
        "course",
        "certificate",
        "education"
    ],
    page:"training.html"
},


{
    terms:[
        "technology",
        "computer",
        "coding",
        "it",
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
        "money",
        "finance",
        "budget",
        "credit"
    ],
    page:"financial.html"
},


{
    terms:[
        "business",
        "startup",
        "entrepreneur"
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


if(!searchInput){
    return;
}



const searchValue =
searchInput.value
.toLowerCase()
.trim();



if(searchValue === ""){


alert(
"Please enter something to search."
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







/* =====================================
   OPPORTUNITY AI ASSISTANT
===================================== */



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



if(!aiQuestion || !aiResponse){

return;

}



const question =
aiQuestion.value
.toLowerCase();





if(
question.includes("job")
||
question.includes("career")
){


aiResponse.innerHTML = `

Start with Career Discovery.

<br><br>

<a href="career.html">
Explore Careers →
</a>

`;



}



else if(

question.includes("resume")
||
question.includes("interview")

){


aiResponse.innerHTML = `

Resume Support can help improve your applications.

<br><br>

<a href="resume.html">
Resume Help →
</a>

`;



}



else if(

question.includes("learn")
||
question.includes("training")
||
question.includes("course")

){


aiResponse.innerHTML = `

Explore training programs and certifications.

<br><br>

<a href="training.html">
Training Resources →
</a>

`;



}




else if(

question.includes("business")
||
question.includes("startup")

){


aiResponse.innerHTML = `

Explore entrepreneurship resources.

<br><br>

<a href="business.html">
Business Resources →
</a>

`;



}



else{


aiResponse.innerHTML = `

Try asking:

<br><br>

• Help me find a job

<br>

• I need resume help

<br>

• I want training

<br>

• I want to start a business

`;



}




}


);


}




});   
