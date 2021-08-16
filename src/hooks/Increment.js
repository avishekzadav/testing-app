import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(1)
    //count--> variable name
    //setCount-->function which control the variable count value
    //useStste(1)-->here initial value of variable count is one
    //[]-->array destracturing

    // function increase(){
    //     setCount(count+1)
    // }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click to increase</button>
            {count > 0 &&
                <button onClick={() => setCount(count - 1)}>Click to Decrease</button>
            }
        </>
    )
}

export default Increment
