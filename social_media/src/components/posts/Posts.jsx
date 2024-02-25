import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "SS",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZnrUK57P65j6kCNKd-Me0MyC5J-x-r9lbw&usqp=CAU",
      desc: "About today's day",
      img: "https://wallpapers.com/images/hd/group-of-friend-pictures-0dnk5joe7k9cxvv1.jpg",
    },
    {
      id: 2,
      name: "Hari",
      userId: 2,
      profilePic:
        "https://img.freepik.com/premium-vector/cute-muslim-girl-cat-cartoon-illustration_426162-221.jpg",
      desc: "Today's work",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
