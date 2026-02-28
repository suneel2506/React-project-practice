import Course from './Course'
import HTML from "./assets/HTML.png"
import CSS from "./assets/CSS.png"
import JS from "./assets/JS.png"

function CourseList() {
        const courses =[
        {
            id :1,
            name: "HTML",
            description: "This is code io HTML Course",
            image: HTML,   
            price: 100
        },
        {
            id :2,
            name: "CSS",
            description: "This is code io CSS Course",
            image: CSS,  
            price: 150
        },
        {
            id :3,
            name: "JavaScript",
            description: "This is code io JavaScript Course",
            image: JS,    
            price: 200
         },
         {
            id :4,
            name: "React ",
            description: "This is code io React Course",
            image: HTML,    
            price: 250
         },
         {
            id :5,
            name :"NodeJS",
            description: "This is code io Node JS Course",
            image: JS,    
            price: 300
         }

    ]
     courses.sort((x,y) => y.price -x.price)

    const coursesList = courses.map((course,index)=>
    <Course 
    id={index}
    name={course.name}
     description={course.description} 
     image={course.image} 
     price={course.price} />
    )
    return(

        <>
            {coursesList}
        </>

    );
}

export default CourseList