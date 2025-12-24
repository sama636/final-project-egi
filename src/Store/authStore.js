import Cookies from "js-cookie";
import { create } from "zustand";

const useAuthStore = create((set) => {

  const authUser = Cookies.get("authData");
  let  initialAuth = authUser ? JSON.parse(authUser) : null

  return {
    authData: initialAuth,

    setAuthData: (value) => {
      if (value) {
        let data = JSON.stringify(value)
        set({ authData: data });
        Cookies.set("authData", data, { expires: 30 });
      } else {
        set({ authData: null });
        Cookies.remove("authData");
      }
    },
  };
});


export default useAuthStore;
