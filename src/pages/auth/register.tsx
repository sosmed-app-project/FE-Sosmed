import Gambar1 from "../../assets/Gambar1.png";

const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-200 justify-center items-center min-h-screen">
      {/* Form Register */}
      <form className="w-4/5 p-10 md:ml-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
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
