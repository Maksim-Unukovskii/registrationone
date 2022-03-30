

const Registration = {
    login: "",
    pass: "",
    age: "",
    adress: "",
    nickname: "",
}

function registrateImputs(){
    Registration.login = document.getElementById("login").value;
    Registration.pass = document.getElementById("pass").value;
    Registration.age = document.getElementById("age").value;
    Registration.adress = document.getElementById("adress").value;
    Registration.nickname = document.getElementById("nickname").value;
    const regUserJSON = JSON.stringify(Registration) 
    return console.log (Registration)
}