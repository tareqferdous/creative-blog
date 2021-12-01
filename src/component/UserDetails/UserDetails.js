import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import blogImg from "../../image/blog.png";
import "./UserDetails.css";
import 'react-toastify/dist/ReactToastify.css';
import Snackbar from "../../shared/Snackbar/Snackbar";
import UserContext from "../../UserContext";


const UserDetails = ({ user }) => {
  const { id, title, body } = user;
  const {toggle} = useContext(UserContext);
  const [postData, setPostData] = toggle;

  const SnackbarType = {
    success: "success",
    fail: "fail",
  };
  
  const snackbarRef = useRef(null);

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setPostData(!postData);
        snackbarRef.current.show();
      });
  };
  
  const postDetails = body.substr(0, 80);

  return (
    <div className="user_card">
      <img className="blog-img" src={blogImg} alt={title} />
      <h3 className="user-title">{title}</h3>
      <p className="user-details">{postDetails}</p>
      
      <div className="card-footer">
      <div className="view">
      <Link style={{textDecoration: 'none'}} to={`/users/${id}`}>
        <button style={{ background: "#34a0a4" }} className="common-btn">
          View Post
        </button>
      </Link>
      </div>
      <div className="delete">
      <button
        style={{ background: "#e63946" }}
        className="common-btn"
        onClick={() => deletePost(id)}
      >
        Delete Post
      </button>
      </div>
      </div>

      {/* notification */}
      <Snackbar
        ref={snackbarRef}
        message="Post Deleted!"
        type={SnackbarType.fail}
      />
    </div>
  );
};

export default UserDetails;
