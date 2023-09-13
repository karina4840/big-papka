import axios from "axios";


// инфо из opencagedata api чтобы работать с именами городов 
async function getCoordinatesOfAddress(address) {
  const data = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json?",
    {
      params: {
        key:"915c15043ffa4895b59453b0f884c41a",
        q: address,
        language: "en"
      }
    }
  );

  return data;
}

export default getCoordinatesOfAddress;
