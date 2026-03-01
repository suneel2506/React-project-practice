import Course from "./Course";
import { useState ,useEffect} from "react";

function CourseList() {
  const [courses,setCourses] =useState(null);
  //  courses.sort((x,y) => y.price - x.price)
  //  const vfmCourses = courses.filter((course) => course.price<250)
  useEffect(() =>{
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((responce)=>{
      console.log(responce);
      return responce.json();
    }).then((data) =>console.log(data))
  });

  function handleDelete(id){
    const newCourses = courses.filter((course) => course.id != id);
    setCourses(newCourses); 
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
