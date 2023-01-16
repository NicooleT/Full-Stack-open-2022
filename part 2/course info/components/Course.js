 
const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Parts parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };
  
  const Header = ({ name }) => {
    return (
    <h1>{name}</h1>
    )
  };

  const Parts = ({ parts }) => {
    return (
    <div>
        {parts.map((part) => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}
    </div>
    )
  };

  const Part = ({name, exercises}) => {
    return(
        <div>{name} {exercises} </div>
    )
  };

  const Total = ({parts}) => {
    const total = parts.reduce((accumulate, part) => {return accumulate + part.exercises;}, 0);
    return (
        <div>Total of {total} exercises</div>
    )
}
  
  export default Course;
