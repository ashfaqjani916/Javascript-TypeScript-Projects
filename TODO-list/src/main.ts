let inp = document.querySelector("input");
let btn  = document.querySelector("button");
let container = document.querySelector(".container");
let form = document.querySelector("form");
type valType = string;
 
let val = "";

let tasks : string[] = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks") as valType):[];


showAll();

function showAll():void{
    tasks.forEach((value,index)=>
    {
        const div = document.createElement("div");
        div.setAttribute("class","task");
        let p= document.createElement("p");
        
         p.innerText = value as string;
        div.appendChild(p);
        div.classList.add("tasks");
        let delkey = document.createElement("button");
        delkey.innerText = "-";
        div.appendChild(delkey);
        container?.appendChild(div);

        delkey.addEventListener("click",()=>{
            removeAll();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAll();
        })
    

    })
};



function removeAll():void{
    tasks.forEach(()=>
    {
        const div = document.querySelector(".task");
        div?.remove();
    });

    }

form?.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(inp?.value !== undefined){
        removeAll();
        tasks.push(
            inp?.value
        );
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showAll();
    }
    
});
