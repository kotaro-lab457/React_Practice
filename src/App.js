import React, { useState } from 'react'
import Effect from './Effect'

const App = () => {
    const [count, setCount] = useState(0)
    const [fruit, setFruit] = useState('apple')

    return (
        <div>
            <h1>React</h1>
            <p>クリック回数：{count}回</p>
            <button onClick={() => setCount(count + 1)}>クリック</button>
            <p>{fruit}</p>
            <button onClick={() => setFruit('banana')} >バナナ</button>
            <button onClick={() => setFruit('grape')} >グレープ</button>
            <Effect />
        </div>
    )
}

export default App