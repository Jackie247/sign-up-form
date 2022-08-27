function checkPasswordsMatch(){
    let pw = document.getElementById("pswd");
    let pw2 = document.getElementById("pswd-conf");
    if(pw !== pw2){
        alert("Passwords do not match");
    }
}