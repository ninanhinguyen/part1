
const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercise1 = 10
	const part2 = 'Using props to pass data'
	const exercise 2 = 7
	const part3 = 'State of a component'
	const exercise3 = 14

	return (
		<>
			<h1{course}</h1>
		<p>
		{part1} {exercise1}
		</p>
		<p>
		{part2} {exercise2}
	</p>
		<p>
		{part3} {exercise3}
	</p>
		<p> Number of exercise {exercise1 + exercise2 + exercise3}</p>
	</>
	)
		
}
export default App
