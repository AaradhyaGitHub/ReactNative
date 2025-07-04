import axios from "axios";
const BACKEND_URL = "https://flowbook-533c9-default-rtdb.firebaseio.com/";

export async function storeSpar(sparData) {
  const response = await axios.post(BACKEND_URL + "/spar.json", sparData);
  const id = response.data.name;
  return id;
}

export async function fetchSpars() {
  const response = await axios.get(BACKEND_URL + "/spar.json"); // Fixed typo: was "spar.jsxon"

  const spars = [];

  for (const key in response.data) {
    const sparObj = {
      id: key,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
      rating: response.data[key].rating,
      result: response.data[key].result
    };
    spars.push(sparObj);
  }
  return spars;
}

export function updateSpar(id, sparData) {
  return axios.put(BACKEND_URL + `/spar/${id}.json`, sparData);
}

export function deleteSpar(id) {
  return axios.delete(BACKEND_URL + `/spar/${id}.json`);
}
