import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero_section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="hero_left">
                <h2>The multichain vision for <br /> Web3 starts here.</h2>
                <p>
                  Polkadot unites and secures a growing ecosystem of specialized
                  blockchains called parachains. Apps and services on Polkadot
                  can securely communicate across chains, forming the basis for
                  a truly interoperable decentralized web.
                </p>
                <div className="d-flex d-sm-flex-wrap mt-5">
                <a href="#">Learn Parachains</a>
                <a href="#" className="mx-3">Learn Cross-Chain</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-12 position-relative mt-5 " >
              <img src="assets/images/hero.png" className="img-fluid " style={{width: '450px'}} alt="" />
              <div className='position-absolute hero_after_img' style={{top: 0}} >
              <img src="assets/images/hero-outer.svg" style={{width: '450px'}} className="" alt="" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;