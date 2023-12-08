import { useState } from "react";
import Button from "@/components/bottom";
import Navbar from "@/components/navbar";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";


const ProfilePage = () => {
 

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/profile-edit");
  };

  const handleDeleteProfile = () => {
    // Tampilkan SweetAlert untuk konfirmasi penghapusan
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Ketika Anda tekan 'Ya', data profil ini akan dihapus.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulasi penghapusan data menggunakan API dummy
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
          .then(() => {
            Swal.fire({
              title: "Success",
              text: "Profil berhasil dihapus.",
              icon: "success",
            });
           
           
          })
          .catch(() => {
            Swal.fire({
              title: "Error",
              text: "Gagal menghapus profil.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <section>
      <Navbar />
      <div className="bg-cyan-300 p-16 mt-8">
        <div className="bg-white p-10 rounded-xl">
          <h1 className="flex justify-center mt-10 font-semibold text-3xl">
            Personal Data
          </h1>
          <div className="grid grid-cols-2 gap-4 mt-8 p-4">
            {/* Bagian kiri: Foto profil dan tombol edit */}
            <div className="grid col-1 justify-center ">
              <div>
                {/* Foto profil */}
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-40 h-40 rounded-full"
                />
              </div>

              {/* Tombol edit profil */}
              <div className="flex justify-center gap-4">
                <Button
                  label="Edit Profile"
                  classname="  text-white rounded-md bg-blue-600 py-2 px-2 hover:bg-blue-700"
                  onClick={handleEdit}
                />
                <Button
                  label="Delete Profile"
                  classname="   text-white rounded-md bg-blue-600 py-2 px-2 hover:bg-blue-700"
                  onClick={handleDeleteProfile}
                />
              </div>
            </div>

            {/* Bagian kanan: Form informasi profil */}
            <div className="col-span-1">
              {/* Nama */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Nama:</h3>
                <div className="rounded bg-gray-100 p-2">ARMAN</div>
              </div>

              {/* Tanggal Lahir */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Tanggal Lahir:</h3>
                <div className="rounded bg-gray-100 p-2">20-05-1997</div>
              </div>

              {/* Nomor Telepon */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Nomor Telepon:</h3>
                <div className="w-full rounded bg-gray-100 p-2">
                  1231312313131
                </div>
              </div>

                 {/* Email */}
                 <div className="mb-4">
                <h3 className="font-semibold mb-2">Email:</h3>
                <div className="rounded bg-gray-100 p-2">Sosial@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProfilePage;
