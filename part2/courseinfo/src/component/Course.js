

const Header = ({ course }) => {

  return (
    <h2>{course.name}</h2>   
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((s, p) => {
    console.log(s, p.exercises);
    return s + p.exercises 
  }, 0) 

  return(
    <h4>TOTAL EXERCISES {sum}</h4>
  ) 
}

const Part = (props) => {
  
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  
  return (
    <div>
      
      {parts.map(part => (
        <Part key={part.id} part={part} />
        
      ))}
    </div>
    
  )
}

const CoursesHead = ({ course }) => {
  return (
    <div>
    <Header course={course[0]} />
    <Content parts={course[0].parts} />
    <Total parts={course[0].parts} />
  </div>
  )
}

const CoursesHead2 = ({ course }) => {
  return (
    <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      
      {course.map(name => (
        <CoursesHead2 key={name.id} course={name} />
        
      ))}

    </div>
  )
}

export default Course