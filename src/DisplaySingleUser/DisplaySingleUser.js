import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./DisplaySingleUser.css";
import blogImg from "../image/blog.png";
import { Link } from "react-router-dom";

const DisplaySingleUser = () => {
  const [singleUser, setSingleUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data));
  }, [id]);

  return (
    <div className="container">
      <div className="blog">
        <div className="blog-img">
          <img className="blog-image" src={blogImg} alt="" />
        </div>
        <div className="blog-info">
          <h3 className="blog-title">{singleUser.title}</h3>
          <p className="blog-details">{singleUser.body}</p>
          <Link to="/">
            <button className="backBtn">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DisplaySingleUser);
