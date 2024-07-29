// // const App = () => {
//   const now = new Date()
// const a = 4800
// const c = " "
// const b = 7000
// console.log(now, b/a)
//   return (
//     <div>
//       <p>so today at {now.toString()}i study js vaf duma minh ton thoi gian vcl</p>
//       <p>
//         {a} {b}
// <p></p>
//         {b/a}
//       </p>
//     </div>
//   )
// }
// export default App

const Page = () => {
  const date = new Date ()
  const today = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const a = "day 4"
  const b = "code studying"
  const c = "#learningbydoing"
console.log(today, currentMonth, a + " " + b + " "+ c)
return (
  <div>
    <p>
    {a} {b} {c}
    </p>
<p> Hi its Nina here {today.toString().length} {currentMonth.toString()} yeahhhh</p>
  </div>
) }
export default Page
