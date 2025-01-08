// FUNCTIONS
function randomMails() {
    for (let i = 0; i <= 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            const mailGenerator = response.data.response
            console.log(mailGenerator);
        })
    }
}

// DOM
const btnRndMailElm = document.getElementById('get-rnd-mail-btn')

// EVENTS
btnRndMailElm.addEventListener("click", randomMails)


