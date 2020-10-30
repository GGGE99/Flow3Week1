import { useState, useEffect } from 'react'

function Counter(props) {

    const [count, setCount] = useState((Number) (localStorage.getItem("count")) || props.start);

    function addCount() {
        setCount(count + props.increment)
    }
    function subCount() {
        setCount(count - props.increment)
    }

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    return (
        <div>
            <button className="btn btn-default" onClick={subCount}>-</button>
            <button className="btn btn-default" onClick={addCount}>+</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter;