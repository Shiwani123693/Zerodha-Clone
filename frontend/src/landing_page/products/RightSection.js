import React from 'react';
function RightSection(
    {
  ImageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkName1,
  linkName2,
}
) {
    return ( 
       <div className="container p-3  mb-5">
      <div className="row mt-5">
     
       
        <div className="col-6  mt-5">
          <h1 className="text-muted fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3 ">
            {linkName1 && (
              <a href="#" className="me-4">
                {linkName1} →
              </a>
            )}

            {linkName2 && <a href="#">{linkName2} →</a>}
          </div>
          
        </div>
           <div className="col-6">
          <img src={ImageURL} className="mt--10" />
        </div>
      </div>
    </div>
     );
}

export default RightSection;