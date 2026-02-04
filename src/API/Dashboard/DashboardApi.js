const URL = "https://luxury-real-estate-tawny.vercel.app/dashboard";

const DashboardAPI = async (setLoading, setError, setData) => {
  setLoading(true);

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("User is not authenticated. Please login first.");
      setLoading(false);
      return;
    }

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `zm ${token}`,
      },
    });

    const result = await response.json();

    if (response.ok) {
      setData(result);
      setError("");
    } else {
      setError(result.message || "Invalid Token");
    }
  } catch (error) {
    console.error("Dashboard API error:", error);
    setError("An error occurred, please try again later.");
  } finally {
    setLoading(false);
  }
};

export default DashboardAPI;
