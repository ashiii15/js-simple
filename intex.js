const person1 = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName : "Ashik",
    lastName : "pa",
}
 let x = person1.fullName.call(person2);
 document.getElementById("demo").innerHTML = x;