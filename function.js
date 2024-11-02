function changeColor() {
    let element = document.getElementById("box1")
    console.log(element.style.backgroundColor) // TODO: check why blue is not coming first time

    if (element.style.backgroundColor === "blue") {
        element.style.backgroundColor = "yellow"
    } else {
        element.style.backgroundColor = "blue"
    }

}
