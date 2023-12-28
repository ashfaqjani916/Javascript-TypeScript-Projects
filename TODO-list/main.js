let inp = document.querySelector("input");
let btn = document.querySelector("button");
let val = "";
let container = document.querySelector(".container");

btn.addEventListener("click", () => {
    val = inp.value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = val;
    div.appendChild(p);
    div.classList.add("tasks");
    let delkey = document.createElement("button");
    delkey.innerText = "-";
    div.appendChild(delkey);
    container.appendChild(div);
    inp.value = "";
    localStorage.setItem("task", val);
    delkey.addEventListener("click", () => {
        div.remove();
        localStorage.removeItem("task", val);
    })
});

