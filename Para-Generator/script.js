let wordcnt;
const contain = document.querySelector('.container')

const getData = ()=>{
    wordcnt = document.getElementById('now');
    generatePara();
}
createWord = (n)=>
{
    let txt = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0;i<n;++i)
    {
        const random = (Math.random()*25).toFixed(0);
        txt+= letters[random];
    }
    return txt;

}

generatePara =() =>
{
    words = Number(wordcnt.value);
    let data = "";
    for(let i=0;i<words;++i)
    {
        const rand = (Math.random()*10).toFixed(0);
        data += createWord(rand);
        data +=" ";
    }
    const para = document.createElement("p");
    
    para.innerHTML = data;

    para.setAttribute("class","para");

    contain.append(para);
}


