const table=[
    {
        name:"Ananthi",
        father_name:"Chithambaram",
        age: "20",
        roll_no:"101",
        role:"Developer",
    },
    {
        name:"Deepika",
        father_name:"Ravi",
        age: "21",
        roll_no:"102",
        role:"Fashion_Designer",
    },
    {
        name:"Alagu",
        father_name:"Charman",
        age: "22",
        roll_no:"103",
        role:" App_developer",
    },
    // {
    //     name:"bakiya",
    //     father_name:"Moorthy",
    //     age: "19",
    //     roll_no:"112",
    //     role:"PHP_developer",
    // },
    {
        name:"raju",
        father_name:"Moorthy",
        age: "19",
        roll_no:"110",
        role:"PHP_developer",
    },
    {
        name:"Karuna",
        father_name:"Moorthy",
        age: "19",
        roll_no:"104",
        role:"PHP_developer",
    },
    {
        name:"kowshik",
        father_name:"Siva",
        age: "22",
        roll_no:"105",
        role:"App_developer",
    },
    {
        name:"Anand",
        father_name:"Elumalai",
        age: "23",
        roll_no:"106",
        role:"Senior_App_developer",
    },
    {
        name:"Raji",
        father_name:"Mr.A",
        age: "20",
        roll_no:"107",
        role:"Senior_PHP_developer",
    }
]

    // var data=pagination(state.queryset,state.rows,state.page)
    //       console.log("data",data)
// ............................name sorted......................................
// const sorted = (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
// table.sort(sorted);
//  console.log("table_sorted ", table);
// ..................................................
const table_header=Object.keys(table[0]);
console.log(table_header);
// ['name', 'father_name', 'age', 'roll_no', 'role']

// html file..................................................
const input_search=document.getElementById("input");
const output=document.getElementById("result");


window.addEventListener("DOMContentLoaded",Data_storage);
// input_search.addEventListener("input",search)

// ......................................................................
function Data_storage(){
//  console.log("ready to load")
    let row_head =`<table> 
    <tr>
    <th onclick="sort()">Name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
    <th onclick="fathername_sort()">Father_Name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
    <th>Age</th>
    <th>Roll_No</th>
    <th onclick="role_sort()">Role<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>`

    // table_header.forEach(header=> row_head+=`<th onclick="sort()">${header.toUpperCase()}</th>`);
    
    row_head+=`</tr>`;
    // output.innerHTML= row_head;
    // console.log(row_head)
    // ............pagination......................................................................................................................
    var data=pagination(state.queryset,state.rows,state.page)
    console.log("data",data)
    // <table> <tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
 var table = data.queryset;
 console.log("data.queryset", data.queryset,"data.pages", data.pages)
//  .............................................................................................................................................................
   console.log("state.queryset",table)
    table.forEach(row=> {
       row_head +=`<tr>
         <td>${row.name}</td>
         <td>${row.father_name}</td>
         <td>${row.age}</td>
         <td>${row.roll_no}</td>
         <td>${row.role}</td>
         </tr>`
        })

    row_head +=`</table>`
    output.innerHTML= row_head;
  button(data.pages)
    //  console.log(row_head)
}
// ..............................................................................................

// ................................basic rules...................................
var state={
    "queryset":table,
     "rows":2,
     "page":1
} 
// console.log("state.queryset", state.queryset)
function pagination(queryset, rows, page){
 console.log("pagination working")
       var start=(page-1)*rows;
       var end=start+rows;
       var trim_Data= queryset.slice(start,end);
       var page=Math.ceil(queryset.length/rows);
console.log("start",start)
console.log("end",end)
console.log("trim_Data",trim_Data)
console.log("pages",page)

       return{
         "queryset":trim_Data,
         "pages":page,
       }
}
// ...............................................................
function button(pages){
console.log("button working")
var page_button= document.getElementById("pagination");
page_button.innerHTML=" ";
    for(var page=1; page<=pages; page++){
        console.log("${page}",pages)
        page_button.innerHTML+=`<button value=${page} class="pages">${page}</button>`
    }
    // console.log("page working")
   $(".pages").on("click",function(){
    // console.log("page 2working")
         $("#result").empty();
        // console.log('$("#result").remove()',  $("#result").remove())
        state.page=$(this).val()
        console.log(" state.page", state.page)
        Data_storage()
    })
}