const URL = "https://luxury-real-estate-tawny.vercel.app/login";

const LoginAPI = async (setloading, setError, data, nagivate) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
                        localStorage.setItem("token", result.token)

            setloading(false);
            nagivate('/');
        } else {
            if (response.status == 400) {
                setError(result.message)
                setloading(false);
                console.log(result.message);
            }
            else if (response.status == 500) {
                console.log(result.message);
                setError(result.message)
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)
        console.log(error);

    }
}
export default LoginAPI;