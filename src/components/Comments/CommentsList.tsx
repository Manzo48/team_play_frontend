import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { fetchComments } from "../../features/CommentSlice";

interface CommentProps {
  postId: string;
}

function CommentList({ postId }: CommentProps) {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.commentReducer.comments);

  useEffect(() => {
    dispatch(fetchComments());
    console.log(comments)
  }, [dispatch]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto w-3/4">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
      <ul>
        {comments.map((comment) => (
          comment.post === postId && (
            <li key={comment._id} className="border border-gray-300 rounded-lg p-4 mb-4 w-3/4 mx-auto">
              <div className="flex items-start space-x-2">
                {/* <img src={comment.avatarURL} alt={`Avatar of ${comment.user}`} className="w-8 h-8 rounded-full" /> */}
                <div className="flex-grow">
                  <strong className="text-gray-800">{comment.user.nickName}</strong>
                </div>
              </div>
              <p className="text-gray-600 mt-1">{comment.text}</p>
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
