const btn1 = document.getElementById("erkascha");
const btn2 = document.getElementById("erkascha_2");
const e1 = document.querySelector(".erkascha");
const e2 = document.querySelector(".erkascha_2");
const btn3 = document.getElementById("ara1");
const btn4 = document.getElementById("ara2");
const a1 = document.querySelector(".aron_asel");
const a2 = document.querySelector(".aron_asel2");

const move1 = () => {
    e1.style.display = "none";
    e2.style.display = "block";
    e2.style.position = "relative";
    e2.style.margin = "0";
}
const move2 = () => {
    e1.style.display = "flex";
    e2.style.display = "none"
}
const move3 = () => {
    a1.style.display = "none";
    a2.style.display = "block";
    a2.style.position = "relative";
    a2.style.margin = "0";
}
const move4 = () => {
    a1.style.display = "flex";
    a2.style.display = "none"
}

btn1.addEventListener("click", move1);
btn2.addEventListener("click", move2);
btn3.addEventListener("click", move3);
btn4.addEventListener("click", move4);
