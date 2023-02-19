import { useLocation } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'
import Message from '../layout/Message'


function Projects() {


    const location = useLocation()
    let message = 'Cadastro realizado com sucesso!'
    if (location.state) {
        message = location.state.message
    }

    return (

        <div>

            <section className={styles.projects_container}>
                <LinkButton to="/newproject" text="Preencha" />

            </section>

            {message && <Message type="success" msg={message}/>}
        </div>

    
    )
}
export default Projects