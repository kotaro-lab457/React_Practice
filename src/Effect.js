import React, { useEffect, useState } from 'react'


// データ取得、　購読の設定、　DOMのp手動での変更　＝　副作用

const RealTime = date => 
`${date.getFullYear()}/${date.getMonth()+ 1}/${date.getDate()} 
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const Effect = () => {
    const [count, setCount] = useState(()=> RealTime(new Date))
    // JSの組み込み型関数 => new Date
    // ES6から使えるようになった記法　=> ${}内に変数や式が入れられる、文字列として扱える
    useEffect(() => {
        const time = setInterval(() => {
            setCount(RealTime(new Date));
        },[setCount])
        
        return () => clearInterval(time)
    },[])
    return (
        <div>
            <p style={{ textAlign:'center' }}>🕐 {count} Times 🕐</p>
        </div>
    )
}

export default Effect