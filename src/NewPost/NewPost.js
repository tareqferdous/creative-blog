import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../UserContext";
import "./NewPost.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Snackbar from "../Snackbar/Snackbar";

toast.configure()

const NewPost = ({ newPost, setNewPost }) => {
  const {post, toggle} = useContext(UserContext);
  const [postData, setPostData] = toggle;
  const { register, handleSubmit } = useForm();

  const SnackbarType = {
    success: "success",
    fail: "fail",
  };
  
  const snackbarRef = useRef(null);

  const onSubmit = (data) => {
    const postData = {
      title: data.title,
      body: data.body,
    };

    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((success) => {
        setNewPost(false);
        setPostData(!postData)
        snackbarRef.current.show();
      });
  };

  const closeNewPost = () => {
    setNewPost(false);
  };

  return (
    <>
      {newPost && (
        <div className="popup">
          <div className="overlay"></div>

          <div className="content">
            <div className="wrap">
              <div className="post-title">
                <h3>Create A New Post</h3>
              </div>
              <div className="icon">
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() => closeNewPost()}
                  class="fas fa-times"
                ></i>
              </div>
            </div>
            <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
              <input
                className=""
                placeholder="Post Title"
                type="text"
                name="title"
                required
                {...register("title")}
              />

              <br />

              <textarea
                rows="3"
                cols="50"
                placeholder="Post Details"
                name="body"
                form="usrform"
                required
                {...register("body")}
              ></textarea>

              <input
                style={{
                  width: "100px",
                  padding: "5px 0",
                  border: "none",
                  background: "teal",
                  color: "white",
                  fontSize: "16px",
                  borderRadius: "3px",
                }}
                className="submit-btn"
                type="submit"
              />
            </form>
          </div>
        </div>
      )}

      <Snackbar
        ref={snackbarRef}
        message="Post Created Successfully!"
        type={SnackbarType.success}
      />
    </>
  );
};

export default NewPost;
