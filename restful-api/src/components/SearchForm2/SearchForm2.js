import React from "react";

const searchForm2 = ({ value, onQueryChange, onSearchButtonClick }) => (
  <div>
    <input type="text" value={value} onChange={onQueryChange} />
    <button type="button" onClick={onSearchButtonClick}>
      Search
    </button>
  </div>
);

export default searchForm2;

// export default searchForm2;

// export default class SearchForm extends Component {
//   state = { query: "" };

//   handleChange = (e) => {
//     this.setState({ query: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onHandleSubmit(this.state.query);
//     this.setState({ query: "" });
//   };

//   render() {
//     const { query } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input onChange={this.handleChange} />
//         <button typr="submit">Submit</button>
//       </form>
//     );
//   }
// }
