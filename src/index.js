import './less/index.less'

// Your code goes here!
// 1 - load
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`);
    const heading = document.querySelector('h1')
    heading.textContent = "lets go, im ready!"

    // 2 - copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

    // 3 - click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // 4 - dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

    // 5 - keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = 'YOU ran order 66'
        }
    })

    // 6 - Mousemove
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    // 7 - mouseenter
    // 8 - mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations ) {
        destination.addEventListener('mouseenter', () => {
            console.log(destination)
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }
}