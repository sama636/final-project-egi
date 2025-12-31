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
            nagivate('/login');
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
export default RegisterAPI;