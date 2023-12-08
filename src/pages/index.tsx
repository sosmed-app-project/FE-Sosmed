import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import PostCard from "@/components/post-card";

interface Post {
  id: number;
  user: string;
  avatar: string;
  status: string;
  image?: string;
  comments: Comment[];
  likes: number;
}

interface Comment {
  id: number;
  user: string;
  content: string;
}

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [statusInput, setStatusInput] = useState<string>("");
  const [imageInput, setImageInput] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleStatusUpdate = () => {
    if (statusInput.trim() !== "") {
      const newPost: Post = {
        id: Date.now(),
        user: "Your Name",
        avatar: "https://via.placeholder.com/40",
        status: statusInput,
        image: imageInput || undefined,
        comments: [],
        likes: 0,
      };
      setPosts([newPost, ...posts]);
      setStatusInput("");
      setImageInput("");
      setShowPopup(false);
    }
  };

  const handleImageUpload = (image: string) => {
    setImageInput(image);
  };

  return (
    <section>
      <Navbar />
      <Sidebar>
        <div className="bg-gray-100 mt-10 flex justify-center items-center">
          <div className="bg-white w-96 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/40"
                alt="Facebook Logo"
                className="h-10  mr-2  rounded-full cursor-pointer"
                onClick={() => setShowPopup(true)}
              />
              <textarea
                placeholder="What's on your mind?"
                value={statusInput}
                onClick={() => setShowPopup(true)}
                onChange={(e) => setStatusInput(e.target.value)}
                className="w-full h-11 border border-gray-300  p-2 rounded-sm resize-none"
                rows={1}
              ></textarea>
            </div>
            {showPopup && (
              <div className="mb-6">
                <button
                  onClick={handleStatusUpdate}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Post
                </button>
              </div>
            )}
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              <i className="fa-regular fa-image w-8"></i> Foto
            </div>
          </div>
        </div>
        <div className="space-y-4 my-2 bg-gray-100 mt-10 grid justify-center items-center">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onImageUpload={handleImageUpload}
              onCommentAdd={(postId, comment) => {
                const updatedPosts = posts.map((p) =>
                  p.id === postId
                    ? { ...p, comments: [...p.comments, comment] }
                    : p
                );
                setPosts(updatedPosts);
              }}
              onLike={(postId) => {
                const updatedPosts = posts.map((p) =>
                  p.id === postId ? { ...p, likes: p.likes + 1 } : p
                );
                setPosts(updatedPosts);
              }}
            />
          ))}
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <textarea
                placeholder="Update your status..."
                value={statusInput}
                onChange={(e) => setStatusInput(e.target.value)}
                className="w-full h-32 border bg-gray-200 p-2 rounded-sm resize-none mb-4"
              ></textarea>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      const uploadedImage = reader.result as string;
                      handleImageUpload(uploadedImage);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 w-full h-40 flex items-center justify-center"
              >
                <i className="fa-regular fa-square-plus"></i> Upload Gambar
              </label>

              {showPopup && (
                <div className="flex gap-4">
                  <button
                    onClick={handleStatusUpdate}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
                  >
                    Post
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-4 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 w-full"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Sidebar>
    </section>
  );
};

export default Index;