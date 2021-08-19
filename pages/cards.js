import styles from "../styles/cards.module.css";
import Image from 'next/image';
import img1 from '../imges/img1.jpg';
import email from '../imges/email.png';
import call from '../imges/call.png';

const Cards = (props) => {
  let {Name, Role, Desig, Img}= props;
  return (
  <div className={styles.main}>
  <div className={styles.card}>
   <div  style={{flexDirection:'column'}}>
      <div>
      <text className={styles.Name}>{Name}</text>
      <text className={styles.role}>{Role}</text>
      </div>
      <text className={styles.desig}>{Desig}</text>
    </div>
    <div>
    <Image src={Img} alt="env" width={50} height={50} className={styles.img}/>
    </div>
    </div>
    <div className={styles.bottom}>
      <a className={styles.btn}>
      <Image src={email} alt="email" width={25} height={20}/>
      <text className={styles.btnTxt}>Email</text>
      </a>
      <div className={styles.verticleLine}/>
      <a className={styles.btn}>
      <Image src={call} alt="call" width={25} height={20}/>
      <text className={styles.btnTxt}>Call</text>
      </a>
    </div>
  </div>
  );
};

export default Cards;
