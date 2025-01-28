import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer_container} container`}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
          <h3>BtB</h3>
          <p>Explore a transformative approach to skill development on our online learning platform</p>
          <div style={{display:"flex",alignItems:"center"}}>
            <FaFacebook />
            <FaWhatsapp />
            <FaTwitter/>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer