const EDIT_URL = "https://luxury-real-estate-tawny.vercel.app/profile";

const EditAPI = async (setLoading, setError, data, navigate) => {
  setLoading(true);

  try {
    const token = localStorage.getItem("token");

    const response = await fetch(EDIT_URL, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `zm ${token}`, 
      },
      body: JSON.stringify(data), 
    });

    const result = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(result.user));

      setLoading(false);
      navigate("/"); 
    } else {
      if (response.status === 400) {
        setError(result.message);
      } else if (response.status === 500) {
        setError(result.message);
      }
      setLoading(false);
    }
  } catch (error) {
    setError("An error occurred");
    setLoading(false);
  }
};

export default EditAPI;
