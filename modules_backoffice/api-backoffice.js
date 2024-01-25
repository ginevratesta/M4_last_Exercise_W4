export {deleteData};

const deleteData = async (event) => {
    const card = event.target.closest(".card");
    const cardId = card.id;
    console.log(cardId);

    const confirmDeletion = confirm("Are you sure you want to delete this item?");
    
    if (!confirmDeletion) {
      return; 
    }

    try {
      const url = `https://striveschool-api.herokuapp.com/api/product/${cardId}`;
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k";

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      };

      await fetch(url, options);

     window.location.reload();

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete item. Please try again.");
    }
  };