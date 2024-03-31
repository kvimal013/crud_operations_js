 let data = [
    {id:1,name: 'John',email:'john@gmail.com'},
    {id:2,name: 'Mon',email:'mon@gmail.com'},
    {id:3,name: 'Benckey',email:'bancky@gmail.com'},
    {id:4,name: 'marsh',email:'marsh@gmail.com'},
    {id:5,name: 'Nuerang',email:'Nuerang@gmail.com'},
 ]

 function readAll() {
    localStorage.setItem("object" , JSON.stringify(data));
     let tableData  = document.querySelector(".data-table");

     let object =  localStorage.getItem("object");
     let objectdata = JSON.parse(object);
     let element = "";

     objectdata.map(record => (
        element += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
                <button class="edit" onclick="edit (${record.id})">Edit</button>
                <button class="delete" onclick="deleted(${record.id})">Delete</button>
            </td>
        </tr>`
     ));

     tableData.innerHTML = element; 
}

function create() {
    document.querySelector(".create-form").style.display ="block";
    document.querySelector(".add-div" ).style.display="none";
}

function add() {
     let  name =  document.querySelector(".name").value;
     let email = document.querySelector(".email").value;
     let newObj = {id:3, name:name, email:email}
     data.push(newObj);

    document.querySelector(".create-form").style.display ="none";
    document.querySelector(".add-div").style.display="block";

    readAll();
    
}

function edit(id) {
 document.querySelector(".update-form").style.display = "block";

 let obj = data.find(rec => rec.id === id);
 document.querySelector(".uname").value = obj.name;
 document.querySelector(".uemail").value = obj.email;
 document.querySelector(".id").value = obj.id;
}

function update(){
    let id =  parseInt(document.querySelector(".id").value);
    let name =  document.querySelector(".uname").value ;
    let email =  document.querySelector(".uemail").value ;

    let index = data.findIndex(rec => rec.id === id);
    data[index] = {id,name,email};

    readAll();
document.querySelector(".update-form").style.display = "none";
}

function deleted(id) {
   data = data.filter(rec => rec.id !== id);
   readAll();
}