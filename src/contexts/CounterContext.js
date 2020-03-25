import React, { createContext, useReducer, useEffect } from 'react'
import {CounterReducer} from '../reducers/CounterReducer'

export const CounterContext = createContext()

const CounterContextProvider = (props) => {
    // the 3rd argument passed to useReducer is the default value, the 2nd value is used if no such argument
    // is used. 
    const [counter, dispatch] = useReducer(CounterReducer, 0, () => {
        const localData = localStorage.getItem('counter')
        return localData ? Number(localData) : 0
    })

    useEffect(() => {
        localStorage.setItem('counter', counter)
    }, [counter])

    return (
        <CounterContext.Provider value={{counter, dispatch}}>
            { props.children }
        </CounterContext.Provider>
    )
}

export default CounterContextProvider
