import React,{useState,useEffect} from 'react'


const Newtest = () => {
    const[data,setData]=useState('comments')
    useEffect(()=>{
        console.log('state change')
    },[data])
    return (
        <>
        <div>
            <button onClick={()=>setData('posts')}>Post</button>
            <button onClick={()=>setData('comments')}>comments</button>
            <button onClick={()=>setData('users')}>user</button>
        </div>
        <h3>{data}</h3>
        </>
    )
}

export default Newtest
