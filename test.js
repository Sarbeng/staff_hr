let test = "03,05";
let newArray = test.split(",")
console.log(newArray)
if (test.search("04") != -1 ){
    console.log("The user is an admin")
}
else if (test.search("03") != -1){
    console.log("This is a unit member")
}