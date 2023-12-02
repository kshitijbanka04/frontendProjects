import React, { useState } from 'react'
import Title from '../Components/Title'

export default function EsignatureApp() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    }; 

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: "0.35rem 0"

    }
    document.body.style.background = "#eee"
  return (
    <div className='container text-center'>
        <Title classes={"title"} text={!name? "Your Signature": name}/>
        <Title classes={"main-title mb-3"} text={!date? "DoB" : date}/>
        <p className='mb-2'>
        I solemnly swear that I am up to no good as I embark on a mischievous journey through the magical realm. With the Marauder's Map in hand, I navigate the hidden passages of Hogwarts, guided by the shadows of the Whomping Willow's dance. Cloaked in the invisibility charm, I tread the enchanted corridors, unraveling secrets and weaving tales of magic. The castle's nooks and crannies become my playground as I embrace the thrill of discovery. Each step echoes with the legacy of the Marauders, and as I venture forth, mischief unfolds like a spellbinding narrative, forever etched in the hallowed halls of Hogwarts.
        </p>
        <footer className='d-flex' style={{justifyContent: "space-around", position: "relative", top: "40vh"}}>
            <input type="Date" value={date} style={inputStyle} onChange={handleDateChange}/>
            <input type="Name" placeholder="Signature" value={name} style={inputStyle} onChange={handleNameChange}/>
        </footer>
    </div>
  )
}
