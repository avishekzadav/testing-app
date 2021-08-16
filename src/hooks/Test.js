import React,{useState,useEffect} from 'react'
import Newtest from './Newtest'
const Test = () => {
    const[count,setCount]=useState(0)
    const[value,setValue]=useState(1)
    useEffect(()=>{
    alert('this is effect after page render')
    },[count])
    return (
        <>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count+1)}>Click</button>

            <h2>{value}</h2>
            <button onClick={()=> setValue(value+2)}>Click to increase value</button>
            <hr/>
            <Newtest/>
        </>
    )
}

export default Test
