import React, { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "This is a project built for education purpose",
      name: "SS",
      userId: 1,
      profilePicture:
        "https://i.pinimg.com/736x/23/a9/2c/23a92c27f8c42d72ad1bfb0925ddbfbb.jpg",
    },
    {
      id: 2,
      desc: "This is a project built for education purpose",
      name: "Hari",
      userId: 2,
      profilePicture:
        "https://i.pinimg.com/originals/28/93/41/2893416b1c4f084a64a9a32d5e43a010.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
