import React, { useEffect, useState } from 'react'

const name = 'Online-Code-Editor'

export default function useLocalStorage(key, initialValue) {
    const myKey = name + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(myKey)
        if (jsonValue !== null) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(myKey, JSON.stringify(value))
    }, [myKey, value])


    return [value, setValue]
}
