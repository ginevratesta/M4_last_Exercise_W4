import {submitBtn, inputPass} from "./markup-access-admin.js";

submitBtn.addEventListener("click", (event) => {
 event.preventDefault();

    if(inputPass.value === "barbieAdmin"){
        window.location.href = "./back-office.html";
    }
    else{
        alert("Wrong password")
        inputPass.value = "";
    }
    
});
