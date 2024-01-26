import { dollsAdmin, dollsDisplay, formattedHTMLCard, addBtn, title, description, brand, img, price, deleteBtn, createModal } from "./markup-backoffice.js";
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
    
    let fetchBarbieID = async () => {
      try {
        const response = await fetch(url + id, objGet);
        const productToEdit = await response.json();
        return productToEdit;
      } catch (error) {
        console.log(error);
      }
    };

    const barbieOBJ = await fetchBarbieID();

    const inputTitle = document.querySelector("#input_name");
    const inputBrand = document.querySelector("#input_brand");
    const inputDescripition = document.querySelector("#input_desc");
    const inputImg = document.querySelector("#input_img");
    const inputPrice = document.querySelector("#input_price");

    inputTitle.value = barbieOBJ.name;
    inputBrand.value = barbieOBJ.brand;
    inputDescripition.value = barbieOBJ.description;
    inputImg.value = barbieOBJ.imageUrl;  
    inputPrice.value = barbieOBJ.price;

    const saveBtn = document.querySelector(".save-button");
    saveBtn.addEventListener("click", async () => {
      const updatedProduct = {
        name: inputTitle.value,
        brand: inputBrand.value,
        description: inputDescripition.value,
        imageUrl: inputImg.value,
        price: inputPrice.value,
      };

      try {
        const response = await fetch(url + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          },
          body: JSON.stringify(updatedProduct),
        });
        if (response.ok) {
          alert('Product updated successfully.');
          window.location.reload();
        } else {
          alert('Error updating the product.');
        }
      } catch (error) {
        console.error(error);
      }
    });
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
