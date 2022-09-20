function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(){
  return returnsANamedFunction;
}

// const returnsAnAnonymousFunction = function(){
//   returnsAnAnonymousFunction();
// }

(function () 
{ return "returnsAnAnonymousFunction"; })
();