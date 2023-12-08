import { useState } from "react";
import Button from "@/components/bottom";
import Gambar1 from "../../assets/Gambar1.png";
import InputLogin from "@/components/input-login";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Data dummy untuk pengujian sementara
    const dummyResponse = {
      data: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTM4ODY3MzUsInVzZXJJZCI6Im9SNGJteDlSSHUzUjhhIn0.R2p7Vils0rZZbS-9gEbayncyxvUEATnav0i6vPRCIz0",
        username: "julius@gmail.com",
      },
    };

    const token = dummyResponse?.data?.token;
    const name = dummyResponse?.data?.username;

    // Simulasi respons setelah berhasil login
    Swal.fire({
      icon: "success",
      title: "Success",
      text: `Welcome to Sosial Hub, ${name}`,
      confirmButtonText: "OK",
    }).then((response) => {
      if (response.isConfirmed) {
        Cookies.set("token", token);
        Cookies.set("name", name);
        navigate("/home");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-200 justify-center items-center min-h-screen">
      {/* Form Login */}
      <form className="w-4/5 p-10 md:ml-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <InputLogin
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="email"
            icons="https://img.icons8.com/material-outlined/24/user--v1.png"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <InputLogin
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="password"
            icons="https://img.icons8.com/material-outlined/24/lock--v1.png"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button
          label="Login"
          classname="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleLogin}
        />
      </form>
      {/* Gambar */}
      <div className="w-full md:w-1/2 p-10">
        <img
          src={Gambar1}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default login;







// import { useState } from "react";
// import Button from "@/components/bottom";
// import Gambar1 from "../../assets/Gambar1.png";
// import InputLogin from "@/components/input-login";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import axios from "axios";
// import Swal from "sweetalert2";

// const login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "julius@gmail.com", // Diisi secara tetap untuk keperluan pengujian, akan diganti
//     password: "12345", // Diisi secara tetap untuk keperluan pengujian, akan diganti
//   });

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleLogin = (e: any) => {
//     e.preventDefault();
//     axios
//       .post("user", formData)
//       .then((response) => {
//         const token = response?.data?.data?.token;
//         const name = response?.data?.data?.username; // Diasumsikan username dikembalikan
//         console.log("token : ", response?.data?.data?.token);

//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: `Welcome to Sosial Hub, ${name}`,
//           confirmButtonText: "OK",
//         }).then((response) => {
//           if (response.isConfirmed) {
//             Cookies.set("token", token);
//             Cookies.set("name", name);
//             navigate("/home");
//           }
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//         Swal.fire({
//           icon: "error",
//           title: "Failed",
//           text: `Something went wrong : ${error}`,
//           confirmButtonText: "OK",
//         });
//       });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-200 justify-center items-center min-h-screen">
//       {/* Form Login */}
//       <form className="w-4/5 p-10 md:ml-10">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
//         <div className="mb-4">
          
//           <InputLogin
//             id="email"
//             name="email"
//             label="Email"
//             type="email"
//             placeholder="email"
//             icons="https://img.icons8.com/material-outlined/24/user--v1.png"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-6">
          
//           <InputLogin
//             id="password"
//             name="password"
//             label="Password"
//             type="password"
//             placeholder="password"
//             icons="https://img.icons8.com/material-outlined/24/lock--v1.png"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <Button
//           label="Login"
//           classname="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           onClick={handleLogin}
//         />
//       </form>
//       {/* Gambar */}
//       <div className="w-full md:w-1/2 p-10">
//         <img
//           src={Gambar1}
//           alt="Placeholder"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default login;
