let empid=document.getElementById("empid");
let empname=document.getElementById("empname");
let empage=document.getElementById("empage");
let empemail=document.getElementById("empemail");
let savebtn=document.getElementById("savebtn");

empid.addEventListener('input',(e)=>{
    empid.textContent=e.target.value;
})
empname.addEventListener('input',(e)=>{
    empname.textContent=e.target.value;
})
empage.addEventListener('input',(e)=>{
    empage.textContent=e.target.value;
})
empemail.addEventListener('input',(e)=>{
    empemail.textContent=e.target.value;
})
savebtn.addEventListener('click',(event)=>{
    event.preventDefault();
    // document.getElementById("tableid").innerHTML=empid.textContent;
    // document.getElementById("tablename").innerHTML=empname.textContent;
    // document.getElementById("tableage").innerHTML=empage.textContent;
    // document.getElementById("tableemail").innerHTML=empemail.textContent;
    addRow();
    
    
})


function addRow() {
      // Get the table element in which you want to add row
      let table = document.getElementById("myTable");
   
      // Create a row using the inserRow() method and
      // specify the index where you want to add the row
      let row = table.insertRow(-1); // We are adding at the end
   
      // Create table cells
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
   
      // Add data to c1 and c2
      c1.innerText = empid.textContent;
      c2.innerText = empname.textContent;
      c3.innerText = empage.textContent;
      c4.innerText = empemail.textContent;
     empid.value= "";
   }
