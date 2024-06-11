import React, {useState} from 'react'
import './Feedback.css';

export default function Feedback(){
  const [count, setCount] = useState("")
    const handle = (event)=>{
        console.log("changed");
        setCount(event.target.value);
    }
  return (
    <div className='form'>
      <div className="chk">
        <h1>Help Us Improving: </h1>
        <form action="" method="post">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea className="txt" value={count} id="Textarea" onChange={handle} rows="6" placeholder='Feedback/Suggestion'>
            </textarea>
            <button className='btnF' type="submit">Send</button>
        </form>
        </div>
    </div>
  )
}
