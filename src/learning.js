// function c5(){
//   return "hello World"
// }


// const c5b=()=>{
//     console.log(c5())
// }

// c5b()

// const useCohort=(initialValue)=>{
//     let cohort=initialValue;
//     function setCohort(value) {
//         cohort=value
//     };
//     return[cohort,setCohort]

// }

// let result=useCohort(5)
// const[cohort,setCohort]=useCohort(5);
// console.log("line 13:",cohort)
// console.log("line 14:",setCohort)
// console.log(result)

// let firstName="onyin"
// let age=30
// let anArray=[firstName,age]
// console.log(anArray)
// const [userName, userAge]=anArray
// console.log("line32",userName)
// console.log("line33",userAge)

// let anObject = {
//     person:{age:30},
//     firstName:"ovie"}
// const{person,firstName} = anObject
// console.log(firstName)
// console.log(person)

// const useState=(initialValue)=>{
//     let loading=initialValue;

//     function setLoading(value){
//         loading=value
   
//     };
//     return[loading,setLoading]
// }
// const [loading,setLoading]=useState(false);
// console.log(loading)
// setLoading(true)
// console.log(setLoading)

let cohort5=[
    {gender:"male",firstName:"ovie"},
    {gender:"female",firstName:"onyin"},
    {gender:"male",firstName:"sk"},
    {gender:"female",firstName:"ibk"},
    {gender:"male",firstName:"billy"},
    {gender:"female",firstName:"dami"},
    {gender:"male",firstName:"british"},
    {gender:"female",firstName:"amaka"}
]
let maleStudents=cohort5.filter(student=>student.gender==="male")
maleStudents.forEach(student=>console.log(student.firstName))