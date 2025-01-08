// FUNCTIONS
function randomMails() {
    emailListElm.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            const mailGenerator = response.data.response
            emailListElm.innerHTML += `<li>${mailGenerator}</li>`
        })
    }
}

// DOM
const btnRndMailElm = document.getElementById('get-rnd-mail-btn')
const emailListElm = document.getElementById('email-list')

// EVENTS
btnRndMailElm.addEventListener("click", randomMails)
