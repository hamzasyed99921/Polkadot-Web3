import React from "react";

const Protocols = () => {
  return (
    <>
      <section className="protocol_section">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-12 px-4" >
              <h2 className="text-start d-flex justify-content-center">An open-source <br /> protocol built for <br /> everyone</h2>
            </div>
            <div className="col-md-6 col-12 px-4" >
              <p>
                Polkadot is an open-source project founded by the <u>Web3
                Foundation.</u> <br /> Web3 Foundation has commissioned five teams and over
                100 developers to build Polkadot, including:
              </p>
            </div>
          </div>
         
          <div className="row mt-5 " style={{margin: '0px'}}>
            <div className="col-lg-3 col-md-6 col-12 mt-4 text-center"><img src="assets/images/circle1.svg" className="img-fluid " style={{width: '20%'}} alt="" /></div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 text-center"><img src="assets/images/circle2.svg" className="img-fluid " style={{width: '20%'}} alt="" /></div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 text-center"><img src="assets/images/circle3.svg" className="img-fluid " style={{width: '20%'}} alt="" /></div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 text-center"><img src="assets/images/circle4.svg" className="img-fluid " style={{width: '20%'}} alt="" /></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Protocols;
