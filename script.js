let pass=document.querySelector("#pass");
let con=document.querySelector("#confirm");
function check()
{
    if(pass.value!=con.value)
    {
        con.setCustomValidity("Passwords do not match");
    }
    else{
        con.setCustomValidity("");
    }
}
pass.addEventListener("input", check);
con.addEventListener("input",check);