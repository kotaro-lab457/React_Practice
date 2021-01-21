import React, { useRef, useState } from 'react'

const Ref = () => {
    const inputEl = useRef(null); 
    const [text, setText] = useState("");
    const handleClick = () => {
        setText(inputEl.current.value); 
        // currentプロパティにvalue(引数)が返される
        // また、current内に保持している
    };
    // inputのvalueが更新された物をDOMで表している
    console.log("Render！");
    return (
        <div>
            <h3>---Ref---</h3>
            <p>テキスト : {text}</p>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>set text</button>
        </div>
    );
    // inputもstateで管理しているとinput内が変更される度に、再レンダリングしてしまう
}

export default Ref