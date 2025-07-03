//  generics :- generics are the “Write code once, and use it with any type (string, number, object, etc).”
 // it means that you can ones write the code then you can use the any types of data you can use within it
function identity<t>(value:t):t{
  return value

}

identity("three")


function example<type>(val:type):type{
  return val
}

example(3)

// generics in array
function arrayfun<T>(value:T[]):T[]{
   return value
}
arrayfun([3])


// arrow fun

const arrowFun = <T>(val:T[]):T[]=>{
return  val
}

arrowFun(["4"])



// generics for the specific types  and taking multiple arguments


function anyTypes<t,U extends number> (valueOne:t,valueTwo:U):[t,U]{ // here we are using extends number means  the  type must be numbers and we pass multiple parameters
  return [valueOne,valueTwo]

}

anyTypes(3,4)


export{}