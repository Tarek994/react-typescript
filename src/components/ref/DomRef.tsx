import { useRef, useEffect } from "react"

export const DomRef = () => {
    const inputRef = useRef(null)

    

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}