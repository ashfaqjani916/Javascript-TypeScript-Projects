"use strict";
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let form = document.querySelector("form");
let val = "";
let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showAll();
function showAll() {
    tasks.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "task");
        let p = document.createElement("p");
        p.innerText = value;
        div.appendChild(p);
        div.classList.add("tasks");
        let delkey = document.createElement("button");
        delkey.innerText = "-";
        div.appendChild(delkey);
        container === null || container === void 0 ? void 0 : container.appendChild(div);
        delkey.addEventListener("click", () => {
            removeAll();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAll();
        });
    });
}
;
function removeAll() {
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div === null || div === void 0 ? void 0 : div.remove();
    });
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((inp === null || inp === void 0 ? void 0 : inp.value) !== undefined) {
        removeAll();
        tasks.push(inp === null || inp === void 0 ? void 0 : inp.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showAll();
    }
});
