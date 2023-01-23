import { useCallback, useState } from "react";

export const useCounter = () => {
    const [count, setCounter] = useState(0);
    const increment = useCallback(() => setCounter(x => x + 1), []);
    const decrement = useCallback(() => setCounter(x => x - 1), []);
    return { count, increment, decrement};
}