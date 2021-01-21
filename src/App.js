import React, { useState } from 'react'
import Effect from './Effect'
import Reducer from './Reducer'
import Memo from './Memo'
import Ref from './Ref'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Effect />
            <h1>React</h1>
            <p>クリック回数：{count}回</p>
            <button onClick={() => setCount(count + 1)}>クリック</button>
            <Reducer /> 
            <Memo />
            <Ref />       
        </div>
    )
}

export default App