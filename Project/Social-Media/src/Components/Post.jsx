import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../Store/Post-List-Store";
const Post = ({ post }) => {
  const { DeletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
              onClick={() => DeletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {(post.tags || []).map((tag) => (
            <span key={tag} className="badge text-bg-primary tag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction" role="alert">
            This Post has been reacted by {post.reaction} People
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
