// using this file is optional
// you can also load the code snippets in using your browser's console
// const document = ;

function onClick() {
    const main = document.getElementById('main');
    main.addEventListener('click', function(event) {
    alert('I was clicked!');
    });
}

function type() {
    const input = document.querySelector('input');
    input.addEventListener('keydown', function(e) {
    console.log(e.which);
    });
}