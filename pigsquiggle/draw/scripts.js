let canvas = document.getElementById("canvas")
let cords = document.getElementById("cords")
let width = document.getElementById("width")
let ctx = canvas.getContext("2d")
width.addEventListener("change", event => {
    if (width.value === "0") {
        width.value = "1"
        ctx.lineWidth = width.value
    }
    else {
        ctx.lineWidth = width.value
    }
})
let shift = "line"
document.addEventListener("keydown", function (event) {
    if (event.key === "Shift") {
        if (shift === "both") {
            shift = "line"
        }
        else if (shift === "line") {
            shift = "radar"
        }
        else if (shift === "radar") {
            shift = "both"
        }
    }
})
cords.style.position = "absolute"
cords.style.color = "white"
canvas.style.position = "absolute"
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.draggable
canvas.style.backgroundColor = "black"

canvas.addEventListener("mousemove", findCords)
function findCords(event) {
    cords.innerHTML = "(" + event.clientX + ", " + event.clientY + ")"
    cords.style.left = event.clientX + "px"
    cords.style.top = event.clientY+10 + "px"
    canvas.style.cursor = "crosshair"
    cords.append(" " + shift)
    cords.append(" " + width.value)
}
canvas.addEventListener("mousedown", function down(event) {
    let R = Math.floor(Math.random()*300)
    let G = Math.floor(Math.random()*300)
    let B = Math.floor(Math.random()*300)
    ctx.strokeStyle = "rgb(" + R +  ", " + G + ", " + B + ")"
    ctx.beginPath()
    ctx.moveTo(event.clientX, event.clientY)
    canvas.addEventListener("mousemove", function draw(event) {
        ctx.lineTo(event.clientX, event.clientY)
        ctx.stroke()
        if (shift === "line") {
            ctx.lineTo(event.clientX, event.clientY)
        }
        else if (shift === "radar") {
            ctx.closePath()
        }
        else if (shift === "both") {
            ctx.closePath()
        }
        if (shift === "both") {
            ctx.lineTo(event.clientX, event.clientY)
        }
        document.addEventListener("mouseup", function(event) {
            canvas.removeEventListener("mousemove", draw)
        })
    })
})