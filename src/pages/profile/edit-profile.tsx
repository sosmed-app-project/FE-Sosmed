import React, { useState, useEffect } from "react";
import Button from "@/components/bottom";
import Navbar from "@/components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "ARMAN",
    email: "sosial@gmail.com",
    birthdate: "20-05-1997",
    phone: "1231312313131",
    password: "**************",
  });

  const handleSimpan = () => {
   ;
  };

  useEffect(() => {
    // Menggunakan Axios untuk fetching data dari API
    axios.get('https://jsonplaceholder.typicode.com/users/1') // Ganti dengan URL API yang sesuai
      .then(response => {
        const data = response.data;
        // Menetapkan data dari API ke state
        setUserData({
          name: data.name,
          email: data.email,
          birthdate: data.birthdate,
          phone: data.phone,
          password: "**************", // Jangan tampilkan password dari API
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleUpdateProfile = () => {
    

    axios.put('https://jsonplaceholder.typicode.com/users/1', userData) 
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully!',
        });
        navigate("/profile");
      
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update profile!',
        });
      });
  };

  return (
    <section>
      <Navbar />
      <div className="bg-cyan-300 p-16 mt-8 min-h-screen">
        <div className="bg-white p-10 rounded-xl">
          <h1 className="flex justify-center  font-semibold text-3xl">
            Personal Data
          </h1>
          <div className="grid grid-cols-2 gap-4 mt-4 p-4">
            <div className="grid col-1 justify-center">
              <div>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-40 h-40 rounded-full"
                />
                <h1 className="grid justify-center cursor-pointer">
                  Change Picture
                </h1>
              </div>
              <div className="grid justify-center ">
                <Button
                  label="Update Profile"
                  classname="  text-white rounded-md bg-blue-600 py-2 px-2 hover:bg-blue-700 w-32"
                  onClick={handleUpdateProfile}
                />
              </div>
            </div>

            <div className="col-span-1">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="font-semibold mb-2">
                    Nama:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="font-semibold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="birthdate" className="font-semibold mb-2">
                    Tanggal Lahir:
                  </label>
                  <input
                    type="text"
                    id="birthdate"
                    name="birthdate"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    value={userData.birthdate}
                    onChange={(e) =>
                      setUserData({ ...userData, birthdate: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="font-semibold mb-2">
                    Nomor Telepon:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Password" className="font-semibold mb-2">
                    Password:
                  </label>
                  <input
                    type="tel"
                    id="Password"
                    name="Password"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
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
