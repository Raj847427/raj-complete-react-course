import { useContext, useRef } from "react";
import { PostListContext } from "../Store/Post-List-Store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const user_Id = useRef();
  const Post_Title = useRef();
  const Post_Content = useRef();
  const Post_Reaction = useRef();
  const Post_tag = useRef();
  const { AddPost } = useContext(PostListContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      userId: user_Id.current.value,
      title: Post_Title.current.value,
      body: Post_Content.current.value, // use `body` for dummyjson
      reactions: parseInt(Post_Reaction.current.value), // use `reactions` as number
      tags: Post_tag.current.value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log("Post added to server:", data);

      AddPost(data); // also add to local context

      // Clear all input fields
      user_Id.current.value = "";
      Post_Title.current.value = "";
      Post_Content.current.value = "";
      Post_Reaction.current.value = "";
      Post_tag.current.value = "";

      alert("✅ Post added successfully!");
    } catch (err) {
      console.error("❌ Error adding post:", err);
      alert("❌ Failed to add post.");
    }
    navigate("/");
  };

  return (
    <>
      <div className="bd-example m-0 border-0">
        <form className="create-post" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              ref={user_Id}
              id="user-id"
              placeholder="Enter User ID"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              ref={Post_Title}
              id="title"
              className="form-control"
              placeholder="Enter Title here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Post Content
            </label>
            <textarea
              className="form-control"
              ref={Post_Content}
              id="content"
              placeholder="Enter Content here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reaction" className="form-label">
              Post Reaction
            </label>
            <input
              type="number"
              className="form-control"
              ref={Post_Reaction}
              id="Reaction"
              placeholder="Enter Reaction count"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Tag" className="form-label">
              Post Tags
            </label>
            <input
              type="text"
              className="form-control"
              ref={Post_tag}
              id="post-tag"
              placeholder="Enter tags separated by comma"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
