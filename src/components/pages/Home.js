import styles from './Home.module.css'
import vet from '../img/pets2.jpg'



function Home() {

    return (

            <section className={styles.home_container}>

                <h1>
                    Bem-vindo a <span> <strong> DaniVet</strong></span>
                </h1>
                <p><strong>Esta é a sua Clínica Veterinária!</strong></p>
                

                <img src={vet} alt="DaniVet" />

            </section>
     
    )
}
export default Home