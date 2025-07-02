// interface :- interface in not in the js but in the ts 
// it is the simply gives the structure of the objects

interface User  {
   name : string,
   rollno :number
   gettingData : ()=> String


}


let userDatails : User = {
  name :"khan",
  rollno:34,
  gettingData:()=>{
    return "userdata"
  }

}


export {}