var btn = document.getElementById('verSenha')
var btnConfirm = document.getElementById('verConfirmSenha')


const nome = document.getElementById('nome');
const labelNome = document.getElementById('labelNome')
var validNome = false

const usuario = document.getElementById('usuario')
const labelUsuario = document.getElementById('labelUsuario')
var validUsuario = false

const email = document.getElementById('email')
const labelEmail = document.getElementById('labelEmail')
var validEmail = false

const senha = document.getElementById('senha')
const labelSenha = document.getElementById('labelSenha')
var validSenha = false

const confirmSenha = document.getElementById('confirmSenha')
const labelConfirmSenha = document.getElementById('labelConfirmSenha')
var validConfirmSenha = false

var msgError = document.getElementById('msgError')
var msgSuccess = document.getElementById('msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4 || /\d/.test(nome)) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome completo'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: #97ffb3')
        labelNome.innerHTML = 'Nome completo'
        nome.setAttribute('style', 'border-color: #97ffb3')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4 || usuario.value.length >= 15) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Insira um usuário válido'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: #97ffb3')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: #97ffb3')
        validUsuario = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length < 3 || !email.value.includes('@')) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Insira um email válido'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: #97ffb3')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: #97ffb3')
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: #97ffb3')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: #97ffb3')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: #97ffb3')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: #97ffb3')
        validConfirmSenha = true
    }
})

btn.addEventListener('click', () => {
    var inputSenha = document.getElementById('senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    var inputConfirmSenha = document.getElementById('confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})




