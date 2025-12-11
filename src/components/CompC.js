import React, { useContext } from 'react'
import { Context, MyContext } from '../context/MyContext'

const CompC = () => {
    const {nameData,setNameData} = useContext(Context)

    const changeC = ()=>{
        setNameData({
            ...nameData,
            fname:nameData.fname==='Subhadeep'?'Gourav':'Subhadeep'
        })
    }
  return (
    <div>
        <h1>The Name is:</h1>
        <div>
            <span><p>{nameData.fname} {nameData.lname}</p></span>
            
        </div>
        <button onClick={()=>changeC()}>Toggle Name</button>
    </div>
  )
}

export default CompC