document.addEventListener("DOMContentLoaded", function () {


/* =====================================
   OPPORTUNITY SPOTLIGHT
===================================== */


const spotlightContainer = document.getElementById(
    "resource-container"
);


const spotlightData = [

    {
        title: "Career Support",
        category: "💼 Careers",
        description:
        "Explore career pathways, employment resources, and professional growth opportunities.",
        link: "./career.html",
        image: "./images/career-support.jpg"
    },

    {
        title: "Technology Training",
        category: "💻 Technology",
        description:
        "Learn technology skills, IT training, coding, and cybersecurity resources.",
        link: "./technology.html",
        image: "./images/technology-training.jpg"
    },

    {
        title: "Small Business Resources",
        category: "🚀 Business",
        description:
        "Discover tools for business planning, marketing, and entrepreneurship.",
        link: "./business.html",
        image: "./images/small-business.jpg"
    },

    {
        title: "Healthcare Benefits",
        category: "💙 Benefits",
        description:
        "Find healthcare support, benefits information, and helpful community resources.",
        link: "./financial.html",
        image: "./images/healthcare-benefits.jpg"
    },

    {
        title: "Housing Resources",
        category: "🏠 Housing",
        description:
        "Explore housing support, stability resources, and assistance programs.",
        link: "./financial.html",
        image: "./images/housing-resources.jpg"
    }

];
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
