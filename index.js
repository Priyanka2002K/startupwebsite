let signup=document.querySelector(".signup");
let login=document.querySelector(".login");
let slider=document.querySelector(".slider");
let formSection = document.querySelector(".formsection");

signup.addEventListener("click",() =>{slider.classList.add("moveslider");
formSection.classList.add("form-section-move");
});

login.addEventListener("clicl", () => {slider.classList.add("moveslider");
formSection.classList.remove("form-section-move");});
