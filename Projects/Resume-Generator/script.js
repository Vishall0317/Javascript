const addWorkExpField= ()=>{
    console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workExpField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let workExpOb=document.getElementById("workExpAdd");    //parent object
    let workExpAddButtonOb=document.getElementById("workExpAddButton");     //child object

    workExpOb.insertBefore(newNode, workExpAddButtonOb);
};

const addAcadmicQuaField=()=>{
    console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acadmicQuaField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let acadmicQuaOb=document.getElementById("acadmicQuaAdd");
    let acadmicQuaButtonOb=document.getElementById("aqAddButton");

    acadmicQuaOb.insertBefore(newNode, acadmicQuaButtonOb);
};

const addProjectsFiled=()=>{
    console.log("adding new field");
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectsFiled");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let projectOb=document.getElementById("projectsAdd");
    let projectAddButtonOb=document.getElementById("projectsAddButton");

    projectOb.insertBefore(newNode, projectAddButtonOb);
};

//generating cv
const generateCV=()=>{
    //upload photo
    let file=document.getElementById("photoField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend= function(){
        document.getElementById("photoT").src= reader.result;
    }


    let nameOb=document.getElementById("nameField").value;
    let nameT1Ob=document.getElementById("nameT1");
    nameT1Ob.innerHTML = nameOb;

    document.getElementById("phoneT").innerHTML = document.getElementById("phoneField").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;
    document.getElementById("linkdinT").innerHTML = document.getElementById("linkdinField").value;
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("stackoverflowT").innerHTML = document.getElementById("stackOverflowField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;

    //work exp
    let workExpOb=document.getElementsByClassName("workExpField");
    let workExp="";
    for(let we of workExpOb){
        workExp = workExp + "<li class=list-group-item>" +we.value+"</li>";
    }
    document.getElementById("workExpT").innerHTML = workExp;

    //academic qualification
    let aqOb=document.getElementsByClassName("acadmicQuaField");
    let aq="";
    for(let a of aqOb){
        aq = aq + "<li class=list-group-item>" +a.value+"</li>";
    }
    document.getElementById("academicQualT").innerHTML = aq;

    //projects
    let projectsOb=document.getElementsByClassName("projectsFiled");
    let project="";
    for(let p of projectsOb){
        project = project + "<li class=list-group-item>" +p.value+"</li>";
    }
    document.getElementById("projectsT").innerHTML = project;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
};

const printCV=()=>{
    window.print();
}