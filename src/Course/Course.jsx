import styles from "./Course.module.css"

const Course1 ="HTML";

function Course() {
    return (
        <center>
        <div className ={styles.card} >
            <img src="" alt="Course Image" />
            <h3>{Course1}</h3>
            <p>This is code io HTML Course</p>
        </div>
        </center>
    );
}

export default Course;