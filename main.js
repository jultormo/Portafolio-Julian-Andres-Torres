
console.log("hola")



let proj1 = document.getElementById("immuneAlgorithm");
proj1.style.display = "none";
let proj2 = document.getElementById("Clorofila");
proj2.style.display = "none";

let button1 = document.getElementById("proj1Title")
button1.addEventListener("click", showOrHiddeProject1);
let button2 = document.getElementById("proj2Title")
button2.addEventListener("click", showOrHiddeProject2);
    


function showOrHiddeProject1(num){
    
    
    if(proj1.style.display == "none")
    {     
        proj1.style.display = "block";
    }
    else if(proj1.style.display == "block")
    {
        proj1.style.display = "none";
    }
}
function showOrHiddeProject2(){

    if(proj2.style.display == "none")
    {     
        proj2.style.display = "block";
    }
    else if(proj2.style.display == "block")
    {
        proj2.style.display = "none";
    }
}

