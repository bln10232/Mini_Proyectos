const loginForm = document.getElementById("login-form")
const successMessage = document.getElementById("success-message")



loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const username = document.getElementById("name").value
    const password = document.getElementById("pass").value


    if (username === 'pepito' && password === '123') {
        successMessage.style.display = "block";
        successMessage.textContent = 'Login Exitoso';
    } else {
        alert('Usuario o password incorrectos')
    }


})