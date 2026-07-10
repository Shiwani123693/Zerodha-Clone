import React from 'react';

function Brojkerage() {
    return ( 
        <div className='container border-top'>
            <div className='row mt-5 text-center'>
                <div className='col-8 p-5'>
                    <h1 className='fs-4'><a href='#' style={{textDecoration:"none"}}>Brokerage Calculator</a></h1>
                    <ul className='text-muted mt-5 fs-6' style={{lineHeight:"1.8" , textAlign:"left",fontSize:"12px" , }}>
                        <li>Additional charges of ₹50 + GST per order apply for Call & Trade and RMS auto square-off services.</li>
                        <li>Digital contract notes will be sent to your registered email address.</li>
                        <li>If you require a physical copy of the contract note, a charge of ₹20 per contract note will apply. Courier charges will be additional.</li>
                        <li>For NRI (Non-PIS) accounts, brokerage will be 0.5% of the trade value or ₹100 per executed equity order, whichever is lower.</li>
                        <li>For NRI (PIS) accounts, brokerage will be 0.5% of the trade value or ₹200 per executed equity order, whichever is lower.</li>
                        <li>If your account has a debit balance, the brokerage charged will be ₹40 per executed order instead of the standard ₹20 per executed order.</li>
                    </ul>
                </div>
                 <div className='col-4 p-5'>
                    <h1 className='fs-4'><a href='#' style={{textDecoration:"none"}}>List of charges</a></h1>
                 </div>
            </div>
        </div>
     );
}

export default Brojkerage;