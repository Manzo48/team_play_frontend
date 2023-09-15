import React, { useState, ChangeEvent, FormEvent } from "react";
import { AppDispatch } from "../../app/store";
import { addComment } from "../../features/CommentSlice";
import { useDispatch } from "react-redux";

interface CommentsFormProps {
  postId: string;
  onSubmit: () => void;
}

function FormComments({ postId, onSubmit }: CommentsFormProps) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddComment = async () => {
    try {
      if (!text.trim()) {
        setError("Comment text cannot be empty.");
        return;
      }

      await dispatch(addComment({ postId, text }));
      setText("");
      onSubmit();
    } catch (error) {
      // Обработка ошибок
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleAddComment();
  };

  return (
    <div className="bg-white p-4 md:w-2/3 mx-auto my-10 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:space-x-2">
        <input
          type="text"
          placeholder="Write your comment here..."
          value={text}
          onChange={handleChange}
          className="flex-1 px-2 py-1 md:py-2 border rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          ADD
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default FormComments;
