import {
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
  deleteBtn,
  createModal
} from "./markup-backoffice.js";
import { postData } from "../modules/api.js";
import { deleteData } from "./api-backoffice.js";
const url = "https://striveschool-api.herokuapp.com/api/product/";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k";
const objGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const displayDollsOptions = () => {
  dollsAdmin
    .slice()
    .reverse()
    .forEach((doll) => {
      dollsDisplay.innerHTML += formattedHTMLCard(doll);
    });
};

displayDollsOptions();


addBtn.addEventListener("click", async () => {
  let barbie = {
    _id: barbieId.value,
    name: title.value,
    description: description.value,
    brand: brand.value,
    imageUrl: img.value,
    price: price.value,
  };
  await postData(barbie);
  window.location.reload();
});

for (const button of deleteBtn) {
  button.addEventListener("click", async (event, cardId) => {
    await deleteData(event, cardId);
  });
}


const modifyBtn = document.querySelectorAll(".modify-button");
  modifyBtn.forEach((putbtn) => {
    putbtn.addEventListener("click", async (event) => {
      const id = event.target.closest(".card").id;
      let fetchDataId = async () => {
        try {
          const response = await fetch(url + id, objGet);
          const products = await response.json();
          return products;
        } catch (error) {
          console.log(error);
        }
      };
      const productToEdit = await fetchDataId();
      console.log(productToEdit);
      console.log(productToEdit.name);
      const inputID = document.querySelector("#input_ID")
      const inputTitle = document.querySelector("#input_name");
      const inputBrand = document.querySelector("#input_brand");
      const inputDescripition = document.querySelector("#input_desc");
      const inputImg = document.querySelector("#input_img");
      const inputPrice = document.querySelector("#input_price");
      inputID.value = productToEdit._id;
      inputTitle.value = productToEdit.name;
      inputBrand.value = productToEdit.brand;
      inputDescripition.value = productToEdit.description;
      inputImg.value = productToEdit.name;
      inputPrice.value = productToEdit.price;
    });
  });
  const modal = createModal({
    _id: "",
    name: "",
    brand: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const containerModal = document.querySelector(".container-modal");
  containerModal.innerHTML = modal;

console.log(title);

// const functionSavePut = async (event) => {
// console.log("hello");
// };

// const saveBtn = document.querySelector(".save-button");
// saveBtn.addEventListener("click", async (event) => {
//   await functionSavePut(event);
// });

// const modifyObj = async () => {
//     try {
//         const url = "https://striveschool-api.herokuapp.com/api/product/" + id;
//         const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k";

//         const options = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${key}`
//             },
//         };
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data
//     } catch (error) {
//         console.error('Error:' + error);
//         alert(error);
//     }
//   };
