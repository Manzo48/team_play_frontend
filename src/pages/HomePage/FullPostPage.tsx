import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchPostById, fetchPosts } from "../../features/PostSlice";
import { RootState, AppDispatch } from "../../app/store";
import CommentList from "../../components/Comments/CommentsList";
import FormComments from "../../components/Comments/CommentsForm";
import "tailwindcss/tailwind.css";

function FullPost() {
  const { postId } = useParams<{ postId?: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.postReducer.posts);

  useEffect(() => {
    dispatch(fetchPostById(postId));
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!posts) {
    console.error("Post not found for postId:", postId);
    return (
      <div>
        <p>Error: Post not found</p>
      </div>
    );
  }

  const post = posts.find((singlePost) => singlePost._id === postId);

  if (!post) {
    console.error("Post not found for postId:", postId);
    return (
      <div>
        <p>Error: Post not found</p>
      </div>
    );
  }

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Выводим ссылку на документ в консоль
  console.log("Ссылка на документ:", post.document);

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-screen-xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {post.title}
          </h2>
          <p className="text-gray-600">{post.desc}</p>
          <p className="text-gray-600">{post.document}</p>
          <div className="w-full sm:w-4/5 md:w-4/5 lg:w-2/4 xl:w-2/4 mx-auto mb-4">
            <img
              src={post.imageURL}
              alt="Post"
              className="object-cover w-full h-auto rounded-md"
            />
          </div>
        </motion.div>
      </div>
      <FormComments postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
}

export default FullPost;
