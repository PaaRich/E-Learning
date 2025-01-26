import styles from "./Navbar.module.css";
import logo from "../../assets/b88a4c76e64743c5b10786aa1b66404b-free.png"
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

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
              <div className={styles.nav_links}>
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"courses"}><span>Courses</span><IoIosArrowDown/></NavLink>
                  <NavLink to={"teachers"}><span>Teachers</span><IoIosArrowDown/></NavLink>
                  <NavLink to={"offers"}><span>Offers</span><IoIosArrowDown/></NavLink>
                  <NavLink to={"contact"}>Contact</NavLink>
              </div>

              {/* buttons */}
              <div className={styles.nav_buttons}>
                  <button type="submit">Sign in</button>
                  <button type="submit">Free trial</button>
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