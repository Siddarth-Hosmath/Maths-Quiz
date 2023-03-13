const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const Id= (id)=>{
    return document.getElementById(id);
}
const quesEle = Id("question");
const formEle = Id("form");
const inputEle = Id("input");
const scoreEl = Id("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText = `score : ${score}`
quesEle.innerText = `What is ${num1} X ${num2} ?`

const correctAns = num1*num2;
formEle.addEventListener("submit" , ()=>{
    const userAns =+ inputEle.value;
    console.log(userAns);

    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}

// window.stop();



