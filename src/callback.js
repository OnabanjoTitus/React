const ProcessVisa=(isWanted,userName,callBackA,callBackB,isFirstTime)=>{
   
    if(isWanted){
        callBackA(userName)
    }
    else{
        callBackB(userName)
    }
    console.log("Finished")
}

const wantedTrue=(name)=>{
    console.log(`Call the police for :${name}`)
}
const wantedFalse=(name)=>{
    console.log(`Grant visa to :${name}`)
}

const checkTravelHistory=(isFirstTime)=>{
        if(isFirstTime){
            console.log("Ask if excited abt first time")
        }else{
            console.log("How was previous trip")
        }
}

let userName="Titus"
let isWanted=false
let isFirstTime=false
setTimeout(()=>{ProcessVisa(isWanted,userName,wantedTrue,wantedFalse,isFirstTime)},3000)
checkTravelHistory(isFirstTime)