const form = document.getElementById("forms")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("cuenta").value;
    const password = document.getElementById("pass").value;
    const array = { username, password };
    const JsonValue = JSON.stringify(array);

    fetch("http://localhost:3000/api/users/login", {
        method: 'post',
        body: JsonValue,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Error en la solicitud: ${res.status}`);
        }
    })
    .then((data) => {
        if (data.result === null) {
            alert("Cuenta Inválida");
            console.warn('Usuario no encontrado en la base de datos.');
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("values", JSON.stringify(data.result));
            window.location.href = "../views/loggedUsers.html";
            console.log(data.result);
        }
    })
    .catch((error) => {
        console.log({ error: "Error en la solicitud", details: error.message });
    });
});
