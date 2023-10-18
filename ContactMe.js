const buttonSelected = document.querySelectorAll('.modal-toggle').forEach(buttonSelected => {
    buttonSelected.addEventListener ('click', toggleModal) 
})

function toggleModal(event) {
    event.preventDefault();
    document.querySelector('.modal').classList.toggle('visible')
    console.log("hello")
}

