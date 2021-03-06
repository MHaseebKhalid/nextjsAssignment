import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Buttons from './buttons';
import Cards from './cards';
import BigCards from './bigcards';

import img1 from '../imges/img1.jpg';
import img2 from '../imges/img2.jpg';
import img3 from '../imges/img3.jpg';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* buttons div */}
      <h1>Buttons</h1>
      <div className={styles.btnContainer}>
      <Buttons btnText="Button text" Icon={false}/>
      <Buttons btnText="Button text" Icon={true} IconLeft={false}/>
      <Buttons btnText="Button text" Icon={true} IconLeft={true}/>
      </div>

        {/* Card1 div */}
      <h1>Cards 1</h1>
      <div className={styles.card1Container}>
        <Cards Name="Jane fisher" Role="Admin" Desig="Reginional paragidm Technician" Img={img1}/>
        <Cards Name="Jenny fisher" Role="Admin" Desig="Product Directive officer" Img={img2}/>
        <Cards Name="Jane Wilson" Role="Admin" Desig="Reginional paragidm Technician" Img={img3}/>
        <Cards Name="Jane foster" Role="Admin" Desig="Product Directive officer" Img={img2}/>
        <Cards Name="Jenyy fisher" Role="Admin" Desig="Product Directive officer" Img={img3}/>
        <Cards Name="Jane fisher" Role="Admin" Desig="Reginional paragidm Technician" Img={img1}/>
      </div>

      {/* Card2 div */}
      <h1>Cards 2</h1>
      <div className={styles.card1Container}>
        <BigCards Name="Jane fisher" Role="Admin" Desig="Reginional paragidm Technician" Img={img1}/>
        <BigCards Name="Jane foster" Role="Admin" Desig="Product Directive officer" Img={img2}/>
        <BigCards Name="will fisher" Role="Admin" Desig="Reginional paragidm Technician" Img={img3}/>
        <BigCards Name="Jake fisher" Role="Admin" Desig="Product Directive officer" Img={img2}/>
        <BigCards Name="Jane fisher" Role="Admin" Desig="Reginional paragidm Technician" Img={img3}/>
        <BigCards Name="Nelson fisher" Role="Admin" Desig="Product Directive officer" Img={img1}/>
        <BigCards Name="Rocky fisher" Role="Admin" Desig="Reginional paragidm Technician" Img={img2}/>
        <BigCards Name="Jenny fisher" Role="Admin" Desig="Product Directive officer" Img={img3}/>
      </div>
      </main>
    </div>
  )
}
