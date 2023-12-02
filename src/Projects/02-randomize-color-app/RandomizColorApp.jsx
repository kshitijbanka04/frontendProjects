import React from 'react'
import Title from '../Components/Title'

export default function RandomizColorApp() {

    const handleButtonClick = (e) => {
        const body = document.querySelector('body')
        body.style.background = randomColorHex()
        e.target.style.background = randomColorHex()
    }

    function randomColorHex() {
        let letters = "0123456789ABCDEF"
        let color = "#"
        for(let i = 0;i<6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

  return (
    <div className='container text-center'>
        <Title classes="m-auto" text="Randomize Colors" />
        <div className='d-flex justify-content-evenly'>
        <button className='btn btn-danger' onClick={handleButtonClick}>Click me</button>
        <button className='btn btn-success' onClick={handleButtonClick}>Click me</button>
        <button className='btn btn-warning' onClick={handleButtonClick}>Click me</button>
        <button className='btn btn-primary' onClick={handleButtonClick}>Click me</button>
    
        </div>
        </div>
  )
}
