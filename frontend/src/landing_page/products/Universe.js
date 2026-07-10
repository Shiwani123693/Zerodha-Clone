import React from 'react';

function Universe() {
    return ( 
<div className='container mt-5 mb-5'>
   
    <div className='row mt-5'>
         <h1 className="text-muted text-center fs-2 mt-5">The Zerodha Universe</h1>
    <p className="text-muted text-center fs-4 mt-3">Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4 mt-5  p-3'>
             <img src='media/smallcaseLogo.png' />
                <p className='text-muted mt-2 fs-5'>
                    Thematic investing platform
                </p>
         
         
        </div>
        <div className='col-4 mt-5 p-3'>
             <img  src='media/zerodhaFundhouse.png' style={{width:"50%"}} />
              <p className='text-muted mt-2 fs-5'>
                    Thematic investing platform
                </p>
           
        </div>
         <div className='col-4 mt-5 p-3'>
             <img  src='media/streakLogo.png' style={{width:"50%"}} />
               <p className='text-muted mt-2 fs-5'>
                 Systematic trading platform
                </p>
            
        </div>
        
    </div>
    <div className='row mt-5'>
         <div className='col-4 mt-5  p-5'>
             <img src='media/sensibullLogo.svg' style={{width:"60%"}}/>
           <p className='text-muted mt-2 fs-5'>
                   Options trading platform that lets you create strategies
                </p>
         
        </div>
        <div className='col-4 mt-5 p-5'>
             <img  src='media/dittoLogo.png'style={{width:"40%"}} />
             <p className='text-muted mt-2 fs-5'>
                Personalized advice on life and health insurance.
                </p>
           
        </div>
         <div className='col-4 mt-5 p-5'>
             <img  src='media/goldenpiLogo.png'style={{width:"50%"}} />
              <p className='text-muted mt-2 fs-5'>
                   Investment research platform
                </p>
            
        </div>
          <button className="p-3 btn btn-primary fs-5 " style={{width:'20%', margin:"0 auto"}}>Sign up for free</button>
    </div>
   
   
</div>
     );
}

export default Universe;