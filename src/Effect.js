import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
        console.log(count)
    })
    return (
        <div>
            <h2>Effect</h2>
            <p>click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Effect