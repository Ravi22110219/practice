import React, { Component } from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaYoutube, FaTelegram  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { ImMobile } from "react-icons/im";
import { IoMailOpenOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


class FooterSection extends Component {
  render() {
    return (
      <section className={styles.footer} id="footer">
        <div className={styles.footerContents}>
          <div className={`${styles.footerCol} ${styles.footerCol1}`}>
            <div className={styles.colTitle}>
              <h4>About Us</h4>
              
            </div>
            <hr className={styles.hrLine} />
           
            <div className={styles.colContents}>
              <ul>
                <li><NavLink to={"/aboutUs/infiniteEduVerse"}>About Infinite EduVerse</NavLink></li>
                <li><NavLink to={"/aboutUs/directorsAndTeachers"}>Director's Message</NavLink></li>
                <li><NavLink to={"./aboutUs/ourMotivation"}>Our Motivation</NavLink></li>
                <li><a href="#">About System</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol2}`}>
            <div className={styles.colTitle}>
              <h4>Courses & Batch</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><NavLink to={"/course&batch"}>JEE(Main + Adv.) IIT-JEE</NavLink></li>
                <li><NavLink to={"/course&batch"}>JEE Main</NavLink></li>
                <li><NavLink to={"/course&batchneet"}>Medical (NEET-UG)</NavLink></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol3}`}>
            <div className={styles.colTitle}>
              <h4>Results</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><NavLink to={"/result"}>JEE(Main + Adv.) IIT-JEE</NavLink></li>
                <li><NavLink to={"/result"}>JEE Main</NavLink></li>
                <li><NavLink to={"/result"}>Medical (NEET-UG)</NavLink></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol4}`}>
            <div className={styles.colTitle}>
              <h4>Exams Information</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">About Infinite EduVerse</a></li>
                <li><a href="#">Director's Message</a></li>
                <li><a href="#">Our Motivation</a></li>
                <li><a href="#">About System</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerPart2}>
          <div className={styles.footerLogo}>
            <div className={styles.socialMediaAccounts}>
              <ul className={styles.socialUl}>
                <li><a href="https://t.me/infiniteacademysikar" target="main" className={styles.telegram}><FaTelegram className="fab fa-telegram" style={{color:"#1DA1F2",marginLeft:"5px",marginTop:"5px"}} />
               </a></li>
                <li><a href="https://www.facebook.com/InfiniteAcademySikar" target="main" className={styles.facebook}><FaFacebook className="fab fa-facebook" style={{color:"#2867B2",marginLeft:"5px",marginTop:"5px"}}/></a></li>
                <li><a href="https://instagram.com/infiniteeduversesikar" target="main" className={styles.instagram}><RiInstagramFill className="fab fa-instagram" style={{color:"#E1306C",marginLeft:"5px",marginTop:"5px"}} /></a></li>
                <li><a href="https://twitter.com/infiniteeduversesikar" target="main" className={styles.twitter}><FaSquareXTwitter className="fab fa-twitter" style={{color:"#2867B2",marginLeft:"5px",marginTop:"5px"}} />
                </a></li>
                <li><a href="https://www.youtube.com/@InfiniteEduVerse" target="main" className={styles.youtube}><FaYoutube className="fab fa-youtube" style={{color:"#ff0000",marginLeft:"5px",marginTop:"5px"}} />
                </a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerPart2Col}>
            <div className={styles.footerPart2Col1}>
              <div className={styles.imgIcon}><PiBuildingApartmentFill className={styles.addressIcon}/></div>
              <div className={styles.footerPart2ColContent}>
                <div className={styles.footerPart2Heading}>
                  <h3>Address</h3>
                </div>
                <p>JANKI TOWER, Piprali Road, Sikar (Raj.) <br />Pincode no. 332001</p>
              </div>
            </div>
            <div className={styles.footerPart2Col2}>
              <div className={styles.imgIcon}><ImMobile className={styles.addressIcon}/></div>
              <div className={styles.footerPart2ColContent}>
                <div className={styles.footerPart2Heading}>
                  <h3>Contact Us</h3>
                </div>
                <p>+91 72-4040-9797, +91 72-4040-9898<br /><span className='text-blue-600 hover:text-white'>(08:00 AM to 08:00 PM)</span></p>
              </div>
            </div>
            <div className={styles.footerPart2Col3}>
              <div className={styles.imgIcon}><IoMailOpenOutline className={styles.addressIcon}/></div>
              <div className={styles.footerPart2ColContent}>
                <div className={styles.footerPart2Heading}>
                  <h3>Send a Message</h3>
                </div>
                <a className='text-gray-200'>infiniteacademysikar@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyRights}>
          <p><a href="#">Terms of Use | Privacy Policy </a></p>
          <p>Created By <a href="https://ravi22110219.github.io/BidsukTechnoCreation/" className={styles.bidsukCompany}><b>Bidsuk Company</b></a> <span className="far fa-copyright"></span> 2024 All rights reserved.</p>
        </div>
      </section>
    );
  }
}

export default FooterSection;
