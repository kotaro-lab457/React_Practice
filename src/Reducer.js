import React, { useReducer } from 'react'
// 複数の値（変数）にまたがって更新・書き換える => useReducer


const initialState = { count: 0 } //初期値

const Counter = (state, action) => {　//stateを更新するための関数（reducer）
    switch (action.type) {
        case 'Plus': return { count: state.count + 1 };
        case 'Minus': return { count: state.count - 1 };
        case 'Reset' : return initialState
        default:
            throw new Error();
    }
}


const Reducer = () => {
    const [state, dispatch] = useReducer(Counter, initialState)
    console.log(state.count)
    return (
        <div>
            <h3>---Reducer---</h3>
            {state.count} 回数
            <button onClick={() => dispatch({ type: 'Plus' })}>たす</button>
            <button onClick={() => dispatch({ type: 'Minus' })}>ひく</button>
            <button onClick={() => dispatch({ type: 'Reset' })}>リセット</button>            
        </div>　// count(state)の値をdispatchとペアにして返している
    )
}

export default Reducer