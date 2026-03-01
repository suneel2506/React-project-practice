import HTML from "./assets/HTML.png";
const Course1 = "HTML";
import PropTypes from "prop-types";
import CourseList from "./Courselist";
import { useState } from "react";

function Course(props) {
  // if (props.show){

        const [purchased , setpurchased] = useState(false)
        function Enroll(discount){
            console.log(props.name + ":","Enrolled", discount ,"% discount applied");
            setpurchased(true);
            
    }
    
  return (
    // props.name &&
    <div className="cards">
      <img src={props.image} alt={props.altName} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price} </p>
      <button onClick={() => {Enroll(20)}}>Enroll Now</button>
      <p>{purchased ? "Already purchases" : "Get it now "}</p>

    </div>
  );


  //     // }
  //     // else {
  //     //     return (
  //     //      <div className="cards">Course Not Available</div>
  //     //     );
  //     // }

  // }

  // // Course.defaultProps ={
  // //     image : HTML,
  // //     name : Course1
  // // }

  // // Course.propTypes = {
  // // name : PropTypes.string,
  // // description : PropTypes.string,
  // // image : PropTypes.string,
  // // price : PropTypes.number
}

export default Course;
