import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function FaadAcDetail() {
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
              <h1> FINSHASTRA FEATURES</h1>
              <p>
              Faad accelerator lab is the vertical of faad network.We plan to launch a series of cohorts focused on the sunrise sector of the indian Startup Ecosystem.The idea is to pickup early stage startups,mentor them through a 12-weak scale-up curriculum and prepare them for real-world action.
              </p>
              <button className="btn btn-danger"> Sign Up Now<i className="fa fa-arrow-right"></i></button>
            </div>
            <div className="col-xl-6">
              <div className="img-block">
                <img src="images/finshastra-graphics.svg" className='w-100' alt="" />
              </div>
            </div>
          </div>


        <div className='keyfeature  section-spacer'>
    <h4 className='text-center'> KEY FEATURES</h4>
    <ul className='row'>
      <li className='col'> <strong> 12 week </strong> Curriculum</li>
      <li className='col'> <strong> 25 lakhs </strong> Funding Upto</li>
      <li className='col'> <strong> vc </strong> Demo Day</li>
      <li className='col'> <strong> 05 Startups </strong> Will be Shortlisted</li>
      <li className='col'> <strong> 15+ Mentors </strong> Including unicorn founders, CXOs and Industry Leaders</li>
    </ul>
  </div>
  <hr/>
        </div>

      </div>
   

      <section className="our-portfolio section-spacer">

<div className="container-fluid container-extended-small">
  <div className="title-section">
    <h4>KEY PARTNERS</h4>
    <h2>
      Some of our <span>partners </span>
    </h2>
    <p>
    FAAD lets you effortlessly manage your company’s cap table, fundraising, employee offer letters, and more—in one place. Get back to building your company, and let FAAD handle the rest.
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
