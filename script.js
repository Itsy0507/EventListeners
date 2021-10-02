var buttonText = document.getElementById('button-text')
buttonText.addEventListener("click", clicked)

var text = document.getElementById('text')
text.addEventListener("copy", copied)

var image = document.getElementById('image')
image.addEventListener("mouseover", imagehover)
image.addEventListener("mouseout", nohover)

var input = document.getElementById('input')
input.addEventListener("keydown", textModified)

function clicked() {
    alert ('Yay! you clicked the button!')
}

function copied() {
    alert('Text copied!')
}

function imagehover() {
 image.style.opacity = 0.5;
}
function nohover() {
    image.style.opacity = 1.0
}

function textModified() {
    var inputText = document.getElementById('input-text')
    inputText.innerText = input.value
}