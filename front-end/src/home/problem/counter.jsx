import { useEffect, useState } from "react"
import './counter.css';

export default function Counter({ setGoToIndex, invokeCounter, setInvokeCounter, setTimerDone, counter, setCounter }) {

    const [countDown, setCountDown] = useState(0);
    useEffect(() => {
        // if (counter <= 0) {
        //     setGoToIndex(prev => prev + 1);
        // }
        setInvokeCounter(prev => prev + 1);
        setCountDown(counter);
        // setCounter(prev => prev - 1)
    }, [counter])
    return (<><div className="div1">{countDown}</div></>)
}