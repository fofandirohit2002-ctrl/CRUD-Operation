let users = JSON.parse(localStorage.getItem("users")) || [];

function displayUsers(){

let table = document.getElementById("userTable");
table.innerHTML = "";

users.forEach((user,index)=>{

table.innerHTML += `
<tr>
<td>${user.name}</td>
<td>${user.email}</td>

<td>
<button class="edit" onclick="editUser(${index})">Edit</button>
<button class="delete" onclick="deleteUser(${index})">Delete</button>
</td>

</tr>
`;

});

localStorage.setItem("users",JSON.stringify(users));

}

function addUser(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name=="" || email==""){
alert("Please enter all fields");
return;
}

users.push({name,email});

displayUsers();

document.getElementById("name").value="";
document.getElementById("email").value="";

}

function deleteUser(index){

users.splice(index,1);

displayUsers();

}

function editUser(index){

let newName = prompt("Enter new name",users[index].name);
let newEmail = prompt("Enter new email",users[index].email);

if(newName && newEmail){

users[index].name = newName;
users[index].email = newEmail;

displayUsers();

}

}

displayUsers();