
import React,{useState} from 'react'
import style from './Calculator.module.css'
const Calculator = () => {
  //states
  const [value,setValue]=useState(['C','%','/','=',"7",'8','9','*','4','5','6','-','1','2','3','+','0','.','='])
  const [input,setInput]=useState('')
  const handleValue=(evt)=>{
setInput(evt.target.value)
  }
  const handleButton=(buttontext)=>{

if(buttontext=="=")
  {
  const result= eval(input)
    console.log(result)
    setInput(result)

  }
  else if(buttontext=="C")
    {
      setInput('')
    }
  else{
   const Display=input+buttontext;
   console.log(Display)
    setInput(Display)
  }
  }
  //css
  return (
    <><h1 align='center' style={{ marginTop:"100px"}}>Basic Calculation Calculator</h1>
      <div align="center" className={style.cal}>
    <input  type="text" className={style.cal_int} value={input} onChange={handleValue} /><br/>
        {
          value.map((buttontext,index)=>{
            return <> <span className={
              `${buttontext==="C"? style.silver: style.cal_btn}
               ${buttontext==="="? style.equal: style.cal_btn}
               ${buttontext==="%"? style.silver: style.cal_btn}
               ${buttontext==="/"? style.silver: style.cal_btn}
               ${buttontext==="*"? style.equal: style.cal_btn}
               ${buttontext==="-"? style.equal: style.cal_btn}
               ${buttontext==="+"? style.equal: style.cal_btn}
                ${buttontext==="0"? style.zero: style.cal_btn}


              `} onClick={()=>handleButton(buttontext)}  key={index}>{buttontext}</span></>
        })
      }
      </div>
    </>
  )
}

export default Calculator
