import React, { useRef, useEffect, useState } from "react";
import Popup from "./popup";
import axios from "axios";
import Button from "./bottom";

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

interface PostCardProps {
  post: Post;
  onImageUpload: (image: string) => void;
  onCommentAdd: (postId: number, comment: Comment) => void;
  onLike: (postId: number) => void;
  onUpdatePost: (updatedPost: Post) => void;
}

const PostCard = ({
  post,
  onImageUpload,
  onCommentAdd,
  onLike,
  onUpdatePost,
}: PostCardProps) => {
  const { id, user, avatar, status, image, comments, likes } = post;
  const [commentInput, setCommentInput] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const optionsMenuRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [editedPost, setEditedPost] = useState<Post>({ ...post });
  const [editedImage, setEditedImage] = useState<string | undefined>(
    post.image
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedImage = reader.result as string;
        setEditedImage(uploadedImage); // Mengupdate state untuk gambar yang diunggah
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() !== "") {
      const newComment: Comment = {
        id: Date.now(),
        user: "Your Name",
        content: commentInput,
      };
      onCommentAdd(id, newComment);
      setCommentInput("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsMenuRef.current &&
        !optionsMenuRef.current.contains(event.target as Node)
      ) {
        setShowOptionsMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionsMenuClick = () => {
    setShowOptionsMenu(!showOptionsMenu);
  };

  const handleEditPost = () => {
    setShowPopup(true); // Tampilkan pop-up saat "Edit Postingan" diklik
    setEditedPost({ ...post }); // Set data yang diedit dengan data dari post yang ada
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleDeletePost = () => {
    // Lakukan logika penghapusan postingan di sini
    // Setelah berhasil, Anda bisa menutup pop-up konfirmasi dengan setShowConfirmation(false);
    // Misalnya: onDeletePost(id);
    setShowConfirmation(false);
  };

  const handleEditData = () => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`,
        editedPost
      )
      .then((response) => {
        console.log("Data updated:", response.data);
        setShowPopup(false); // Menyembunyikan pop-up setelah berhasil menyimpan perubahan
        // Jika ingin memperbarui state post dengan data yang sudah diubah, bisa dilakukan dengan
        onUpdatePost({ ...post, ...editedPost });
      })

      .catch((error) => {
        console.error("Failed to update data:", error);
        // Tambahkan logika penanganan kesalahan di sini
      });
  };

  return (
    <div key={id} className="bg-white w-96 p-8 rounded-lg shadow-md relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="Profile"
            className="h-8 w-8 rounded-full mr-2"
          />
          <div className="">
            <h3 className="font-semibold">{user}</h3>
          </div>
        </div>
        <div className="" ref={optionsMenuRef}>
          <i
            className="fa-solid fa-ellipsis cursor-pointer"
            onClick={handleOptionsMenuClick}
          ></i>
          {showOptionsMenu && (
            <div className="absolute top-0 right-0 mt-8 mr-2 bg-white border rounded-md shadow-md z-10">
              <ul>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setShowPopup1(true)}
                >
                  Detail Postingan
                </li>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleEditPost}
                >
                  Edit Postingan
                </li>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setShowConfirmation(true)}
                >
                  Hapus Postingan
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: "calc(100% - 2.5rem)" }}>
        <p className="w-full break-words">{status}</p>
        {/* Input untuk upload gambar */}
        <input
          type="file"
          id={`imageUpload_${id}`}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        {/* Tampilkan gambar jika ada */}
        {image && (
          <div className="mt-2">
            <img src={image} alt="Uploaded" className="w-full rounded-md" />
          </div>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-start">
            <button onClick={() => onLike(id)}>{likes} Likes</button>
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
        {/* Bagian pop-up untuk edit postingan */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-96 p-8 rounded-lg shadow-md">
              <form onSubmit={handleEditData}>
                <input
                  type="text"
                  name="status"
                  value={editedPost.status}
                  onChange={handleFormChange}
                  className="w-full h-full border bg-gray-200 p-2 rounded-sm resize-none mb-4"
                />
                {/* Input untuk unggah gambar */}
                <input
                  type="file"
                  id={`imageUpload_${id}`}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                {/* Tampilkan gambar yang diunggah jika ada */}
                {editedImage && (
                  <div className="mt-2">
                    <img
                      src={editedImage}
                      alt="Uploaded"
                      className="w-full rounded-md"
                    />
                  </div>
                )}
                {/* Tombol untuk memilih gambar */}
                <label
                  htmlFor={`imageUpload_${id}`}
                  className="cursor-pointer bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 w-full h-full flex items-center justify-center"
                >
                  <i className="fa-regular fa-square-plus"></i> Upload Gambar
                </label>
                {/* Bagian lain dari form */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-4 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 w-full"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Popup
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <div>
            <p>Apakah anda yakin menghapus postingan ini?</p>
            <p>
              Ketika anda tekan hapus maka postingan ini akan hilang dari
              beranda anda.
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleDeletePost}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Hapus
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Batal
              </button>
            </div>
          </div>
        </Popup>
        <Popup isOpen={showPopup1} onClose={() => setShowPopup1(false)}>
          <div className="bg-white p-8 rounded-lg ">
            {/* Konten untuk detail postingan */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">{status}</h2>
                  {image && (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-72  h-full rounded-md mt-2"
                    />
                  )}
                </div>
              </div>

              {/* Kolom Kanan untuk Menampilkan Komentar */}
              <div>
                <div>
                  <div className="flex items-center">
                    <img
                      src={avatar}
                      alt="Profile"
                      className="h-8 w-8 rounded-full mr-2 "
                    />
                    <div className="">
                      <h3 className="font-semibold">{user}</h3>
                    </div>
                  </div>
                  <i className="fa-regular fa-heart w-8"></i>Like
                  <i className="fa-regular fa-comment-dots w-8 mt-2 ml-5"></i>
                  Komentar
                  {comments.map((comment) => (
                    <div key={comment.id} className="mb-2">
                      <span className="font-semibold">{comment.user}</span>:{" "}
                      {comment.content}
                    </div>
                  ))}
                  <div className="flex mt-8 ">
                    <img
                      src={avatar}
                      alt="Profile"
                      className="h-8 w-8 rounded-full mr-2 "
                    />

                    <input
                      type="text"
                      placeholder="Tulis komentar..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      className="border border-gray-300 p-1 rounded-md"
                    />
                    <button onClick={handleCommentSubmit} className="ml-2">
                      <i className="fa-solid fa-paper-plane"></i> Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default PostCard;
