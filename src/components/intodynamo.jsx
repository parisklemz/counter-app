
// const ApiToTable = ({intoTable}) => {
//     var inputValue = document.getElementById("myInput").value;
   
//     return (
//    <div>
//         <input type="text" placeholder="Type a name..." id="myInput"></input>
//         <button type="button" onclick={intoTable(inputValue)} className="btn btn-primary btn-sm">Send into table!</button>
//     </div>
//    );
// };
// export default ApiToTable;

const intoDyno = () => {
    fetch('https://4kqjb4eqtl.execute-api.us-east-2.amazonaws.com/Dev/student', {
    method: 'POST',
    body: JSON.stringify({
      Student_ID: 'title',
      body: 'body',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));   
}
export default intoDyno;
