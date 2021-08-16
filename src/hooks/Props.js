import React from 'react'

const Props = (props) => {
    const{language,technology}=props
    return (
        <>
           <h2>It is a{language} react class. it is mainly for {technology}web</h2> 
        </>
    )
}

export default Props