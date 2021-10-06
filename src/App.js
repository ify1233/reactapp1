import './App.css';
import React, {useState}  from 'react'; 

import Abi from './abi.json';
const { ethers } = require("ethers");


function App() {


const [token,setName]=useState()


const [ispending,isfinished]=useState(true)
const [c,_show]=useState()
const [tittle,settitle]=useState()
const [print,setprint]=useState()
const [check1,setprint1]=useState()

 
async function connect (){
 
  await window.ethereum.request({method:'eth_requestAccounts'});
 let  _provider =  new ethers.providers.Web3Provider(window.ethereum);
 
 let _token = new ethers.Contract(
  '0x27FAD21026bDBbe9885E6c6adC92042B30a74Ab4', //contract address
  Abi.abi, //abi code of our contract
  _provider.getSigner(0) //signer object 
); 
setName(_token)

}



// async function   _update(){
//   console.log(token)
//   isfinished(true)
//   _show('loading....')
//  let tx= await token.update(7)
//   await tx.wait();
//   isfinished(false)
 
// }


async function   _update(){
 
  console.log('ddd',tittle)
  console.log(token)
  isfinished(true)
  _show('loading....')
//  let tx= await token.update(tittle)
 let tx= await token.factory(tittle,print)
  await tx.wait();
  isfinished(false)
 
}
async function   check(){ 
//  let tx= await token.update(tittle)
 let tx= await token.checkcontractaddress()
 setprint1(tx)
console.log('ddd',tx)
 
}

  return (
    <div className="App">
      <div className='d'>
        <div></div>
     <button onClick= {connect} className='btn btn-success'> CONNECT METAMASK</button>
     </div>
     
     {/* display loading.... if  ispending is true  if false stop displaying loading.... */}
    <div className='g'>
      <div className='h'> 
      <input type="text" onChange={(e)=>settitle(e.target.value)} placeholder="TOKEN NAME" className='first' />
      <br />
      <input type="text" onChange={(e)=>setprint(e.target.value)} placeholder="TICKER" className='first'/>
      <br />
     
      </div>
      <button className='btn btn-success h' onClick={ _update}  > CREATE TOKEN</button>
      {ispending && <div> {c} </div> }
      <button className='btn btn-success' onClick={check}> CONTRACT ADDRESS</button>
      <br />
      <div>{check1}</div>
      </div>
      <a className='btn btn-success' href="https://rinkeby.etherscan.io/address/"{print} >CLICK TO VIEW CONTRACT ON ETHERSCAN</a>
     
    </div>
  );
}

export default App;
