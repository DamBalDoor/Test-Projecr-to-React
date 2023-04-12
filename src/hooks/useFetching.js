import {useState} from "react";

export const useFertching = (callback) => {
    const [isLoading, setIsLoadin] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoadin(true)
            await callback(...args)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoadin(false)
        }
    }

    return [fetching, isLoading, error]
}