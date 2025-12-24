const TEAM_URL = "https://luxury-real-estate-tawny.vercel.app/team-member";

const TeamAPI = async (setLoading, setError, setTeamMembers, navigate) => {
  setLoading(true);
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); 
      return;
    }

    const response = await fetch(TEAM_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`zm${token}`,
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
      setTeamMembers(result);
    } else if (result.data && Array.isArray(result.data)) {
      setTeamMembers(result.data);
    } else {
      setError("Unexpected response format from API.");
      console.error("Unexpected API response:", result);
    }

    setError(null);
  } catch (error) {
    setError("An error occurred while fetching team members.");
    console.error("TeamAPI error:", error);
  } finally {
    setLoading(false);
  }
};

export default TeamAPI;
