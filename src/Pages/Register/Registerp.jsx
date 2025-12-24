import React from "react";
import { CiLogout, CiUser } from "react-icons/ci";
import { Link } from "react-router";
import useAuthStore from "../../Store/authStore";

export default function Registerp() {
  const { authData } = useAuthStore();
  return (
    <div>
      <Link to={"/Register"}>
        {authData ? (
          <CiUser className="fw-bold" />
        ) : (
          <CiLogout className="fw-bold" />
        )}
      </Link>
    </div>
  );
}
