// function addnum(num){ // if we simply write this it is any and and the function we must declare the type
//   return num
// }
// addnum()

function addnum(num:number){ // if we simply write this it is any and and the function we must declare the type
  return num +3
}

addnum(4)

// function login(name,email){}  here the email and the name are the any marker  we should this 

// login("khan","khan@gmail.com")
function login(name:string,email:string){}

login("khan","khan@gmail.com")




let names = ['khan','aslam','ali']

 names.map((names :string)=>{`the names are ${names}`})


 // void means having no return values

 function nothing(errMsg:string):void{
     console.log(errMsg)
 }




//   never: Means “this function never finishes normally”
// Used when a function never returns at all.

// This happens if the function:

// Always throws an error

// Loops forever

  function consolefun(errMsg:string):never{  
     throw new Error(errMsg)
 }

export{}

