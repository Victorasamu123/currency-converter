import React ,{useState}from 'react'
import styled from "styled-components"
import "./Currency.css"
const CurrencyConverter = () => {
  const [CurrentSource, setCurrentSource] = useState('')
  const [CurrentCurrency, setCurrentCurrency] = useState('')
  const [Display, SetDisplay] = useState(true);
  const [DisplayTar, SetDisplayTar] = useState(true);
  const [currency, Setcurrency] = useState('select wallet');
  const [balance, Setbalance] = useState(0);
  const [currencyTar, SetcurrencyTar] = useState('select wallet');
  const [balanceTar, SetbalanceTar] = useState(0);
  // const [SourceValue setSourceVa]
  const allCurrency=[
    {currency:"USD", balance:5000},
    {currency:"GBP", balance:2000},
    {currency:"EUR", balance:3500},
    {currency:"NGN", balance:200000},
    ]
    
    const setcurr = (index)=>{
      const filterArray = allCurrency.find((item,ind)=>(index=== ind))
      console.log(filterArray)
      Setcurrency(filterArray.currency);
      Setbalance(filterArray.balance)
    }

    const setTar =(index)=>{
      const tarFiletArray= allCurrency.find((item,ind)=>(index===ind))
      // if(tarFiletArray === filterArray){
      //   alert("same")
      // }else{
        SetcurrencyTar(tarFiletArray.currency);
        SetbalanceTar(tarFiletArray.balance);
      // }
    }
    const ConDiv = styled.div`
     width:100%;
     height:100%;
    //  background-color:blue;
     display:flex;
     justify-content:center;
    `;

    const RightDiv= styled.div`
     width:50%;
     height:100%;
    `;
    const SourceDiv = styled.div`
      width:70%;
      height:60px;
      background-color: #F6F7F8;
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:10px;
      padding:10px;
      border-radius:10px;
    `;
    const SourceCurrency= styled.p`
      font-size:18px;
      font-family:sans-serif;
    `;
    const SourceBalance = styled.p`
     display:flex;
     flex-direction:column;
    `;
    const SourceInput = styled.input`
      margin-top:80px;
      width:70%;
      height:50px;
      border-color:blue;
      border-width:2px;
      border-radius:10px;
    `;
    const ConvertButton = styled.button`
    width:70%;
    height:50px;
    background-color:#5580E0;
    margin-top:20px;
    color:white;
    font-size:20px;
    font-family:20px;
    border:0;
    border-radius:10px;
    `
  return (
    <>
      {/* <div className='container-div'>
         
      </div> */}
      <ConDiv>
        <RightDiv>
         <h1>Convert from one to another Currency</h1>
           <SourceDiv>
           <SourceCurrency>
           {currency}
           </SourceCurrency>
           <SourceCurrency>
           <p>dropdown</p>
             <div style={Display?{display:"block"}:{display:"none"}}>
              {
                allCurrency.map((item,index)=>(
                  <div key={index} onClick={()=>setcurr(index)}>{item.currency}</div>
                ))
              }
             </div>
           </SourceCurrency>
           <SourceBalance>
             <p>Balance</p>
             <p>{balance}</p>
           </SourceBalance>
           </SourceDiv>
          <SourceInput onCha></SourceInput>
           <SourceDiv>
           <SourceCurrency>{currencyTar}</SourceCurrency>
           <SourceCurrency>
           <p>dropdown</p>
           <div style={DisplayTar?{display:"block"}:{display:"none"}}>
              {
              allCurrency.map((item,index)=>(
                <div key={index} onClick={()=>setTar(index)}>{item.currency}</div>
              ))
              }
           </div>
           </SourceCurrency>
           <SourceBalance>
             <p>Balance</p>
             <p>{balanceTar}</p>
           </SourceBalance>
           </SourceDiv>
          <SourceInput></SourceInput>
          <ConvertButton>Convert</ConvertButton>
        </RightDiv>
      </ConDiv>
    </>
  )
}

export default CurrencyConverter