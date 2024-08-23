import React from "react";
import { useSelector } from "react-redux";

const PostsList = () => {

    const posts = useSelector((state)=> state.post)
    console.log(posts);
    
    const renderedPost = posts.map((item)=>(
        <div key={item.id} className="py-5">
            <h3 >{item.title}</h3>
            <p>{item.content}</p>
        </div>
    ))

  return (
  <section>
    <div className="text-center py-10">
    <h2 className="text-xl font-bold ">Posts</h2>
    {renderedPost}
    </div>
   
  </section>
);
};

export default PostsList;
