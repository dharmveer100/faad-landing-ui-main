import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function Startups() {
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
              <h4> GET TO KNOW THE PROCESS</h4>
              <h1> STARTUP INVESTMENT</h1>
              <p>

              Faad Network invests anywhere between 50K USD -1 MN USD. in early stage startups across sectors and geographies. Ideally, Faad Network prefers to invest in a seed/angel round or co-invest in a Pre-Series stage. Lorem ipsum consectetur amet dolor sit comeneer ilrems dolce issilm acalrm leoinsion duycoqun cons.
              </p>
              <button className="btn btn-danger"> Apply For Funding <i className="fa fa-arrow-right"></i></button>
            </div>
            <div className="col-xl-6">
              <div className="img-block">
                <img src="images/startup-graphics02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="status-section">
        <div className="container-fluid container-extended">
          <div className="row">
            <div className="col status-n">
              <h3> 1,50,000+</h3>
              <p> Registered Subcribers <br/> from over 150 cities</p>
            </div>
      
            <div className="col status-n">
              <h3> 6000+</h3>
              <p> Raised <br/> across 100+ campaigns</p>
            </div>
            <div className="col status-n">
              <h3> 100+</h3>
              <p>campaigns launched <br/> in under 2 years </p>
            </div>
            <div className="col status-n">
              <h3>85%+</h3>
              <p> Successful Campaigns <br/> across 100+ campaigns</p>
            </div>
          </div>
        </div>
      </div>
      <section className="hot-deal network-section section-spacer">
        <div className="hotdeal-section-top">
          <div className="title-section">
            <h4>WHAT WE SERVE </h4>
            <h2>We are <span> committed</span> to making financial <br/> products more inclusive</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container-fluid container-extended shif-upper">
          <div className="row vertical-space-column">
            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-global-investment-4620267.svg" alt="" />
                <h3> Faad Network invests in early-stage companies both in India and globally. </h3>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-location-5248471.svg" alt="" />
                <h3> Investments made are sector and geography agnostic.</h3>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" >
              <div className="network-block">
                <img src="images/noun-team-1889013.svg" alt="" />
                <h3>A team with a desire for mentoring and coaching.</h3>
                
              </div>
            </div>


            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-global-investment-4620267.svg" alt="" />
                <h3> A decent valuation which meets the expectations of our members.</h3>
               
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-exit-2964676.svg" alt="" />
                <h3> A Preferable exit strategy for investors.</h3>
              </div>
            </div>


            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-user-4178302.svg" alt="" />
                <h3>Startups with innovative ideas, USP, scalability across India and globe.</h3>
                
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-dice-1157262.svg" alt="" />
                <h3>Faad Network invests in
asset-light and scalable
businesses with proof of
concept or an existing
customer base and
revenue traction. </h3>
                
              </div>
            </div>



            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-boss-5627012 copy 2.svg" alt="" />
                <h3>Strong founding team with
formal educational
background and decent
work experience. </h3>
                
              </div>
            </div>


            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-idea-4847830 copy 2.svg" alt="" />
                <h3>Startups with innovative ideas, USP, scalability across India and globe.</h3>
                
              </div>
            </div>


          </div>
          <hr />
        </div>
      </section>
        
      <section className="stepsInvest section-spacer">

        <div className="container-fluid container-extended-small">
          <div className="title-section">
            <h4>STEPS TO INVEST</h4>
            <h2>
            Invest with <span> FAAD </span> Network <br/> It’s really simple with us
            </h2>
            <p>

            Follow Below steps to invest Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-xl-5 col-md-12 text-center">
            <img src="images/noun-startup-1946229 copy.svg" alt=""/>
                </div>
                <div className="col-xl-7 col-md-12 mt-lg-0 mt-5">
                  
                  <ul className='network-list'>
                    <li> <span> <strong>1</strong> </span> <h4> APPLY</h4>  <p> Startup can send their updates pitch at deals@faad.com</p> </li>
                    <li> <span><strong> 2 </strong>  </span>  <h4> EVALUATE</h4>  <p> Startup can expect a reply within 1-2 weeks once the deal has been evaluated.</p> </li>
                    <li> <span> <strong> 3 </strong> </span>  <h4> SCREENING</h4>  <p> Shortlisted startup gets further notified for a meeting/call with the team & hence the shortlisting happens.</p> </li>
                    <li> <span><strong> 4 </strong> </span>  <h4> ENGAGE & PITCH</h4>  <p> An investment process is explained followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session.</p> </li>  
                    <li> <span><strong> 5 </strong> </span>  <h4> TERM SHEET & DEAL DUE DILIGENCE</h4>  <p> Call/Meetings are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks.</p> </li>  
                    <li> <span> <strong> 6 </strong> </span>  <h4> DEAL</h4>  <p> The SSHA document would be signed and an action to call for money gets initiate. The whole process takes 30-60 days.</p> </li>  

                  </ul>
                </div>
                </div>

 
          <div className="btn-bottom text-center mt-4 ps-150">
            <button className="btn btn-danger"> Apply For Funding <i className="fa fa-arrow-right"></i>  </button>
          </div>

          <div className="row">
            <div className="col-xl-12 text-center">
            <img src="images/startup-graphics03.svg" alt=""/>
                </div>
                </div>
          <hr />
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
