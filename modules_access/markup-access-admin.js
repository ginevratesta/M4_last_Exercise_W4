export {submitBtn, inputPass};

const adminZoneAccess = document.getElementById("admin-zone-access");

const accessForm = document.createElement("form");
accessForm.classList.add("pt-5", "px-4", "d-flex", "flex-column", "justify-content-center", "align-items-center");
adminZoneAccess.appendChild(accessForm);

const formTitle = document.createElement("h2");
formTitle.textContent = "Insert here your Admin password to access back office";
formTitle.classList.add("text-center");
accessForm.appendChild(formTitle);

const holder = document.createElement("div");
holder.classList.add("mb-3");
accessForm.appendChild(holder);

const label = document.createElement("label");
label.textContent = "Insert your password here";
label.setAttribute("for", "exampleInputPassword1");
label.classList.add("form-label");
holder.appendChild(label);

const inputPass = document.createElement("input");
inputPass.setAttribute("type", "password");
inputPass.setAttribute("id", "exampleInputPassword1");
inputPass.classList.add("form-control");
holder.appendChild(inputPass);

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("id", "password");
submitBtn.classList.add("btn", "btn-primary")
submitBtn.textContent = "Submit";
accessForm.appendChild(submitBtn);