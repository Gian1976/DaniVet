import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'
//import Container from './Container'
function Footer() {
    return (


        <div>

            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>

            <p className={styles.copy_right}>
                <span><strong>DaniVet</strong> &copy; 2022</span>
            </p>
            
        </div>
       
    )
}
export default Footer