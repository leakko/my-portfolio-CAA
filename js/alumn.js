const inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('focus', () => {
        const parent = input.parentElement;
        parent.classList.add('is-focused')
    })
}

const textarea = document.getElementsByTagName('textarea')[0]

textarea.addEventListener('focus', () => {
    const parent = textarea.parentElement;
    parent.classList.add('is-focused')
})