import { useState, useRef, useEffect } from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef(null)


    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>MutableRef</div>
    )
}
