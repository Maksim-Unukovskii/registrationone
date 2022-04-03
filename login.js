const Registration = {
    login: "",
    pass: "",
}

function registrateImputs(){
    Registration.login = document.getElementById("login").value;
    Registration.pass = document.getElementById("pass").value;
    const regUserJSON = JSON.stringify(Registration) 
    return console.log (Registration)
}