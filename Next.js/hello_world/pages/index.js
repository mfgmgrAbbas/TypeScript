import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>MetaVerse Developers</title>
      <meta name='keyword' content='blog'/>
    </Head>
    <div>
      <b><h1 className={styles.title}> Hello, World! </h1></b><br></br>
          <p>   I am Abbas Shah and I am a highly skilled developer with experience in a wide range of technologies. I am proficient in HTML and CSS, and have a strong understanding of web design principles. I have also worked extensively with TypeScript, building scalable and reliable applications.The metaverse is a concept that refers to a shared virtual space that is created by the convergence of virtually enhanced physical reality and physically persistent virtual space, including the sum of all virtual worlds, augmented reality, and the internet. It is often described as a virtual reality world that is shared by many users and that is created by the combination of real and virtual elements.<br></br>
                In addition, I am proficient in Python and have experience using it for data analysis and machine learning tasks. I am always looking to learn new skills and technologies, and am excited to apply my expertise to challenging projects. I am student of MetaVerse Web3.0 prestigious institution PIAIC. I am learning from <a className={styles.abouttext} href="https://www.linkedin.com/in/ziaukhan/" target="_blank"><b>CEO of Panacloud sir Zia Khan</b></a>, learning about the technologies and concepts that are shaping the future of the web and virtual reality. This field is rapidly evolving, and there are many exciting opportunities for those who are interested in exploring the potential of the metaverse and Web 3.0. </p><br></br>
          <h2>My Expertise are in Areas</h2><br></br>
          <ol><li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>MetaVerse Web3.0</li>
            </ol><br></br>
          <p> <h3>You can join us by visting our blog</h3> </p>
          <a className= {styles.btn}href="https://codespacehub.blogspot.com/" target="_blank">Developers Hub</a><br></br>
            {/* <link href ="https://codespacehub.blogspot.com/" >  */}
            {/* <a><h2 className={styles.btn}>Developers Hub</h2></a>
            </link> */}
            < Link href="/blog"><h3>See Blogs List</h3></Link>
    </div>
    </>
  )
}
