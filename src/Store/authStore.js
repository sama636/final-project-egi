import Cookies from "js-cookie";
import { create } from "zustand";

const useAuthStore = create((set) => {
  const authUser = Cookies.get("authData");
  const initialAuth = authUser ? JSON.parse(authUser) : null;

  return {
    authData: initialAuth,

    setAuthData: (value) => {
      if (value) {
        set({ authData: value }); 
        Cookies.set("authData", JSON.stringify(value), { expires: 30 });
      } else {
        set({ authData: null });
        Cookies.remove("authData");
      }
    },
  };
});

export default useAuthStore;
