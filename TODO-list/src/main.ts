let inp = document.querySelector("input");
let btn = document.querySelector("button");
let val:string|undefined= "";
type valType = string;

let container = document.querySelector(".container");

btn?.addEventListener("click", ():void => {
    val = inp?.value;
    let div = document.createElement("div");
    let p= document.createElement("p");
    p.innerText = val as valType;
    div.appendChild(p);
    div.classList.add("tasks");
    let delkey = document.createElement("button");
    delkey.innerText = "-";
    div.appendChild(delkey);
    container?.appendChild(div);
    if(inp!==null){
        inp.value = ""; 
    }
    delkey.addEventListener("click", ():void => {
        div.remove();
    });
    });