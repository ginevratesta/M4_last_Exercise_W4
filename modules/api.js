import { barbieDolls } from "./array.js";
export {getObj};

async function postData(barbie) {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIwZjk0YTkxM2Y2NTAwMThkMDhmNWYiLCJpYXQiOjE3MDYwOTY5NzEsImV4cCI6MTcwNzMwNjU3MX0.e9FEwpqS2Jf1jwWZ6XEUV5tX8N8Gc1kSdZeRtVIUszk";

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify(barbie)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.error('Error:' + error);
  }
}

async function processBarbies() {
  for (const barbie of barbieDolls) {
    await postData(barbie);
  }
}

processBarbies();



  const getObj = async () => {
    try {
        const url = "https://striveschool-api.herokuapp.com/api/product/";
        const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIwZjk0YTkxM2Y2NTAwMThkMDhmNWYiLCJpYXQiOjE3MDYwOTY5NzEsImV4cCI6MTcwNzMwNjU3MX0.e9FEwpqS2Jf1jwWZ6XEUV5tX8N8Gc1kSdZeRtVIUszk"; 

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:' + error);
        alert(error);
    }
};

getObj();
