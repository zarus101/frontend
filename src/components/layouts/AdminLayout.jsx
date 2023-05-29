import React from "react";
import { Sidebar } from "../../admin/Sidebar";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/reducer/auth/authSlice";
import NotAuthorized from "../commons/NotAuthorized";

export const AdminLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return (
      <>
        <div className="flex justify-between">
          <Sidebar />
          <main className="w-3/4 p-8">{children}</main>
        </div>
      </>
    );
  }
  return <NotAuthorized/>;
};
