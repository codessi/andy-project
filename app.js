let button = document.querySelectorAll('button')
let div = document.querySelector('div')



/* button.forEach((button) => {
    button.addEventListener('click',
        () => {
            console.log(this.button)
            appear();

        }
    )
}) */

/* function appear() {
    console.log(button[0].textContent)
} */



///button= [button button button button ]


// ugh ! not very DRY...,  I wish i could use forEach Method


button[0].addEventListener('click',
    () => {
        div.innerHTML = button[0].textContent
    })
button[1].addEventListener('click',
    () => {
        div.innerHTML = button[1].textContent
    })
button[2].addEventListener('click',
    () => {
        div.innerHTML = button[2].textContent
    })
button[3].addEventListener('click',
    () => {
        div.innerHTML = button[3].textContent
    })
button[4].addEventListener('click',
    () => {
        div.innerHTML = button[4].textContent
    })
button[5].addEventListener('click',
    () => {
        div.innerHTML = button[5].textContent
    })
