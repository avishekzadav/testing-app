import React,{useContext} from 'react'
import {GlobalContext} from './GlobalContext'

const ComC = () => {
    const js=useContext(GlobalContext)
    return (
        <>
        <h2>the javascript framework{js}</h2>    
        </>
    )
}

export default ComC
