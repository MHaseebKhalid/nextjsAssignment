import styles from "../styles/bigcards.module.css";
import Image from 'next/image';
import img1 from '../imges/img1.jpg';
import email from '../imges/email.png';
import call from '../imges/call.png';

const BigCards = (props) => {
  let {Name, Role, Desig, Img}= props;
  return (
  <div className={styles.main}>
  <div className={styles.card}>
      <Image src={Img} alt="env" width={150} height={150} className={styles.img}/>
      <div className={styles.nameContainer}>
      <text className={styles.Name}>{Name}</text>
      <text className={styles.desig}>{Desig}</text>
      <text className={styles.role}>{Role}</text>
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

export default BigCards;
