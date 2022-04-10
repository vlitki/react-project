import { useState } from "react"

//count je pocetno stanje, setCount je funkcija pomocu koje mijenjamo stanje
export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);
    const incrementValue = () => {
        //setCount(count + 1);
        setCount((state) => state + props.increment);
    }

    const decrementValue = () => {
        setCount((state) => state - props.increment )
    }
    
    return (
        <div>
        <button onClick={incrementValue}>+</button>
        <span>{count}</span>
        <button onClick={decrementValue}>-</button>
        </div>
    )
}