import {getObj} from "../modules/api.js";
export {dollsAdmin, dollsDisplay, formattedHTMLCard};

const dollsAdmin = await getObj();
const dollsDisplay = document.getElementById("back-office");

const formattedHTMLCard = (doll) => {
    return `
    <div id="${doll._id}" class="card w-75 mb-3">
     <div class="card-body">
       <h5 class="card-title">${doll.name}</h5>
       <p class="card-text">${doll.description}</p>
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Modify
     </button>
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
       Add
     </button>
     </div>
   </div>`;
}

const modifyDollModal = document.createElement("div");
modifyDollModal.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>`;
dollsDisplay.append(modifyDollModal);

const addDollModal = document.createElement("div");
addDollModal.innerHTML = `<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>`;
dollsDisplay.append(addDollModal);



