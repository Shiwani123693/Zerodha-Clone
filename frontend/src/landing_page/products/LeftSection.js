import React from "react";
function LeftSection({
  ImageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkName1,
  linkName2,
}) {
  return (
    <div className="container p-3  mb-5">
      <div className="row mt-5">
        <div className="col-5">
          <img src={ImageURL} className="mt--10" />
        </div>
        <div className="col-1"></div>
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
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
