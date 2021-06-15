import React from 'react'
import './test.css'
import Nav from './components/Nav'

const Test = () => {
    return (
        <div>
            <Nav/>
            <div className='container'>
                <div className='content-item'>
                    <img src='./images/1.jpg'/>
                </div>
                <div className='content-item'>
                    <img src="./images/2.jpg"/>
                </div>
                
            </div>
        </div>
    )
}

export default Test
