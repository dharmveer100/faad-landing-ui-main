import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Footer from '../component/Footer';


export default function FaadPartner() {
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
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-8">
              <h1>LET'S START <br/> WORK TOGETHER</h1>
             
            </div>
            <div className="col-xl-3">
              <div className="img-block text-end email-block">
                <img src="images/noun-email-3659389.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    <section className=" section-spacer">

        <div className="container-fluid container-extended">
        <div className="row  justify-content-between">
            <div className="col-xl-8">
          <div className='contact-field-block'>
            <label> <span> 01 </span> What's your name?</label>
            <input placeholder='John Doe' type="text" className='form-control style-controled'/>
          </div>

          <div className='contact-field-block'>
            <label> <span> 02 </span> What's your email? </label>
            <input placeholder='john@doe.com' type="email" className='form-control style-controled'/>
          </div>


          <div className='contact-field-block'>
            <label> <span> 03 </span> What's the name of your organization?</label>
            <input placeholder='John Doe' type="text" className='form-control style-controled'/>
          </div>



          <div className='contact-field-block'>
            <label> <span> 04 </span> Your message</label>
            <textarea  placeholder='Hello FAAD, Can you...' cols="" rows=""  className='form-control style-controled'></textarea>
          </div>

<button className='btn btn-danger'> Send It! <i class="fa-sharp fa-solid fa-paper-plane"></i></button>
          </div>
          <div className="col-xl-3">
            
            <div className='contact-info'>

              <h3> OFFICE ADDRESS </h3>

              <ul>
                <li>  <img src='images/icon-location.svg' alt=''/> Lorem ipsum address here street name, location City name, State, Country 123456</li>
              </ul>

              <h3> CONTACT DETAILS </h3>

<ul>
  <li> <a href='#'> <img src='images/noun_Email_4293221.svg' alt=''/> Linfo@faadnetwork.com</a> </li>
  <li>  <a href='#'> <img src='images/noun_receive call_4304827.svg' alt=''/> +12 123 456 7890 </a> </li>
</ul>


<h3> SOCIALS </h3>

    
<ul>
  <li> <a href='#'> <img src='images/2959747_employment_business_linkedin_work_icon.svg' alt=''/>LinkedIn </a> </li>
  <li>  <a href='#'> <img src='images/2959749_facebook_icon.svg' alt=''/> Facebook </a> </li>
  <li>  <a href='#'> <img src='images/2959740_bird_news_tweet_twitter_icon.svg' alt=''/> Twitter </a> </li>
  <li>  <a href='#'> <img src='images/2959742_broadcast_google_streaming_video_youtube_icon.svg' alt=''/> YouTube </a> </li>
  <li>  <a href='#'> <img src='images/2959748_instagram_photo_share_icon.svg' alt=''/> Instagram </a> </li>
</ul>


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
