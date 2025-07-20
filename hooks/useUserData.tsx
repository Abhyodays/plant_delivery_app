import { useEffect, useState } from "react"
import { Plant } from "../types/Plant"
import { Credential } from "../types/Credential";
import { useDispatch } from "react-redux";
import { SAVE_USER_REQUEST } from "../redux/user/user.type";
import { saveUser } from "../redux/user/user.action";
import { User } from "../types/User";
import { useToast } from "../contexts/ToastContext";
import { ToastType } from "../types";

const useUserData = (url: string) => {
    const [data, setData] = useState<User | null>();
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const { showToast } = useToast();

    async function login(credential: Credential) {
        try {
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
            setData(data.user)
            setError(null)
            dispatch(saveUser(data.user));
        }
        catch (err) {
            setError("Login Failed");
        }
    }
    async function update(user: User) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Update Failed");
            }
            const data = await response.json();
            setData(data.user)
            setError(null)
            dispatch(saveUser(data.user));
        }
        catch (err) {
            console.log(err)
            setError(err instanceof Error ? err.message : "Update Failed");
        }
    }

    async function signup(credential: Credential) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(credential),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                const errorData = await response.json();
                const error = errorData.message || "Signup failed";
                showToast(error, ToastType.ERROR)
            }
            const data = await response.json();
            showToast("Signup successfully", ToastType.SUCCESS)
        } catch (err) {
            showToast("Something went wrong", ToastType.ERROR)
        }
    }
    return { data, error, login, update, signup }
}

export default useUserData;