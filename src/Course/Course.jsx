import styles from "./Course.module.css"
import HTML from "./HTML.png"
const Course1 ="HTML";


function Course(props) {
    return (
        
        <div className ={styles.cards} >
            <img src={props.image} alt={props.altName} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
                <p> Fee :{props.price} </p>
        </div>

    );
}

// Course.defaultProps ={
//     image : HC
// }

export default Course;