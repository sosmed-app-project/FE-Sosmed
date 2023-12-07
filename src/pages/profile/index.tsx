import { useState } from "react";
import Button from "@/components/bottom";
import Navbar from "@/components/navbar";
import { useNavigate } from "react-router-dom";
import Popup from "@/components/popup";


const ProfilePage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/profile-edit");
  };

  const handleDeleteProfile = () => {
    setShowConfirmation(false);
  };

  return (
    <section>
      <Navbar />
      <div className="bg-gray-200 p-16 mt-8">
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
                  onClick={() => setShowConfirmation(true)}
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
      <Popup
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      >
        <div>
          <p>Apakah anda yakin menghapus data profile ini?</p>
          <p>Ketika anda tekan hapus maka data profile ini akan hilang</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleDeleteProfile}
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
    </section>
  );
};

export default ProfilePage;
