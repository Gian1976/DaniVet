import { useEffect, useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'



function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    const [races, setRaces] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/races', {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        })

            .then((resp) => resp.json())
            .then((data) => {
                setRaces(data)
            })


            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)


    }

    function handleChange(e) {
        setProject({
            ...project,
            [e.target.name]:
                e.target.value,
        })

    }
    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }
    function handleBreed(e) {
        setProject({
            ...project, breed: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>


            <Input type="text"
                text="Nome"
                name="name"
                placeholder="Insira o nome"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''} />


            <Input type="number"
                text="Idade"
                name="idade"
                placeholder="Insira a idade"
                handleOnChange={handleChange}
                value={project.idade ? project.idade : ''} />


            <Select name="category_id"
                text="Espécie"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''} />

            <Select name="breed_id"
                text="Raça"
                options={races}
                handleOnChange={handleBreed}
                value={project.breed ? project.breed.id : ''} />

            <SubmitButton text={btnText} />




        </form>
    )
}

export default ProjectForm