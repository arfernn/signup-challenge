const submitBtnId = "#submit-btn";
const dismissBtnId = "#dismiss-btn";

let form = document.querySelector("#sub-form");

let submitBtn = document.querySelector("#submit-btn");
let dismissBtn = document.querySelector("#dismiss-btn");

let primaryView = document.querySelector("primary");
let secondaryView = document.querySelector("secondary");

submitBtn.addEventListener("click",(e)=> {
    // Prevent page refreshing
    e.preventDefault();

    if(!form.checkValidity())
    {
        //form.reportValidity();
    }
    else {
        primaryView.style.display = "none";
        secondaryView.style.display = "flex";
    }
});

dismissBtn.addEventListener("click",(e)=>{
    // Prevent page refreshing
    e.preventDefault();
    primaryView.style.display = "flex";
    secondaryView.style.display = "none";    
});