import Head from "next/head";
import styles from '../styles/Home.module.css'
    

const About = () => {
    return ( 
      <>
      <Head>
      <title>MetaVerse Developers!</title>
      <meta name='keyword' content='blog'/>
    </Head>
        <div>
            <b><h1> MetaVerse Developers </h1></b><br></br>
          <p>Welcome to [Metaverse Web 3.0 Developer], the premier destination for developers looking to build and explore the cutting-edge world of Web 3.0.

We are a team of experienced developers and industry experts who are passionate about the potential of Web 3.0 to revolutionize the way we interact, connect, and create online. Whether you're just starting out in the world of metaverses or you're a seasoned pro, we're here to help you bring your ideas to life in this exciting new frontier.

Our platform includes a wide range of resources and tools for developers, including tutorials, documentation, and community support. We also offer a range of educational resources, including webinars and workshops, to help developers stay up-to-date with the latest technologies and best practices.

We believe that the future of the internet is decentralized and immersive, and we're dedicated to supporting developers as they build the metaverse of tomorrow. Thank you for joining us on this journey, and we look forward to collaborating with you!</p>
          
          <p> Don't forget to vist our latest Blogs </p><br></br>
          <p> <h2>Our Latest Blogs</h2><br></br>
          <ol><li><a className= {styles.link}href="https://codespacehub.blogspot.com/" target="_blank">Developers Hub</a></li><br></br>
            <li><a className= {styles.link}href="https://invigoratingtips.blogspot.com/" target="_blank">French Blog</a></li><br></br>
            <li><a className= {styles.link}href="https://freetoptraffic.blogspot.com/" target="_blank">Free Trafic Generator</a></li><br></br>
            <li><a className= {styles.link}href="https://www.ysense.com/?rb=59703673" target="_blank">ySense</a></li>
            </ol></p><br></br>
          <p> <h3>You can join us by visting our blog</h3> </p>
          <a className= {styles.btn}href="https://codespacehub.blogspot.com/" target="_blank">Developers Hub</a>
            {/* <link href ="https://codespacehub.blogspot.com/" >  */}
            {/* <a><h2 className={styles.btn}>Developers Hub</h2></a>
            </link> */}
        </div>
        </>
     );
}
 
export default About;