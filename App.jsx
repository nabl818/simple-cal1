
import { Button, Stack } from '@mui/material';

import './App.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react'



function App() {

  const [principle, setPrinciple] = useState(0)
  const [intrest, setIntrest] = useState(0)
  const [year, setYear] = useState(0)
  const[SimpleIntrest,setSimpleIntrest]=useState(0)



  const [isInvalidPrinciple, setisInvalidPrinciple] = useState(false)
  const [isInvalidIntrest, setisInvalidIntrest] = useState(false)
  const [isInvalidYear, setisInvalidYear] = useState(false)
  const[isInvalidSimpleIntrest,setisInvalidSimpleIntrest]=useState(false)

  console.log(principle);
  console.log(intrest);
  console.log(year);
  
  

  const validateuserInput = (tag) => {
    const { name, value } = tag
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if (!!value.match(/^[0-9]*.?[0-9]+$/)){
      if (name =='principle') {
        setPrinciple(value)
        setisInvalidPrinciple(false)

      }
      else if (name =='intrest') {
        setIntrest(value)
        setisInvalidIntrest(false)

      }
      else {
        setYear(value)
        setisInvalidYear(false)

      }


    }
    else {
      if (name =='principle') {
        setisInvalidPrinciple(true)
      }
      else if (name =='intrest') {
        setisInvalidIntrest(true)
      }
      else {
        setisInvalidYear(true)
      }
    }

  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("button clicked");

    if(principle && intrest && year){
      setSimpleIntrest(principle*intrest*year/100)
    }
    else{
      alert("enter the field completly")
    }
    
  }


  const handleReset=()=>{
    setPrinciple(0)
    setIntrest(0)
    setYear(0)
    setSimpleIntrest(0)
    setisInvalidIntrest(false)
    setisInvalidPrinciple(false)
    setisInvalidYear(false)
  }
  
  



  return(
    <div className='bg-dark d-flex align-item-center d-flex justify-content-center p-3 >' style={{ minHeight: '100vh', minWidth: '100%' }}>
      <div className='bg-light rounded p-5' style={{ width: '550px' }}>
          <h2>Simple Intrest Calculator</h2>
        <p className='d-block'>calculate your simple intrest easily</p>
        <div className='d-flex align-items-center justify-content-center bg-warning rounded text-light flex-column' style={{ height: '120px' }}>
          <h1>{SimpleIntrest}</h1>

          <h5>Total Simple Intrest</h5>
        </div>
        

        
        <form className='mt-5'>
          <div className='mb-3'>
            <TextField name='principle' onChange={e =>validateuserInput(e.target)} value={principle ||""} className='w-100' id="outlined-basic" label=" ₹  principle amount" variant="outlined" />
          </div>
          {
            isInvalidPrinciple &&

            <p className='text-danger'>invalid principle</p>

          }
          <div className='mb-3'>
            <TextField name='intrest' onChange={e =>validateuserInput(e.target)} value={intrest ||""} className='w-100' id="outlined-basic" label="Rate of intrest(p.a)%" variant="outlined" />
          </div>
          {
            isInvalidIntrest &&

            <p className='text-danger'>invalid intrest</p>

          }
          <div className='mb-3'>
            <TextField name='year' onChange={e =>validateuserInput(e.target)} value={year ||""} className='w-100' id="outlined-basic" label="Time period (yr)" variant="outlined" />
          </div>
          {
            isInvalidYear &&

            <p className='text-danger'>invalid year</p>

          }


          <Stack direction="row" spacing={2}>
            <Button type='submit' disabled={isInvalidPrinciple || isInvalidIntrest || isInvalidYear} onClick={handleCalculate} variant="contained" style={{ backgroundColor: "black", width: "50%", height: "50px" }}>Calculate</Button>
          <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: "50px" }}>Reset</Button>
        </Stack>

      </form>




    </div>
   
    </div>
      
    
  )
}

export default App
