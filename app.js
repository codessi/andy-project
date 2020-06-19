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

//when button[0] is clicked  take words from there (how)  then paste in on  click  when button is click how do do i know which button ... show the button[0]  tell me it's not loop. button indicator...show button how do i show button click clickfire the button name show number for

///button= [button button button button ]


// ugh ! not very DRY...  


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
