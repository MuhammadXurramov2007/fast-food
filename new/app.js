const cuonters = document.querySelectorAll('.counter')


cuonters.forEach((counter) => {
    counter.textContent = '0'



    function updateCounter() {
        const target = +counter.getAttribute('data-target')
        const c =  +counter.textContent



        const incerement = target / 200


        if(c < target) {
            counter.textContent = `${Math.ceil(c + incerement)}`
            setTimeout(updateCounter, 30)

        } else{
            counter.textContent = target
        }
    }


    updateCounter()


})














const header = document.querySelector('.site-nav')






document.addEventListener('scroll', (e)=> {
    if(window.scrollY > header.clientHeight) {
        header.classList.add('white-nav')
    } else {
        header.classList.remove('white-nav')

    }
})