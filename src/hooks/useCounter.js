import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
    const increament = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log(count)
    }, [count]);

    return {
        count,
        increament,
    }
};
export default useCounter;