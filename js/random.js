const loadUser=()=>{
fetch('https://randomuser.me/api/?gender=female')
.then(res=>res.json())
.then(user=>displayUser(user))
}
const  displayUser=user=>{
    
    console.log(user.result);
    
}
loadUser();