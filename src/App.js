import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [outputValue, setOutputValue] = useState("");

  //Concatinate entered numbers
  const concatinateNumbers=(item)=>{
    var newValue = outputValue + item;
    const lastCharacter=Number(newValue[(newValue.length)-1])
    const secondLastCharacter=Number(newValue[(newValue.length)-2])
    console.log(lastCharacter,secondLastCharacter)
    console.log((newValue[(newValue.length)-6]))
    //If last and second last characters are NaN, It will remove the second last character.
    if(((newValue.length)===2 && ((((newValue[(newValue.length)-2]) === '*')) || ((newValue[(newValue.length)-2]) === '/')))){ //To check if user start from wrong character
      //console.log("Oh Error")
      const secondLast= newValue.substring(0, newValue.length - 2) + newValue.substring(newValue.length - 1);
      newValue= secondLast
    }
    if(isNaN(lastCharacter) && isNaN(secondLastCharacter)){
      //console.log("Error")
      const secondLast= newValue.substring(0, newValue.length - 2) + newValue.substring(newValue.length - 1);
      newValue= secondLast
    }
    
    if((newValue.length)>20){
      newValue= "Error"
    }
    else if((newValue.length)>14){
      //console.log("What an error.")
      document.getElementById("outPut").style.fontSize = "25px";
    }
    else if((newValue.length)>12){
      document.getElementById("outPut").style.fontSize = "35px";
    }
    else if((newValue.length)>10){
      document.getElementById("outPut").style.fontSize = "40px";
    }
    else{
      document.getElementById("outPut").style.fontSize = "50px";
    }
    setOutputValue(newValue)
  }

  //Display the output
  const displayOutput=(item)=>{
    const lastCharacter=Number(item[(item.length)-1])
    if(!isNaN(lastCharacter)){
      const output= eval(item);
      const newOutput=Number(output.toFixed(3))
      //console.log(item.length)
      setOutputValue(newOutput)
    }
    else{
      setOutputValue('Error')
    }
  }

  //For backscape
  const backScape=()=>{
    console.log(outputValue)
    var string =outputValue.substring(0,outputValue.length-1);
    // console.log(string)
    setOutputValue(string)
  }

  return (
    <div className="Calculator">
      <br></br>
      <div className="outputScreen">
          <h1 id='outPut'>{outputValue}</h1>
          {/* {console.log(outputValue,typeof(outputValue))} */}
      </div>
      <br></br>
      <div className='keys'>
        <div>
          <button className='clearKey' onClick={()=>setOutputValue("")}><h3>C</h3></button>
          <button className='btn' onClick={()=>backScape()}>⌫</button>
          <button className='symmbols' onClick={()=>concatinateNumbers("/")}><h3>/</h3></button>
        </div>
        <button className='btn' onClick={()=>concatinateNumbers("7")}><h3>7</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("8")}><h3>8</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("9")}><h3>9</h3></button>
        <button className='symmbols' onClick={()=>concatinateNumbers("*")}><h3>X</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("4")}><h3>4</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("5")}><h3>5</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("6")}><h3>6</h3></button>
        <button className='symmbols' onClick={()=>concatinateNumbers("-")}><h3>-</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("1")}><h3>1</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("2")}><h3>2</h3></button>
        <button className='btn' onClick={()=>concatinateNumbers("3")}><h3>3</h3></button>
        <button className='symmbols' onClick={()=>concatinateNumbers("+")}><h3>+</h3></button>
        <div>
          <button className='btn' onClick={()=>concatinateNumbers("0")}><h3>0</h3></button>
          <button className='btn' onClick={()=>concatinateNumbers(".")}><h3>.</h3></button>
          <button className='btn' onClick={()=>concatinateNumbers("*0.01")}><h3>%</h3></button>
          <button className='symmbols' onClick={()=>displayOutput(outputValue)}><h3>=</h3></button>
        </div>
      </div>
    </div>
  );
}

export default App;
