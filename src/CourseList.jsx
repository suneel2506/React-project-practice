import HTML from "./assets/HTML.png"
import CSS from "./assets/CSS.png"
import JS from "./assets/JS.png"
import Course from "./Course"




function CourseList (){

    const courses =[
    {
        name : "HTML",
        description : "This is code io HTML Course",
        image : HTML,
        price : "$100"
    },
    {
        name : "CSS",
        description : "This is code io CSS Course",
        image : CSS,
        price : "$120"
    },
    {
        name : "JavaScript",
        description : "This is code io JavaScript Course",
        image : JS,
        price : "$150"
    }
]
    const courseList = courses.map(
        (course) =>
         <Course name ={course.name} 
        description={course.description}
         image={course.image}
          price={course.price} />
    )
    return(
        <>
        {courseList}
        <div>hello</div>
        </>
        

    );
}

export default CourseList;