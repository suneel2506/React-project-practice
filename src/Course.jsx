import HTML from "./assets/HTML.png";
const Course1 = "HTML";
import PropTypes from "prop-types";
import CourseList from "./Courselist";
import { useState } from "react";

function Course(props) {
  // if (props.show){

  const [purchased, setpurchased] = useState("false");
  const [discount ,setDiscount] = useState(props.price);
  function Enroll(amt) {
    console.log(props.name + ":", "Enrolled", amt, "% discount applied");
    setpurchased("true");
    setDiscount(props.price  - amt);
  }

  return (
    // props.name &&
    <div className="cards">
      <img src={props.image} alt={props.altName} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{discount} </p>
      <button onClick={() => {Enroll(20);}}>Discount</button>
      <p>{purchased}</p>
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
