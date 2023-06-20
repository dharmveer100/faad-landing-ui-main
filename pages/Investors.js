import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function Investors() {
  return (
    <>



      <Head className="container">
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <Header></Header>


      <div className="hero-section">
        <div className="container-fluid container-extended">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <h4> INVEST WITH US</h4>
              <h1> INVESTMENT MADE EASY</h1>
              <p>

              Faad Network invests up to 50K USD to 1 MN USD. in early stage startups across sectors and geographies. Faad Network, which pools the resources and knowledge of their members, can overcome many limitations associated with solo investing and investing in risky environments, such as emerging markets.
              </p>
              <button className="btn btn-danger"> Apply For Funding <i className="fa fa-arrow-right"></i></button>
            </div>
            <div className="col-xl-6">
              <div className="img-block">
                <img src="images/investors.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="status-section">
        <div className="container-fluid container-extended">
          <div className="row">
            <div className="col status-n">
              <h3> $23.1M</h3>
              <p> Investment Raised</p>
            </div>
      
            <div className="col status-n">
              <h3>9,366</h3>
              <p>Investors</p>
            </div>
            <div className="col status-n">
              <h3> 100+</h3>
              <p> Live Deals</p>
            </div>
            <div className="col status-n">
              <h3>48</h3>
              <p> Countries</p>
            </div>

            <div className="col status-n">
              <h3>541</h3>
              <p> Cities</p>
            </div>
          </div>
        </div>
      </div>
      <section className="network-section section-spacer">
          <div className="title-section">
            <h4>WHAT WE SERVE </h4>
            <h2>We are the best Platform for <span> Investors </span> <br/> to Build a Super portfolio</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        <div className="container-fluid container-extended ">
          <div className="row align-items-center">
            <div className="col-md-6">
            <img src="images/only-best-graphics.svg" alt=""/>
            </div>

         
         


            <div className="col-md-6">
             
            <div className="title-section text-start title-small mt-md-0 mt-5">
            <h4>PITCHING SESSIONS </h4>
            <h2>Only the Best</h2>
            <p> faad conducts regular pitching sessions where quality startups are pitched in a closed room. Members get an opportunity to invest in these startups. It allows members to syndicate on a deal and share the risk.</p>
          </div>
            </div>

          </div>


          <div className="row align-items-center section-spacer ">


          <div className="col-md-6">
             
             <div className="title-section text-start title-small">
             <h4>PORTFOLIO MANAGEMENT </h4>
             <h2>Outstanding Quality</h2>
             <p> Faad manages and track the progress of all the investee companies. Get access to regular updates, Monthly MIS, Business Networking, Mentorship and Future Fundraising Activities.</p>
           </div>
             </div> 


            <div className="col-md-6">
            <img src="images/portfolio-management-graphics.svg" alt=""/>
            </div>

         
         



          </div>
          <div className="row align-items-center section-spacer">

          <div className="col-md-6">
  <img src="images/_1760960869760.svg" alt=""/>
  </div>


<div className="col-md-6">
   
   <div className="title-section text-start title-small">
   <h4>NETWORKING </h4>
   <h2>Truly Top-Notch</h2>
   <p> Get to interact and network with successful Business Owners, CXO's, Entrepreneurs and like minded Individuals.</p>
 </div>
   </div> 


  




</div>

<hr/>

        </div>
      </section>
        
   
  
   
      <section className="why-only section-spacer">
        <div className="container-fluid container-extended">
        
          <div className="title-section">
            <h4> HOW IT WORK AND WHY ONLY FAAD </h4>
            <h2>

              Our experts and users sharing <br /> experience that
              <span> Why Only FAAD </span>
            </h2>
          </div>

          <div id="carouselExampleFade" className="carousel slide   " data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img src="images/img-video.png" alt="" />
                  </div>
                  <div className="col-lg-6 ">
                    <div className=" author-description">
                      <img src="images/icon-logo-c.png" alt="" />
                      <h3> " FAAD helped us to reach our business goals "</h3>
                      <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                      <div className="author-footer">
                        <h4>  Thomas Edward <br /> CEO, Lorem Company, USA </h4>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img src="images/img-video.png" alt="" />
                  </div>
                  <div className="col-lg-6 ">
                    <div className=" author-description">
                      <img src="images/icon-logo-c.png" alt="" />
                      <h3> " FAAD helped us to reach our business goals "</h3>
                      <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                      <div className="author-footer">
                        <h4>  Thomas Edward <br /> CEO, Lorem Company, USA </h4>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img src="images/img-video.png" alt="" />
                  </div>
                  <div className="col-lg-6 ">
                    <div className=" author-description">
                      <img src="images/icon-logo-c.png" alt="" />
                      <h3> " FAAD helped us to reach our business goals "</h3>
                      <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                      <div className="author-footer">
                        <h4>  Thomas Edward <br /> CEO, Lorem Company, USA </h4>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </section>
 


      <section className="our-newsletter section-spacer">

        <div className="container-fluid container-extended-small">
          <div className="news-letter">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-lg-5">
                <h2> Small Investment, Big Returns! Stay tune with our Newsletter.</h2>

              </div>

              <div className="col-xxl-6 col-lg-7">
                <div className="input-group newsletter-group ">
                  <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="" />
                  <span className="input-group-text"> <button className='btn btn-danger'> Subscribe to FAAD Network <i className="fa fa-arrow-right"></i> </button> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
