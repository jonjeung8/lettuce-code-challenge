//Hambuerger Icon

const toggleButton = document.getElementsByClassName("navbar__toggle")[0]
const navLinks = document.getElementsByClassName("navbar__menu")[0]


toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
// const menu = document.querySelector('#mobile-menu')
// const menuLinks = document.querySelector('.navbar__menu')

// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
//});

//Form
// const steps = Array.from(document.querySelectorAll("form .input"));
// const next = document.querySelectorAll("form .next__button");
// const form = document.querySelector("form");

// next = forEach((button) => {
//     button.addEventListener("click", () => {
//         changeStep("next");
//     });
// });
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const inputs = [];
//     form.querySelectorAll("input").forEach((input) => {
//         const { name, value } = input;
//         inputs.push({ name, value });
//     });
//     console.log(inputs);
//     form.reset();
// });
// function changeStep(button) {  
//     let index = 0;  
//     const active = document.querySelector(".active");  
//     index = steps.indexOf(active);  
//     steps[index].classList.remove("active");  
//     if (button === "next") {  
//     index++;  
//     steps[index].classList.add("active");  
//     }
// }   
const steps = Array.from(document.querySelectorAll("form .input"));  
const nextBtn = document.querySelectorAll("form .next__button");
const form = document.querySelector("form");  
nextBtn.forEach((button) => {  
    button.addEventListener("click", () => {  
    changeStep("next");  
    });  
});  

form.addEventListener("submit", (e) => {  
    e.preventDefault();  
    const inputs = [];  
    form.querySelectorAll("input").forEach((input) => {  
        const { name, value } = input;  
        inputs.push({ name, value });  
    });  
    console.log(inputs);  
    form.reset();  
});  
function changeStep(btn) {  
    let index = 0;  
    const active = document.querySelector(".active");  
    index = steps.indexOf(active);  
    steps[index].classList.remove("active");  
    if (btn === "next") {  
        index++;  
        }
    steps[index].classList.add("active");  
}  