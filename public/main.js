const animateUl = document.querySelector("#animate-ul");
const animateSummary = document.querySelector("#animated-summary");

animateSummary.addEventListener("click",()=>{
    animateUl.classList.add("animate-intro");
    setTimeout(() => {
        animateUl.classList.remove("animate-intro");  
    }, 100);
})

