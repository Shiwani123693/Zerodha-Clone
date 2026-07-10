import React from 'react';
function Hero() {
    return ( 
  <div className='container border-bottom mt-5'>
    <div className='row p-5'>
        <h1 className='text-center text-muted fs-2'>Zerodha Products</h1>
        <p className='text-muted text-center mt-2 fs-5'>Sleek, modern, and intuitive trading platforms</p>
        <p className='text-muted text-center'> Check out our <a href='#'  style={{textDecoration:"none"}}> investment offerings<i class="fa-solid fa-arrow-right-long"></i></a></p>
    </div>
  </div>
     );
}

export default Hero;