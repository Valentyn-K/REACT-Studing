import React from "react";
const PostList = ({ items = [], onDeletePost }) => (
  <>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>Location:{item.location}</p>
          <button onClick={() => onDeletePost(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export default PostList;
