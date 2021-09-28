let h1 = document.getElementById("firt-title")
const changeTitle = function() {
    h1.innerText = "HoOkipa Bay"
}

const changeBackground = function() {
    document.body.style.backgroundColor = "blue";
}

let footer = document.querySelector("#address");
const changeFooter = function() {
    footer.innerText = "wrong adress, we are Sorry!"
}

let a = document.getElementsByTagName("a")
let addClass = function() {

    a[0].classList.add("background")
}
addClass()