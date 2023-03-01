import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

// Popular List
export const getPopularList = async () => {
  const api = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&sort=popularity&number=10&sortDirection=descending`
  );
  // console.log({ popularList: api.data});
  return api.data.results;
};

// Healhty List
export const getHealthyList = async () => {
  const api = await axios.get(
    // `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=&number=10`
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&sort=healthiness&number=10`
  );
  // console.log({ popularList: api.data });
  return api.data.results;
};

//Cuisine List
export const getCuisineList = async (setCuisine) => {
  const api = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${setCuisine}&number=10`
  );
  console.log({ popularList: api.data });
  return api.data.results;
};

//Search List
export const getSearchList = async (q) => {
  const api = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${q}&number=10`
  );
  // console.log({ popularList: api.data });
  return api.data.results;
};

// Detail List
export const getDetailList = async (id) => {
  const api = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );
  // console.log({ popularList: api.data });
  return api.data;
};
