function createUser({name:string,ispaid:boolean}){

}
createUser({name:"osama khan",ispaid:true})


// this function will return the object 
function userData():{name:string,rollno:number} {
  return {name:"osama khan",rollno:20}

}

userData()


// typeAlices : it is used for the custom names of the objects 

type User ={
  name :string,
  rollno:number
}

function user(user:User):User{
  return {
    name:user.name,
   rollno: user.rollno
  }
}

user({name:"osama ",rollno:20}) // You are passing an object to the function that matches the User type.

//    It returns the same object: { name: "Osama", rollno: 20 }.



// readonly :- it is the value which we cannot change it 

type userRead = {
  readonly _id : String,
  name : string,
  rollno  : number,
  ispaid:boolean
}


let userReadDetail:userRead = {

  _id :"1234", // it only have this value this cannot be change
  name: "khan",
  rollno: 20,
  ispaid : true
}

// union  :- when we want to store the two different types of values we use the we use the the union

let score :number| string  
score = 0         // here both are correct 
score = "10"

 
let araryValues : (String | Number) [] = ["khan", "22",23] // interms of the array 

// let araryValues : String [] | Number [] = ["khan", "22",23]  if we write this its means that all the values are either the string or the numbers 





export{}