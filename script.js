// Theme Toggle

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light");

const icon = toggle.querySelector("i");

if(document.body.classList.contains("light")){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

}else{

icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");

}

});

// Scroll Reveal Animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition="1s";

observer.observe(section);

});