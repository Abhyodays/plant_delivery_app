import { useEffect, useState } from "react"
import { Plant } from "../types/Plant"
import { Credential } from "../types/Credential";
import { useDispatch } from "react-redux";
import { SAVE_USER_REQUEST } from "../redux/user/user.type";
import { saveUser } from "../redux/user/user.action";
import { User } from "../types/User";

const useUserData = (url: string) => {
    const [data, setData] = useState<User | null>();
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();

    async function login(credential: Credential) {
        try {
            console.log("credential:", credential)
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(credential),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login Failed");
            }
            const data = await response.json();
            console.log('DATA in hook:', data)
            setData(data.user)
            setError(null)
            dispatch(saveUser(data.user));
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Login Failed");
        }
    }

    return { data, error, login }
}

export default useUserData;