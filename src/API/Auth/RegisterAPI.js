const URL = "https://luxury-real-estate-tawny.vercel.app/register";

const RegisterAPI = async (setloading, setError, data, nagivate) => {
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
            setloading(false);
            nagivate('/');
        } else {
            if (response.status == 400) {
                setError(result.message)
                setloading(false);
            }
            else if (response.status == 500) {
                setError(result.message)
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)

    }
}
export default RegisterAPI;