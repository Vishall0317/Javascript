const myFun=()=>{
    alert("this code from onclick");
};

const changeColour=()=>{
    document.getElementById("field").style.backgroundColor = "cyan";
};

const updateText = ()=>{
    document.getElementById("textFeild").innerHTML = document.getElementById("field").value;
}

const formSubmit=(event) =>{
    event.preventDefault();

}

let goLiveButtOb= document.getElementById("goLiveButt");
goLiveButtOb.addEventListener("click", ()=>{
    alert("you are live now");
});
goLiveButtOb.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="black";
    document.body.style.color = "green";
});
goLiveButtOb.addEventListener("mouseover", ()=>{
    goLiveButtOb.style.backgroundColor="red";
});