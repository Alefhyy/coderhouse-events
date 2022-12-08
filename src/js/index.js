const botaoCadastro = document.getElementById('cadastro')
const spanLogin = document.getElementById('login')
const botaoEntrar = document.getElementById('entrar')
const form = document.getElementById('form')


form.addEventListener('submit', () => {
    alert('Logou!')
})




botaoEntrar.addEventListener('mouseover', () => {
    botaoEntrar.style.fontWeight = '600'
}) 

botaoEntrar.addEventListener('mouseout', () => {
    botaoEntrar.style.fontWeight = 'normal'
})


botaoCadastro.addEventListener('mouseover', () => {
    botaoCadastro.style.backgroundColor = '#B12528'
}) 

botaoCadastro.addEventListener('mouseout', () => {
    botaoCadastro.style.backgroundColor = '#d13639'
})

cadastro.addEventListener('click', () => {
    spanLogin.innerText = "cadastro"
})

