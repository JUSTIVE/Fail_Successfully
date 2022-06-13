import {Result} from "./type"

function map<A,B,F,R,E>(result:Result<A,F,R,E>,f:(x:A)=>B):Result<B,F,R,E> {
  switch(result._resultType){
    case "Success":
      return ({...result,value:f(result.value)})
    case "Failure":
      return result
  }
}

function flatMap<A,B,F,R,E>(result:Result<A,F,R,E>,f:(x:A)=>Result<B,F,R,E>):Result<B,F,R,E> {
  switch(result._resultType){
    case "Success":
      return f(result.value)
    case "Failure":
      return result
  }
}

export {
  map,
  flatMap
}