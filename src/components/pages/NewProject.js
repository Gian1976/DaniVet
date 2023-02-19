import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'


function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        //initialize clinica and services
        project.vet = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate ('/Projects',{message:'Cadastro realizado com sucesso'})

            })
            .catch((err) => console.log(err))
    }

    return (
        
        <div className={styles.newproject_container}>

            <ProjectForm handleSubmit={createPost} btnText="Enviar Dados" />
           
        </div>
    )
}

export default NewProject