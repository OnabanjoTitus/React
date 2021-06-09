const getResult=(grade)=>{
    return new Promise((resolve,reject)=>{
        if(grade>=45){
            resolve('pass')
        }else{
            resolve('fail')
        }
    })

}

let grade = 46

getResult(grade)
    .then(res=>console.log(res))
    .catch(res=>console.log(res))
    .finally(()=>console.log("Thanks for checking"))