var obj ={
    name : "aamir",
    FatherName : "ali ",
    CNIC : "2323423424234"
    ,Birth: "11-22-2002"
    , age : 0 
}
// obj.Birth = new Date("11-22-2002");
// obj.Birth
obj.Calage =  function(){
    var now = new Date().getFullYear();
    var UserDob = new Date(this.Birth).getFullYear(); 
     var currentage  = now - UserDob;
     obj.age =  currentage 
     return currentage
}
console.log("after age" , obj);
console.log("acalll" , obj.Calage());

document.getElementById("userName").innerText = obj.name
document.getElementById("fatherName").innerText = obj.FatherName
document.getElementById("dob").innerText = obj.Birth
document.getElementById("age").innerText = obj.age
document.getElementById("cnic").innerText = obj.CNIC