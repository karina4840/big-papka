import axios from "axios";


// инфо из opencagedata api чтобы работать с именами городов 
async function getCoordinatesOfAddress(address) {
  const data = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json?",
    {
      params: {
        key:"e20443fc54e04921bd0fa62ca0891910",
        q: address,
        language: "en"
      }
    }
  );

  return data;
}

export default getCoordinatesOfAddress;
