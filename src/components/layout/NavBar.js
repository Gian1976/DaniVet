import { Link } from "react-router-dom"

//import Container from "./Container"
import styles from './NavBar.module.css'
import logo from '../img/logo-pata4.jpg'

function NavBar() {
    return (

        <div>


            <nav className={styles.navbar}>
                <Link to="/">
                    <img src={logo} alt="DaniVet" /></Link>
                <strong><h2>DaniVet</h2></strong>
                <strong><h3>Clínica Veterinária</h3></strong>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/Home">Home</Link></li>
                    <li className={styles.item}><Link to="/Projects">Cadastro</Link></li>
                    <li className={styles.item}><Link to="/Company">Empresa</Link></li>
                    <li className={styles.item}><Link to="/Contact">Contato</Link></li>

                </ul>
            </nav>


        </div >

    )
}
export default NavBar