import React from 'react'
import ed from './edit.png'
import './Desc.css'
// const s = ["Get ", "Play ","Take "];
// var i = -1;
function Desc() {
  let hp = "Get Play Take";
  let k=0;
  setInterval(myfuncHead,300);
  let st=" ";
  function myfuncHead(){
      if(k<hp.length){
        st = st + hp[k];
        document.getElementById("here").innerHTML = st;
        k=k+1;
      }
      else{
        k=0;
        st=" ";
      }
    }
  return (
    <div className='desc'>
        <img src={ed} alt="Loading"/>
        <div className="text">
            <h1>Multiple text utilities</h1>
            <h3>at a single stop.</h3>
            <h2 id="here"></h2>
        </div>
    </div>
  )
}

export default Desc