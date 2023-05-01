import React from 'react'
import { BsLayoutTextWindowReverse } from "react-icons/bs";

const Footer = () => {
  return (
    <Footer className='bg-black'>
        <div>
            <div className='flex-col'>
                <BsLayoutTextWindowReverse className='w-10 h-10 bg-white'/>
                <p>Stay In Touch</p>
            </div>
        </div>
    </Footer>
  )
}

export default Footer