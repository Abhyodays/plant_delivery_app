import { useEffect, useState } from "react"
import { Plant } from "../types/Plant"

const useFetchPlant = (id: string) => {
    const [plant, setPlant] = useState<Plant>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPlant = async () => {
        setError(null);
        setLoading(true);
        try {
            const res = await fetch(`http://10.0.2.2:3000/${id}`);
            if (!res.ok) {
                throw new Error("Network response was not ok.");
            }
            const data = await res.json();
            setPlant(data);
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
    }, [id])
    return { plant, loading, error }
}

export default useFetchPlant;