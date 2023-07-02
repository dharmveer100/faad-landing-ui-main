import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function Portfolio() {
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
              <h4> POWERFUL COLLABORATIONS</h4>
              <h1>FAAD  PORTFOLIO</h1>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-xl-6">
              <div className="img-block text-end">
                <img src="images/portfolio-graphics.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    <section className=" section-spacer">

        <div className="container-fluid container-extended">
        <div className="row">

        <div className="col-md-4">
        <div className="portfolio-block">
  <h3> 10% <span> Partial exits </span> </h3>
  <img src='images/portfolio-graphics02.svg' alt=''/>

</div>
</div>

        <div className="col-md-4">
        <div className="portfolio-block">
  <h3> 20%<span> Follow on rounds </span> </h3>
  <img src='images/portfolio-graphics03.svg' alt=''/>

</div>
</div>


        <div className="col-md-4">
        <div className="portfolio-block">
  <h3>30% <span> Closing the follow on rounds</span> </h3>
  <img src='images/portfolio-graphics04.svg' alt=''/>

</div>
</div>




</div>
</div>
</section>


    <section className=" section-spacer">

        <div className="container-fluid container-extended-small">
        <div className="row">

        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>

        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>


        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>

        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>

        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>

        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>
        <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>

       <div className="col-md-3">
        <div className="logo-box-block">
<picture>
  <img src='images/logo-clar.png' alt=''/>
</picture>
  <h3>CLEAR DEKHO </h3>
<p> India's leading budget eyewear brand</p>

</div>
</div>




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
