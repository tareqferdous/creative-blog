import React, { useContext, useEffect, useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import "../App.css";
import "./User.css";
import NewPost from "../NewPost/NewPost";
import ReactPaginate from "react-paginate";
import CommonModal from "../CommonModal/CommonModal";
import UserContext from "../UserContext";
import Modal from "../CommonModal/Modal";

const Users = () => {
  const {post, toggle, modal} = React.useContext(UserContext);
  const [posts, setPosts] = post;
  const [openModal, toggleModal] = modal;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  // const {handleOpenModal} = Modal();
  // console.log(handleOpenModal)

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
            <button className="create-btn" 
            // onClick={handleOpenModal}
            onClick={toggleModal}
            >
              Common Modal
            </button>
          </div>
        </div>

        {/* Reuseable modal  */}
        <CommonModal>
        <h2 style={{color: '#e63946'}}>Common Modal</h2>
        <p style={{margin: '20px 0', color: '#264653'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, non! Sequi fuga, at accusamus architecto aut rem autem numquam voluptatibus!</p>
        <button style={{padding: '7px 10px', border: 'none', background: '#e63946', cursor: 'pointer',color: '#fff', borderRadius: '3px'}}>Close</button>
        </CommonModal>

        {/* all posts */}
        <div className="users">
          {displayPosts.map((user) => (
            <UserDetails key={user.id} user={user} />
          ))}
        </div>
        {<NewPost newPost={newPost} setNewPost={setNewPost} />}

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
