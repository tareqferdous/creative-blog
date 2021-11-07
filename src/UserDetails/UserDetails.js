import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../image/blog.png";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  const { id, title, body } = user;

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Post Deleted Successfully");
      });
  };

  return (
    <div className="user_card">
      <img className="blog-img" src={blogImg} alt={title} />
      <h3 className="user-title">{title}</h3>
      <p className="user-details">{body}</p>
      <Link to={`/users/${id}`}>
        <button style={{ background: "#34a0a4" }} className="common-btn">
          View Post
        </button>
      </Link>
      <button
        style={{ background: "#e63946" }}
        className="common-btn"
        onClick={() => deletePost(id)}
      >
        Delete Post
      </button>
    </div>
  );
};

export default UserDetails;
