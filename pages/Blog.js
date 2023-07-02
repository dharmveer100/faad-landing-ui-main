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
          <div className="row align-items-center">
            <div className="col-xl-6">
              <h4> STAY UPDATE</h4>
              <h1>BLOGS OF INVESTMENT</h1>
              <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-xl-6">
              <div className="img-block text-end">
                <img src="images/blog-graphics.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>



    <section className=" section-spacer">

        <div className="container-fluid container-extended-small">
        <div className="row">
        <div className="col-md-4">
<div className='section-title'>
Recent <span> Blogs </span>
</div>

</div>

  <div className="col-md-3">
<input type='text' className='form-control'/>

</div>

  <div className="col-md-3">
<input type='text' className='form-control'/>


</div>

</div>



  <div className="row blog-row ">
        <div className="col-md-5">
   <img src="images/blog-graphics.svg" alt="" />
</div>

        <div className="col-md-7">
<h3> If all things space have your attention, Navars Edutech has some very interesting courses to offer</h3>
<h4> Hyderabad-based Navars Edutech is all set to offer courses on everything related to astronomy and this is what makes their proposition unique and different from everyone else out there right now </h4>

<ul>
<li> Author: Seema Rajpal </li>
<li> Published: 15th September 2021 </li>
<li> 8 Min Read </li>
</ul>

</div>


</div>



  <div className="row blog-row ">
        <div className="col-md-5">
   <img src="images/blog-graphics.svg" alt="" />
</div>

        <div className="col-md-7">
<h3> If all things space have your attention, Navars Edutech has some very interesting courses to offer</h3>
<h4> Hyderabad-based Navars Edutech is all set to offer courses on everything related to astronomy and this is what makes their proposition unique and different from everyone else out there right now </h4>

<ul>
<li> Author: Seema Rajpal </li>
<li> Published: 15th September 2021 </li>
<li> 8 Min Read </li>
</ul>

</div>


</div>



       <div className="row">
        <div className="col-md-4">
<div className='section-title'>
Popular  <span> Blogs </span>
</div>

</div>

</div>

  <div className="row blog-row ">
        <div className="col-md-4">
   <img src="images/blog-graphics.svg" alt="" />
</div>

       <div className="col-md-3">
   <ul>
<li> Author: Seema Rajpal </li>
<li> Published: 15th September 2021 </li>
<li> 8 Min Read </li>
</ul>
</div>



        <div className="col-md-5">
<h3>If all things space have your attention, Navars Edutech has some very interesting courses to offer</h3>
<h4> Hyderabad-based Navars Edutech is all set to offer courses on everything related to astronomy and this is what makes their proposition unique and different from everyone else out there right now </h4>


</div>


</div>

  <div className="row blog-row ">
        <div className="col-md-4">
   <img src="images/blog-graphics.svg" alt="" />
</div>

       <div className="col-md-3">
   <ul>
<li> Author: Seema Rajpal </li>
<li> Published: 15th September 2021 </li>
<li> 8 Min Read </li>
</ul>
</div>



        <div className="col-md-5">
<h3>If all things space have your attention, Navars Edutech has some very interesting courses to offer</h3>
<h4> Hyderabad-based Navars Edutech is all set to offer courses on everything related to astronomy and this is what makes their proposition unique and different from everyone else out there right now </h4>


</div>


</div>

<hr/>

<ul className='blog-nv'>
<li> PREVIOUS </li>
<li> NEXT </li>

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
