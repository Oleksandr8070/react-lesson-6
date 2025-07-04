import { useDeferredValue, useEffect, useRef, useState } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    const deferredValue = useDeferredValue(value)
    const timeoutRef = useRef(null)
    
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setDebounceValue(deferredValue)
        }, delay)

        return () => clearTimeout(timeoutRef.current)
    },[deferredValue, delay])
    
    return debounceValue
}

export default useDebounce;