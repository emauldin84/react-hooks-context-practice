import React, { useContext } from 'react'

import {CounterContext} from '../contexts/CounterContext'

const CounterDisplay = () => {
    const { counter } = useContext(CounterContext)

    return (
        <div className="counter-container">
            {counter}
        </div>
    )
}

export default CounterDisplay