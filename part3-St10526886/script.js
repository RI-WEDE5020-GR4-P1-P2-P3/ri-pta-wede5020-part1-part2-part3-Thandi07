const accordions = document.querySelectorAll(".accordion");
accordions.forEach(button=>{
    button.addEventListener("click", function(){
        const panel=this.nextElementSibling;

        if(panel.style.display==="block"){
            panel.style.display="none";
        } else {
            panel.style.display="block";
        }
    });   
 });
const galleryImages= document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.id="lightbox";
document.body.appendChild(lightbox);
galleryImages.forEach(image=>{
    image.addEventListener("click",()=> {
        lightbox.classList.add("active");
        const img= document.createElement("img");
        img.src= image.src;

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})
lightbox.addEventListener("click",()=> {
    lightbox.classList.remove("active");
});

window.addEventListener("load",function(){
    const hero=document.querySelector(".hero");
    if(hero){
        hero.classList.add("show");
    }
});

const projects=[
    {
        title:"Christmas Santa Drive",
        description:"Collecting and distributing Christmas gifts for learners and their families."
    },
    {
        title:"School Stationery Campaign",
        description:"Providing learners with new school supplies for the new academic year"
    }
];

const container=document.getElementById("projects-container");
if(container){
    projects.forEach(project => {
        const card= document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML= `
        <h4>${project.title}</h4>
        <p>${project.description}</p> `;
        container.appendChild(card);
    });
}

const searchInput= document.getElementById("search");
console.log(searchInput);
if(searchInput){
    searchInput.addEventListener("input", function(){
        const value=this.value.toLowerCase();
        const projects= document.querySelectorAll(".project-card");
        projects.forEach(project => {

            if(project.textContent.toLowerCase().includes(value)){ 
                project.style.display="";
            }else{
                project.style.display="none";
            
            }
        });
    });
}
const contactForm= document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(event){
        let valid=true;
        const name= document.getElementById("name");
        const email= document.getElementById("email");
        const nameError= document.getElementById("nameError");
        const emailError= document.getElementById("emailError");

        nameError.textContent="";
        emailError.textContent="";

        if(name.value.trim().length < 3){
            nameError.textContent="Name must be atleat 3 characters";
            valid=false;

        }
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email.value)){
            emailError.textContent= "Please enter a valid email address";
            valid=false;
        }
        if(!valid){
            event.preventDefault();
        }
    })
}
const enquiryForm= document.getElementById("enquiryForm");
if(enquiryForm){
    enquiryForm.addEventListener("submit", function(event){
        event.preventDefault();

        const interest=document.getElementById("interest").value;
        const response=document.getElementById("response");

if(interest=== "volunteer"){
    response.textContent="Volunteer opportunities are currently available.Out team will contact you";

}
else if(interest==="sponsor"){
    response.textContent="Sponsorship opportunities are currently availanle.Thank you for your interest,";
}

    })
}