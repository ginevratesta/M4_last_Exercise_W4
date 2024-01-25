import {dollsAdmin, dollsDisplay, formattedHTMLCard, addBtn, title, description, brand, img, price} from "./markup-backoffice.js";
import {postData} from "../modules/api.js";

const displayDollsOptions = () => {
dollsAdmin.forEach(doll => {
 dollsDisplay.innerHTML += formattedHTMLCard(doll);
});
};

displayDollsOptions();

addBtn.addEventListener("click", () => {
    console.log("clicked");
});

// addBtn.addEventListener("click", async (event) => {
//     let barbie = {
//         name: title.value,
//         description: description.value,
//         brand: brand.value,
//         imageUrl: img.value,
//         price: price.value,
//     }
//     await postData(barbie);
// })

// for (const button of deleteBtn) {
//   button.addEventListener("click", async (event) => {
//     event.preventDefault();
//     const card = event.target.closest(".card");
//     const cardId = card.id;

//     const confirmDeletion = confirm("Are you sure you want to delete this item?");
    
//     if (!confirmDeletion) {
//       return; 
//     }

//     try {
//       const url = `https://striveschool-api.herokuapp.com/api/product/${cardId}`;
//       const key = "your_auth_token";

//       const options = {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${key}`,
//         },
//       };

//       await fetch(url, options);

//       card.remove();

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to delete item. Please try again.");
//     }
//   });
// }



// const deleteObj = async () => {
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