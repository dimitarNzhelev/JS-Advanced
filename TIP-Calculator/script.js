let totalBill = document.getElementById("billTotalInput"); //.value
let totalPerPerson = document.getElementById("perPersonTotal");//.textContent
let tip = document.getElementById('tipInput'); //.value
let people = document.getElementById('numberOfPeople'); 


function increasePeople() {
    people.textContent = Number(people.textContent) + 1;
    calculateBill();
}


function decreasePeople() {
    people.textContent = Number(people.textContent) - 1;
    calculateBill();
}




function calculateBill(){
    if(tip >= 100) {
        tip = 100;
    }
    totalPerPerson.textContent = `$${(((1+(tip.value/100))*totalBill.value)/Number(people.textContent)).toFixed(2)}`;
}