import styles from "./Navbar.module.css";
import logo from "../../assets/b88a4c76e64743c5b10786aa1b66404b-free.png"
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import Button from "../Button/Button";

const Navbar = () => {
  return (
      <nav>
          <div className={`${styles.navbar_container} container`}>
              
              {/* logo */}
              <div className={styles.logo}>
                  <img src={logo} alt="logo" />
                  <h1>BtB</h1>
              </div>

              {/* nav_links */}
              <ul className={styles.nav_links}>
                  <li><NavLink to={"/"}>Home</NavLink></li>

                  {/* courses */}
                  <li className={styles.head}>
                      <div style={{display:"flex",alignItems:"center"}}><span>Courses</span><IoIosArrowDown/></div>
                      <ul className={styles.dropdown_list}>
                          <li><NavLink to={"/courses"}>Frontend Development</NavLink></li>
                          <li><NavLink to={"/courses"}>Backend Development</NavLink></li>
                          <li><NavLink to={"/courses"}>FullStack Development</NavLink></li>
                          <li><NavLink to={"/courses"}>Networking</NavLink></li>
                      </ul>
                  </li>

                  {/* teachers */}
                  <li className={styles.head}>
                      <div style={{display:"flex",alignItems:"center"}}><span>Teachers</span><IoIosArrowDown/></div>
                      <ul className={styles.dropdown_list}>
                          <li><NavLink to={"/courses"}>Frontend Development</NavLink></li>
                          <li><NavLink to={"/courses"}>Backend Development</NavLink></li>
                          <li><NavLink to={"/courses"}>FullStack Development</NavLink></li>
                          <li><NavLink to={"/courses"}>Networking</NavLink></li>
                      </ul>
                  </li>

                  {/* offers */}
                  <li className={styles.head}>
                      <div style={{display:"flex",alignItems:"center"}}><span>Offers</span><IoIosArrowDown/></div>
                      <ul className={styles.dropdown_list}>
                          <li><NavLink to={"/courses"}>Frontend Development</NavLink></li>
                          <li><NavLink to={"/courses"}>Backend Development</NavLink></li>
                          <li><NavLink to={"/courses"}>FullStack Development</NavLink></li>
                          <li><NavLink to={"/courses"}>Networking</NavLink></li>
                      </ul>
                  </li>
                  <li><NavLink to={"/contact"}>Contact</NavLink></li>

              </ul>

              {/* buttons */}
              <div className={styles.nav_buttons}>
                  <span style={{marginRight:'10px'}}><Button text="Sign in" /></span>
                  <Button text="Free trial" isFilled/>
              </div>

              {/* menuBtn */}
              <div className={styles.menuBtn}>
                  <IoIosMenu size={28}/>
              </div>
          </div>
    </nav>
  )
}

export default Navbar