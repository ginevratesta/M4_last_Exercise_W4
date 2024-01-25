import {
  dollsAdmin,
  dollsDisplay,
  formattedHTMLCard,
  addBtn,
  title,
  description,
  brand,
  img,
  price,
  deleteBtn
} from "./markup-backoffice.js";
import { postData } from "../modules/api.js";
import { deleteData } from "./api-backoffice.js";

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

const functionPut = async () => {
  console.log("ciao");
};

const modifyBtn = document.querySelector(".put-button");
modifyBtn.addEventListener("click", async () => {
  await functionPut();
});

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
