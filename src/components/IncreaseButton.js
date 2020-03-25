import React, { useContext } from 'react'

import { CounterContext } from '../contexts/CounterContext'

const IncreaseButton = () => {
    const { dispatch } = useContext( CounterContext )
    const handleClick = () => {
        dispatch({type: 'INCREASE_COUNTER', /*add payload here when needed*/})
    }
    return (
        <div className='button-container'>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default IncreaseButton