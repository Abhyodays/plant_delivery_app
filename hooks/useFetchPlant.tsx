import { useEffect, useState } from "react"
import { Plant } from "../types/Plant"

const useFetchPlant = (query: string) => {
    const [data, setData] = useState<Plant | Plant[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPlant = async () => {
        setError(null);
        setLoading(true);
        try {
            const res = await fetch(`http://10.0.2.2:3000/${query}`);
            if (!res.ok) {
                throw new Error("Network response was not ok.");
            }
            const data = await res.json();
            setData(data);
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Network response was not ok.")
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPlant();
    }, [query])
    return { data, loading, error }
}

export default useFetchPlant;