import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function FaadAc() {
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
              <h1> FAAD ACCELERATOR LABS</h1>
              <p>
              Faad accelerator lab is the vertical of faad network.We plan to launch a series of cohorts focused on the sunrise sector of the indian Startup Ecosystem.The idea is to pickup early stage startups,mentor them through a 12-weak scale-up curriculum and prepare them for real-world action.
              </p>
              <button className="btn btn-danger"> Apply For Funding <i className="fa fa-arrow-right"></i></button>
            </div>
            <div className="col-xl-6">
              <div className="img-block">
                <img src="images/accelerator-graphics.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
   
<section  className='hotdeal-section-top section-spacer finsher'>


</section>
  
<div className='container-fluid container-extended shif-upper'>

 <div className='row'>
 <div className='col-md-6'>
  <div className='card finishtra-card'> 
  <figure>
  <img src='images/finshastra-graphics.svg' alt=''/>
  </figure>
  <h3>Finshastra</h3>
  <p> The Indian Fintech sector has had prominent growth in recent years because of the changing cultural trends,favourable regulatory landscape and financial inclusion revolution being witnessed across the country.Therefore, the theme of the first cohort will be FinTech and will be known as 'FinShastra'.</p>
  <div className='keyfeature'>
    <h4> Finshastra</h4>
    <ul className='row'>
      <li className='col-md-4'> <strong> Finshastra </strong> Finshastra</li>
      <li className='col-md-4'> <strong> 25 lakhs </strong> Funding Upto</li>
      <li className='col-md-4'> <strong> vc </strong> Demo Day</li>
    </ul>
  </div>

  <div className='text-center btn-block'>

  <a className='btn btn-dark' href="/FaadAcDetail"> View more...</a>
    <button className='btn btn-danger'> Sign Up Now  <i className="fa fa-arrow-right"></i></button>
  </div>
   </div>
  </div>
  <div className='col-md-6'>
  <div className='card finishtra-card'> 
  <figure>
  <img src='images/finshastra-graphics.svg' alt=''/>
  </figure>
  <h3>Finshastra02</h3>
  <p> The Indian Fintech sector has had prominent growth in recent years because of the changing cultural trends,favourable regulatory landscape and financial inclusion revolution being witnessed across the country.Therefore, the theme of the first cohort will be FinTech and will be known as 'FinShastra'.</p>
  <div className='keyfeature'>
    <h4> Finshastra</h4>
    <ul className='row'>
      <li className='col-md-4'> <strong> Finshastra </strong> Finshastra</li>
      <li className='col-md-4'> <strong> 25 lakhs </strong> Funding Upto</li>
      <li className='col-md-4'> <strong> vc </strong> Demo Day</li>
    </ul>
  </div>

  <div className='text-center btn-block'>

    <a className='btn btn-dark' href="/FaddAcDetail"> View more...</a>
    <button className='btn btn-danger'> Sign Up Now  <i className="fa fa-arrow-right"></i></button>
  </div>
   </div>
  </div>
 </div>
</div>

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
