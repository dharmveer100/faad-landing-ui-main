import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function Home() {
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
              <h4> PLATFORM FOR INVESTORS AND STARTUPS </h4>
              <h1> IDEATE INNOVATE INVEST </h1>
              <p>

                Lorem ipsum consectetur amet dolor sit comeneer ilrems dolce <br /> issilm
                acalrm leoinsion duycoqun cons.
              </p>
              <button className="btn btn-danger"> Start Investing Now <i className="fa fa-arrow-right"></i></button>
            </div>
            <div className="col-xl-6">
              <div className="img-block">
                <img src="images/finance-graphics.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="status-section">
        <div className="container-fluid container-extended">
          <div className="row">
            <div className="col status-n">
              <h3> 55+</h3>
              <p> Portfolio <br /> Companies</p>
            </div>
            <div className="col status-n">
              <h3>180+</h3>
              <p> Startups <br /> Pitched</p>
            </div>
            <div className="col status-n">
              <h3> 6000+</h3>
              <p> Startups <br /> Evaluated</p>
            </div>
            <div className="col status-n">
              <h3> 1300+</h3>
              <p> Professional <br /> Investors</p>
            </div>
            <div className="col status-n">
              <h3>50 Cr+</h3>
              <p> Funds <br /> Invested</p>
            </div>
          </div>
        </div>
      </div>
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
      <section className="hot-deal section-spacer">
        <div className="hotdeal-section-top">
          <div className="title-section">
            <h4> LIVE HOT DEALS </h4>
            <h2>Explore our trending hot deals</h2>
          </div>
        </div>
        <div className="container-fluid container-extended-small shif-upper">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="hot-deal-block">
                <div className="hot-deal-title">
                  <img src="images/icon-logo.png" alt="" />
                  <h3> Nutrizoe </h3>
                  <p> India's first Women Nourishment Company</p>

                </div>

                <ul className='list-detail'>
                  <li> <p> Valuation <strong> $12 mn pre-mo... </strong></p></li>
                  <li> <p> Deadline <strong> Dec 20, 2022 </strong></p></li>
                  <li> <p> Funding Asked <strong> USD 400-500 K </strong></p></li>
                  <li> <p> Min Investment <strong> 100K </strong></p></li>
                  <li> <p> CAP <strong> Existing Angel l... </strong></p></li>
                  <li> <p> Investment Raised <strong> USD 200K </strong></p></li>
                </ul>

                <ul className='list-categories'>
                  <li> Food Tech </li>
                  <li> Consumer Brand - D2C </li>
                </ul>

              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="hot-deal-block">
                <div className="hot-deal-title">
                  <img src="images/icon-logo.png" alt="" />
                  <h3> Nutrizoe </h3>
                  <p> India's first Women Nourishment Company</p>

                </div>

                <ul className='list-detail'>
                  <li> <p> Valuation <strong> $12 mn pre-mo... </strong></p></li>
                  <li> <p> Deadline <strong> Dec 20, 2022 </strong></p></li>
                  <li> <p> Funding Asked <strong> USD 400-500 K </strong></p></li>
                  <li> <p> Min Investment <strong> 100K </strong></p></li>
                  <li> <p> CAP <strong> Existing Angel l... </strong></p></li>
                  <li> <p> Investment Raised <strong> USD 200K </strong></p></li>
                </ul>

                <ul className='list-categories'>
                  <li> Food Tech </li>
                  <li> Consumer Brand - D2C </li>
                </ul>

              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="hot-deal-block">
                <div className="hot-deal-title">
                  <img src="images/icon-logo.png" alt="" />
                  <h3> Nutrizoe </h3>
                  <p> India's first Women Nourishment Company</p>

                </div>

                <ul className='list-detail'>
                  <li> <p> Valuation <strong> $12 mn pre-mo... </strong></p></li>
                  <li> <p> Deadline <strong> Dec 20, 2022 </strong></p></li>
                  <li> <p> Funding Asked <strong> USD 400-500 K </strong></p></li>
                  <li> <p> Min Investment <strong> 100K </strong></p></li>
                  <li> <p> CAP <strong> Existing Angel l... </strong></p></li>
                  <li> <p> Investment Raised <strong> USD 200K </strong></p></li>
                </ul>

                <ul className='list-categories'>
                  <li> Food Tech </li>
                  <li> Consumer Brand - D2C </li>
                </ul>

              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="hot-deal-block">
                <div className="hot-deal-title">
                  <img src="images/icon-logo.png" alt="" />
                  <h3> Nutrizoe </h3>
                  <p> India's first Women Nourishment Company</p>

                </div>

                <ul className='list-detail'>
                  <li> <p> Valuation <strong> $12 mn pre-mo... </strong></p></li>
                  <li> <p> Deadline <strong> Dec 20, 2022 </strong></p></li>
                  <li> <p> Funding Asked <strong> USD 400-500 K </strong></p></li>
                  <li> <p> Min Investment <strong> 100K </strong></p></li>
                  <li> <p> CAP <strong> Existing Angel l... </strong></p></li>
                  <li> <p> Investment Raised <strong> USD 200K </strong></p></li>
                </ul>

                <ul className='list-categories'>
                  <li> Food Tech </li>
                  <li> Consumer Brand - D2C </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-update section-spacer">

        <div className="container-fluid container-extended-small">
          <div className="title-section">
            <h4>FAAD NEWS &amp; UPDATES </h4>
            <h2>
              Browse our <span> articles </span> on marketing <br /> and growth through
              FAAD Times
            </h2>
            <p>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="news-block">
                <img src="images/logo_outlook.png" />
                <h3>

                  BluSmart drives a green agenda, hopes to expand presence from core
                  NCR base
                </h3>
                <ul className="inline-date">
                  <li> 15 May 2023 15:36PM</li>
                  <li>By Thomas Edward</li>
                </ul>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....</p>
                <button className="btn btn-default px-0"> View Full Article <i className="fa fa-arrow-right"></i> </button>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="news-block">
                <img src="images/logo_outlook.png" />
                <h3>

                  BluSmart drives a green agenda, hopes to expand presence from core
                  NCR base
                </h3>
                <ul className="inline-date">
                  <li> 15 May 2023 15:36PM</li>
                  <li>By Thomas Edward</li>
                </ul>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....</p>
                <button className="btn btn-default px-0"> View Full Article <i className="fa fa-arrow-right"></i> </button>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="news-block">
                <img src="images/logo_outlook.png" />
                <h3>

                  BluSmart drives a green agenda, hopes to expand presence from core
                  NCR base
                </h3>
                <ul className="inline-date">
                  <li> 15 May 2023 15:36PM</li>
                  <li>By Thomas Edward</li>
                </ul>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....</p>
                <button className="btn btn-default px-0"> View Full Article <i className="fa fa-arrow-right"></i> </button>
              </div>
            </div>

          </div>
          <div className="btn-bottom text-center">
            <button className="btn btn-danger"> Browse All Articles  <i className="fa fa-arrow-right"></i>  </button>
          </div>
          <hr />
        </div>
      </section>
      <section className="get-to-know section-spacer">
        <div className="title-section">
          <h4>GET TO KNOW, HOW WE WORK</h4>
          <h2>

            We are <span> committed </span> to making financial <br /> products more
            inclusive
          </h2>
          <p>

            FAAD lets you effortlessly manage your company’s cap table, fundraising,
            employee offer letters, and more—in one place. Get back to <br /> building your
            company, and let FAAD handle the rest.
          </p>
        </div>
        <div className="container-extended container-fluid">
          <div className="row section-spacer align-items-center">
            <div className="col-lg-6">
              <img src="images/startup-graphics02.png" alt="" />
            </div>
            <div className="col-lg-6 startup-key">
              <h3> FOR STARTUPS </h3>
              <ul>
                <li>
                  <i> <img src='images/noun-login-4163488.svg' alt='' /> </i>
                  Instant Registration
                  <span> Login with your existing account</span>
                </li>
                <li>
                  <i> <img src='images/noun-add-user-5317735.svg' alt='' /> </i>
                  Create Your Profile
                  <span> Follow simple steps to create an amazing profile</span>
                </li>
                <li>
                  <i> <img src='images/noun-loan-1538281.svg' alt='' /> </i>
                  Apply For Funding
                  <span> Showcase your startup to the network of investors</span>
                </li>
              </ul>
              <button className="btn btn-danger"> Sign Up  <i className="fa fa-arrow-right"></i></button>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 startup-key">
              <h3> FOR INVESTOR </h3>
              <ul>
                <li>
                  <i> <img src='images/noun-add-user-5317735.svg' alt='' /> </i>
                  Create Your Profile
                  <span> Follow simple steps to create an amazing profile</span>
                </li>
                <li>
                  <i> <img src='images/noun-rocket-launch-4924677.svg' alt='' /> </i>
                  Discover Profile <span> Search startups of your interests</span>
                </li>
                <li>
                  <i> <img src='images/noun-invest-2763982.svg' alt='' /> </i>
                  Start Investing
                  <span> Your journey of investment begins here</span>
                </li>
              </ul>
              <button className="btn btn-danger"> Sign Up <i className="fa fa-arrow-right"></i> </button>
            </div>
            <div className="col-lg-6">
              <img src="images/investors.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="hot-deal network-section section-spacer">
        <div className="hotdeal-section-top">
          <div className="title-section">
            <h4>WHY INVESTING WITH FAAD </h4>
            <h2>Invest with FAAD Network <br /> It’s really <span> simple </span> with us</h2>
            <p> FAAD lets you effortlessly manage your company’s cap table, fundraising, employee offer letters, and more—in one place. Get back to <br /> building your company, and let FAAD handle the rest.</p>
          </div>
        </div>
        <div className="container-fluid container-extended-small shif-upper">
          <div className="row vertical-space-column">
            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-check-list-605511.svg" alt="" />
                <h3> Accessibility of better deals </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-contarct-4208227.svg" alt="" />
                <h3> Efficient deal screening processes </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" >
              <div className="network-block">
                <img src="images/noun-pie-chart-1928782.svg" alt="" />
                <h3> Combining the resources of individual investors & do larger investments.</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>


            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-meeting-successful-2409874.svg" alt="" />
                <h3> Investors syndicate on a deal and share the risk.</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-investor-5133503.svg" alt="" />
                <h3> Learning experience for the new investors.</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>


            <div className="col-xl-4 col-md-6">
              <div className="network-block">
                <img src="images/noun-business-chat-5119179.svg" alt="" />
                <h3> Portfolio Diversification & better terms negotiation.</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>

          </div>
          <hr />
        </div>
      </section>
      <section className="client-stories-section section-spacer">

        <div className="container-fluid container-extended-small">





          <div className="row">
            <div className="col-xl-6">
              <div className="title-section text-start">
                <h4>- CLIENT STORIES </h4>
                <h2>Wall of <span> Love </span> @FAAD</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <picture> <img src='images/testimonials-graphics.png' alt='' /></picture>
              </div>
            </div>
            <div className="col-xl-6 ">
              <div className="speak-block">
                <div id="carouselStory" className="carousel slide " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">

                      <div className="author-name">

                        <p> Aaditya Patra <span> AM Marketing - Digital Growth Hackers </span></p>
                      </div>

                      <blockquote> The OG of alternative investment in India! I've invested in multiple deals on FAAD and their track record has been 100% till date. If tax free monthly lease income is what you are searching for then FAAD invest is your answer. </blockquote>


                    </div>
                    <div className="carousel-item">
                      <div className="author-name">

                        <p> Aaditya Patra <span> AM Marketing - Digital Growth Hackers </span></p>
                      </div>

                      <blockquote> The OG of alternative investment in India! I've invested in multiple deals on FAAD and their track record has been 100% till date. If tax free monthly lease income is what you are searching for then FAAD invest is your answer. </blockquote>

                    </div>

                    <div className="carousel-item">
                      <div className="author-name">

                        <p> Aaditya Patra <span> AM Marketing - Digital Growth Hackers </span></p>
                      </div>

                      <blockquote> The OG of alternative investment in India! I've invested in multiple deals on FAAD and their track record has been 100% till date. If tax free monthly lease income is what you are searching for then FAAD invest is your answer. </blockquote>

                    </div>

                  </div>
                  <div className='bottom-nav'>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselStory" data-bs-slide="prev">
                      <span> <strong>  PREVIOUS </strong>  </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselStory" data-bs-slide="next">
                      <span> <strong> NEXT </strong> </span>
                    </button>
                  </div>

                </div>
              </div>


            </div>
          </div>

          <div className="row section-spacer align-items-center">
            <div className="col-xl-6">
              <div className="submit-feedback">
                <div className="title-section text-start">
                  <h4>SUBMIT YOUR FEEDBACK </h4>
                  <h2>Your <span> opinion </span> is valuable for us. Please share</h2>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='form-section'>
                    <div className=' mb-3'>
                      <textarea cols="" rows="" placeholder='Write Your Message' className='form-control'></textarea>
                    </div>

                    <div className=' mb-3'>
                      <input type='text' placeholder='Email Address' className='form-control' />
                    </div>

                    <div className=' mb-3 text-end'>
                      <button className="btn btn-danger"> Submit <i class="fa fa-arrow-right"></i> </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xl-6 ">
              <div className="feedback-image ">

                <img src='images/feedback-graphics.png' alt='' />

              </div>
            </div>
          </div>


        </div>
      </section>
      <section className="our-portfolio section-spacer">

        <div className="container-fluid container-extended-small">
          <div className="title-section">
            <h4>OUR PORTFOLIO </h4>
            <h2>
              Some of our <span>partners </span>
            </h2>
            <p>
              FAAD lets you effortlessly manage your company’s cap table, fundraising, employee offer letters, and more—in one place. Get back to <br /> building your company, and let FAAD handle the rest.
            </p>
          </div>
          <ul className='group-partner'>
            <li> <span><img src='images/logo-clar.png' alt="" /></span> </li>
            <li> <span><img src='images/logo-clar.png' alt="" /></span> </li>
            <li> <span><img src='images/logo-clar.png' alt="" /></span> </li>
            <li> <span><img src='images/logo-clar.png' alt="" /></span> </li>
            <li> <span><img src='images/logo-clar.png' alt="" /></span> </li>
            <li> <span><img src='images/logo-clar.png' alt="" /></span> </li>

          </ul>

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
