import React, { useContext, useEffect, useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import "../App.css";
import "./User.css";
import NewPost from "../NewPost/NewPost";
import ReactPaginate from "react-paginate";
import CommonModal from "../CommonModal/CommonModal";
import UserContext from "../UserContext";

const Users = () => {
  const [posts, setPosts] = useContext(UserContext);
  // const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const createNewPost = () => {
    setNewPost(true);
  };

  const postPerPage = 20;
  const pageVisited = pageNumber * postPerPage;

  const displayPosts = posts.slice(pageVisited, pageVisited + postPerPage);

  const pageCount = Math.ceil(posts.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="home">
      <div className="container">
        <div className="wrap">
          <div>
            <h3 className="sub-title">Most Recent Posts</h3>
          </div>
          <div>
            <button style={{margin: '0 10px'}} className="create-btn" onClick={() => createNewPost()}>
              Create New Post
            </button>
            <button className="create-btn" onClick={() => setModalIsOpen(true)}>
              Common Modal
            </button>
          </div>
        </div>

        {/* Reuseable modal  */}
        <CommonModal isOpen={modalIsOpen} close={()=> setModalIsOpen(false)} >
        <h2 style={{color: '#e63946'}}>Common Modal</h2>
        <p style={{margin: '20px 0', color: '#264653'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, non! Sequi fuga, at accusamus architecto aut rem autem numquam voluptatibus!</p>
        <button onClick={()=> setModalIsOpen(false)} style={{padding: '7px 10px', border: 'none', background: '#e63946', cursor: 'pointer',color: '#fff', borderRadius: '3px'}}>Close</button>
        </CommonModal>

        {/* all posts */}
        <div className="users">
          {displayPosts.map((user) => (
            <UserDetails key={user.id} user={user} />
          ))}
        </div>
        {<NewPost setNewPost={setNewPost} newPost={newPost} />}

        {/* pagination */}
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
