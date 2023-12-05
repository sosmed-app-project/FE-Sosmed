import { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="container grow mx-auto py-4 px-8 flex flex-col">
        {children}
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;