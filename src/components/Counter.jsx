import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{border: '2px solid black', padding: '20px', margin: '20px'}}>
            <h3>Component 1: Counter</h3>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;