import { id } from "./markup-detail.js";
export { getObjId };

const getObjId = async () => {
    try {
        const url = "https://striveschool-api.herokuapp.com/api/product/" + id;
        const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k"; 
  
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${key}`
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:' + error);
        alert(error);
    }
  };