import React, { useState } from 'react'
import './Button.css'
const Buttons = () => {
    const [first, setfirst] = useState(false)
    const warnMsg=()=>{
        let w=document.querySelector('.w')

        w.classList.add('red-btn')
        alert('slm')
    }
    const changeText=()=>{
        let s=document.querySelector('.slm')
        if(first){
            setfirst(false)

        }else{

            setfirst(true)
        }
    }
    const hint=()=>{
        let h=document.querySelector('.hint')

        h.classList.add('italic')
    }
  return (
    <div className='btns'>
      <button onClick={changeText}>Text</button>
      <button onClick={warnMsg} className='w'>WarnMessage</button>
<div className='h-all'>      <button className='hint' onClick={hint}>Hint</button>
      <p className='hint-text'> text</p></div><br />
      <p className='slm' >{first && 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque officia, vero quisquam amet nisi molestias eius tempora aspernatur repellendus.'}</p>

    </div>
  )
}

export default Buttons
