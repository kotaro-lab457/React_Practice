import React, { useState, useMemo } from 'react'

const Memo = () => {
    console.log("Render UseState")
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const twice = count => {
        let i = 0;
        while (i < 100000000) i++;
        return count * 2;
    }

    const Counter = useMemo(() => {
        console.log("Render Count")
        const twiceCount = twice(count2)

        return (
            <p>Increment Counter : {count2},{twiceCount}</p>
        )
    },[count2])
    // 第２引数に　count2を渡してるため、count2だけ更新された時に、再レンダリングされる（メモ化）
    // 値の不要（count2）な再計算をスキップできる。

    return (
        <div>
            <h3>---Memo---</h3>
            <h3>インクリメント count1 </h3>
            <p>Increment Counter : {count1}</p>
            <button onClick={() => setCount1(count1 + 1)} >Increment count1</button>

            <h3>インクリメント count2 </h3>
            {Counter}
            <button onClick={() => setCount2(count2 + 1)} >Increment count2</button>
        </div>
    )
}

export default Memo