import { getObj } from "../modules/api.js";
export {
  dollsAdmin,
  dollsDisplay,
  formattedHTMLCard,
  addBtn,
  title,
  description,
  brand,
  img,
  price,
  deleteBtn,
  createModal,
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
formHolder.classList.add("w-25", "ms-3", "mt-3")
const containerIds = ["title", "brand", "content", "img", "price"];

containerIds.forEach(function (id) {
  const div = document.createElement("div");
  div.classList.add("form-control", "d-flex", "justify-content-between");

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = id.charAt(0).toUpperCase() + id.slice(1);

  const input = document.createElement("input");
  input.setAttribute("type", id === "price" ? "number" : "text");
  input.setAttribute("id", id);
  input.setAttribute("name", id);

  div.appendChild(label);
  div.appendChild(input);

  formHolder.appendChild(div);
});

const homePage = document.createElement("a");
homePage.href = "./index.html";
homePage.style.color = "#7C6ABF";
homePage.textContent = "Homepage";
formHolder.prepend(homePage);
const addBtn = document.createElement("button");
addBtn.setAttribute("id", "post-button");
addBtn.setAttribute("type", "button");
addBtn.classList.add("btn", "btn-primary");
addBtn.innerText = "Save changes";
formHolder.appendChild(addBtn);

const title = document.getElementById("title");
const description = document.getElementById("content");
const brand = document.getElementById("brand");
const img = document.getElementById("img");
const price = document.getElementById("price");

const formattedHTMLCard = (doll) => {
  return `
    <div id="${doll._id}" class="card w-75 mb-3">
     <div class="card-body">
       <h5 class="card-title">Name: ${doll.name}</h5>
       <p class="card-text">Description: ${doll.description}</p>
       <p class="card-text">Brand: ${doll.brand}</p>
       <p class="card-text">Price: ${doll.price} $</p>
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

const createModal = ({
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
        <button type="button" class="btn btn-primary save-button">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`;
};
