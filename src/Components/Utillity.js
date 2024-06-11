import React, {useState} from 'react'
import jsPDF from 'jspdf'
import './Utility.css'

export default function Utility() {
    const [count, setCount] = useState("Enter your text here")
    const handle = (event)=>{
        console.log("changed");
        setCount(event.target.value);
    }
    const capital = ()=>{
        let newText =  count.toUpperCase();
        setCount(newText)
    }
    const small = ()=>{
        let newText = count.toLowerCase();
        setCount(newText)
    }
    const clr = ()=>{
        setCount("")
    } 
    const copy = ()=>{
        var text = document.getElementById("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const generatePDF = () => {
      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, count)
      doc.addFont('helvetica', 'normal')     
      
      doc.save(count[0]+'.pdf')
    }
    return (
      <div className="util">
        <h1>Playground: </h1>
        <div className="mb">
          <textarea className="form-control" value={count} id="Textarea" onChange={handle} rows="12"></textarea>
        </div>
        <div className="mb">
        <button className="btn" type="submit" onClick={capital}>
          Convert to Upper Case
        </button>
        <button className="btn" type="submit" onClick={small}>
          Convert to Lower Case
        </button>
        <button className="btn" type="submit" onClick={clr}>
          Clear
        </button>
        <button className="btn" type="submit" onClick={copy}>
          Copy to clipboard
        </button>
        <button className="btn" onClick={generatePDF} type="primary">
          Convert to PDF
        </button>
        <div className="summary">
          <h2>Text Summary</h2>
          <p>
            {count.split(" ").filter((element)=>{return element.length!==0}).length} words and {count.length} characters.
          </p>
        </div>
        </div>
      </div>
    );
}
