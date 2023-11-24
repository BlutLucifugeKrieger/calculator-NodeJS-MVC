var stored_id = localStorage.getItem("userID");
var stored_username = localStorage.getItem("username");
var stored_firstname = localStorage.getItem("firstname");
var stored_lastname = localStorage.getItem("lastname");
var stored_pass = localStorage.getItem("password");

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var ids = document.getElementById("id_users").value;
    var username = document.getElementById("cuenta_nombre").value;
    var firstname = document.getElementById("user_nombre").value;
    var lastname = document.getElementById("user_apellido").value;
    var password = document.getElementById("user_contra").value;
    var jsonArray = { username, firstname, lastname, password };
    var jsonValue = JSON.stringify(jsonArray);

    fetch(`http://localhost:3000/api/users/${ids}`, {
        method: 'put',
        body: jsonValue,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        
        alert("Cuenta actualizada, vuelve a iniciar sesion");
        window.location.href = "../views/login.html"
    }).catch(() => console.error({ error: "Error al actualizar la cuenta" }));
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cuenta_nombre").value = stored_username;
    document.getElementById("user_nombre").value = stored_firstname;
    document.getElementById("user_apellido").value = stored_lastname;
    document.getElementById("user_contra").value = stored_pass;
    document.getElementById("id_users").value = stored_id;
});

