let out = document.getElementById("lood");
function get() {
    out.innerHTML=""
    console.log(document.getElementById("gets").value);
    for( let k = 1; k <= 20; k++){
    let ele = (k);
    // console.log(k);
    out.innerHTML += `<h1> ${gets.value} * ${k} = ${gets.value * k }</h1>`;
    console.log(` ${gets.value} * ${k} = ${gets.value * k }`);
    // display.innerHTML = Number(number1.value) * Number(number2.value);
}
}