let bullet = document.getElementById("bullet")
let title = document.getElementById("title")
let glitchButton = document.getElementById("glitch")
let oneColorButton = document.getElementById("oneColor")
let trailFadeButton = document.getElementById("trailFade")
let colorPickerButton = document.getElementById("colorPicker")
let info = document.getElementById("info")
let glitchStat = "false"
let trailFadeStat = "true"
let oneColorStat = "false"
let colorPickerStat = "false"
glitchButton.style.border = "1px orange solid"
trailFadeButton.style.border = "1px orange solid"
title.style.fontSize = "50px"
title.style.fontFamily = "Tahoma"
title.style.margin = "0"
title.style.color = "red"
title.style.position = "absolute"
title.style.fontWeight = "bold"
bullet.style.width = "30px"
bullet.style.height = "30px"
bullet.style.backgroundColor = "red"
bullet.style.position = "absolute"
bullet.style.right = "300px"
bullet.style.bottom = "300px"
let body = document.querySelector("body")
body.style.backgroundImage = "linear-gradient(to bottom, black, rgb(10, 10, 10), black)"

glitchButton.addEventListener("click", event => {
    if (glitchStat === "false") {
        glitchStat = "true"
        glitchButton.style.border = "none"
    }
    else {
        glitchStat = "false"
        glitchButton.style.border = "1px orange solid"
    }
})

document.addEventListener("keypress", event => {
    if (event.code === "KeyI") {
        if (info.style.display === "block") {
            info.style.display = "none"
        }
        else {
            info.style.display = "block"
        }
    }
    if (event.code === "KeyG") { // Glitch keybind
        if (glitchStat === "false") {
            glitchStat = "true"
            glitchButton.style.border = "none"
        }
        else {
            glitchStat = "false"
            glitchButton.style.border = "1px orange solid"
        }
    }

    if (event.code === "KeyT") { //TrailFade keybind
        if (trailFadeStat === "true") {
            trailFadeStat = "false"
            trailFadeButton.style.border = "none"
        }
        else {
            trailFadeStat = "true"
            trailFadeButton.style.border = "1px orange solid"
        }
    }

    if (event.code === "KeyO") { //OneColor keybind
        if (oneColorStat === "false") {
            oneColorStat = "true"
            oneColorButton.style.border = "1px orange solid"
        }
        else {
            oneColorStat = "false"
            oneColorButton.style.border = "none"
        }
    }

    if (event.code === "KeyC") { //ColorPicker open
        if (colorPickerStat === "false") {
            colorPickerStat = "true"
        }
        else {
            colorPickerStat = "false"
        }
        if (colorPickerStat === "true") {
            colorPickerButton.click()
            colorPickerStat = "false"
            return true;
        }
    }
})

trailFadeButton.addEventListener("click", event => {
    if (trailFadeStat === "true") {
        trailFadeStat = "false"
        trailFadeButton.style.border = "none"
    }
    else {
        trailFadeStat = "true"
        trailFadeButton.style.border = "1px orange solid"
    }
})

oneColorButton.addEventListener("click", event => {
    if (oneColorStat === "false") {
        oneColorStat = "true"
        oneColorButton.style.border = "1px orange solid"
    }
    else {
        oneColorStat = "false"
        oneColorButton.style.border = "none"
    }
})
document.addEventListener("click", move)
function move(event) {
    if (glitchStat === "true") {
        glitch()
    }
    if (colorPickerStat === "true") {
        colorPickerButton.click()
        colorPickerStat = "false"
        document.addEventListener("keypress", event => {
            if (event.code === "Escape") {
                colorPickerButton.setAttribute("type", "text")
                colorPickerButton.setAttribute("type", "color")
                return true;
            }
        })
        return true;
    }
    function glitch() { //Run this to disable glitch
        document.addEventListener("click", event => {clearTimeout(direction)})
    }
    title.style.display = "none"
    let bulletX = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"))
    let bulletY = parseInt(window.getComputedStyle(bullet).getPropertyValue("top"))
    let direction = setTimeout(function direction(){
        if (oneColorStat === "false") {
            oneColor()
        }
        else {
            bullet.style.backgroundColor = colorPickerButton.value
            colorPickerButton.addEventListener("change", event => {
                bullet.style.backgroundColor = colorPickerButton.value
            })
        }
        if (trailFadeStat === "true") {
            trailFade()
        }
        function oneColor() {
            let R = Math.floor(Math.random()*200)
            let G = Math.floor(Math.random()*200)
            let B = Math.floor(Math.random()*200)
            bullet.style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")"
        }
        if (parseInt(event.clientY)-15 === bulletY && parseInt(event.clientX)-15 === bulletX) {
            return true;
        }
        else if (parseInt(event.clientY)-15 >= bulletY) {
            bullet.style.top = bulletY+1 + "px"
        }
        if (parseInt(event.clientY)-15 <= bulletY) {
            bullet.style.top = bulletY-1 + "px"
        }
        else if (parseInt(event.clientX)-15 >= bulletX) {
            bullet.style.left = bulletX+1 + "px"
        }
        if (parseInt(event.clientX)-15 <= bulletX) {
            bullet.style.left = bulletX-1 + "px"
        }
        let bulletColor = window.getComputedStyle(bullet).getPropertyValue("background-color")
        let clone = document.createElement("div")
        body.appendChild(clone)
        clone.style.left = bulletX + "px"
        clone.style.top = bulletY + "px"
        clone.style.backgroundColor = bulletColor
        clone.style.zIndex = "-1"
        clone.style.position = "absolute"
        clone.style.width = "30px"
        clone.style.height = "30px"
        function trailFade() {
            setTimeout(function () {
                clone.style.display = "none"
            }, 1800)
        }
        move(event)
    })
}