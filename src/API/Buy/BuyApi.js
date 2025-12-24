import { ENDPOINTS } from "./config";

const BuyAPIWithAuth = async (setLoading, setError, setProperties, navigate) => {
  setLoading(true);
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); 
      return;
    }

    const response = await fetch(ENDPOINTS.BUY_PROPERTIES, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `zm${token}`, 
      },
    });

    if (response.status === 401) {
      localStorage.removeItem("token"); 
      navigate("/login");
      return;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (Array.isArray(result)) {
      setProperties(result);
    } else if (result.data && Array.isArray(result.data)) {
      setProperties(result.data);
    } else {
      setError("Unexpected response format from API.");
      console.error("Unexpected API response:", result);
    }

    setError(null);
  } catch (error) {
    setError("An error occurred while fetching properties.");
    console.error("BuyAPIWithAuth error:", error);
  } finally {
    setLoading(false);
  }
};

export default BuyAPIWithAuth;
