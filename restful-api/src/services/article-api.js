import axios from "axios";

const searchQuery = "http://hn.algolia.com/api/v1/search?query=";

export const articleRequest = (query = "react") =>
  axios.get(searchQuery + query);
////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fetch(searchQuery + defaultQuery)
//   .then((response) => {
//     if (response.ok) {
//       response.json();
//     }
//     throw new Error(response.statusText);
//   })
//   .then(({ hits }) => {
//     this.setState({ articles: hits });
//     console.dir(hits);
//   })
//   .catch(console.log);

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this.setState({ isLoading: true });
// axios
//   .get(searchQuery + defaultQuery)
//   .then(({ data }) => {
//     this.setState({ articles: objectKeysTransformer(data.hits) });
//   })
//   .catch((error) => this.setState({ error }))
//   .finally(() => {
//     this.setState({ isLoading: false });
//   });


export const objectKeysTransformer = (articles) => {
    return articles.map(({ objectID: id, url: link, ...props }) => ({
      id,
      link,
      ...props,
    }));
  };