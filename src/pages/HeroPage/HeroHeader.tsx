import styles from "./HeroHeader.module.css";
import Button from "../../components/Button/Button"
import GirlImg from "../../assets/ethnic-girl-with-afro-hair-smiles-pleasantly-looks-curiously-wears-hoodie-removebg-preview.png"
import duolingo from "../../assets/duolingo-removebg-preview.png";
// import magicLeap from "../../assets/magicLeap-removebg-preview.png"

const HeroHeader = () => {
  return (
    <div>
      <div className={`${styles.hero_header} container`}>
      <div className={styles.hero_container}>
        {/* text */}
        <div className={styles.text_container}>
          <h1>Develop Your<br/> Skill in a New <br/>and Unique Way</h1>
          <p>Explore transformative approach to skill development on our online learning platform.
            Uncover a new realm of learning experiences and elevate your expertise in unique ways.
          </p>
          <div>
            <Button text="Enroll now" isFilled/>
          </div>
        </div>
        {/* img */}
        <div className={styles.img_container}>
          <div>
            <div>
              <img src={GirlImg} alt="img" />
            </div>
          </div>
          
        </div>
      </div>
      </div>
      {/* sponsors */}
        <div className={styles.sponsors}>
        <div className="container">
              <div><img src={duolingo} alt="alt" /></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
   </div>
    
   
  )
}

export default HeroHeader;