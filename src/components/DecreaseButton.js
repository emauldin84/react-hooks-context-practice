import React, { useContext } from 'react'

import { CounterContext } from '../contexts/CounterContext'

const DecreaseButton = () => {
    const { dispatch } = useContext(CounterContext)

    const handleClick = () => {
        dispatch({type: 'DECREASE_COUNTER', /*add payload here when needed*/})
    }

    return (
        <div className='button-container'>
            <button onClick={handleClick}>-</button>
        </div>
    )
}

export default DecreaseButton