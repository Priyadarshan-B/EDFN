import React from 'react'



function TopNav() {
  return (
    <div className='total-top-nav' style={{padding:"10px", backgroundColor:"lightcoral"}}>
      <div className='name-container'>
        <div>
          <h3 style={{ margin: "0px", color: "var(--icons)" }}>EDFN Technologies</h3>
          <p style={{ margin: "0px", color: "gray", fontWeight: "700", fontSize: "10px" }}>Web Developer</p>
        </div>
      </div>
      <div className='top-right-container'>
      </div>
    </div>
  )
}

export default TopNav
