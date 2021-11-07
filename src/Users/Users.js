import React, { useEffect, useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import "../App.css";
import "./User.css";
import NewPost from "../NewPost/NewPost";
import ReactPaginate from "react-paginate";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const createNewPost = () => {
    setNewPost(true);
  };

  const postPerPage = 20;
  const pageVisited = pageNumber * postPerPage;

  const displayPosts = users.slice(pageVisited, pageVisited + postPerPage);

  const pageCount = Math.ceil(users.length / postPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <section className="home">
      <div className="container">
        <div className="wrap">
          <div>
            <h3 className="sub-title">Most Recent Posts</h3>
          </div>
          <div>
            <button className="create-btn" onClick={() => createNewPost()}>
              Create New Post
            </button>
          </div>
        </div>
        <div className="users">
          {displayPosts.map((user) => (
            <UserDetails key={user.id} user={user} />
          ))}
        </div>
        {<NewPost setNewPost={setNewPost} newPost={newPost} />}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </section>
  );
};

export default Users;
