const URL = "https://luxury-real-estate-tawny.vercel.app/contact"; 

const ContactAPI = async (setLoading, setError, setSuccess, data) => {
  setLoading(true);

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("User is not authenticated. Please login first.");
      setLoading(false);
      return;
    }

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `zm${token}`,  
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccess(result.message || "Message sent successfully");
      setError("");
    } else {
      setError(result.message || "Something went wrong");
      setSuccess("");
    }
  } catch (error) {
    console.error("Contact API error:", error);
    setError("An error occurred, please try again later.");
    setSuccess("");
  } finally {
    setLoading(false);
  }
};

export default ContactAPI;
