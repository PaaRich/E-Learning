import { ButtonProps } from "../../types";
import styles from "./Button.module.css";

const Button = ({isFilled,text}:ButtonProps) => {
  return (
      <button className={`${styles.button} ${isFilled && styles.bgFilled}`} >{ text }</button>
  )
}

export default Button