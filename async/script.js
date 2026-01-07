// //setTimeout

// // console.log('step 2');

// // setTimeout(()=>console.log('step 1'),3000)

// // console.log('step 3');

// // //setInterval

// // setInterval(()=>console.log('Hi Bro'),2000);

// //promise

// const exam = new Promise ((resolve,reject)=>{

//     let result = true;

//     if(result)
//         resolve(527)

//     else    
//         reject()
// })

// exam.then((score)=>console.log(`congrats you have scored ${score}`))
// .catch(()=>console.log("better luck next time"))


// const reachA = new Promise ((resolve,reject)=>{
//      const reached = false;

//      if(reached)
//         setInterval(resolve,2000,'abi reached')

//      else
//         reject('not yet')
// })

// const reachB = new Promise ((resolve,reject)=>{
//      const reached = true;

//      if(reached)
//         setInterval(resolve,2000,'sri reached')

//      else
//         reject('not yet')
// })

// const reachC = new Promise ((resolve,reject)=>{
//      const reached = true;

//      if(reached)
//         setInterval(resolve,2000,'mani reached')

//      else
//         reject('not yet')
// })

// Promise.any([reachA,reachB,reachC])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))


// //err handling
// //exception handling

// try {
//    num = prompt('enter a number')
//    if(isNaN(num))
//       throw 'enter a valid number'
//    if((num===""))
//       throw 'cannot be empty'
//    console.log(num**2); 
// }

// catch(error){
//    console.log(error);
// }

// async always return a promise

// async function fn (){
//    return 'hello'
// }

// console.log(fn ());


// async function statuscheck(){
//    try{
// console.log('Hi..')
//    res = await reachA
//    console.log(res)
//    console.log('bye')
//    }
//    catch(error){
//       console.log(error)
//    }
   
// }

// statuscheck()

//api

fetch('https://dummyjson.com/carts')
  .then(res => res.json())
  .then(msg => {
      console.log(msg.carts[0].products[0].title);
  })
  .catch(error => console.log(error));

