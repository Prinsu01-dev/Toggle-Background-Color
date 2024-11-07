function changeColor() {
    let element = document.getElementById("box")
    console.log(element.style.backgroundColor)

    if (element.style.backgroundColor === "green") {
        element.style.backgroundColor = "blue"

    } else {
        element.style.backgroundColor = "green"
    }

}

