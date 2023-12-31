import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";

const TopThree: React.FC = () => {
  const posts = useSelector((state: RootState) =>
    state.postReducer.posts
      .slice()
      .sort((a, b) => b.viewsCount - a.viewsCount)
      .slice(0, 3)
  );

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4"
        >
          <img src={post.imageURL} alt="*" className="w-full h-auto" />
          <h1 className="text-xl font-semibold mt-2">{post.title}</h1>
          <p className="text-gray-600">{post.text}</p>
          <p className="text-gray-600">ПРОСМОТРЫ: {post.viewsCount}</p>
          <Link
            to={`/fullpost/${post._id}`}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            к тексту
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopThree;


