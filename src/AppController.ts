import React, { SetStateAction,useState } from "react"


export const AppController = ():AppState => {
    const [count, setCount] = useState(0);

    const Reset = () => {
        setCount(0);
    }
    return {
        state: count,
        setState: setCount,
        reset: Reset
    }
}


interface AppState {
    state: number,
    setState: React.Dispatch<SetStateAction<number>>
    reset: React.MouseEventHandler<HTMLButtonElement>
}

