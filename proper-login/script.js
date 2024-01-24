const btn = document.querySelector('.btn')
const password = document.querySelector('.password')

btn.addEventListener('click', () => {
    if (password === 'bootcamp') {
        alert('Welcome')
    } else {
        alert('You are loooser!!!!')
    }
})