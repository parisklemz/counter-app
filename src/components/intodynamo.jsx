
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

const IntoDynoTable = ({IntoDynamo}) => {
    return (
        <div className="button-api">
          <div class="mt-4">
            <button 
            class="
            text-blue-500 
            hover:text-white 
            hover:bg-blue-500 
            border border-blue-500 
            text-xs 
            font-bold 
            rounded-full 
            px-4 py-1 
            leading-normal"
            >
                Send Data!
            </button>
            </div>
        </div>
    );
}
export default IntoDynoTable;
