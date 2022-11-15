let inputLogin = document.getElementById('login')
let inputPass = document.getElementById('password')
let button = document.getElementById('btn')


let users = [
    {
        id: 1,
        login: 'userModel',
        password: 'user9497'
    }
]

button.addEventListener('click', () => {
    users.forEach(user => {
        let userLogin = String(inputLogin.value)
        let userPass = String(inputPass.value)
        if (userLogin == user.login) {
            if (userPass == user.password) {
                alert('Login Efetuado')
            } else {
                alert('Credenciais inválidas')
            }
        } else {
            alert('Credenciais inválidas')
        }
    })
})
