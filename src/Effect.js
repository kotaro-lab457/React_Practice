import React, { useEffect, useState } from 'react'


// データ取得、　購読の設定、　DOMのp手動での変更　＝　副作用

const Effect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const time = setInterval(() => {
            setCount( Count => Count + 1)
        },1000)

        return () => clearInterval(time)
    },[])
    return (
        <div>
            <h2>Effect</h2>
            <p>🕐 {count} times</p>
            <button onClick={() => setCount(count * 0)}>
                Reset
            </button>
        </div>
    )
}

export default Effect