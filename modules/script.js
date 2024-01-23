// import { barbiePassions } from "./array.js";

// barbiePassions.forEach( async (barbie) => {
//     try {
      
//       const url = "https://striveschool-api.herokuapp.com/api/product/";
//       const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIwMDMyY2EwNGNiODAwMThhZDk0ZDYiLCJpYXQiOjE3MDYwMzM5NjQsImV4cCI6MTcwNzI0MzU2NH0.0Fopt8ejefWU0_VicvjGQo9Yv1QaBkCqtB6i64b8634";
  
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${key}`
//         },
//         body: JSON.stringify(barbie)
//       };
  
//       const response = await fetch(url, options);
//       const data = await response.json();

//     } 
//     catch (error) {
//         console.error('Error:' + error);
//       }
//   });


  const getObj = async () => {
    try {
        const url = "https://striveschool-api.herokuapp.com/api/product/";
        const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIwMDMyY2EwNGNiODAwMThhZDk0ZDYiLCJpYXQiOjE3MDYwMzM5NjQsImV4cCI6MTcwNzI0MzU2NH0.0Fopt8ejefWU0_VicvjGQo9Yv1QaBkCqtB6i64b8634"; 

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();

            console.log("Whole array:", data);
    } catch (error) {
        console.error('Error:' + error);
        alert(error);
    }
};

getObj();
