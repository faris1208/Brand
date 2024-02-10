import anime from "../assets/img/Frame 16.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import sales from "../assets/img/Frame 95.svg";
import arrow from "../assets/img/Frame 6.svg";
import left from "../assets/img/ei_arrow-right.svg";
import left1 from "../assets/img/ei_arrow-left.svg";
import men from "../assets/img/Frame 19.svg";
import women from "../assets/img/Frame 23.svg";
import meeting from "../assets/img/Frame 21.svg";
import group from "../assets/img/Frame 92.svg";
import four from "../assets/img/Frame 4.svg";
import five from "../assets/img/Frame 10.svg";
import six from "../assets/img/Frame 7.svg";
import seven from "../assets/img/Frame 9.svg";
import eight from "../assets/img/Frame 3.svg";
import left12 from "../assets/img/ei_arrow-left (1).svg";
import left2 from "../assets/img/ei_arrow-right (1).svg";
import eighty from "../assets/img/Frame 47.svg";
import eighties from "../assets/img/Frame 49.svg";
import eighteen from "../assets/img/Frame 48.svg";
import sixty from "../assets/img/Frame 61.svg";
import sixtfour from "../assets/img/vaadin_quote-left.svg";
import sixtthree from "../assets/img/Frame 63.svg";
import seventeen from "../assets/img/Frame 17.svg";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Brand = () => {
    return ( 
        <div className="Brand-container">
            <div className="Navbar">
                <div className="Anime-img">
                    <img src={anime} alt="" className="anime-image" width="100%" />
                </div>
                <div className="list">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Portfolio</li>
                        <li>Our services</li>
                    </ul>
                </div>
                <div className="Sign-btn">
                    <button className="Sign">Sign up</button>
                </div>
                <div className="Anime-menu">
                    <GiHamburgerMenu className="Hamburger" />
                </div>
            </div>

            <div className="Utilize-head">
                <div className="Utilize">
                    <h1>Utilize our solution to  expand your business.</h1>
                    <p>Make your business prosper with our great team of experts. We'll make your new business plan a success!</p>
                    <div className="btn1">
                        <p>Let’s Talk </p>
                        {/* <button className="Talk-btn">Let’s Talk <MdOutlineArrowRightAlt /></button> */}
                        <MdOutlineArrowRightAlt className="right" />
                    </div>
                </div>
                <div className="Sales-head">
                    <img src={sales} alt="" className="sales-image" width="100%" />
                </div>
            </div>

            <div className="Business-container">
                <div className="Business">
                    <div className="Business-head">
                        <h1>We Provide The Best</h1>
                        <img src={arrow} alt="" className="arrow-image" width="100%" />
                        <h1>Solution For Your Business Development</h1>
                    </div>
                    <div className="prosper">
                        <p>Make your business prosper with our great team of experts. We'll make your new business plan a success!</p>
                    </div>
                </div>
                <div className="Brick-head">
                    <div className="brick">
                        <img src={left} alt="" className="left-image" width="100%" />
                        <img src={left1} alt="" className="left-image" width="100%" />
                    </div>
                </div>
                <div className="Three-Img">
                    <img src={men} alt="" className="men-image" width="100%" />
                    <img src={women} alt="" className="men-image" width="100%" />
                    <img src={meeting} alt="" className="men-image" width="100%" />
                </div>
            </div>

            <div className="Victory-container">
                <div className="Victory-img">
                    <img src={group} alt="" className="group-image" width="100%" />
                </div>
                <div className="Victory-heading">
                    <h2>We Lead Your Business Team To Victory</h2>
                    <p>We are a team of passionate business consultants & technology veterans eager to help companies reach their full potential.</p>
                    <div className="Victory-btn">
                        <button className="btn-mission">Our Mission</button>
                        <button className="btn-mission">Our Vision</button>
                        <button className="btn-mission">Our Value</button>
                    </div>
                    <div className="Victory-text">
                        <p>Our strategic planning process rapidly delivers plans that stick, with execution support to make your plans a reality.</p>
                    </div>
                </div>
            </div>

            <div className="Consulting-container">
                <div className="Consulting-text">
                    <h1>What We Do To Serve Your Best</h1>
                    <p>We provide comprehensive services to support your business by leveraging strategy to drive people, process, and information.</p>
                </div>
                <div className="Consulting-heading">
                    <div className="Consulting-head">
                        <img src={four} alt="" className="four-image" width="100%" />
                        <h3>Business Analysis</h3>
                        <p>Using analytics, we can bridge the analysis between technology and business</p>
                    </div>

                    <div className="Consulting-head">
                        <img src={five} alt="" className="four-image" width="100%" />
                        <h3>Strategic Planning</h3>
                        <p>Develop the most effective strategies and plans to boost your growth and achieve your goals</p>
                    </div>

                    <div className="Consulting-head">
                        <img src={six} alt="" className="four-image" width="100%" />
                        <h3>Business Consulting</h3>
                        <p>Create in depth reports and presentations on your business</p>
                    </div>

                    <div className="Consulting-head">
                        <img src={six} alt="" className="four-image" width="100%" />
                        <h3>Marketing Strategy</h3>
                        <p>We use a variety of innovative and good strategies to achieve a target for the business you are developing</p>
                    </div>

                    <div className="Consulting-head">
                        <img src={seven} alt="" className="four-image" width="100%" />
                        <h3>Experience Design</h3>
                        <p>We help clients understand, ideate and execute modern interactions across channels and functional areas</p>
                    </div>

                    <div className="Consulting-head">
                        <img src={eight} alt="" className="four-image" width="100%" />
                        <h3>Audit & Evaluation</h3>
                        <p>We assist a company in staying afloat and preventing so that it may be dealt with immediately</p>
                    </div>

                </div>
            </div>

            <div className="Mentors-container">
                <div className="Mentors">
                    <h1>Our mentors are experts in different fields </h1>
                </div>
                <div className="Brick-head">
                    <div className="brick">
                        <img src={left2} alt="" className="left-image" width="100%" />
                        <img src={left12} alt="" className="left-image" width="100%" />
                    </div>
                </div>
                <div className="Mentors-Head">
                    <div className="Mentors-text">
                        <img src={eighty} alt="" className="eighty-image" width="100%" />
                        <div className="Mentors-adam">
                            <h2>Sahledin Adam</h2>
                            <p>Head of power MTI</p>
                        </div>
                    </div>

                    <div className="Mentors-text">
                        <img src={eighties} alt="" className="eighty-image" width="100%" />
                        <div className="Mentors-adam">
                            <h2>Jessica Angel</h2>
                            <p>Senior Client Partner</p>
                        </div>
                    </div>

                    <div className="Mentors-text">
                        <img src={eighteen} alt="" className="eighty-image" width="100%" />
                        <div className="Mentors-adam">
                            <h2>Tommy Bells</h2>
                            <p>Director ACT</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Client-container">
                <div className="Client-text">
                    <h1>What’s Our Client Saying?</h1>
                    <p>We are trusted by numerous companies from different business to meet their needs.</p>
                </div>
                <div className="Client-heading">
                    <div className="Client-img">
                        <img src={sixty} alt="" className="eighty-image" width="100%" />
                    </div>
                    <div className="Client-head">
                        <div className="Client-two">
                            <img src={sixtfour} alt="" className="sixtfour-image" width="100%" />
                            <p>Working with Consuly to implement their strategic planning framework has helped us focus on the biggest opportunities for growth.</p>
                        </div>
                        <div className="Client-three">
                            <img src={sixtthree} alt="" className="sixtthree-image" width="100%" />
                        </div>
                        <div className="Client-four">
                            <h3>Maya Language</h3>
                            <p>Director ACT</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Route">
                <div className="Route-container">
                    <h1>Ready to change your business route</h1>
                    <p>Contact with us now and get the all effecient service on your door let's have a chat. Shall we?</p>
                    <div className="Route-text">
                        <input type="text" placeholder="Your email here" className="Route-input" />
                        <button className="Route-btn">Subscribe</button>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-container">
                    <div className="footer-seven">
                        <img src={seventeen} alt="" className="seventeen-image" width="100%" />
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="Company">
                        <h3>Our Company</h3>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Portfolio</p>
                        <p>Our services</p>
                    </div>
                    <div className="Evaluation">
                        <h3>Services</h3>
                        <p>Business Analysis</p>
                        <p>Strategic Planning</p>
                        <p>Business Consulting</p>
                        <p>Marketing Strategy</p>
                        <p>Experience Design</p>
                        <p>Audit & Evaluation</p>
                    </div>
                    <div className="newsletter">
                        <h3>Subscribe to our newsletter</h3>
                        <input type="text" placeholder="Your email here" className="newsletter-input" />
                        <button className="newsletter-btn">Subscribe</button>
                    </div>
                </div>
                <div className="footer-last">
                    <p>All Copyrights are reserved my Mamdou Ghaneemy</p>
                    <div className="Facebook">
                        <FaFacebook  className="twitter"/>
                        <CiLinkedin  className="twitter" />
                        <FaXTwitter  className="twitter" />
                        <FaInstagramSquare  className="twitter" />
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Brand;