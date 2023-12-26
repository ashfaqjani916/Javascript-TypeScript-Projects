const wordcnt = document.getElementById('now');
const contain = document.querySelector('.container')
generatePara =() =>
{
    words = Number(wordcnt.value);

    const para = document.createElement("p");
    
    para.innerHTML = "sample paragraph";

    para.setAttribute("class","para");

    contain.append(para);
}
generatePara();
generatePara();

