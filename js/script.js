// DOM
const btnRndMailElm = document.getElementById('get-rnd-mail-btn')

for (let i = 0; i <= 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        console.log(response.data.response);
        
    })
}


