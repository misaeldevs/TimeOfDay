function upload() {
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#image")
    var data = new Date()
    var hour = data.getHours()
    var minutes = data.getMinutes()
    var seconds = data.getSeconds()
    var fullHours = [hour, minutes, seconds].join(":")

    msg.innerHTML = `Today is ${data.toLocaleDateString("pt-BR")}<br>`
    msg.innerHTML += `Now it's ${fullHours}`

    if (fullHours >= 0 && fullHours < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = "#fdf0d3"
    } else if (fullHours >= 12 && fullHhours <= 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#f48747"
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#2b3331"
    }
}