// const App = () => {
//   const date = new Date ()
//   const today = date.getDate();
//   const currentMonth = date.getMonth() + 1;
//   const a = "day 4"
//   const b = "code studying"
//   const c = "#learningbydoing"
// console.log(today, currentMonth, a + " " + b + " "+ c)
// return (
//   <div>
//     <p>
//     {a} {b} {c}
//     </p>
// <p> I am writing Javascript {today.toString().length} {currentMonth.toString()} yeahhhh</p>
//  <p>The index.html load first the browser reads the HTML structure from top to toe</p> 
//  <p>The browser sees the <strong>Script tag</strong> and goes to the address - main.jsx - from the <strong> src attribute </strong> </p>
// <p>At <strong>the main.jsx</strong> the browser <strong>imports React, ReactDOM, App</strong></p>
// <p>Then the browser <strong>calls the function createRoot of class ReactDOM</strong></p>
// <p>The <strong>createRoot takes a param</strong>, which is a HTML element. I assign HTML element to elem</p>
// <p>Then ReactDOM finds the HTML element with an id of '123' and render App component into <strong> HTML element with id = '123'</strong> </p>
//   </div>
// ) }

// export default App


// new component hello
// a component can be used multiple time like below
// a const hello represents a React component
// the return calls repeat 3 time the component so 3 times hello world appear
//  const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello/>
//       <Hello/> 
//       <Hello/>
//       </div>
//   )
// }
// export default App

// passing data to component using parameter props
// props can be changed the name into something else and doesnt affect the code and its not hard coded
// There can be an arbitrary number of props and their values can be "hard-coded" strings or the results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.


const HelloComponent = (prop) => {
  console.log(prop) //this logs the props object to the console that allows to see what data is being passed to the Hello
  return (
    <div>
      <p>
        Hello {prop.name}, today is {prop.dayCount} {prop.studyDay} code self-learning
      </p>
    </div>
  )
}
const App = () => {
  const name = 'mylove' //name, age is the variable with the value Chuong
  const dayCount = '5 days into'

  return (
    <>
      <h1>Greetings</h1>
      
      {/* passing data to component using parameter props */}
      <HelloComponent name = 'everyone' studyDay = 'day 5th of'/> 
      <HelloComponent name = {name} dayCount = {dayCount} />  
    </>
  )
}
// The props sent by the component App are the values of the variables, the result of the evaluation of the sum expression and a regular string.

export default App

// THISISNHI
// thisisnhi
// this is nhi
// thisIsNhi