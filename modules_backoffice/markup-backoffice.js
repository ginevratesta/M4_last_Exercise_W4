import { getObj } from "../modules/api.js";
export {
  dollsAdmin,
  dollsDisplay,
  formattedHTMLCard,
  addBtn,
  barbieId,
  title,
  description,
  brand,
  img,
  price,
  deleteBtn
};

const dollsAdmin = await getObj();

const dollsDisplay = document.getElementById("back-office");
dollsDisplay.classList.add(
  "d-flex",
  "align-items-center",
  "flex-column",
  "py-5",
  "w-100"
);

const formHolder = document.getElementById("form");
const homePage = document.createElement("a");
homePage.href = "./index.html";
homePage.textContent = "Homepage";
formHolder.prepend(homePage);

const addBtn = document.getElementById("post-button");
const barbieId = document.getElementById("id")
const title = document.getElementById("title");
const description = document.getElementById("content");
const brand = document.getElementById("brand");
const img = document.getElementById("img");
const price = document.getElementById("price");

const formattedHTMLCard = (doll) => {
  return `
    <div id="${doll._id}" class="card w-75 mb-3">
     <div class="card-body">
       <h5 class="card-title">${doll.name}</h5>
       <p class="card-text">${doll.description}</p>
       <h6>ID: ${doll._id}</h6>
       <button type="button" class="btn btn-primary modify-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

export const createModal = ({
  _id = "",
  name = "",
  brand = "",
  description = "",
  imageUrl = "",
  price = "",
}) => {
  return `
  <div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Modify element
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
        <div class="form-control">
            <label for="title">ID</label>
            <input
              type="text"
              value="${_id}"
              id="input_ID"
              name="ID"
            />
          </div>
          <div class="form-control">
            <label for="title">Title</label>
            <input
              type="text"
              value="${name}"
              id="input_name"
              name="title"
            />
          </div>

          <div class="form-control">
            <label for="brand">Brand</label>
            <input
              type="text"
              value="${brand}"
              id="input_brand"
              name="brand"
            />
          </div>
          <div class="form-control">
            <label for="content">Content</label>
            <input
              type="text"
              value="${description}"
              id="input_desc"
              name="description"
            />
          </div>

          <div class="form-control">
            <label for="img">Image URL</label>
            <input
              type="text"
              value="${imageUrl}"
              id="input_img"
              name="img"
            />
          </div>

          <div class="form-control">
            <label for="price">Price</label>
            <input
              type="number"
              value="${price}"
              id="input_price"
              name="price"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary put-button">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`;
};
 

dollsDisplay.append(modifyDollModal);

