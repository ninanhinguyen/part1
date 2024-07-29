
const Header = ({courseName}) => {
	console.log(courseName)
return(
  <div>
    <p>Greetings to {courseName}</p>
  </div>
	)
}
const Content = ({courseContent}) => {
	console.log(courseContent)
		return(
	 <div>
    <p> In this course, you will learn {courseContent} </p>
  </div>
)
}
const Total = ({courseExerciseNumber}) => {
	console.log(courseExerciseNumber)
    return(
      <div>
        	<p> There's total {courseExerciseNumber} exercises </p>
      </div>
    )
	}
const App = () => {
  const courseName = 'Half Stack application development'
  const courseContent = 'Fundamentals of React, Using props to pass data, State of a component'
  const courseExerciseNumber = 10 + 7 + 14

return (
<div>
    <Header courseName = {courseName}/>
    <Content courseContent = {courseContent}/>
    <Total courseExerciseNumber = {courseExerciseNumber}/>
  </div>
)
}
export default App
