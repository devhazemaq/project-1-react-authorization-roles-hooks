import React from 'react'

import './style.css'



const GamersForm = ({inputs__array}) => {

  const handleChange = () => {
    console.log("handleChange");
  }

  return (
    <form >
      { inputs__array?.map((input)=> (
        <div key={input?.id}>

          { input?.type !== 'checkbox' ? (
            <>
              <label htmlFor={input?.id} className='labelForRrg'>{input?.label}</label>
              <input
                className='inputForRrg'
                type={input?.type}
                id={input?.id}
                name={input?.name}
                placeholder={input?.placeholder}
                value="sssss"
                onChange={handleChange}
                
              />
              <span className='errorMassge'>*please enter correctly</span><br />
            </>
            
          ) : (
            <>
              <input
                className='checkboxForRrg'
                type={input?.type}
                id={input?.id}
                name={input?.name}
                placeholder={input?.placeholder}
                value='hhhhhhh'
                onChange={handleChange}
                
              />
              <label htmlFor={input?.id} className='checkboxForRrg'>{input?.label}</label>
              <span className='errorMassge2'>*gree for roles</span><br />
            </>
          )

          }
          
        </div>
      ))}
    </form>
  )
};

export default GamersForm;