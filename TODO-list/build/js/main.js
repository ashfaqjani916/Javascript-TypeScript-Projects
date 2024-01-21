"use strict";
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let val = "";
let container = document.querySelector(".container");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    val = inp === null || inp === void 0 ? void 0 : inp.value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = val;
    div.appendChild(p);
    div.classList.add("tasks");
    let delkey = document.createElement("button");
    delkey.innerText = "-";
    div.appendChild(delkey);
    container === null || container === void 0 ? void 0 : container.appendChild(div);
    if (inp !== null) {
        inp.value = "";
    }
    delkey.addEventListener("click", () => {
        div.remove();
    });
});
