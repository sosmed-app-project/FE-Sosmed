import React, { useState } from "react";

interface Comment {
  id: number;
  user: string;
  content: string;
}

interface CardProps {
  user: string;
  avatar: string;
  caption: string;
  photoURL: string;
}

const Card: React.FC<CardProps> = ({ user, avatar, caption, photoURL }) => {
  const [likes, setLikes] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() !== "") {
      const newComment: Comment = {
        id: comments.length + 1,
        user: "YourUsername", // Ganti dengan username Anda atau gunakan state user jika tersedia
        content: commentInput,
      };
      setComments([...comments, newComment]);
      setCommentInput("");
    }
  };

  return (
    <div className="bg-white w-96 p-8 rounded-lg shadow-md relative ">
      <div className="flex items-center">
        <img src={avatar} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
        <div className="">
          <h3 className="font-semibold">{user}</h3>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-end">
        <p className="break-words">{caption}</p>
      </div>
      <img src={photoURL} className="w-full h-32 object-cover my-4" />

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-start">
          <button onClick={handleLike}>{likes} Likes</button>
        </div>

        <div className="flex items-end">
          <button onClick={() => setShowCommentInput(!showCommentInput)}>
            Comment
          </button>
        </div>
      </div>
      {/* Menampilkan input komentar jika tombol comment diklik */}
      {showCommentInput && (
        <div className="mt-2 flex justify-center">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="border border-gray-300 p-1 rounded-md w-full"
          />
          <button onClick={handleCommentSubmit} className="ml-2">
            Post
          </button>
        </div>
      )}
      {/* Menampilkan daftar komentar */}
      <div className="mt-2">
        {comments.map((comment) => (
          <div key={comment.id} className="mt-1">
            <span className="font-semibold">{comment.user}</span>:{" "}
            {comment.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
