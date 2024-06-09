import React from 'react'
import Button from './Button'
const Form = ({requestType, setRequestType}) => {
  return (
    <div className='form'>
      <form onSubmit={(e)=> e.preventDefault()}>
        <Button requestType={requestType} setRequestType={setRequestType} buttonText={"users"}/>
        <Button requestType={requestType} setRequestType={setRequestType} buttonText={"posts"}/>
        <Button requestType={requestType} setRequestType={setRequestType} buttonText={"comments"}/>
      </form>
    </div>
  )
}

export default Form
