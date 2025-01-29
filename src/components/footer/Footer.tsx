import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer_container} container`}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
          <h3>BtB</h3>
          <p style={{padding:"0.5rem 0"}}>Explore a transformative approach to skill development on our online learning platform</p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"30%"}}>
            <FaFacebook />
            <FaWhatsapp />
            <FaTwitter/>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><NavLink to="about">About Us</NavLink></li>
            <li><NavLink to="services">Services</NavLink></li>
            <li><NavLink to="community">Community</NavLink></li>
            <li><NavLink to="testimonial">Testimonials</NavLink></li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li><NavLink to="help">Help Center</NavLink></li>
            <li><NavLink to="tweet">Tweet@Us</NavLink></li>
            <li><NavLink to="webinars">Webinars</NavLink></li>
            <li><NavLink to="feedback">Feedback</NavLink></li>
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li><NavLink to="courses">Courses</NavLink></li>
            <li><NavLink to="becometeacher">Become Teacher</NavLink></li>
            <li><NavLink to="services">Service</NavLink></li>
            <li><NavLink to="/">All in one</NavLink></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li><NavLink to="tel" >+233 546 684 004</NavLink></li>
            <li><NavLink to="email" >siehrichmond50@gmail.com</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer