import styles from "../styles/buttons.module.css";
import Image from 'next/image';
import envelope from '../imges/envelope.png';

const Buttons = (props) => {
  return(
    <a onClick={()=>alert('Button clicked')} className={styles.btn} style={{flexDirection:props.IconLeft?'row-reverse':'row'}}>
      <text className={styles.txt}>{props.btnText}</text>
      {
        props.Icon &&
        <Image src={envelope} alt="env" width={30} height={25}/>
      }
    </a>
  ); 
};

export default Buttons;
