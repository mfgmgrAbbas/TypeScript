// import styles from '../styles/job.module.css';
// import styles from '../styles/job.module.css'
// import styles from '../styles/Home.module.css'
// import Navbar from '../../comps/Navbar';
import Link from 'next/link'

// export const getStaticProps = async () => {

//     const res = await fetch ('https://jsonplaceholder.typicode.com/users');
// const data = await res.json()

// return {
//     props: {blogs:data}
// }

// }


const Blogs = ({blogs}) => {
    return ( 
        <div>
            <h1>Blogs List</h1>
            <ol>
                <li><a href="https://codespacehub.blogspot.com/" target="_blank">Developers Hub</a><br></br></li>
                <li><a href="https://invigoratingtips.blogspot.com/" target="_blank">French Blog</a><br></br></li>
                <li><a href="https://freetoptraffic.blogspot.com/" target="_blank">Free Trafic Gen</a><br></br></li>
                <li><a href="https://www.ysense.com/?rb=59703673" target="_blank">Paying since long</a><br></br></li>
            </ol>
            {/* {blogs.map(blog => (
                //  <Link href={'/blog' + blog.id} key={blog.id}>
                
                <a>
                    <h3>{blog.id}</h3>
                </a>
                // <Link />
            ))} */}
           
        </div>
     );
}
 
export default Blogs;