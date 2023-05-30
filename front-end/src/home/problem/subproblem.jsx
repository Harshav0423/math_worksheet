import { useEffect, useState } from 'react';
import './subproblem.css'
export default function SubProblem({ setDisplayResult, goToNextOne, totalResult, booleanArray, displayResultArray, index, isDone, setIsDone }) {

    const [canDisplay, setCanDisplay] = useState(false);
    useEffect(() => {
        //     console.log("from subproblem", totalResult, booleanArray, displayResultArray, index, isDone, setIsDone)
        // console.log("sub problem", index, isDone, goToNextOne)
        booleanArray[isDone] = true;
        // displayResultArray[isDone] = true
        console.log("sub problem line 2",isDone,booleanArray, index);
        // setCanDisplay(true);
    }, [goToNextOne]);
    const [enterValue, setEnterValue] = useState(null);
    // const [displayResult, setDisplayResult] = useState(false);
    // const [canDisplay, setCanDisplay] = useState(false);
    // const [canDisplayDiv, setCanDisplayDiv] = useState(false);



    function validateAnswer(idx) {
        console.log(typeof enterValue, (totalResult[idx] - enterValue) === 0, typeof totalResult[idx]);
        if ((totalResult[idx] - enterValue) === 0) {
            // setDisplayResult(true);
            setCanDisplay(true);
            setIsDone(prev => prev + 1);
        }
    }
    return <div className={booleanArray[index] ? "div3" : "div3 disable"}>
        <label
            htmlFor="ansbyuser"
            title="ansbyuser"
            className="content box my">
            <input type="number" className="name" onChange={(e) => { setEnterValue(parseInt(e.target.value)) }} />
            <button type="button" onClick={() => { validateAnswer(index) }}>tick</button>
        </label>
        <label
            htmlFor="actualans"
            title="actualans"
            className="content box my"
        >
            {/* {console.log(displayResultArray[isDone])} */}
            {canDisplay && <span className="name">{totalResult[index]}</span>}
        </label>
    </div>
}