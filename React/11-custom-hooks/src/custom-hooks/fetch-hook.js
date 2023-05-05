import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, loading, error };

}