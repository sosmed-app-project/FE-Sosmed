import React from "react";
import Button from "@/components/bottom";
import Navbar from "@/components/navbar";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const handleSimpan = () => {
    
    navigate("/profile");
  };
  return (
    <section>
      <Navbar />
      <div className="bg-gray-200 p-16 mt-8 min-h-screen">
        <div className="bg-white p-10 rounded-xl">
          <h1 className="flex justify-center  font-semibold text-3xl">
            Personal Data
          </h1>
          <div className="grid grid-cols-2 gap-4 mt-4 p-4">
            {/* Bagian kiri: Foto profil dan tombol edit */}
            <div className="grid col-1 justify-center">
              <div>
                {/* Foto profil */}
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-40 h-40 rounded-full"
                />
                <h1 className="grid justify-center cursor-pointer">
                  Change Picture
                </h1>
              </div>
              {/* Tombol Simpan perubahan */}
              <div className="grid justify-center ">
                <Button
                  label="Simpan"
                  classname="  text-white rounded-md bg-blue-600 py-2 px-2 hover:bg-blue-700 w-20"
                  onClick={handleSimpan}
                />
              </div>
            </div>

            {/* Bagian kanan: Form informasi profil */}
            <div className="col-span-1">
              {/* Nama */}
              <form>
                {/* Nama */}
                <div className="mb-4">
                  <label htmlFor="name" className="font-semibold mb-2">
                    Nama:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    defaultValue="ARMAN"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="font-semibold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    defaultValue="Sosial@gmail.com"
                  />
                </div>

                {/* Tanggal Lahir */}
                <div className="mb-4">
                  <label htmlFor="birthdate" className="font-semibold mb-2">
                    Tanggal Lahir:
                  </label>
                  <input
                    type="text"
                    id="birthdate"
                    name="birthdate"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    defaultValue="20-05-1997"
                  />
                </div>

                {/* Nomor Telepon */}
                <div className="mb-4">
                  <label htmlFor="phone" className="font-semibold mb-2">
                    Nomor Telepon:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    defaultValue="1231312313131"
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="Password" className="font-semibold mb-2">
                    Password:
                  </label>
                  <input
                    type="tel"
                    id="Password"
                    name="Password"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    defaultValue="**************"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEdit;
