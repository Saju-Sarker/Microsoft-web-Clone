const animateUl = document.querySelector("#animate-ul");
const animateSummary = document.querySelector("#animated-summary");
const animateIcon = document.querySelector("#animated-summary div");

let isOn = true;

animateSummary.addEventListener("click",()=>{
    animateUl.classList.add("animate-intro");
    if (isOn) {
        animateIcon.innerHTML = "";
        animateIcon.innerHTML = `<i class="fa-solid fa-xmark cursor-pointer text-slate-600 text-xl "></i>`;
        isOn = false;
    }else {
        animateIcon.innerHTML = "";
        animateIcon.innerHTML = `<i class="p-4 fa-solid fa-bars cursor-pointer text-slate-600"></i>`;
        isOn = true;
    }
    setTimeout(() => {
        animateUl.classList.remove("animate-intro");  
    }, 100);
})

