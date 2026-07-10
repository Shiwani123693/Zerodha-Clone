import React from 'react';

function Team() {
    return ( 
      <div className='container border-top'>
        <div className='row'>
            <h1 className='text-center fs-3 mt-5'>People</h1>
        </div>
        <div className='row '>
            <div className='col-6 text-center mt--20 p-2'>
                <img src='media/nithinKamath.jpg' style={{borderRadius:"50%", width:"50%"}}/>
                <h4 className='text-muted'>Nithin Kamath</h4>
                <h6 className='text-muted'>Founder, CEO</h6>
            </div>
            <div className='col-6 mt-5 p-2'>
                <p className='text-muted'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                   <p className='text-muted'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                      <p className='text-muted'>Playing basketball is his zen.</p>
                         <p className='text-muted'>Connect on <a  href='#' style={{textDecoration:"none"}}>Homepage</a> / <a href='#'style={{textDecoration:"none"}}>TradingQnA</a>  / <a href='#' style={{textDecoration:"none"}}> Twitter</a> </p>
            </div>
        </div>
      </div>
     );
}

export default Team;