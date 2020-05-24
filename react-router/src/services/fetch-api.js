import axios from "axios";

// export const axiosRequest = (query = "react") =>
//   axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);

export const axiosRequest = (query = "react", selectedCategory = null) => {
  const url = selectedCategory
    ? `http://hn.algolia.com/api/v1/search?query=${query}&tags=${selectedCategory}`
    : `http://hn.algolia.com/api/v1/search?query=${query}`;

  return axios.get(url);
};

export const axiosRequestforSingleArticle = (id = "1") =>
  axios.get(`http://hn.algolia.com/api/v1/items/${id}`);
