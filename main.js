let income = document.getElementById("income");
let out1 = document.getElementById("penis");
let btn1 = document.getElementById("btn1");
console.log(income);

let feeding = document.getElementById("feeding");
let housing = document.getElementById("housing");
let transport = document.getElementById("transport");
let utilities = document.getElementById("utilities");
let insurance = document.getElementById("insurance");
let medical = document.getElementById("medical");
let sidp = document.getElementById("sidp");
let personal = document.getElementById("personal");
let enjoy = document.getElementById("enjoy");
let misc = document.getElementById("misc");

function fun1() {
  let outy = income.value;
  if (outy >= 30000) {
    //out1.innerHTML = income.value;
    let food = income.value * 0.15;
    feeding.innerHTML = `₦${food}`;
    let house = income.value * 0.25;
    housing.innerHTML = `₦${house}`;
    let trans = income.value * 0.1;
    transport.innerHTML = `₦${trans}`;
    let utils = income.value * 0.05;
    utilities.innerHTML = `₦${utils}`;
    insure = income.value * 0.1;
    insurance.innerHTML = `₦${insure}`;
    let med = income.value * 0.05;
    medical.innerHTML = `₦${med}`;
    let sidp1 = income.value * 0.1;
    sidp.innerHTML = `₦${sidp1}`;
    let person = income.value * 0.05;
    personal.innerHTML = `₦${person}`;
    let enjoy1 = income.value * 0.05;
    enjoy.innerHTML = `₦${enjoy1}`;
    let misc1 = income.value * 0.1;
    misc.innerHTML = `₦${misc1}`;
  } else {
    alert("Income must be above ₦30000");
  }
}

btn1.addEventListener("click", fun1);
