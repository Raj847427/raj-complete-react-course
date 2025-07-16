import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  PostList: [],
  AddPost: () => {},
  AddPosts: () => {},
  DeletePost: () => {},
});
const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.postData, ...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [PostList, DispatchPostList] = useReducer(PostListReducer, []);
  const AddPost = (postData) => {
    DispatchPostList({
      type: "ADD_POST",
      payload: {
        postData: {
          ...postData,
          id: Date.now().toString(), // generate unique id
        },
      },
    });
  };
  const DeletePost = (postId) => {
    DispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const AddPosts = (postsArray) => {
    postsArray.forEach((postData) => {
      DispatchPostList({
        type: "ADD_POST",
        payload: {
          postData: {
            ...postData,
            id: Date.now().toString() + Math.random(), // ensure unique id
          },
        },
      });
    });
  };

  return (
    <PostListContext.Provider
      value={{
        PostList,
        AddPost,
        AddPosts, // add this
        DeletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
