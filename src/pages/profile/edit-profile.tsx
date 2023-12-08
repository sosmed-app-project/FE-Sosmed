import {zodResolver} from "@hookform/resolvers/zod";
import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { Loader2} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { useNavigate } from "react-router-dom";

import { updateProfile, deleteProfile, ProfileUpdateType, profileUpdateSchema } from "@/utils/apis/user";
import { useToast } from "@/components/ui/use-toast";
import { useToken } from "@/utils/context/token";

const ProfileEdit = () => {
  const { user, changeToken } = useToken();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileUpdateType>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      nama: "",
      email: "",
      tanggal_lahir: "",
      no_handphone: "",
      password: "",
    },
  });

  useEffect(() => {
    form.setValue("nama", user.nama!);
    form.setValue("email", user.email!);
    form.setValue("tanggal_lahir", user.tanggal_lahir!);
    form.setValue("no_handphone", user.no_handphone!);
  }, [user]);

  async function onSubmit(data: ProfileUpdateType) {
    try {
      const result = await updateProfile(data);
      toast({
        description: result.message,
      });
      navigate("/profile");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.message.toString(),
        variant: "destructive",
      });
    }
  }

  async function onDelete() {
    setIsLoading(true);
    try {
      const result = await deleteProfile();
      toast({
        description: result.message,
      });
      changeToken();
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.message.toString(),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <section>
      <Navbar />
      <div className="bg-blue-200 p-16 mt-8 min-h-screen">
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
                <Button className="text-black bg-gray-400 hover:bg-blue-700 hover:text-white"
                   type="submit"
                   disabled={form.formState.isSubmitting || isLoading}
                   aria-disabled={form.formState.isSubmitting || isLoading}
                 >
                   {form.formState.isSubmitting || isLoading ? (
                     <>
                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                       Please wait
                     </>
                   ) : (
                     "Simpan"
                   )}
                   </Button>
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
                    className="border border-gray-300 bg-gray-200 p-2 rounded-md w-full"
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
                    className="border border-gray-300 bg-gray-200 p-2 rounded-md w-full"
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
                    className="border border-gray-300 bg-gray-200 p-2 rounded-md w-full"
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
                    className="border border-gray-300 bg-gray-200 p-2 rounded-md w-full"
                    defaultValue="1231312313131"
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="Password" className="font-semibold mb-2">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="Password"
                    className="border border-gray-300 bg-gray-200 p-2 rounded-md w-full"
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