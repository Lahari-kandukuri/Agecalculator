const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");
function calculateAge(){ 
    const birthdayValue = birthdayE1.value;
    if (birthdayValue===""){
        alert("Please Enter your birthday")
    } 
    else{
        const age = getage(birthdayValue);
        console.log(age) 
        resultE1.innerText = `Your age is ${age} ${age > 1 ? "years": "year"} old`
    }

    
}
function getage(birthdayValue){ 
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear()-birthdayDate.getFullYear();
   const month = currentDate.getMonth();
    if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())){
        age--

    } 
    
    return age;
    
    

}
btnE1.addEventListener("click",calculateAge)