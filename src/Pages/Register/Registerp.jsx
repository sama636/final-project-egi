import React from "react";
import { LuLogOut } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuthStore from "../../Store/authStore";

export default function Registerp() {
  const { authData } = useAuthStore();
  


  return (
    <div>
      <Link to={"/login"}>
        {authData ? (
          <IoPerson  className="fw-bold" />
        ) : (
          <LuLogOut   className="fw-bold" />
        )}
      </Link>
    </div>
  );
}
