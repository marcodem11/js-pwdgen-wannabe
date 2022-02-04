const userName = prompt('Inserisci il tuo nome')
console.log(userName)

const userSurName = prompt('Inserisci il tuo cognome')
console.log(userSurName)

const Color = prompt('Quale è il tuo colore preferito')
console.log(Color)

const HTML = document.getElementById('container-colore')
HTML.innerHTML = `Ciao${userName}${userSurName} il tuo colore preferito è ${Color}`
console.log(HTML)

const PasswordUser = document.getElementById('container-password')
console.log(PasswordUser)
PasswordUser.innerHTML = `Questa è la tua password provvisoria: ${userName}${userSurName}${Color}1`;