import React from 'react'
import './Secondpage.scss'
const Secondpage = () => {
  return (
   <div className='second-page-grid'>
    <div>
        <img src="./images/ali.png" alt="" />
        
    </div>
  <div>
  <div>
        <img src="./images/price.png" alt="" />
    </div>
    <div style={{marginTop:'10px'}}>
        <img src="./images/start.png" alt="" />
    </div>
    <div style={{background:'white',padding:'20px 10px',marginTop:'10px'}}>
   <center>
   <h3>Saftey Tips</h3>
   <li>Remember don't send any pre-payment</li>
   <li>Remember don't send any pre-payment</li>
   <li>Remember don't send any pre-payment</li>
   </center>
    </div>
    <div className='rbort'>
        <button style={{color:'skyblue'}}>Mark unavailable</button>
        <button style={{color:'pink'}}>Report Abuse</button>
    </div>
    <div className='rbort'>
        <button style={{color:'green',width:'100%',border:'1px solid green'}}>Mark unavailable</button>
     
    </div>
  </div>
  <div>
 
  </div>
   </div>
  )
}

export default Secondpage