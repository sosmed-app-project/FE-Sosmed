import Gambar1 from "../../assets/Gambar1.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import InputRegister from "@/components/input-register";
import Button from "@/components/bottom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    no_handphone: "",
    tanggal_lahir: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      username: "JohnDoe",
      no_handphone: "08123456789",
      tanggal_lahir: "01/01/1990",
      email: "johndoe@example.com",
      password: "password123",
    });
  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("no_handphone", formData.no_handphone);
    formDataToSend.append("birthday", formData.tanggal_lahir);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
   

    axios
      // .post("users", formDataToSend, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      .post("https://jsonplaceholder.typicode.com/users", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log("hasil: ", response.data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Selamat Akun anda berhasil dibuat! Silahkan Login`,
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.response);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-cyan-300 justify-center items-center min-h-screen">
      {/* Form Register */}
      <form className="w-4/5 p-10 md:ml-10" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <div className="mb-4">
          <InputRegister
            id="Username"
            name="username"
            label="Username"
            type="text"
            placeholder="Masukkan Username"
            icons="https://img.icons8.com/material-outlined/24/user--v1.png"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <InputRegister
            id="phone_number"
            name="no_handphone"
            label="No. Handphone"
            type="text"
            placeholder="Masukkan No HP"
            icons="https://img.icons8.com/material-outlined/24/phone--v1.png"
            value={formData.no_handphone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <InputRegister
            id="birthday"
            name="tanggal_lahir"
            label="Tempat & tanggal lahir"
            type="text"
            placeholder="Masukkan Tempat & tanggal lahir"
            icons="https://img.icons8.com/material-outlined/24/birthday--v1.png"
            value={formData.tanggal_lahir}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <InputRegister
            id="Email"
            name="email"
            label="Email"
            type="email"
            placeholder="Masukkan Email"
            icons="https://img.icons8.com/material-outlined/24/mail--v1.png"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <InputRegister
            id="Password"
            name="password"
            label="Input Password"
            type="password"
            placeholder="Masukkan Password"
            icons="https://img.icons8.com/material-outlined/24/lock--v1.png"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button
        label="Register"
        classname="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
        
        />
        
      </form>
      {/* Gambar */}
      <div className="w-full md:w-1/2 p-10">
        {/* Placeholder gambar */}
        <img
          src={Gambar1}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
