let greeting :string = "hello how are you"
console.log(greeting)

// we can also use to not use the colon in this 

let userId = 2312 // this is also correct because the typescript also reconigize it 
console.log(userId)


// any 
// the any type is a special escape hatch that tells the compiler:
// “I don’t know (or care) what type this is — just trust me.”


// let hero               when i declered the hero(any) this is the any marker not the type it wasnot know      what  type it shoule return 
let hero:string; 

function greetingAny(){
  return "khan"
}

greetingAny()



export {}