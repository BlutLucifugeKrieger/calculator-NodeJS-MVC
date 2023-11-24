

const forms = document.getElementById("forms")

forms.addEventListener("submit",(event)=>{

    event.preventDefault()

    const username = document.getElementById("cuenta_nombre").value
    const firstname = document.getElementById("user_nombre").value
    const lastname = document.getElementById("user_apellido").value
    const password = document.getElementById("user_contra").value
    var jsonArray = {username,firstname,lastname,password}
    var jsonVal = JSON.stringify(jsonArray)
    fetch("http://localhost:3000/api/users",{

        method:'post',
        body:jsonVal,
        headers:{

            'Content-Type':'application/json'
        }

    }).then(()=>{

        alert("Usuario creado satisfactoriamente, por favor inicia sesion")
        window.location.href = "../views/login.html"
    }).catch(()=> alert("Error al crear el usuario"))
})