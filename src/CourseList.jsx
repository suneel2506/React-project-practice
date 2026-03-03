import Course from "./Course";
import { useState ,useEffect} from "react";

function CourseList() {
  const [courses,setCourses] =useState(null);
  //  courses.sort((x,y) => y.price - x.price)
  //  const vfmCourses = courses.filter((course) => course.price<250)
 
  useEffect(() =>{
    fetch("http://localhost:3000/courses")
    .then((responce)=>{
      console.log(responce);
      return responce.json();
    }).then(data =>setCourses(data));
  },[]);

  function handleDelete(id){
    const newCourses = courses.filter((course) => course.id != id);
    setCourses(newCourses); 
  }

    if (!courses){
      return <></>
    } 

  const coursesList = courses.map((course) => (
    <Course
      key={course.id}
      name={course.name}
      description={course.description}
      image={course.image}
      price={course.price}
      delete ={handleDelete}
      id ={course.id}
 
    />
  ));
  return <>{coursesList}
         
  </>;

}
export default CourseList;
