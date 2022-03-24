let player = document.getElementById("player")
let colorV = document.getElementById("color")
player.style.backgroundColor = colorV.value
player.style.width = "10px"
player.style.height = "10px"
let body = document.getElementById("body")
player.style.position = "absolute"
player.style.zIndex = "+1"
document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        right()
    }
    if (event.key === "ArrowLeft") {
        left()
    }
    if (event.key === "ArrowDown") {
        bottom()
    }
    if (event.key === "ArrowUp") {
        top()
    }
    if (event.code === "Space") {
        create()
    }
    if (event.code === "Equal") {
        bigger()
    }
    if (event.code === "Minus") {
        smaller()
    }
    if (event.altKey && event.code === "Digit2") {
        smallerW()
    }
    if (event.shiftKey && event.code === "Digit2") {
        biggerW()
    }
    if (event.altKey && event.code === "Digit1") {
        smallerH()
    }
    if (event.shiftKey && event.code === "Digit1") {
        biggerH()
    }
})
function right() {
    let leftP = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    player.style.left = leftP+10 + "px"
}
function left() {
    let leftP = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    player.style.left = leftP-10 + "px"
}
function bottom() {
    let topP = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    player.style.top = topP+10 + "px"
}
function top() {
    let topP = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    player.style.top = topP-10 + "px"
}
function create() {
    let topP = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let leftP = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    let playerWidth = window.getComputedStyle(player).getPropertyValue("width")
    let playerHeight = window.getComputedStyle(player).getPropertyValue("height")
    let color = document.getElementById("color")
    let clone = document.createElement("div")
    body.appendChild(clone)
    clone.style.position = "absolute"
    clone.style.left = leftP+10 + "px"
    clone.style.top = topP+10 + "px"
    clone.style.width = playerWidth
    clone.style.height = playerHeight
    clone.style.backgroundColor = color.value
    clone.addEventListener("click", event => {
        clone.style.display = "none"
    })
}
function color() {
    let color = document.getElementById("color")
    player.style.backgroundColor = color.value
    if (player.style.backgroundColor === "rgb(255, 255, 255)") {
        player.style.border = "1px solid red"
    }
    if (player.style.backgroundColor !== "rgb(255, 255, 255)") {
        player.style.border = "none"
    }
}
function bigger() {
    let playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"))
    let playerHeight = parseInt(window.getComputedStyle(player).getPropertyValue("height"))
    player.style.width = playerWidth+10 + "px"
    player.style.height = playerHeight+10 + "px"
}
function smaller() {
    let playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"))
    let playerHeight = parseInt(window.getComputedStyle(player).getPropertyValue("height"))
    if (player.style.height === "10px" || player.style.width === "10px") {
        player.style.width = "10px"
        player.style.height = "10px"
    }
    else {
        player.style.width = playerWidth-10 + "px"
        player.style.height = playerHeight-10 + "px"
    }
}
function smallerW() {
    let playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"))
    if (player.style.width === "10px") {
        player.style.width = "10px"
    }
    else {
        player.style.width = playerWidth-10 + "px"
    }
}
function biggerW() {
    let playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"))
    player.style.width = playerWidth+10 + "px"
}
function biggerH() {
    let playerHeight = parseInt(window.getComputedStyle(player).getPropertyValue("height"))
    player.style.height = playerHeight+10 + "px"
}
function smallerH() {
    let playerHeight = parseInt(window.getComputedStyle(player).getPropertyValue("Height"))
    if (player.style.height === "10px") {
        player.style.height = "10px"
    }
    else {
        player.style.height = playerHeight-10 + "px"
    }
}