import styles from './Container.module.css'

function Container (props) {
    return (
        <div className={`${styles.Container}${styles[props.customClass]}`}>{props.Children}</div>
    )

}
export default Container