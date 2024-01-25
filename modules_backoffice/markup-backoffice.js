import {getObj} from "../modules/api.js";
export {dollsAdmin, dollsDisplay, formattedHTMLCard, addBtn, deleteBtn, title, description, brand, img, price};

const dollsAdmin = await getObj();
const dollsDisplay = document.getElementById("back-office");
dollsDisplay.classList.add("d-flex", "align-items-center", "flex-column", "py-5");
// const addBtnModal = document.createElement("div");
// addBtnModal.innerHTML = `
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
//        Add
//      </button>`;
// dollsDisplay.prepend(addBtnModal);     

const formattedHTMLCard = (doll) => {
    return `
    <div id="${doll._id}" class="card w-75 mb-3">
     <div class="card-body">
       <h5 class="card-title">${doll.name}</h5>
       <p class="card-text">${doll.description}</p>
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Modify
     </button>
     <button type="button" class="btn btn-primary delete-button">
       Remove
     </button>
     </div>
   </div>`;
};
const deleteBtn = document.getElementsByClassName("delete-button");



const modifyDollModal = document.createElement("div");
modifyDollModal.innerHTML = `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <form>
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" />
    </div>


    <div class="form-control">
      <label for="brand">Brand</label>
      <input type="text" id="brand" name="brand" />
    </div>
    <div class="form-control">
      <label for="content">Content</label>
      <input type="text" id="content" name="description" />
    </div>

    <div class="form-control">
      <label for="img">Image URL</label>
      <input type="text" id="img" name="img" />
    </div>

    <div class="form-control">
      <label for="price">Price</label>
      <input type="number" id="price" name="price" />
    </div>
  </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary put-button">Save changes</button>
    </div>
  </div>
</div>`;
dollsDisplay.append(modifyDollModal);
const modifyBtn = document.getElementsByClassName("put-button");





// const addDollModal = document.createElement("div");
// addDollModal.innerHTML = `
//     <form>
//     <div class="form-control">
//       <label for="title">Title</label>
//       <input type="text" id="title" name="title" />
//     </div>


//     <div class="form-control">
//       <label for="brand">Brand</label>
//       <input type="text" id="brand" name="brand" />
//     </div>
//     <div class="form-control">
//       <label for="content">Content</label>
//       <input type="text" id="content" name="description" />
//     </div>

//     <div class="form-control">
//       <label for="img">Image URL</label>
//       <input type="text" id="img" name="img" />
//     </div>

//     <div class="form-control">
//       <label for="price">Price</label>
//       <input type="number" id="price" name="price" />
//     </div>
//   </form>

//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" >Close</button>
//       <button id="post-button" type="button" class="btn btn-primary">Save changes</button>
//     </div>
//   </div>
// </div>`;
// dollsDisplay.appendChild(addDollModal);
const addBtn = document.getElementById("post-button");
const title = document.getElementById("title");
const description = document.getElementById("content");
const brand = document.getElementById("brand");
const img = document.getElementById("img");
const price = document.getElementById("price");






