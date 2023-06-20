export default function Footer() {
    return (

        <>
            <footer>
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 footer-logo-column">
                        <img src="/images/logo.png" alt="" />
                        <p> FAAD Network is an investor network which invests in early stage startups across various sectors & geographies. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>


                    <div className="col-xl-4 col-xxl-4 footer-column">
                        <h3> Quick Links </h3>
                        <ul>
                            <li> <a href="#"> Home   </a></li>
                            <li> <a href="#"> Portfolio  </a></li>
                            <li> <a href="#"> Startups </a></li>
                            <li> <a href="#"> Investors  </a></li>
                            <li> <a href="#">  Partners</a></li>


                            <li> <a href="#">About </a></li>
                            <li> <a href="#">FAAD </a></li>
                            <li> <a href="#"> Articles </a></li>
                            <li> <a href="#">Contact </a></li>
                            <li> <a href="#">Privacy </a></li>
                            <li> <a href="#">Policy </a></li>
                            <li> <a href="#">Terms of Use</a></li>


                        </ul>
                    </div>
                    <div className="col-xxl-2 col-xl-3 footer-column">
                        <h3> Registered Office </h3>
                        <p> Lorem Ipsum address goes here Street name, location name, City, State, Country 123456</p>
                        <ul className="social-group">
                            <li> <a href="#"> <i className="fa-brands fa-facebook-f"></i>  </a> </li>
                            <li> <a href="#"> <i className="fa-brands fa-twitter"></i></a> </li>
                            <li> <a href="#"> <i className="fa-brands fa-linkedin"></i></a> </li>
                            <li> <a href="#"> <i class="fa-brands fa-instagram"></i></a> </li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div className="disclaimer">
                    <p> <strong> DISCLAIMER: </strong> Faad.in is NOT a stock exchange recognised by the Securities Exchange Board of India (SEBI) under the Securities Contract (Regulation) Act, 1956. The securities offered by any company registered on this platform are not traded on any stock exchange recognised by SEBI.</p>
                </div>
                <p className="copyright"> ©2023 by Faad Network Private Limited.`</p>
            </footer>
        </>
    )
}