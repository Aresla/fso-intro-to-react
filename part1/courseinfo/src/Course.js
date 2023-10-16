const CourseName = ({name}) => {
    return(
      <h2>{name}</h2>
    )
  }
  
  const CoursePart = ({name, exercises}) => {
    return(
      <p>{name} {exercises}</p>
    )
  }
  
  export const Course = ({course}) => {
    const total = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0,)
    return(
      <div>
        <CourseName name ={course.name}/>
        {course.parts.map(part => 
            <CoursePart key={part.id} name={part.name} exercises ={part.exercises}/>
          )}
        <h4>Total of {total} exercises</h4>  
      </div>
    )
  }
