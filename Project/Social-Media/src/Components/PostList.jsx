import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../Store/Post-List-Store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { PostList, AddPosts } = useContext(PostListContext);
  const [Fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        AddPosts(
          data.posts.map((post) => ({
            ...post,
          }))
        );
        setFetching(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted.");
        } else {
          console.error("Fetch error:", err);
        }
        setFetching(false); // make sure you stop loading even on error
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {Fetching && <Loading />}
      {!Fetching && PostList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!Fetching && PostList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
